import assert from 'node:assert/strict'
import { describe, it } from 'node:test'
import { createConfigFactory, defineConfig, defineIntegration, definePreset, globs } from '../src/index.ts'
import { typed, words } from './fixtures/integrations.ts'
import { engine, expectRule, lint, project, tsconfig } from './helpers.ts'

void describe('Integration rule overrides', () => {
	void it('should configure ordinary TypeScript rules without file selectors', async t => {
		const root = await project(t)
		const result = await lint(engine(root, defineConfig({
			rootDir: root,
			typeAware: false,
			integrations: {
				typescript: {
					overrides: { 'ts/no-explicit-any': 'off' },
				},
			},
		})), 'example.ts', 'export const value: any = 1\n')
		expectRule(result, 'ts/no-explicit-any', [])
	})

	void it('should keep TypeScript core overrides inside its applicability area', async t => {
		const root = await project(t)
		const instance = engine(root, defineConfig({
			rootDir: root,
			typeAware: false,
			integrations: {
				typescript: {
					overrides: { 'no-console': 'off' },
				},
			},
		}))
		expectRule(await lint(instance, 'example.ts', 'console.log(1)\n'), 'no-console', [])
		expectRule(await lint(instance, 'example.mjs', 'console.log(1)\n'), 'no-console', [1])
	})

	void it('should apply test overrides only to test files', async t => {
		const root = await project(t)
		const instance = engine(root, defineConfig({
			rootDir: root,
			integrations: {
				test: {
					overrides: { 'test/no-only-tests': 'warn' },
				},
			},
		}))
		const source = 'test.only(\'example\', () => {})\n'
		expectRule(await lint(instance, 'example.test.mjs', source), 'test/no-only-tests', [1])
		expectRule(await lint(instance, 'example.mjs', source), 'test/no-only-tests', [])
	})

	void it('should retain options across inherited severity-only overrides and replace explicit option tuples', async t => {
		const root = await project(t)
		const parent = definePreset({
			integrations: {
				stylistic: {
					overrides: {
						'style/quotes': ['error', 'double'],
					},
				},
			},
		})
		const config = createConfigFactory({
			rootDir: root,
			extends: [parent],
		})
		const warning = engine(root, config({
			integrations: {
				stylistic: {
					overrides: { 'style/quotes': 'warn' },
				},
			},
		}))
		expectRule(await lint(warning, 'example.mjs', 'export const value = \'hello\'\n'), 'style/quotes', [1])
		expectRule(await lint(warning, 'example.mjs', 'export const value = "hello"\n'), 'style/quotes', [])
		const replaced = engine(root, config({
			integrations: {
				stylistic: {
					overrides: {
						'style/quotes': ['error', 'single'],
					},
				},
			},
		}))
		expectRule(await lint(replaced, 'example.mjs', 'export const value = "hello"\n'), 'style/quotes', [2])
	})

	void it('should apply each layer integration overrides before rules and scopes', async t => {
		const root = await project(t)
		const parent = definePreset({
			rules: { 'style/quotes': 'error' },
		})
		const config = createConfigFactory({
			rootDir: root,
			extends: [parent],
		})

		expectRule(await lint(engine(root, config({
			integrations: {
				stylistic: {
					overrides: { 'style/quotes': 'warn' },
				},
			},
		})), 'example.mjs', 'export const value = "hello"\n'), 'style/quotes', [1])

		expectRule(await lint(engine(root, config({
			integrations: {
				stylistic: {
					overrides: { 'style/quotes': 'warn' },
				},
			},
			rules: { 'style/quotes': 'off' },
		})), 'example.mjs', 'export const value = "hello"\n'), 'style/quotes', [])

		expectRule(await lint(engine(root, config({
			integrations: {
				stylistic: {
					overrides: { 'style/quotes': 'off' },
				},
			},
			scopes: [
				{
					files: ['**/*.mjs'],
					rules: { 'style/quotes': 'warn' },
				},
			],
		})), 'example.mjs', 'export const value = "hello"\n'), 'style/quotes', [1])
	})

	void it('should remove inherited integration overrides on false and restore them on true', async t => {
		const root = await project(t)
		const parent = definePreset({
			integrations: {
				unicorn: {
					overrides: { 'unicorn/filename-case': 'warn' },
				},
			},
		})
		const disabled = definePreset({
			extends: [parent],
			integrations: { unicorn: false },
		})
		const config = createConfigFactory({
			rootDir: root,
			extends: [disabled],
		})
		expectRule(await lint(engine(root, config()), 'wrong_name.mjs', 'export const value = 1\n'), 'unicorn/filename-case', [])

		expectRule(await lint(engine(root, config({
			integrations: { unicorn: true },
		})), 'wrong_name.mjs', 'export const value = 1\n'), 'unicorn/filename-case', [1])

		expectRule(await lint(engine(root, config({
			rules: { 'unicorn/filename-case': 'error' },
		})), 'wrong_name.mjs', 'export const value = 1\n'), 'unicorn/filename-case', [2])
	})

	void it('should apply external integration overrides without passing reserved maps as configure options', async t => {
		const root = await project(t)
		const parent = definePreset({
			use: [words],
			integrations: {
				words: {
					overrides: {
						'words/restricted': [
							'error',
							{
								names: ['restricted'],
							},
						],
					},
				},
			},
		})
		const config = createConfigFactory({
			rootDir: root,
			extends: [parent],
		})
		const instance = engine(root, config({
			integrations: {
				words: {
					overrides: { 'words/restricted': 'warn' },
				},
			},
		}))
		expectRule(await lint(instance, 'example.mjs', 'export const restricted = 1\n'), 'words/restricted', [1])
		expectRule(await lint(instance, 'example.mjs', 'export const banned = 1\n'), 'words/restricted', [])
	})

	void it('should honor an external integration override scope natively', async t => {
		const root = await project(t)
		const feature = defineIntegration()({
			id: 'feature',
			defaults: {},
			overridesScope: {
				files: ['src/!(generated)/**'],
			},
			ruleMeta: {},
			configure: () => [],
		})
		const instance = engine(root, defineConfig({
			rootDir: root,
			use: [feature],
			integrations: {
				feature: {
					overrides: { 'no-console': 'off' },
				},
			},
		}))
		expectRule(await lint(instance, 'src/manual/example.mjs', 'console.log(1)\n'), 'no-console', [])
		expectRule(await lint(instance, 'src/generated/example.mjs', 'console.log(1)\n'), 'no-console', [1])
	})

	void it('should reject overriding another integration rule through an unrelated options map', async t => {
		const root = await project(t)

		assert.throws(() => defineConfig({
			rootDir: root,
			integrations: {
				unicorn: {
					overrides: {
						// @ts-expect-error An integration cannot own another integration rule.
						'style/quotes': 'off',
					},
				},
			},
		}), /not provided by integration unicorn/)
	})
})

