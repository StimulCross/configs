import type { ESLint, Linter } from 'eslint'
import type { Config } from 'eslint/config'
import type { BuildContext, Capability, RuntimeIntegration, RuntimeIntegrationOptions, RuntimeLayer, RuntimePreset, RuntimeScope, Selection, TypeAwareMode } from '../types/index.ts'
import { defineConfig as nativeConfig } from 'eslint/config'
import { catalog } from '../integrations/catalog.ts'
import { assertPreset } from '../utils/branding.ts'
import { copy } from '../utils/copy.ts'
import { enabled } from '../utils/rules.ts'
import { rebaseSelection, scopePath } from '../utils/scope-paths.ts'

const coreRules = new Set(Object.keys(catalog['javascript'] ?? {}).filter(id => !id.includes('/')))
const domains: Record<BuildContext['language'], string> = {
	javascript: '**/*.{js,jsx,mjs,cjs}',
	typescript: '**/*.{ts,tsx,mts,cts}',
	json: '**/*.{json,jsonc,json5}',
	yaml: '**/*.{yaml,yml}',
	toml: '**/*.toml',
	markdown: '**/*.md',
}

/** ESLint owns all pattern intersection, exclusion and validation. */
export function scopeConfigs(selection: Selection & { basePath?: string }, configs: Config[]): Linter.Config[] {
	const children = configs.flatMap(config => {
		if (!config.basePath)
			return [config]

		const { basePath, files, ignores, ...settings } = config
		const base = scopePath('', basePath)

		return scopeConfigs(rebaseSelection(base, {}), scopeConfigs(rebaseSelection(base, {
			...(files
				? { files }
				: {}),
			...(ignores
				? { ignores }
				: {}),
		}), [settings]))
	})

	return nativeConfig({
		files: selection.files
			? selection.files.map(group => typeof group === 'string'
					? group
					: [...group])
			: ['**/*'],
		...(selection.ignores
			? {
					ignores: [...selection.ignores],
				}
			: {}),
		...(selection.basePath
			? { basePath: selection.basePath }
			: {}),
		extends: children,
	})
}

