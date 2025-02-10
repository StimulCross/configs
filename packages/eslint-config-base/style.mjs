import stylistic from '@stylistic/eslint-plugin';
import imports from 'eslint-plugin-import';
import eslintPluginUnicorn from 'eslint-plugin-unicorn';

/** @type {import("eslint").Linter.Config} */
const config = {
	plugins: {
		import: imports,
		'@stylistic': stylistic,
		unicorn: eslintPluginUnicorn,
	},
	rules: {
		/**
		 * Enforce line breaks after opening and before closing array brackets.
		 * Requires consistent usage of line breaks for each pair of brackets. It reports an error if one
		 * bracket in the pair has a line break inside it and the other bracket does not.
		 */
		'@stylistic/array-bracket-newline': ['warn', 'consistent'],

		/**
		 * Disallow or enforce spaces inside brackets.
		 * Disallowed in this configuration.
		 */
		'@stylistic/array-bracket-spacing': ['warn', 'never'],

		/**
		 * Enforce line breaks between array elements.
		 * Requires consistent usage of line breaks between array elements in accordance with style guides.
		 */
		'@stylistic/array-element-newline': ['warn', 'consistent'],

		/**
		 * Require braces in arrow function body.
		 * This rule can enforce the use of braces around arrow function body.
		 */
		'arrow-body-style': ['warn', 'as-needed'],

		/**
		 * Require parentheses in arrow function arguments.
		 * Arrow functions can omit parentheses if they have exactly one parameter. Since their main
		 * strength lies in being short and concise, parentheses should be omitted unless needed.
		 */
		'@stylistic/arrow-parens': ['warn', 'as-needed'],

		/**
		 * Require spaces before and after the arrow in arrow functions.
		 * Enforces spacing around the `=>` in arrow functions.
		 */
		'@stylistic/arrow-spacing': ['warn', { before: true, after: true }],

		/**
		 * Disallow or enforce spaces inside of single-line blocks.
		 * Enforced in this configuration.
		 */
		'@stylistic/block-spacing': ['warn', 'always'],

		/**
		 * Require camelcase.
		 * Enforces the use of camelcase for variable and function names.
		 */
		camelcase: ['warn'],

		/**
		 * Enforce consistent use of trailing commas in object and array literals.
		 * Allows trailing commas for function parameters, arrays, and object literals spread across
		 * multiple lines.
		 */
		'@stylistic/comma-dangle': ['warn', 'always-multiline'],

		/**
		 * Enforce spacing around commas.
		 * Disallow spaces before a comma and require one space after it (e.g., `var a, b`).
		 */
		'@stylistic/comma-spacing': ['warn', { before: false, after: true }],

		/**
		 * Enforce comma placement style.
		 * Requires commas to be placed at the end of the line, rather than the beginning.
		 */
		'@stylistic/comma-style': ['warn', 'last'],

		/**
		 * Disallow or enforce spaces inside computed property brackets.
		 * Disallowed in this configuration.
		 */
		'@stylistic/computed-property-spacing': ['warn', 'never'],

		/**
		 * Enforce consistent naming when capturing the current execution context.
		 * Requires the `this` alias to always use the name "self" for consistency.
		 */
		'consistent-this': ['warn', 'self'],

		/**
		 * Require following curly brace conventions.
		 * Ensures that all block statements are wrapped in curly braces, increasing code clarity and preventing bugs.
		 */
		curly: ['warn', 'all'],

		/**
		 * Enforce default clauses in switch statements to appear last.
		 * Requires the default case to be defined at the end of the switch block for consistency.
		 */
		'default-case-last': 'warn',

		/**
		 * Enforce default parameters to be declared last.
		 * Default parameters should always come last to improve function readability and reduce confusion about their usage.
		 */
		'default-param-last': 'off',

		/**
		 * Enforce newline placement around dots of member expressions.
		 * This rule prevents mixed newline styles around dots in object property access chains,
		 * requiring dots to be placed with their property identifiers.
		 */
		'@stylistic/dot-location': ['warn', 'property'],

		/**
		 * Enforce dot notation wherever possible.
		 * Encourages the use of dot notation (`obj.prop`) over bracket notation (`obj["prop"]`).
		 */
		'dot-notation': 'warn',

		/**
		 * Require files to end with a single newline.
		 * Ensures trailing newlines for better compatibility and maintainability across different environments.
		 */
		'@stylistic/eol-last': ['warn', 'unix'],

		/**
		 * Disallow or enforce spacing between function identifiers and their invocations.
		 * Disallows spaces between function names and the parentheses used to invoke them.
		 */
		'@stylistic/func-call-spacing': 'warn',

		/**
		 * Enforce a specific function style.
		 * This rule enforces the use of function declarations instead of expressions, but allows arrow functions.
		 */
		'func-style': ['warn', 'declaration', { allowArrowFunctions: true }],

		/**
		 * Ensure function names match the names of their assigned variables.
		 * This helps maintain consistency and clarity in the code.
		 */
		'func-name-matching': 'warn',

		/**
		 * Enforce spacing rules around the `*` in generator functions.
		 * Ensures the `*` is correctly spaced as per the style guide: after the `function` keyword but before the function name for methods.
		 */
		'@stylistic/generator-star-spacing': [
			'warn',
			{
				before: false,
				after: true,
				method: 'before', // For class/object methods
			},
		],

		/**
		 * Require accessor pairs (getters and setters) to be grouped together.
		 * Enforces that getter and setter methods for the same property are defined adjacent to one another.
		 */
		'grouped-accessor-pairs': ['warn', 'getBeforeSet'],

		/**
		 * Enforce a minimum and maximum length for identifiers.
		 * Improves readability by enforcing reasonable identifier lengths while allowing exceptions for certain patterns.
		 */
		'id-length': [
			'warn',
			{
				min: 2,
				exceptions: [
					// index
					'i',
					// lodash 💩
					'_',
					// ramda 😍
					'R',
					// jQuery 🤮
					'$',
					// error
					'e',
					// value
					'v',
					// test
					't',
				],
			},
		],

		/**
		 * Enforce consistent spacing between key-value pairs in object literals.
		 * Ensures spacing rules are strictly followed for better readability and consistency.
		 */
		'@stylistic/key-spacing': ['warn', { beforeColon: false, afterColon: true, mode: 'strict' }],

		/**
		 * Enforce consistent spacing around keywords and keyword-like tokens.
		 * Ensures readability by maintaining proper spacing before and after keywords.
		 */
		'@stylistic/keyword-spacing': ['warn', { before: true, after: true }],

		/**
		 * Disallow mixing CRLF and LF line breaks.
		 * This rule ensures consistent line endings, independent of the operating system.
		 */
		'@stylistic/linebreak-style': ['error', 'unix'],

		/**
		 * Require an empty line between class members.
		 * Improves readability by requiring blank lines between class members.
		 */
		'@stylistic/lines-between-class-members': [
			'warn',
			'always',
			{
				exceptAfterSingleLine: true,
			},
		],

		/**
		 * Limit the maximum number of parameters in a function definition.
		 * Reduces complexity by enforcing a limit on parameters.
		 */
		'max-params': ['warn', 6],

		/**
		 * Enforce a maximum depth of nested callbacks.
		 * Improves clarity by discouraging deeply nested callbacks.
		 */
		'max-nested-callbacks': ['warn', 4],

		/**
		 * Restrict the number of statements allowed per line.
		 * Aims to improve readability by limiting the number of statements on one line.
		 */
		'@stylistic/max-statements-per-line': 'warn',

		/**
		 * Enforce a particular style for multiline comments.
		 * Requires comments to be written in separate lines for better readability.
		 */
		'@stylistic/multiline-comment-style': ['warn', 'separate-lines'],

		/**
		 * Enforce newlines between chained method calls.
		 * Requires method chains to break lines after a specified depth to improve readability.
		 */
		'@stylistic/newline-per-chained-call': [
			'warn',
			{
				ignoreChainWithDepth: 3,
			},
		],

		/**
		 * Require constructor function names to start with a capital letter.
		 * This rule distinguishes constructor functions from regular functions for consistency.
		 */
		'new-cap': [
			'warn',
			{
				newIsCap: true,
				capIsNew: false, // Decorators are written in PascalCase but rarely called with `new`.
			},
		],

		/**
		 * Require parentheses to be used in constructor invocations.
		 * Helps to clarify function invocations in constructor function calls.
		 */
		'@stylistic/new-parens': 'warn',

		/**
		 * Enforce consistent placement of single-line statements.
		 * Ensures better readability by requiring certain placements for single-line blocks.
		 */
		'@stylistic/nonblock-statement-body-position': [
			'warn',
			'below',
			{
				overrides: {
					if: 'beside',
					else: 'beside',
				},
			},
		],

		/**
		 * Disallow the use of unnecessary `else` blocks.
		 * When `if` contains a `return`, an `else` block is redundant.
		 */
		'no-else-return': 'warn',

		/**
		 * Disallow redundant Boolean casts.
		 * Prevents unnecessary double negations, as they add no functional value.
		 */
		'no-extra-boolean-cast': 'warn',

		/**
		 * Disallow floating decimals.
		 * Encourages explicit usage of `0.` or `.0` instead of leading/trailing decimal points.
		 */
		'@stylistic/no-floating-decimal': 'warn',

		/**
		 * Disallow implicit coercion.
		 * Flags shorthand notations like `!!value`, which can be less clear than explicit conversions.
		 */
		'no-implicit-coercion': 'warn',

		/**
		 * Disallow inline comments after code.
		 * Improves cleanliness by preventing comments written on the same line as code.
		 */
		'no-inline-comments': 'off',

		/**
		 * Disallow `if` statements as the only statement in an `else` block.
		 * Encourages a more readable format by flattening nested `else if` constructs.
		 */
		'no-lonely-if': 'warn',

		/**
		 * Disallow mixed spaces and tabs in indentation.
		 * Enforces the use of consistent indentation style (spaces in this case).
		 */
		'@stylistic/no-mixed-spaces-and-tabs': 'warn',

		/**
		 * Disallow chained assignments.
		 * Prevents hard-to-read syntax that assigns values to multiple variables in a single statement.
		 */
		'no-multi-assign': 'warn',

		/**
		 * Disallow multiple blank lines.
		 * Enforces a maximum of 2 blank lines, with none at the beginning or end of the file.
		 */
		'@stylistic/no-multiple-empty-lines': [
			'warn',
			{
				max: 2,
				maxEOF: 0,
				maxBOF: 0,
			},
		],

		/**
		 * Disallow multiple spaces around logical expressions and other structures.
		 * Aims to improve code clarity by enforcing consistent spacing.
		 */
		'@stylistic/no-multi-spaces': 'warn',

		/**
		 * Disallow nested ternary expressions.
		 * Improves readability by discouraging overly complex ternary expressions.
		 */
		'no-nested-ternary': 'off',

		/**
		 * Disallow trailing spaces at the end of lines.
		 * Removes unnecessary whitespace that can cause visual noise or formatting issues.
		 */
		'@stylistic/no-trailing-spaces': 'warn',

		/**
		 * Disallow underscores in identifiers.
		 * While allowed in some cases (e.g., private variables), standard coding style avoids underscores.
		 */
		'no-underscore-dangle': 'off',

		/**
		 * Disallow conditional expressions that can be simplified with default operators.
		 * Encourages using `||` for default assignments instead of ternary expressions.
		 */
		'no-unneeded-ternary': ['warn', { defaultAssignment: false }],

		/**
		 * Disallow unnecessary computed property keys.
		 * Prevents usage of computed keys unless dynamically required.
		 */
		'no-useless-computed-key': 'warn',

		/**
		 * Disallow warning comments such as `TODO` or `FIXME`.
		 * Helps to clean up code for production by requiring such comments to be addressed or removed.
		 */
		'no-warning-comments': ['warn', { location: 'anywhere' }],

		/**
		 * Disallow whitespace before properties.
		 * Ensures no unnecessary spacing before accessing object properties, improving readability.
		 */
		'@stylistic/no-whitespace-before-property': 'warn',

		/**
		 * Enforce consistent line breaks inside braces.
		 * Enhances readability by requiring consistent placement of line breaks in object/array literals.
		 */
		'@stylistic/object-curly-newline': ['warn', { consistent: true }],

		/**
		 * Enforce spaces inside of curly braces.
		 * Ensures consistent spacing rules around object literal braces.
		 */
		'@stylistic/object-curly-spacing': ['warn', 'always'],

		/**
		 * Enforce properties in object literals to appear on the same or separate lines.
		 * Allows all properties on a single line, but enforces consistent formatting otherwise.
		 */
		'@stylistic/object-property-newline': ['warn', { allowAllPropertiesOnSameLine: true }],

		/**
		 * Disallow the use of `parseInt()` when literals can be used.
		 * Encourages using binary, octal, or hex literals instead (e.g., `0b1010`, `0x1a`).
		 */
		'prefer-numeric-literals': 'warn',

		/**
		 * Enforce the use of an object spread over `Object.assign`.
		 * Prefer object spread syntax for merging and copying objects.
		 */
		'prefer-object-spread': 'warn',

		/**
		 * Disallow the use of the RegExp constructor in favor of regular expression literals.
		 * Suggests using regular expression literals to improve readability and avoid redundant wrapping.
		 */
		'prefer-regex-literals': ['warn', { disallowRedundantWrapping: true }],

		/**
		 * Suggest using template literals instead of string concatenation.
		 * Enhances readability and avoids errors in string concatenation.
		 */
		'prefer-template': 'warn',

		/**
		 * Enforce consistent quoting of property names.
		 * Requires quotes when necessary and disallows them when not needed.
		 */
		'@stylistic/quote-props': ['warn', 'as-needed'],

		/**
		 * Enforce consistent quoting style for strings.
		 * Prefer single quotes over double quotes unless escape characters are required.
		 */
		'@stylistic/quotes': ['warn', 'single', 'avoid-escape'],

		/**
		 * Enforce consistent spacing between rest/spread operators and their expressions.
		 * Disallows spaces between the spread/rest operator and its associated value.
		 */
		'@stylistic/rest-spread-spacing': ['warn', 'never'],

		/**
		 * Enforce spacing before and after semicolons.
		 * Requires spacing after semicolons but disallows it before them.
		 */
		'@stylistic/semi-spacing': ['warn', { before: false, after: true }],

		/**
		 * Enforce consistent placement of semicolons.
		 * Places semicolons at the end of a line, discouraging styles where they begin a new line.
		 */
		'@stylistic/semi-style': ['warn', 'last'],

		/**
		 * Require or disallow semicolons at the end of statements.
		 * Disallows semicolons to enforce a semicolon-less style.
		 */
		'@stylistic/semi': ['warn', 'always'],

		/**
		 * Require or disallow a space before opening braces.
		 * Enforces consistent spacing before blocks, requiring a space.
		 */
		'@stylistic/space-before-blocks': ['warn', 'always'],

		/**
		 * Disallow or enforce spaces inside parentheses.
		 * Ensures spacing consistency by disallowing spaces inside parentheses.
		 */
		'@stylistic/space-in-parens': ['warn', 'never'],

		/**
		 * Require spaces around infix operators.
		 * Enforces consistent spacing around operators like `+`, `-`, `=`, etc.
		 */
		'@stylistic/space-infix-ops': 'warn',

		/**
		 * Require or disallow spaces before/after unary operators.
		 * Enforces consistent spacing around unary operators based on their type (word vs non-word).
		 */
		'@stylistic/space-unary-ops': [
			'warn',
			{
				words: true,
				nonwords: false,
			},
		],

		/**
		 * Enforce or disallow spaces beginning a comment.
		 * Ensures proper formatting by requiring a space after `//` or `/*`.
		 */
		'@stylistic/spaced-comment': [
			'warn',
			'always',
			{
				markers: ['/'], // Allow TypeScript-specific `///` comments.
			},
		],

		/**
		 * Enforce spacing around colons in switch statement clauses.
		 * Improves readability by ensuring consistent spacing around colons in case/default clauses.
		 */
		'@stylistic/switch-colon-spacing': 'warn',

		/**
		 * Enforce consistent spacing inside template literals.
		 * Requires consistent spacing inside template curly braces for better readability.
		 */
		'@stylistic/template-curly-spacing': 'warn',

		/**
		 * Require or disallow spacing between template tags and their literals.
		 * Enforces that there should be no spacing between template tags and their template literals.
		 */
		'@stylistic/template-tag-spacing': ['warn', 'never'],

		/**
		 * Enforce that immediately-invoked function expressions (IIFEs) are wrapped.
		 * IIFEs improve clarity by requiring `(function() {...})()` over `function() {...}()`.
		 */
		'@stylistic/wrap-iife': ['warn', 'inside'],

		/**
		 * Enforce consistent spacing around the `*` character in `yield*` expressions.
		 * Requires spacing after the `*` operator but not before.
		 */
		'@stylistic/yield-star-spacing': ['warn', 'after'],

		/**
		 * Require or disallow Yoda conditions.
		 * Encourages `variable === <value>` over `<value> === variable` for better readability.
		 */
		yoda: 'warn',

		// PLUGIN-SPECIFIC RULES: eslint-plugin-import

		/**
		 * Enforce consistent usage of inline type-only markers for named imports.
		 * Prefers inline type declarations for named type imports.
		 */
		'import/consistent-type-specifier-style': ['warn', 'prefer-inline'],

		/**
		 * Ensure that all exports are declared at the bottom of the file.
		 * Helps maintain consistent structure with exports last in ES6 modules.
		 */
		'import/exports-last': 'warn',

		/**
		 * Require named exports to be grouped together in a single export declaration.
		 * Improves readability and reduces multiple export declarations or module assignments.
		 */
		'import/group-exports': 'off',

		/**
		 * Disallow duplicate imports.
		 * Reports if a resolved path is imported more than once to reduce redundancy.
		 */
		'import/no-duplicates': 'warn',

		/**
		 * Disallow the use of empty named import blocks.
		 * Prevents empty imports like `import {} from 'module'` as they are unnecessary.
		 */
		'import/no-empty-named-blocks': 'warn',

		/**
		 * Disallow useless path segments in import statements.
		 * Prevents redundant segments like `./folder/../file` in import paths.
		 */
		'import/no-useless-path-segments': [
			'warn',
			{
				noUselessIndex: false, // Allows redundant `index.js` imports if they improve clarity.
			},
		],

		/**
		 * Enforce a consistent order for `require` or `import` statements.
		 * Groups and orders imports for better readability and structure.
		 */
		'import/order': [
			'warn',
			{
				groups: ['builtin', 'external', 'internal', ['sibling', 'parent'], 'index', 'unknown'],
				'newlines-between': 'never',
				alphabetize: {
					order: 'asc',
					caseInsensitive: true,
				},
			},
		],

		/**
		 * Enforce an empty line after the last top-level import statement or require call.
		 * Ensures better readability by properly separating imports from the rest of the code.
		 */
		'import/newline-after-import': 'warn',

		'@stylistic/padding-line-between-statements': [
			'warn',
			{
				blankLine: 'always',
				prev: ['cjs-import', 'directive'],
				next: '*',
			},
			{
				blankLine: 'always',
				prev: '*',
				next: ['cjs-export', 'class', 'export', 'function', 'for', 'do', 'switch', 'if', 'try'],
			},
			{
				blankLine: 'any',
				prev: 'export',
				next: 'export',
			},
			{
				blankLine: 'never',
				prev: 'directive',
				next: 'directive',
			},
			{
				blankLine: 'never',
				prev: 'cjs-import',
				next: 'cjs-import',
			},
			{
				blankLine: 'never',
				prev: 'import',
				next: 'import',
			},
		],

		'prefer-arrow-callback': [
			'error',
			{
				allowNamedFunctions: true,
				allowUnboundThis: false,
			},
		],

		'prefer-const': [
			'error',
			{
				destructuring: 'all',
				ignoreReadBeforeAssign: true,
			},
		],

		// Conflicts with Prettier/Biome
		'@stylistic/brace-style': 'off',
		'@stylistic/function-paren-newline': 'off',
		'@stylistic/indent': 'off',
		'@stylistic/multiline-ternary': 'off',
		'@stylistic/max-len': [
			'off',
			{
				code: 120,
				ignoreTrailingComments: true,
				ignoreUrls: true,
				ignoreStrings: true,
				ignoreTemplateLiterals: true,
				ignorePattern: String.raw`^import\W.*`,
			},
		],
		'@stylistic/no-extra-parens': 'off',
		'@stylistic/no-tabs': 'off',
		'@stylistic/no-mixed-operators': 'off',
		'@stylistic/operator-linebreak': 'off',
		'@stylistic/space-before-function-paren': 'off',

		/**
		 * Enforce a specific parameter name in catch clauses.
		 */
		'unicorn/catch-error-name': ['error', { name: 'e' }],

		/**
		 * Use destructured variables over properties.
		 *
		 * Enforces the use of already destructured objects and their variables over accessing each property
		 * individually. Previous destructurings are easily missed which leads to an inconsistent code style.
		 *
		 * This rule is partly fixable. It does not fix nested destructuring.
		 */
		'unicorn/consistent-destructuring': 'off',

		/**
		 * Prefer consistent types when spreading a ternary in an array literal.
		 *
		 * When spreading a ternary in an array, we can use both `[]` and '' as fallbacks, but it's better to have
		 * consistent types in both branches.
		 */
		'unicorn/consistent-empty-array-spread': 'error',

		/**
		 * Enforce consistent style for element existence checks with `indexOf()`, `lastIndexOf()`, `findIndex()`,
		 * and `findLastIndex()`.
		 *
		 * Prefer using index === -1 to check if an element does not exist and index !== -1 to check if an element
		 * does exist.
		 */
		'unicorn/consistent-existence-index-check': 'error',

		/**
		 * Enforce no spaces between braces.
		 */
		'unicorn/empty-brace-spaces': 'error',

		/**
		 * Enforce explicitly comparing the `length` or `size` property of a value.
		 *
		 * This rule is only meant to enforce a specific style and clarify comparisons.
		 */
		'unicorn/explicit-length-check': 'error',

		/**
		 *
		 * Enforce a case style for filenames.
		 *
		 * Enforces all linted files to have their names in a certain case style and lowercase file extension.
		 * The default is kebabCase.
		 *
		 * Files named index.js, index.mjs, index.cjs, index.ts, index.tsx, index.vue are ignored as they can't
		 * change a case (Only a problem with pascalCase).
		 *
		 * Characters in the filename except a-z, A-Z, 0-9, -, and _ are ignored.
		 */
		'unicorn/filename-case': ['error', { case: 'kebabCase', multipleFileExtensions: true }],

		/**
		 * Do not use leading/trailing space between console.log parameters.
		 *
		 * The console.log() method and similar methods joins the parameters with a space, so adding a leading/trailing
		 * space to a parameter, results in two spaces being added.
		 */
		'unicorn/no-console-spaces': 'error',

		/**
		 * Enforce the use of Unicode escapes instead of hexadecimal escapes.
		 *
		 * Enforces a convention of using Unicode escapes instead of hexadecimal escapes for consistency and clarity.
		 */
		'unicorn/no-hex-escape': 'error',

		/**
		 * Disallow identifiers starting with new or class.
		 *
		 * `new Foo` and `newFoo` look very similar. Use alternatives that do not look like keyword usage.
		 */
		'unicorn/no-keyword-prefix': 'off',

		/**
		 * Disallow nested ternary expressions.
		 */
		'unicorn/no-nested-ternary': 'off',

		/**
		 * Disallow number literals with zero fractions or dangling dots.
		 *
		 * There is no difference in JavaScript between, for example, 1, 1.0 and 1., so prefer the former for
		 * consistency and brevity.
		 */
		'unicorn/no-zero-fractions': 'error',

		/**
		 * Enforce proper case for numeric literals.
		 *
		 * Differentiating the casing of the identifier and value clearly separates them and makes your code more
		 * readable.
		 *
		 *     Lowercase identifier and uppercase value for Number and BigInt.
		 *     Lowercase e for exponential notation.
		 */
		// Conflicts with Prettier/Biome
		'unicorn/number-literal-case': 'off',

		/**
		 * Enforce the style of numeric separators by correctly grouping digits.
		 *
		 * Enforces a convention of grouping digits using numeric separators. Long numbers can become really hard to
		 * read, so cutting it into groups of digits, separated with a _, is important to keep your code clear. This
		 * rule also enforces a proper usage of the numeric separator, by checking if the groups of digits are of the
		 * correct size.
		 *
		 * By default, this doesn't apply to numbers below 10_000, but that can be customized.
		 */
		'unicorn/numeric-separators-style': 'error',

		/**
		 * Prefer using Object.fromEntries(…) to transform a list of key-value pairs into an object.
		 *
		 * When transforming a list of key-value pairs into an object, Object.fromEntries(…) should be preferred.
		 * `no-array-reduce` is a related but more generic rule.
		 */
		'unicorn/prefer-object-from-entries': 'error',

		/**
		 * Prefer omitting the catch binding parameter.
		 *
		 * If the catch binding parameter is not used, it should be omitted.
		 */
		'unicorn/prefer-optional-catch-binding': 'error',

		/**
		 * Prefer the spread operator over Array.from(…), Array#concat(…), Array#{slice,toSpliced}() and String#split('').
		 */
		'unicorn/prefer-spread': 'error',

		/**
		 * Prefer using the String.raw tag to avoid escaping \.
		 *
		 * String.raw can be used to avoid escaping \.
		 */
		'unicorn/prefer-string-raw': 'error',

		/**
		 * Enforce consistent relative URL style.
		 *
		 * When using a relative URL in new URL(), the URL should either never or always use the ./ prefix consistently.
		 */
		'unicorn/relative-url-style': 'error',

		/**
		 * Enforce consistent brace style for case clauses.
		 *
		 *     Forbid braces for empty clauses.
		 *     Enforce braces for non-empty clauses.
		 */
		'unicorn/switch-case-braces': 'error',
	},
};

export default config;
