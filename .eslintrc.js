module.exports = {
	reportUnusedDisableDirectives: true,

	ignorePatterns: ['node_modules', '!.*.js'],

	extends: [
		'./packages/eslint-config-node',
		'./packages/eslint-config-node/optional.js',
		'./packages/eslint-config-node/style.js'
	],

	rules: {
		'no-warning-comments': 0,
		'node/no-unsupported-features/es-syntax': [
			'error',
			{
				version: '>=20'
			}
		],
		'jsdoc/check-values': ['warn', { allowedLicenses: true }]
	}
};