export function compile(preset: RuntimePreset, rootDir: string): Linter.Config[] {
	const registry = new Map<string, RuntimeIntegration>()
	const layers: RuntimeLayer[] = []
	const ignores: string[] = []
	const visiting = new Set<RuntimePreset>()

	function visit(current: RuntimePreset): void {
		assertPreset(current)

		if (visiting.has(current))
			throw new TypeError('Circular preset inheritance.')

		visiting.add(current)

		for (const parent of current.parents) visit(parent)

		for (const integration of current.use) {
			if (registry.has(integration.id) && registry.get(integration.id) !== integration)
				throw new TypeError(`Different definitions of integration ${integration.id}.`)

			registry.set(integration.id, integration)
		}

		ignores.push(...current.globalIgnores)
		layers.push(current.input)
		visiting.delete(current)
	}

	visit(preset)
	const owners = new Map<string, RuntimeIntegration>()

	for (const integration of registry.values()) {
		for (const id of Object.keys(integration.ruleMeta)) {
			if (owners.has(id))
				throw new TypeError(`Multiple owners of rule ${id}.`)

			owners.set(id, integration)
		}
	}

	const state = new Map(Array.from(registry, ([id, integration]) => [
		id,
		{
			integration,
			active: true,
			options: copy(integration.defaults),
			disabledAt: -1,
		},
	]))
	let mode: TypeAwareMode = 'auto'
	let typesDisabledAt = -1

	for (const [index, layer] of layers.entries()) {
		if (layer.typeAware !== undefined) {
			mode = layer.typeAware

			if (mode === false)
				typesDisabledAt = index

			// eslint-disable-next-line ts/no-unnecessary-condition
			if (mode !== 'auto' && typeof mode !== 'boolean' && (typeof mode !== 'object' || mode === null))
				throw new TypeError('typeAware must be auto, boolean or a selection.')
		}

		for (const [id, setting] of Object.entries(layer.integrations ?? {})) {
			const item = state.get(id)

			if (!item)
				throw new TypeError(`Unknown integration ${id}.`)

			item.active = setting !== false

			if (setting === false) {
				item.disabledAt = index

				if (id === 'typescript')
					typesDisabledAt = index
			}
			else if (typeof setting === 'object') {
				const { overrides: _overrides, overridesTypeAware: _typed, ...options } = setting

				item.options = {
					...item.options,
					...copy(options),
				}
			}
		}
	}

	const ts = state.get('typescript')?.active ?? false

	if (!ts && mode !== false && mode !== 'auto')
		throw new TypeError('typeAware requires the typescript integration.')

	const typedSelection: Selection = {
		files: mode === true
			? ['**/*.{js,jsx,mjs,cjs,ts,tsx,mts,cts}']
			: ['**/*.{ts,tsx,mts,cts}'],
		...(typeof mode === 'object'
			? mode
			: {}),
		ignores: [
			'**/*.md/**',
			...(typeof mode === 'object'
				? mode.ignores ?? []
				: []),
		],
	}
	const plugins: Record<string, ESLint.Plugin> = {}
	const pluginOwners = new Map<string, string>()

	function bind(integration: RuntimeIntegration): void {
		for (const [namespace, plugin] of Object.entries(integration.plugins ?? {})) {
			if (plugins[namespace] && plugins[namespace] !== plugin)
				throw new TypeError(`Plugin namespace ${namespace} conflicts between ${pluginOwners.get(namespace)} and ${integration.id}.`)

			for (const [name, rule] of Object.entries(plugin.rules ?? {})) {
				if (typeof rule.create !== 'function')
					throw new TypeError(`Plugin rule ${namespace}/${name} must expose create().`)
			}

			plugins[namespace] = plugin as ESLint.Plugin
			pluginOwners.set(namespace, integration.id)
		}
	}

	for (const item of state.values()) {
		if (item.active)
			bind(item.integration)
	}

	function parts(language: BuildContext['language'], typed: boolean): Linter.Config[] {
		const candidates = []
		const providers = new Set<Capability>()

		for (const item of state.values()) {
			if (!item.active)
				continue

			for (const part of item.integration.configure(copy(item.options), { rootDir, language, typeAware: typed })) {
				for (const key of [
					'files',
					'ignores',
					'basePath',
					'extends',
					'plugins',
				]) {
					if (key in part.config)
						throw new TypeError(`${item.integration.id}/${part.name} must not set ${key}.`)
				}

				for (const [id, entry] of Object.entries(part.config.rules ?? {})) {
					if (!coreRules.has(id) && !owners.has(id))
						throw new TypeError(`Undeclared rule ${id}.`)

					if (entry !== undefined && enabled(entry) && owners.get(id)?.ruleMeta[id]?.requires?.some(cap => !part.requires?.includes(cap)))
						throw new TypeError(`Part ${item.integration.id}/${part.name} must declare requirements of ${id}.`)
				}

				if (!typed && part.requires?.includes('typeInformation'))
					continue

				for (const capability of part.provides ?? []) {
					if (capability === 'typeInformation' && !typed)
						throw new TypeError('A typeInformation provider requires typed context.')

					if (providers.has(capability))
						throw new TypeError(`Conflicting providers of ${capability}.`)

					providers.add(capability)
				}

				const rules = Object.fromEntries(Object.entries(part.config.rules ?? {}).filter(([id]) => {
					const owner = owners.get(id)

					return !owner || state.get(owner.id)?.active
				}))

				candidates.push({
					part,
					config: {
						...copy(part.config),
						rules,
						name: `${item.integration.id}/${part.name}`,
					},
				})
			}
		}

		return candidates.flatMap(({ part, config }) => {
			const missing = part.requires?.filter(cap => !providers.has(cap)) ?? []

			if (missing.length > 0) {
				if (!typed && language === 'javascript' && missing.every(cap => cap === 'typescriptSyntax'))
					return []

				throw new TypeError(`${config.name} requires ${missing.join(', ')}.`)
			}

			return scopeConfigs({
				...(part.files
					? { files: part.files }
					: {}),
				...(part.ignores
					? { ignores: part.ignores }
					: {}),
			}, [config])
		})
	}

	const output: Config[] = [
		{ plugins },
	]

	for (const [language, pattern] of Object.entries(domains) as [BuildContext['language'], string][]) {
		output.push(...scopeConfigs({
			files: [pattern],
		}, parts(language, false)))
	}

	if (ts && mode !== false) {
		for (const language of ['javascript', 'typescript'] as const) {
			output.push(...scopeConfigs(typedSelection, scopeConfigs({
				files: [domains[language]],
			}, parts(language, true))))
		}
	}

	function overrides(scope: RuntimeScope, index: number, parentBase = '', integrationPatch = false): Config[] {
		if ('integrations' in scope || 'typeAware' in scope || 'scopes' in scope)
			throw new TypeError('Integration and typeAware switches belong to separate configurations, not scopes.')

		if (scope.languageOptions && ('parser' in scope.languageOptions || 'parserOptions' in scope.languageOptions))
			throw new TypeError('Configure parserOptions through their integration.')

		const ordinary: Linter.RulesRecord = {}
		const syntax: Linter.RulesRecord = {}
		const typed: Linter.RulesRecord = {}

		for (const [id, entry] of Object.entries(scope.rules ?? {})) {
			const owner = owners.get(id)

			if (!owner && !coreRules.has(id))
				throw new TypeError(`Unknown rule ${id}.`)

			const item = owner
				? state.get(owner.id)
				: undefined

			if (item && !item.active && index < item.disabledAt)
				continue

			const needs = owner?.ruleMeta[id]?.requires ?? []

			if (!ts && needs.length > 0 && (integrationPatch || index < typesDisabledAt))
				continue

			if (needs.includes('typeInformation') && mode === false) {
				if (integrationPatch || index < typesDisabledAt || !enabled(entry))
					continue

				throw new TypeError(`Explicit rule ${id} requires typeInformation.`)
			}

			if (enabled(entry) && needs.length > 0 && !ts)
				throw new TypeError(`Explicit rule ${id} requires ${needs.join(', ')}.`)

			if (owner)
				bind(owner)

			const target = needs.includes('typeInformation')
				? typed
				: needs.includes('typescriptSyntax')
					? syntax
					: ordinary
			target[id] = copy(entry)
		}

		const children: Config[] = []
		const { rules: _rules, extends: parents, files, ignores: localIgnores, basePath, ...settings } = scope
		const localBase = scopePath(parentBase, basePath)

		for (const parent of parents ?? []) children.push(...overrides(parent, index, localBase, integrationPatch))

		children.push({
			rules: ordinary,
			...(settings.name
				? { name: settings.name }
				: {}),
			...(settings.languageOptions
				? {
						languageOptions: copy(settings.languageOptions),
					}
				: {}),
			...(settings.settings
				? {
						settings: copy(settings.settings),
					}
				: {}),
			...(settings.linterOptions
				? {
						linterOptions: copy(settings.linterOptions),
					}
				: {}),
		})

		if (Object.keys(syntax).length > 0) {
			children.push(...scopeConfigs({
				files: [domains.typescript],
			}, [
				{ rules: syntax },
			]))

			if (ts && mode !== false) {
				children.push(...scopeConfigs(typedSelection, scopeConfigs({
					files: [domains.javascript],
				}, [
					{ rules: syntax },
				])))
			}
		}

		if (Object.keys(typed).length > 0 && mode !== false) {
			children.push(...scopeConfigs(typedSelection, [
				{ rules: typed },
			]))
		}

		const scoped = scopeConfigs(rebaseSelection(localBase, {
			...(files
				? { files }
				: {}),
			...(localIgnores
				? { ignores: localIgnores }
				: {}),
		}), children)

		return localBase
			? scopeConfigs(rebaseSelection(localBase, {}), scoped)
			: scoped
	}

	function integrationOverrides(integration: RuntimeIntegration, setting: RuntimeIntegrationOptions, index: number): Config[] {
		const result: Config[] = []

		for (const [kind, rules] of [
			['overrides', setting.overrides],
			['overridesTypeAware', setting.overridesTypeAware],
		] as const) {
			if (!rules)
				continue

			for (const id of Object.keys(rules)) {
				if (!(id in integration.ruleMeta) && !coreRules.has(id))
					throw new TypeError(`Rule ${id} is not provided by integration ${integration.id}.`)

				if (kind === 'overridesTypeAware' && !owners.get(id)?.ruleMeta[id]?.requires?.includes('typeInformation'))
					throw new TypeError(`${integration.id}.overridesTypeAware: ${id} does not require typeInformation.`)
			}

			if (!state.get(integration.id)?.active || (kind === 'overridesTypeAware' && (!ts || mode === false)))
				continue

			const patch = overrides({ rules }, index, '', true)
			const selection = integration.overridesScope ?? {
				files: ['**/*.{js,jsx,mjs,cjs,ts,tsx,mts,cts}'],
			}
			result.push(...scopeConfigs(selection, patch))

			// TypeScript also owns syntax rules on explicitly typed JS files.
			if (integration.id === 'typescript' && ts && mode !== false) {
				result.push(...scopeConfigs(typedSelection, scopeConfigs({
					files: [domains.javascript],
				}, patch)))
			}
		}

		return result
	}

	for (const [index, layer] of layers.entries()) {
		for (const [id, setting] of Object.entries(layer.integrations ?? {})) {
			if (typeof setting === 'object')
				output.push(...integrationOverrides(registry.get(id)!, setting, index))
		}

		const { integrations: _integrations, typeAware: _mode, scopes, ...settings } = layer
		output.push(...overrides(settings, index))

		for (const scope of scopes ?? []) output.push(...overrides(scope, index))
	}

	return [
		...(ignores.length > 0
			? [
					{ basePath: rootDir, ignores },
				]
			: []),
		...output,
	]
}
