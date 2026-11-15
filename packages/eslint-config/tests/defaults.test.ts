import assert from 'node:assert/strict'
import { describe, it } from 'node:test'
import { defineConfig } from '../src/index.ts'
import { engine, expectRule, lint, project } from './helpers.ts'

void describe('Default JavaScript policy', () => {
	const examples = [
		{
			name: 'warn about console usage',
			id: 'no-console',
			source: 'console.log(1)\n',
			severity: 1,
		},
		{
			name: 'reject loose equality',
			id: 'eqeqeq',
			source: 'export const same = value => value == 1\n',
			severity: 2,
		},
		{
			name: 'report unused imports',
			id: 'unused-imports/no-unused-imports',
			source: 'import { readFile } from \'node:fs\'\nexport const value = 1\n',
			severity: 2,
		},
		{
			name: 'reject imports from node_modules paths',
			id: 'antfu/no-import-node-modules-by-path',
			source: 'import value from \'./node_modules/example/index.js\'\nexport { value }\n',
			severity: 2,
		},
		{
			name: 'require imports before other statements',
			id: 'import/first',
			source: 'export const value = 1\nimport \'node:fs\'\n',
			severity: 2,
		},
		{
			name: 'sort re-exports naturally',
			id: 'perfectionist/sort-exports',
			source: 'export { b } from \'./b.js\'\nexport { a } from \'./a.js\'\n',
			severity: 2,
		},
		{
			name: 'validate JSDoc parameter names',
			id: 'jsdoc/require-param-name',
			source: '/**\n * Identity.\n * @param {number}\n */\nexport function identity(value) {\n\treturn value\n}\n',
			severity: 1,
		},
		{
			name: 'require named rules in ESLint disable comments',
			id: 'eslint-comments/no-unlimited-disable',
			source: '// eslint-disable-next-line\nconsole.log(1)\n',
			severity: 2,
		},
		{
			name: 'require single quotes',
			id: 'style/quotes',
			source: 'export const value = "hello"\n',
			severity: 2,
		},
		{
			name: 'check source filenames',
			id: 'unicorn/filename-case',
			source: 'export const value = 1\n',
			severity: 2,
			file: 'wrong_name.mjs',
		},
		{
			name: 'prefer Date.now over getTime',
			id: 'e18e/prefer-date-now',
			source: 'export const now = new Date().getTime()\n',
			severity: 2,
		},
		{
			name: 'check Node path concatenation',
			id: 'node/no-path-concat',
			source: 'export const file = __dirname + \'/file\'\n',
			severity: 2,
		},
		{
			name: 'warn about empty regex alternatives',
			id: 'regexp/no-empty-alternative',
			source: 'export const pattern = /a|/\n',
			severity: 1,
		},
	] as const

	for (const example of examples) {
		void it(`should ${example.name}`, async t => {
			const root = await project(t)
			const result = await lint(engine(root, defineConfig({ rootDir: root })), 'file' in example
				? example.file
				: 'example.mjs', example.source)
			expectRule(result, example.id, [example.severity])
		})
	}

	void it('should accept a clean module without diagnostics', async t => {
		const root = await project(t)
		const result = await lint(engine(root, defineConfig({ rootDir: root })), 'example.mjs', 'export const value = 1\n')
		assert.deepEqual(result.messages, [])
	})

	void it('should parse JSX and CommonJS without enabling typed linting', async t => {
		const root = await project(t)
		const instance = engine(root, defineConfig({ rootDir: root }))
		await lint(instance, 'view.jsx', 'export const view = <div />\n')
		await lint(instance, 'example.cjs', 'module.exports = { value: 1 }\n')
	})

	void it('should enforce focused-test checks only in test files', async t => {
		const root = await project(t)
		const instance = engine(root, defineConfig({ rootDir: root }))
		const source = 'test.only(\'example\', () => {})\n'
		expectRule(await lint(instance, 'example.test.mjs', source), 'test/no-only-tests', [2])
		expectRule(await lint(instance, 'example.mjs', source), 'test/no-only-tests', [])
	})
})

