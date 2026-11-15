import type { Selection } from '../types/index.ts'
import { posix } from 'node:path'
import { escape } from 'minimatch'

export function scopePath(parent: string, directory = ''): string {
	if (posix.isAbsolute(directory) || directory.includes('\\'))
		throw new TypeError('Scope basePath must be a relative POSIX directory.')

	const path = posix.normalize(posix.join(parent, directory))

	if (path === '..' || path.startsWith('../'))
		throw new TypeError('Scope basePath must stay inside rootDir.')

	return path === '.'
		? ''
		: path
}
export function rebaseSelection(base: string, selection: Selection): Selection {
	if (!base)
		return selection

	const prefix = escape(base, { windowsPathsNoEscape: true })

	function pattern(value: string): string {
		return value.startsWith('!') && !value.startsWith('!(')
			? `!${pattern(value.slice(1))}`
			: `${prefix}/${value}`
	}

	return {
		files: selection.files
			? selection.files.map(group => typeof group === 'string'
					? pattern(group)
					: group.map(pattern))
			: [`${prefix}/**/*`],
		...(selection.ignores
			? {
					ignores: selection.ignores.map(pattern),
				}
			: {}),
	}
}
