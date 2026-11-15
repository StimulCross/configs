import assert from 'node:assert/strict'
import { describe, it } from 'node:test'
import { defineConfig, defineIntegration, definePreset } from '../src/index.ts'
import { environment, preprocess, wordPlugin, words } from './fixtures/integrations.ts'
import { engine, expectRule, lint, project } from './helpers.ts'

void describe('External integrations', () => {
	void it('should accept typed external options inherited through a preset', async t => {
		const root = await project(t)
		const parent = definePreset({
			use: [words],
			integrations: {
				words: {
					names: ['restricted'],
					severity: 'warn',
				},
			},
		})
		const instance = engine(root, defineConfig({
			rootDir: root,
			extends: [parent],
		}))
		expectRule(await lint(instance, 'example.mjs', 'export const restricted = 1\n'), 'words/restricted', [1])
		expectRule(await lint(instance, 'example.mjs', 'export const banned = 1\n'), 'words/restricted', [])
	})

	void it('should preserve inherited options across disable and re-enable', async t => {
		const root = await project(t)
		const parent = definePreset({
			use: [words],
			integrations: {
				words: {
					names: ['restricted'],
					severity: 'warn',
				},
			},
		})
		const disabled = definePreset({
			extends: [parent],
			integrations: { words: false },
		})

		expectRule(await lint(engine(root, defineConfig({
			rootDir: root,
			extends: [disabled],
		})), 'example.mjs', 'export const restricted = 1\n'), 'words/restricted', [])

		expectRule(await lint(engine(root, defineConfig({
			rootDir: root,
			extends: [disabled],
			integrations: { words: true },
		})), 'example.mjs', 'export const restricted = 1\n'), 'words/restricted', [1])
	})

	void it('should replace option arrays while preserving other inherited fields', async t => {
		const root = await project(t)
		const parent = definePreset({
			use: [words],
			integrations: {
				words: {
					names: ['first', 'second'],
					severity: 'warn',
				},
			},
		})
		const instance = engine(root, defineConfig({
			rootDir: root,
			extends: [parent],
			integrations: {
				words: {
					names: ['third'],
				},
			},
		}))
		expectRule(await lint(instance, 'example.mjs', 'export const first = 1\nexport const third = 3\n'), 'words/restricted', [1])
	})

	void it('should isolate inherited options from later caller mutations', async t => {
		const root = await project(t)
		const names = ['banned']
		const shared = definePreset({
			use: [words],
			integrations: {
				words: { names },
			},
		})
		names.push('allowed')

		expectRule(await lint(engine(root, defineConfig({
			rootDir: root,
			extends: [shared],
		})), 'example.mjs', 'export const allowed = 1\n'), 'words/restricted', [])
	})

	void it('should respect part selectors without leaking settings outside their file domain', async t => {
		const root = await project(t)
		const scoped = defineIntegration()({
			id: 'scoped',
			defaults: {},
			ruleMeta: {},
			configure: () => [
				{
					name: 'globals',
					files: ['special/**'],
					ignores: ['special/plain/**'],
					config: {
						languageOptions: {
							globals: { projectToken: 'readonly' },
						},
					},
				},
			],
		})
		const instance = engine(root, defineConfig({
			rootDir: root,
			use: [scoped],
			rules: { 'no-undef': 'error' },
		}))
		expectRule(await lint(instance, 'special/example.mjs', 'export const value = projectToken\n'), 'no-undef', [])

		for (const path of ['other/example.mjs', 'special/plain/example.mjs'])
			expectRule(await lint(instance, path, 'export const value = projectToken\n'), 'no-undef', [2])
	})

	void it('should remove a disabled integration globals from its scoped area', async t => {
		const root = await project(t)
		const shared = definePreset({
			use: [environment],
			rules: { 'no-undef': 'error' },
		})
		const instance = engine(root, [
			...defineConfig({
				rootDir: root,
				extends: [shared],
				ignores: ['plain/**'],
			}),
			...defineConfig({
				rootDir: root,
				extends: [shared],
				files: ['plain/**'],
				integrations: { environment: false },
			}),
		])
		expectRule(await lint(instance, 'example.mjs', 'export const value = projectToken\n'), 'no-undef', [])
		expectRule(await lint(instance, 'plain/example.mjs', 'export const value = projectToken\n'), 'no-undef', [2])
	})

	void it('should remove disabled processors while preserving them outside the scope', async t => {
		const root = await project(t)
		const shared = definePreset({
			use: [preprocess],
			rules: { 'no-undef': 'error' },
		})
		const instance = engine(root, [
			...defineConfig({
				rootDir: root,
				extends: [shared],
				ignores: ['plain/**'],
			}),
			...defineConfig({
				rootDir: root,
				extends: [shared],
				files: ['plain/**'],
				integrations: { preprocess: false },
			}),
		])
		expectRule(await lint(instance, 'example.mjs', 'export const value = TOKEN()\n'), 'no-undef', [])
		expectRule(await lint(instance, 'plain/example.mjs', 'export const value = TOKEN()\n'), 'no-undef', [2])
	})

	void it('should allow reusing the same integration through multiple preset branches', async t => {
		const root = await project(t)
		const first = definePreset({
			use: [words],
		})
		const second = definePreset({
			use: [words],
		})
		const result = await lint(engine(root, defineConfig({
			rootDir: root,
			extends: [first, second],
		})), 'example.mjs', 'export const banned = 1\n')
		expectRule(result, 'words/restricted', [2])
	})

	void it('should allow the same plugin object to be shared by multiple integrations', async t => {
		const root = await project(t)
		const companion = defineIntegration()({
			id: 'companion',
			defaults: {},
			plugins: { words: wordPlugin },
			ruleMeta: {},
			configure: () => [
				{
					name: 'settings',
					config: {
						settings: { companion: true },
					},
				},
			],
		})
		const instance = engine(root, defineConfig({
			rootDir: root,
			use: [words, companion],
		}))
		expectRule(await lint(instance, 'example.mjs', 'export const banned = 1\n'), 'words/restricted', [2])
	})

	void it('should report conflicting namespace objects with both integration names', async t => {
		const root = await project(t)
		const conflict = defineIntegration()({
			id: 'conflict',
			defaults: {},
			plugins: {
				words: { rules: {} },
			},
			ruleMeta: {},
			configure: () => [],
		})

		assert.throws(() => defineConfig({
			rootDir: root,
			use: [words, conflict],
		}), /words.*conflict|conflict.*words/)
	})

	void it('should reject distinct integration definitions with the same id', async t => {
		const root = await project(t)
		const duplicate = defineIntegration()({
			id: 'words',
			defaults: {},
			ruleMeta: {},
			configure: () => [],
		})

		assert.throws(() => defineConfig({
			rootDir: root,
			use: [words, duplicate],
		}), /integration words/)
	})
})
