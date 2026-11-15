// Generated from installed rule schemas. Do not edit.
// schemas-sha256: cfe3673d38094f07ae8750b3a0c92e2dae1f462e421d5fe96bebdf68bff77c7a
declare namespace R0 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  allowWholeFile?: boolean
}]

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
type Options = string[]

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
 * @maxItems 0
 */
type Options = []

}
declare namespace R6 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R7 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  additionalDirectives?: string[]
  allow?: string[]
}]

}
declare namespace R8 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  additionalDirectives?: string[]
  ignore?: ("eslint" | "eslint-disable" | "eslint-disable-line" | "eslint-disable-next-line" | "eslint-enable" | "eslint-env" | "exported" | "global" | "globals")[]
}]

}
export type RuleOptions = {
  "eslint-comments/disable-enable-pair": R0.Options;
  "eslint-comments/no-aggregating-enable": R1.Options;
  "eslint-comments/no-duplicate-disable": R2.Options;
  "eslint-comments/no-restricted-disable": R3.Options;
  "eslint-comments/no-unlimited-disable": R4.Options;
  "eslint-comments/no-unused-disable": R5.Options;
  "eslint-comments/no-unused-enable": R6.Options;
  "eslint-comments/no-use": R7.Options;
  "eslint-comments/require-description": R8.Options;
};

export type TypedRuleIds = never;
