// Generated from installed rule schemas. Do not edit.
// schemas-sha256: 41d042189582ef1517d78177554a0969ef34491a2e24d3e4a92527c0c961750c
declare namespace R0 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  /**
   * Preferred method for `test`.
   */
  test?: ("each" | "for")
  /**
   * Preferred method for `it`.
   */
  it?: ("each" | "for")
  /**
   * Preferred method for `describe`.
   */
  describe?: ("each" | "for")
  /**
   * Preferred method for `suite`.
   */
  suite?: ("each" | "for")
}]

}
declare namespace R1 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  /**
   * Regex pattern for files that should be treated as tests.
   */
  pattern?: string
  /**
   * Regex pattern used to identify all possible test files.
   */
  allTestPattern?: string
}]

}
declare namespace R2 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  /**
   * Preferred global test function keyword.
   */
  fn?: ("test" | "it")
  /**
   * Preferred test function keyword inside `describe`.
   */
  withinDescribe?: ("test" | "it")
}]

}
declare namespace R3 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  /**
   * Preferred utility keyword to enforce.
   */
  fn?: ("vi" | "vitest")
}]

}
declare namespace R4 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  /**
   * List of function names treated as assertions.
   */
  assertFunctionNames?: string[]
  /**
   * Additional functions that should be treated as test blocks.
   */
  additionalTestBlockFunctions?: string[]
}]

}
declare namespace R5 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R6 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  /**
   * Maximum number of `expect` calls allowed in a test.
   */
  max?: number
}]

}
declare namespace R7 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  /**
   * Maximum allowed nesting depth for `describe` blocks.
   */
  max?: number
}]

}
declare namespace R8 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R9 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R10 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  /**
   * Enable/disable whether expect.assertions() is taken into account
   */
  expectAssertions?: boolean
}]

}
declare namespace R11 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R12 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R13 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R14 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R15 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R16 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  /**
   * Whether the rule should provide an autofix.
   */
  fixable?: boolean
}]

}
declare namespace R17 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  /**
   * This array option controls which Vitest hooks are checked by this rule.
   */
  allow?: ("beforeAll" | "beforeEach" | "afterAll" | "afterEach" | "aroundAll" | "aroundEach")[]
}]

}
declare namespace R18 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R19 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R20 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R21 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R22 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  /**
   * Maximum number of lines allowed in external snapshots.
   */
  maxSize?: number
  /**
   * Maximum number of lines allowed in inline snapshots.
   */
  inlineMaxSize?: number
  /**
   * A map of snapshot absolute file paths to arrays of snapshot names that are allowed to exceed the size limit. Snapshot names can be specified as regular expressions.
   */
  allowedSnapshots?: {
    [k: string]: unknown[]
  }
}]

}
declare namespace R23 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R24 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  block?: string[]
  focus?: string[]
  functions?: string[]
  fix?: boolean
}]

}
declare namespace R25 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  [k: string]: (string | null)
}]

}
declare namespace R26 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  [k: string]: (string | null)
}]

}
declare namespace R27 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  /**
   * Additional functions that should be treated as test blocks.
   */
  additionalTestBlockFunctions?: string[]
}]

}
declare namespace R28 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R29 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R30 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R31 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R32 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R33 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R34 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R35 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R36 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R37 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R38 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R39 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R40 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R41 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R42 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R43 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R44 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R45 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R46 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R47 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  /**
   * Only check test functions declared with the async keyword.
   */
  onlyFunctionsWithAsyncKeyword?: boolean
  /**
   * Only check test functions that contain `expect` inside loops.
   */
  onlyFunctionsWithExpectInLoop?: boolean
  /**
   * Only check test functions that contain `expect` in callbacks.
   */
  onlyFunctionsWithExpectInCallback?: boolean
  /**
   * Warn when `expect.hasAssertions()` is used instead of `expect.assertions()`.
   */
  disallowHasAssertions?: boolean
}]

}
declare namespace R48 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R49 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R50 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R51 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R52 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  /**
   * Whether the rule should provide an autofix.
   */
  fixable?: boolean
}]

}
declare namespace R53 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R54 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  /**
   * Functions whose titles should be ignored when checking case.
   */
  ignore?: ("describe" | "test" | "it")[]
  /**
   * Title prefixes that are exempt from this rule.
   */
  allowedPrefixes?: string[]
  /**
   * Ignore the first top-level `describe` title.
   */
  ignoreTopLevelDescribe?: boolean
  /**
   * Only require the first character to be lowercase.
   */
  lowercaseFirstCharacterOnly?: boolean
}]

}
declare namespace R55 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R56 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R57 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[("always" | "multi")]

}
declare namespace R58 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R59 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R60 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R61 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R62 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R63 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R64 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R65 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R66 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R67 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R68 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R69 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R70 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R71 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  /**
   * Function calls that are allowed outside of hooks.
   */
  allowedFunctionCalls?: string[]
}]

}
declare namespace R72 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R73 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  /**
   * Also require type parameters for `importActual` and `importMock`.
   */
  checkImportFunctions?: boolean
}]

}
declare namespace R74 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R75 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R76 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  /**
   * Maximum number of `describe` blocks allowed at the top level.
   */
  maxNumberOfTopLevelDescribes?: number
}]

}
declare namespace R77 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  /**
   * Whether to skip checking whether `static` methods are correctly bound.
   */
  ignoreStatic?: boolean
}]

}
declare namespace R78 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R79 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  /**
   * Require awaiting every async assertion.
   */
  alwaysAwait?: boolean
  /**
   * Matchers that should be considered async assertions.
   */
  asyncMatchers?: string[]
  /**
   * Minimum number of arguments allowed for `expect`.
   */
  minArgs?: number
  /**
   * Maximum number of arguments allowed for `expect`.
   */
  maxArgs?: number
}]

}
declare namespace R80 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R81 {
type Options = [];
}
declare namespace R82 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
export type RuleOptions = {
  "test/consistent-each-for": R0.Options;
  "test/consistent-test-filename": R1.Options;
  "test/consistent-test-it": R2.Options;
  "test/consistent-vitest-vi": R3.Options;
  "test/expect-expect": R4.Options;
  "test/hoisted-apis-on-top": R5.Options;
  "test/max-expects": R6.Options;
  "test/max-nested-describe": R7.Options;
  "test/no-alias-methods": R8.Options;
  "test/no-commented-out-tests": R9.Options;
  "test/no-conditional-expect": R10.Options;
  "test/no-conditional-in-test": R11.Options;
  "test/no-conditional-tests": R12.Options;
  "test/no-disabled-tests": R13.Options;
  "test/no-done-callback": R14.Options;
  "test/no-duplicate-hooks": R15.Options;
  "test/no-focused-tests": R16.Options;
  "test/no-hooks": R17.Options;
  "test/no-identical-title": R18.Options;
  "test/no-import-node-test": R19.Options;
  "test/no-importing-vitest-globals": R20.Options;
  "test/no-interpolation-in-snapshots": R21.Options;
  "test/no-large-snapshots": R22.Options;
  "test/no-mocks-import": R23.Options;
  "test/no-only-tests": R24.Options;
  "test/no-restricted-matchers": R25.Options;
  "test/no-restricted-vi-methods": R26.Options;
  "test/no-standalone-expect": R27.Options;
  "test/no-test-prefixes": R28.Options;
  "test/no-test-return-statement": R29.Options;
  "test/no-unneeded-async-expect-function": R30.Options;
  "test/padding-around-after-all-blocks": R31.Options;
  "test/padding-around-after-each-blocks": R32.Options;
  "test/padding-around-all": R33.Options;
  "test/padding-around-before-all-blocks": R34.Options;
  "test/padding-around-before-each-blocks": R35.Options;
  "test/padding-around-describe-blocks": R36.Options;
  "test/padding-around-expect-groups": R37.Options;
  "test/padding-around-test-blocks": R38.Options;
  "test/prefer-called-exactly-once-with": R39.Options;
  "test/prefer-called-once": R40.Options;
  "test/prefer-called-times": R41.Options;
  "test/prefer-called-with": R42.Options;
  "test/prefer-comparison-matcher": R43.Options;
  "test/prefer-describe-function-title": R44.Options;
  "test/prefer-each": R45.Options;
  "test/prefer-equality-matcher": R46.Options;
  "test/prefer-expect-assertions": R47.Options;
  "test/prefer-expect-resolves": R48.Options;
  "test/prefer-expect-type-of": R49.Options;
  "test/prefer-hooks-in-order": R50.Options;
  "test/prefer-hooks-on-top": R51.Options;
  "test/prefer-import-in-mock": R52.Options;
  "test/prefer-importing-vitest-globals": R53.Options;
  "test/prefer-lowercase-title": R54.Options;
  "test/prefer-mock-promise-shorthand": R55.Options;
  "test/prefer-mock-return-shorthand": R56.Options;
  "test/prefer-snapshot-hint": R57.Options;
  "test/prefer-spy-on": R58.Options;
  "test/prefer-strict-boolean-matchers": R59.Options;
  "test/prefer-strict-equal": R60.Options;
  "test/prefer-to-be": R61.Options;
  "test/prefer-to-be-falsy": R62.Options;
  "test/prefer-to-be-object": R63.Options;
  "test/prefer-to-be-truthy": R64.Options;
  "test/prefer-to-contain": R65.Options;
  "test/prefer-to-have-been-called-times": R66.Options;
  "test/prefer-to-have-length": R67.Options;
  "test/prefer-todo": R68.Options;
  "test/prefer-vi-mocked": R69.Options;
  "test/require-awaited-expect-poll": R70.Options;
  "test/require-hook": R71.Options;
  "test/require-local-test-context-for-concurrent-snapshots": R72.Options;
  "test/require-mock-type-parameters": R73.Options;
  "test/require-test-timeout": R74.Options;
  "test/require-to-throw-message": R75.Options;
  "test/require-top-level-describe": R76.Options;
  "test/unbound-method": R77.Options;
  "test/valid-describe-callback": R78.Options;
  "test/valid-expect": R79.Options;
  "test/valid-expect-in-promise": R80.Options;
  "test/valid-title": R81.Options;
  "test/warn-todo": R82.Options;
};

export type TypedRuleIds = "test/unbound-method";
