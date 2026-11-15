import type { PluginBinding } from '../types/integration.ts'
import e18e from '@e18e/eslint-plugin'
import eslintComments from '@eslint-community/eslint-plugin-eslint-comments'
import markdown from '@eslint/markdown'
import stylistic from '@stylistic/eslint-plugin'
import typescript from '@typescript-eslint/eslint-plugin'
import vitest from '@vitest/eslint-plugin'
import antfu from 'eslint-plugin-antfu'
import command from 'eslint-plugin-command'
import imports from 'eslint-plugin-import-lite'
import jsdoc from 'eslint-plugin-jsdoc'
import jsonc from 'eslint-plugin-jsonc'
import node from 'eslint-plugin-n'
import noOnly from 'eslint-plugin-no-only-tests'
import perfectionist from 'eslint-plugin-perfectionist'
import pnpm from 'eslint-plugin-pnpm'
import regexp from 'eslint-plugin-regexp'
import toml from 'eslint-plugin-toml'
import unicorn from 'eslint-plugin-unicorn'
import unusedImports from 'eslint-plugin-unused-imports'
import yaml from 'eslint-plugin-yml'
import { pluginNamespaces } from '../plugin-namespaces.ts'

// Preserve plugin identity. Only the test integration composes two rule providers.
export const plugins = {
	antfu,
	'unused-imports': unusedImports,
	'eslint-comments': eslintComments,
	command,
	perfectionist,
	[pluginNamespaces.n]: node,
	jsdoc,
	[pluginNamespaces['import-lite']]: imports,
	e18e,
	unicorn,
	[pluginNamespaces['@typescript-eslint']]: typescript,
	[pluginNamespaces['@stylistic']]: stylistic,
	regexp,
	[pluginNamespaces.vitest]: {
		...vitest,
		rules: {
			...vitest.rules,
			...noOnly.rules,
		},
	},
	jsonc,
	[pluginNamespaces.yml]: yaml,
	toml,
	markdown,
	pnpm,
} as unknown as Record<string, PluginBinding>
