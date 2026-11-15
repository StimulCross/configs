import type { GenerationResult, OmittedOptions, Schema, Source } from '../types/generation.ts'
import { createHash } from 'node:crypto'
import { compile } from 'json-schema-to-typescript-lite'
import ts from 'typescript'

/** One isolated namespace per rule keeps helper names from unrelated schemas separate. */
export async function render(source: Source): Promise<GenerationResult> {
	const blocks: string[] = []
	const entries: string[] = []
	const schemas: unknown[] = []
	const omitted: OmittedOptions[] = []

	for (const [index, [name, rule]] of Object.entries(source.rules).sort(([a], [b]) => a.localeCompare(b)).entries()) {
		const schema = rule.meta?.schema ?? []
		const id = source.namespace
			? `${source.namespace}/${name}`
			: name
		let declarations: string

		try {
			if (source.omitOptions?.[id])
				throw new Error(source.omitOptions[id])

			if (typeof schema !== 'object' || schema === null)
				throw new Error('Unsupported schema')

			const first: unknown = Array.isArray(schema)
				? schema[0]
				: undefined
			const definitions = first && typeof first === 'object' && 'definitions' in first
				? first.definitions
				: undefined
			const defs = first && typeof first === 'object' && '$defs' in first
				? first.$defs
				: undefined
			const root: unknown = Array.isArray(schema)
				? {
						type: 'array',
						items: schema,
						minItems: 0,
						maxItems: schema.length,
						additionalItems: false,
						...(definitions
							? { definitions }
							: {}),
						...(defs
							? { $defs: defs }
							: {}),
					}
				: schema
			declarations = await compile(root as Schema, 'Options', { unknownAny: true })
			const ast = ts.createSourceFile('rule.d.ts', declarations, ts.ScriptTarget.Latest)

			function check(node: ts.Node): void {
				if (node.kind === ts.SyntaxKind.AnyKeyword)
					throw new Error(`${id}: generator emitted any`)

				ts.forEachChild(node, check)
			}

			check(ast)
		}
		catch (err) {
			omitted.push({
				id,
				reason: err instanceof Error
					? err.message
					: String(err),
			})

			declarations = 'type Options = [];'
		}

		blocks.push(`declare namespace R${index} {\n${declarations.replaceAll(/^export /gm, '')}\n}`)
		entries.push(`  ${JSON.stringify(id)}: R${index}.Options;`)
		schemas.push([id, schema])
	}

	const hash = createHash('sha256').update(JSON.stringify(schemas)).digest('hex')

	return {
		count: entries.length,
		hash,
		omitted,
		text: `// Generated from installed rule schemas. Do not edit.\n// schemas-sha256: ${hash}\n${blocks.join('\n')}\nexport type RuleOptions = {\n${entries.join('\n')}\n};\n`,
	}
}
