import type { Linter } from 'eslint'
import type { TypeScriptOptions } from '../types/builtins.ts'
import type { BuildContext, Capability, IntegrationPart, RuleInfo } from '../types/index.ts'
import markdown from '@eslint/markdown'
import * as tsParser from '@typescript-eslint/parser'
import { mergeProcessors, processorPassThrough } from 'eslint-merge-processors'
import * as tomlParser from 'toml-eslint-parser'
import * as yamlParser from 'yaml-eslint-parser'
import { catalog } from './catalog.ts'
import { policy } from './defaults.ts'

const markdownProcessor = mergeProcessors([markdown.processors.markdown, processorPassThrough])
const info: Record<string, RuleInfo> = Object.fromEntries(Object.values(catalog).flatMap(Object.entries))
const code = (context: BuildContext): boolean => context.language === 'javascript' || context.language === 'typescript'

function enabled(value: Linter.RuleEntry): boolean {
	return !['off', 0].includes(Array.isArray(value)
		? value[0]
		: value)
}

export function configureBuiltin(id: string, context: BuildContext, options: TypeScriptOptions = {}): IntegrationPart[] {
	const parts: IntegrationPart[] = []

	if (id === 'typescript') {
		for (const key of ['project', 'projectService', 'tsconfigRootDir']) {
			if (options.parserOptions && key in options.parserOptions)
				throw new TypeError(`parserOptions.${key} is managed by the TypeScript integration; use typeAware, projectService and rootDir.`)
		}

		if (!code(context))
			return []

		if (context.language === 'typescript' || context.typeAware) {
			parts.push({
				name: 'parser',
				provides: ['typescriptSyntax'],
				config: {
					languageOptions: {
						parser: tsParser,
						parserOptions: {
							ecmaFeatures: { jsx: true },
							...options.parserOptions,
						},
					},
				},
			})
		}

		if (context.typeAware) {
			parts.push({
				name: 'project-service',
				requires: ['typescriptSyntax'],
				provides: ['typeInformation'],
				config: {
					languageOptions: {
						parserOptions: { projectService: options.projectService ?? true, tsconfigRootDir: context.rootDir },
					},
				},
			})
		}
	}

	for (const part of policy[id] ?? []) {
		const groups = new Map<string, { requires: Capability[], rules: Record<string, Linter.RuleEntry> }>()
		groups.set('', { requires: [], rules: {} })

		for (const [rule, entry] of Object.entries(part.rules)) {
			const requires = enabled(entry)
				? [
						...info[rule]?.requires ?? [],
					]
				: []
			const key = requires.join(',')

			if (!groups.has(key))
				groups.set(key, { requires, rules: {} })

			groups.get(key)!.rules[rule] = entry
		}

		for (const [key, group] of groups) {
			if (key && Object.keys(group.rules).length === 0)
				continue

			const languageOptions = key ? undefined : part.languageOptions

			parts.push({
				name: `${part.name}${key
					? `/${key}`
					: ''}`,
				...(part.files && !(id === 'typescript' && context.language === 'javascript' && context.typeAware)
					? { files: part.files }
					: {}),
				...(part.ignores
					? { ignores: part.ignores }
					: {}),
				...(group.requires.length > 0
					? { requires: group.requires }
					: {}),
				config: {
					rules: group.rules,
					...(!key && part.language
						? { language: part.language }
						: {}),
					...(!key && (languageOptions || id === 'yaml' || id === 'toml')
						? {
								languageOptions: {
									...languageOptions,
									...(id === 'yaml'
										? { parser: yamlParser }
										: id === 'toml'
											? { parser: tomlParser }
											: {}),
								},
							}
						: {}),
					...(!key && part.settings
						? { settings: part.settings }
						: {}),
					...(!key && part.linterOptions
						? { linterOptions: part.linterOptions }
						: {}),
					...(!key && part.processor
						? { processor: markdownProcessor }
						: {}),
				},
			})
		}
	}

	return parts
}
