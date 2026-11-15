import { defineConfig, defineIntegration, definePreset, globs } from '../../src/index.ts'
import { words } from '../fixtures/integrations.ts'

// Compile-only consumer examples: these functions are never executed by the runtime suite.
export function validConsumer(): void {
	const parent = definePreset({
		use: [words],
		integrations: {
			words: { severity: 'warn' },
		},
		rules: {
			'words/restricted': [
				'error',
				{
					names: ['banned'],
				},
			],
		},
	})
	const child = definePreset({
		extends: [parent],
		scopes: [
			{
				files: globs.tests,

				rules: { 'words/restricted': 'off' },
			},
		],
	})

	defineConfig({
		rootDir: '/tmp',
		extends: [child],
		integrations: {
			words: {
				names: ['restricted'],
			},
		},
		rules: { 'words/restricted': 'warn' },
	})

	definePreset({
		rules: {
			'style/quotes': ['error', 'single'],
			'node/prefer-global/process': ['error', 'never'],
			'test/valid-title': 'off',
		},
	})
}

export function invalidConsumer(): void {
	definePreset({
		scopes: [
			{
				files: ['**/*.ts'],
				// @ts-expect-error Integration switches require a separate complete config.
				integrations: { unicorn: false },
			},
		],
	})

	definePreset({
		scopes: [
			{
				files: ['**/*.ts'],
				// @ts-expect-error Typed selection belongs to the complete config.
				typeAware: false,
			},
		],
	})

	definePreset({
		// @ts-expect-error Rule keys must be known.
		rules: { 'unicorn/missing-rule': 'error' },
	})

	definePreset({
		// @ts-expect-error Severity must be valid.
		rules: { 'no-console': 'fatal' },
	})

	definePreset({
		rules: {
			// @ts-expect-error Supported option schemas must remain precise.
			'style/quotes': ['error', 'invalid'],
		},
	})

	definePreset({
		// @ts-expect-error Integration ids must be registered.
		integrations: { missing: true },
	})

	definePreset({
		integrations: {
			// @ts-expect-error An integration without options only accepts boolean switches.
			unicorn: { missing: true },
		},
	})

	definePreset({
		scopes: [
			{
				files: globs.typescript,
				// @ts-expect-error Managed scopes cannot silently substitute a parser.
				languageOptions: { parserOptions: {} },
			},
		],
	})

	// @ts-expect-error Final consumers need an absolute rootDir argument.
	defineConfig({})

	definePreset({
		rules: {
			'test/valid-title': [
				'error',
				// @ts-expect-error The defective upstream schema has an explicit severity-only fallback.
				{ mustMatch: 'x' },
			],
		},
	})

	const parent = definePreset({
		use: [words],
	})
	const child = definePreset({
		extends: [parent],
	})

	defineConfig({
		rootDir: '/tmp',
		extends: [child],
		integrations: {
			// @ts-expect-error External option types must survive multiple inheritance levels.
			words: { severity: 'fatal' },
		},
	})

	definePreset({
		extends: [child],
		rules: {
			'words/restricted': [
				'error',
				// @ts-expect-error External rule options must survive multiple inheritance levels.
				{ names: 1 },
			],
		},
	})

	definePreset({
		// @ts-expect-error Unregistered external rules must not leak to unrelated consumers.
		rules: { 'words/restricted': 'error' },
	})

	definePreset({
		integrations: {
			typescript: {
				// @ts-expect-error Project Service is managed separately from free parser options.
				parserOptions: { projectService: true },
			},
		},
	})

	definePreset({
		integrations: {
			typescript: {
				// @ts-expect-error rootDir is the single anchor for TS project resolution.
				parserOptions: { tsconfigRootDir: '/tmp' },
			},
		},
	})

	defineIntegration<object, { 'custom/example': [] }>()({
		id: 'custom',
		defaults: {},
		// @ts-expect-error Each declared external rule needs runtime capability metadata.
		ruleMeta: {},
		configure: () => [],
	})
}
