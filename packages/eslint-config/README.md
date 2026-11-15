# @stimulcross/eslint-config

ESLint flat configuration with typed rule overrides, reusable presets and native file scopes.

Requires Node.js `^22.22.2 || >=24.15.0`, ESLint `^10.4.0` and TypeScript `>=6.0.0 <6.1.0`.

## Installation

```sh
pnpm add -D @stimulcross/eslint-config eslint typescript
```

Create `eslint.config.mjs`:

```js
import { defineConfig } from '@stimulcross/eslint-config'

export default defineConfig({
	rootDir: import.meta.dirname,
})
```

Run `pnpm exec eslint .` or `pnpm exec eslint . --fix`. A TypeScript config file is also supported when ESLint has a TypeScript config loader such as `jiti`.

## Defaults

`defineConfig` includes `base` automatically. It enables JavaScript, imports, unused imports, ESLint comments, command directives, Perfectionist, Node, JSDoc, e18e, Unicorn, TypeScript, Stylistic, RegExp, tests, JSON/JSONC/JSON5, YAML, TOML and Markdown. The `pnpm` integration is opt-in.

Stylistic uses tabs, single quotes and no semicolons. Each integration selects its files and disables conflicting rules. Markdown code fences receive syntax checks without requiring a TypeScript project for virtual files.

ESLint determines ECMAScript syntax and standard globals from `ecmaVersion`, and uses its native module defaults, including CommonJS for `.cjs`. The JavaScript integration additionally enables JSX and browser/Node globals. Consumers can adjust globals through `languageOptions.globals`, including disabling individual names with `'off'`.

Type-aware rules are enabled for TypeScript files by default. Project Service finds the nearest `tsconfig.json`; source and test files must belong to an appropriate local project. The package does not add TypeScript `paths`, project references or ambient types.

```js
export default defineConfig({
	rootDir: import.meta.dirname,
	typeAware: {
		ignores: ['**/*.config.ts']
	},
	integrations: { pnpm: true },
})
```

`typeAware: false` keeps TypeScript syntax checks without type information. `integrations: { typescript: false }` removes the TypeScript integration. `typeAware: true` also selects JavaScript files; their tsconfig must support them. A `{ files, ignores }` selection can choose typed files explicitly.

`base` supplies common output/cache ignores, and a root `.gitignore` is read by default. Set `gitignore: false` to disable that import. `globalIgnores` adds repository-wide ignores; top-level `files` and `ignores` select the area of one complete configuration. Paths are relative to the absolute consumer `rootDir`.

## Inheritance and overrides

`definePreset` creates reusable settings without binding them to a directory. `defineConfig` produces a native ESLint config array. `createConfigFactory` binds common defaults once and produces an independent complete configuration on each call.

```js
import { createConfigFactory, definePreset, globs } from '@stimulcross/eslint-config'

const shared = definePreset({
	integrations: {
		typescript: {
			overrides: { 'ts/no-explicit-any': 'warn' },
			overridesTypeAware: { 'ts/no-floating-promises': 'error' },
		},
		stylistic: {
			overrides: {
				'style/quotes': ['error', 'single']
			}
		},
	},
})

const config = createConfigFactory({
	rootDir: import.meta.dirname,
	extends: [shared],
})

export default config({
	rules: { 'no-console': 'error' },
	scopes: [
		{
			files: globs.tests,
			rules: { 'no-console': 'off' }
		},
	],
})
```

Parents apply before children, in `extends` order. Within a layer, integration `overrides` apply first, then `overridesTypeAware`, global `rules` and finally `scopes`. Later layers override earlier ones. Severity-only overrides preserve existing options according to ESLint's merge behavior.

Integration maps accept that integration's rules and supported core rules; `overridesTypeAware` accepts only its type-aware rules. These maps use the integration's file area and do not enable type checking when `typeAware` is false.

`integrations: { unicorn: false }` removes its plugin, defaults and inherited integration overrides. A later explicit rule override can enable a rule again. Disabling TypeScript also removes dependent typed checks from other integrations.

