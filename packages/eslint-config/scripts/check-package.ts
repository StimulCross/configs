import assert from 'node:assert/strict'
import { execFile } from 'node:child_process'
import { mkdir, mkdtemp, readFile, rm, writeFile } from 'node:fs/promises'
import { createRequire } from 'node:module'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import process from 'node:process'
import { fileURLToPath } from 'node:url'
import { promisify } from 'node:util'

const root = fileURLToPath(new URL('../', import.meta.url))
const work = await mkdtemp(join(tmpdir(), 'eslint-config-consumer-'))
const exec = promisify(execFile)
const publishablePaths = /^(?:dist\/.*\.(?:js|d\.ts)|package\.json|LICENSE|README\.md)$/
const localDependency = /^(?:workspace:|file:|link:)/
const relativePrefix = /^\.\//
const env: NodeJS.ProcessEnv = { ...process.env, npm_config_manage_package_manager_versions: 'false', npm_config_verify_deps_before_run: 'false' }
delete env['npm_config_allow_scripts']
delete env['NPM_CONFIG_ALLOW_SCRIPTS']

try {
	const pack = await exec('npm', [
		'--cache',
		join(work, 'npm-cache'),
		'pack',
		'--ignore-scripts',
		'--json',
		'--pack-destination',
		work,
	], { cwd: root, env })
	const [artifact] = JSON.parse(pack.stdout) as { filename: string, files: { path: string }[] }[]
	assert.ok(artifact)

	for (const path of [
		'dist/index.js',
		'dist/index.d.ts',
		'dist/globs.js',
		'dist/globs.d.ts',
		'LICENSE',
		'README.md',
	])
		assert.ok(artifact.files.some(file => file.path === path), `Missing package file: ${path}`)

	assert.ok(artifact.files.every(file => publishablePaths.test(file.path)))

	for (const file of artifact.files) {
		const content = await readFile(join(root, file.path), 'utf8')
		assert.doesNotMatch(content, /(?:\/home\/|\/Users\/|[A-Z]:\\Users\\)/, `Machine-specific path in ${file.path}`)
	}

	const metadata = JSON.parse(await readFile(join(root, 'package.json'), 'utf8')) as {
		private?: boolean
		dependencies: Record<string, string>
		exports: Record<string, Record<string, string>>
	}
	assert.notEqual(metadata.private, true)
	assert.ok(Object.values(metadata.dependencies).every(value => !localDependency.test(value)))

	for (const entry of Object.values(metadata.exports)) {
		for (const path of Object.values(entry))
			assert.ok(artifact.files.some(file => file.path === path.replace(relativePrefix, '')), `Missing export: ${path}`)
	}

	const consumer = join(work, 'consumer')
	await mkdir(consumer)
	const files: Record<string, string> = {
		'package.json': JSON.stringify({
			private: true,
			type: 'module',
			dependencies: {
				'@stimulcross/eslint-config': `file:${join(work, artifact.filename)}`,
				'eslint': '10.4.0',
				'typescript': '6.0.3',
				'@types/node': '25.9.1',
			},
		}),
		'tsconfig.json': JSON.stringify({
			compilerOptions: {
				strict: true,
				types: ['node'],
				target: 'ES2022',
				module: 'NodeNext',
				moduleResolution: 'NodeNext',
				declaration: true,
				emitDeclarationOnly: true,
				outDir: 'declarations',
				skipLibCheck: false,
			},
			include: ['src/**/*.ts', 'check.ts'],
		}),
		'check.ts': `import {createConfigFactory,definePreset,globs} from '@stimulcross/eslint-config'
import {globs as subpathGlobs} from '@stimulcross/eslint-config/globs'
export const codeFiles=subpathGlobs.code
export const shared=definePreset({integrations:{stylistic:true},scopes:[{files:globs.typescript,rules:{'ts/no-floating-promises':'error'}}]})
const child=definePreset({extends:[shared],integrations:{node:false}})
export const config=createConfigFactory({rootDir:import.meta.dirname,extends:[child],integrations:{typescript:{overridesTypeAware:{'ts/no-floating-promises':'warn'}}}})
export default config({scopes:[{files:globs.tests,rules:{'no-console':'off'}}]})
// @ts-expect-error Factory-local typed maps must reject syntax-only rules.
config({integrations:{typescript:{overridesTypeAware:{'ts/no-explicit-any':'off'}}}})
// @ts-expect-error Invalid rule names must fail.
definePreset({rules:{'unicorn/missing-rule':'error'}})
// @ts-expect-error Invalid severity must fail.
definePreset({rules:{'no-console':'fatal'}})
// @ts-expect-error Options must survive inheritance with precise types.
definePreset({extends:[child],rules:{'style/quotes':['error','invalid']}})
`,
		'src/example.ts': 'Promise.resolve(1)\n',
		'repo.mjs': `import {createConfigFactory,definePreset} from '@stimulcross/eslint-config'; export const shared=definePreset({rules:{'no-console':'warn'}});export const config=createConfigFactory({rootDir:import.meta.dirname,extends:[shared],gitignore:false})`,
		'eslint.config.mjs': `import {globs} from '@stimulcross/eslint-config'; import {config} from './repo.mjs';export default config({typeAware:{ignores:globs.configs}})`,
		'packages/api/tsconfig.json': JSON.stringify({
			compilerOptions: { strict: true, target: 'ES2022', types: [] },
			include: ['src/**/*.ts'],
		}),
		'packages/api/src/example.ts': 'Promise.resolve(1)\n',
		'packages/api/src/plain.mjs': 'export const text="hello";\n',
		'packages/api/eslint.config.mjs': `import{config}from'../../repo.mjs';export default config({rootDir:import.meta.dirname,integrations:{stylistic:false,unicorn:false}})`,
		'smoke.mjs': String.raw`import assert from 'node:assert/strict'; import {ESLint} from 'eslint';import{defineConfig,globs}from'@stimulcross/eslint-config';import{globs as subpathGlobs}from'@stimulcross/eslint-config/globs';
assert.deepEqual(globs,subpathGlobs);
const config=defineConfig({rootDir:import.meta.dirname,gitignore:false});
const engine=new ESLint({cwd:import.meta.dirname,overrideConfigFile:true,overrideConfig:config});
for(const [path,text,code] of [['src/example.ts','Promise.resolve(1)\n','ts/no-floating-promises'],['example.json','{"a":1,"a":2}','jsonc/no-dupe-keys']]){
const [result]=await engine.lintText(text,{filePath:path});assert.equal(result.fatalErrorCount,0,JSON.stringify(result.messages));assert.ok(result.messages.some(message=>message.ruleId===code),JSON.stringify(result.messages));}
for(const [path,text] of [['example.yaml','a: 1\n'],['example.toml','a = 1\n'],['example.md','# Example\n\nText.\n']]){const [r]=await engine.lintText(text,{filePath:path});assert.equal(r.fatalErrorCount,0,JSON.stringify(r.messages));}
const fixer=new ESLint({cwd:import.meta.dirname,overrideConfigFile:true,overrideConfig:config,fix:true});const [fixed]=await fixer.lintText('export const text="hello";\n',{filePath:'example.mjs'});assert.equal(fixed.fatalErrorCount,0);assert.equal(fixed.output,"export const text = 'hello'\n");const [again]=await fixer.lintText(fixed.output,{filePath:'example.mjs'});assert.equal(again.output,undefined);
console.log('Packed runtime checks passed');`,
	}

	for (const [name, text] of Object.entries(files)) {
		const file = join(consumer, name)
		await mkdir(join(file, '..'), { recursive: true })
		await writeFile(file, text)
	}

	await exec('pnpm', [
		'--config.verifyDepsBeforeRun=false',
		'--config.managePackageManagerVersions=false',
		'install',
		'--ignore-scripts',
		'--ignore-workspace',
		'--package-import-method',
		'copy',
	], { cwd: consumer, env, maxBuffer: 4e6 })

	const require = createRequire(join(consumer, 'package.json'))

	await exec(process.execPath, [
		require.resolve('typescript/bin/tsc'),
		'-p',
		join(consumer, 'tsconfig.json'),
	], { cwd: consumer, env })

	const declaration = await readFile(join(consumer, 'declarations/check.d.ts'), 'utf8')
	assert.ok(declaration.includes('@stimulcross/eslint-config'), declaration)
	assert.ok(!declaration.includes('node_modules') && !declaration.includes('@eslint/core'), declaration)

	const smoke = await exec(process.execPath, ['smoke.mjs'], { cwd: consumer, env })
	process.stdout.write(smoke.stdout)
	const cli = join(require.resolve('eslint/package.json'), '..', 'bin/eslint.js')

	async function lint(cwd: string, file: string): Promise<unknown> {
		try {
			const result = await exec(process.execPath, [cli, '-f', 'json', file], { cwd, env })

			return JSON.parse(result.stdout)
		}
		catch (err) {
			if (err && typeof err === 'object' && 'code' in err && err.code === 1 && 'stdout' in err)
				return JSON.parse(String(err.stdout))

			throw err
		}
	}

	const fromRoot = await lint(consumer, 'packages/api/src/example.ts')
	const local = await lint(join(consumer, 'packages/api'), 'src/example.ts')
	assert.deepEqual(fromRoot, local)
	const plain = JSON.stringify(await lint(consumer, 'packages/api/src/plain.mjs'))
	assert.ok(!plain.includes('style/'))
	process.stdout.write('Packed declarations (skipLibCheck: false), root/local CLI and integration overrides passed\n')
}
catch (err) {
	if (err && typeof err === 'object' && 'stdout' in err)
		process.stderr.write(String(err.stdout))

	if (err && typeof err === 'object' && 'stderr' in err)
		process.stderr.write(String(err.stderr))

	throw err
}
finally { await rm(work, { recursive: true, force: true }) }
