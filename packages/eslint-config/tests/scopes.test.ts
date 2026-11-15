import assert from 'node:assert/strict'
import { join } from 'node:path'
import { describe, it } from 'node:test'
import { defineConfig, definePreset, globs } from '../src/index.ts'
import { engine, expectRule, lint, project } from './helpers.ts'

const source = 'console.log(1)\n'

void describe('Native scoped overrides', () => {
	void it('should use declaration order instead of specificity', async t => {
		const root = await project(t)
		const instance = engine(root, defineConfig({
			rootDir: root,
			scopes: [
				{
					files: ['src/special/**'],
					rules: { 'no-console': 'off' },
				},
				{
					files: ['src/**'],
					rules: { 'no-console': 'error' },
				},
			],
		}))
		expectRule(await lint(instance, 'src/special/example.mjs', source), 'no-console', [2])
		expectRule(await lint(instance, 'other/example.mjs', source), 'no-console', [1])
	})

	void it('should support native AND groups and OR alternatives', async t => {
		const root = await project(t)
		const instance = engine(root, defineConfig({
			rootDir: root,
			scopes: [
				{
					files: [
						['src/**', '**/*.mjs'],
						'tools/*.mjs',
					],
					rules: { 'no-console': 'off' },
				},
			],
		}))

		for (const path of ['src/example.mjs', 'tools/example.mjs']) expectRule(await lint(instance, path, source), 'no-console', [])

		for (const path of ['src/example.js', 'tools/nested/example.mjs']) expectRule(await lint(instance, path, source), 'no-console', [1])
	})

	void it('should support native extglobs, character classes and brace ranges', async t => {
		const root = await project(t)
		const instance = engine(root, defineConfig({
			rootDir: root,
			scopes: [
				{
					files: ['src/!(generated)/*.mjs', 'tools/[ab].mjs', 'steps/{1..3}.mjs'],
					rules: { 'no-console': 'off' },
				},
			],
		}))

		for (const path of ['src/manual/example.mjs', 'tools/a.mjs', 'steps/2.mjs']) expectRule(await lint(instance, path, source), 'no-console', [])

		for (const path of ['src/generated/example.mjs', 'tools/c.mjs', 'steps/4.mjs']) expectRule(await lint(instance, path, source), 'no-console', [1])
	})

	void it('should intersect native extends with a scope basePath and files', async t => {
		const root = await project(t)
		const instance = engine(root, defineConfig({
			rootDir: root,
			scopes: [
				{
					basePath: 'packages/api',
					files: ['src/**'],
					extends: [
						{
							basePath: 'src',
							files: ['**/*.test.mjs'],
							rules: { 'no-console': 'off' },
						},
					],
				},
			],
		}))
		expectRule(await lint(instance, 'packages/api/src/example.test.mjs', source), 'no-console', [])

		for (const path of ['packages/api/example.test.mjs', 'packages/web/src/example.test.mjs', 'packages/api/src/example.mjs']) expectRule(await lint(instance, path, source), 'no-console', [1])
	})

	void it('should keep scoped ignores local and honor negated reinclusion', async t => {
		const root = await project(t)
		const instance = engine(root, defineConfig({
			rootDir: root,
			scopes: [
				{
					files: ['src/**'],
					ignores: ['src/keep/**', '!src/keep/change/**'],
					rules: { 'no-console': 'off' },
				},
			],
		}))
		expectRule(await lint(instance, 'src/example.mjs', source), 'no-console', [])
		expectRule(await lint(instance, 'src/keep/example.mjs', source), 'no-console', [1])
		expectRule(await lint(instance, 'src/keep/change/example.mjs', source), 'no-console', [])
	})

	void it('should keep literal basePath directories and leading extglobs correctly anchored', async t => {
		const root = await project(t)
		const instance = engine(root, defineConfig({
			rootDir: root,
			scopes: [
				{
					basePath: 'packages/[api]',
					files: ['!(generated)/*.mjs'],
					rules: { 'no-console': 'off' },
				},
			],
		}))
		expectRule(await lint(instance, 'packages/[api]/manual/example.mjs', source), 'no-console', [])

		for (const path of ['packages/[api]/generated/example.mjs', 'packages/a/manual/example.mjs', 'manual/example.mjs']) expectRule(await lint(instance, path, source), 'no-console', [1])
	})

	void it('should keep negated file selectors inside basePath', async t => {
		const root = await project(t)
		const instance = engine(root, defineConfig({
			rootDir: root,
			scopes: [
				{
					basePath: 'packages/api',
					files: [
						['**/*.mjs', '!generated/**'],
					],
					rules: { 'no-console': 'off' },
				},
			],
		}))
		expectRule(await lint(instance, 'packages/api/example.mjs', source), 'no-console', [])
		expectRule(await lint(instance, 'packages/api/generated/example.mjs', source), 'no-console', [1])
		expectRule(await lint(instance, 'packages/web/example.mjs', source), 'no-console', [1])
	})

	void it('should let ESLint handle empty intersections without a custom satisfiability check', async t => {
		const root = await project(t)
		const instance = engine(root, defineConfig({
			rootDir: root,
			scopes: [
				{
					files: ['src/a*.mjs'],
					extends: [
						{
							files: ['src/b*.mjs'],
							rules: { 'no-console': 'off' },
						},
					],
				},
			],
		}))
		expectRule(await lint(instance, 'src/actual.mjs', source), 'no-console', [1])
	})

	void it('should anchor inherited selectors independently of cwd', async t => {
		const root = await project(t)
		const parent = definePreset({
			scopes: [
				{
					files: ['packages/api/**'],
					rules: { 'no-console': 'off' },
				},
			],
		})
		const instance = engine(join(root, 'packages'), defineConfig({
			rootDir: root,
			extends: [parent],
		}))
		expectRule(await lint(instance, join(root, 'packages/api/example.mjs'), source), 'no-console', [])
		expectRule(await lint(instance, join(root, 'packages/web/example.mjs'), source), 'no-console', [1])
	})
})

