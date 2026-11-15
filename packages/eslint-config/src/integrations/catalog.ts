// Installed rule catalog; disabled rules remain available for explicit opt-in.
import type { RuleInfo } from '../types/integration.ts'
import { pluginNamespaces } from '../plugin-namespaces.ts'
export const catalog: Record<string, Record<string, RuleInfo>> = {
	"javascript": {
		"accessor-pairs": {},
		"array-bracket-newline": {},
		"array-bracket-spacing": {},
		"array-callback-return": {},
		"array-element-newline": {},
		"arrow-body-style": {},
		"arrow-parens": {},
		"arrow-spacing": {},
		"block-scoped-var": {},
		"block-spacing": {},
		"brace-style": {},
		"callback-return": {},
		"camelcase": {},
		"capitalized-comments": {},
		"class-methods-use-this": {},
		"comma-dangle": {},
		"comma-spacing": {},
		"comma-style": {},
		"complexity": {},
		"computed-property-spacing": {},
		"consistent-return": {},
		"consistent-this": {},
		"constructor-super": {},
		"curly": {},
		"default-case": {},
		"default-case-last": {},
		"default-param-last": {},
		"dot-location": {},
		"dot-notation": {},
		"eol-last": {},
		"eqeqeq": {},
		"for-direction": {},
		"func-call-spacing": {},
		"func-name-matching": {},
		"func-names": {},
		"func-style": {},
		"function-call-argument-newline": {},
		"function-paren-newline": {},
		"generator-star-spacing": {},
		"getter-return": {},
		"global-require": {},
		"grouped-accessor-pairs": {},
		"guard-for-in": {},
		"handle-callback-err": {},
		"id-blacklist": {},
		"id-denylist": {},
		"id-length": {},
		"id-match": {},
		"implicit-arrow-linebreak": {},
		"indent": {},
		"indent-legacy": {},
		"init-declarations": {},
		"jsx-quotes": {},
		"key-spacing": {},
		"keyword-spacing": {},
		"line-comment-position": {},
		"linebreak-style": {},
		"lines-around-comment": {},
		"lines-around-directive": {},
		"lines-between-class-members": {},
		"logical-assignment-operators": {},
		"max-classes-per-file": {},
		"max-depth": {},
		"max-len": {},
		"max-lines": {},
		"max-lines-per-function": {},
		"max-nested-callbacks": {},
		"max-params": {},
		"max-statements": {},
		"max-statements-per-line": {},
		"multiline-comment-style": {},
		"multiline-ternary": {},
		"new-cap": {},
		"new-parens": {},
		"newline-after-var": {},
		"newline-before-return": {},
		"newline-per-chained-call": {},
		"no-alert": {},
		"no-array-constructor": {},
		"no-async-promise-executor": {},
		"no-await-in-loop": {},
		"no-bitwise": {},
		"no-buffer-constructor": {},
		"no-caller": {},
		"no-case-declarations": {},
		"no-catch-shadow": {},
		"no-class-assign": {},
		"no-compare-neg-zero": {},
		"no-cond-assign": {},
		"no-confusing-arrow": {},
		"no-console": {},
		"no-const-assign": {},
		"no-constant-binary-expression": {},
		"no-constant-condition": {},
		"no-constructor-return": {},
		"no-continue": {},
		"no-control-regex": {},
		"no-debugger": {},
		"no-delete-var": {},
		"no-div-regex": {},
		"no-dupe-args": {},
		"no-dupe-class-members": {},
		"no-dupe-else-if": {},
		"no-dupe-keys": {},
		"no-duplicate-case": {},
		"no-duplicate-imports": {},
		"no-else-return": {},
		"no-empty": {},
		"no-empty-character-class": {},
		"no-empty-function": {},
		"no-empty-pattern": {},
		"no-empty-static-block": {},
		"no-eq-null": {},
		"no-eval": {},
		"no-ex-assign": {},
		"no-extend-native": {},
		"no-extra-bind": {},
		"no-extra-boolean-cast": {},
		"no-extra-label": {},
		"no-extra-parens": {},
		"no-extra-semi": {},
		"no-fallthrough": {},
		"no-floating-decimal": {},
		"no-func-assign": {},
		"no-global-assign": {},
		"no-implicit-coercion": {},
		"no-implicit-globals": {},
		"no-implied-eval": {},
		"no-import-assign": {},
		"no-inline-comments": {},
		"no-inner-declarations": {},
		"no-invalid-regexp": {},
		"no-invalid-this": {},
		"no-irregular-whitespace": {},
		"no-iterator": {},
		"no-label-var": {},
		"no-labels": {},
		"no-lone-blocks": {},
		"no-lonely-if": {},
		"no-loop-func": {},
		"no-loss-of-precision": {},
		"no-magic-numbers": {},
		"no-misleading-character-class": {},
		"no-mixed-operators": {},
		"no-mixed-requires": {},
		"no-mixed-spaces-and-tabs": {},
		"no-multi-assign": {},
		"no-multi-spaces": {},
		"no-multi-str": {},
		"no-multiple-empty-lines": {},
		"no-native-reassign": {},
		"no-negated-condition": {},
		"no-negated-in-lhs": {},
		"no-nested-ternary": {},
		"no-new": {},
		"no-new-func": {},
		"no-new-native-nonconstructor": {},
		"no-new-object": {},
		"no-new-require": {},
		"no-new-symbol": {},
		"no-new-wrappers": {},
		"no-nonoctal-decimal-escape": {},
		"no-obj-calls": {},
		"no-object-constructor": {},
		"no-octal": {},
		"no-octal-escape": {},
		"no-param-reassign": {},
		"no-path-concat": {},
		"no-plusplus": {},
		"no-process-env": {},
		"no-process-exit": {},
		"no-promise-executor-return": {},
		"no-proto": {},
		"no-prototype-builtins": {},
		"no-redeclare": {},
		"no-regex-spaces": {},
		"no-restricted-exports": {},
		"no-restricted-globals": {},
		"no-restricted-imports": {},
		"no-restricted-modules": {},
		"no-restricted-properties": {},
		"no-restricted-syntax": {},
		"no-return-assign": {},
		"no-return-await": {},
		"no-script-url": {},
		"no-self-assign": {},
		"no-self-compare": {},
		"no-sequences": {},
		"no-setter-return": {},
		"no-shadow": {},
		"no-shadow-restricted-names": {},
		"no-spaced-func": {},
		"no-sparse-arrays": {},
		"no-sync": {},
		"no-tabs": {},
		"no-template-curly-in-string": {},
		"no-ternary": {},
		"no-this-before-super": {},
		"no-throw-literal": {},
		"no-trailing-spaces": {},
		"no-unassigned-vars": {},
		"no-undef": {},
		"no-undef-init": {},
		"no-undefined": {},
		"no-underscore-dangle": {},
		"no-unexpected-multiline": {},
		"no-unmodified-loop-condition": {},
		"no-unneeded-ternary": {},
		"no-unreachable": {},
		"no-unreachable-loop": {},
		"no-unsafe-finally": {},
		"no-unsafe-negation": {},
		"no-unsafe-optional-chaining": {},
		"no-unused-expressions": {},
		"no-unused-labels": {},
		"no-unused-private-class-members": {},
		"no-unused-vars": {},
		"no-use-before-define": {},
		"no-useless-assignment": {},
		"no-useless-backreference": {},
		"no-useless-call": {},
		"no-useless-catch": {},
		"no-useless-computed-key": {},
		"no-useless-concat": {},
		"no-useless-constructor": {},
		"no-useless-escape": {},
		"no-useless-rename": {},
		"no-useless-return": {},
		"no-var": {},
		"no-void": {},
		"no-warning-comments": {},
		"no-whitespace-before-property": {},
		"no-with": {},
		"nonblock-statement-body-position": {},
		"object-curly-newline": {},
		"object-curly-spacing": {},
		"object-property-newline": {},
		"object-shorthand": {},
		"one-var": {},
		"one-var-declaration-per-line": {},
		"operator-assignment": {},
		"operator-linebreak": {},
		"padded-blocks": {},
		"padding-line-between-statements": {},
		"prefer-arrow-callback": {},
		"prefer-const": {},
		"prefer-destructuring": {},
		"prefer-exponentiation-operator": {},
		"prefer-named-capture-group": {},
		"prefer-numeric-literals": {},
		"prefer-object-has-own": {},
		"prefer-object-spread": {},
		"prefer-promise-reject-errors": {},
		"prefer-reflect": {},
		"prefer-regex-literals": {},
		"prefer-rest-params": {},
		"prefer-spread": {},
		"prefer-template": {},
		"preserve-caught-error": {},
		"quote-props": {},
		"quotes": {},
		"radix": {},
		"require-atomic-updates": {},
		"require-await": {},
		"require-unicode-regexp": {},
		"require-yield": {},
		"rest-spread-spacing": {},
		"semi": {},
		"semi-spacing": {},
		"semi-style": {},
		"sort-imports": {},
		"sort-keys": {},
		"sort-vars": {},
		"space-before-blocks": {},
		"space-before-function-paren": {},
		"space-in-parens": {},
		"space-infix-ops": {},
		"space-unary-ops": {},
		"spaced-comment": {},
		"strict": {},
		"switch-colon-spacing": {},
		"symbol-description": {},
		"template-curly-spacing": {},
		"template-tag-spacing": {},
		"unicode-bom": {},
		"use-isnan": {},
		"valid-typeof": {},
		"vars-on-top": {},
		"wrap-iife": {},
		"wrap-regex": {},
		"yield-star-spacing": {},
		"yoda": {},
		"antfu/indent-unindent": {},
		"antfu/no-top-level-await": {},
		"antfu/no-ts-export-equal": {}
	},
	"stylistic": {
		"antfu/consistent-chaining": {},
		"antfu/consistent-list-newline": {},
		"antfu/curly": {},
		"antfu/if-newline": {},
		"antfu/reasonable-newline": {},
		"antfu/top-level-function": {},
		"style/array-bracket-newline": {},
		"style/array-bracket-spacing": {},
		"style/array-element-newline": {},
		"style/arrow-parens": {},
		"style/arrow-spacing": {},
		"style/block-spacing": {},
		"style/brace-style": {},
		"style/comma-dangle": {},
		"style/comma-spacing": {},
		"style/comma-style": {},
		"style/computed-property-spacing": {},
		"style/curly-newline": {},
		"style/dot-location": {},
		"style/eol-last": {},
		"style/function-call-argument-newline": {},
		"style/function-call-spacing": {},
		"style/function-paren-newline": {},
		"style/generator-star-spacing": {},
		"style/implicit-arrow-linebreak": {},
		"style/indent": {},
		"style/indent-binary-ops": {},
		"style/jsx-child-element-spacing": {},
		"style/jsx-closing-bracket-location": {},
		"style/jsx-closing-tag-location": {},
		"style/jsx-curly-brace-presence": {},
		"style/jsx-curly-newline": {},
		"style/jsx-curly-spacing": {},
		"style/jsx-equals-spacing": {},
		"style/jsx-first-prop-new-line": {},
		"style/jsx-function-call-newline": {},
		"style/jsx-indent": {},
		"style/jsx-indent-props": {},
		"style/jsx-max-props-per-line": {},
		"style/jsx-newline": {},
		"style/jsx-one-expression-per-line": {},
		"style/jsx-pascal-case": {},
		"style/jsx-props-no-multi-spaces": {},
		"style/exp-jsx-props-style": {},
		"style/jsx-quotes": {},
		"style/jsx-self-closing-comp": {},
		"style/jsx-sort-props": {},
		"style/jsx-tag-spacing": {},
		"style/jsx-wrap-multilines": {},
		"style/key-spacing": {},
		"style/keyword-spacing": {},
		"style/line-comment-position": {},
		"style/linebreak-style": {},
		"style/lines-around-comment": {},
		"style/lines-between-class-members": {},
		"style/exp-list-style": {},
		"style/max-len": {},
		"style/max-statements-per-line": {},
		"style/member-delimiter-style": {},
		"style/multiline-comment-style": {},
		"style/multiline-ternary": {},
		"style/new-parens": {},
		"style/newline-per-chained-call": {},
		"style/no-confusing-arrow": {},
		"style/no-extra-parens": {},
		"style/no-extra-semi": {},
		"style/no-floating-decimal": {},
		"style/no-mixed-operators": {},
		"style/no-mixed-spaces-and-tabs": {},
		"style/no-multi-spaces": {},
		"style/no-multiple-empty-lines": {},
		"style/no-tabs": {},
		"style/no-trailing-spaces": {},
		"style/no-whitespace-before-property": {},
		"style/nonblock-statement-body-position": {},
		"style/object-curly-newline": {},
		"style/object-curly-spacing": {},
		"style/object-property-newline": {},
		"style/one-var-declaration-per-line": {},
		"style/operator-linebreak": {},
		"style/padded-blocks": {},
		"style/padding-line-between-statements": {},
		"style/quote-props": {},
		"style/quotes": {},
		"style/rest-spread-spacing": {},
		"style/semi": {},
		"style/semi-spacing": {},
		"style/semi-style": {},
		"style/space-before-blocks": {},
		"style/space-before-function-paren": {},
		"style/space-in-parens": {},
		"style/space-infix-ops": {},
		"style/space-unary-ops": {},
		"style/spaced-comment": {},
		"style/switch-colon-spacing": {},
		"style/template-curly-spacing": {},
		"style/template-tag-spacing": {},
		"style/type-annotation-spacing": {},
		"style/type-generic-spacing": {},
		"style/type-named-tuple-spacing": {},
		"style/wrap-iife": {},
		"style/wrap-regex": {},
		"style/yield-star-spacing": {}
	},
	"imports": {
		"antfu/import-dedupe": {},
		"antfu/no-import-dist": {},
		"antfu/no-import-node-modules-by-path": {},
		"import/consistent-type-specifier-style": {},
		"import/exports-last": {},
		"import/first": {},
		"import/newline-after-import": {},
		"import/no-default-export": {},
		"import/no-duplicates": {},
		"import/no-mutable-exports": {},
		"import/no-named-default": {},
		"import/prefer-default-export": {}
	},
	"unusedImports": {
		"unused-imports/no-unused-vars": {},
		"unused-imports/no-unused-imports": {}
	},
	"eslintComments": {
		"eslint-comments/disable-enable-pair": {},
		"eslint-comments/no-aggregating-enable": {},
		"eslint-comments/no-duplicate-disable": {},
		"eslint-comments/no-restricted-disable": {},
		"eslint-comments/no-unlimited-disable": {},
		"eslint-comments/no-unused-disable": {},
		"eslint-comments/no-unused-enable": {},
		"eslint-comments/no-use": {},
		"eslint-comments/require-description": {}
	},
	"command": {
		"command/command": {}
	},
	"perfectionist": {
		"perfectionist/sort-variable-declarations": {},
		"perfectionist/sort-intersection-types": {},
		"perfectionist/sort-import-attributes": {},
		"perfectionist/sort-export-attributes": {},
		"perfectionist/sort-heritage-clauses": {},
		"perfectionist/sort-array-includes": {},
		"perfectionist/sort-named-imports": {},
		"perfectionist/sort-named-exports": {},
		"perfectionist/sort-object-types": {},
		"perfectionist/sort-union-types": {},
		"perfectionist/sort-switch-case": {},
		"perfectionist/sort-decorators": {},
		"perfectionist/sort-interfaces": {},
		"perfectionist/sort-jsx-props": {},
		"perfectionist/sort-modules": {},
		"perfectionist/sort-classes": {},
		"perfectionist/sort-imports": {},
		"perfectionist/sort-exports": {},
		"perfectionist/sort-objects": {},
		"perfectionist/sort-enums": {},
		"perfectionist/sort-sets": {},
		"perfectionist/sort-maps": {},
		"perfectionist/sort-constructor-parameters": {},
		"perfectionist/sort-arrays": {}
	},
	"node": {
		"node/callback-return": {},
		"node/exports-style": {},
		"node/file-extension-in-import": {},
		"node/global-require": {},
		"node/handle-callback-err": {},
		"node/no-callback-literal": {},
		"node/no-deprecated-api": {},
		"node/no-exports-assign": {},
		"node/no-extraneous-import": {},
		"node/no-extraneous-require": {},
		"node/no-missing-import": {},
		"node/no-missing-require": {},
		"node/no-mixed-requires": {},
		"node/no-new-require": {},
		"node/no-path-concat": {},
		"node/no-process-env": {},
		"node/no-process-exit": {},
		"node/no-restricted-import": {},
		"node/no-restricted-require": {},
		"node/no-sync": {},
		"node/no-top-level-await": {},
		"node/no-unpublished-bin": {},
		"node/no-unpublished-import": {},
		"node/no-unpublished-require": {},
		"node/no-unsupported-features/es-builtins": {},
		"node/no-unsupported-features/es-syntax": {},
		"node/no-unsupported-features/node-builtins": {},
		"node/prefer-global/buffer": {},
		"node/prefer-global/console": {},
		"node/prefer-global/crypto": {},
		"node/prefer-global/process": {},
		"node/prefer-global/text-decoder": {},
		"node/prefer-global/text-encoder": {},
		"node/prefer-global/url-search-params": {},
		"node/prefer-global/url": {},
		"node/prefer-global/timers": {},
		"node/prefer-import/assert-strict": {},
		"node/prefer-node-protocol": {},
		"node/prefer-process-get-builtin-module": {},
		"node/prefer-promises/dns": {},
		"node/prefer-promises/fs": {},
		"node/process-exit-as-throw": {},
		"node/hashbang": {},
		"node/no-hide-core-modules": {},
		"node/shebang": {}
	},
	"jsdoc": {
		"jsdoc/check-access": {},
		"jsdoc/check-alignment": {},
		"jsdoc/check-examples": {},
		"jsdoc/check-indentation": {},
		"jsdoc/check-line-alignment": {},
		"jsdoc/check-param-names": {},
		"jsdoc/check-property-names": {},
		"jsdoc/check-syntax": {},
		"jsdoc/check-tag-names": {},
		"jsdoc/check-template-names": {},
		"jsdoc/check-types": {},
		"jsdoc/check-values": {},
		"jsdoc/convert-to-jsdoc-comments": {},
		"jsdoc/empty-tags": {},
		"jsdoc/escape-inline-tags": {},
		"jsdoc/implements-on-classes": {},
		"jsdoc/imports-as-dependencies": {},
		"jsdoc/informative-docs": {},
		"jsdoc/lines-before-block": {},
		"jsdoc/match-description": {},
		"jsdoc/match-name": {},
		"jsdoc/multiline-blocks": {},
		"jsdoc/no-bad-blocks": {},
		"jsdoc/no-blank-block-descriptions": {},
		"jsdoc/no-blank-blocks": {},
		"jsdoc/no-defaults": {},
		"jsdoc/no-missing-syntax": {},
		"jsdoc/no-multi-asterisks": {},
		"jsdoc/no-restricted-syntax": {},
		"jsdoc/no-types": {},
		"jsdoc/no-undefined-types": {},
		"jsdoc/no-unnecessary-type-assertion": {},
		"jsdoc/normalize-see-links": {},
		"jsdoc/prefer-import-tag": {},
		"jsdoc/reject-any-type": {},
		"jsdoc/reject-function-type": {},
		"jsdoc/require-asterisk-prefix": {},
		"jsdoc/require-description": {},
		"jsdoc/require-description-complete-sentence": {},
		"jsdoc/require-example": {},
		"jsdoc/require-file-overview": {},
		"jsdoc/require-hyphen-before-param-description": {},
		"jsdoc/require-jsdoc": {},
		"jsdoc/require-next-description": {},
		"jsdoc/require-next-type": {},
		"jsdoc/require-param": {},
		"jsdoc/require-param-description": {},
		"jsdoc/require-param-name": {},
		"jsdoc/require-param-type": {},
		"jsdoc/require-property": {},
		"jsdoc/require-property-description": {},
		"jsdoc/require-property-name": {},
		"jsdoc/require-property-type": {},
		"jsdoc/require-rejects": {},
		"jsdoc/require-returns": {},
		"jsdoc/require-returns-check": {},
		"jsdoc/require-returns-description": {},
		"jsdoc/require-returns-type": {},
		"jsdoc/require-tags": {},
		"jsdoc/require-template": {},
		"jsdoc/require-template-description": {},
		"jsdoc/require-throws": {},
		"jsdoc/require-throws-description": {},
		"jsdoc/require-throws-type": {},
		"jsdoc/require-yields": {},
		"jsdoc/require-yields-check": {},
		"jsdoc/require-yields-description": {},
		"jsdoc/require-yields-type": {},
		"jsdoc/sort-tags": {},
		"jsdoc/tag-lines": {},
		"jsdoc/text-escaping": {},
		"jsdoc/ts-ban-ts-comment": {},
		"jsdoc/ts-method-signature-style": {},
		"jsdoc/ts-no-empty-object-type": {},
		"jsdoc/ts-no-unnecessary-template-expression": {},
		"jsdoc/ts-prefer-function-type": {},
		"jsdoc/type-formatting": {},
		"jsdoc/valid-types": {}
	},
	"e18e": {
		"e18e/prefer-array-at": {},
		"e18e/prefer-array-fill": {},
		"e18e/prefer-array-from-map": {},
		"e18e/prefer-includes": {},
		"e18e/prefer-array-to-reversed": {},
		"e18e/prefer-array-to-sorted": {},
		"e18e/prefer-array-to-spliced": {},
		"e18e/prefer-exponentiation-operator": {},
		"e18e/prefer-nullish-coalescing": {},
		"e18e/prefer-object-has-own": {},
		"e18e/prefer-spread-syntax": {},
		"e18e/prefer-url-canparse": {},
		"e18e/no-indexof-equality": {
			"requires": [
				"typeInformation"
			]
		},
		"e18e/prefer-timer-args": {},
		"e18e/prefer-date-now": {},
		"e18e/prefer-regex-test": {},
		"e18e/prefer-array-some": {},
		"e18e/prefer-static-regex": {},
		"e18e/prefer-inline-equality": {},
		"e18e/prefer-string-fromcharcode": {},
		"e18e/prefer-includes-over-regex-test": {},
		"e18e/no-delete-property": {},
		"e18e/no-spread-in-reduce": {},
		"e18e/prefer-flatmap-over-map-flat": {},
		"e18e/prefer-static-collator": {},
		"e18e/prefer-get-or-insert": {},
		"e18e/prefer-charcode-at-in-loop": {},
		"e18e/prefer-slice-over-split-index": {},
		"e18e/prefer-throw-if-no-entry": {},
		"e18e/ban-dependencies": {}
	},
	"unicorn": {
		"unicorn/better-dom-traversing": {},
		"unicorn/catch-error-name": {},
		"unicorn/class-reference-in-static-methods": {},
		"unicorn/comma-spacing": {},
		"unicorn/comment-content": {},
		"unicorn/consistent-arrow-return-style": {},
		"unicorn/consistent-assert": {},
		"unicorn/consistent-boolean-name": {},
		"unicorn/consistent-class-member-order": {},
		"unicorn/consistent-compound-words": {},
		"unicorn/consistent-conditional-object-spread": {},
		"unicorn/consistent-date-clone": {},
		"unicorn/consistent-destructuring": {},
		"unicorn/consistent-empty-array-spread": {},
		"unicorn/consistent-existence-index-check": {},
		"unicorn/consistent-export-decorator-position": {},
		"unicorn/consistent-function-scoping": {},
		"unicorn/consistent-function-style": {},
		"unicorn/consistent-json-file-read": {},
		"unicorn/consistent-optional-chaining": {},
		"unicorn/consistent-template-literal-escape": {},
		"unicorn/consistent-tuple-labels": {},
		"unicorn/custom-error-definition": {},
		"unicorn/default-export-style": {},
		"unicorn/dom-node-dataset": {},
		"unicorn/empty-brace-spaces": {},
		"unicorn/error-message": {},
		"unicorn/escape-case": {},
		"unicorn/expiring-todo-comments": {},
		"unicorn/explicit-length-check": {},
		"unicorn/explicit-timer-delay": {},
		"unicorn/filename-case": {},
		"unicorn/id-match": {},
		"unicorn/import-style": {},
		"unicorn/indent": {},
		"unicorn/isolated-functions": {},
		"unicorn/iteration-fallback-style": {},
		"unicorn/key-name-casing": {},
		"unicorn/logical-assignment-operators": {},
		"unicorn/max-nested-calls": {},
		"unicorn/name-replacements": {},
		"unicorn/new-for-builtins": {},
		"unicorn/no-abusive-eslint-disable": {},
		"unicorn/no-accessor-recursion": {},
		"unicorn/no-accidental-bitwise-operator": {},
		"unicorn/no-anonymous-default-export": {},
		"unicorn/no-array-callback-reference": {},
		"unicorn/no-array-concat-in-loop": {},
		"unicorn/no-array-fill-with-reference-type": {},
		"unicorn/no-array-from-fill": {},
		"unicorn/no-array-front-mutation": {},
		"unicorn/no-array-method-this-argument": {},
		"unicorn/no-array-reduce": {},
		"unicorn/no-array-reverse": {},
		"unicorn/no-array-sort": {},
		"unicorn/no-array-sort-for-min-max": {},
		"unicorn/no-array-splice": {},
		"unicorn/no-asterisk-prefix-in-documentation-comments": {},
		"unicorn/no-async-iterator-callback": {},
		"unicorn/no-async-promise-finally": {},
		"unicorn/no-await-expression-member": {},
		"unicorn/no-await-in-promise-methods": {},
		"unicorn/no-barrel-files": {},
		"unicorn/no-blob-to-file": {},
		"unicorn/no-boolean-sort-comparator": {},
		"unicorn/no-break-in-nested-loop": {},
		"unicorn/no-canvas-to-image": {},
		"unicorn/no-chained-comparison": {},
		"unicorn/no-collection-bracket-access": {},
		"unicorn/no-computed-property-existence-check": {},
		"unicorn/no-conflicting-constraints": {},
		"unicorn/no-confusing-array-splice": {},
		"unicorn/no-confusing-array-with": {},
		"unicorn/no-console-spaces": {},
		"unicorn/no-constant-zero-expression": {},
		"unicorn/no-declarations-before-early-exit": {},
		"unicorn/no-document-cookie": {},
		"unicorn/no-double-comparison": {},
		"unicorn/no-duplicate-if-branches": {},
		"unicorn/no-duplicate-logical-operands": {},
		"unicorn/no-duplicate-loops": {},
		"unicorn/no-duplicate-set-values": {},
		"unicorn/no-empty-file": {},
		"unicorn/no-empty-link-text": {},
		"unicorn/no-error-property-assignment": {},
		"unicorn/no-exports-in-scripts": {},
		"unicorn/no-for-each": {},
		"unicorn/no-for-loop": {},
		"unicorn/no-global-object-property-assignment": {},
		"unicorn/no-immediate-mutation": {},
		"unicorn/no-impossible-length-comparison": {},
		"unicorn/no-incomplete-accessor-override": {},
		"unicorn/no-incorrect-query-selector": {},
		"unicorn/no-incorrect-template-string-interpolation": {},
		"unicorn/no-ineffective-csp-directives": {},
		"unicorn/no-instanceof-builtins": {},
		"unicorn/no-invalid-argument-count": {},
		"unicorn/no-invalid-boolean-attribute-value": {},
		"unicorn/no-invalid-character-comparison": {},
		"unicorn/no-invalid-dom-token": {},
		"unicorn/no-invalid-fetch-options": {},
		"unicorn/no-invalid-file-input-accept": {},
		"unicorn/no-invalid-integrity": {},
		"unicorn/no-invalid-intl-options": {},
		"unicorn/no-invalid-property-descriptor": {},
		"unicorn/no-invalid-remove-event-listener": {},
		"unicorn/no-invalid-response-options": {},
		"unicorn/no-invalid-style-set-property": {},
		"unicorn/no-invalid-temporal-arithmetic": {},
		"unicorn/no-invalid-url-protocol-comparison": {},
		"unicorn/no-invalid-well-known-symbol-methods": {},
		"unicorn/no-javascript-url": {},
		"unicorn/no-keyword-prefix": {},
		"unicorn/no-late-current-target-access": {},
		"unicorn/no-late-event-control": {},
		"unicorn/no-leading-empty-lines": {},
		"unicorn/no-lonely-if": {},
		"unicorn/no-loop-iterable-mutation": {},
		"unicorn/no-loss-of-precision": {},
		"unicorn/no-magic-array-flat-depth": {},
		"unicorn/no-manually-wrapped-comments": {},
		"unicorn/no-mismatched-map-key": {},
		"unicorn/no-misrefactored-assignment": {},
		"unicorn/no-missing-local-resource": {},
		"unicorn/no-multiple-promise-resolver-calls": {},
		"unicorn/no-named-default": {},
		"unicorn/no-negated-array-predicate": {},
		"unicorn/no-negated-comparison": {},
		"unicorn/no-negated-condition": {},
		"unicorn/no-negation-in-equality-check": {},
		"unicorn/no-nested-ternary": {},
		"unicorn/no-new-array": {},
		"unicorn/no-new-buffer": {},
		"unicorn/no-non-function-verb-prefix": {
			"requires": [
				"typeInformation"
			]
		},
		"unicorn/no-nonstandard-builtin-properties": {},
		"unicorn/no-null": {},
		"unicorn/no-object-as-default-parameter": {},
		"unicorn/no-object-methods-with-collections": {},
		"unicorn/no-optional-chaining-on-undeclared-variable": {},
		"unicorn/no-prevent-default-in-passive-listener": {},
		"unicorn/no-process-exit": {},
		"unicorn/no-redundant-comparison": {},
		"unicorn/no-repeated-call-wrappers": {},
		"unicorn/no-return-array-push": {},
		"unicorn/no-selector-as-dom-name": {},
		"unicorn/no-shorthand-property-overrides": {},
		"unicorn/no-single-promise-in-promise-methods": {},
		"unicorn/no-static-only-class": {},
		"unicorn/no-subtraction-comparison": {},
		"unicorn/no-thenable": {},
		"unicorn/no-this-assignment": {},
		"unicorn/no-this-outside-of-class": {},
		"unicorn/no-top-level-assignment-in-function": {},
		"unicorn/no-top-level-side-effects": {},
		"unicorn/no-transition-all": {},
		"unicorn/no-typeof-undefined": {},
		"unicorn/no-uncalled-method": {},
		"unicorn/no-undeclared-class-members": {},
		"unicorn/no-unnecessary-array-flat-depth": {},
		"unicorn/no-unnecessary-array-flat-map": {},
		"unicorn/no-unnecessary-array-splice-count": {},
		"unicorn/no-unnecessary-await": {},
		"unicorn/no-unnecessary-boolean-comparison": {},
		"unicorn/no-unnecessary-default-arguments": {},
		"unicorn/no-unnecessary-fetch-options": {},
		"unicorn/no-unnecessary-global-this": {},
		"unicorn/no-unnecessary-nested-ternary": {},
		"unicorn/no-unnecessary-parameters": {},
		"unicorn/no-unnecessary-polyfills": {},
		"unicorn/no-unnecessary-slice-end": {},
		"unicorn/no-unnecessary-splice": {},
		"unicorn/no-unnecessary-string-trim": {},
		"unicorn/no-unreadable-array-destructuring": {},
		"unicorn/no-unreadable-for-of-expression": {},
		"unicorn/no-unreadable-iife": {},
		"unicorn/no-unreadable-new-expression": {},
		"unicorn/no-unreadable-object-destructuring": {},
		"unicorn/no-unsafe-buffer-conversion": {},
		"unicorn/no-unsafe-dom-html": {},
		"unicorn/no-unsafe-json-serialization": {},
		"unicorn/no-unsafe-promise-all-settled-values": {},
		"unicorn/no-unsafe-property-key": {},
		"unicorn/no-unsafe-sqlite-interpolation": {},
		"unicorn/no-unsafe-string-replacement": {},
		"unicorn/no-unused-builtin-method-return": {},
		"unicorn/no-unused-iterator-helper": {},
		"unicorn/no-unused-properties": {},
		"unicorn/no-url-in-search-params": {},
		"unicorn/no-useless-boolean-cast": {},
		"unicorn/no-useless-coercion": {},
		"unicorn/no-useless-collection-argument": {},
		"unicorn/no-useless-compound-assignment": {},
		"unicorn/no-useless-concat": {},
		"unicorn/no-useless-continue": {},
		"unicorn/no-useless-delete-check": {},
		"unicorn/no-useless-else": {},
		"unicorn/no-useless-error-capture-stack-trace": {},
		"unicorn/no-useless-fallback-in-spread": {},
		"unicorn/no-useless-iterator-to-array": {},
		"unicorn/no-useless-length-check": {},
		"unicorn/no-useless-logical-operand": {},
		"unicorn/no-useless-override": {},
		"unicorn/no-useless-promise-resolve-reject": {},
		"unicorn/no-useless-re-export": {},
		"unicorn/no-useless-recursion": {},
		"unicorn/no-useless-set-construction": {},
		"unicorn/no-useless-spread": {},
		"unicorn/no-useless-switch-case": {},
		"unicorn/no-useless-template-literals": {},
		"unicorn/no-useless-undefined": {},
		"unicorn/no-using-resource-escape": {},
		"unicorn/no-xor-as-exponentiation": {},
		"unicorn/no-zero-fractions": {},
		"unicorn/number-literal-case": {},
		"unicorn/numeric-separators-style": {},
		"unicorn/operator-assignment": {},
		"unicorn/prefer-abort-signal-any": {},
		"unicorn/prefer-abort-signal-timeout": {},
		"unicorn/prefer-add-event-listener": {},
		"unicorn/prefer-add-event-listener-options": {},
		"unicorn/prefer-aggregate-error": {},
		"unicorn/prefer-array-find": {},
		"unicorn/prefer-array-flat": {},
		"unicorn/prefer-array-flat-map": {},
		"unicorn/prefer-array-from-async": {},
		"unicorn/prefer-array-from-map": {},
		"unicorn/prefer-array-from-range": {},
		"unicorn/prefer-array-index-of": {},
		"unicorn/prefer-array-iterable-methods": {},
		"unicorn/prefer-array-last-methods": {},
		"unicorn/prefer-array-slice": {},
		"unicorn/prefer-array-some": {},
		"unicorn/prefer-at": {},
		"unicorn/prefer-await": {},
		"unicorn/prefer-bigint-literals": {},
		"unicorn/prefer-blob-reading-methods": {},
		"unicorn/prefer-block-statement-over-iife": {},
		"unicorn/prefer-boolean-return": {},
		"unicorn/prefer-class-fields": {},
		"unicorn/prefer-classlist-toggle": {},
		"unicorn/prefer-code-point": {},
		"unicorn/prefer-combined-guards": {},
		"unicorn/prefer-continue": {},
		"unicorn/prefer-date-now": {},
		"unicorn/prefer-default-parameters": {},
		"unicorn/prefer-direct-iteration": {},
		"unicorn/prefer-dispose": {},
		"unicorn/prefer-dom-node-append": {},
		"unicorn/prefer-dom-node-html-methods": {},
		"unicorn/prefer-dom-node-remove": {},
		"unicorn/prefer-dom-node-replace-children": {},
		"unicorn/prefer-dom-node-text-content": {},
		"unicorn/prefer-early-return": {},
		"unicorn/prefer-else-if": {},
		"unicorn/prefer-error-is-error": {},
		"unicorn/prefer-escaped-irregular-whitespace": {},
		"unicorn/prefer-event-target": {},
		"unicorn/prefer-export-from": {},
		"unicorn/prefer-flat-math-min-max": {},
		"unicorn/prefer-get-or-insert-computed": {},
		"unicorn/prefer-global-number-constants": {},
		"unicorn/prefer-global-this": {},
		"unicorn/prefer-group-by": {},
		"unicorn/prefer-has-check": {},
		"unicorn/prefer-hoisting-branch-code": {},
		"unicorn/prefer-https": {},
		"unicorn/prefer-identifier-import-export-specifiers": {},
		"unicorn/prefer-import-meta-properties": {},
		"unicorn/prefer-includes": {},
		"unicorn/prefer-includes-over-repeated-comparisons": {},
		"unicorn/prefer-iterable-in-constructor": {},
		"unicorn/prefer-iterator-concat": {},
		"unicorn/prefer-iterator-helpers": {},
		"unicorn/prefer-iterator-to-array": {},
		"unicorn/prefer-iterator-to-array-at-end": {},
		"unicorn/prefer-iterator-zip": {},
		"unicorn/prefer-json-import": {},
		"unicorn/prefer-keyboard-event-key": {},
		"unicorn/prefer-literal-ascii": {},
		"unicorn/prefer-location-assign": {},
		"unicorn/prefer-logical-operator-over-ternary": {},
		"unicorn/prefer-map-from-entries": {},
		"unicorn/prefer-math-abs": {},
		"unicorn/prefer-math-constants": {},
		"unicorn/prefer-math-min-max": {},
		"unicorn/prefer-math-trunc": {},
		"unicorn/prefer-minimal-ternary": {},
		"unicorn/prefer-modern-dom-apis": {},
		"unicorn/prefer-modern-math-apis": {},
		"unicorn/prefer-module": {},
		"unicorn/prefer-native-coercion-functions": {},
		"unicorn/prefer-negative-index": {},
		"unicorn/prefer-node-protocol": {},
		"unicorn/prefer-number-coercion": {},
		"unicorn/prefer-number-is-safe-integer": {},
		"unicorn/prefer-number-properties": {},
		"unicorn/prefer-object-define-properties": {},
		"unicorn/prefer-object-destructuring-defaults": {},
		"unicorn/prefer-object-from-entries": {},
		"unicorn/prefer-object-iterable-methods": {},
		"unicorn/prefer-observer-apis": {},
		"unicorn/prefer-optional-catch-binding": {},
		"unicorn/prefer-path2d": {},
		"unicorn/prefer-private-class-fields": {},
		"unicorn/prefer-promise-static-methods": {},
		"unicorn/prefer-promise-try": {},
		"unicorn/prefer-promise-with-resolvers": {},
		"unicorn/prefer-prototype-methods": {},
		"unicorn/prefer-query-selector": {},
		"unicorn/prefer-queue-microtask": {},
		"unicorn/prefer-reflect-apply": {},
		"unicorn/prefer-regexp-escape": {},
		"unicorn/prefer-regexp-test": {},
		"unicorn/prefer-response-static-json": {},
		"unicorn/prefer-scoped-selector": {},
		"unicorn/prefer-set-has": {},
		"unicorn/prefer-set-methods": {},
		"unicorn/prefer-set-size": {},
		"unicorn/prefer-short-arrow-method": {},
		"unicorn/prefer-short-escape-sequences": {},
		"unicorn/prefer-simple-condition-first": {},
		"unicorn/prefer-simple-sort-comparator": {},
		"unicorn/prefer-simplified-conditions": {},
		"unicorn/prefer-single-array-predicate": {},
		"unicorn/prefer-single-call": {},
		"unicorn/prefer-single-object-destructuring": {},
		"unicorn/prefer-single-replace": {},
		"unicorn/prefer-smaller-scope": {},
		"unicorn/prefer-split-limit": {},
		"unicorn/prefer-spread": {},
		"unicorn/prefer-string-match-all": {},
		"unicorn/prefer-string-pad-start-end": {},
		"unicorn/prefer-string-raw": {},
		"unicorn/prefer-string-repeat": {},
		"unicorn/prefer-string-replace-all": {},
		"unicorn/prefer-string-slice": {},
		"unicorn/prefer-string-starts-ends-with": {},
		"unicorn/prefer-string-trim-start-end": {},
		"unicorn/prefer-structured-clone": {},
		"unicorn/prefer-switch": {},
		"unicorn/prefer-temporal": {},
		"unicorn/prefer-temporal-conversion": {},
		"unicorn/prefer-ternary": {},
		"unicorn/prefer-then-catch": {},
		"unicorn/prefer-toggle-attribute": {},
		"unicorn/prefer-top-level-await": {},
		"unicorn/prefer-type-error": {},
		"unicorn/prefer-type-literal-last": {},
		"unicorn/prefer-uint8array-base64": {},
		"unicorn/prefer-uint8array-hex": {},
		"unicorn/prefer-unary-minus": {},
		"unicorn/prefer-unicode-code-point-escapes": {},
		"unicorn/prefer-url-can-parse": {},
		"unicorn/prefer-url-href": {},
		"unicorn/prefer-url-search-parameters": {},
		"unicorn/prefer-while-loop-condition": {},
		"unicorn/relative-url-style": {},
		"unicorn/require-array-join-separator": {},
		"unicorn/require-array-sort-compare": {},
		"unicorn/require-css-escape": {},
		"unicorn/require-frontmatter-fields": {},
		"unicorn/require-module-attributes": {},
		"unicorn/require-module-specifiers": {},
		"unicorn/require-number-to-fixed-digits-argument": {},
		"unicorn/require-passive-events": {},
		"unicorn/require-post-message-target-origin": {},
		"unicorn/require-proxy-trap-boolean-return": {},
		"unicorn/require-text-decoder-streaming": {},
		"unicorn/single-line-block-comment-style": {},
		"unicorn/string-content": {},
		"unicorn/switch-case-braces": {},
		"unicorn/switch-case-break-position": {},
		"unicorn/template-indent": {},
		"unicorn/text-encoding-identifier-case": {},
		"unicorn/throw-new-error": {},
		"unicorn/try-complexity": {},
		"unicorn/no-unused-array-method-return": {},
		"unicorn/better-regex": {},
		"unicorn/no-instanceof-array": {},
		"unicorn/no-length-as-slice-end": {},
		"unicorn/no-hex-escape": {},
		"unicorn/no-array-push-push": {},
		"unicorn/prevent-abbreviations": {},
		"unicorn/prefer-json-parse-buffer": {},
		"unicorn/prefer-dom-node-dataset": {},
		"unicorn/no-deprecated-css-features": {},
		"unicorn/no-duplicate-css-selectors": {},
		"unicorn/no-duplicate-font-family-names": {},
		"unicorn/no-invalid-media-features": {},
		"unicorn/no-nesting-with-mixed-specificity": {},
		"unicorn/no-redundant-nested-style-rules": {},
		"unicorn/no-unknown-css-annotations": {},
		"unicorn/no-unknown-pseudo-selectors": {},
		"unicorn/no-unscoped-css-nesting-selector": {},
		"unicorn/prefer-explicit-viewport-units": {},
		"unicorn/prefer-media-feature-range-syntax": {}
	},
	"typescript": {
		"ts/adjacent-overload-signatures": {
			"requires": [
				"typescriptSyntax"
			]
		},
		"ts/array-type": {
			"requires": [
				"typescriptSyntax"
			]
		},
		"ts/await-thenable": {
			"requires": [
				"typescriptSyntax",
				"typeInformation"
			]
		},
		"ts/ban-ts-comment": {
			"requires": [
				"typescriptSyntax"
			]
		},
		"ts/ban-tslint-comment": {
			"requires": [
				"typescriptSyntax"
			]
		},
		"ts/class-literal-property-style": {
			"requires": [
				"typescriptSyntax"
			]
		},
		"ts/class-methods-use-this": {
			"requires": [
				"typescriptSyntax"
			]
		},
		"ts/consistent-generic-constructors": {
			"requires": [
				"typescriptSyntax"
			]
		},
		"ts/consistent-indexed-object-style": {
			"requires": [
				"typescriptSyntax"
			]
		},
		"ts/consistent-return": {
			"requires": [
				"typescriptSyntax",
				"typeInformation"
			]
		},
		"ts/consistent-type-assertions": {
			"requires": [
				"typescriptSyntax"
			]
		},
		"ts/consistent-type-definitions": {
			"requires": [
				"typescriptSyntax"
			]
		},
		"ts/consistent-type-exports": {
			"requires": [
				"typescriptSyntax",
				"typeInformation"
			]
		},
		"ts/consistent-type-imports": {
			"requires": [
				"typescriptSyntax"
			]
		},
		"ts/default-param-last": {
			"requires": [
				"typescriptSyntax"
			]
		},
		"ts/dot-notation": {
			"requires": [
				"typescriptSyntax",
				"typeInformation"
			]
		},
		"ts/explicit-function-return-type": {
			"requires": [
				"typescriptSyntax"
			]
		},
		"ts/explicit-member-accessibility": {
			"requires": [
				"typescriptSyntax"
			]
		},
		"ts/explicit-module-boundary-types": {
			"requires": [
				"typescriptSyntax"
			]
		},
		"ts/init-declarations": {
			"requires": [
				"typescriptSyntax"
			]
		},
		"ts/max-params": {
			"requires": [
				"typescriptSyntax"
			]
		},
		"ts/member-ordering": {
			"requires": [
				"typescriptSyntax"
			]
		},
		"ts/method-signature-style": {
			"requires": [
				"typescriptSyntax"
			]
		},
		"ts/naming-convention": {
			"requires": [
				"typescriptSyntax",
				"typeInformation"
			]
		},
		"ts/no-array-constructor": {
			"requires": [
				"typescriptSyntax"
			]
		},
		"ts/no-array-delete": {
			"requires": [
				"typescriptSyntax",
				"typeInformation"
			]
		},
		"ts/no-base-to-string": {
			"requires": [
				"typescriptSyntax",
				"typeInformation"
			]
		},
		"ts/no-confusing-non-null-assertion": {
			"requires": [
				"typescriptSyntax"
			]
		},
		"ts/no-confusing-void-expression": {
			"requires": [
				"typescriptSyntax",
				"typeInformation"
			]
		},
		"ts/no-deprecated": {
			"requires": [
				"typescriptSyntax",
				"typeInformation"
			]
		},
		"ts/no-dupe-class-members": {
			"requires": [
				"typescriptSyntax"
			]
		},
		"ts/no-duplicate-enum-values": {
			"requires": [
				"typescriptSyntax"
			]
		},
		"ts/no-duplicate-type-constituents": {
			"requires": [
				"typescriptSyntax",
				"typeInformation"
			]
		},
		"ts/no-dynamic-delete": {
			"requires": [
				"typescriptSyntax"
			]
		},
		"ts/no-empty-function": {
			"requires": [
				"typescriptSyntax"
			]
		},
		"ts/no-empty-interface": {
			"requires": [
				"typescriptSyntax"
			]
		},
		"ts/no-empty-object-type": {
			"requires": [
				"typescriptSyntax"
			]
		},
		"ts/no-explicit-any": {
			"requires": [
				"typescriptSyntax"
			]
		},
		"ts/no-extra-non-null-assertion": {
			"requires": [
				"typescriptSyntax"
			]
		},
		"ts/no-extraneous-class": {
			"requires": [
				"typescriptSyntax"
			]
		},
		"ts/no-floating-promises": {
			"requires": [
				"typescriptSyntax",
				"typeInformation"
			]
		},
		"ts/no-for-in-array": {
			"requires": [
				"typescriptSyntax",
				"typeInformation"
			]
		},
		"ts/no-generated-empty-object-type": {
			"requires": [
				"typescriptSyntax",
				"typeInformation"
			]
		},
		"ts/no-implied-eval": {
			"requires": [
				"typescriptSyntax",
				"typeInformation"
			]
		},
		"ts/no-import-type-side-effects": {
			"requires": [
				"typescriptSyntax"
			]
		},
		"ts/no-inferrable-types": {
			"requires": [
				"typescriptSyntax"
			]
		},
		"ts/no-invalid-this": {
			"requires": [
				"typescriptSyntax"
			]
		},
		"ts/no-invalid-void-type": {
			"requires": [
				"typescriptSyntax"
			]
		},
		"ts/no-loop-func": {
			"requires": [
				"typescriptSyntax"
			]
		},
		"ts/no-loss-of-precision": {
			"requires": [
				"typescriptSyntax"
			]
		},
		"ts/no-magic-numbers": {
			"requires": [
				"typescriptSyntax"
			]
		},
		"ts/no-meaningless-void-operator": {
			"requires": [
				"typescriptSyntax",
				"typeInformation"
			]
		},
		"ts/no-misused-new": {
			"requires": [
				"typescriptSyntax"
			]
		},
		"ts/no-misused-promises": {
			"requires": [
				"typescriptSyntax",
				"typeInformation"
			]
		},
		"ts/no-misused-spread": {
			"requires": [
				"typescriptSyntax",
				"typeInformation"
			]
		},
		"ts/no-mixed-enums": {
			"requires": [
				"typescriptSyntax",
				"typeInformation"
			]
		},
		"ts/no-namespace": {
			"requires": [
				"typescriptSyntax"
			]
		},
		"ts/no-non-null-asserted-nullish-coalescing": {
			"requires": [
				"typescriptSyntax"
			]
		},
		"ts/no-non-null-asserted-optional-chain": {
			"requires": [
				"typescriptSyntax"
			]
		},
		"ts/no-non-null-assertion": {
			"requires": [
				"typescriptSyntax"
			]
		},
		"ts/no-redeclare": {
			"requires": [
				"typescriptSyntax"
			]
		},
		"ts/no-redundant-type-constituents": {
			"requires": [
				"typescriptSyntax",
				"typeInformation"
			]
		},
		"ts/no-require-imports": {
			"requires": [
				"typescriptSyntax"
			]
		},
		"ts/no-restricted-imports": {
			"requires": [
				"typescriptSyntax"
			]
		},
		"ts/no-restricted-types": {
			"requires": [
				"typescriptSyntax"
			]
		},
		"ts/no-shadow": {
			"requires": [
				"typescriptSyntax"
			]
		},
		"ts/no-this-alias": {
			"requires": [
				"typescriptSyntax"
			]
		},
		"ts/no-type-alias": {
			"requires": [
				"typescriptSyntax"
			]
		},
		"ts/no-unnecessary-boolean-literal-compare": {
			"requires": [
				"typescriptSyntax",
				"typeInformation"
			]
		},
		"ts/no-unnecessary-condition": {
			"requires": [
				"typescriptSyntax",
				"typeInformation"
			]
		},
		"ts/no-unnecessary-parameter-property-assignment": {
			"requires": [
				"typescriptSyntax"
			]
		},
		"ts/no-unnecessary-qualifier": {
			"requires": [
				"typescriptSyntax",
				"typeInformation"
			]
		},
		"ts/no-unnecessary-template-expression": {
			"requires": [
				"typescriptSyntax",
				"typeInformation"
			]
		},
		"ts/no-unnecessary-type-arguments": {
			"requires": [
				"typescriptSyntax",
				"typeInformation"
			]
		},
		"ts/no-unnecessary-type-assertion": {
			"requires": [
				"typescriptSyntax",
				"typeInformation"
			]
		},
		"ts/no-unnecessary-type-constraint": {
			"requires": [
				"typescriptSyntax"
			]
		},
		"ts/no-unnecessary-type-conversion": {
			"requires": [
				"typescriptSyntax",
				"typeInformation"
			]
		},
		"ts/no-unnecessary-type-parameters": {
			"requires": [
				"typescriptSyntax",
				"typeInformation"
			]
		},
		"ts/no-unsafe-argument": {
			"requires": [
				"typescriptSyntax",
				"typeInformation"
			]
		},
		"ts/no-unsafe-assignment": {
			"requires": [
				"typescriptSyntax",
				"typeInformation"
			]
		},
		"ts/no-unsafe-call": {
			"requires": [
				"typescriptSyntax",
				"typeInformation"
			]
		},
		"ts/no-unsafe-declaration-merging": {
			"requires": [
				"typescriptSyntax"
			]
		},
		"ts/no-unsafe-enum-assignment": {
			"requires": [
				"typescriptSyntax",
				"typeInformation"
			]
		},
		"ts/no-unsafe-enum-comparison": {
			"requires": [
				"typescriptSyntax",
				"typeInformation"
			]
		},
		"ts/no-unsafe-function-type": {
			"requires": [
				"typescriptSyntax"
			]
		},
		"ts/no-unsafe-member-access": {
			"requires": [
				"typescriptSyntax",
				"typeInformation"
			]
		},
		"ts/no-unsafe-return": {
			"requires": [
				"typescriptSyntax",
				"typeInformation"
			]
		},
		"ts/no-unsafe-type-assertion": {
			"requires": [
				"typescriptSyntax",
				"typeInformation"
			]
		},
		"ts/no-unsafe-unary-minus": {
			"requires": [
				"typescriptSyntax",
				"typeInformation"
			]
		},
		"ts/no-unused-expressions": {
			"requires": [
				"typescriptSyntax"
			]
		},
		"ts/no-unused-private-class-members": {
			"requires": [
				"typescriptSyntax"
			]
		},
		"ts/no-unused-vars": {
			"requires": [
				"typescriptSyntax"
			]
		},
		"ts/no-use-before-define": {
			"requires": [
				"typescriptSyntax"
			]
		},
		"ts/no-useless-constructor": {
			"requires": [
				"typescriptSyntax"
			]
		},
		"ts/no-useless-default-assignment": {
			"requires": [
				"typescriptSyntax",
				"typeInformation"
			]
		},
		"ts/no-useless-empty-export": {
			"requires": [
				"typescriptSyntax"
			]
		},
		"ts/no-var-requires": {
			"requires": [
				"typescriptSyntax"
			]
		},
		"ts/no-wrapper-object-types": {
			"requires": [
				"typescriptSyntax"
			]
		},
		"ts/non-nullable-type-assertion-style": {
			"requires": [
				"typescriptSyntax",
				"typeInformation"
			]
		},
		"ts/only-throw-error": {
			"requires": [
				"typescriptSyntax",
				"typeInformation"
			]
		},
		"ts/parameter-properties": {
			"requires": [
				"typescriptSyntax"
			]
		},
		"ts/prefer-as-const": {
			"requires": [
				"typescriptSyntax"
			]
		},
		"ts/prefer-destructuring": {
			"requires": [
				"typescriptSyntax",
				"typeInformation"
			]
		},
		"ts/prefer-enum-initializers": {
			"requires": [
				"typescriptSyntax"
			]
		},
		"ts/prefer-find": {
			"requires": [
				"typescriptSyntax",
				"typeInformation"
			]
		},
		"ts/prefer-for-of": {
			"requires": [
				"typescriptSyntax"
			]
		},
		"ts/prefer-function-type": {
			"requires": [
				"typescriptSyntax"
			]
		},
		"ts/prefer-includes": {
			"requires": [
				"typescriptSyntax",
				"typeInformation"
			]
		},
		"ts/prefer-literal-enum-member": {
			"requires": [
				"typescriptSyntax"
			]
		},
		"ts/prefer-namespace-keyword": {
			"requires": [
				"typescriptSyntax"
			]
		},
		"ts/prefer-nullish-coalescing": {
			"requires": [
				"typescriptSyntax",
				"typeInformation"
			]
		},
		"ts/prefer-optional-chain": {
			"requires": [
				"typescriptSyntax",
				"typeInformation"
			]
		},
		"ts/prefer-promise-reject-errors": {
			"requires": [
				"typescriptSyntax",
				"typeInformation"
			]
		},
		"ts/prefer-readonly": {
			"requires": [
				"typescriptSyntax",
				"typeInformation"
			]
		},
		"ts/prefer-readonly-parameter-types": {
			"requires": [
				"typescriptSyntax",
				"typeInformation"
			]
		},
		"ts/prefer-reduce-type-parameter": {
			"requires": [
				"typescriptSyntax",
				"typeInformation"
			]
		},
		"ts/prefer-regexp-exec": {
			"requires": [
				"typescriptSyntax",
				"typeInformation"
			]
		},
		"ts/prefer-return-this-type": {
			"requires": [
				"typescriptSyntax",
				"typeInformation"
			]
		},
		"ts/prefer-string-starts-ends-with": {
			"requires": [
				"typescriptSyntax",
				"typeInformation"
			]
		},
		"ts/prefer-ts-expect-error": {
			"requires": [
				"typescriptSyntax"
			]
		},
		"ts/promise-function-async": {
			"requires": [
				"typescriptSyntax",
				"typeInformation"
			]
		},
		"ts/related-getter-setter-pairs": {
			"requires": [
				"typescriptSyntax",
				"typeInformation"
			]
		},
		"ts/require-array-sort-compare": {
			"requires": [
				"typescriptSyntax",
				"typeInformation"
			]
		},
		"ts/require-await": {
			"requires": [
				"typescriptSyntax",
				"typeInformation"
			]
		},
		"ts/restrict-plus-operands": {
			"requires": [
				"typescriptSyntax",
				"typeInformation"
			]
		},
		"ts/restrict-template-expressions": {
			"requires": [
				"typescriptSyntax",
				"typeInformation"
			]
		},
		"ts/return-await": {
			"requires": [
				"typescriptSyntax",
				"typeInformation"
			]
		},
		"ts/sort-type-constituents": {
			"requires": [
				"typescriptSyntax"
			]
		},
		"ts/strict-boolean-expressions": {
			"requires": [
				"typescriptSyntax",
				"typeInformation"
			]
		},
		"ts/strict-void-return": {
			"requires": [
				"typescriptSyntax",
				"typeInformation"
			]
		},
		"ts/switch-exhaustiveness-check": {
			"requires": [
				"typescriptSyntax",
				"typeInformation"
			]
		},
		"ts/triple-slash-reference": {
			"requires": [
				"typescriptSyntax"
			]
		},
		"ts/typedef": {
			"requires": [
				"typescriptSyntax"
			]
		},
		"ts/unbound-method": {
			"requires": [
				"typescriptSyntax",
				"typeInformation"
			]
		},
		"ts/unified-signatures": {
			"requires": [
				"typescriptSyntax"
			]
		},
		"ts/use-unknown-in-catch-callback-variable": {
			"requires": [
				"typescriptSyntax",
				"typeInformation"
			]
		}
	},
	"regexp": {
		"regexp/confusing-quantifier": {},
		"regexp/control-character-escape": {},
		"regexp/grapheme-string-literal": {},
		"regexp/hexadecimal-escape": {},
		"regexp/letter-case": {},
		"regexp/match-any": {},
		"regexp/negation": {},
		"regexp/no-contradiction-with-assertion": {},
		"regexp/no-control-character": {},
		"regexp/no-dupe-characters-character-class": {},
		"regexp/no-dupe-disjunctions": {},
		"regexp/no-empty-alternative": {},
		"regexp/no-empty-capturing-group": {},
		"regexp/no-empty-character-class": {},
		"regexp/no-empty-group": {},
		"regexp/no-empty-lookarounds-assertion": {},
		"regexp/no-empty-string-literal": {},
		"regexp/no-escape-backspace": {},
		"regexp/no-extra-lookaround-assertions": {},
		"regexp/no-invalid-regexp": {},
		"regexp/no-invisible-character": {},
		"regexp/no-lazy-ends": {},
		"regexp/no-legacy-features": {},
		"regexp/no-misleading-capturing-group": {},
		"regexp/no-misleading-unicode-character": {},
		"regexp/no-missing-g-flag": {},
		"regexp/no-non-standard-flag": {},
		"regexp/no-obscure-range": {},
		"regexp/no-octal": {},
		"regexp/no-optional-assertion": {},
		"regexp/no-potentially-useless-backreference": {},
		"regexp/no-standalone-backslash": {},
		"regexp/no-super-linear-backtracking": {},
		"regexp/no-super-linear-move": {},
		"regexp/no-trivially-nested-assertion": {},
		"regexp/no-trivially-nested-quantifier": {},
		"regexp/no-unused-capturing-group": {},
		"regexp/no-useless-assertions": {},
		"regexp/no-useless-backreference": {},
		"regexp/no-useless-character-class": {},
		"regexp/no-useless-dollar-replacements": {},
		"regexp/no-useless-escape": {},
		"regexp/no-useless-flag": {},
		"regexp/no-useless-lazy": {},
		"regexp/no-useless-non-capturing-group": {},
		"regexp/no-useless-quantifier": {},
		"regexp/no-useless-range": {},
		"regexp/no-useless-set-operand": {},
		"regexp/no-useless-string-literal": {},
		"regexp/no-useless-two-nums-quantifier": {},
		"regexp/no-zero-quantifier": {},
		"regexp/optimal-lookaround-quantifier": {},
		"regexp/optimal-quantifier-concatenation": {},
		"regexp/prefer-character-class": {},
		"regexp/prefer-d": {},
		"regexp/prefer-escape-replacement-dollar-char": {},
		"regexp/prefer-lookaround": {},
		"regexp/prefer-named-backreference": {},
		"regexp/prefer-named-capture-group": {},
		"regexp/prefer-named-replacement": {},
		"regexp/prefer-plus-quantifier": {},
		"regexp/prefer-predefined-assertion": {},
		"regexp/prefer-quantifier": {},
		"regexp/prefer-question-quantifier": {},
		"regexp/prefer-range": {},
		"regexp/prefer-regexp-exec": {},
		"regexp/prefer-regexp-test": {},
		"regexp/prefer-result-array-groups": {},
		"regexp/prefer-set-operation": {},
		"regexp/prefer-star-quantifier": {},
		"regexp/prefer-unicode-codepoint-escapes": {},
		"regexp/prefer-w": {},
		"regexp/require-unicode-regexp": {},
		"regexp/require-unicode-sets-regexp": {},
		"regexp/simplify-set-operations": {},
		"regexp/sort-alternatives": {},
		"regexp/sort-character-class-elements": {},
		"regexp/sort-flags": {},
		"regexp/strict": {},
		"regexp/unicode-escape": {},
		"regexp/unicode-property": {},
		"regexp/use-ignore-case": {}
	},
	"test": {
		"test/consistent-each-for": {},
		"test/consistent-test-filename": {},
		"test/consistent-test-it": {},
		"test/consistent-vitest-vi": {},
		"test/expect-expect": {},
		"test/hoisted-apis-on-top": {},
		"test/max-expects": {},
		"test/max-nested-describe": {},
		"test/no-alias-methods": {},
		"test/no-commented-out-tests": {},
		"test/no-conditional-expect": {},
		"test/no-conditional-in-test": {},
		"test/no-conditional-tests": {},
		"test/no-disabled-tests": {},
		"test/no-done-callback": {},
		"test/no-duplicate-hooks": {},
		"test/no-focused-tests": {},
		"test/no-hooks": {},
		"test/no-identical-title": {},
		"test/no-import-node-test": {},
		"test/no-importing-vitest-globals": {},
		"test/no-interpolation-in-snapshots": {},
		"test/no-large-snapshots": {},
		"test/no-mocks-import": {},
		"test/no-restricted-matchers": {},
		"test/no-restricted-vi-methods": {},
		"test/no-standalone-expect": {},
		"test/no-test-prefixes": {},
		"test/no-test-return-statement": {},
		"test/no-unneeded-async-expect-function": {},
		"test/padding-around-after-all-blocks": {},
		"test/padding-around-after-each-blocks": {},
		"test/padding-around-all": {},
		"test/padding-around-before-all-blocks": {},
		"test/padding-around-before-each-blocks": {},
		"test/padding-around-describe-blocks": {},
		"test/padding-around-expect-groups": {},
		"test/padding-around-test-blocks": {},
		"test/prefer-called-exactly-once-with": {},
		"test/prefer-called-once": {},
		"test/prefer-called-times": {},
		"test/prefer-called-with": {},
		"test/prefer-comparison-matcher": {},
		"test/prefer-describe-function-title": {},
		"test/prefer-each": {},
		"test/prefer-equality-matcher": {},
		"test/prefer-expect-assertions": {},
		"test/prefer-expect-resolves": {},
		"test/prefer-expect-type-of": {},
		"test/prefer-hooks-in-order": {},
		"test/prefer-hooks-on-top": {},
		"test/prefer-import-in-mock": {},
		"test/prefer-importing-vitest-globals": {},
		"test/prefer-lowercase-title": {},
		"test/prefer-mock-promise-shorthand": {},
		"test/prefer-mock-return-shorthand": {},
		"test/prefer-snapshot-hint": {},
		"test/prefer-spy-on": {},
		"test/prefer-strict-boolean-matchers": {},
		"test/prefer-strict-equal": {},
		"test/prefer-to-be-falsy": {},
		"test/prefer-to-be-object": {},
		"test/prefer-to-be-truthy": {},
		"test/prefer-to-be": {},
		"test/prefer-to-contain": {},
		"test/prefer-to-have-been-called-times": {},
		"test/prefer-to-have-length": {},
		"test/prefer-todo": {},
		"test/prefer-vi-mocked": {},
		"test/require-awaited-expect-poll": {},
		"test/require-hook": {},
		"test/require-local-test-context-for-concurrent-snapshots": {},
		"test/require-mock-type-parameters": {},
		"test/require-test-timeout": {},
		"test/require-to-throw-message": {},
		"test/require-top-level-describe": {},
		"test/unbound-method": {
			"requires": [
				"typeInformation"
			]
		},
		"test/valid-describe-callback": {},
		"test/valid-expect-in-promise": {},
		"test/valid-expect": {},
		"test/valid-title": {},
		"test/warn-todo": {},
		"test/no-only-tests": {}
	},
	"jsonc": {
		"jsonc/array-bracket-newline": {},
		"jsonc/array-bracket-spacing": {},
		"jsonc/array-element-newline": {},
		"jsonc/auto": {},
		"jsonc/comma-dangle": {},
		"jsonc/comma-style": {},
		"jsonc/indent": {},
		"jsonc/key-name-casing": {},
		"jsonc/key-spacing": {},
		"jsonc/no-bigint-literals": {},
		"jsonc/no-binary-expression": {},
		"jsonc/no-binary-numeric-literals": {},
		"jsonc/no-comments": {},
		"jsonc/no-dupe-keys": {},
		"jsonc/no-escape-sequence-in-identifier": {},
		"jsonc/no-floating-decimal": {},
		"jsonc/no-hexadecimal-numeric-literals": {},
		"jsonc/no-infinity": {},
		"jsonc/no-irregular-whitespace": {},
		"jsonc/no-multi-str": {},
		"jsonc/no-nan": {},
		"jsonc/no-number-props": {},
		"jsonc/no-numeric-separators": {},
		"jsonc/no-octal-escape": {},
		"jsonc/no-octal-numeric-literals": {},
		"jsonc/no-octal": {},
		"jsonc/no-parenthesized": {},
		"jsonc/no-plus-sign": {},
		"jsonc/no-regexp-literals": {},
		"jsonc/no-sparse-arrays": {},
		"jsonc/no-template-literals": {},
		"jsonc/no-undefined-value": {},
		"jsonc/no-unicode-codepoint-escapes": {},
		"jsonc/no-useless-escape": {},
		"jsonc/object-curly-newline": {},
		"jsonc/object-curly-spacing": {},
		"jsonc/object-property-newline": {},
		"jsonc/quote-props": {},
		"jsonc/quotes": {},
		"jsonc/sort-array-values": {},
		"jsonc/sort-keys": {},
		"jsonc/space-unary-ops": {},
		"jsonc/valid-json-number": {},
		"jsonc/vue-custom-block/no-parsing-error": {}
	},
	"yaml": {
		"yaml/block-mapping-colon-indicator-newline": {},
		"yaml/block-mapping-question-indicator-newline": {},
		"yaml/block-mapping": {},
		"yaml/block-sequence-hyphen-indicator-newline": {},
		"yaml/block-sequence": {},
		"yaml/file-extension": {},
		"yaml/flow-mapping-curly-newline": {},
		"yaml/flow-mapping-curly-spacing": {},
		"yaml/flow-sequence-bracket-newline": {},
		"yaml/flow-sequence-bracket-spacing": {},
		"yaml/indent": {},
		"yaml/key-name-casing": {},
		"yaml/key-spacing": {},
		"yaml/max-len": {},
		"yaml/no-boolean-key": {},
		"yaml/no-empty-document": {},
		"yaml/no-empty-key": {},
		"yaml/no-empty-mapping-value": {},
		"yaml/no-empty-sequence-entry": {},
		"yaml/no-irregular-whitespace": {},
		"yaml/no-multiple-empty-lines": {},
		"yaml/no-tab-indent": {},
		"yaml/no-trailing-spaces": {},
		"yaml/no-trailing-zeros": {},
		"yaml/plain-scalar": {},
		"yaml/quotes": {},
		"yaml/require-string-key": {},
		"yaml/sort-keys": {},
		"yaml/sort-sequence-values": {},
		"yaml/spaced-comment": {},
		"yaml/vue-custom-block/no-parsing-error": {}
	},
	"toml": {
		"toml/array-bracket-newline": {},
		"toml/array-bracket-spacing": {},
		"toml/array-element-newline": {},
		"toml/comma-style": {},
		"toml/indent": {},
		"toml/inline-table-curly-newline": {},
		"toml/inline-table-curly-spacing": {},
		"toml/inline-table-key-value-newline": {},
		"toml/key-spacing": {},
		"toml/keys-order": {},
		"toml/no-mixed-type-in-array": {},
		"toml/no-non-decimal-integer": {},
		"toml/no-space-dots": {},
		"toml/no-unreadable-number-separator": {},
		"toml/padding-line-between-pairs": {},
		"toml/padding-line-between-tables": {},
		"toml/precision-of-fractional-seconds": {},
		"toml/precision-of-integer": {},
		"toml/quoted-keys": {},
		"toml/space-eq-sign": {},
		"toml/spaced-comment": {},
		"toml/table-bracket-spacing": {},
		"toml/tables-order": {},
		"toml/vue-custom-block/no-parsing-error": {}
	},
	"markdown": {
		"markdown/fenced-code-language": {},
		"markdown/fenced-code-meta": {},
		"markdown/heading-increment": {},
		"markdown/no-bare-urls": {},
		"markdown/no-duplicate-definitions": {},
		"markdown/no-duplicate-headings": {},
		"markdown/no-empty-definitions": {},
		"markdown/no-empty-images": {},
		"markdown/no-empty-links": {},
		"markdown/no-html": {},
		"markdown/no-invalid-label-refs": {},
		"markdown/no-missing-atx-heading-space": {},
		"markdown/no-missing-label-refs": {},
		"markdown/no-missing-link-fragments": {},
		"markdown/no-multiple-h1": {},
		"markdown/no-reference-like-urls": {},
		"markdown/no-reversed-media-syntax": {},
		"markdown/no-space-in-emphasis": {},
		"markdown/no-unused-definitions": {},
		"markdown/require-alt-text": {},
		"markdown/table-column-count": {}
	},
	"pnpm": {
		"pnpm/json-enforce-catalog": {},
		"pnpm/json-valid-catalog": {},
		"pnpm/json-prefer-workspace-settings": {},
		"pnpm/yaml-no-unused-catalog-item": {},
		"pnpm/yaml-no-duplicate-catalog-item": {},
		"pnpm/yaml-no-anonymous-catalog": {},
		"pnpm/yaml-valid-packages": {},
		"pnpm/yaml-enforce-settings": {},
		"pnpm/yaml-blank-lines": {}
	}
}
export const bindings: Record<string, string[]> = {
	"stylistic": [
		"antfu",
		pluginNamespaces['@stylistic']
	],
	"imports": [
		"antfu",
		pluginNamespaces['import-lite']
	],
	"javascript": [
		"antfu"
	],
	"unusedImports": [
		"unused-imports"
	],
	"eslintComments": [
		"eslint-comments"
	],
	"command": [
		"command"
	],
	"perfectionist": [
		"perfectionist"
	],
	"node": [
		pluginNamespaces['n']
	],
	"jsdoc": [
		"jsdoc"
	],
	"e18e": [
		"e18e"
	],
	"unicorn": [
		"unicorn"
	],
	"typescript": [
		pluginNamespaces['@typescript-eslint']
	],
	"regexp": [
		"regexp"
	],
	"test": [
		pluginNamespaces.vitest
	],
	"jsonc": [
		"jsonc"
	],
	"yaml": [
		pluginNamespaces['yml']
	],
	"toml": [
		"toml"
	],
	"markdown": [
		"markdown"
	],
	"pnpm": [
		"pnpm"
	]
}