void describe('Type-aware integration overrides', () => {
	void it('should apply typed overrides inside the shared provider area and after general overrides', async t => {
		const root = await project(t, {
			'tsconfig.json': tsconfig(['src/**/*.ts']),
			'src/example.ts': 'Promise.resolve(1)\n',
		})
		const instance = engine(root, defineConfig({
			rootDir: root,
			typeAware: { ignores: globs.scripts },
			integrations: {
				typescript: {
					overrides: { 'ts/no-floating-promises': 'off' },
					overridesTypeAware: { 'ts/no-floating-promises': 'warn' },
				},
			},
		}))
		expectRule(await lint(instance, 'src/example.ts', 'Promise.resolve(1)\n'), 'ts/no-floating-promises', [1])
		expectRule(await lint(instance, 'scripts/example.ts', 'Promise.resolve(1)\n'), 'ts/no-floating-promises', [])
		expectRule(await lint(instance, 'example.mjs', 'Promise.resolve(1)\n'), 'ts/no-floating-promises', [])
	})

	void it('should not enable types from an override map when typed linting is disabled', async t => {
		const root = await project(t)
		const result = await lint(engine(root, defineConfig({
			rootDir: root,
			typeAware: false,
			integrations: {
				typescript: {
					overridesTypeAware: { 'ts/no-floating-promises': 'error' },
				},
			},
		})), 'example.ts', 'Promise.resolve(1)\n')
		expectRule(result, 'ts/no-floating-promises', [])
	})

	void it('should support typed overrides of other built-in sources', async t => {
		const source = 'export const matches = [\'x\'].indexOf(\'x\') === 0\n'
		const root = await project(t, {
			'tsconfig.json': tsconfig(['src/**/*.ts']),
			'src/example.ts': source,
		})

		expectRule(await lint(engine(root, defineConfig({
			rootDir: root,
			integrations: {
				e18e: {
					overridesTypeAware: { 'e18e/no-indexof-equality': 'warn' },
				},
			},
		})), 'src/example.ts', source), 'e18e/no-indexof-equality', [1])
	})

	void it('should infer external typed metadata and apply typed options through the same contract', async t => {
		const root = await project(t, {
			'tsconfig.json': tsconfig(['src/**/*.ts']),
			'src/example.ts': 'Promise.resolve(1)\n',
		})
		const instance = engine(root, defineConfig({
			rootDir: root,
			use: [typed],
			integrations: {
				typed: {
					overridesTypeAware: { 'typed/floating-promise': 'warn' },
				},
			},
		}))
		expectRule(await lint(instance, 'src/example.ts', 'Promise.resolve(1)\n'), 'typed/floating-promise', [1])
	})

	void it('should apply TypeScript overrides to explicitly typed JavaScript too', async t => {
		const root = await project(t, {
			'tsconfig.json': tsconfig(['src/**/*.js'], { allowJs: true }),
			'src/example.js': 'Promise.resolve(1)\nconsole.log(1)\n',
		})
		const instance = engine(root, defineConfig({
			rootDir: root,
			typeAware: { files: globs.javascript },
			integrations: {
				typescript: {
					overrides: { 'no-console': 'off' },
					overridesTypeAware: { 'ts/no-floating-promises': 'warn' },
				},
			},
		}))
		const result = await lint(instance, 'src/example.js', 'Promise.resolve(1)\nconsole.log(1)\n')
		expectRule(result, 'no-console', [])
		expectRule(result, 'ts/no-floating-promises', [1])
	})

	void it('should remove integration core overrides when that integration is disabled', async t => {
		const root = await project(t)
		const shared = definePreset({
			integrations: {
				typescript: {
					overrides: { 'no-console': 'off' },
				},
			},
		})
		const result = await lint(engine(root, defineConfig({
			rootDir: root,
			extends: [shared],
			integrations: { typescript: false },
		})), 'example.ts', 'console.log(1)\n')
		expectRule(result, 'no-console', [1])
	})

	void it('should reject non-typed rules in overridesTypeAware for untyped consumers too', async t => {
		const root = await project(t)

		assert.throws(() => defineConfig({
			rootDir: root,
			integrations: {
				typescript: {
					overridesTypeAware: {
						// @ts-expect-error Only typed rule IDs belong to this map.
						'ts/no-explicit-any': 'off',
					},
				},
			},
		}), /does not require typeInformation/)
	})
})
