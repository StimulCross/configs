import base from '@stimulcross/eslint-config-base';
import node from 'eslint-plugin-n';
import globals from 'globals';

/** @type {import("eslint").Linter.Config} */
const config = {
	...base,

	languageOptions: {
		...base.languageOptions,

		globals: {
			...base.languageOptions.globals,
			...globals.node,
		},
	},

	plugins: {
		...base.plugins,
		node,
	},

	settings: {
		'import/resolver': {
			typescript: {},
		},
	},

	rules: {
		...base.rules,

		/**
		 * Disallow the use of the deprecated `Buffer()` constructor.
		 *
		 * In Node.js, the behavior of the `Buffer` constructor varies depending on the type of its
		 * argument. Passing an argument from user input to `Buffer()` without validating its type
		 * can lead to security vulnerabilities, such as remote memory disclosure and denial of service.
		 */
		'no-buffer-constructor': 'error',

		/**
		 * Enforce the return statement after a callback.
		 *
		 * This rule aims to ensure that callbacks used outside the main function block are
		 * always part of or immediately preceding a return statement.
		 */
		'node/callback-return': ['error', ['cb', 'callback', 'next', 'done']],

		/**
		 * Enforce `require()` statements to appear in the top-level module scope.
		 *
		 * Dependencies can be harder to identify when `require()` statements are nested
		 * inside functions or other blocks. As `require()` performs synchronous loads,
		 * it can cause performance issues when used outside the top-level scope.
		 */
		'node/global-require': 'warn',

		/**
		 * Enforce callback error handling.
		 *
		 * This rule expects that errors are handled when using callbacks in Node.js. Errors
		 * matching patterns like `err`, `Err`, `error`, `someErr`, etc., will trigger this rule if not handled.
		 *
		 * @param {string} errorPattern A regex pattern to match callback error variables.
		 *   Default is `'^.*(e|E)rr(or)?'`.
		 */
		'node/handle-callback-err': ['error', '^.*(e|E)rr(or)?'],

		/**
		 * Ensure that Node.js error-first callback patterns are adhered to.
		 *
		 * This rule enforces the use of the `Error` class, any subclass of `Error`, `null`,
		 * or `undefined` as the first argument to Node.js callbacks.
		 */
		'node/no-callback-literal': ['warn'],

		/**
		 * Disallow assignment to the `exports` object.
		 *
		 * Prevents overriding the `exports` object with a new object (e.g., `exports = {}`).
		 */
		'node/no-exports-assign': 'error',

		/**
		 * Disallow the use of `new require`.
		 *
		 * This rule aims to prevent expressions like `new require('module')`.
		 */
		'node/no-new-require': 'error',

		/**
		 * Disallow string concatenation with `__dirname` or `__filename`.
		 *
		 * Developers should use path utilities (e.g., `path.join`) to create paths in a
		 * platform-independent way, avoiding issues on systems like Windows.
		 */
		'node/no-path-concat': 'error',

		/**
		 * Disallow the use of `process.env`.
		 *
		 * This rule discourages using `process.env` directly to avoid global dependencies.
		 * Instead, centralize environment variable access through a custom configuration layer.
		 *
		 * **Note:** Consider turning this rule off in specific files where configuration is being gathered.
		 */
		'node/no-process-env': 'warn',

		/**
		 * Disallow the use of `process.exit()`.
		 *
		 * Using `process.exit()` is not recommended, as it abruptly terminates the program.
		 * Throwing an error is preferred, as it allows for stack traces and proper error handling.
		 */
		'node/no-process-exit': 'error',

		/**
		 * Disallow synchronous methods in Node.js.
		 *
		 * Synchronous methods (e.g., methods with the `Sync` suffix) can block the event loop
		 * and degrade performance. These methods are only allowed at the root level.
		 */
		'node/no-sync': ['warn', { allowAtRootLevel: true }],

		/**
		 * Disallow usage of unsupported ECMAScript features.
		 *
		 * This rule checks the project's `engines` field in `package.json` to ensure that
		 * ECMAScript built-in variables are not used if they are unsupported in the configured Node.js versions.
		 */
		'node/no-unsupported-features/es-builtins': 'error',

		/**
		 * Disallow usage of unsupported ECMAScript syntax.
		 *
		 * This rule checks the project's `engines` field in `package.json` to ensure that ECMAScript syntax
		 * is not used if it is unsupported in the configured Node.js versions.
		 */
		'node/no-unsupported-features/es-syntax': 'error',

		/**
		 * Disallow usage of unsupported Node.js built-in APIs.
		 *
		 * This rule checks the project's `engines` field in `package.json` to ensure that Node.js built-in
		 * APIs are supported by the configured Node.js versions.
		 */
		'node/no-unsupported-features/node-builtins': 'error',

		/**
		 * Treat `process.exit()` as if it were a `throw` statement in code paths.
		 *
		 * If enabled, this rule ensures that `process.exit()` is treated like a thrown error
		 * to improve code path analysis during linting.
		 */
		'node/process-exit-as-throw': 'error',

		/**
		 * Suggest correct usage of shebangs in scripts.
		 *
		 * This rule checks the `bin` field of `package.json` to ensure that files declared as bin scripts
		 * start with the correct shebang (`#!/usr/bin/env node`). It also ensures non-bin files do not have a shebang.
		 */
		'node/shebang': 'warn',

		/**
		 * Disallow usage of deprecated Node.js APIs.
		 *
		 * Node.js occasionally deprecates APIs that are set to be removed in future versions.
		 * This rule flags deprecated APIs to encourage their replacement with supported alternatives.
		 */
		'node/no-deprecated-api': 'warn',

		/**
		 * Enforce consistent assertion style with node:assert.
		 *
		 * Prefer `assert.ok()` over `assert()` for its explicit intent and better readability. It aligns with other
		 * assert methods, ensuring consistency and making code easier to maintain and understand.
		 */
		// 'unicorn/consistent-assert': 'error',

		/**
		 * Disallow `process.exit()`.
		 *
		 * This rule is an extension to ESLint's `no-process-exit` rule, that allows process.exit() to be called in
		 * files that start with a hashbang → #!/usr/bin/env node. It also allows process.exit() to be called in
		 * process.on('<event>', func) event handlers and in files that imports worker_threads.
		 */
		'unicorn/no-process-exit': 'error',
	},
};

export default config;
