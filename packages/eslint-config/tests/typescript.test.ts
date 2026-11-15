import assert from 'node:assert/strict'
import { join } from 'node:path'
import { describe, it } from 'node:test'
import { defineConfig, definePreset, globs } from '../src/index.ts'
import { typed } from './fixtures/integrations.ts'
import { engine, expectRule, lint, project, tsconfig } from './helpers.ts'

void describe('TypeScript syntax and local projects', () => {
	for (const extension of ['ts', 'tsx', 'mts', 'cts']) {
		void it(`should enable typed linting for .${extension}`, async t => {
			const root = await project(t, {
				'tsconfig.json': tsconfig(['src/**/*']),
				[`src/example.${extension}`]: 'Promise.resolve(1)\n',
			})
			expectRule(await lint(engine(root, defineConfig({ rootDir: root })), `src/example.${extension}`, 'Promise.resolve(1)\n'), 'ts/no-floating-promises', [2])
		})
	}

	void it('should preserve TS syntax rules without a project when types are disabled', async t => {
		const root = await project(t)
		const result = await lint(engine(root, defineConfig({ rootDir: root, typeAware: false })), 'example.ts', 'export const value: any = 1\nPromise.resolve(1)\n')
		expectRule(result, 'ts/no-explicit-any', [1])
		expectRule(result, 'ts/no-floating-promises', [])
	})

	void it('should parse declaration files with their unused-variable exception', async t => {
		const root = await project(t, {
			'tsconfig.json': tsconfig(['src/**/*']),
			'src/example.d.ts': 'declare const unused: string\n',
		})
		expectRule(await lint(engine(root, defineConfig({ rootDir: root })), 'src/example.d.ts', 'declare const unused: string\n'), 'unused-imports/no-unused-vars', [])
	})

	void it('should fail explicitly for a typed file outside the local project', async t => {
		const root = await project(t, {
			'tsconfig.json': tsconfig(['src/**/*.ts']),
			'src/example.ts': 'export const value = 1\n',
		})
		const [result] = await engine(root, defineConfig({ rootDir: root })).lintText('export const value: number = 1\n', { filePath: 'outside.ts' })
		assert.equal(result?.fatalErrorCount, 1)
		assert.match(result.messages[0]?.message ?? '', /outside\.ts.*project service/i)
	})

	void it('should choose the nearest workspace project independently of rootDir and cwd', async t => {
		const root = await project(t, {
			'tsconfig.json': tsconfig(['root/**/*.ts']),
			'root/example.ts': 'export const value = 1\n',
			'packages/api/tsconfig.json': tsconfig(['src/**/*.ts']),
			'packages/api/src/global.d.ts': 'declare function task(): Promise<void>\n',
			'packages/api/src/example.ts': 'task()\n',
			'packages/web/tsconfig.json': tsconfig(['src/**/*.ts']),
			'packages/web/src/global.d.ts': 'declare function task(): void\n',
			'packages/web/src/example.ts': 'task()\n',
		})
		const instance = engine(join(root, 'packages'), defineConfig({ rootDir: root }))
		expectRule(await lint(instance, join(root, 'packages/api/src/example.ts'), 'task()\n'), 'ts/no-floating-promises', [2])
		expectRule(await lint(instance, join(root, 'packages/web/src/example.ts'), 'task()\n'), 'ts/no-floating-promises', [])
	})

	void it('should exclude root configs and scripts from typed parts without expanding tsconfig', async t => {
		const root = await project(t, {
			'tsconfig.json': tsconfig(['src/**/*.ts']),
			'src/example.ts': 'Promise.resolve(1)\n',
		})
		const instance = engine(root, defineConfig({
			rootDir: root,
			typeAware: {
				ignores: [
					...globs.configs,
					...globs.scripts,
				],
			},
		}))
		expectRule(await lint(instance, 'src/example.ts', 'Promise.resolve(1)\n'), 'ts/no-floating-promises', [2])

		for (const path of ['eslint.config.ts', 'scripts/release.ts']) {
			const result = await lint(instance, path, 'export const value: any = 1\nPromise.resolve(1)\n')
			expectRule(result, 'ts/no-floating-promises', [])
			expectRule(result, 'ts/no-explicit-any', [1])
		}
	})

	void it('should remove the parser when TypeScript is disabled', async t => {
		const root = await project(t)
		const [result] = await engine(root, defineConfig({
			rootDir: root,
			integrations: { typescript: false },
		})).lintText('export const value: number = 1\n', { filePath: 'example.ts' })
		assert.equal(result?.fatalErrorCount, 1)
		assert.match(result.messages[0]?.message ?? '', /unexpected token :/i)
	})
})

