import type { RuntimeIntegration, RuntimePreset } from '../types/index.ts'

export const integrations = new WeakSet()
export const presets = new WeakSet()

export function assertPreset(value?: RuntimePreset): void {
	if (!value || !presets.has(value))
		throw new TypeError('extends accepts definePreset results, not compiled flat configs.')
}

export function assertIntegration(value?: RuntimeIntegration): void {
	if (!value || !integrations.has(value))
		throw new TypeError('use accepts defineIntegration results.')
}
