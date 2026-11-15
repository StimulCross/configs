import type { Linter } from 'eslint'
import assert from 'node:assert/strict'
import { describe, it } from 'node:test'
import typescript from '@typescript-eslint/eslint-plugin'
import { createConfigFactory, defineConfig, definePreset } from '../src/index.ts'
import { engine, expectRule, lint, project } from './helpers.ts'

void describe('Public plugin namespaces', () => {
	void it('should register short plugin names without original aliases and preserve plugin identity', async t => {
		const root = await project(t)
		const instance = engine(root, defineConfig({ rootDir: root, typeAware: false }))
		const config = await instance.calculateConfigForFile('example.ts') as Linter.Config | undefined
		assert.ok(config?.plugins)

		for (const name of [
			'ts',
			'style',
			'node',
			'yaml',
			'import',
			'test',
		]) assert.ok(config.plugins[name], name)

		for (const name of [
			'@typescript-eslint',
			'@stylistic',
			'n',
			'yml',
			'import-lite',
			'vitest',
			'no-only-tests',
		]) assert.equal(config.plugins[name], undefined, name)

		assert.equal(config.plugins['ts'], typescript)
	})

	void it('should accept short names through inheritance, local integration overrides and native scopes', async t => {
		const root = await project(t)
		const config = createConfigFactory({
			rootDir: root,
			extends: [
				definePreset({
					integrations: {
						stylistic: {
							overrides: { 'style/quotes': 'warn' },
						},
					},
				}),
			],
		})
		const instance = engine(root, config({
			integrations: {
				stylistic: {
					overrides: { 'style/quotes': 'error' },
				},
			},
			scopes: [
				{
					files: ['tools/**'],
					rules: { 'style/quotes': 'off' },
				},
			],
		}))
		expectRule(await lint(instance, 'src/example.mjs', 'export const value = "hello"\n'), 'style/quotes', [2])
		expectRule(await lint(instance, 'tools/example.mjs', 'export const value = "hello"\n'), 'style/quotes', [])
	})

	void it('should honor ESLint inline disables using public rule names', async t => {
		const root = await project(t)
		const instance = engine(root, defineConfig({ rootDir: root }))
		expectRule(await lint(instance, 'example.mjs', '// eslint-disable-next-line style/quotes\nexport const value = "hello"\n'), 'style/quotes', [])
	})

	void it('should apply raw overrides using the same public namespace', async t => {
		const root = await project(t)
		const instance = engine(root, defineConfig({ rootDir: root }, {
			files: ['**/*.mjs'],
			rules: { 'style/quotes': 'off' },
		}))
		expectRule(await lint(instance, 'example.mjs', 'export const value = "hello"\n'), 'style/quotes', [])
	})

	for (const id of [
		'@typescript-eslint/no-explicit-any',
		'@stylistic/quotes',
		'n/no-path-concat',
		'yml/no-empty-key',
	]) {
		void it(`should reject original rule namespace ${id} instead of keeping a second alias`, async t => {
			const root = await project(t)

			assert.throws(() => defineConfig({
				rootDir: root,
				rules: { [id]: 'off' },
			}), /Unknown rule/)
		})
	}
})
