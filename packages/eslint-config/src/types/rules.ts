import type { Linter } from 'eslint'
import type { RuleOptions as CoreOptions } from './generated/javascript.ts'
import type { IntegrationInfo } from './integration.ts'

export type RuleOptions<Keys extends PropertyKey = string> = { [K in Keys]: unknown[] }
export type { RuleOptions as CoreOptions } from './generated/javascript.js'

type RuleIds<U> = IntegrationInfo<U> extends infer T ? T extends { rules: infer R } ? keyof R : never : never
type OptionsForRule<U, K> = IntegrationInfo<U> extends infer T ? T extends { rules: infer R }
	? K extends keyof R ? R[K] : never : never : never

export type Rules<U> = {
	[K in Extract<keyof CoreOptions | RuleIds<U>, string>]?: Linter.RuleEntry<
		K extends keyof CoreOptions ? CoreOptions[K] : Extract<OptionsForRule<U, K>, unknown[]>
	>
}
