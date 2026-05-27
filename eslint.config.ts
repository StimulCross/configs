import { defineConfig } from '@stimulcross/eslint-config'

export default defineConfig({
	pnpm: true,
	node: true,
	perfectionist: true,
	formatters: {
		markdown: 'dprint',
		html: 'prettier',
		css: 'prettier',
	},
	typescript: { tsconfigPath: 'tsconfig.json' },
})
