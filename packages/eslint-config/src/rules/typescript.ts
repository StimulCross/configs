import type { SourceRules } from '../types/policy.ts'

export const rules = {
	'ts/ban-ts-comment': [
		'error',
		{
			'ts-expect-error': 'allow-with-description',
		},
	],
	'ts/no-array-constructor': 'error',
	'ts/no-duplicate-enum-values': 'error',
	'ts/no-dynamic-delete': 'error',
	'ts/no-empty-object-type': [
		'error',
		{
			allowInterfaces: 'always',
		},
	],
	'ts/no-explicit-any': 'warn',
	'ts/no-extra-non-null-assertion': 'error',
	'ts/no-extraneous-class': 'off',
	'ts/no-invalid-void-type': 'warn',
	'ts/no-misused-new': 'error',
	'ts/no-namespace': 'error',
	'ts/no-non-null-asserted-nullish-coalescing': 'error',
	'ts/no-non-null-asserted-optional-chain': 'error',
	'ts/no-non-null-assertion': 'warn',
	'ts/no-require-imports': 'error',
	'ts/no-this-alias': 'error',
	'ts/no-unnecessary-type-constraint': 'error',
	'ts/no-unsafe-declaration-merging': 'error',
	'ts/no-unsafe-function-type': 'error',
	'ts/no-unused-expressions': [
		'error',
		{
			allowShortCircuit: true,
			allowTaggedTemplates: true,
			allowTernary: true,
		},
	],
	'ts/no-unused-vars': 'off',
	'ts/no-useless-constructor': 'off',
	'ts/no-wrapper-object-types': 'error',
	'ts/prefer-as-const': 'error',
	'ts/prefer-literal-enum-member': 'error',
	'ts/prefer-namespace-keyword': 'error',
	'ts/triple-slash-reference': 'error',
	'ts/unified-signatures': 'off',
	'ts/consistent-type-definitions': [
		'error',
		'interface',
	],
	'ts/consistent-type-imports': [
		'error',
		{
			disallowTypeAnnotations: false,
			fixStyle: 'separate-type-imports',
			prefer: 'type-imports',
		},
	],
	'ts/method-signature-style': [
		'error',
		'property',
	],
	'ts/no-dupe-class-members': 'error',
	'ts/no-import-type-side-effects': 'error',
	'ts/no-redeclare': [
		'error',
		{
			builtinGlobals: false,
		},
	],
	'ts/no-use-before-define': [
		'error',
		{
			functions: false,
			classes: false,
			variables: true,
			typedefs: false,
		},
	],
	'ts/consistent-type-assertions': [
		'warn',
		{
			assertionStyle: 'as',
			objectLiteralTypeAssertions: 'allow-as-parameter',
		},
	],
	'ts/explicit-function-return-type': [
		'warn',
		{
			allowExpressions: true,
			allowHigherOrderFunctions: true,
			allowConciseArrowFunctionExpressionsStartingWithVoid: true,
		},
	],
	'ts/explicit-member-accessibility': [
		'warn',
		{
			accessibility: 'explicit',
			overrides: {
				constructors: 'no-public',
			},
		},
	],
	'ts/no-confusing-non-null-assertion': 'error',
	'ts/no-invalid-this': 'error',
	'ts/prefer-for-of': 'warn',
	'ts/await-thenable': 'error',
	'ts/dot-notation': [
		'error',
		{
			allowKeywords: true,
		},
	],
	'ts/no-floating-promises': 'error',
	'ts/no-for-in-array': 'error',
	'ts/no-implied-eval': 'error',
	'ts/no-misused-promises': 'error',
	'ts/no-unnecessary-type-assertion': 'error',
	'ts/no-unsafe-argument': 'error',
	'ts/no-unsafe-assignment': 'error',
	'ts/no-unsafe-call': 'error',
	'ts/no-unsafe-member-access': 'error',
	'ts/no-unsafe-return': 'error',
	'ts/promise-function-async': 'error',
	'ts/restrict-plus-operands': 'error',
	'ts/restrict-template-expressions': 'error',
	'ts/return-await': [
		'error',
		'always',
	],
	'ts/strict-boolean-expressions': 'off',
	'ts/switch-exhaustiveness-check': [
		'error',
		{
			allowDefaultCaseForExhaustiveSwitch: true,
			considerDefaultExhaustiveForUnions: true,
		},
	],
	'ts/unbound-method': 'error',
	'ts/no-redundant-type-constituents': 'off',
	'ts/naming-convention': [
		'warn',
		// General naming
		{
			selector: 'default',
			format: ['camelCase'],
			leadingUnderscore: 'forbid',
			trailingUnderscore: 'forbid',
		},
		{
			selector: 'import',
			format: ['camelCase', 'PascalCase'],
		},

		// Variables
		{
			selector: 'variable',
			format: ['camelCase'],
			leadingUnderscore: 'allow',
		},
		{
			selector: 'variable',
			modifiers: ['const'],
			format: ['camelCase', 'UPPER_CASE'],
			leadingUnderscore: 'allow',
		},
		{
			selector: 'variable',
			types: ['function'],
			format: ['camelCase', 'PascalCase'],
			leadingUnderscore: 'allow',
		},

		// Functions and parameters
		{
			selector: 'parameter',
			format: ['camelCase'],
			leadingUnderscore: 'allow',
		},
		{
			selector: 'function',
			format: ['camelCase', 'PascalCase'],
		},

		// Types
		{
			selector: 'typeLike',
			format: ['PascalCase'],
		},
		{
			selector: 'enumMember',
			format: ['PascalCase', 'UPPER_CASE'],
		},

		// Contract properties
		{
			selector: 'objectLiteralProperty',
			format: null,
		},
		{
			selector: 'typeProperty',
			format: null,
		},

		// Non-public members
		{
			selector: 'memberLike',
			modifiers: ['private'],
			format: ['camelCase'],
			leadingUnderscore: 'require',
		},
		{
			selector: 'memberLike',
			modifiers: ['protected'],
			format: ['camelCase'],
			leadingUnderscore: 'require',
		},
	],
	'ts/no-base-to-string': 'warn',
	'ts/no-meaningless-void-operator': 'error',
	'ts/no-unnecessary-boolean-literal-compare': 'error',
	'ts/no-unnecessary-condition': 'warn',
	'ts/no-unnecessary-type-arguments': 'error',
	'ts/non-nullable-type-assertion-style': 'error',
	'ts/only-throw-error': 'error',
	'ts/prefer-includes': 'error',
	'ts/prefer-nullish-coalescing': [
		'error',
		{
			ignorePrimitives: true,
		},
	],
	'ts/prefer-optional-chain': 'warn',
	'ts/prefer-readonly': 'error',
	'ts/prefer-regexp-exec': 'warn',
	'ts/prefer-string-starts-ends-with': 'error',
	'ts/require-array-sort-compare': 'error',
} satisfies SourceRules
