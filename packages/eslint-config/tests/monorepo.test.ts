import type { ESLint } from 'eslint'
import type { TestContext } from 'node:test'
import assert from 'node:assert/strict'
import { execFile } from 'node:child_process'
import { mkdir, symlink } from 'node:fs/promises'
import { createRequire } from 'node:module'
import { join } from 'node:path'
import process from 'node:process'
import { describe, it } from 'node:test'
import { promisify } from 'node:util'
import { expectRule, project, tsconfig } from './helpers.ts'

const execute = promisify(execFile)
const require = createRequire(import.meta.url)
const cli = join(require.resolve('eslint/package.json'), '..', 'bin/eslint.js')
const entry = JSON.stringify(new URL('../src/index.ts', import.meta.url).href)

async function fixture(t: TestContext, localConfig: boolean): Promise<string> {
	const root = await project(t, {
		'package.json': '{"type":"module","private":true}',
		'pnpm-workspace.yaml': 'packages:\n  - packages/*\n',
		'tsconfig.json': tsconfig(['root/**/*.ts']),
		'root/example.ts': 'export const value = 1\n',
		'packages/lint-policy/package.json': '{"name":"@repo/lint-policy","type":"module","exports":"./index.mjs"}',
		'packages/lint-policy/index.mjs': `import {definePreset,globs} from ${entry}; export const repo = definePreset({rules:{'ts/naming-convention':'off'},typeAware:{ignores:globs.configs}})`,
		'eslint.config.mjs': `import {defineConfig} from ${entry};import{repo}from'@repo/lint-policy';export default ${localConfig ? 'defineConfig({rootDir:import.meta.dirname,extends:[repo],gitignore:false})' : '[...defineConfig({rootDir:import.meta.dirname,extends:[repo],gitignore:false,ignores:[\'packages/**\']}),...defineConfig({rootDir:import.meta.dirname+\'/packages/api\',extends:[repo],gitignore:false}),...defineConfig({rootDir:import.meta.dirname+\'/packages/web\',extends:[repo],gitignore:false})]'}`,
		'packages/api/tsconfig.json': tsconfig(['src/**/*.ts']),
		'packages/api/src/example.ts': 'import { task } from \'@repo/domain\'\ntask()\nconsole.log("api")\n',
		'packages/web/src/example.js': 'Promise.resolve(1)\n',
		'packages/domain/package.json': JSON.stringify({
			name: '@repo/domain',
			type: 'module',
			exports: {
				'.': { types: './index.d.ts', default: './index.js' },
			},
		}),
		'packages/domain/index.d.ts': 'export declare function task(): Promise<void>\n',
		'packages/domain/index.js': 'export async function task() {}\n',
		...(localConfig
			? { 'packages/api/eslint.config.mjs': `import {defineConfig} from ${entry};import{repo}from'@repo/lint-policy';export default defineConfig({rootDir:import.meta.dirname,extends:[repo],gitignore:false,integrations:{stylistic:false},rules:{'no-console':'error'}})` }
			: {}),
	})
	await mkdir(join(root, 'node_modules/@repo'), { recursive: true })

	for (const name of ['lint-policy', 'domain'])
		await symlink(join(root, 'packages', name), join(root, 'node_modules/@repo', name), 'dir')

	return root
}

async function lintCLI(cwd: string, path: string): Promise<ESLint.LintResult[]> {
	let output: string

	try {
		const result = await execute(process.execPath, [cli, '--format', 'json', path], { cwd, maxBuffer: 2e6 })
		output = result.stdout
	}
	catch (err) {
		if (!(err && typeof err === 'object' && 'code' in err && err.code === 1 && 'stdout' in err))
			throw err

		output = String(err.stdout)
	}

	const results = JSON.parse(output) as ESLint.LintResult[]
	assert.equal(results.length, 1, output)

	for (const result of results) {
		assert.equal(result.fatalErrorCount, 0, output)
		assert.ok(result.messages.every(message => typeof message.ruleId === 'string'), output)
	}

	return results
}

void describe('Monorepo CLI and package exports', () => {
	void it('should select the nearest workspace config identically from the root and package cwd', async t => {
		const root = await fixture(t, true)
		const fromRoot = await lintCLI(root, 'packages/api/src/example.ts')
		const local = await lintCLI(join(root, 'packages/api'), 'src/example.ts')
		assert.deepEqual(fromRoot, local)
		const [result] = fromRoot
		assert.ok(result)
		expectRule(result, 'ts/no-floating-promises', [2])
		expectRule(result, 'no-console', [2])
		assert.ok(result.messages.every(message => !message.ruleId?.startsWith('style/')), JSON.stringify(result.messages))
	})

	void it('should support a single root config from either working directory', async t => {
		const root = await fixture(t, false)
		const fromRoot = await lintCLI(root, 'packages/api/src/example.ts')
		const local = await lintCLI(join(root, 'packages/api'), 'src/example.ts')
		assert.deepEqual(fromRoot, local)
		const [result] = fromRoot
		assert.ok(result)
		expectRule(result, 'ts/no-floating-promises', [2])
		expectRule(result, 'no-console', [1])
		expectRule(result, 'style/quotes', [2])
	})

	void it('should leave JS-only workspaces untyped even when the root uses TypeScript', async t => {
		const root = await fixture(t, true)
		const [result] = await lintCLI(root, 'packages/web/src/example.js')
		assert.ok(result)
		expectRule(result, 'ts/no-floating-promises', [])
	})
})
