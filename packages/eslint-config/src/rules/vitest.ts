import type { SourceRules } from '../types/policy.ts'

export const rules = {
	'test/consistent-test-it': [
		'error',
		{
			fn: 'it',
			withinDescribe: 'it',
		},
	],
	'test/no-identical-title': 'error',
	'test/no-import-node-test': 'error',
	'test/prefer-hooks-in-order': 'error',
	'test/prefer-lowercase-title': 'error',
} satisfies SourceRules
