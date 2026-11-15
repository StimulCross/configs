import { cp } from 'node:fs/promises'

await cp(
	new URL('../src/types/generated', import.meta.url),
	new URL('../dist/types/generated', import.meta.url),
	{
		recursive: true,
		filter: source => !source.endsWith('.json'),
	},
)
