import type { Linter } from 'eslint'
import type { BuiltinIntegration } from '../integrations/index.ts'
import type { ConfigFactory, ConfigOptions, FlatConfig, Members, Preset, PresetInput, RuntimeIntegration } from '../types/index.ts'
import { existsSync } from 'node:fs'
import { isAbsolute, join } from 'node:path'
import { includeIgnoreFile } from 'eslint/config'
import { builtinIntegrations } from '../integrations/index.ts'
import { base } from '../preset.ts'
import { copy } from '../utils/copy.ts'
import { compile, scopeConfigs } from './compiler.ts'
import { definePreset as createPreset } from './factories.ts'

/** Create reusable settings without binding them to a consumer directory. */
export function definePreset<const U extends readonly RuntimeIntegration[] = readonly [], const P extends readonly Preset<RuntimeIntegration>[] = readonly []>(
	input: PresetInput<U, P>,
): Preset<Exclude<U[number] | Members<P[number]>, BuiltinIntegration>> {
	const use = [
		...builtinIntegrations,
		...input.use ?? [],
	] as const

	return createPreset<typeof use, P>({ ...input, use }) as Preset<Exclude<U[number] | Members<P[number]>, BuiltinIntegration>>
}

export function defineConfig<const U extends readonly RuntimeIntegration[] = readonly [], const P extends readonly Preset<RuntimeIntegration>[] = readonly []>(
	input: ConfigOptions<U, P>,
	...raw: Linter.Config[]
): FlatConfig[] {
	const { rootDir, gitignore = true, files, ignores, ...settings } = input

	if (!isAbsolute(rootDir))
		throw new TypeError('rootDir must be absolute.')

	const preset = definePreset(settings)
	const compiled = compile(createPreset({
		extends: [base, preset],
	}), rootDir)
	const ignoreFile = join(rootDir, '.gitignore')

	return [
		...(gitignore && existsSync(ignoreFile)
			? [
					includeIgnoreFile(ignoreFile),
				]
			: []),
		...compiled.filter(config => config.ignores && !config.files),
		...scopeConfigs({
			basePath: rootDir,
			...(files
				? { files }
				: {}),
			...(ignores
				? { ignores }
				: {}),
		}, [
			...compiled.filter(config => !config.ignores || config.files !== undefined),
			...raw,
		]),
	]
}

/** Bind consumer defaults; each invocation still creates an independent complete config. */
export function createConfigFactory<const U extends readonly RuntimeIntegration[] = readonly [], const P extends readonly Preset<RuntimeIntegration>[] = readonly []>(input: ConfigOptions<U, P>): ConfigFactory<Exclude<U[number] | Members<P[number]>, BuiltinIntegration>> {
	const { rootDir, gitignore, files, ignores, ...settings } = copy(input)

	if (!isAbsolute(rootDir))
		throw new TypeError('rootDir must be absolute.')

	const shared = definePreset(settings)

	return (local = {}, ...raw) => {
		const { rootDir: localRoot = rootDir, gitignore: localGit = gitignore, files: localFiles = files, ignores: localIgnores = ignores, extends: parents = [], ...options } = local
		const inherited = [shared, ...parents] as const
		const use = local.use ?? []

		return defineConfig<typeof use, typeof inherited>({
			...options,
			use,
			rootDir: localRoot,
			...(localGit !== undefined
				? { gitignore: localGit }
				: {}),
			...(localFiles
				? { files: localFiles }
				: {}),
			...(localIgnores
				? { ignores: localIgnores }
				: {}),
			extends: inherited,
		}, ...raw)
	}
}
