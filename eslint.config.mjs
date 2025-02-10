import jsdoc from '@stimulcross/eslint-config-base/jsdoc';
import node from './packages/eslint-config-node/index.mjs';
import style from './packages/eslint-config-node/style.mjs';

/** @type {Array<import("eslint").Linter.FlatConfig>} */
const config = [
	{
		linterOptions: {
			reportUnusedDisableDirectives: true,
		},
		ignores: ['node_modules', '!.*.js'],
		languageOptions: {
			globals: {
				console: true,
				process: true,
			},
		},
	},
	jsdoc,
	node,
	style,
	{
		files: ['**/*.mjs'],
		languageOptions: { sourceType: 'module' },
		rules: {
			'import/no-unresolved': 'off',
			'unicorn/no-process-exit': 'off',
			'unicorn/no-await-expression-member': 'off',
		},
	},
	{ files: ['**/*.js', '**/*.cjs'], languageOptions: { sourceType: 'commonjs' } },
];

export default config;
