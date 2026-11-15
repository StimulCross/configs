import type { Linter } from 'eslint'
import type { BuiltinIntegration } from '../integrations/index.ts'
import type { Layer, Members, Preset, Selection } from './config.ts'
import type { RuntimeIntegration } from './integration.ts'

/** Named result keeps consumer declarations independent of transitive ESLint types. */
export interface FlatConfig extends Linter.Config {}

export type PresetInput<U extends readonly RuntimeIntegration[] = readonly [], P extends readonly Preset<RuntimeIntegration>[] = readonly []>
	= Layer<BuiltinIntegration | U[number] | Members<P[number]>> & { use?: U, extends?: P, globalIgnores?: readonly string[] }
export type ConfigOptions<U extends readonly RuntimeIntegration[] = readonly [], P extends readonly Preset<RuntimeIntegration>[] = readonly []>
	= PresetInput<U, P> & { rootDir: string, gitignore?: boolean } & Selection

export type FactoryConfigOptions<Inherited extends RuntimeIntegration, U extends readonly RuntimeIntegration[] = readonly [], P extends readonly Preset<RuntimeIntegration>[] = readonly []>
	= Layer<BuiltinIntegration | Inherited | U[number] | Members<P[number]>> & Selection & {
		use?: U
		extends?: P
		globalIgnores?: readonly string[]
		rootDir?: string
		gitignore?: boolean
	}
export interface ConfigFactory<Inherited extends RuntimeIntegration> {
	<const U extends readonly RuntimeIntegration[] = readonly [], const P extends readonly Preset<RuntimeIntegration>[] = readonly []>(input?: FactoryConfigOptions<Inherited, U, P>, ...raw: Linter.Config[]): FlatConfig[]
}
