import type { Linter } from 'eslint'
import type { TestContext } from 'node:test'
import assert from 'node:assert/strict'
import { mkdir, mkdtemp, rm, writeFile } from 'node:fs/promises'
import { tmpdir } from 'node:os'
import { dirname, join } from 'node:path'
import { ESLint } from 'eslint'

export async function project(t: TestContext, files: Record<string, string> = {}): Promise<string> {
	const root = await mkdtemp(join(tmpdir(), 'eslint-product-'))

	t.after(async () => {
		await rm(root, { recursive: true, force: true })
	})

	for (const [name, content] of Object.entries(files)) {
		const path = join(root, name)
		await mkdir(dirname(path), { recursive: true })
		await writeFile(path, content)
	}

	return root
}

export function engine(root: string, config: Linter.Config[], options: Partial<ESLint.Options> = {}): ESLint {
	return new ESLint({
		cwd: root,
		overrideConfigFile: true,
		overrideConfig: config,
		...options,
	})
}

/** A targeted rule assertion must never pass because the file was ignored or failed to parse. */
export async function lint(instance: ESLint, file: string, source: string): Promise<ESLint.LintResult> {
	assert.equal(await instance.isPathIgnored(file), false, `${file} must be linted`)
	const [result] = await instance.lintText(source, { filePath: file })
	assert.ok(result, `${file} must produce a result`)
	assert.equal(result.fatalErrorCount, 0, JSON.stringify(result.messages))
	assert.ok(result.messages.every(message => typeof message.ruleId === 'string'), JSON.stringify(result.messages))

	return result
}

export function rule(result: ESLint.LintResult, id: string): Linter.LintMessage[] {
	return result.messages.filter(message => message.ruleId === id)
}

export function expectRule(result: ESLint.LintResult, id: string, severities: number[]): void {
	assert.deepEqual(rule(result, id).map(message => message.severity), severities, JSON.stringify(result.messages))
}

export function tsconfig(include: string[], compilerOptions: object = {}): string {
	return JSON.stringify({
		compilerOptions: {
			strict: true,
			target: 'ES2022',
			module: 'NodeNext',
			moduleResolution: 'NodeNext',
			types: [],
			...compilerOptions,
		},
		include,
	})
}
