import type { ESLint, Linter } from 'eslint'
import type { Selection } from './config.ts'
import type { RuleOptions } from './rules.ts'

export type Capability = 'typescriptSyntax' | 'typeInformation'
// Rule providers use different SDK context types; binding preserves their runtime identity.
export interface PluginBinding {
	readonly meta?: ESLint.Plugin['meta']
	readonly rules?: Readonly<Record<string, { readonly create: (context: never) => object, readonly meta?: object | undefined }>> | undefined
	readonly processors?: ESLint.Plugin['processors']
	readonly languages?: ESLint.Plugin['languages']
}
export interface RuleInfo { readonly requires?: readonly Capability[] }
export interface BuildContext {
	readonly rootDir: string
	readonly language: 'javascript' | 'typescript' | 'json' | 'yaml' | 'toml' | 'markdown'
	readonly typeAware: boolean
}
export type PartConfig = Omit<Linter.Config, 'name' | 'plugins' | 'files' | 'ignores' | 'basePath' | 'extends'>
export interface IntegrationPart {
	readonly name: string
	readonly files?: readonly (string | readonly string[])[]
	readonly ignores?: readonly string[]
	readonly requires?: readonly Capability[]
	readonly provides?: readonly Capability[]
	readonly config: PartConfig
}
export type TypedRuleIds<Meta> = { [K in keyof Meta]: Meta[K] extends { requires: readonly (infer C)[] } ? 'typeInformation' extends C ? K : never : never }[keyof Meta]

export interface RuntimeIntegration {
	readonly id: string
	readonly plugins?: Readonly<Record<string, PluginBinding>>
	readonly overridesScope?: Selection
	readonly defaults: object
	readonly ruleMeta: Readonly<Record<string, RuleInfo>>
	configure: (options: object, context: BuildContext) => readonly IntegrationPart[]
}
export declare const integrationTypes: unique symbol
export interface Integration<Id extends string, Options extends object, Rules extends RuleOptions<keyof Rules>, Typed extends string = never> extends RuntimeIntegration {
	readonly [integrationTypes]: { id: Id, options: Options, rules: Rules, typedRules: Typed }
}
export interface IntegrationDefinition<Id extends string, Options extends object, Rules extends RuleOptions<keyof Rules>> {
	readonly id: Id
	readonly plugins?: Readonly<Record<string, PluginBinding>>
	readonly overridesScope?: Selection
	readonly defaults: Readonly<Options>
	readonly ruleMeta: Readonly<Record<Extract<keyof Rules, string>, RuleInfo>>
	configure: (options: Readonly<Options>, context: BuildContext) => readonly IntegrationPart[]
}

export type IntegrationInfo<U> = U extends { readonly [integrationTypes]: infer T } ? T : never
