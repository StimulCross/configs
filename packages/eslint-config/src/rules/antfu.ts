import type { SourceRules } from '../types/policy.ts'

export const rules = {
	'antfu/no-top-level-await': 'error',
	'antfu/import-dedupe': 'error',
	'antfu/no-import-dist': 'error',
	'antfu/no-import-node-modules-by-path': 'error',
	'antfu/consistent-chaining': 'error',
	'antfu/consistent-list-newline': 'error',
	'antfu/curly': 'off',
	'antfu/if-newline': 'error',
	'antfu/reasonable-newline': 'off',
	'antfu/top-level-function': 'off',
} satisfies SourceRules
