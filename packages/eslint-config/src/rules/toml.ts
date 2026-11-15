import type { SourceRules } from '../types/policy.ts'

export const rules = {
	'toml/comma-style': 'error',
	'toml/keys-order': 'error',
	'toml/no-space-dots': 'error',
	'toml/no-unreadable-number-separator': 'error',
	'toml/precision-of-fractional-seconds': 'error',
	'toml/precision-of-integer': 'error',
	'toml/tables-order': 'error',
	'toml/vue-custom-block/no-parsing-error': 'error',
	'toml/array-bracket-newline': 'error',
	'toml/array-bracket-spacing': 'error',
	'toml/array-element-newline': 'error',
	'toml/indent': [
		'error',
		'tab',
	],
	'toml/inline-table-curly-spacing': 'error',
	'toml/key-spacing': 'error',
	'toml/padding-line-between-pairs': 'error',
	'toml/padding-line-between-tables': 'error',
	'toml/quoted-keys': 'error',
	'toml/spaced-comment': 'error',
	'toml/table-bracket-spacing': 'error',
} satisfies SourceRules
