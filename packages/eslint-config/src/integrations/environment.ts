import type { PolicyPart } from '../types/policy.ts'
import globals from 'globals'

export const javascriptEnvironment: Omit<PolicyPart, 'name' | 'rules'> = {
	languageOptions: {
		globals: {
			...globals.browser,
			...globals.node,
		},
		parserOptions: {
			ecmaFeatures: { jsx: true },
		},
	},
}
