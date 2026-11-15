import type { Linter } from 'eslint'
import assert from 'node:assert/strict'
import { describe, it } from 'node:test'
import { defineConfig } from '../src/index.ts'
import { engine, expectRule, lint, project } from './helpers.ts'

void describe('JavaScript environment', () => {
	void it('should use CommonJS scope and allow top-level return in cjs files', async t => {
		const root = await project(t)
		const instance = engine(root, defineConfig({ rootDir: root }))
		await lint(instance, 'example.cjs', 'module.exports = 1\nreturn\n')
		const config = await instance.calculateConfigForFile('example.cjs') as Linter.Config | undefined
		assert.equal(config?.languageOptions?.['sourceType'], 'commonjs')
	})

	void it('should use module scope for js and mjs files', async t => {
		const root = await project(t)
		const instance = engine(root, defineConfig({ rootDir: root }))

		for (const file of ['example.js', 'example.mjs']) {
			await lint(instance, file, 'export const value = 1\n')
			const config = await instance.calculateConfigForFile(file) as Linter.Config | undefined
			assert.equal(config?.languageOptions?.['sourceType'], 'module')
		}
	})

	void it('should honor an explicitly selected older ECMAScript syntax', async t => {
		const root = await project(t)
		const instance = engine(root, defineConfig({
			rootDir: root,
			languageOptions: { ecmaVersion: 5, sourceType: 'script' },
		}))
		const [result] = await instance.lintText('const value = 1\n', { filePath: 'example.js' })
		assert.equal(result?.fatalErrorCount, 1)
	})

	void it('should derive standard globals from the selected ECMAScript version', async t => {
		const root = await project(t)
		const instance = engine(root, defineConfig({
			rootDir: root,
			languageOptions: { ecmaVersion: 5, sourceType: 'script' },
		}))
		const result = await lint(instance, 'example.js', 'Array.isArray([])\nPromise.resolve(1)\n')
		expectRule(result, 'no-undef', [2])
		assert.match(result.messages.find(message => message.ruleId === 'no-undef')?.message ?? '', /Promise/)
	})

	void it('should provide browser and Node globals and permit consumer exclusions', async t => {
		const root = await project(t)
		const source = 'window.alert(process.version)\n'

		expectRule(await lint(engine(root, defineConfig({ rootDir: root })), 'example.mjs', source), 'no-undef', [])

		expectRule(await lint(engine(root, defineConfig({
			rootDir: root,
			languageOptions: {
				globals: { window: 'off' },
			},
		})), 'example.mjs', source), 'no-undef', [2])
	})

	void it('should warn about unused disable directives and allow consumers to turn reporting off', async t => {
		const root = await project(t)
		const source = '// eslint-disable-next-line no-alert\nexport const value = 1\n'
		const [result] = await engine(root, defineConfig({ rootDir: root })).lintText(source, { filePath: 'example.mjs' })
		assert.equal(result?.fatalErrorCount, 0)
		assert.ok(result.messages.some(message => message.ruleId === null && message.severity === 1 && message.message.includes('Unused eslint-disable')))
		const disabled = await lint(engine(root, defineConfig({
			rootDir: root,
			linterOptions: { reportUnusedDisableDirectives: 'off' },
		})), 'example.mjs', source)
		assert.deepEqual(disabled.messages, [])
	})
})
