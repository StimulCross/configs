import type { SourceRules } from '../types/policy.ts'

export const rules = {
	'unused-imports/no-unused-imports': 'error',
	'unused-imports/no-unused-vars': [
		'error',
		{
			args: 'after-used',
			argsIgnorePattern: '^_',
			ignoreRestSiblings: true,
			vars: 'all',
			varsIgnorePattern: '^_',
		},
	],
} satisfies SourceRules