void describe('Native typed selection', () => {
	void it('should support native extglobs and ordinary syntax outside the selected area', async t => {
		const root = await project(t, {
			'tsconfig.json': tsconfig(['src/**/*.ts']),
			'src/normal/example.ts': 'Promise.resolve(1)\n',
		})
		const instance = engine(root, defineConfig({
			rootDir: root,
			typeAware: {
				files: ['src/!(generated)/**/*.ts'],
			},
		}))
		expectRule(await lint(instance, 'src/normal/example.ts', 'Promise.resolve(1)\n'), 'ts/no-floating-promises', [2])
		expectRule(await lint(instance, 'src/generated/example.ts', 'Promise.resolve(1)\n'), 'ts/no-floating-promises', [])
	})

	void it('should provide JS types only when explicitly selected and supported by tsconfig', async t => {
		const root = await project(t, {
			'tsconfig.json': tsconfig(['src/**/*.js'], { allowJs: true }),
			'src/example.js': 'Promise.resolve(1)\n',
		})
		expectRule(await lint(engine(root, defineConfig({ rootDir: root })), 'src/example.js', 'Promise.resolve(1)\n'), 'ts/no-floating-promises', [])

		expectRule(await lint(engine(root, defineConfig({
			rootDir: root,
			typeAware: { files: globs.javascript },
		})), 'src/example.js', 'Promise.resolve(1)\n'), 'ts/no-floating-promises', [2])
	})

	void it('should apply explicit syntax-rule overrides to typed JavaScript as well as TypeScript', async t => {
		const root = await project(t, {
			'tsconfig.json': tsconfig(['src/**/*.js'], { allowJs: true }),
			'src/example.js': 'const unused = 1\n',
		})
		const instance = engine(root, defineConfig({
			rootDir: root,
			typeAware: { files: globs.javascript },
			rules: { 'ts/no-unused-vars': 'error' },
		}))
		expectRule(await lint(instance, 'src/example.js', 'const unused = 1\n'), 'ts/no-unused-vars', [2])
	})

	void it('should keep JSON and YAML independent of globally enabled code types', async t => {
		const root = await project(t, {
			'tsconfig.json': tsconfig(['src/**/*.js'], { allowJs: true }),
			'src/example.js': 'Promise.resolve(1)\n',
		})
		const instance = engine(root, defineConfig({ rootDir: root, typeAware: true }))
		expectRule(await lint(instance, 'src/example.js', 'Promise.resolve(1)\n'), 'ts/no-floating-promises', [2])
		expectRule(await lint(instance, 'example.json', '{"value":1,"value":2}\n'), 'jsonc/no-dupe-keys', [2])
		await lint(instance, 'example.yaml', 'value: 1\n')
	})

	void it('should fully remove Project Service through a separate syntax-only configuration', async t => {
		const root = await project(t, {
			'tsconfig.json': tsconfig(['src/**/*.ts']),
			'src/example.ts': 'Promise.resolve(1)\n',
		})
		const instance = engine(root, [
			...defineConfig({
				rootDir: root,
				ignores: ['tools/**'],
			}),
			...defineConfig({
				rootDir: root,
				files: ['tools/**'],
				typeAware: false,
			}),
		])
		expectRule(await lint(instance, 'src/example.ts', 'Promise.resolve(1)\n'), 'ts/no-floating-promises', [2])
		expectRule(await lint(instance, 'tools/example.ts', 'Promise.resolve(1)\n'), 'ts/no-floating-promises', [])
	})
})

