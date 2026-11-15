import assert from 'node:assert/strict'
import { describe, it } from 'node:test'
import { createConfigFactory, definePreset } from '../src/index.ts'
import { words } from './fixtures/integrations.ts'
import { engine, expectRule, lint, project } from './helpers.ts'

void describe('Bound configuration factory', () => {
	void it('should inherit rootDir and presets without repeating them', async t => {
		const root = await project(t)
		const shared = definePreset({
			rules: { 'no-console': 'off' },
		})
		const config = createConfigFactory({
			rootDir: root,
			extends: [shared],
		})
		expectRule(await lint(engine(root, config()), 'example.mjs', 'console.log(1)\n'), 'no-console', [])

		expectRule(await lint(engine(root, config({
			rules: { 'no-console': 'error' },
		})), 'example.mjs', 'console.log(1)\n'), 'no-console', [2])
	})

	void it('should preserve native composition and completely remove integrations only in a disjoint area', async t => {
		const root = await project(t)
		const config = createConfigFactory({
			rootDir: root,
			extends: [
				definePreset({
					rules: { 'no-console': 'off' },
				}),
			],
		})
		const instance = engine(root, [
			...config({
				ignores: ['vendor/**'],
			}),
			...config({
				files: ['vendor/**'],
				integrations: { stylistic: false },
			}),
		])
		expectRule(await lint(instance, 'example.mjs', 'export const value = "hello"\n'), 'style/quotes', [2])
		expectRule(await lint(instance, 'vendor/example.mjs', 'export const value = "hello"\n'), 'style/quotes', [])
	})

	void it('should keep calls independent when disabling and re-enabling an integration', async t => {
		const root = await project(t)
		const config = createConfigFactory({
			rootDir: root,
			integrations: {
				stylistic: {
					overrides: { 'style/quotes': 'warn' },
				},
			},
		})

		expectRule(await lint(engine(root, config({
			integrations: { stylistic: false },
		})), 'example.mjs', 'export const value = "hello"\n'), 'style/quotes', [])

		expectRule(await lint(engine(root, config()), 'example.mjs', 'export const value = "hello"\n'), 'style/quotes', [1])
	})

	void it('should snapshot defaults and isolate caller mutations', async t => {
		const root = await project(t)
		const names = ['restricted']
		const config = createConfigFactory({
			rootDir: root,
			use: [words],
			integrations: {
				words: { names },
			},
		})
		names.push('allowed')
		expectRule(await lint(engine(root, config()), 'example.mjs', 'export const allowed = 1\n'), 'words/restricted', [])
		expectRule(await lint(engine(root, config()), 'example.mjs', 'export const restricted = 1\n'), 'words/restricted', [2])
	})

	void it('should preserve external options and merge local additional presets after shared ones', async t => {
		const root = await project(t)
		const config = createConfigFactory({
			rootDir: root,
			extends: [
				definePreset({
					use: [words],
					integrations: {
						words: { severity: 'warn' },
					},
				}),
			],
		})
		const local = definePreset({
			use: [words],
			integrations: {
				words: {
					names: ['restricted'],
				},
			},
		})

		expectRule(await lint(engine(root, config({
			extends: [local],
		})), 'example.mjs', 'export const restricted = 1\n'), 'words/restricted', [1])
	})

	void it('should allow an explicit consumer root and gitignore override', async t => {
		const first = await project(t)
		const second = await project(t, { '.gitignore': 'ignored/\n' })
		const config = createConfigFactory({ rootDir: first, gitignore: false })
		expectRule(await lint(engine(second, config({ rootDir: second })), 'ignored/example.mjs', 'console.log(1)\n'), 'no-console', [1])
		assert.equal(await engine(second, config({ rootDir: second, gitignore: true })).isPathIgnored('ignored/example.mjs'), true)
	})

	void it('should append raw overrides inside the selected area', async t => {
		const root = await project(t)
		const config = createConfigFactory({
			rootDir: root,
			rules: { 'no-console': 'warn' },
		})
		const instance = engine(root, [
			...config({
				ignores: ['tools/**'],
			}),
			...config({
				files: ['tools/**'],
			}, {
				rules: { 'no-console': 'off' },
			}),
		])
		expectRule(await lint(instance, 'tools/example.mjs', 'console.log(1)\n'), 'no-console', [])
		expectRule(await lint(instance, 'src/example.mjs', 'console.log(1)\n'), 'no-console', [1])
	})

	void it('should replace bound file selections rather than concatenate them', async t => {
		const root = await project(t)
		const config = createConfigFactory({
			rootDir: root,
			files: ['src/**'],
		})

		expectRule(await lint(engine(root, config({
			files: ['tools/**'],
		})), 'tools/example.mjs', 'export const value = "hello"\n'), 'style/quotes', [2])
	})

	void it('should reset a bound area using a native all-file pattern and empty ignores', async t => {
		const root = await project(t)
		const config = createConfigFactory({
			rootDir: root,
			files: ['src/**'],
			ignores: ['tools/**'],
		})

		expectRule(await lint(engine(root, config({
			files: ['**/*'],
			ignores: [],
		})), 'tools/example.mjs', 'console.log(1)\n'), 'no-console', [1])
	})

	void it('should preserve native rejection of an empty files array', async t => {
		const root = await project(t)
		const config = createConfigFactory({ rootDir: root })

		await assert.rejects(async () => {
			await engine(root, config({ files: [] })).calculateConfigForFile('example.mjs')
		}, /non-empty array/)
	})

	void it('should reject a relative root at factory creation', () => {
		assert.throws(() => createConfigFactory({ rootDir: '.' }), /absolute/)
	})
})
