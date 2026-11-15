import type { SourceRules } from '../types/policy.ts'

export const rules = {
	'antfu/no-top-level-await': 'error',
	'antfu/import-dedupe': 'error',
	'antfu/no-import-dist': 'error',
	'antfu/no-import-node-modules-by-path': 'error',
	'antfu/consistent-chaining': 'error',
	'antfu/consistent-list-newline': 'error',
	'antfu/curly': 'error',
	'antfu/if-newline': 'error',
	'antfu/reasonable-newline': 'error',
	'antfu/top-level-function': 'error',
} satisfies SourceRules
