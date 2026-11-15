// Generated from installed rule schemas. Do not edit.
// schemas-sha256: bf791ceeb430ac5eb37e23c22762bd220137ffbf351f556d579434b2213f48a9
declare namespace R0 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R1 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R2 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R3 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[("top-level" | "inline" | "prefer-top-level")]

}
declare namespace R4 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R5 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[("absolute-first" | "disable-absolute-first")]

}
declare namespace R6 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  count?: number
  exactCount?: boolean
  considerComments?: boolean
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
 * @maxItems 1
 */
type Options = []|[{
  "prefer-inline"?: boolean
}]

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
 * @maxItems 0
 */
type Options = []

}
declare namespace R11 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  target?: ("single" | "any")
}]

}
export type RuleOptions = {
  "antfu/import-dedupe": R0.Options;
  "antfu/no-import-dist": R1.Options;
  "antfu/no-import-node-modules-by-path": R2.Options;
  "import/consistent-type-specifier-style": R3.Options;
  "import/exports-last": R4.Options;
  "import/first": R5.Options;
  "import/newline-after-import": R6.Options;
  "import/no-default-export": R7.Options;
  "import/no-duplicates": R8.Options;
  "import/no-mutable-exports": R9.Options;
  "import/no-named-default": R10.Options;
  "import/prefer-default-export": R11.Options;
};

export type TypedRuleIds = never;
