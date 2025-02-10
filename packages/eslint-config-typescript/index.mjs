import base from '@stimulcross/eslint-config-base';
import ts from '@typescript-eslint/eslint-plugin';
import parser from '@typescript-eslint/parser';

/** @type {import("eslint").Linter.Config} */
const config = {
	plugins: {
		...base.plugins,
		'@typescript-eslint': ts,
	},
	languageOptions: {
		...base.languageOptions,

		parser,
		parserOptions: {
			projectService: true,
		},
	},
	settings: {
		'import/resolver': {
			typescript: {},
		},
	},
	rules: {
		...base.rules,

		'consistent-return': 'off',

		/**
		 * Disable the `no-undef` rule because:
		 * - It generates false positives with TypeScript interface declarations.
		 * - TypeScript itself emits errors during compilation if it encounters undefined variables.
		 */
		'no-undef': 'off',

		/**
		 * Require that member overloads are consecutive.
		 *
		 * This rule groups overloaded members together, improving code readability.
		 */
		'@typescript-eslint/adjacent-overload-signatures': 'warn',

		/**
		 * Enforce a consistent way to define array types.
		 *
		 * This rule standardizes the usage of array types across the codebase.
		 */
		'@typescript-eslint/array-type': ['warn', { default: 'array-simple', readonly: 'array-simple' }],

		/**
		 * Disallow `await` on non-Promise-like values.
		 *
		 * Awaiting a non-Promise value is valid JavaScript, but is often a mistake.
		 * It typically arises when a function returning a Promise isn't invoked correctly.
		 */
		'@typescript-eslint/await-thenable': 'warn',

		/**
		 * Ban specific `// @ts-<directive>` comments to avoid overuse of TypeScript suppression features.
		 *
		 * This rule ensures directive comments follow specific guidelines to maintain TypeScript's effectiveness.
		 */
		'@typescript-eslint/ban-ts-comment': [
			'warn',
			{
				'ts-expect-error': 'allow-with-description',
				'ts-ignore': 'allow-with-description',
				'ts-nocheck': false,
				'ts-check': true,
			},
		],

		/**
		 * Ban the usage of `// tslint:` comments.
		 *
		 * These comments are irrelevant when using ESLint with TypeScript.
		 */
		'@typescript-eslint/ban-tslint-comment': 'warn',

		/**
		 * Ensure class literal properties are exposed in a consistent style.
		 *
		 * This rule enforces using fields for class literal properties.
		 */
		'@typescript-eslint/class-literal-property-style': ['warn', 'fields'],

		/**
		 * Enforce consistent use of type assertions.
		 *
		 * This rule enforces the `as` syntax for type assertions, while disallowing certain types of object literal type assertions.
		 */
		'@typescript-eslint/consistent-type-assertions': [
			'warn',
			{
				assertionStyle: 'as',
				objectLiteralTypeAssertions: 'never',
			},
		],

		/**
		 * Enforce consistent usage of `interface` or `type` for defining types.
		 *
		 * This rule requires all type definitions to use `interface`.
		 */
		'@typescript-eslint/consistent-type-definitions': ['warn', 'interface'],

		'@typescript-eslint/consistent-type-exports': ['error', { fixMixedExportsWithInlineTypeSpecifier: true }],

		/**
		 * Enforce consistent usage of type imports.
		 *
		 * This rule prefers type imports and ensures consistency in how types are imported and referenced within the codebase.
		 */
		'@typescript-eslint/consistent-type-imports': [
			'warn',
			{
				prefer: 'type-imports',
				fixStyle: 'inline-type-imports',
			},
		],

		/**
		 * Enforce explicit accessibility modifiers on class properties and methods.
		 *
		 * Makes code more readable and explicit about the scope of class members.
		 */
		'@typescript-eslint/explicit-member-accessibility': [
			'warn',
			{
				accessibility: 'explicit',
				overrides: {
					constructors: 'no-public',
				},
			},
		],

		/**
		 * Require explicit return and argument types for exported functions and classes.
		 *
		 * Explicit return and argument types ensure clarity about the input and output
		 * semantics of module-level APIs.
		 */
		'@typescript-eslint/explicit-module-boundary-types': [
			'warn',
			{
				allowArgumentsExplicitlyTypedAsAny: true,
				allowHigherOrderFunctions: true,
				allowTypedFunctionExpressions: true,
			},
		],

		/**
		 * Enforce a consistent order for class members.
		 *
		 * This rule makes classes, type literals, and interfaces easier to read and navigate
		 * by grouping members in a predefined order.
		 */
		'@typescript-eslint/member-ordering': [
			'warn',
			{
				default: [
					'static-field',
					'field',
					'constructor',
					'public-static-get',
					'public-static-method',
					'public-get',
					'method',
					'protected-get',
					'private-get',
					'protected-method',
					'private-method',
				],
			},
		],

		/**
		 * Disallow using the `Array` constructor to create arrays.
		 *
		 * Prefer array literal notation (`[]`) over the `Array` constructor for clarity and to avoid issues like the single-argument pitfall.
		 */
		'@typescript-eslint/no-array-constructor': base.rules['no-array-constructor'],
		'no-array-constructor': 'off',

		/**
		 * Require meaningful `.toString()` implementations for objects.
		 *
		 * Objects that do not provide useful information in their `.toString()` output
		 * should define a more descriptive method to avoid `[object Object]`.
		 */
		'@typescript-eslint/no-base-to-string': 'warn',

		/**
		 * Disallow duplicate class member definitions.
		 *
		 * This rule prevents repeated member names that override one another.
		 */
		'@typescript-eslint/no-dupe-class-members': base.rules['no-dupe-class-members'],
		'no-dupe-class-members': 'off',

		/**
		 * Disallow duplicate `enum` member values.
		 *
		 * Enum members initialized to the same value are flagged for clarity and maintainability.
		 */
		'@typescript-eslint/no-duplicate-enum-values': 'error',

		/**
		 * Disallow duplicate constituents in unions and intersections.
		 *
		 * Ensures clarity and prevents unnecessarily verbose or redundant types.
		 */
		'@typescript-eslint/no-duplicate-type-constituents': 'warn',

		/**
		 * Disallow computed key expressions for the `delete` operator.
		 *
		 * This prevents the use of the `delete` keyword on dynamic key expressions, which could lead to unintentional operations.
		 */
		'@typescript-eslint/no-dynamic-delete': 'error',

		/**
		 * Disallow empty interface declarations.
		 *
		 * Empty interfaces are redundant because:
		 * - Without a supertype, the interface represents an empty object (`{}`).
		 * - With a supertype, it's equivalent to the supertype itself.
		 */
		'@typescript-eslint/no-empty-interface': 'warn',

		/**
		 * Disallow the `any` type in explicit type declarations.
		 *
		 * This rule prevents potential runtime errors and encourages more precise type usage.
		 */
		'@typescript-eslint/no-explicit-any': 'error',

		/**
		 * Disallow using classes as namespaces.
		 *
		 * This rule prevents classes from being used solely as a collection of static methods or properties, a pattern better implemented as namespaces.
		 */
		'@typescript-eslint/no-extraneous-class': [
			'warn',
			{ allowConstructorOnly: true, allowWithDecorator: true, allowStaticOnly: true },
		],

		/**
		 * Disallow unresolved promises or unhandled rejections.
		 *
		 * Ensures that promises are handled using `.then` or `await` to avoid unintentional
		 * errors caused by unhandled rejections.
		 */
		'@typescript-eslint/no-floating-promises': [
			'error',
			{
				ignoreVoid: true,
			},
		],

		/**
		 * Disallow iterating over arrays with `for-in` loops.
		 *
		 * Using `for-in` with arrays iterates over indices as strings and may skip empty indices,
		 * which can lead to unintended behavior.
		 */
		'@typescript-eslint/no-for-in-array': 'error',

		/**
		 * Disallow `eval()`-like methods.
		 *
		 * Using `eval()`-like constructs such as `new Function()` or `setTimeout("string")` poses security
		 * and performance risks.
		 */
		'@typescript-eslint/no-implied-eval': base.rules['no-implied-eval'],
		'no-implied-eval': 'off',

		/**
		 * Disallow explicit type declarations for inferred primitive values.
		 *
		 * Types such as `number`, `string`, or `boolean` should not be explicitly repeated in declarations
		 * when the type is already predictable from the value.
		 */
		'@typescript-eslint/no-inferrable-types': ['error', { ignoreProperties: true, ignoreParameters: true }],

		/**
		 * Disallow the use of `this` outside of classes or class-like objects.
		 *
		 * Ensures `this` is only used where appropriate to avoid unexpected behavior.
		 */
		'@typescript-eslint/no-invalid-this': 'error',
		'no-invalid-this': 'off',

		/**
		 * Disallow usage of `void` type except in return types or generics.
		 *
		 * Prevents misuse of the `void` type where it does not provide additional meaning.
		 */
		'@typescript-eslint/no-invalid-void-type': 'warn',

		/**
		 * Disallow creating functions inside loops when they reference variables from the outer scope.
		 *
		 * Ensures safer and clearer code by avoiding functions with unsafe references.
		 */
		'@typescript-eslint/no-loop-func': base.rules['no-loop-func'],
		'no-loop-func': 'off',

		/**
		 * Disallow literals that lose precision due to floating-point errors.
		 *
		 * Ensures that numbers with invalid precision, like `0.1 + 0.2 === 0.30000000000000004`,
		 * are correctly represented or avoided.
		 */
		'@typescript-eslint/no-loss-of-precision': base.rules['no-loss-of-precision'],
		'no-loss-of-precision': 'off',

		/**
		 * Do not declare constructors in interfaces or `new` operations in classes.
		 *
		 * Prevents declaring invalid definitions within interfaces and classes.
		 */
		'@typescript-eslint/no-misused-new': 'error',

		/**
		 * Avoid misuse of promises in unintended scenarios.
		 *
		 * This rule ensures that promises are used safely, specifically preventing them from
		 * being passed as non-promises or invoked without awaiting.
		 */
		'@typescript-eslint/no-misused-promises': 'error',

		/**
		 * Disallow enums with mixed string and numeric members.
		 *
		 * Enums should consistently use one type of values to avoid ambiguity and maintain readability.
		 */
		'@typescript-eslint/no-mixed-enums': 'warn',

		/**
		 * Disallow the use of custom modules and namespaces.
		 *
		 * TypeScript's modules and namespaces are no longer common practice;
		 * ES6 module syntax (import/export) is preferred.
		 */
		'@typescript-eslint/no-namespace': 'error',

		/**
		 * Disallow the nullish coalescing operator (`??`) with non-null assertions.
		 *
		 * Using `!!` combined with `??` is generally redundant and introduces unnecessary complexity.
		 */
		'@typescript-eslint/no-non-null-asserted-nullish-coalescing': 'warn',

		/**
		 * Disallow using non-null assertions after optional chaining.
		 *
		 * Optional chaining (`?.`) returns `undefined` if nullish;
		 * asserting that value is non-null is invalid and unsafe.
		 */
		'@typescript-eslint/no-non-null-asserted-optional-chain': 'error',

		/**
		 * Disallow using the non-null assertion operator (`!`).
		 *
		 * Encourages safer null handling and leverages TypeScript's strict null checks.
		 */
		'@typescript-eslint/no-non-null-assertion': 'warn',

		/**
		 * Prevent using parameter properties in class constructors.
		 *
		 * Forces explicit declaration of all class properties for clarity and consistency.
		 */
		'@typescript-eslint/parameter-properties': ['warn', { prefer: 'class-property' }],

		/**
		 * Disallow duplicate variable declarations.
		 *
		 * This includes multiple declarations in different scopes unless they involve declaration merging.
		 */
		'@typescript-eslint/no-redeclare': ['error', { ignoreDeclarationMerge: true }],
		'no-redeclare': 'off',

		/**
		 * Disallow redundant type declarations in intersection or union types.
		 *
		 * Helps make types more concise and maintainable.
		 */
		'@typescript-eslint/no-redundant-type-constituents': 'warn',

		/**
		 * Enforce avoiding `require` statements by recommending ES6 imports instead.
		 *
		 * Improves consistency and modernizes the codebase using ES module syntax.
		 */
		'@typescript-eslint/no-require-imports': 'warn',

		/**
		 * Disallow variable shadowing.
		 *
		 * Prevents confusion caused by variables declared with the same name in an inner scope that may override outer variables.
		 */
		'@typescript-eslint/no-shadow': base.rules['no-shadow'],
		'no-shadow': 'off',

		/**
		 * Disallow aliasing `this`.
		 *
		 * Instead of assigning `this` to variables like `const self = this`, use arrow functions to maintain lexical scope.
		 */
		'@typescript-eslint/no-this-alias': ['error', { allowDestructuring: true }],

		/**
		 * Restrict what can be thrown as exceptions.
		 *
		 * Encourages throwing error objects exclusively, ensuring consistent handling and stack trace capability.
		 */
		'@typescript-eslint/only-throw-error': [
			base.rules['no-throw-literal'],
			{ allowThrowingAny: false, allowThrowingUnknown: false },
		],
		'no-throw-literal': 'off',

		/**
		 * Prevent unnecessary condition checks in expressions.
		 *
		 * Flags conditionals that always evaluate as truthy or falsy, helping to avoid redundant checks.
		 */
		'@typescript-eslint/no-unnecessary-condition': 'warn',

		/**
		 * Warn when namespace qualifiers are unnecessary.
		 *
		 * Ensures that unnecessary namespace qualifiers on values or types are eliminated to simplify code.
		 */
		'@typescript-eslint/no-unnecessary-qualifier': 'warn',

		/**
		 * Disallow unnecessary type assertions.
		 *
		 * Prevents redundant type assertions that don't change or clarify the type of an expression.
		 */
		'@typescript-eslint/no-unnecessary-type-assertion': 'warn',

		/**
		 * Disallow unnecessary generic constraints in type declarations.
		 *
		 * Keeps generic constraints concise and readable by eliminating irrelevant or implied constraints.
		 */
		'@typescript-eslint/no-unnecessary-type-constraint': 'warn',

		/**
		 * Disallow unsafe assignments to variables and properties with the `any` type.
		 *
		 * Encourages stricter type safety to prevent runtime issues from type mismatches.
		 */
		'@typescript-eslint/no-unsafe-assignment': 'warn',

		/**
		 * Disallow unsafe calls on variables of type `any`.
		 *
		 * Functions or methods should not be invoked on `any` to ensure type-safe behavior.
		 */
		'@typescript-eslint/no-unsafe-call': 'warn',

		/**
		 * Disallow unsafe member access on variables of type `any`.
		 *
		 * Ensures only type-safe member accesses are allowed, avoiding potential runtime errors.
		 */
		'@typescript-eslint/no-unsafe-member-access': 'warn',

		/**
		 * Disallow returning `any` from functions.
		 *
		 * Ensures return values are type-safe and predictable.
		 */
		'@typescript-eslint/no-unsafe-return': 'warn',

		/**
		 * Disallow the use of triple-slash reference directives (/// <reference path="..."/>.
		 *
		 * Triple-slash comments are deprecated in favor of ES module imports.
		 */
		'@typescript-eslint/triple-slash-reference': ['error', { path: 'never', types: 'never', lib: 'never' }],

		/**
		 * Disallow unused expressions.
		 * This rule aims to eliminate unused expressions which have no effect on the state of the program.
		 */
		'@typescript-eslint/no-unused-expressions': base.rules['no-unused-expressions'],
		'no-unused-expressions': 'off',

		/**
		 * Disallow unused variables.
		 *
		 * Helps maintain clarity by ensuring only actively used variables are defined.
		 */
		'@typescript-eslint/no-unused-vars': base.rules['no-unused-vars'],
		'no-unused-vars': 'off',

		/**
		 * Prevents use of variables before they are defined.
		 *
		 * Ensures all variables are explicitly declared before being accessed.
		 */
		'@typescript-eslint/no-use-before-define': ['error', { functions: false, classes: false, typedefs: false }],
		'no-use-before-define': 'off',

		/**
		 * Enforce a consistent use of functions and ES6 imports over `require` syntax.
		 *
		 * Improves the codebase consistency by limiting `require` usage.
		 */
		'@typescript-eslint/no-var-requires': 'error',

		/**
		 * Disallow unnecessary constructors.
		 *
		 * Flags class constructors that can be removed without altering the behavior of the class.
		 */
		'@typescript-eslint/no-useless-constructor': base.rules['no-useless-constructor'],
		'no-useless-constructor': 'off',

		/**
		 * Prefer usage of `as const` when specifying literal types.
		 *
		 * Promotes the use of stricter typing within codebases.
		 */
		'@typescript-eslint/prefer-as-const': 'warn',

		/**
		 * Enforce use of function types over interface call signatures.
		 *
		 * This rule suggests declaring function types explicitly for clarity and type safety.
		 */
		'@typescript-eslint/prefer-function-type': 'error',

		/**
		 * Require all enum members to be literal values to avoid shadowing.
		 *
		 * Enum members should have explicit values for clarity.
		 */
		'@typescript-eslint/prefer-literal-enum-member': 'warn',

		/**
		 * Enforce nullish coalescing (`??`) when applicable for merging null and undefined.
		 *
		 * Promotes safer handling of nullable values over logical chaining (`||`).
		 */
		'@typescript-eslint/prefer-nullish-coalescing': ['error', { ignorePrimitives: true }],

		/**
		 * Enforces `this` references in returned types when applicable.
		 *
		 * Ensures `this` is appropriately used in return types instead of generic or non-specific types.
		 */
		'@typescript-eslint/prefer-return-this-type': 'warn',

		/**
		 * Enforce a comparison function for `Array.prototype.sort`.
		 *
		 * Prevents sorting arrays with default behavior, which may return incorrect results based on
		 * string coercion rather than expected numerical or custom logic.
		 */
		'@typescript-eslint/require-array-sort-compare': 'error',

		/**
		 * Enforce awaiting of returned promises for better traceability and error handling.
		 *
		 * Improves stack trace readability and ensures consistent results.
		 */
		'@typescript-eslint/return-await': ['warn', 'always'],
		'require-await': 'off',

		/**
		 * Enforces exhaustive checks in switch-case statements for union types.
		 *
		 * Ensures all possible cases are handled or explicitly defaulted, reducing potential runtime errors.
		 */
		'@typescript-eslint/switch-exhaustiveness-check': [
			'error',
			{
				allowDefaultCaseForExhaustiveSwitch: true,
				considerDefaultExhaustiveForUnions: true,
				requireDefaultForNonUnion: true,
			},
		],

		/**
		 * Disallow bound methods without their intended scope.
		 *
		 * Upholds expected scoping for class member functions, preventing errors from using unbound methods.
		 */
		'@typescript-eslint/unbound-method': ['error', { ignoreStatic: true }],

		/**
		 * Disable the requirement for function parameters to be typed as `readonly`.
		 *
		 * While marking every parameter as `readonly` can improve immutability and safety,
		 * it was deemed too cumbersome for general usage in this codebase.
		 */
		'@typescript-eslint/prefer-readonly-parameter-types': 'off',

		/**
		 * Disable the requirement for expressions of type void to only appear in statement positions.
		 *
		 * This rule is disabled because it conflicts with `no-meaningless-void-operator`,
		 * creating unnecessary constraints in the codebase.
		 */
		'@typescript-eslint/no-confusing-void-expression': 'off',

		/**
		 * Enforce explicit return types on functions and class methods, but with lenient configurations.
		 *
		 * While the team opted not to fully enforce this rule in all cases due to its verbosity for a backend
		 * application, the rule is set to `warn` to encourage explicit return types in key scenarios.
		 */
		'@typescript-eslint/explicit-function-return-type': [
			'warn',
			{
				allowExpressions: true,
				allowHigherOrderFunctions: true,
				allowConciseArrowFunctionExpressionsStartingWithVoid: true,
			},
		],

		'@typescript-eslint/no-confusing-non-null-assertion': 'error',

		'@typescript-eslint/no-empty-function': ['error', { allow: ['constructors'] }],
		'no-empty-function': 'off',

		'@typescript-eslint/prefer-readonly': 'error',
	},
};

export default config;
