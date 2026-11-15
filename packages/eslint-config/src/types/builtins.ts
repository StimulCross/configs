import type { Linter } from 'eslint'

export interface TypeScriptOptions {
	parserOptions?: Omit<Linter.ParserOptions, 'project' | 'projectService' | 'tsconfigRootDir'> & {
		project?: never
		projectService?: never
		tsconfigRootDir?: never
	}
	projectService?: object
}
