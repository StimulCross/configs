/**
 * strvcom/eslint-config-typescript
 *
 * @author      Robert Rossmann <rr.rossmann@me.com>
 * @copyright   2019 STRV
 * @license     http://choosealicense.com/licenses/bsd-3-clause  BSD-3-Clause License
 */

'use strict';

const base = require('@stimulcross/eslint-config-base');
const globs = require('@stimulcross/eslint-config-base/globs');

module.exports = {
	extends: require.resolve('@stimulcross/eslint-config-base'),

	settings: {
		// Correctly recognise .ts and .d.ts files when checking import paths against the filesystem
		'import/resolver': {
			node: {
				extensions: [
					'.ts',
					'.tsx',
					'.d.ts',
					'.cts',
					'.mts',
					'.d.cts',
					'.d.mts',
					...base.settings['import/resolver'].node.extensions
				]
			},
			// Correctly recognise paths defined in tsconfig.json for package aliases
			typescript: {}
		}
	},

	parser: '@typescript-eslint/parser',

	parserOptions: {
		ecmaVersion: 2018,
		sourceType: 'module'
	},

	plugins: ['@typescript-eslint'],

	env: {
		es6: true
	},

	rules: {
		// TS code is mostly self-documented and having JSDoc directives for everything is redundant
		// when you can easily infer return values and argument types from the code itself.
		'valid-jsdoc': 'off',

		// Disabled because it generates false positives with interface declarations and TypeScript
		// blows up anyway during compilation when it encouters an undefined variable.
		'no-undef': 'off',

		// Require that member overloads be consecutive
		// Grouping overloaded members together can improve readability of the code.
		'@typescript-eslint/adjacent-overload-signatures': 'error',

		// Requires using either T[] or Array<T> for arrays
		// This rule aims to standardise usage of array types within your codebase.
		'@typescript-eslint/array-type': [
			'error',
			{
				default: 'array-simple',
				readonly: 'array-simple'
			}
		],

		// Disallows awaiting a value that is not a Promise
		// This rule disallows awaiting a value that is not a "Thenable" (an object which has then
		// method, such as a Promise). While it is valid JavaScript to await a non-Promise-like value
		// (it will resolve immediately), this pattern is often a programmer error, such as forgetting
		// to add parenthesis to call a function that returns a Promise.
		'@typescript-eslint/await-thenable': 'warn',

		// Ban `// @ts-<directive>` comments from being used
		// TypeScript provides several directive comments that can be used to alter how it processes
		// files. Using these to suppress TypeScript Compiler Errors reduces the effectiveness of
		// TypeScript overall.
		'@typescript-eslint/ban-ts-comment': [
			'error',
			{
				'ts-expect-error': 'allow-with-description',
				'ts-ignore': 'allow-with-description',
				'ts-nocheck': false,
				'ts-check': true
			}
		],

		// Ban // tslint:<rule-flag> comments from being used
		'@typescript-eslint/ban-tslint-comment': 'warn',

		// Ensure that literals on classes are exposed in a consistent style
		'@typescript-eslint/class-literal-property-style': ['error', 'fields'],

		// Enforce that literals on classes are exposed in a consistent style.
		'@typescript-eslint/consistent-indexed-object-style': ['error', 'record'],

		// Enforce consistent usage of type assertions
		'@typescript-eslint/consistent-type-assertions': [
			'error',
			{
				assertionStyle: 'as',
				objectLiteralTypeAssertions: 'never'
			}
		],

		// Consistent with type definition either interface or type
		'@typescript-eslint/consistent-type-definitions': ['error', 'interface'],

		// Enforce consistent usage of type imports
		'@typescript-eslint/consistent-type-imports': [
			'error',
			{
				prefer: 'type-imports',
				fixStyle: 'inline-type-imports',
				disallowTypeAnnotations: true
			}
		],

		// Require explicit return types on functions and class methods
		// Explicit types for function return values makes it clear to any calling code what type is
		// returned. This ensures that the return value is assigned to a variable of the correct type;
		// or in the case where there is no return value, that the calling code doesn't try to use the
		// undefined value when it shouldn't.
		'@typescript-eslint/explicit-function-return-type': [
			'error',
			{
				allowExpressions: true,
				allowHigherOrderFunctions: true,
				// eslint-disable-next-line id-length
				allowConciseArrowFunctionExpressionsStartingWithVoid: true
			}
		],

		// Require explicit accessibility modifiers on class properties and methods
		// This rule aims to make code more readable and explicit about who can use which properties.
		'@typescript-eslint/explicit-member-accessibility': [
			'error',
			{
				accessibility: 'no-public',
				overrides: {
					parameterProperties: 'explicit'
				}
			}
		],

		// Require explicit return and argument types on exported functions' and classes' public class
		// methods
		// Explicit types for function return values and arguments makes it clear to any calling code
		// what is the module boundary's input and output.
		'@typescript-eslint/explicit-module-boundary-types': [
			'error',
			{
				allowArgumentsExplicitlyTypedAsAny: true,
				allowHigherOrderFunctions: true,
				allowTypedFunctionExpressions: true
			}
		],

		// Require or disallow initialization in variable declarations.
		'init-declarations': 'off',
		'@typescript-eslint/init-declarations': ['off'],

		// Require a consistent member declaration order
		// A consistent ordering of fields, methods and constructors can make interfaces, type literals,
		// classes and class expressions easier to read, navigate and edit.
		'@typescript-eslint/member-ordering': [
			'error',
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
					'private-method'
				]
			}
		],

		// Disallow generic Array constructors
		// Use of the Array constructor to construct a new array is generally discouraged in favor of
		// array literal notation because of the single-argument pitfall and because the Array global
		// may be redefined.
		'@typescript-eslint/no-array-constructor': base.rules['no-array-constructor'],
		'no-array-constructor': 'off',

		// Require that .toString() is only called on objects which provide useful information
		// JavaScript will call toString() on an object when it is converted to a string, such as when +
		// adding to a string or in ${} template literals. The default Object .toString() returns
		// "[object Object]", so this rule requires stringified objects define a more useful .toString()
		// method.
		'@typescript-eslint/no-base-to-string': 'error',

		// Disallow non-null assertion in locations that may be confusing.
		'@typescript-eslint/no-confusing-non-null-assertion': 'error',

		// Disallow the delete operator with computed key expressions
		// Using the `delete` operator on keys that aren't runtime constants could be a sign that you're
		// using the wrong data structures.
		'@typescript-eslint/no-dynamic-delete': 'error',

		// Disallow duplicate class members
		'@typescript-eslint/no-dupe-class-members': base.rules['no-dupe-class-members'],
		'no-dupe-class-members': 'off',

		// Disallow empty functions.
		'@typescript-eslint/no-empty-function': ['error', { allow: ['constructors'] }],
		'no-empty-function': 'off',

		// Disallow the declaration of empty interfaces
		// An empty interface is equivalent to its supertype. If the interface does not implement a
		// supertype, then the interface is equivalent to an empty object ({}). In both cases it can be
		// omitted.
		'@typescript-eslint/no-empty-interface': 'error',

		// Disallows explicit type declarations for variables or parameters initialized to a number,
		// string, or boolean
		// This rule disallows explicit type declarations on parameters, variables and properties where
		// the type can be easily inferred from its value.
		'@typescript-eslint/no-explicit-any': 'error',

		// Disallow unnecessary semicolons
		'@typescript-eslint/no-extra-semi': base.rules['no-extra-semi'],
		'no-extra-semi': 'off',

		// Forbids the use of classes as namespaces
		// This rule warns when a class is accidentally used as a namespace.
		'@typescript-eslint/no-extraneous-class': [
			'error',
			{
				// allow extraneous classes if they only contain a constructor
				allowConstructorOnly: true,
				// allow extraneous classes if they are have a decorator
				allowWithDecorator: true
			}
		],

		// Requires Promise-like values to be handled appropriately
		// This rule forbids usage of Promise-like values in statements without handling their errors
		// appropriately. Unhandled promises can cause several issues, such as improperly sequenced
		// operations, ignored Promise rejections and more.
		'@typescript-eslint/no-floating-promises': [
			'error',
			{
				ignoreVoid: true
			}
		],

		// Disallow iterating over an array with a for-in loop
		// A for-in loop (for (var k in o)) iterates over the properties of an Object. While it is legal
		// to use for-in loops with array types, it is not common. for-in will iterate over the indices
		// of the array as strings, omitting any "holes" in the array.
		'@typescript-eslint/no-for-in-array': 'error',

		// Disallow the use of `eval()`-like methods
		'@typescript-eslint/no-implied-eval': base.rules['no-implied-eval'],
		'no-implied-eval': 'off',

		// Disallows explicit type declarations for builtin primitive values
		// This rule disallows explicit type declarations on parameters, variables and properties where
		// the type can be easily inferred from its value.
		'@typescript-eslint/no-inferrable-types': [
			'error',
			{
				ignoreProperties: true,
				ignoreParameters: true
			}
		],

		// Disallow `this` keywords outside of classes or class-like objects
		'@typescript-eslint/no-invalid-this': 'error',
		'no-invalid-this': 'off',

		// Disallow usage of void type outside of generic or return types
		'@typescript-eslint/no-invalid-void-type': 'error',

		// Disallow function declarations that contain unsafe references inside loop statements
		'@typescript-eslint/no-loop-func': base.rules['no-loop-func'],
		'no-loop-func': 'off',

		// Disallow literal numbers that lose precision
		'@typescript-eslint/no-loss-of-precision': base.rules['no-loss-of-precision'],
		'no-loss-of-precision': 'off',

		// Enforce valid definition of new and constructor
		// Warns on apparent attempts to define constructors for interfaces or new for classes.
		'@typescript-eslint/no-misused-new': 'error',

		// Avoid using promises in places not designed to handle them
		// This rule forbids using promises in places where the Typescript compiler allows them but they
		// are not handled properly. These situations can often arise due to a missing await keyword or
		// just a misunderstanding of the way async functions are handled/awaited.
		'@typescript-eslint/no-misused-promises': 'error',

		// Disallow the use of custom TypeScript modules and namespaces
		// Custom TypeScript modules (module foo {}) and namespaces (namespace foo {}) are considered
		// outdated ways to organize TypeScript code. ES2015 module syntax is now preferred
		// (import/export).
		'@typescript-eslint/no-namespace': 'error',

		// Disallows using a non-null assertion in the left operand of the nullish coalescing operator
		// The nullish coalescing operator is designed to provide a default value when dealing with `null` or
		// `undefined`.
		// Using non-null assertions in the left operand of the nullish coalescing operator is redundant.
		'@typescript-eslint/no-non-null-asserted-nullish-coalescing': 'error',

		// Disallows using a non-null assertion after an optional chain expression
		// Optional chain expressions are designed to return `undefined` if the optional property is
		// nullish. Using non-null assertions after an optional chain expression is wrong, and
		// introduces a serious type safety hole into your code.
		'@typescript-eslint/no-non-null-asserted-optional-chain': 'error',

		// Disallow non-null assertions using the ! postfix operator
		// Using non-null assertions cancels the benefits of the strict null-checking mode.
		'@typescript-eslint/no-non-null-assertion': 'off',

		// Disallow the use of parameter properties in class constructors
		// This rule disallows the use of parameter properties in constructors, forcing the user to
		// explicitly declare all properties in the class.
		'@typescript-eslint/no-parameter-properties': 'off',

		// Disallow variable redeclaration
		'@typescript-eslint/no-redeclare': [
			'error',
			{
				ignoreDeclarationMerge: true
			}
		],
		'no-redeclare': 'off',

		// Disallow members of unions and intersections that do nothing or override type information
		// Some types can override some other types ("constituents") in a union or intersection and/or be overridden by
		// some other types. TypeScript's set theory of types includes cases where a constituent type might be useless
		// in the parent union or intersection.
		'@typescript-eslint/no-redundant-type-constituents': 'off',

		// Disallows invocation of require()
		// Prefer the newer ES6-style imports over require().
		'@typescript-eslint/no-require-imports': 'error',

		// Disallow Shadowing
		// This rule aims to eliminate shadowed variable declarations.
		'@typescript-eslint/no-shadow': base.rules['no-shadow'],
		'no-shadow': 'off',

		// Disallow aliasing this
		// Assigning a variable to this instead of properly using arrow lambdas may be a symptom of
		// pre-ES6 practices or not managing scope well.
		'@typescript-eslint/no-this-alias': [
			'error',
			{
				allowDestructuring: true
			}
		],

		// Restrict what can be thrown as an exception
		// It is considered good practice to only `throw` the `Error` object itself or an object using
		// the `Error` object as base objects for user-defined exceptions. The fundamental benefit of
		// `Error` objects is that they automatically keep track of where they were built and
		// originated.
		'@typescript-eslint/no-throw-literal': [
			base.rules['no-throw-literal'],
			{
				allowThrowingAny: false,
				allowThrowingUnknown: true
			}
		],
		'no-throw-literal': 'off',

		// Condition expressions must be necessary
		// Any expression being used as a condition must be able to evaluate as truthy or falsy in order
		// to be considered "necessary". Conversely, any expression that always evaluates to truthy or
		// always evaluates to falsy, as determined by the type of the expression, is considered
		// unnecessary and will be flagged by this rule.
		'@typescript-eslint/no-unnecessary-condition': 'warn',

		// Warns when a namespace qualifier is unnecessary
		// This rule aims to let users know when a namespace or enum qualifier is unnecessary, whether
		// used for a type or for a value.
		'@typescript-eslint/no-unnecessary-qualifier': 'error',

		// Warns if a type assertion does not change the type of an expression
		// This rule aims to prevent unnecessary type assertions.
		'@typescript-eslint/no-unnecessary-type-assertion': 'error',

		// Enforce that type arguments will not be used if not required
		'@typescript-eslint/no-unnecessary-type-arguments': 'warn',

		// Disallows unnecessary constraints on generic types
		'@typescript-eslint/no-unnecessary-type-constraint': 'error',

		// Disallow assigning `any` to variables and properties
		'@typescript-eslint/no-unsafe-assignment': 'error',

		// Disallow calling an `any` type value
		'@typescript-eslint/no-unsafe-call': 'error',

		// Disallow member access on `any` typed variables
		'@typescript-eslint/no-unsafe-member-access': 'error',

		// Disallow returning `any` from a function
		'@typescript-eslint/no-unsafe-return': 'error',

		// Disallow /// <reference path="" /> comments
		// Triple-slash reference directive comments should not be used anymore. Use import instead.
		'@typescript-eslint/triple-slash-reference': [
			'error',
			{
				path: 'never',
				types: 'never',
				lib: 'always'
			}
		],

		// Disallow Unused Expressions
		// This rule aims to eliminate unused expressions which have no effect on the state of the
		// program.
		'@typescript-eslint/no-unused-expressions': base.rules['no-unused-expressions'],
		'no-unused-expressions': 'off',

		// Variables that are declared and not used anywhere in the code are most likely an error due
		// to incomplete refactoring. Such variables take up space in the code and can lead to
		// confusion by readers.
		'@typescript-eslint/no-unused-vars': base.rules['no-unused-vars'],
		'no-unused-vars': 'off',

		// Disallow the use of variables before they are defined
		// This rule will warn when it encounters a reference to an identifier that has not yet been
		// declared.
		'@typescript-eslint/no-use-before-define': 'error',
		'no-use-before-define': 'off',

		// Disallows the use of require statements except in import statements
		// In other words, the use of forms such as var foo = require("foo") are banned. Instead use ES6
		// style imports or import foo = require("foo") imports.
		'@typescript-eslint/no-var-requires': 'error',

		// Disallow unnecessary constructors
		// This rule flags class constructors that can be safely removed without changing how the class
		// works.
		'@typescript-eslint/no-useless-constructor': base.rules['no-useless-constructor'],
		'no-useless-constructor': 'off',

		// Disallow empty exports that don't change anything in a module file
		'@typescript-eslint/no-useless-empty-export': 'warn',

		// Prefer usage of `as const` over literal type
		'@typescript-eslint/prefer-as-const': 'error',

		// Enforce the use of for-of loop over the standard for loop where possible.
		'@typescript-eslint/prefer-for-of': 'warn',

		// Use function types instead of interfaces with call signatures
		// This rule suggests using a function type instead of an interface or object type literal with
		// a single call signature.
		'@typescript-eslint/prefer-function-type': 'error',

		// Require that all enum members be literal values to prevent unintended enum member name shadow
		// issues
		'@typescript-eslint/prefer-literal-enum-member': 'warn',

		// Enforce the usage of the nullish coalescing operator instead of logical chaining
		// TypeScript 3.7 added support for the nullish coalescing operator. This operator allows you to
		// safely cascade a value when dealing with null or undefined.
		'@typescript-eslint/prefer-nullish-coalescing': 'error',

		// Require the use of the namespace keyword instead of the module keyword to declare custom
		// TypeScript modules
		// In an effort to prevent further confusion between custom TypeScript modules and the new
		// ES2015 modules, starting with TypeScript v1.5 the keyword namespace is now the preferred way
		// to declare custom TypeScript modules.
		'@typescript-eslint/prefer-namespace-keyword': 'error',

		// Require private members to be marked as readonly if they're never modified outside of the constructor.
		'@typescript-eslint/prefer-readonly': 'error',

		// Prefer using type parameter when calling `Array#reduce` instead of casting
		'@typescript-eslint/prefer-reduce-type-parameter': 'warn',

		// Enforce that `this` is used when only `this` type is returned
		'@typescript-eslint/prefer-return-this-type': 'warn',

		// Functions that return promises must be async

		// Requires any function or method that returns a Promise to be marked async. Ensures that each
		// function is only capable of:
		// - returning a rejected promise, or
		// - throwing an Error object
		//
		// In contrast, non-async Promise-returning functions are technically capable of either. Code
		// that handles the results of those functions will often need to handle both cases, which can
		// get complex.
		'@typescript-eslint/promise-function-async': 'error',

		// Enforce giving compare argument to Array#sort
		// This rule is aimed at preventing the calls of Array#sort method. This rule ignores the sort
		// methods of user-defined types.
		'@typescript-eslint/require-array-sort-compare': ['error', { ignoreStringArrays: true }],

		// Disallow async functions which have no await expression
		'@typescript-eslint/require-await': base.rules['require-await'],
		'require-await': 'off',

		// When adding two variables, operands must both be of type number or of type string
		'@typescript-eslint/restrict-plus-operands': [
			'error',
			{
				skipCompoundAssignments: false
			}
		],

		// Enforce template literal expressions to be of string type
		'@typescript-eslint/restrict-template-expressions': 'off',

		// Require returning awaited values in specific contexts
		// Returning an awaited promise can make sense for better stack trace information as well as for
		// consistent error handling (returned promises will not be caught in an async function's
		// try/catch).
		'@typescript-eslint/return-await': ['error', 'always'],

		// Exhaustiveness checking in switch with union type
		// Union type may have a lot of parts. It's easy to forget to consider all cases in switch. This
		// rule reminds which parts are missing. If domain of the problem requires to have only a
		// partial switch, developer may _explicitly_ add a default clause.
		'@typescript-eslint/switch-exhaustiveness-check': 'error',

		// Enforces unbound methods are called with their expected scope
		// Class functions don't preserve the class scope when passed as standalone variables.
		'@typescript-eslint/unbound-method': ['error', { ignoreStatic: true }],

		// Require that function parameters are typed as readonly
		// Disabled, too cumbersome to write `readonly` everywhere.
		'@typescript-eslint/prefer-readonly-parameter-types': 'off',

		// Requires expressions of type void to appear in statement position
		// Disabled, conflicts with no-meaningless-void-operator
		'@typescript-eslint/no-confusing-void-expression': 'off',

		// This rule does not work with types properly and causes some confusing issues when you do
		// `return myfn()` where `myfn` returns `void` - ESLint treats that as a "value being
		// returned" and complains that a value should be returned everywhere.
		'consistent-return': 'off'
	},
	overrides: [
		{
			files: ['*.d.ts'],
			rules: {
				'import/no-unused-modules': 'off'
			}
		},
		{
			files: globs.configs,
			rules: {
				'node/no-process-env': 'off'
			}
		}
	]
};
