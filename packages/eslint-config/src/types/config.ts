import type { Linter } from 'eslint'
import type { IntegrationInfo, RuntimeIntegration } from './integration.ts'
import type { Rules } from './rules.ts'

type Ids<U> = IntegrationInfo<U> extends infer T ? T extends { id: infer I extends string } ? I : never : never
type OptionsFor<U, Id> = IntegrationInfo<U> extends infer T ? T extends { id: Id, options: infer O } ? O : never : never

type IntegrationFor<U, Id> = U extends RuntimeIntegration ? IntegrationInfo<U> extends { id: Id } ? U : never : never
type TypedIds<U> = IntegrationInfo<U> extends infer T ? T extends { typedRules: infer K extends string } ? K : never : never

export interface IntegrationOverrides<U> {
	readonly overrides?: Rules<U>
	readonly overridesTypeAware?: [TypedIds<U>] extends [never] ? never : Pick<Rules<U>, Extract<TypedIds<U>, keyof Rules<U>>>
}
export type IntegrationSettings<U> = { [K in Ids<U>]?: boolean | (Partial<OptionsFor<U, K>> & IntegrationOverrides<IntegrationFor<U, K>>) }
export interface RuntimeIntegrationOptions {
	readonly overrides?: Readonly<Record<string, Linter.RuleEntry>>
	readonly overridesTypeAware?: Readonly<Record<string, Linter.RuleEntry>>
}

export interface Selection {
	readonly files?: readonly (string | readonly string[])[]
	readonly ignores?: readonly string[]
}
export type TypeAwareMode = 'auto' | boolean | Selection
export type ManagedLanguageOptions = Omit<NonNullable<Linter.Config['languageOptions']>, 'parser' | 'parserOptions'> & { readonly parser?: never, readonly parserOptions?: never }
export interface Scope<U extends RuntimeIntegration> extends Selection {
	readonly name?: string
	readonly basePath?: string
	readonly rules?: Rules<U>
	readonly languageOptions?: ManagedLanguageOptions
	readonly settings?: Linter.Config['settings']
	readonly linterOptions?: Linter.Config['linterOptions']
	readonly extends?: readonly Scope<U>[]
}
export interface Layer<U extends RuntimeIntegration> {
	readonly name?: string
	readonly integrations?: IntegrationSettings<U>
	readonly typeAware?: TypeAwareMode
	readonly rules?: Rules<U>
	readonly languageOptions?: ManagedLanguageOptions
	readonly settings?: Linter.Config['settings']
	readonly linterOptions?: Linter.Config['linterOptions']
	readonly scopes?: readonly Scope<U>[]
}
export interface RuntimeScope extends Selection {
	readonly name?: string
	readonly basePath?: string
	readonly rules?: Readonly<Record<string, Linter.RuleEntry>>
	readonly languageOptions?: ManagedLanguageOptions
	readonly settings?: Linter.Config['settings']
	readonly linterOptions?: Linter.Config['linterOptions']
	readonly extends?: readonly RuntimeScope[]
}
export interface RuntimeLayer extends Omit<RuntimeScope, 'extends'> {
	readonly integrations?: Readonly<Record<string, boolean | (object & RuntimeIntegrationOptions)>>
	readonly typeAware?: TypeAwareMode
	readonly scopes?: readonly RuntimeScope[]
}
export interface RuntimePreset {
	readonly input: RuntimeLayer
	readonly parents: readonly RuntimePreset[]
	readonly use: readonly RuntimeIntegration[]
	readonly globalIgnores: readonly string[]
}
export declare const presetTypes: unique symbol
export interface Preset<U extends RuntimeIntegration = never> extends RuntimePreset { readonly [presetTypes]: U }
export type Members<P> = P extends Preset<infer U> ? U : never
export type Input<Uses extends readonly RuntimeIntegration[], Parents extends readonly Preset<RuntimeIntegration>[]> = Layer<Uses[number] | Members<Parents[number]>> & { readonly use?: Uses, readonly extends?: Parents, readonly globalIgnores?: readonly string[] }