void describe('Separate complete configurations', () => {
	void it('should fully disable and restore integrations through disjoint configurations', async t => {
		const root = await project(t)
		const shared = definePreset({
			rules: { 'ts/naming-convention': 'off' },
		})
		const config = [
			...defineConfig({
				rootDir: root,
				extends: [shared],
				ignores: ['packages/**'],
			}),
			...defineConfig({
				rootDir: join(root, 'packages/api'),
				extends: [shared],
				ignores: ['new/**'],
				integrations: { stylistic: false },
			}),
			...defineConfig({
				rootDir: join(root, 'packages/api'),
				extends: [shared],
				files: ['new/**'],
			}),
		]
		const instance = engine(root, config)

		for (const [path, expected] of [
			[
				'example.mjs',
				[2],
			],
			['packages/api/example.mjs', []],
			[
				'packages/api/new/example.mjs',
				[2],
			],
		] as const) expectRule(await lint(instance, path, 'export const value = "hello"\n'), 'style/quotes', [...expected])
	})

	void it('should preserve native additive behavior when complete configurations overlap', async t => {
		const root = await project(t)
		const instance = engine(root, [
			...defineConfig({ rootDir: root }),
			...defineConfig({
				rootDir: root,
				files: ['plain/**'],
				integrations: { stylistic: false },
			}),
		])
		expectRule(await lint(instance, 'plain/example.mjs', 'export const value = "hello"\n'), 'style/quotes', [2])
	})

	void it('should handle forty workspace configurations without a selector expansion limit', async t => {
		const root = await project(t)
		const config = Array.from({ length: 40 }, (_, index) => defineConfig({
			rootDir: join(root, `packages/workspace-${index}`),
			integrations: { stylistic: index % 2 === 0 },
			typeAware: {
				ignores: ['tools/**'],
			},
		})).flat()
		const instance = engine(root, config)

		for (const index of [0, 1, 18, 19, 38, 39]) {
			expectRule(await lint(instance, `packages/workspace-${index}/example.mjs`, 'export const value = "hello"\n'), 'style/quotes', index % 2
				? []
				: [2])
		}
	})

	void it('should support relative basePath in raw flat configs inside the complete boundary', async t => {
		const root = await project(t)
		const instance = engine(root, defineConfig({ rootDir: root }, {
			basePath: 'tools',
			files: ['**/*.mjs'],
			rules: { 'no-console': 'off' },
		}))
		expectRule(await lint(instance, 'tools/example.mjs', source), 'no-console', [])
		expectRule(await lint(instance, 'src/example.mjs', source), 'no-console', [1])
	})

	void it('should keep raw flat configs within the complete configuration boundary', async t => {
		const root = await project(t)
		const instance = engine(root, [
			...defineConfig({
				rootDir: root,
				ignores: ['plain/**'],
			}, {
				rules: { 'no-console': 'error' },
			}),
			...defineConfig({
				rootDir: root,
				files: ['plain/**'],
				rules: { 'no-console': 'off' },
			}),
		])
		expectRule(await lint(instance, 'example.mjs', source), 'no-console', [2])
		expectRule(await lint(instance, 'plain/example.mjs', source), 'no-console', [])
	})
})

void describe('Global exclusions and convenience globs', () => {
	void it('should accumulate global ignores across presets', async t => {
		const root = await project(t)
		const parent = definePreset({
			globalIgnores: ['generated/**'],
		})
		const instance = engine(root, defineConfig({
			rootDir: root,
			extends: [parent],
			globalIgnores: ['vendor/**'],
		}))

		for (const path of ['generated/example.mjs', 'vendor/example.mjs', 'dist/example.mjs']) assert.equal(await instance.isPathIgnored(path), true)

		expectRule(await lint(instance, 'src/example.mjs', source), 'no-console', [1])
	})

	void it('should honor gitignore and allow opting out', async t => {
		const root = await project(t, { '.gitignore': 'ignored/\n' })
		assert.equal(await engine(root, defineConfig({ rootDir: root })).isPathIgnored('ignored/example.mjs'), true)
		expectRule(await lint(engine(root, defineConfig({ rootDir: root, gitignore: false })), 'ignored/example.mjs', source), 'no-console', [1])
	})

	void it('should expose explicit file groups without matching similar names', async t => {
		const root = await project(t)
		const instance = engine(root, defineConfig({
			rootDir: root,
			typeAware: false,
			scopes: [
				{
					files: [
						...globs.tests,
						...globs.configs,
						...globs.scripts,
					],
					rules: { 'no-console': 'off' },
				},
			],
		}))

		for (const path of ['example.test.ts', 'eslint.config.ts', 'tools/example.ts']) expectRule(await lint(instance, path, source), 'no-console', [])

		for (const path of ['src/testing.ts', 'src/config.ts']) expectRule(await lint(instance, path, source), 'no-console', [1])
	})
})
