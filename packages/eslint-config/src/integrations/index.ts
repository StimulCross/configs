import type { TypeScriptOptions } from '../types/builtins.ts'
import type { RuleOptions as commandRules } from '../types/generated/command.js'
import type { RuleOptions as e18eRules, TypedRuleIds as e18eRulesTyped } from '../types/generated/e18e.js'
import type { RuleOptions as eslintCommentsRules } from '../types/generated/eslintComments.js'
import type { RuleOptions as importsRules } from '../types/generated/imports.js'
import type { RuleOptions as javascriptRules } from '../types/generated/javascript.js'
import type { RuleOptions as jsdocRules } from '../types/generated/jsdoc.js'
import type { RuleOptions as jsoncRules } from '../types/generated/jsonc.js'
import type { RuleOptions as markdownRules } from '../types/generated/markdown.js'
import type { RuleOptions as nodeRules } from '../types/generated/node.js'
import type { RuleOptions as perfectionistRules } from '../types/generated/perfectionist.js'
import type { RuleOptions as pnpmRules } from '../types/generated/pnpm.js'
import type { RuleOptions as regexpRules } from '../types/generated/regexp.js'
import type { RuleOptions as stylisticRules } from '../types/generated/stylistic.js'
import type { RuleOptions as testRules, TypedRuleIds as testRulesTyped } from '../types/generated/test.js'
import type { RuleOptions as tomlRules } from '../types/generated/toml.js'
import type { RuleOptions as typescriptRules, TypedRuleIds as typescriptRulesTyped } from '../types/generated/typescript.js'
import type { RuleOptions as unicornRules, TypedRuleIds as unicornRulesTyped } from '../types/generated/unicorn.js'
import type { RuleOptions as unusedImportsRules } from '../types/generated/unusedImports.js'
import type { RuleOptions as yamlRules } from '../types/generated/yaml.js'
import { defineIntegration } from '../config/factories.ts'
import { bindings, catalog } from './catalog.ts'
import { configureBuiltin } from './configure.ts'
import { plugins } from './plugins.ts'

