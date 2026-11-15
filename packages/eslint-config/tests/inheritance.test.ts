import assert from 'node:assert/strict'
import { describe, it } from 'node:test'
import { defineConfig, definePreset } from '../src/index.ts'
import { engine, expectRule, lint, project, rule } from './helpers.ts'

const calls = 'console.warn(1)\nconsole.log(1)\n'

void describe('Preset inheritance', () => {
	void it('should apply parents from left to right and consumer rules last', async t => {
		const root = await project(t)
		const first = definePreset({
			rules: { 'no-console': 'off' },
		})
		const second = definePreset({
			rules: { 'no-console': 'warn' },
		})
		const shared = definePreset({
			extends: [first, second],
		})

		expectRule(await lint(engine(root, defineConfig({
			rootDir: root,
			extends: [shared],
		})), 'example.mjs', 'console.log(1)\n'), 'no-console', [1])

		expectRule(await lint(engine(root, defineConfig({
			rootDir: root,
			extends: [shared],
			rules: { 'no-console': 'error' },
		})), 'example.mjs', 'console.log(1)\n'), 'no-console', [2])
	})

	void it('should let a local global rule override an inherited scoped rule', async t => {
		const root = await project(t)
		const parent = definePreset({
			scopes: [
				{
					files: ['**/*.test.mjs'],
					rules: { 'no-console': 'off' },
				},
			],
		})
		const config = defineConfig({
			rootDir: root,
			extends: [parent],
			rules: { 'no-console': 'error' },
		})
		expectRule(await lint(engine(root, config), 'example.test.mjs', 'console.log(1)\n'), 'no-console', [2])
	})

	for (const entry of [
		'warn',
		['warn'],
	] as const) {
		void it(`should retain inherited rule options for a severity-only ${Array.isArray(entry)
			? 'tuple'
			: 'string'} override`, async t => {
			const root = await project(t)
			const parent = definePreset({
				rules: {
					'no-console': [
						'error',
						{
							allow: ['warn'],
						},
					],
				},
			})
			const result = await lint(engine(root, defineConfig({
				rootDir: root,
				extends: [parent],
				rules: {
					'no-console': typeof entry === 'string'
						? entry
						: [...entry],
				},
			})), 'example.mjs', calls)
			expectRule(result, 'no-console', [1])
			assert.equal(rule(result, 'no-console')[0]?.line, 2)
		})
	}

	void it('should replace explicit rule options and their arrays instead of concatenating them', async t => {
		const root = await project(t)
		const parent = definePreset({
			rules: {
				'no-console': [
					'error',
					{
						allow: ['warn'],
					},
				],
			},
		})
		const result = await lint(engine(root, defineConfig({
			rootDir: root,
			extends: [parent],
			rules: {
				'no-console': [
					'error',
					{
						allow: ['log'],
					},
				],
			},
		})), 'example.mjs', calls)
		expectRule(result, 'no-console', [2])
		assert.equal(rule(result, 'no-console')[0]?.line, 1)
	})

	void it('should preserve options across an off and on severity sequence', async t => {
		const root = await project(t)
		const parent = definePreset({
			rules: {
				'no-console': [
					'error',
					{
						allow: ['warn'],
					},
				],
			},
		})
		const disabled = definePreset({
			extends: [parent],
			rules: { 'no-console': 'off' },
		})
		const result = await lint(engine(root, defineConfig({
			rootDir: root,
			extends: [disabled],
			rules: { 'no-console': 'warn' },
		})), 'example.mjs', calls)
		expectRule(result, 'no-console', [1])
		assert.equal(rule(result, 'no-console')[0]?.line, 2)
	})

	void it('should isolate presets from caller mutations and sibling overrides', async t => {
		const root = await project(t)
		const allow: [string, ...string[]] = ['warn']
		const parent = definePreset({
			rules: {
				'no-console': [
					'error',
					{ allow },
				],
			},
		})
		allow.push('log')
		const child = definePreset({
			extends: [parent],
			rules: { 'no-console': 'off' },
		})

		expectRule(await lint(engine(root, defineConfig({
			rootDir: root,
			extends: [child],
		})), 'example.mjs', calls), 'no-console', [])

		expectRule(await lint(engine(root, defineConfig({
			rootDir: root,
			extends: [parent],
		})), 'example.mjs', calls), 'no-console', [2])
	})

	void it('should apply ordinary flat configs after managed presets', async t => {
		const root = await project(t)
		const config = defineConfig({
			rootDir: root,
			rules: { 'no-console': 'error' },
		}, {
			files: ['tools/**'],
			rules: { 'no-console': 'off' },
		})
		const instance = engine(root, config)
		expectRule(await lint(instance, 'tools/example.mjs', calls), 'no-console', [])
		expectRule(await lint(instance, 'src/example.mjs', calls), 'no-console', [2, 2])
	})
})

void describe('Integration inheritance', () => {
	void it('should disable an inherited integration and allow one explicit rule to opt back in', async t => {
		const root = await project(t)
		const parent = definePreset({
			rules: { 'unicorn/filename-case': 'warn' },
		})
		const disabled = definePreset({
			extends: [parent],
			integrations: { unicorn: false },
		})

		expectRule(await lint(engine(root, defineConfig({
			rootDir: root,
			extends: [disabled],
		})), 'wrong_name.mjs', 'export const value = 1\n'), 'unicorn/filename-case', [])

		expectRule(await lint(engine(root, defineConfig({
			rootDir: root,
			extends: [disabled],
			rules: { 'unicorn/filename-case': 'error' },
		})), 'wrong_name.mjs', 'export const value = 1\n'), 'unicorn/filename-case', [2])
	})

	void it('should restore a disabled integration without resetting unrelated inherited rules', async t => {
		const root = await project(t)
		const disabled = definePreset({
			integrations: { stylistic: false },
			rules: { 'no-console': 'off' },
		})
		const config = defineConfig({
			rootDir: root,
			extends: [disabled],
			integrations: { stylistic: true },
		})
		const result = await lint(engine(root, config), 'example.mjs', 'console.log("hello")\n')
		expectRule(result, 'style/quotes', [2])
		expectRule(result, 'no-console', [])
	})
})
