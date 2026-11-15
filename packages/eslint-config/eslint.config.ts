import { defineConfig, globs } from './src/index.js'

export default defineConfig({
	rootDir: import.meta.dirname,
	globalIgnores: [
		'src/types/generated/**',
		'src/integrations/{catalog,ignores}.ts',
		'scripts/rule-sources.json',
	],
	typeAware: {
		ignores: [
			...globs.configs,
			...globs.scripts,
		],
	},
	integrations: {
		typescript: {
			overrides: {
				'ts/naming-convention': 'off',
				'ts/no-non-null-assertion': 'off',
			},
		},
	},
	scopes: [
		{
			files: globs.tests,
			rules: { 'test/no-import-node-test': 'off' },
		},

		{
			files: ['**/*.md/**'],
			rules: { 'unicorn/filename-case': 'off' },
		},
	],
})
