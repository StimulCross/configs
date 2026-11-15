// Generated from installed rule schemas. Do not edit.
// schemas-sha256: ef94812d4aea7d87b23399666d71887b64a02123bd4ec57522efe7877f16b9db
declare namespace R0 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[(("always" | "never" | "consistent") | {
  multiline?: boolean
  minItems?: (number | null)
})]

}
declare namespace R1 {
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
declare namespace R2 {
type Options = []|[(BasicConfig | {
  ArrayExpression?: BasicConfig
  JSONArrayExpression?: BasicConfig
  ArrayPattern?: BasicConfig
})]
type BasicConfig = (("always" | "never" | "consistent") | {
  multiline?: boolean
  minItems?: (number | null)
})

}
declare namespace R3 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R4 {
type Options = []|[(Value | {
  arrays?: ValueWithIgnore
  objects?: ValueWithIgnore
  imports?: ValueWithIgnore
  exports?: ValueWithIgnore
  functions?: ValueWithIgnore
})]
type Value = ("always-multiline" | "always" | "never" | "only-multiline")
type ValueWithIgnore = ("always-multiline" | "always" | "ignore" | "never" | "only-multiline")

}
declare namespace R5 {
/**
 * @minItems 0
 * @maxItems 2
 */
type Options = []|[("first" | "last")]|[("first" | "last"), {
  exceptions?: {
    [k: string]: boolean
  }
}]

}
declare namespace R6 {
/**
 * @minItems 0
 * @maxItems 2
 */
type Options = []|[("tab" | number)]|[("tab" | number), {
  SwitchCase?: number
  VariableDeclarator?: ((number | ("first" | "off")) | {
    var?: (number | ("first" | "off"))
    let?: (number | ("first" | "off"))
    const?: (number | ("first" | "off"))
  })
  outerIIFEBody?: (number | "off")
  MemberExpression?: (number | "off")
  FunctionDeclaration?: {
    parameters?: (number | ("first" | "off"))
    body?: number
  }
  FunctionExpression?: {
    parameters?: (number | ("first" | "off"))
    body?: number
  }
  StaticBlock?: {
    body?: number
  }
  CallExpression?: {
    arguments?: (number | ("first" | "off"))
  }
  ArrayExpression?: (number | ("first" | "off"))
  ObjectExpression?: (number | ("first" | "off"))
  ImportDeclaration?: (number | ("first" | "off"))
  flatTernaryExpressions?: boolean
  offsetTernaryExpressions?: boolean
  ignoredNodes?: string[]
  ignoreComments?: boolean
}]

}
declare namespace R7 {
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
declare namespace R8 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[({
  align?: (("colon" | "value") | {
    mode?: ("strict" | "minimum")
    on?: ("colon" | "value")
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
      mode?: ("strict" | "minimum")
      on?: ("colon" | "value")
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
    mode?: ("strict" | "minimum")
    on?: ("colon" | "value")
    beforeColon?: boolean
    afterColon?: boolean
  }
})]

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
 * @maxItems 1
 */
type Options = []|[{
  skipComments?: boolean
  skipStrings?: boolean
  skipTemplates?: boolean
  skipRegExps?: boolean
  skipJSXText?: boolean
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
 * @maxItems 0
 */
type Options = []

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
 * @maxItems 0
 */
type Options = []

}
declare namespace R25 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R26 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R27 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

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
 * @maxItems 1
 */
type Options = []|[{
  allowRegexCharacters?: string[]
}]

}
declare namespace R34 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[((("always" | "never") | {
  multiline?: boolean
  minProperties?: number
  consistent?: boolean
}) | {
  ObjectExpression?: (("always" | "never") | {
    multiline?: boolean
    minProperties?: number
    consistent?: boolean
  })
  ObjectPattern?: (("always" | "never") | {
    multiline?: boolean
    minProperties?: number
    consistent?: boolean
  })
  ImportDeclaration?: (("always" | "never") | {
    multiline?: boolean
    minProperties?: number
    consistent?: boolean
  })
  ExportDeclaration?: (("always" | "never") | {
    multiline?: boolean
    minProperties?: number
    consistent?: boolean
  })
})]

}
declare namespace R35 {
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
declare namespace R36 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  allowAllPropertiesOnSameLine?: boolean
  allowMultiplePropertiesPerLine?: boolean
}]

}
declare namespace R37 {
type Options = ([]|[("always" | "as-needed" | "consistent" | "consistent-as-needed")] | []|[("always" | "as-needed" | "consistent" | "consistent-as-needed")]|[("always" | "as-needed" | "consistent" | "consistent-as-needed"), {
  keywords?: boolean
  unnecessary?: boolean
  numbers?: boolean
}])

}
declare namespace R38 {
/**
 * @minItems 0
 * @maxItems 2
 */
type Options = []|[("single" | "double" | "backtick")]|[("single" | "double" | "backtick"), ("avoid-escape" | {
  avoidEscape?: boolean
  allowTemplateLiterals?: boolean
})]

}
declare namespace R39 {
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
declare namespace R40 {
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
declare namespace R41 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  words?: boolean
  nonwords?: boolean
  overrides?: {
    [k: string]: boolean
  }
}]

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
export type RuleOptions = {
  "jsonc/array-bracket-newline": R0.Options;
  "jsonc/array-bracket-spacing": R1.Options;
  "jsonc/array-element-newline": R2.Options;
  "jsonc/auto": R3.Options;
  "jsonc/comma-dangle": R4.Options;
  "jsonc/comma-style": R5.Options;
  "jsonc/indent": R6.Options;
  "jsonc/key-name-casing": R7.Options;
  "jsonc/key-spacing": R8.Options;
  "jsonc/no-bigint-literals": R9.Options;
  "jsonc/no-binary-expression": R10.Options;
  "jsonc/no-binary-numeric-literals": R11.Options;
  "jsonc/no-comments": R12.Options;
  "jsonc/no-dupe-keys": R13.Options;
  "jsonc/no-escape-sequence-in-identifier": R14.Options;
  "jsonc/no-floating-decimal": R15.Options;
  "jsonc/no-hexadecimal-numeric-literals": R16.Options;
  "jsonc/no-infinity": R17.Options;
  "jsonc/no-irregular-whitespace": R18.Options;
  "jsonc/no-multi-str": R19.Options;
  "jsonc/no-nan": R20.Options;
  "jsonc/no-number-props": R21.Options;
  "jsonc/no-numeric-separators": R22.Options;
  "jsonc/no-octal": R23.Options;
  "jsonc/no-octal-escape": R24.Options;
  "jsonc/no-octal-numeric-literals": R25.Options;
  "jsonc/no-parenthesized": R26.Options;
  "jsonc/no-plus-sign": R27.Options;
  "jsonc/no-regexp-literals": R28.Options;
  "jsonc/no-sparse-arrays": R29.Options;
  "jsonc/no-template-literals": R30.Options;
  "jsonc/no-undefined-value": R31.Options;
  "jsonc/no-unicode-codepoint-escapes": R32.Options;
  "jsonc/no-useless-escape": R33.Options;
  "jsonc/object-curly-newline": R34.Options;
  "jsonc/object-curly-spacing": R35.Options;
  "jsonc/object-property-newline": R36.Options;
  "jsonc/quote-props": R37.Options;
  "jsonc/quotes": R38.Options;
  "jsonc/sort-array-values": R39.Options;
  "jsonc/sort-keys": R40.Options;
  "jsonc/space-unary-ops": R41.Options;
  "jsonc/valid-json-number": R42.Options;
  "jsonc/vue-custom-block/no-parsing-error": R43.Options;
};

export type TypedRuleIds = never;