void describe('Document and data integrations', () => {
	const examples = [
		{
			integration: 'jsonc',
			file: 'example.json',
			source: '{"value": 1, "value": 2}\n',
			id: 'jsonc/no-dupe-keys',
		},
		{
			integration: 'yaml',
			file: 'example.yaml',
			source: ': value\n',
			id: 'yaml/no-empty-key',
		},
		{
			integration: 'toml',
			file: 'example.toml',
			source: 'value= 1\n',
			id: 'toml/key-spacing',
		},
		{
			integration: 'markdown',
			file: 'README.md',
			source: '# Heading\n\n### Skipped\n',
			id: 'markdown/heading-increment',
		},
	] as const

	for (const example of examples) {
		void it(`should apply ${example.integration} rules by default and allow explicit rule overrides`, async t => {
			const root = await project(t)
			expectRule(await lint(engine(root, defineConfig({ rootDir: root })), example.file, example.source), example.id, [2])

			expectRule(await lint(engine(root, defineConfig({
				rootDir: root,
				rules: { [example.id]: 'off' },
			})), example.file, example.source), example.id, [])
		})
	}

	void it('should lint JSONC and JSON5 using their own syntax', async t => {
		const root = await project(t)
		const instance = engine(root, defineConfig({ rootDir: root }))
		await lint(instance, 'example.jsonc', '// Comment\n{"value": 1}\n')
		await lint(instance, 'example.json5', '{value: \'hello\'}\n')
	})

	void it('should lint Markdown code blocks without requiring virtual TypeScript files in a project', async t => {
		const root = await project(t)
		const result = await lint(engine(root, defineConfig({ rootDir: root })), 'README.md', '# Example\n\n```ts\nconst value: any = 1\n```\n')
		expectRule(result, 'ts/no-explicit-any', [1])
	})

	void it('should remove Markdown parsing when the integration is disabled', async t => {
		const root = await project(t)
		const instance = engine(root, defineConfig({
			rootDir: root,
			integrations: { markdown: false },
		}))
		const [result] = await instance.lintText('# Heading\n', { filePath: 'README.md' })
		assert.equal(result?.fatalErrorCount, 1)
		assert.match(result.messages[0]?.message ?? '', /unexpected|character|token/i)
	})

	void it('should keep source filename rules out of JSON data', async t => {
		const root = await project(t)
		expectRule(await lint(engine(root, defineConfig({ rootDir: root })), 'wrong_name.json', '{"value": 1}\n'), 'unicorn/filename-case', [])
	})

	void it('should keep pnpm opt-in and enforce its workspace settings when enabled', async t => {
		const source = 'packages:\n  - packages/*\n'
		const root = await project(t, { 'pnpm-workspace.yaml': source, 'package.json': '{"private":true}\n' })
		expectRule(await lint(engine(root, defineConfig({ rootDir: root })), 'pnpm-workspace.yaml', source), 'pnpm/yaml-enforce-settings', [])

		expectRule(await lint(engine(root, defineConfig({
			rootDir: root,
			integrations: { pnpm: true },
		})), 'pnpm-workspace.yaml', source), 'pnpm/yaml-enforce-settings', [2, 2, 2])
	})
})

void describe('Formatting and fixes', () => {
	void it('should apply combined fixes in one invocation and remain stable on the second invocation', async t => {
		const root = await project(t)
		const instance = engine(root, defineConfig({ rootDir: root }), { fix: true })
		const first = await lint(instance, 'example.mjs', 'export const text="hello";\n')
		assert.equal(first.output, 'export const text = \'hello\'\n')
		assert.deepEqual(first.messages, [])
		const second = await lint(instance, 'example.mjs', first.output)
		assert.equal(second.output, undefined)
		assert.deepEqual(second.messages, [])
	})

	void it('should stop Stylistic and Antfu formatting together when stylistic is disabled', async t => {
		const root = await project(t)
		const source = 'export const text="hello";\n'
		const instance = engine(root, defineConfig({
			rootDir: root,
			integrations: { stylistic: false },
		}), { fix: true })
		const result = await lint(instance, 'example.mjs', source)
		assert.equal(result.output, undefined)
		assert.deepEqual(result.messages, [])
	})
})
