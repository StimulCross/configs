import type { Source } from './types/generation.ts'
import { Buffer } from 'node:buffer'
import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { performance } from 'node:perf_hooks'
import process from 'node:process'
import { fileURLToPath } from 'node:url'
import { builtinRules } from 'eslint/use-at-your-own-risk'
import { catalog } from '../src/integrations/catalog.ts'
import { plugins } from '../src/integrations/plugins.ts'
import { render } from './utils/generate-rule-types.ts'

const owners = JSON.parse(await readFile(new URL('rule-sources.json', import.meta.url), 'utf8')) as Record<string, string>
const grouped: Record<string, Source> = {}

for (const [id, owner] of Object.entries(owners)) {
	const slash = id.indexOf('/')
	const rule = slash < 0
		? builtinRules.get(id)
		: plugins[id.slice(0, slash)]?.rules?.[id.slice(slash + 1)]

	if (!rule) {
		throw new Error(`Rule missing from installed catalog: ${id}`)
	}

	(grouped[owner] ??= { namespace: '', name: owner, rules: {} }).rules[id] = rule
}

if (grouped['test'])
	grouped['test'].omitOptions = { 'test/valid-title': 'Upstream schema has an index signature incompatible with its boolean/array properties (TS2411).' }

const sources = Object.values(grouped)

async function main(): Promise<void> {
	const started = performance.now()
	const check = process.argv.includes('--check')
	const directory = new URL('../src/types/generated/', import.meta.url)

	if (!check)
		await mkdir(directory, { recursive: true })

	const results = []

	for (const source of sources) {
		results.push({
			source,
			...await render(source),
		})
	}

	for (const result of results) {
		const typed = Object.entries(catalog[result.source.name] ?? {}).filter(([, info]) => info.requires?.includes('typeInformation')).map(([id]) => JSON.stringify(id))
		result.text += `\nexport type TypedRuleIds = ${typed.join(' | ') || 'never'};\n`
		const file = new URL(`${result.source.name}.d.ts`, directory)

		if (check) {
			if (await readFile(file, 'utf8') !== result.text)
				throw new Error(`Stale generated declarations: ${fileURLToPath(file)}`)
		}
		else {
			await writeFile(file, result.text)
		}
	}

	const report = `${JSON.stringify(results.map(result => ({
		integration: result.source.name,
		plugin: result.source.namespace,
		rules: result.count,
		schemasHash: result.hash,
		optionsOmitted: result.omitted,
	})), null, 2)}\n`

	const reportFile = new URL('report.json', directory)

	if (check) {
		if (await readFile(reportFile, 'utf8') !== report)
			throw new Error('Stale generation report')
	}
	else {
		await writeFile(reportFile, report)
	}

	for (const result of results) {
		for (const item of result.omitted)
			process.stderr.write(`${item.id}: severity only: ${item.reason}\n`)
	}

	process.stdout.write(`${check ? 'Verified' : 'Generated'} ${results.reduce((n, item) => n + item.count, 0)} rules in ${(performance.now() - started).toFixed(1)} ms\n`)

	for (const result of results)
		process.stdout.write(`${result.source.name}: ${result.count} rules, ${Buffer.byteLength(result.text)} bytes\n`)
}

if (process.argv[1] === fileURLToPath(import.meta.url))
	await main()
