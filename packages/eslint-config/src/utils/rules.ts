import type { Linter } from 'eslint'

export function enabled(entry: Linter.RuleEntry): boolean {
	const severity = Array.isArray(entry)
		? entry[0]
		: entry

	return severity !== 'off' && severity !== 0
}
