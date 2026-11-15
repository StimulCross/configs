import { definePreset } from './config/factories.ts'
import { defaultIgnores } from './integrations/ignores.ts'
import { builtinIntegrations } from './integrations/index.ts'

export const base = definePreset({
	use: builtinIntegrations,
	globalIgnores: defaultIgnores,
	integrations: { pnpm: false },
})
