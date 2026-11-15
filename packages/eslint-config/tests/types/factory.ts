import { createConfigFactory, definePreset } from '../../src/index.ts'
import { typed, words } from '../fixtures/integrations.ts'

export function shouldPreserveFactoryTypes(): void {
	const shared = definePreset({
		use: [words],
	})
	const config = createConfigFactory({
		rootDir: '/tmp',
		extends: [shared],
	})

	config({
		integrations: {
			words: {
				severity: 'warn',
				overrides: {
					'words/restricted': [
						'error',
						{
							names: ['banned'],
						},
					],
				},
			},
		},
	})

	config({
		use: [typed],
		integrations: {
			typed: {
				overridesTypeAware: { 'typed/floating-promise': 'warn' },
			},
		},
	})

	config({
		integrations: {
			typescript: {
				overridesTypeAware: { 'ts/no-floating-promises': 'error' },
			},
			e18e: {
				overridesTypeAware: { 'e18e/no-indexof-equality': 'warn' },
			},
		},
	})

	config({
		integrations: {
			typescript: {
				overrides: { 'no-console': 'off' },
			},
		},
	})

	config({
		integrations: {
			// @ts-expect-error A bound factory must retain external integration option types.
			words: { severity: 'fatal' },
		},
	})

	config({
		integrations: {
			words: {
				overrides: {
					'words/restricted': [
						'error',
						// @ts-expect-error External rule options must remain precise through the factory.
						{ names: 1 },
					],
				},
			},
		},
	})

	config({
		integrations: {
			unicorn: {
				// @ts-expect-error A factory must not introduce a broad rule key index.
				overrides: { 'unicorn/missing-rule': 'off' },
			},
		},
	})

	config({
		integrations: {
			unicorn: {
				// @ts-expect-error Overrides are limited to their integration and supported core rules.
				overrides: { 'style/quotes': 'off' },
			},
		},
	})

	config({
		integrations: {
			typescript: {
				// @ts-expect-error A syntax-only rule cannot be placed in the typed map.
				overridesTypeAware: { 'ts/no-explicit-any': 'off' },
			},
		},
	})

	config({
		integrations: {
			stylistic: {
				// @ts-expect-error A source with no typed rules cannot have a typed override map.
				overridesTypeAware: { 'style/quotes': 'off' },
			},
		},
	})

	config({
		use: [words],
		integrations: {
			words: {
				// @ts-expect-error Inferred external typed IDs must also reject ordinary rules.
				overridesTypeAware: { 'words/restricted': 'off' },
			},
		},
	})

	config({
		integrations: {
			// @ts-expect-error A factory-local integration cannot leak into a sibling invocation.
			typed: {
				overridesTypeAware: { 'typed/floating-promise': 'error' },
			},
		},
	})

	// @ts-expect-error A factory still requires a consumer root once, at creation.
	createConfigFactory({
		extends: [shared],
	})
}
