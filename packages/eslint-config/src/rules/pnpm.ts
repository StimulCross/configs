import type { SourceRules } from '../types/policy.ts'

export const rules = {
	'pnpm/json-prefer-workspace-settings': [
		'error',
		{
			autofix: true,
		},
	],
	'pnpm/json-valid-catalog': [
		'error',
		{
			autofix: true,
		},
	],
	'pnpm/yaml-enforce-settings': [
		'error',
		{
			settings: {
				minimumReleaseAgeExcludePrune: true,
				shellEmulator: true,
				trustPolicy: 'no-downgrade',
			},
		},
	],
	'pnpm/yaml-no-duplicate-catalog-item': 'error',
	'pnpm/yaml-no-unused-catalog-item': 'error',
	'pnpm/yaml-blank-lines': 'error',
} satisfies SourceRules
