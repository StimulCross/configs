// Generated from installed rule schemas. Do not edit.
// schemas-sha256: e4897ba22437dc8de83c0585752d1dbdbb4e7d1b03be1d4c11920ddfc358c2ff
declare namespace R0 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[(("always" | "never") | {
  singleline?: ("always" | "never" | "ignore")
  multiline?: ("always" | "never" | "ignore")
})]

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
type Options = []|[("always" | "never")]

}
declare namespace R3 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[(("always" | "never") | {
  singleline?: ("always" | "never" | "ignore")
  multiline?: ("always" | "never" | "ignore")
})]

}
declare namespace R4 {
/**
 * @minItems 0
 * @maxItems 2
 */
type Options = []|[("always" | "never")]|[("always" | "never"), {
  nestedHyphen?: ("always" | "never")
  blockMapping?: ("always" | "never")
}]

}
declare namespace R5 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  extension?: ("yaml" | "yml")
  caseSensitive?: boolean
}]

}
declare namespace R6 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[(("always" | "never") | {
  multiline?: boolean
  minProperties?: number
  consistent?: boolean
})]

}
declare namespace R7 {
/**
 * @minItems 0
 * @maxItems 2
 */
type Options = []|[("always" | "never")]|[("always" | "never"), {
  arraysInObjects?: boolean
  objectsInObjects?: boolean
  emptyObjects?: ("ignore" | "always" | "never")
}]

}
declare namespace R8 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[(("always" | "never" | "consistent") | {
  multiline?: boolean
  minItems?: (number | null)
})]

}
declare namespace R9 {
/**
 * @minItems 0
 * @maxItems 2
 */
type Options = []|[("always" | "never")]|[("always" | "never"), {
  singleValue?: boolean
  objectsInArrays?: boolean
  arraysInArrays?: boolean
}]

}
declare namespace R10 {
/**
 * @minItems 0
 * @maxItems 2
 */
type Options = []|[number]|[number, {
  indentBlockSequences?: boolean
  indicatorValueIndent?: number
  alignMultilineFlowScalars?: boolean
}]

}
declare namespace R11 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  camelCase?: boolean
  PascalCase?: boolean
  SCREAMING_SNAKE_CASE?: boolean
  "kebab-case"?: boolean
  snake_case?: boolean
  ignores?: string[]
}]

}
declare namespace R12 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[({
  align?: (("colon" | "value") | {
    on?: ("colon" | "value")
    mode?: ("strict" | "minimum")
    beforeColon?: boolean
    afterColon?: boolean
  })
  mode?: ("strict" | "minimum")
  beforeColon?: boolean
  afterColon?: boolean
} | {
  singleLine?: {
    mode?: ("strict" | "minimum")
    beforeColon?: boolean
    afterColon?: boolean
  }
  multiLine?: {
    align?: (("colon" | "value") | {
      on?: ("colon" | "value")
      mode?: ("strict" | "minimum")
      beforeColon?: boolean
      afterColon?: boolean
    })
    mode?: ("strict" | "minimum")
    beforeColon?: boolean
    afterColon?: boolean
  }
} | {
  singleLine?: {
    mode?: ("strict" | "minimum")
    beforeColon?: boolean
    afterColon?: boolean
  }
  multiLine?: {
    mode?: ("strict" | "minimum")
    beforeColon?: boolean
    afterColon?: boolean
  }
  align?: {
    on?: ("colon" | "value")
    mode?: ("strict" | "minimum")
    beforeColon?: boolean
    afterColon?: boolean
  }
})]

}
declare namespace R13 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  code?: number
  comments?: number
  tabWidth?: number
  ignorePattern?: string
  ignoreComments?: boolean
  ignoreTrailingComments?: boolean
  ignoreUrls?: boolean
  ignoreStrings?: boolean
}]

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
 * @maxItems 0
 */
type Options = []

}
declare namespace R17 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

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
 * @maxItems 1
 */
type Options = []|[{
  skipComments?: boolean
  skipQuotedScalars?: boolean
}]

}
declare namespace R20 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  max: number
  maxEOF?: number
  maxBOF?: number
}]

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
  skipBlankLines?: boolean
  ignoreComments?: boolean
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
 * @maxItems 2
 */
