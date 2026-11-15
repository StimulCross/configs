import { integrations, presets } from './branding.ts'

export function copy<T>(value: T): T {
	if (!value || typeof value !== 'object')
		return value

	if (integrations.has(value) || presets.has(value))
		return value

	if (Array.isArray(value))
		return (value as unknown[]).map(item => copy(item)) as T

	if (Object.getPrototypeOf(value) !== Object.prototype && Object.getPrototypeOf(value) !== null)
		return value

	return Object.fromEntries(Object.entries(value).map(([key, item]) => [
		key,
		['parser', 'processor', 'plugins'].includes(key)
			? item
			: copy(item),
	])) as T
}
