module.exports = {
	'*.{js,mjs,cjs,ts,jsx,tsx,html,css,json,md}': 'prettier --config ".prettierrc.js" --write ',
	'packages/*.{ts,js}': 'eslint --config .eslintrc.js'
};
