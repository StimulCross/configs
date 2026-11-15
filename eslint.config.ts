import format from 'eslint-plugin-format'
import { defineConfig, globs } from './packages/eslint-config/src/index.js'

export default defineConfig({
	rootDir: import.meta.dirname,
	integrations: { pnpm: true, jsdoc: true },
	typeAware: {
		ignores: [
			...globs.configs,
			...globs.scripts,
		],
	},
	scopes: [

	],
}, {
	plugins: { format },
}, {
	files: ['**/*.md'],
	languageOptions: { parser: format.parserPlain },
	rules: {
		'format/dprint': [
			'error',
			{
				indentWidth: 2,
				quoteStyle: 'preferSingle',
				useTabs: true,
				language: 'markdown',
			},
		],
	},
})