type Options = []|[("always" | "never")]|[("always" | "never"), {
  ignorePatterns?: string[]
  overrides?: {
    mappingKey?: ("always" | "never" | null)
  }
}]

}
declare namespace R25 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  prefer?: ("double" | "single")
  avoidEscape?: boolean
}]

}
declare namespace R26 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R27 {
type Options = ([{
  pathPattern: string
  hasProperties?: string[]
  order: ((string | {
    keyPattern?: string
    order?: ({
      type?: ("asc" | "desc")
      caseSensitive?: boolean
      natural?: boolean
    } | {
      type: "ignore"
    })
  })[] | {
    type?: ("asc" | "desc")
    caseSensitive?: boolean
    natural?: boolean
  } | {
    type: "ignore"
  })
  minKeys?: number
  allowLineSeparatedGroups?: boolean
}, ...({
  pathPattern: string
  hasProperties?: string[]
  order: ((string | {
    keyPattern?: string
    order?: ({
      type?: ("asc" | "desc")
      caseSensitive?: boolean
      natural?: boolean
    } | {
      type: "ignore"
    })
  })[] | {
    type?: ("asc" | "desc")
    caseSensitive?: boolean
    natural?: boolean
  } | {
    type: "ignore"
  })
  minKeys?: number
  allowLineSeparatedGroups?: boolean
})[]] | []|[("asc" | "desc")]|[("asc" | "desc"), {
  caseSensitive?: boolean
  natural?: boolean
  minKeys?: number
  allowLineSeparatedGroups?: boolean
}])

}
declare namespace R28 {
/**
 * @minItems 1
 */
type Options = [{
  pathPattern: string
  order: ((string | {
    valuePattern?: string
    order?: {
      type?: ("asc" | "desc")
      caseSensitive?: boolean
      natural?: boolean
      key?: string
    }
  })[] | {
    type?: ("asc" | "desc")
    caseSensitive?: boolean
    natural?: boolean
    key?: string
  })
  minValues?: number
}, ...({
  pathPattern: string
  order: ((string | {
    valuePattern?: string
    order?: {
      type?: ("asc" | "desc")
      caseSensitive?: boolean
      natural?: boolean
      key?: string
    }
  })[] | {
    type?: ("asc" | "desc")
    caseSensitive?: boolean
    natural?: boolean
    key?: string
  })
  minValues?: number
})[]]

}
declare namespace R29 {
/**
 * @minItems 0
 * @maxItems 2
 */
type Options = []|[("always" | "never")]|[("always" | "never"), {
  exceptions?: string[]
  markers?: string[]
}]

}
declare namespace R30 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
export type RuleOptions = {
  "yaml/block-mapping": R0.Options;
  "yaml/block-mapping-colon-indicator-newline": R1.Options;
  "yaml/block-mapping-question-indicator-newline": R2.Options;
  "yaml/block-sequence": R3.Options;
  "yaml/block-sequence-hyphen-indicator-newline": R4.Options;
  "yaml/file-extension": R5.Options;
  "yaml/flow-mapping-curly-newline": R6.Options;
  "yaml/flow-mapping-curly-spacing": R7.Options;
  "yaml/flow-sequence-bracket-newline": R8.Options;
  "yaml/flow-sequence-bracket-spacing": R9.Options;
  "yaml/indent": R10.Options;
  "yaml/key-name-casing": R11.Options;
  "yaml/key-spacing": R12.Options;
  "yaml/max-len": R13.Options;
  "yaml/no-boolean-key": R14.Options;
  "yaml/no-empty-document": R15.Options;
  "yaml/no-empty-key": R16.Options;
  "yaml/no-empty-mapping-value": R17.Options;
  "yaml/no-empty-sequence-entry": R18.Options;
  "yaml/no-irregular-whitespace": R19.Options;
  "yaml/no-multiple-empty-lines": R20.Options;
  "yaml/no-tab-indent": R21.Options;
  "yaml/no-trailing-spaces": R22.Options;
  "yaml/no-trailing-zeros": R23.Options;
  "yaml/plain-scalar": R24.Options;
  "yaml/quotes": R25.Options;
  "yaml/require-string-key": R26.Options;
  "yaml/sort-keys": R27.Options;
  "yaml/sort-sequence-values": R28.Options;
  "yaml/spaced-comment": R29.Options;
  "yaml/vue-custom-block/no-parsing-error": R30.Options;
};

export type TypedRuleIds = never;
