import jsdoc from 'eslint-plugin-jsdoc';

/** @type {import("eslint").Linter.Config} */
const config = {
	plugins: { jsdoc },
	rules: {
		...jsdoc.configs['flat/recommended'].rules,
		'jsdoc/require-jsdoc': 'off',
		'jsdoc/require-param': ['warn', { exemptedBy: ['inheritdoc', 'private', 'internal'] }],
		'jsdoc/multiline-blocks': ['warn', { noSingleLineBlocks: true, singleLineTags: ['*'] }],
		'jsdoc/require-asterisk-prefix': 'warn',
		'jsdoc/require-hyphen-before-param-description': ['warn', 'never'],
		'jsdoc/tag-lines': ['warn', 'any', { startLines: 1 }],
		'jsdoc/require-returns': 0,
		'jsdoc/no-blank-block-descriptions': 1,
		'jsdoc/no-blank-blocks': 1,
	},
};

export default config;
