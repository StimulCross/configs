export const globs = {
	javascript: ['**/*.{js,jsx,mjs,cjs}'],
	typescript: ['**/*.{ts,tsx,mts,cts}'],
	code: ['**/*.{js,jsx,mjs,cjs,ts,tsx,mts,cts}'],
	declarations: ['**/*.d.{ts,mts,cts}'],
	tests: ['**/*.{test,spec}.{js,jsx,mjs,cjs,ts,tsx,mts,cts}', '**/{test,tests,__tests__}/**/*.{js,jsx,mjs,cjs,ts,tsx,mts,cts}'],
	configs: ['**/*.config.{js,jsx,mjs,cjs,ts,tsx,mts,cts}', '**/.*rc.{js,mjs,cjs,ts,mts,cts}'],
	scripts: ['**/{scripts,tools}/**/*.{js,jsx,mjs,cjs,ts,tsx,mts,cts}'],
	outputs: ['**/{dist,build,coverage}/**'],
} as const
