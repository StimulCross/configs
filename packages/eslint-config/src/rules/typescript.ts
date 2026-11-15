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
		{
			selector: 'default',
			format: [
				'camelCase',
			],
			leadingUnderscore: 'allow',
			trailingUnderscore: 'allow',
		},
		{
			selector: 'variable',
			format: [
				'camelCase',
				'UPPER_CASE',
			],
			leadingUnderscore: 'allow',
			trailingUnderscore: 'allow',
		},
		{
			selector: 'variable',
			types: [
				'boolean',
			],
			format: [
				'camelCase',
				'PascalCase',
			],
			prefix: [
				'is',
				'are',
				'was',
				'were',
				'has',
				'have',
				'had',
				'should',
				'would',
				'could',
				'will',
				'did',
				'does',
				'do',
				'can',
				'could',
				'may',
				'might',
				'exists',
				'contains',
				'includes',
				'supports',
				'needs',
				'requires',
				'show',
				'hide',
				'visible',
				'hidden',
				'collapsed',
				'expanded',
				'ready',
				'done',
				'pending',
				'loading',
				'active',
				'enabled',
				'disabled',
				'checked',
				'selected',
			],
		},
		{
			selector: 'variable',
			types: [
				'function',
			],
			format: [
				'camelCase',
				'PascalCase',
			],
		},
		{
			selector: 'parameter',
			format: [
				'camelCase',
			],
			leadingUnderscore: 'allow',
		},
		{
			selector: 'function',
			format: [
				'camelCase',
				'PascalCase',
			],
		},
		{
			selector: 'memberLike',
			format: [
				'camelCase',
			],
			leadingUnderscore: 'allow',
		},
		{
			selector: 'memberLike',
			modifiers: [
				'private',
				'protected',
			],
			format: [
				'camelCase',
			],
			leadingUnderscore: 'require',
		},
		{
			selector: 'classProperty',
			modifiers: [
				'static',
			],
			format: [
				'camelCase',
			],
			leadingUnderscore: 'allow',
		},
		{
			selector: 'classProperty',
			modifiers: [
				'private',
				'protected',
				'static',
			],
			format: [
				'camelCase',
			],
			leadingUnderscore: 'require',
		},
		{
			selector: 'enum',
			format: [
				'UPPER_CASE',
				'PascalCase',
			],
		},
		{
			selector: 'enumMember',
			format: [
				'UPPER_CASE',
				'PascalCase',
			],
		},
		{
			selector: 'typeLike',
			format: [
				'PascalCase',
			],
		},
		{
			selector: 'typeParameter',
			format: [
				'PascalCase',
			],
		},
		{
			selector: 'objectLiteralProperty',
			format: null,
			modifiers: [
				'requiresQuotes',
			],
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
