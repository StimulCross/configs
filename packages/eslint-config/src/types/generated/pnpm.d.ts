// Generated from installed rule schemas. Do not edit.
// schemas-sha256: 2f9fa37995189a297e30eeff0c6c54d48ea660487933de034567a303634636cd
declare namespace R0 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  /**
   * Allowed protocols in specifier to not be converted to catalog
   */
  allowedProtocols?: string[]
  /**
   * Whether to autofix the linting error
   */
  autofix?: boolean
  /**
   * Default catalog to use when moving version to catalog with autofix
   */
  defaultCatalog?: string
  /**
   * Whether to reuse existing catalog when moving version to catalog with autofix
   */
  reuseExistingCatalog?: boolean
  /**
   * Strategy to handle conflicts when adding packages to catalogs
   */
  conflicts?: ("new-catalog" | "overrides" | "error")
  /**
   * Fields to check for catalog
   */
  fields?: string[]
  /**
   * Ignore certain packages that require version specification
   */
  ignores?: string[]
}]

}
declare namespace R1 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  /**
   * Whether to autofix the linting error
   */
  autofix?: boolean
}]

}
declare namespace R2 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  /**
   * Whether to auto insert to catalog if missing
   */
  autoInsert?: boolean
  /**
   * Default specifier to use when auto inserting to catalog
   */
  autoInsertDefaultSpecifier?: string
  /**
   * Whether to autofix the linting error
   */
  autofix?: boolean
  /**
   * Whether to enforce no conflicts when adding packages to catalogs (will create version-specific catalogs)
   */
  enforceNoConflict?: boolean
  /**
   * Fields to check for catalog
   */
  fields?: unknown[]
}]

}
declare namespace R3 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R4 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  /**
   * Whether to autofix the linting error
   */
  autofix?: boolean
  /**
   * Exact settings to enforce, for both keys and values. Auto-fixable.
   */
  settings?: {
    [k: string]: unknown
  }
  /**
   * Required settings fields to enforce, regardless of their values. Not-autofixable.
   */
  requiredFields?: string[]
  /**
   * Forbidden settings fields to enforce, regardless of their values. Not-autofixable.
   */
  forbiddenFields?: string[]
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
  allow?: string[]
  /**
   * Determines what constitutes a duplicate: "name-only" errors on any duplicate package name, "exact-version" only errors on identical version strings
   */
  checkDuplicates?: ("name-only" | "exact-version")
}]

}
declare namespace R7 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R8 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
export type RuleOptions = {
  "pnpm/json-enforce-catalog": R0.Options;
  "pnpm/json-prefer-workspace-settings": R1.Options;
  "pnpm/json-valid-catalog": R2.Options;
  "pnpm/yaml-blank-lines": R3.Options;
  "pnpm/yaml-enforce-settings": R4.Options;
  "pnpm/yaml-no-anonymous-catalog": R5.Options;
  "pnpm/yaml-no-duplicate-catalog-item": R6.Options;
  "pnpm/yaml-no-unused-catalog-item": R7.Options;
  "pnpm/yaml-valid-packages": R8.Options;
};

export type TypedRuleIds = never;
