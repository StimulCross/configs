// Generated from installed rule schemas. Do not edit.
// schemas-sha256: 9bae7d07c3feb1f0553388e720b06a5ae7c8a9ac53ee6566de2691e5c9a10e61
declare namespace R0 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[(("all" | "local") | {
  /**
   * Whether to check all, some, or no arguments.
   */
  args?: ("all" | "after-used" | "none")
  /**
   * Regular expressions of argument names to not check for usage.
   */
  argsIgnorePattern?: string
  /**
   * Whether to check catch block arguments.
   */
  caughtErrors?: ("all" | "none")
  /**
   * Regular expressions of catch block argument names to not check for usage.
   */
  caughtErrorsIgnorePattern?: string
  /**
   * Regular expressions of destructured array variable names to not check for usage.
   */
  destructuredArrayIgnorePattern?: string
  /**
   * Configurable automatic fixes for different types of unused variables.
   */
  enableAutofixRemoval?: {
    /**
     * Whether to enable automatic removal of unused imports.
     */
    imports?: boolean
  }
  /**
   * Whether to ignore classes with at least one static initialization block.
   */
  ignoreClassWithStaticInitBlock?: boolean
  /**
   * Whether to ignore sibling properties in `...` destructuring.
   */
  ignoreRestSiblings?: boolean
  /**
   * Whether to ignore using or await using declarations.
   */
  ignoreUsingDeclarations?: boolean
  /**
   * Whether to report variables that match any of the valid ignore pattern options if they have been used.
   */
  reportUsedIgnorePattern?: boolean
  /**
   * Whether to check all variables or only locally-declared variables.
   */
  vars?: ("all" | "local")
  /**
   * Regular expressions of variable names to not check for usage.
   */
  varsIgnorePattern?: string
})]

}
declare namespace R1 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[(("all" | "local") | {
  /**
   * Whether to check all, some, or no arguments.
   */
  args?: ("all" | "after-used" | "none")
  /**
   * Regular expressions of argument names to not check for usage.
   */
  argsIgnorePattern?: string
  /**
   * Whether to check catch block arguments.
   */
  caughtErrors?: ("all" | "none")
  /**
   * Regular expressions of catch block argument names to not check for usage.
   */
  caughtErrorsIgnorePattern?: string
  /**
   * Regular expressions of destructured array variable names to not check for usage.
   */
  destructuredArrayIgnorePattern?: string
  /**
   * Configurable automatic fixes for different types of unused variables.
   */
  enableAutofixRemoval?: {
    /**
     * Whether to enable automatic removal of unused imports.
     */
    imports?: boolean
  }
  /**
   * Whether to ignore classes with at least one static initialization block.
   */
  ignoreClassWithStaticInitBlock?: boolean
  /**
   * Whether to ignore sibling properties in `...` destructuring.
   */
  ignoreRestSiblings?: boolean
  /**
   * Whether to ignore using or await using declarations.
   */
  ignoreUsingDeclarations?: boolean
  /**
   * Whether to report variables that match any of the valid ignore pattern options if they have been used.
   */
  reportUsedIgnorePattern?: boolean
  /**
   * Whether to check all variables or only locally-declared variables.
   */
  vars?: ("all" | "local")
  /**
   * Regular expressions of variable names to not check for usage.
   */
  varsIgnorePattern?: string
})]

}
export type RuleOptions = {
  "unused-imports/no-unused-imports": R0.Options;
  "unused-imports/no-unused-vars": R1.Options;
};

export type TypedRuleIds = never;
