module.exports = {
	'*.{js,mjs,cjs,ts,jsx,tsx,html,css,json,md}': 'biome format . --fix',
	'packages/*.{ts,js}': 'eslint .',
};