void describe('Shared capabilities for typed rules', () => {
	void it('should restrict external typed integration parts with the same provider selection', async t => {
		const root = await project(t, {
			'tsconfig.json': tsconfig(['src/**/*.ts']),
			'src/example.ts': 'Promise.resolve(1)\n',
		})
		const instance = engine(root, defineConfig({
			rootDir: root,
			use: [typed],
			typeAware: {
				ignores: ['scripts/**'],
			},
		}))
		expectRule(await lint(instance, 'src/example.ts', 'Promise.resolve(1)\n'), 'typed/floating-promise', [2])
		expectRule(await lint(instance, 'scripts/example.ts', 'Promise.resolve(1)\n'), 'typed/floating-promise', [])
		expectRule(await lint(instance, 'example.mjs', 'Promise.resolve(1)\n'), 'typed/floating-promise', [])
	})

	void it('should apply typed overrides inside their native scopes and exclude virtual Markdown blocks', async t => {
		const source = 'export const matches = [\'x\'].indexOf(\'x\') === 0\n'
		const root = await project(t, {
			'tsconfig.json': tsconfig(['src/**/*.ts']),
			'src/example.ts': source,
		})
		const shared = definePreset({
			scopes: [
				{
					files: globs.typescript,
					rules: { 'e18e/no-indexof-equality': 'error' },
				},
			],
		})
		const instance = engine(root, defineConfig({
			rootDir: root,
			extends: [shared],
		}))
		expectRule(await lint(instance, 'src/example.ts', source), 'e18e/no-indexof-equality', [2])
		expectRule(await lint(instance, 'README.md', `# Example\n\n\`\`\`ts\n${source}\`\`\`\n`), 'e18e/no-indexof-equality', [])
	})

	void it('should let later global type disabling remove inherited typed overrides', async t => {
		const root = await project(t)
		const shared = definePreset({
			rules: { 'e18e/no-indexof-equality': 'error' },
		})
		const result = await lint(engine(root, defineConfig({
			rootDir: root,
			extends: [shared],
			typeAware: false,
		})), 'example.ts', 'export const matches = [\'x\'].indexOf(\'x\') === 0\n')
		expectRule(result, 'e18e/no-indexof-equality', [])
	})

	void it('should remove inherited third-party typed overrides when their TS provider is disabled', async t => {
		const root = await project(t)
		const shared = definePreset({
			rules: { 'e18e/no-indexof-equality': 'error' },
		})
		const instance = engine(root, defineConfig({
			rootDir: root,
			extends: [shared],
			integrations: { typescript: false },
		}))
		expectRule(await lint(instance, 'example.mjs', 'export const matches = [\'x\'].indexOf(\'x\') === 0\n'), 'e18e/no-indexof-equality', [])

		assert.throws(() => defineConfig({
			rootDir: root,
			integrations: { typescript: false },
			rules: { 'e18e/no-indexof-equality': 'error' },
		}), /typeInformation/)
	})

	void it('should reject explicitly requested typed rules when types are globally disabled', async t => {
		const root = await project(t)

		assert.throws(() => defineConfig({
			rootDir: root,
			typeAware: false,
			rules: { 'e18e/no-indexof-equality': 'error' },
		}), /typeInformation/)
	})

	void it('should reject requesting types without a provider', async t => {
		const root = await project(t)

		assert.throws(() => defineConfig({
			rootDir: root,
			typeAware: true,
			integrations: { typescript: false },
		}), /typescript/)
	})
})
