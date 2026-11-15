import type { Linter } from 'eslint'

export interface PolicyPart {
	name: string
	files?: string[]
	ignores?: string[]
	rules: Record<string, Linter.RuleEntry>
	language?: string
	languageOptions?: Linter.LanguageOptions
	settings?: Linter.Config['settings']
	linterOptions?: Linter.Config['linterOptions']
	processor?: { $processor: 'markdown' }
}
export type Policy = Record<string, PolicyPart[]>
export type SourceRules = Record<string, Linter.RuleEntry>
