import { defineConfig } from './src/index.js'

export default defineConfig({
	extends: ['../../eslint.config.ts'],
	typescript: { tsconfigPath: 'tsconfig.json' },
})