export const javascript = defineIntegration<Record<never, never>, javascriptRules>()({
	id: 'javascript',
	overridesScope: {
		files: ['**/*.{js,jsx,mjs,cjs,ts,tsx,mts,cts}'],
	},
	defaults: {},
	plugins: Object.fromEntries((bindings['javascript'] ?? []).map(ns => [ns, plugins[ns]!])),
	ruleMeta: catalog['javascript']!,
	configure: (options, context) => configureBuiltin('javascript', context, options),
})
export const eslintComments = defineIntegration<Record<never, never>, eslintCommentsRules>()({
	id: 'eslintComments',
	overridesScope: {
		files: ['**/*.{js,jsx,mjs,cjs,ts,tsx,mts,cts}'],
	},
	defaults: {},
	plugins: Object.fromEntries((bindings['eslintComments'] ?? []).map(ns => [ns, plugins[ns]!])),
	ruleMeta: catalog['eslintComments']!,
	configure: (options, context) => configureBuiltin('eslintComments', context, options),
})
export const command = defineIntegration<Record<never, never>, commandRules>()({
	id: 'command',
	overridesScope: {
		files: ['**/*.{js,jsx,mjs,cjs,ts,tsx,mts,cts}'],
	},
	defaults: {},
	plugins: Object.fromEntries((bindings['command'] ?? []).map(ns => [ns, plugins[ns]!])),
	ruleMeta: catalog['command']!,
	configure: (options, context) => configureBuiltin('command', context, options),
})
export const perfectionist = defineIntegration<Record<never, never>, perfectionistRules>()({
	id: 'perfectionist',
	overridesScope: {
		files: ['**/*.{js,jsx,mjs,cjs,ts,tsx,mts,cts}'],
	},
	defaults: {},
	plugins: Object.fromEntries((bindings['perfectionist'] ?? []).map(ns => [ns, plugins[ns]!])),
	ruleMeta: catalog['perfectionist']!,
	configure: (options, context) => configureBuiltin('perfectionist', context, options),
})
export const node = defineIntegration<Record<never, never>, nodeRules>()({
	id: 'node',
	overridesScope: {
		files: ['**/*.{js,jsx,mjs,cjs,ts,tsx,mts,cts}'],
	},
	defaults: {},
	plugins: Object.fromEntries((bindings['node'] ?? []).map(ns => [ns, plugins[ns]!])),
	ruleMeta: catalog['node']!,
	configure: (options, context) => configureBuiltin('node', context, options),
})
export const jsdoc = defineIntegration<Record<never, never>, jsdocRules>()({
	id: 'jsdoc',
	overridesScope: {
		files: ['**/*.{js,jsx,mjs,cjs,ts,tsx,mts,cts}'],
	},
	defaults: {},
	plugins: Object.fromEntries((bindings['jsdoc'] ?? []).map(ns => [ns, plugins[ns]!])),
	ruleMeta: catalog['jsdoc']!,
	configure: (options, context) => configureBuiltin('jsdoc', context, options),
})
export const imports = defineIntegration<Record<never, never>, importsRules>()({
	id: 'imports',
	overridesScope: {
		files: ['**/*.{js,jsx,mjs,cjs,ts,tsx,mts,cts}'],
	},
	defaults: {},
	plugins: Object.fromEntries((bindings['imports'] ?? []).map(ns => [ns, plugins[ns]!])),
	ruleMeta: catalog['imports']!,
	configure: (options, context) => configureBuiltin('imports', context, options),
})
export const e18e = defineIntegration<Record<never, never>, e18eRules, e18eRulesTyped>()({
	id: 'e18e',
	overridesScope: {
		files: ['**/*.{js,jsx,mjs,cjs,ts,tsx,mts,cts}'],
	},
	defaults: {},
	plugins: Object.fromEntries((bindings['e18e'] ?? []).map(ns => [ns, plugins[ns]!])),
	ruleMeta: catalog['e18e']!,
	configure: (options, context) => configureBuiltin('e18e', context, options),
})
export const unusedImports = defineIntegration<Record<never, never>, unusedImportsRules>()({
	id: 'unusedImports',
	overridesScope: {
		files: ['**/*.{js,jsx,mjs,cjs,ts,tsx,mts,cts}'],
	},
	defaults: {},
	plugins: Object.fromEntries((bindings['unusedImports'] ?? []).map(ns => [ns, plugins[ns]!])),
	ruleMeta: catalog['unusedImports']!,
	configure: (options, context) => configureBuiltin('unusedImports', context, options),
})
export const unicorn = defineIntegration<Record<never, never>, unicornRules, unicornRulesTyped>()({
	id: 'unicorn',
	overridesScope: {
		files: ['**/*.{js,jsx,mjs,cjs,ts,tsx,mts,cts}'],
	},
	defaults: {},
	plugins: Object.fromEntries((bindings['unicorn'] ?? []).map(ns => [ns, plugins[ns]!])),
	ruleMeta: catalog['unicorn']!,
	configure: (options, context) => configureBuiltin('unicorn', context, options),
})
export const typescript = defineIntegration<TypeScriptOptions, typescriptRules, typescriptRulesTyped>()({
	id: 'typescript',
	overridesScope: {
		files: ['**/*.{ts,tsx,mts,cts}'],
	},
	defaults: {},
	plugins: Object.fromEntries((bindings['typescript'] ?? []).map(ns => [ns, plugins[ns]!])),
	ruleMeta: catalog['typescript']!,
	configure: (options, context) => configureBuiltin('typescript', context, options),
})
export const stylistic = defineIntegration<Record<never, never>, stylisticRules>()({
	id: 'stylistic',
	overridesScope: {
		files: ['**/*.{js,jsx,mjs,cjs,ts,tsx,mts,cts}'],
	},
	defaults: {},
	plugins: Object.fromEntries((bindings['stylistic'] ?? []).map(ns => [ns, plugins[ns]!])),
	ruleMeta: catalog['stylistic']!,
	configure: (options, context) => configureBuiltin('stylistic', context, options),
})
export const regexp = defineIntegration<Record<never, never>, regexpRules>()({
	id: 'regexp',
	overridesScope: {
		files: ['**/*.{js,jsx,mjs,cjs,ts,tsx,mts,cts}'],
	},
	defaults: {},
	plugins: Object.fromEntries((bindings['regexp'] ?? []).map(ns => [ns, plugins[ns]!])),
	ruleMeta: catalog['regexp']!,
	configure: (options, context) => configureBuiltin('regexp', context, options),
})
export const test = defineIntegration<Record<never, never>, testRules, testRulesTyped>()({
	id: 'test',
	overridesScope: {
		files: ['**/*.{test,spec}.{js,jsx,mjs,cjs,ts,tsx,mts,cts}', '**/{test,tests,__tests__}/**/*.{js,jsx,mjs,cjs,ts,tsx,mts,cts}'],
	},
	defaults: {},
	plugins: Object.fromEntries((bindings['test'] ?? []).map(ns => [ns, plugins[ns]!])),
	ruleMeta: catalog['test']!,
	configure: (options, context) => configureBuiltin('test', context, options),
})
export const jsonc = defineIntegration<Record<never, never>, jsoncRules>()({
	id: 'jsonc',
	overridesScope: {
		files: ['**/*.{json,jsonc,json5}'],
	},
	defaults: {},
	plugins: Object.fromEntries((bindings['jsonc'] ?? []).map(ns => [ns, plugins[ns]!])),
	ruleMeta: catalog['jsonc']!,
	configure: (options, context) => configureBuiltin('jsonc', context, options),
})
export const yaml = defineIntegration<Record<never, never>, yamlRules>()({
	id: 'yaml',
	overridesScope: {
		files: ['**/*.{yaml,yml}'],
	},
	defaults: {},
	plugins: Object.fromEntries((bindings['yaml'] ?? []).map(ns => [ns, plugins[ns]!])),
	ruleMeta: catalog['yaml']!,
	configure: (options, context) => configureBuiltin('yaml', context, options),
})
export const toml = defineIntegration<Record<never, never>, tomlRules>()({
	id: 'toml',
	overridesScope: {
		files: ['**/*.toml'],
	},
	defaults: {},
	plugins: Object.fromEntries((bindings['toml'] ?? []).map(ns => [ns, plugins[ns]!])),
	ruleMeta: catalog['toml']!,
	configure: (options, context) => configureBuiltin('toml', context, options),
})
export const markdown = defineIntegration<Record<never, never>, markdownRules>()({
	id: 'markdown',
	overridesScope: {
		files: ['**/*.md'],
	},
	defaults: {},
	plugins: Object.fromEntries((bindings['markdown'] ?? []).map(ns => [ns, plugins[ns]!])),
	ruleMeta: catalog['markdown']!,
	configure: (options, context) => configureBuiltin('markdown', context, options),
})
export const pnpm = defineIntegration<Record<never, never>, pnpmRules>()({
	id: 'pnpm',
	overridesScope: {
		files: ['**/package.json', '**/pnpm-workspace.yaml'],
	},
	defaults: {},
	plugins: Object.fromEntries((bindings['pnpm'] ?? []).map(ns => [ns, plugins[ns]!])),
	ruleMeta: catalog['pnpm']!,
	configure: (options, context) => configureBuiltin('pnpm', context, options),
})
export const builtinIntegrations = [
	javascript,
	eslintComments,
	command,
	perfectionist,
	node,
	jsdoc,
	imports,
	e18e,
	unusedImports,
	unicorn,
	typescript,
	stylistic,
	regexp,
	test,
	jsonc,
	yaml,
	toml,
	markdown,
	pnpm,
] as const
export type BuiltinIntegration = typeof builtinIntegrations[number]
