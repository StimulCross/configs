import stylistic from '@stylistic/eslint-plugin';
import imports from 'eslint-plugin-import';
import eslintPluginUnicorn from 'eslint-plugin-unicorn';
import globals from 'globals';

/** @type {import("eslint").Linter.Config} */
const config = {
	languageOptions: {
		globals: globals.builtin,
	},
	plugins: {
		import: imports,
		'@stylistic': stylistic,
		unicorn: eslintPluginUnicorn,
	},
	rules: {
		/**
		 * Enforce return statements in callbacks of array's methods.
		 *
		 * This rule enforces the usage of return statement in callbacks of array's methods.
		 */
		'array-callback-return': 'error',

		/**
		 * Require consistent returns.
		 * This rule is aimed at ensuring all return statements either specify a value or don't specify a value.
		 */
		'consistent-return': ['warn', { treatUndefinedAsUnspecified: true }],

		/**
		 * Enforce for loop update clause moving the counter in the right direction.
		 * A for loop with a stop condition that can never be reached, such as one with a counter that
		 * moves in the wrong direction, will run infinitely. While there are occasions when an infinite
		 * loop is intended, the convention is to construct such loops as while loops. More typically,
		 * infinite for loop is a bug.
		 */
		'for-direction': 'error',

		/**
		 * Require function expressions to have a name.
		 * If you provide the optional name for a function expression, then you will get the name of the
		 * function expression in the stack trace.
		 * If you are tempted to create an anonymous function expression, consider using an arrow function instead.
		 */
		'func-names': ['warn', 'as-needed'],

		/**
		 * Enforce that a return statement is present in property getters.
		 * Not returning a value from a property getter is most likely a programmer mistake.
		 */
		'getter-return': 'error',

		/**
		 * Require Guarding for-in.
		 *
		 * This rule is aimed at preventing unexpected behavior that could arise from using a for-in
		 * loop without filtering the results in the loop.
		 */
		'guard-for-in': 'error',

		/**
		 * Enforce a maximum number of classes per file.
		 * Files containing multiple classes can often result in a less navigable and poorly structured
		 * codebase. Best practice is to keep each file limited to a single responsibility.
		 */
		'max-classes-per-file': ['warn', 1],

		/**
		 * Limit maximum depth.
		 * This rule aims to reduce the complexity of your code by allowing you to configure the maximum
		 * depth blocks can be nested in a function.
		 */
		'max-depth': ['warn', 6],

		/**
		 * Disallow using an async function as a Promise executor.
		 * This rule aims to disallow async Promise executor functions.
		 */

		/** @see  esd */
		'no-async-promise-executor': 'error',

		/**
		 * Disallow await inside loops.
		 * Performing an operation on each element of an iterable is a common task. However, performing
		 * an await as part of each operation is an indication that the program is not taking full
		 * advantage of the parallelization benefits of async/await.
		 */
		'no-await-in-loop': 'warn',

		/**
		 * Disallow lexical declarations in case/default clauses.
		 * This rule disallows lexical declarations (let, const, function and class) in case/default
		 * clauses. The reason is that the lexical declaration is visible in the entire switch block, but
		 * it only gets initialized when it is assigned, which will only happen if the case where it is
		 * defined is reached.
		 */
		'no-case-declarations': 'error',

		/**
		 * Disallow comparing against -0.
		 * The rule should warn against code that tries to compare against -0, since that will not work
		 * as intended. That is, code like x === -0 will pass for both +0 and -0.
		 */
		'no-compare-neg-zero': 'error',

		/**
		 * Disallow Assignment in Conditional Statements
		 * This rule is aimed at eliminating ambiguous assignments in for, if, while, and do...while
		 * conditional statements.
		 */
		'no-cond-assign': ['error', 'except-parens'],

		/**
		 * Disallow use of console.
		 * In general, you should use a logging library which offers more flexibility in terms of log
		 * level configuration and log destinations (i.e. sending logs to external storage/monitoring
		 * service), such as `debug` or `bunyan`.
		 * Feel free to turn this rule off in your project-level ruleset if you are ok with logging to the
		 * console only.
		 * On the frontend, custom logging logic should be implemented.
		 *
		 * @see {@link https://www.npmjs.com/package/debug}
		 * @see {@link https://www.npmjs.com/package/bunyan}
		 */
		'no-console': 'warn',

		/**
		 * Disallow use of constant expressions in conditions
		 * Comparing a literal expression in a condition is usually a typo or development trigger for a
		 * specific behavior.
		 */
		'no-constant-condition': 'error',

		/**
		 * Disallow Controls Characters in Regular Expressions
		 * Control characters are special, invisible characters in the ASCII range 0-31. These
		 * characters are rarely used in JavaScript strings, so a regular expression containing these
		 * characters is most likely a mistake.
		 */
		'no-control-regex': 'error',

		/**
		 * Disallow debugger
		 * Production code should definitely not contain the `debugger` statement.
		 */
		'no-debugger': 'error',

		/**
		 * Disallow duplicate arguments in function declarations
		 * Outside strict mode, duplicate arguments will mask the value of the first argument.
		 */
		'no-dupe-args': 'error',

		/**
		 * Disallow duplicate conditions in if-else-if chains
		 * Identical test conditions in an if-else-if chain are typically a mistake. A duplicate condition
		 * will evaluate the same as another, meaning that its branch can never execute.
		 */
		'no-dupe-else-if': 'error',

		/**
		 * Disallow Duplicate Keys in Object Literals.
		 * Defining duplicate keys in objects can result in unexpected behavior.
		 */
		'no-dupe-keys': 'error',

		/**
		 * Disallow a duplicate case label in switch statements
		 * A switch statement with duplicate case labels is normally indicative of an error in logic.
		 */
		'no-duplicate-case': 'error',

		/**
		 * Disallow Empty Character Classes in RegExp
		 * Empty character classes in regular expressions do not match anything and can lead to code bugs.
		 */
		'no-empty-character-class': 'error',

		/**
		 * Disallow Empty Block Statements
		 * Empty block statements are generally an indicator of refactoring work that's incomplete or could
		 * be problematic.
		 */
		'no-empty': 'error',

		/**
		 * Disallow empty functions
		 * This rule warns about writing empty functions unless a comment is included to justify the block.
		 */
		'no-empty-function': ['warn', { allow: ['constructors'] }],

		/**
		 * Disallow usage of eval()
		 * Used for parsing and evaluating strings as code, `eval()` is generally seen as a bad practice
		 * due to security and performance implications.
		 */
		'no-eval': 'error',

		/**
		 * Disallow Reassignment of Caught Error Variables
		 * Reassigning the exception parameter in a catch clause can prevent accurate debugging.
		 */
		'no-ex-assign': 'error',

		/**
		 * Disallow Extending of Native Objects
		 * Extending or modifying built-in native objects, such as `Array` or `Object`, may cause code
		 * conflicts and unpredictable behaviors.
		 */
		'no-extend-native': 'error',

		/**
		 * Disallow function binding where not necessary
		 * Unnecessary `.bind()` calls clutter the code and can negatively affect performance.
		 */
		'no-extra-bind': 'error',

		/**
		 * Disallow unnecessary labels in code
		 * Labels should only be used in complex nested structures where they are strictly needed.
		 */
		'no-extra-label': 'error',

		/**
		 * Disallow Extra Semicolons
		 * JavaScript allows extraneous semicolons without complaining, but these serve no purpose and
		 * contribute to readability issues.
		 */
		'@stylistic/no-extra-semi': 'error',

		/**
		 * Disallow Function Assignments
		 * Assigning or overwriting a `FunctionDeclaration` is usually indicative of an issue in the code.
		 */
		'no-func-assign': 'error',

		/**
		 * Disallow Implied `eval()` Usage
		 * When using methods like `setTimeout()`, `setInterval()`, or `execScript()` with string literals,
		 * it is functionally similar to `eval()` and can cause equivalent problems.
		 */
		'no-implied-eval': 'error',

		/**
		 * Disallow invalid imports
		 * Warn when imported variables are directly overwritten.
		 */
		'no-import-assign': 'warn',

		/**
		 * Avoid problematic nested declarations
		 * Example cases include hoisting and improper nesting of variable and function declarations, which
		 * create ambiguity for the program.
		 */
		'no-inner-declarations': ['error', 'both'],

		/**
		 * Disallow invalid regular expressions
		 * Ensures that all RegExp strings are correctly formatted.
		 */
		'no-invalid-regexp': 'error',

		/**
		 * Disallow spaces or invisible control characters in code
		 * Prevent accidental use of irregular white space characters/fillers such as `\u00A0`.
		 */
		'no-irregular-whitespace': 'error',

		/**
		 * Disallow usage of the `__iterator__` property
		 * The `__iterator__` property is non-standard and not widely supported by browsers.
		 */
		'no-iterator': 'error',

		/**
		 * Disallow unnecessary nested blocks.
		 * This rule prevents the usage of nested blocks that do not add value to the code structure.
		 */
		'no-lone-blocks': 'error',

		/**
		 * Disallow function declarations inside loops
		 * Declaring functions within loops can lead to performance issues and unexpected behavior.
		 */
		'no-loop-func': 'warn',

		/**
		 * Disallow misleading character classes
		 * Prevents Unicode characters composed of multiple code points from being incorrectly matched in
		 * regular expression character classes.
		 */
		'no-misleading-character-class': 'error',

		/**
		 * Disallow initialization of variables to `undefined`.
		 * Variables in JavaScript are implicitly assigned the value `undefined`, so initializing them to
		 * `undefined` explicitly is unnecessary.
		 */
		'no-undef-init': 'error',

		/**
		 * Disallow loops that are guaranteed to only run once
		 * Prevents loops with logic that results in only a single iteration.
		 */
		'no-unreachable-loop': 'warn',

		/**
		 * Disallow negating the left operand of relational operators
		 * Ensures negation is not mistakenly applied to relational operators such as `<`, `>`, `<=`, or `>=`.
		 */
		'no-unsafe-negation': 'error',

		/**
		 * Disallow variables declared but not used.
		 * This rule eliminates dead code and increases code readability by removing unused variables.
		 */
		'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],

		/**
		 * Disallow usage of variables before their declaration.
		 * This rule enforces that variables must be declared before they're used.
		 */
		'no-use-before-define': ['error', { functions: false, classes: false }],

		/**
		 * Disallow unnecessary backreferences in regular expressions
		 * Backreferences that are not used, or have no effect on the matching, are flagged.
		 */
		'no-useless-backreference': 'warn',

		/**
		 * Disallow using `new` without storing the resulting object.
		 * Constructor calls using the `new` keyword without assigning the resulting instance to a variable
		 * are unnecessary and indicate a code issue.
		 */
		'no-new': 'error',

		/**
		 * Disallow the creation of functions using the `Function` constructor.
		 * Using the `Function` constructor can result in complexity, reduced readability, and runtime risks.
		 */
		'no-new-func': 'error',

		/**
		 * Disallow use of the `Object` constructor.
		 * The `Object` constructor should be avoided in favor of object literal syntax for consistency and readability.
		 */
		'no-new-object': 'warn',

		/**
		 * Disallow using the `new` keyword with non-constructor objects.
		 * Prevent usage of the `new` keyword with objects that are not valid constructors.
		 */
		'no-new-native-nonconstructor': 'error',

		/**
		 * Disallow the creation of wrapping instances for primitive values.
		 * Using constructors such as `new String`, `new Number`, or `new Boolean` creates an object instead
		 * of the expected primitive type.
		 */
		// Replaced with Unicorn
		'no-new-wrappers': 'off',

		/**
		 * Disallow calling global objects like functions.
		 * Flags cases where global objects, like `Math` or `JSON`, are wrongly called as functions.
		 */
		'no-obj-calls': 'error',

		/**
		 * Disallow consecutive spaces within regular expressions.
		 * Prevents unexpected results when using multiple spaces unintentionally in regular expressions.
		 */
		'no-regex-spaces': 'error',

		/**
		 * Disallow assignment in return statements.
		 * Assigning a value in the return statement causes ambiguity and makes the code less readable.
		 */
		'no-return-assign': 'error',

		/**
		 * Disallow the use of `javascript:`-based URLs.
		 * Flags cases where JavaScript code is embedded inside `javascript:` URLs, which can be a security risk.
		 */
		'no-script-url': 'error',

		/**
		 * Disallow self-assignment of variables.
		 * Prevents unnecessary assignments where the same variable is assigned to itself.
		 */
		'no-self-assign': 'error',

		/**
		 * Disallow usage of the comma operator.
		 * The comma operator is discouraged because it can obscure the code's intent and create readability issues.
		 */
		'no-sequences': 'error',

		/**
		 * Disallow defining sparse arrays.
		 * Sparse arrays, created by omitting values between commas, are often a mistake and make the code less readable.
		 */
		'no-sparse-arrays': 'error',

		/**
		 * Disallow returning values from setters.
		 * Setters should not return any value, as the return value is not used.
		 */
		'no-setter-return': 'error',

		/**
		 * Disallow using template literal placeholders in regular strings.
		 * Identifies potential misuse of template literal placeholders (${...}) in normal string literals.
		 */
		'no-template-curly-in-string': 'warn',

		/**
		 * Disallow unexpected multiline expressions.
		 * Prevents unintended consequences of breaking statements across multiple lines without proper punctuation.
		 */
		'no-unexpected-multiline': 'error',

		/**
		 * Disallow loops with unmodified conditions.
		 * Flags situations where a loop's condition remains unchanged, potentially causing an infinite loop.
		 */
		'no-unmodified-loop-condition': 'warn',

		/**
		 * Disallow unreachable code.
		 * Identifies and flags code that is unreachable due to `return`, `throw`, `break`, or `continue` statements.
		 */
		'no-unreachable': 'error',

		/**
		 * Disallow control flow statements within `finally` blocks.
		 * Forbids the use of `return`, `throw`, `break`, or `continue` within `finally` blocks, which override
		 * control flow from `try` or `catch` blocks.
		 */
		'no-unsafe-finally': 'error',

		/**
		 * Disallow unused labels in code.
		 * Flags labels that are declared but never used, which indicates incomplete code or a potential logic error.
		 */
		'no-unused-labels': 'error',

		/**
		 * Prevent unnecessary usage of `.call()` and `.apply()`.
		 * Flags cases where `Function.prototype.call` or `Function.prototype.apply` can be replaced with
		 * direct function calls.
		 */
		'no-useless-call': 'error',

		/**
		 * Disallow redundant `catch` clauses.
		 * Identifies `catch` blocks that only rethrow the captured error without processing or handling them.
		 */
		'no-useless-catch': 'error',

		/**
		 * Disallow unnecessary string concatenation.
		 * This rule flags string concatenation that can be simplified, such as concatenating two string literals.
		 */
		'no-useless-concat': 'warn',

		/**
		 * Disallow unnecessary constructors in classes.
		 * Constructor methods that do nothing but call `super()` are redundant and can be omitted.
		 */
		'no-useless-constructor': 'error',

		/**
		 * Disallow unnecessary escape characters.
		 * Flags escape characters in strings or regular expressions that do not have any effect on the output.
		 */
		'no-useless-escape': 'error',

		/**
		 * Disallow redundant return statements.
		 * Flags `return` statements that serve no functional purpose or do not improve readability.
		 */
		'no-useless-return': 'warn',

		/**
		 * Disallow usage of `var`.
		 * Enforces the use of `let` or `const` over `var` for variable declarations to ensure block scope.
		 */
		'no-var': 'error',

		/**
		 * Suggest using rest parameters instead of `arguments`.
		 * This rule flags the use of `arguments` and recommends using the ES6 rest parameter feature.
		 */
		'prefer-rest-params': 'error',

		/**
		 * Require proper usage of `isNaN()`.
		 * Flags checks that incorrectly compare values against `NaN` instead of using `isNaN()`.
		 */
		'use-isnan': 'error',

		/**
		 * Ensure `typeof` comparisons are valid.
		 * This rule verifies that the result of a `typeof` operation is compared against a valid string literal.
		 */
		'valid-typeof': 'error',

		/**
		 * Enforce valid use of `super()` in constructors.
		 * Flags constructors that use `this` or `super` incorrectly, or fail to call `super()` in a derived class.
		 */
		'constructor-super': 'error',

		/**
		 * Disallow modifying variables declared with `class`.
		 * Prevents reassignment or modification of variables declared as `class`.
		 */
		'no-class-assign': 'error',

		/**
		 * Disallow modifying variables declared with `const`.
		 * Ensures that variables declared with `const` are not reassigned or modified.
		 */
		'no-const-assign': 'error',

		/**
		 * Disallow duplicate class member declarations.
		 * Ensures that class members (methods or properties) within the same class do not have duplicate names.
		 */
		'no-dupe-class-members': 'error',

		/**
		 * Disallow use of `this`/`super` before calling `super()`.
		 * Prevents usage of `this` or `super` before calling `super()` in a derived class constructor.
		 */
		'no-this-before-super': 'error',

		/**
		 * Disallow deletion of variables.
		 * Flags attempts to use the `delete` operator on variables, which is not allowed in JavaScript.
		 */
		'no-delete-var': 'error',

		/**
		 * Disallow labels that share names with variables.
		 * Prevents confusion by disallowing labels that have the same name as a variable in scope.
		 */
		'no-label-var': 'error',

		/**
		 * Disallow shadowing of restricted names.
		 * Ensures that variables do not shadow restricted names like `undefined`, `NaN`, `Infinity`, etc.
		 */
		'no-shadow-restricted-names': 'error',

		/**
		 * Disallow shadowing of variables.
		 * Prevents variable declarations from shadowing variables declared in outer scopes.
		 */
		'no-shadow': ['error', { builtinGlobals: true, hoist: 'functions', allow: ['name'] }],

		/**
		 * Disallow usage of undeclared variables.
		 * Ensures that all variables are declared using `let`, `const`, or `var`, and prevents accidental implicit globals.
		 */
		'no-undef': ['error', { typeof: true }],

		/**
		 * Require getter/setter pairs to be included together.
		 * Ensures an object with a `set` method for a property also has a corresponding `get` method.
		 */
		'accessor-pairs': 'error',

		/**
		 * Require switch statements to include a default case.
		 * Flags `switch` statements that do not include a `default` case, unless explicitly stated with `// no default`.
		 */
		'default-case': 'error',

		/**
		 * Enforce strict equality (`===`) and inequality (`!==`).
		 * Disallows usage of the loose equality (`==`) and inequality (`!=`) operators to prevent type coercion issues.
		 */
		eqeqeq: 'error',

		/**
		 * Disallow use of the Array constructor.
		 * Encourages the use of array literals over the `Array` constructor due to potential confusion with single arguments.
		 */
		'no-array-constructor': 'error',

		/**
		 * Disallow use of `arguments.caller` and `arguments.callee`.
		 * Bans the usage of argument properties that are deprecated and problematic for JavaScript optimizations.
		 */
		'no-caller': 'error',

		/**
		 * Disallow labeled statements.
		 * Ensures cleaner and more consistent code by eliminating the use of labeled statements unless strictly necessary.
		 */
		'no-labels': 'error',

		/**
		 * Disallow number literals that lose precision.
		 * Prevents the use of numeric literals that lose precision due to floating-point rounding issues.
		 */
		'no-loss-of-precision': 'warn',

		/**
		 * Disallow empty destructuring patterns.
		 * Flags cases where object or array destructuring patterns are empty, which serves no logical purpose.
		 */
		'no-empty-pattern': 'error',

		/**
		 * Ensure that `case` statements do not unintentionally fall through.
		 * Flags `switch` statements where a `case` block does not end with a `break` or related statement,
		 * unless explicitly marked with appropriate comments.
		 */
		'no-fallthrough': 'off',

		/**
		 * Disallow assignment to native objects or read-only global variables.
		 * Ensures that global objects such as `Math` or `Array` remain immutable by prohibiting assignments to them.
		 */
		'no-global-assign': ['error', { exceptions: ['Promise'] }],

		/**
		 * Disallow octal escape sequences.
		 * Flags deprecated octal escape sequences in strings, recommending the use of Unicode escapes instead.
		 */
		'no-octal-escape': 'error',

		/**
		 * Disallow octal literals.
		 * Prevents usage of deprecated octal literals in the code, ensuring consistency and adherence to ES5+ standards.
		 */
		'no-octal': 'error',

		/**
		 * Disallow use of the `__proto__` property.
		 * Enforces the use of `Object.getPrototypeOf()` instead of accessing the deprecated `__proto__` property.
		 */
		'no-proto': 'error',

		/**
		 * Disallow declaring the same variable more than once.
		 * Prevents logical errors by disallowing duplicate variable declarations within the same scope.
		 */
		'no-redeclare': 'error',

		/**
		 * Disallow comparisons to itself.
		 * Flags self-comparisons (`x === x`), which are typically unnecessary and a likely source of errors.
		 */
		'no-self-compare': 'error',

		/**
		 * Restrict what can be thrown as exceptions.
		 * Ensures that only `Error` objects (or objects of similar structure) are thrown in exceptions.
		 */
		'no-throw-literal': 'error',

		/**
		 * Disallow use of `undefined` variable.
		 * In ECMAScript 3, it was possible to overwrite the value of `undefined`. While ECMAScript 5
		 * disallows overwriting `undefined`, it's still possible to shadow `undefined`.
		 */
		'no-undefined': 'off',

		/**
		 * Disallow unused expressions.
		 * Flags expressions that do not affect program behavior, such as standalone operations without side effects.
		 */
		'no-unused-expressions': ['error', { allowShortCircuit: true, allowTernary: true }],

		/**
		 * Disallow renaming import, export, and destructured assignments to the same name.
		 * This rule enforces clarity and avoids unnecessary renaming such as `{ a as a }` in imports or destructuring.
		 */
		'no-useless-rename': 'warn',

		/**
		 * Disallow the use of `with` statements.
		 * The `with` statement is considered dangerous because it makes scope unpredictable and harder to debug.
		 */
		'no-with': 'error',

		'prefer-destructuring': [
			'off',
			{
				object: true,
				array: false,
			},
		],

		/**
		 * Suggest using named capture groups in regular expressions.
		 * Enforces the use of named capture groups, which can make complex regular expressions more readable.
		 */
		'prefer-named-capture-group': 'warn',

		/**
		 * Require using `Error` objects as Promise rejection reasons.
		 * Ensures that `Promise` rejections are meaningful and include stack traces by using `Error` objects.
		 */
		'prefer-promise-reject-errors': 'error',

		/**
		 * Suggest using the spread operator instead of `.apply()`.
		 * Recommends replacing `Function.prototype.apply()` calls with the spread operator (`...`) for simplicity and readability.
		 */
		'prefer-spread': 'warn',

		/**
		 * Require specifying the radix parameter for `parseInt()`.
		 * Prevents unexpected behavior by requiring the second argument (radix) when using `parseInt()`.
		 */
		radix: 'warn',

		/**
		 * Disallow async functions without `await`.
		 * Flags async functions that do not contain an `await` expression, which could indicate incomplete refactoring.
		 */
		'require-await': 'warn',

		/**
		 * Enforce the use of the `u` flag on regular expressions.
		 * Ensures better handling of Unicode patterns by requiring the `u` flag in regular expressions.
		 */
		'require-unicode-regexp': 'error',

		/**
		 * Disallow generator functions without `yield`.
		 * Flags generator functions that do not contain a `yield` expression, as they may serve no purpose.
		 */
		'require-yield': 'error',

		/**
		 * Enforce strict mode usage.
		 * This rule ensures `use strict` is declared at the global level where strict mode is required.
		 */
		strict: ['off', 'global'],

		/**
		 * Require symbol description.
		 * This rule requires a description when creating symbols. Using descriptions promotes easier
		 * debugging — when a symbol is logged, the description is shown.
		 */
		'symbol-description': 'warn',

		/**
		 * Require variable declarations to be at the top of their scope.
		 * Enforces organizing variable declarations at the beginning of their scope for better readability and maintainability.
		 */
		'vars-on-top': 'warn',

		/**
		 * Ensure imported modules can be resolved.
		 * Flags unresolved module imports to ensure all imports are valid and can be found in the file system.
		 */
		'import/no-unresolved': ['warn', { commonjs: true }],

		/**
		 * Verifies that all named imports exist in the referenced module.
		 * Ensures correctness of imported named exports by verifying they are defined in the source module.
		 */
		'import/named': 'error',

		/**
		 * Disallow default imports if the module does not export a default.
		 * Ensures that the imported module has a default export if it is being imported as a default import.
		 */
		'import/default': 'error',

		/**
		 * Ensure imports appear before other code.
		 * Enforces that `import` statements appear at the top of the file, preceding any other code.
		 */
		'import/first': 'error',

		/**
		 * Ensure names exist when importing an entire namespace.
		 * Verifies the correctness of dynamically referenced names when an entire module is imported with `* as`.
		 */
		'import/namespace': 'error',

		/**
		 * Disallow importing modules using absolute paths.
		 * Enforces that imports are relative or module-based, improving portability and consistency.
		 */
		'import/no-absolute-path': 'error',

		/**
		 * Report repeated export names or defaults.
		 * Flags duplicate exports, including duplicate names or default exports within the same module.
		 */
		'import/export': 'error',

		/**
		 * Require named exports be used instead of anonymous default exports.
		 * Improves code maintainability by requiring modules to use named exports instead of anonymous default exports.
		 */
		'import/no-anonymous-default-export': ['warn', { allowObject: true, allowArray: true }],

		/**
		 * Disallow importing extraneous dependencies.
		 * Flags imports of modules not listed in `package.json`, ensuring dependencies are properly declared.
		 */
		'import/no-extraneous-dependencies': 'error',

		/**
		 * Disallow mutable exports.
		 * Prevents the use of `var` or `let` for exports, as exported variables should generally remain immutable.
		 */
		'import/no-mutable-exports': 'error',

		/**
		 * Disallow using a default export as the locally imported name of a named export.
		 * Flags cases where a named export is shadowed by its own default export within imported modules.
		 */
		'import/no-named-as-default': 'warn',

		/**
		 * Disallow importing a default export using a named import.
		 * Prevents confusion by ensuring default exports are always referenced explicitly, instead of destructured as named imports.
		 */
		'import/no-named-default': 'warn',

		/**
		 * Disallow referencing an exported name as a property on the default export.
		 * Prevents ambiguity by disallowing simultaneous referencing of an exported name as part of a default import.
		 */
		'import/no-named-as-default-member': 'warn',

		/**
		 * Disallow modules importing themselves.
		 * Flags circular imports where a module directly imports itself, which can lead to unpredictable behavior.
		 */
		'import/no-self-import': 'error',

		/**
		 * Disallow circular imports.
		 * Ensures that modules do not have cyclic import dependencies by limiting the stack depth for resolution.
		 */
		'import/no-cycle': ['error', { maxDepth: 8 }],

		/**
		 * Disallow unassigned imports.
		 * Prevents using imports solely for side effects without explicitly assigning them to identifiers.
		 */
		'import/no-unassigned-import': 'error',

		'no-prototype-builtins': 'error',

		/**
		 * Improve regexes by making them shorter, consistent, and safer.
		 */
		'unicorn/better-regex': ['warn', { sortCharacterClasses: false }],

		/**
		 * Prefer passing `Date` directly to the constructor when cloning.
		 *
		 * The `Date` constructor can clone a `Date` object directly when passed as an argument, making timestamp
		 * conversion unnecessary.
		 */
		// 'unicorn/consistent-date-clone': 'error',

		/**
		 * Move function definitions to the highest possible scope.
		 *
		 * A function definition should be placed as close to the top-level scope as possible without breaking its
		 * captured values. This improves readability, directly improves performance and allows JavaScript engines
		 * to better optimize performance.
		 */
		'unicorn/consistent-function-scoping': 'error',

		/**
		 * Enforce correct `Error` subclassing.
		 *
		 * Enforces the only valid way of `Error` subclassing. It works with any super class that ends in `Error`.
		 */
		'unicorn/custom-error-definition': 'off',

		/**
		 * Require escape sequences to use uppercase values.
		 *
		 * Enforces defining escape sequence values with uppercase characters rather than lowercase ones.
		 * This promotes readability by making the escaped value more distinguishable from the identifier.
		 */
		'unicorn/escape-case': 'error',

		/**
		 * Enforce passing a `message` value when creating a built-in error.
		 *
		 * This rule enforces a message value to be passed in when creating an instance of a built-in Error object,
		 * which leads to more readable and debuggable code.
		 */
		'unicorn/error-message': 'error',

		/**
		 * TODO comments are useful when a piece of code needs some work. Unfortunately these can be easily forgotten
		 * as it's common to forget to track them, leaving dangling tasks to be found at later random moments,
		 * or never at all.
		 *
		 * With this rule, a TODO can have a condition right from the beginning to define its lifespan. When the
		 * condition is met, ESLint will take care of reporting that there's work to be done.
		 *
		 * This rule will ignore all TODOs without conditions. For more information, read the below
		 * eslint/no-warning-comments section.
		 *
		 * Quick overview of conditions:
		 *
		 *     Expire after a specific date.
		 *     Expire when your package (package.json) reaches a specific version.
		 *     Expire when a package.json engines property reaches a specific version.
		 *     Expire when you install/uninstall a specific package.
		 *     Expire when a package reaches a specific version.
		 *
		 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/expiring-todo-comments.md
		 */
		'unicorn/expiring-todo-comments': 'warn',

		/**
		 * Enforce the use of new for all builtins, except `String`, `Number`, `Boolean`, `Symbol` and `BigInt`.
		 */
		'unicorn/new-for-builtins': 'error',

		/**
		 * Disallow recursive access to this within getters and setters.
		 *
		 * This rule prevents recursive access to this within getter and setter methods in objects and classes,
		 * avoiding infinite recursion and stack overflow errors.
		 */
		// 'unicorn/no-accessor-recursion': 'error',

		/**
		 * Enforce specifying rules to disable in `eslint-disable` comments.
		 *
		 * This rule makes you specify the rules you want to disable when using `eslint-disable`, `eslint-disable-line`
		 * or `eslint-disable-next-line` comments.
		 *
		 * If you want to disable an ESLint rule in a file or on a specific line, you can add a comment.
		 */
		'unicorn/no-abusive-eslint-disable': 'error',

		/**
		 * Disallow anonymous functions and classes as the default export.
		 *
		 * Naming default exports improves codebase searchability by ensuring consistent identifier use for
		 * a module's default export, both where it's declared and where it's imported.
		 */
		'unicorn/no-anonymous-default-export': 'error',

		/**
		 * Prevent passing a function reference directly to iterator methods.
		 *
		 * Passing functions to iterator methods can cause issues when the function is changed without realizing
		 * that the iterator passes 2 more parameters to it. This also applies when using TypeScript, albeit only
		 * if the function accepts the same parameter type used by the iterator method.
		 */
		// Works for non-array objects
		'unicorn/no-array-callback-reference': 'off',

		/**
		 * Prefer for…of over the forEach method.
		 *
		 * Benefits of for…of statement over the forEach method can include:
		 *
		 *     Faster
		 *     Better readability
		 *     Ability to exit early with break or return
		 *     Ability to skip iterations with continue
		 *
		 * Additionally, using for…of has great benefits if you are using TypeScript, because it does not cause a
		 * function boundary to be crossed. This means that type-narrowing earlier on in the current scope will work
		 * properly while inside the loop (without having to re-type-narrow). Furthermore, any mutated variables
		 * inside the loop will pick up on to determine if a variable is being used.
		 */
		'unicorn/no-array-for-each': 'error',

		/**
		 * Disallow using the `this` argument in array methods.
		 *
		 * The rule disallows using the thisArg argument in array methods:
		 *
		 *  - If the callback is an arrow function or a bound function, the thisArg won't affect it.
		 *  - If you intent to use a custom this in the callback, it's better to use the variable directly or
		 *    	use callback.bind(thisArg).
		 */
		'unicorn/no-array-method-this-argument': 'off',

		/**
		 * Enforce combining multiple Array#push() into one call.
		 *
		 * `Array#push()` accepts multiple arguments. Multiple calls should be combined into one.
		 */
		'unicorn/no-array-push-push': 'error',

		/**
		 * Disallow `Array#reduce()` and `Array#reduceRight()`.
		 *
		 * Array#reduce() and Array#reduceRight() usually result in hard-to-read and less performant code.
		 * In almost every case, it can be replaced by .map, .filter, or a for-of loop.
		 *
		 * It's only somewhat useful in the rare case of summing up numbers, which is allowed by default.
		 *
		 * Use eslint-disable comment if you really need to use it or disable the rule entirely if you prefer
		 * functional programming.
		 */
		'unicorn/no-array-reduce': 'error',

		/**
		 * Disallow member access from await expression.
		 *
		 * When accessing a member from an await expression, the await expression has to be parenthesized, which is not readable.
		 */
		'unicorn/no-await-expression-member': 'error',

		/**
		 * Disallow using await in Promise method parameters.
		 *
		 * Using await on promises passed as arguments to `Promise.all()`, `Promise.allSettled()`, `Promise.any()`,
		 * or `Promise.race()` is likely a mistake.
		 */
		'unicorn/no-await-in-promise-methods': 'error',

		/**
		 * Do not use document.cookie directly.
		 *
		 * It's not recommended to use document.cookie directly as it's easy to get the string wrong. Instead, you
		 * should use the Cookie Store API or a cookie library.
		 */
		'unicorn/no-document-cookie': 'error',

		/**
		 * Disallow empty files.
		 *
		 * Meaningless files clutter a codebase.
		 *
		 * Disallow any files only containing the following:
		 *
		 *     Whitespace
		 *     Comments
		 *     Directives
		 *     Empty statements
		 *     Empty block statements
		 *     Hashbang
		 */
		'unicorn/no-empty-file': 'error',

		/**
		 * Do not use a for loop that can be replaced with a for-of loop.
		 *
		 * There's no reason to use old school for loops anymore for the common case. You can instead use for-of loop
		 * (with `.entries()` if you need to access the index).
		 */
		'unicorn/no-for-loop': 'error',

		/**
		 * Disallow instanceof with built-in objects
		 */
		// 'unicorn/no-instanceof-builtins': 'error',

		/**
		 * Disallow invalid options in `fetch()` and new `Request()`.
		 *
		 * `fetch()` throws a TypeError when the method is `GET` or `HEAD` and a body is provided.
		 */
		'unicorn/no-invalid-fetch-options': 'error',

		/**
		 * Prevent calling `EventTarget#removeEventListener()` with the result of an expression.
		 *
		 * The `removeEventListener` function must be called with a reference to the same function that was passed to
		 * addEventListener. Calling `removeEventListener` with an inline function or the result of an inline `.bind()`
		 * call is indicative of an error and won't actually remove the listener.
		 */
		'unicorn/no-invalid-remove-event-listener': 'error',

		/**
		 * Disallow using `.length` as the end argument of `{Array,String,TypedArray}#slice()`.
		 *
		 * When calling `{String,Array,TypedArray}#slice(start, end)`, omitting the end argument defaults it to the
		 * object's `.length`. Passing it explicitly is unnecessary.
		 */
		'unicorn/no-length-as-slice-end': 'error',

		/**
		 * Disallow if statements as the only statement in if blocks without else.
		 *
		 * This rule adds onto the built-in `no-lonely-if` rule, which only disallows if statements in else, not in if.
		 * It is recommended to use `unicorn/no-lonely-if` together with the core ESLint `no-lonely-if` rule.
		 */
		'unicorn/no-lonely-if': 'error',

		/**
		 * Disallow a magic number as the depth argument in `Array#flat(…)`.
		 *
		 * When calling `Array#flat(depth)`, the depth argument should normally be 1 or Infinity, otherwise it should
		 * be a meaningful variable name or explained with a comment.
		 */
		'unicorn/no-magic-array-flat-depth': 'error',

		/**
		 * Disallow named usage of default import and export.
		 */
		// 'unicorn/no-named-default': 'error',

		/**
		 * Disallow negated conditions.
		 *
		 * Negated conditions are more difficult to understand. Code can be made more readable by inverting the
		 * condition.
		 *
		 * This is an improved version of the no-negated-condition ESLint rule that makes it automatically fixable.
		 * ESLint did not want to make it fixable.
		 */
		'unicorn/no-negated-condition': 'warn',

		/**
		 * Disallow negated expression in equality check.
		 *
		 * Using a negated expression in equality check is most likely a mistake.
		 */
		'unicorn/no-negation-in-equality-check': 'error',

		/**
		 * Disallow `new Array()`.
		 *
		 * The ESLint built-in rule `no-array-constructor` enforces using an array literal instead of the Array
		 * constructor, but it still allows using the Array constructor with one argument. This rule fills that gap.
		 *
		 * When using the Array constructor with one argument, it's not clear whether the argument is meant to be the
		 * length of the array or the only element.
		 */
		'unicorn/no-new-array': 'error',

		/**
		 * Enforce the use of `Buffer.from()` and `Buffer.alloc()` instead of the deprecated `new Buffer()`.
		 */
		'unicorn/no-new-buffer': 'error',

		/**
		 * Disallow the use of the `null` literal.
		 *
		 * Disallow the use of the `null` literal, to encourage using `undefined` instead. You can learn why in
		 * sindresorhus/meta#7
		 */
		'unicorn/no-null': 'off',

		/**
		 * Disallow the use of objects as default parameters.
		 *
		 * Default parameters should not be passed to a function through an object literal. The foo = {a: false}
		 * parameter works fine if only used with one option. As soon as additional options are added, you risk
		 * replacing the whole foo = {a: false, b: true} object when passing only one option: {a: true}. For this
		 * reason, object destructuring should be used instead.
		 */
		'unicorn/no-object-as-default-parameter': 'error',

		/**
		 * Disallow passing single-element arrays to Promise methods.
		 *
		 * Passing a single-element array to Promise.all(), Promise.any(), or Promise.race() is likely a mistake.
		 */
		'unicorn/no-single-promise-in-promise-methods': 'error',

		/**
		 * Disallow classes that only have static members.
		 */
		'unicorn/no-static-only-class': 'off',

		/**
		 * Disallow then property.
		 *
		 * If an object is defined as "thenable", once it's accidentally used in an await expression,
		 * it may cause problems:
		 */
		'unicorn/no-thenable': 'error',

		/**
		 * Disallow assigning this to a variable.
		 *
		 * this should be used directly. If you want a reference to this from a higher scope, consider using arrow
		 * function expression or Function#bind().
		 */
		'unicorn/no-this-assignment': 'error',

		/**
		 * Disallow comparing undefined using typeof.
		 *
		 * Checking if a value is undefined by using typeof value === 'undefined' is needlessly verbose.
		 * It's generally better to compare against undefined directly. The only time typeof is needed is when
		 * a global variable potentially does not exists, in which case, using globalThis.value === undefined may
		 * be better.
		 *
		 * Historical note: Comparing against undefined without typeof was frowned upon until ES5. This is no longer
		 * a problem since all engines currently in use no longer allow reassigning the undefined global.
		 */
		'unicorn/no-typeof-undefined': 'error',

		/**
		 * Disallow awaiting non-promise values.
		 *
		 * The await operator should only be used on Promise values.
		 */
		'unicorn/no-unnecessary-await': 'error',

		/**
		 * Enforce the use of built-in methods instead of unnecessary polyfills.
		 *
		 * This rules helps to use existing methods instead of using extra polyfills.
		 */
		'unicorn/no-unnecessary-polyfills': 'error',

		/**
		 * Disallow unreadable array destructuring.
		 *
		 * Destructuring is very useful, but it can also make some code harder to read. This rule prevents ignoring
		 * consecutive values when destructuring from an array.
		 */
		'unicorn/no-unreadable-array-destructuring': 'error',

		/**
		 * Disallow unreadable IIFEs.
		 */
		'unicorn/no-unreadable-iife': 'off',

		/**
		 * Disallow unused object properties.
		 *
		 * Unused properties, much like unused variables, are often a result of incomplete refactoring and may
		 * confuse readers.
		 *
		 * This rule is primarily useful when you use objects to group constants or model enumerations. It is much
		 * harder to predict class properties usage, and practically impossible to predict reflective property access.
		 * This rule ignores cases like that.
		 */
		'unicorn/no-unused-properties': 'error',

		/**
		 * Disallow useless fallback when spreading in object literals.
		 *
		 * Spreading falsy values in object literals won't add any unexpected properties, so it's unnecessary to add
		 * an empty object as fallback.
		 */
		'unicorn/no-useless-fallback-in-spread': 'error',

		/**
		 * Disallow useless array length check.
		 *
		 *     Array#some() returns false for an empty array. There is no need to check if the array is not empty.
		 *     Array#every() returns true for an empty array. There is no need to check if the array is empty.
		 *
		 * We only check .length === 0, .length !== 0, and .length > 0. These zero and non-zero length check styles
		 * are allowed in the unicorn/explicit-length-check rule. It is recommended to use them together.
		 */
		'unicorn/no-useless-length-check': 'error',

		/**
		 * Disallow returning/yielding Promise.resolve/reject() in async functions or promise callbacks.
		 *
		 * Wrapping a return value in Promise.resolve in an async function or a Promise#then/catch/finally callback
		 * is unnecessary as all return values in async functions and promise callback functions are already wrapped
		 * in a Promise. Similarly, returning an error wrapped in Promise.reject is equivalent to simply throwing the
		 * error. This is the same for yielding in async generators as well.
		 */
		'unicorn/no-useless-promise-resolve-reject': 'error',

		/**
		 * Disallow unnecessary spread.
		 *
		 *     Using spread syntax in the following cases is unnecessary:
		 *         Spread an array literal as elements of an array literal
		 *         Spread an array literal as arguments of a call or a new call
		 *         Spread an object literal as properties of an object literal
		 *         Use spread syntax to clone an array created inline
		 *
		 *     The following builtins accept an iterable, so it's unnecessary to convert the iterable to an array:
		 *         Map constructor
		 *         WeakMap constructor
		 *         Set constructor
		 *         WeakSet constructor
		 *         TypedArray constructor
		 *         Array.from(…)
		 *         TypedArray.from(…)
		 *         Promise.{all,allSettled,any,race}(…)
		 *         Object.fromEntries(…)
		 *
		 *     for…of loop can iterate over any iterable object not just array, so it's unnecessary to convert the
		 *     iterable to an array.
		 *
		 *     yield* can delegate to another iterable, so it's unnecessary to convert the iterable to an array.
		 */
		'unicorn/no-useless-spread': 'error',

		/**
		 * Disallow useless case in switch statements.
		 *
		 * An empty case before the last default case is useless.
		 */
		'unicorn/no-useless-switch-case': 'error',

		/**
		 * Disallow useless undefined.
		 *
		 * undefined is the default value for new variables, parameters, return statements, etc… so specifying it
		 * doesn't make any difference.
		 *
		 * Where passing undefined as argument is required is due to bad TypeScript types in functions, in which case
		 * you can use checkArguments: false option.
		 *
		 * Using undefined as arrow function body sometimes make the purpose more explicit. You can use the
		 * checkArrowFunctionBody: false option to allow this.
		 */
		'unicorn/no-useless-undefined': 'error',

		/**
		 * Prefer .addEventListener() and .removeEventListener() over on-functions.
		 *
		 * Enforces the use of .addEventListener() and .removeEventListener() over their on-function counterparts.
		 * For example, foo.addEventListener('click', handler); is preferred over foo.onclick = handler; for HTML DOM
		 * Events. There are numerous advantages of using addEventListener. Some of these advantages include
		 * registering unlimited event handlers and optionally having the event handler invoked only once.
		 */
		'unicorn/prefer-add-event-listener': 'error',

		/**
		 * Prefer .find(…) and .findLast(…) over the first or last element from .filter(…).
		 *
		 * Array#find() and Array#findLast() breaks the loop as soon as it finds a match and doesn't create a new array.
		 *
		 * This rule is fixable unless default values are used in declaration or assignment.
		 */
		'unicorn/prefer-array-find': 'error',

		/**
		 * Prefer Array#flat() over legacy techniques to flatten arrays.
		 *
		 * ES2019 introduced a new method Array#flat() that flatten arrays.
		 */
		'unicorn/prefer-array-flat': 'error',

		/**
		 * Prefer .flatMap(…) over .map(…).flat().
		 *
		 * Array#flatMap performs Array#map and Array#flat in one step.
		 */
		'unicorn/prefer-array-flat-map': 'error',

		/**
		 * Prefer Array#{indexOf,lastIndexOf}() over Array#{findIndex,findLastIndex}() when looking for the index of
		 * an item.
		 *
		 * Array#findIndex() and Array#findLastIndex() are intended for more complex needs. If you are just looking for
		 * the index where the given item is present, then the code can be simplified to use Array#indexOf() or
		 * Array#lastIndexOf(). This applies to any search with a literal, a variable, or any expression that doesn't
		 * have any explicit side effects. However, if the expression you are looking for relies on an item related to
		 * the function (its arguments, the function self, etc.), the case is still valid.
		 */
		'unicorn/prefer-array-index-of': 'error',

		/**
		 * Prefer .some(…) over .filter(…).length check and .{find,findLast,findIndex,findLastIndex}(…).
		 *
		 * Prefer using Array#some over:
		 *
		 *     Non-zero length check on the result of Array#filter().
		 *
		 * We only check .filter().length > 0 and .filter().length !== 0. These two non-zero length check styles are
		 * allowed in unicorn/explicit-length-check rule. It is recommended to use them together.
		 *
		 *     Using Array#find() or Array#findLast() to ensure at least one element in the array passes a given check.
		 *
		 *     Comparing the result of Array#find() or Array#findLast() with undefined.
		 *
		 *     Using Array#findIndex() or Array#findLastIndex() to ensure at least one element in the array passes a
		 *     given check.
		 *
		 * This rule is fixable for .filter(…).length checks and .{findIndex,findLastIndex}(…).
		 *
		 * This rule provides a suggestion for .{find,findLast}(…).
		 */
		'unicorn/prefer-array-some': 'error',

		/**
		 * Prefer .at() method for index access and String#charAt().
		 *
		 * Prefer Array#at(), String#at(), and {TypedArray,NodeList,CSSRuleList,…}#at() for index access and
		 * String#charAt().
		 */
		'unicorn/prefer-at': 'error',

		/**
		 * Prefer Blob#arrayBuffer() over FileReader#readAsArrayBuffer(…) and Blob#text() over FileReader#readAsText(…).
		 *
		 * FileReader predates promises, and the newer Blob#arrayBuffer() and Blob#text() methods are much cleaner and
		 * easier to use.
		 */
		'unicorn/prefer-blob-reading-methods': 'error',

		/**
		 * Prefer String#codePointAt(…) over String#charCodeAt(…) and String.fromCodePoint(…) over
		 * String.fromCharCode(…).
		 *
		 * Unicode is better supported in String#codePointAt() and String.fromCodePoint().
		 *
		 *     Difference between String.fromCodePoint() and String.fromCharCode()
		 */
		'unicorn/prefer-code-point': 'error',

		/**
		 * Prefer Date.now() to get the number of milliseconds since the Unix Epoch.
		 */
		'unicorn/prefer-date-now': 'error',

		/**
		 * Prefer default parameters over reassignment.
		 *
		 * Instead of reassigning a function parameter, default parameters should be used. The foo = foo || 123
		 * statement evaluates to 123 when foo is falsy, possibly leading to confusing behavior, whereas default
		 * parameters only apply when passed an undefined value. This rule only reports reassignments to literal values.
		 *
		 * You should disable this rule if you want your functions to deal with null and other falsy values the same
		 * way as undefined. Default parameters are exclusively applied when undefined is received.. However, we
		 * recommend moving away from null.
		 */
		'unicorn/prefer-default-parameters': 'error',

		/**
		 * Prefer Node#append() over Node#appendChild().
		 *
		 * Enforces the use of, for example, document.body.append(div); over document.body.appendChild(div);
		 * for DOM nodes. There are some advantages of using Node#append(), like the ability to append multiple nodes
		 * and to append both DOMString and DOM node objects.
		 */
		'unicorn/prefer-dom-node-append': 'error',

		/**
		 * Prefer using .dataset on DOM elements over calling attribute methods.
		 *
		 * Use .dataset on DOM elements over getAttribute(…), .setAttribute(…), .removeAttribute(…) and .hasAttribute(…).
		 */
		'unicorn/prefer-dom-node-dataset': 'error',

		/**
		 * Prefer childNode.remove() over parentNode.removeChild(childNode).
		 *
		 * Enforces the use of, for example, child.remove(); over child.parentNode.removeChild(child);.
		 * The DOM function Node#remove() is preferred over the indirect removal of an object with Node#removeChild().
		 */
		'unicorn/prefer-dom-node-remove': 'error',

		/**
		 * Prefer .textContent over .innerText.
		 *
		 * Enforces the use of .textContent over .innerText for DOM nodes.
		 *
		 * There are some advantages of using .textContent, like performance and more predictable behavior when updating
		 * it.
		 *
		 * Note that there are differences between them.
		 */
		'unicorn/prefer-dom-node-text-content': 'error',

		/**
		 * Prefer EventTarget over EventEmitter.
		 *
		 * While EventEmitter is only available in Node.js, EventTarget is also available in Deno and browsers.
		 *
		 * This rule reduces the bundle size and makes your code more cross-platform friendly.
		 */
		'unicorn/prefer-event-target': 'error',

		/**
		 * Prefer export…from when re-exporting.
		 *
		 * When re-exporting from a module, it's unnecessary to import and then export. It can be done in a single
		 * export…from declaration.
		 */
		'unicorn/prefer-export-from': 'error',

		/**
		 * Prefer globalThis over window, self, and global.
		 *
		 * This rule will enforce the use of globalThis over window, self, and global.
		 *
		 * However, there are several exceptions that remain permitted:
		 *
		 *     Certain window/WebWorker-specific APIs, such as window.innerHeight and self.postMessage
		 *     Window-specific events, such as window.addEventListener('resize')
		 */
		'unicorn/prefer-global-this': 'error',

		/**
		 * Prefer .includes() over .indexOf(), .lastIndexOf(), and Array#some() when checking for existence or non-existence.
		 */
		'unicorn/prefer-includes': 'error',

		/**
		 * Prefer reading a JSON file as a buffer.
		 *
		 * When reading and parsing a JSON file, it's unnecessary to read it as a string, because JSON.parse() can also
		 * parse Buffer.
		 *
		 * Passing in a buffer may not be performant and is not compatible with TypeScript.
		 */
		'unicorn/prefer-json-parse-buffer': 'error',

		/**
		 * Prefer KeyboardEvent#key over KeyboardEvent#keyCode.
		 *
		 * Enforces the use of KeyboardEvent#key over KeyboardEvent#keyCode which is deprecated.
		 * The .key property is also more semantic and readable.
		 */
		'unicorn/prefer-keyboard-event-key': 'error',

		/**
		 * Prefer using a logical operator over a ternary.
		 *
		 * Ideally, most reported cases have an equivalent Logical OR(||) expression. The rule intentionally provides
		 * suggestions instead of auto-fixes, because in many cases, the nullish coalescing operator (??) should be
		 * preferred.
		 */
		'unicorn/prefer-logical-operator-over-ternary': 'error',

		/**
		 * Prefer Math.min() and Math.max() over ternaries for simple comparisons.
		 *
		 * This rule enforces the use of Math.min() and Math.max() functions instead of ternary expressions when
		 * performing simple comparisons, such as selecting the minimum or maximum value between two or more options.
		 *
		 * By replacing ternary expressions with these functions, the code becomes more concise, easier to understand,
		 * and less prone to errors. It also enhances consistency across the codebase, ensuring that the same approach
		 * is used for similar operations, ultimately improving the overall readability and maintainability of the code.
		 */
		'unicorn/prefer-math-min-max': 'error',

		/**
		 * Enforce the use of Math.trunc instead of bitwise operators.
		 */
		'unicorn/prefer-math-trunc': 'error',

		/**
		 * Prefer .before() over .insertBefore(), .replaceWith() over .replaceChild(), prefer one of .before(), .after(), .append() or .prepend() over insertAdjacentText() and insertAdjacentElement().
		 */
		'unicorn/prefer-modern-dom-apis': 'error',

		/**
		 * Prefer modern Math APIs over legacy patterns.
		 */
		'unicorn/prefer-modern-math-apis': 'error',

		/**
		 * Prefer JavaScript modules (ESM) over CommonJS.
		 */
		'unicorn/prefer-module': 'off',

		/**
		 * Prefer using String, Number, BigInt, Boolean, and Symbol directly.
		 */
		'unicorn/prefer-native-coercion-functions': 'error',

		/**
		 * Prefer negative index over .length - index when possible.
		 */
		'unicorn/prefer-negative-index': 'error',

		/**
		 * Prefer Number static properties over global ones.
		 *
		 * ECMAScript 2015 moved globals onto the Number constructor for consistency and to slightly improve them.
		 * This rule enforces their usage to limit the usage of globals:
		 */
		'unicorn/prefer-number-properties': 'error',

		/**
		 * Prefer borrowing methods from the prototype instead of the instance.
		 *
		 * When “borrowing” a method from Array or Object, it's clearer to get it from the prototype than from an
		 * instance.
		 */
		'unicorn/prefer-prototype-methods': 'error',

		/**
		 * Prefer Reflect.apply() over Function#apply().
		 *
		 * Reflect.apply() is arguably less verbose and easier to understand. In addition, when you accept arbitrary
		 * methods, it's not safe to assume .apply() exists or is not overridden.
		 */
		'unicorn/prefer-reflect-apply': 'error',

		/**
		 * Prefer RegExp#test() over String#match() and RegExp#exec().
		 *
		 * When you want to know whether a pattern is found in a string, use RegExp#test() instead of String#match()
		 * and RegExp#exec(), as it exclusively returns a boolean and therefore is more efficient.
		 */
		'unicorn/prefer-regexp-test': 'error',

		/**
		 * Prefer Set#has() over Array#includes() when checking for existence or non-existence.
		 */
		'unicorn/prefer-set-has': 'off',

		/**
		 * Prefer String#replaceAll() over regex searches with the global flag.
		 *
		 * The String#replaceAll() method is both faster and safer as you don't have to use a regex and remember to
		 * escape it if the string is not a literal. And when used with a regex, it makes the intent clearer.
		 */
		'unicorn/prefer-string-replace-all': 'error',

		/**
		 * Prefer String#slice() over String#substr() and String#substring().
		 *
		 * String#substr() and String#substring() are the two lesser known legacy ways to slice a string. It's better
		 * to use String#slice() as it's a more popular option with clearer behavior that has a consistent Array
		 * counterpart.
		 */
		'unicorn/prefer-string-slice': 'error',

		/**
		 * Prefer String#startsWith() & String#endsWith() over RegExp#test().
		 *c
		 * Prefer String#startsWith() and String#endsWith() over using a regex with /^foo/ or /foo$/.
		 *
		 * This rule is fixable, unless the matching object is known not a string.
		 */
		'unicorn/prefer-string-starts-ends-with': 'error',

		/**
		 * Prefer String#trimStart() / String#trimEnd() over String#trimLeft() / String#trimRight().
		 *
		 * String#trimLeft() and String#trimRight() are aliases of String#trimStart() and String#trimEnd().
		 * This is to ensure consistency and use direction-independent wording.
		 */
		'unicorn/prefer-string-trim-start-end': 'error',

		/**
		 * Prefer switch to multiple else-if.
		 *
		 * A switch statement is easier to read than multiple if statements with simple equality comparisons.
		 */
		'unicorn/prefer-switch': 'error',

		/**
		 * Prefer ternary expressions over simple if-else statements.
		 *
		 * This rule enforces the use of ternary expressions over 'simple' if-else statements, where 'simple' means
		 * the consequent and alternate are each one line and have the same basic type and form.
		 *
		 * Using an if-else statement typically results in more lines of code than a single-line ternary expression,
		 * which leads to an unnecessarily larger codebase that is more difficult to maintain.
		 *
		 * Additionally, using an if-else statement can result in defining variables using let or var solely to be
		 * reassigned within the blocks. This leads to variables being unnecessarily mutable and prevents prefer-const
		 * from flagging the variable.
		 */
		'unicorn/prefer-ternary': 'error',

		/**
		 * Prefer .querySelector() over .getElementById(), .querySelectorAll() over .getElementsByClassName() and
		 * .getElementsByTagName() and .getElementsByName().
		 *
		 * It's better to use the same method to query DOM elements. This helps keep consistency and it lends itself
		 * to future improvements (e.g. more specific selectors).
		 */
		'unicorn/prefer-query-selector': 'error',

		/**
		 * Prefer using Set#size instead of Array#length.
		 *
		 * Prefer using Set#size directly instead of first converting it to an array and then using its .length
		 * property.
		 */
		'unicorn/prefer-set-size': 'error',

		/**
		 * Prefer using structuredClone to create a deep clone.
		 *
		 * structuredClone is the modern way to create a deep clone of a value.
		 */
		'unicorn/prefer-structured-clone': 'error',

		/**
		 * Prefer top-level await over top-level promises and async function calls.
		 */
		'unicorn/prefer-top-level-await': 'off',

		/**
		 * Enforce throwing TypeError in type checking conditions.
		 */
		'unicorn/prefer-type-error': 'off',

		/**
		 * Prevent abbreviations.
		 */
		'unicorn/prevent-abbreviations': 'off',

		/**
		 * Enforce using the separator argument with Array#join().
		 *
		 * It's better to make it clear what the separator is when calling Array#join(), instead of relying on the
		 * default comma (',') separator.
		 */
		'unicorn/require-array-join-separator': 'error',

		/**
		 * Enforce using the digits argument with Number#toFixed().
		 *
		 * It's better to make it clear what the value of the digits argument is when calling Number#toFixed(),
		 * instead of relying on the default value of 0.
		 */
		'unicorn/require-number-to-fixed-digits-argument': 'error',

		/**
		 * Enforce using the targetOrigin argument with window.postMessage().
		 */
		'unicorn/require-post-message-target-origin': 'off',

		/**
		 * Enforce better string content.
		 */
		'unicorn/string-content': 'off',

		/**
		 * Fix whitespace-insensitive template indentation.
		 */
		'unicorn/template-indent': 'off',

		/**
		 * Require new when creating an error.
		 *
		 * While it's possible to create a new error without using the new keyword, it's better to be explicit.
		 */
		'unicorn/throw-new-error': 'off',
	},
};

export default config;
