// Generated from installed rule schemas. Do not edit.
// schemas-sha256: e4056b3312398d2e62fa23e1bf704f226305a994e927b136c2fa80cdea6c0de6
declare namespace R0 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  required?: string[]
}]

}
declare namespace R1 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[("always" | "never")]

}
declare namespace R2 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  frontmatterTitle?: string
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
  allowDefinitions?: string[]
  allowFootnoteDefinitions?: string[]
  checkFootnoteDefinitions?: boolean
}]

}
declare namespace R5 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  checkSiblingsOnly?: boolean
}]

}
declare namespace R6 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  allowDefinitions?: string[]
  allowFootnoteDefinitions?: string[]
  checkFootnoteDefinitions?: boolean
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
declare namespace R9 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  allowed?: string[]
  allowedIgnoreCase?: boolean
}]

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
  checkClosedHeadings?: boolean
}]

}
declare namespace R12 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  allowLabels?: string[]
}]

}
declare namespace R13 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  ignoreCase?: boolean
  allowPattern?: string
}]

}
declare namespace R14 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  frontmatterTitle?: string
}]

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
 * @maxItems 0
 */
type Options = []

}
declare namespace R17 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  checkStrikethrough?: boolean
}]

}
declare namespace R18 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  allowDefinitions?: string[]
  allowFootnoteDefinitions?: string[]
  checkFootnoteDefinitions?: boolean
}]

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
 * @maxItems 1
 */
type Options = []|[{
  checkMissingCells?: boolean
}]

}
export type RuleOptions = {
  "markdown/fenced-code-language": R0.Options;
  "markdown/fenced-code-meta": R1.Options;
  "markdown/heading-increment": R2.Options;
  "markdown/no-bare-urls": R3.Options;
  "markdown/no-duplicate-definitions": R4.Options;
  "markdown/no-duplicate-headings": R5.Options;
  "markdown/no-empty-definitions": R6.Options;
  "markdown/no-empty-images": R7.Options;
  "markdown/no-empty-links": R8.Options;
  "markdown/no-html": R9.Options;
  "markdown/no-invalid-label-refs": R10.Options;
  "markdown/no-missing-atx-heading-space": R11.Options;
  "markdown/no-missing-label-refs": R12.Options;
  "markdown/no-missing-link-fragments": R13.Options;
  "markdown/no-multiple-h1": R14.Options;
  "markdown/no-reference-like-urls": R15.Options;
  "markdown/no-reversed-media-syntax": R16.Options;
  "markdown/no-space-in-emphasis": R17.Options;
  "markdown/no-unused-definitions": R18.Options;
  "markdown/require-alt-text": R19.Options;
  "markdown/table-column-count": R20.Options;
};

export type TypedRuleIds = never;
