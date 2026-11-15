import { defineConfig } from '../../src/index.ts'

export function shouldExposeOnlyPublicNamespaceTypes(): void {
	defineConfig({
		rootDir: '/tmp',
		rules: { 'ts/no-explicit-any': 'off', 'node/no-path-concat': 'warn', 'yaml/no-empty-key': 'error' },
		integrations: {
			stylistic: {
				overrides: {
					'style/quotes': ['error', 'single'],
				},
			},
		},
	})

	defineConfig({
		rootDir: '/tmp',
		rules: {
			// @ts-expect-error Original TypeScript namespace is not a public alias.
			'@typescript-eslint/no-explicit-any': 'off',
		},
	})

	defineConfig({
		rootDir: '/tmp',
		integrations: {
			stylistic: {
				overrides: {
					// @ts-expect-error Original Stylistic namespace is not a public alias.
					'@stylistic/quotes': 'off',
				},
			},
		},
	})

	defineConfig({
		rootDir: '/tmp',
		rules: {
			// @ts-expect-error Public rule options retain their generated types.
			'style/quotes': ['error', 'invalid'],
		},
	})
}