Scopes support native `files`, `ignores`, `basePath`, `rules`, `languageOptions`, `settings`, `linterOptions` and nested `extends`. Integration switches and typed-file selection belong to complete configurations.

## Monorepositories

Publish or expose a shared preset through a workspace package:

```js
// tooling/eslint-config/index.mjs
import { definePreset } from '@stimulcross/eslint-config'

export const shared = definePreset({
	rules: { 'no-console': 'warn' },
})
```

Both the root and package-local `eslint.config.mjs` can consume it:

```js
import { shared } from '@example/eslint-config'
import { defineConfig } from '@stimulcross/eslint-config'

export default defineConfig({
	rootDir: import.meta.dirname,
	extends: [shared],
	scopes: [
		{
			files: ['src/**'],
			rules: { 'no-console': 'error' }
		},
	],
})
```

ESLint 10 finds configuration from the linted file's directory. Use package-local configs for package-specific settings regardless of whether the command starts at the root or in a package. Keep a common installed ESLint, TypeScript and config-package version. Each source/test project owns its tsconfig.

To disable an integration in only one area, compose separate complete configurations with disjoint selections:

```js
const config = createConfigFactory({
	rootDir: import.meta.dirname,
	extends: [shared]
})

export default [
	...config({
		ignores: ['vendor/**']
	}),
	...config({
		files: ['vendor/**'],
		integrations: { unicorn: false }
	}),
]
```

ESLint owns pattern matching and merging. Overlapping complete configurations are additive: absence of a plugin or rule in a later configuration does not remove an earlier contribution. Global ignores apply to the entire array.

## Rule names and globs

Bundled plugin namespaces are fixed: `ts`, `style`, `node`, `yaml`, `import`, `test`, `antfu`, `unicorn`, `jsdoc`, `regexp`, `e18e`, `perfectionist`, `command`, `eslint-comments`, `unused-imports`, `jsonc`, `toml`, `markdown` and `pnpm`. Core ESLint rules have no prefix. Use the same names in overrides and `eslint-disable` comments. Canonical aliases such as `@typescript-eslint/` are not registered.

`globs` is available from the main export and `@stimulcross/eslint-config/globs`: `javascript`, `typescript`, `code`, `declarations`, `tests`, `configs`, `scripts` and `outputs`. These are ordinary glob arrays for consumer configuration; integrations select their own areas.

Rule names, severities and options are generated from bundled rule schemas. `test/valid-title` currently accepts severity only in the managed typed API because its upstream option schema produces invalid TypeScript declarations. Native raw configurations can supply its options.

## External integrations

`defineIntegration<Options, RuleOptions>()({ id, defaults, plugins, ruleMeta, configure })` creates a typed integration. Register it with `use: [integration]` in a preset or config. Each rule needs metadata; rules requiring types declare `requires: ['typescriptSyntax', 'typeInformation']`. `configure` receives the merged integration options and `{ rootDir, language, typeAware }`, and returns parts with `name`, native `files`/`ignores`, optional capability requirements/providers and an ESLint `config`. Names are diagnostic labels.

An optional `overridesScope` selects the integration override area; it defaults to code files. Plugin registration belongs to the integration, rather than individual parts. Conflicting plugin namespaces and multiple owners of a rule are rejected.

For third-party native configs, pass additional config objects after the managed options: `defineConfig(options, ...rawConfigs)` or `config(localOptions, ...rawConfigs)`. They apply last within the complete configuration's selected area and use ESLint's own typing and plugin registration.

## Development and release checks

Local configs and tests use `src`. `pnpm test` checks test types and product behavior. `pnpm run check-generated` verifies generated rule declarations; `pnpm run generate-types` updates them after plugin changes.

`pnpm run check:package` builds, packs, installs an isolated consumer, checks declaration emission with `skipLibCheck: false`, exercises every public entry point and runs ESLint through both its API and CLI. `prepack` builds distributable files; `prepublishOnly` runs lint, types, tests, generated-type verification and the packed-consumer check. Published files are limited to `dist`, this README and the MIT license.
