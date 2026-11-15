import { describe, it } from 'node:test'
import { defineConfig } from '../src/index.ts'
import { policy } from '../src/integrations/defaults.ts'
import { engine, expectRule, lint, project, tsconfig } from './helpers.ts'

void describe('Integration rule areas', () => {
	void it('should relax Node process imports in Markdown examples while enforcing them in source files', async t => {
		const root = await project(t)
		const instance = engine(root, defineConfig({ rootDir: root }))
		expectRule(await lint(instance, 'example.mjs', 'process.cwd()\n'), 'node/prefer-global/process', [2])
		expectRule(await lint(instance, 'README.md', '# Example\n\n```js\nprocess.cwd()\n```\n'), 'node/prefer-global/process', [])
		expectRule(await lint(instance, 'README.md', '# Example\n\n### Skipped\n'), 'markdown/heading-increment', [2])
	})

	void it('should replace core array constructor checks with TypeScript checks only for TypeScript', async t => {
		const root = await project(t)
		const instance = engine(root, defineConfig({ rootDir: root, typeAware: false }))
		const source = 'export const value = new Array(1, 2)\n'
		expectRule(await lint(instance, 'example.mjs', source), 'no-array-constructor', [2])
		const result = await lint(instance, 'example.ts', source)
		expectRule(result, 'no-array-constructor', [])
		expectRule(result, 'ts/no-array-constructor', [2])
	})

	void it('should keep TypeScript script exceptions local to scripts', async t => {
		const root = await project(t)
		const instance = engine(root, defineConfig({ rootDir: root, typeAware: false }))
		const source = 'export function getValue() { return 1 }\n'
		expectRule(await lint(instance, 'src/example.ts', source), 'ts/explicit-function-return-type', [1])
		expectRule(await lint(instance, 'scripts/example.ts', source), 'ts/explicit-function-return-type', [])
	})

	void it('should let consumers override Markdown code exceptions without changing source file rules', async t => {
		const root = await project(t)
		const instance = engine(root, defineConfig({
			rootDir: root,
			scopes: [
				{
					files: ['**/*.md/**'],
					rules: {
						'node/prefer-global/process': ['error', 'never'],
					},
				},
			],
		}))
		expectRule(await lint(instance, 'README.md', '# Example\n\n```js\nprocess.cwd()\n```\n'), 'node/prefer-global/process', [2])
		expectRule(await lint(instance, 'example.mjs', 'process.cwd()\n'), 'node/prefer-global/process', [2])
	})

	void it('should restore core regexp checks when the replacing integration is disabled', async t => {
		const root = await project(t)
		const source = 'export const pattern = /[]/u\n'
		const enabled = await lint(engine(root, defineConfig({ rootDir: root })), 'example.mjs', source)
		expectRule(enabled, 'no-empty-character-class', [])
		expectRule(enabled, 'regexp/no-empty-character-class', [2])
		const disabled = await lint(engine(root, defineConfig({
			rootDir: root,
			integrations: { regexp: false },
		})), 'example.mjs', source)
		expectRule(disabled, 'no-empty-character-class', [2])
		expectRule(disabled, 'regexp/no-empty-character-class', [])
	})

	void it('should apply TypeScript rules to explicitly typed JavaScript without leaking them to ordinary JavaScript', async t => {
		const root = await project(t, {
			'tsconfig.json': tsconfig(['src/**/*.js'], { allowJs: true }),
			'src/example.js': 'Promise.resolve(1)\n',
		})
		const instance = engine(root, defineConfig({
			rootDir: root,
			typeAware: {
				files: ['src/**/*.js'],
			},
		}))
		expectRule(await lint(instance, 'src/example.js', 'Promise.resolve(1)\n'), 'ts/no-floating-promises', [2])
		expectRule(await lint(instance, 'tools/example.js', 'Promise.resolve(1)\n'), 'ts/no-floating-promises', [])
	})

	void it('should keep Markdown and TypeScript behavior independent of diagnostic block names', async t => {
		const labels = Object.values(policy).flat().map(part => ({ part, name: part.name }))

		t.after(() => {
			for (const { part, name } of labels) part.name = name
		})

		for (const { part } of labels) part.name = 'arbitrary-diagnostic-label'

		const root = await project(t)
		const instance = engine(root, defineConfig({ rootDir: root, typeAware: false }))
		expectRule(await lint(instance, 'README.md', '# Example\n\n```js\nprocess.cwd()\n```\n'), 'node/prefer-global/process', [])
		expectRule(await lint(instance, 'README.md', '# Example\n\n### Skipped\n'), 'markdown/heading-increment', [2])
		expectRule(await lint(instance, 'example.ts', 'export const value = new Array(1, 2)\n'), 'ts/no-array-constructor', [2])
		expectRule(await lint(instance, 'scripts/example.ts', 'export function getValue() { return 1 }\n'), 'ts/explicit-function-return-type', [])
	})
})
