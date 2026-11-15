// Generated from installed rule schemas. Do not edit.
// schemas-sha256: 8a5ed407ead5961412c3ecaeee5ccc405efefe9de27edddb083bfd5e2feb54a9
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
  ArrayPattern?: BasicConfig
  TOMLArray?: BasicConfig
})]
type BasicConfig = (("always" | "never" | "consistent") | {
  multiline?: boolean
  minItems?: (number | null)
})

}
declare namespace R3 {
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
declare namespace R4 {
/**
 * @minItems 0
 * @maxItems 2
 */
type Options = []|[("tab" | number)]|[("tab" | number), {
  subTables?: number
  keyValuePairs?: number
}]

}
declare namespace R5 {
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
declare namespace R6 {
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
declare namespace R7 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  allowAllPropertiesOnSameLine?: boolean
}]

}
declare namespace R8 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[({
  align?: (("equal" | "value") | {
    on?: ("equal" | "value")
    mode?: ("strict" | "minimum")
    beforeEqual?: boolean
    afterEqual?: boolean
  })
  mode?: ("strict" | "minimum")
  beforeEqual?: boolean
  afterEqual?: boolean
} | {
  singleLine?: {
    mode?: ("strict" | "minimum")
    beforeEqual?: boolean
    afterEqual?: boolean
  }
  multiLine?: {
    align?: (("equal" | "value") | {
      on?: ("equal" | "value")
      mode?: ("strict" | "minimum")
      beforeEqual?: boolean
      afterEqual?: boolean
    })
    mode?: ("strict" | "minimum")
    beforeEqual?: boolean
    afterEqual?: boolean
  }
} | {
  singleLine?: {
    mode?: ("strict" | "minimum")
    beforeEqual?: boolean
    afterEqual?: boolean
  }
  multiLine?: {
    mode?: ("strict" | "minimum")
    beforeEqual?: boolean
    afterEqual?: boolean
  }
  align?: {
    on?: ("equal" | "value")
    mode?: ("strict" | "minimum")
    beforeEqual?: boolean
    afterEqual?: boolean
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
 * @maxItems 1
 */
type Options = []|[{
  typeMap?: {
    string?: string
    boolean?: string
    integer?: string
    float?: string
    offsetDateTime?: string
    localDateTime?: string
    localDate?: string
    localTime?: string
    array?: string
    inlineTable?: string
  }
}]

}
declare namespace R11 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  allowHexadecimal?: boolean
  allowOctal?: boolean
  allowBinary?: boolean
}]

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
  max?: number
}]

}
declare namespace R17 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  maxBit?: number
}]

}
declare namespace R18 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  prefer?: ("as-needed" | "always")
  numbers?: boolean
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
 * @maxItems 2
 */
type Options = []|[("always" | "never")]|[("always" | "never"), {
  exceptions?: string[]
  markers?: string[]
}]

}
declare namespace R21 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[("always" | "never")]

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
export type RuleOptions = {
  "toml/array-bracket-newline": R0.Options;
  "toml/array-bracket-spacing": R1.Options;
  "toml/array-element-newline": R2.Options;
  "toml/comma-style": R3.Options;
  "toml/indent": R4.Options;
  "toml/inline-table-curly-newline": R5.Options;
  "toml/inline-table-curly-spacing": R6.Options;
  "toml/inline-table-key-value-newline": R7.Options;
  "toml/key-spacing": R8.Options;
  "toml/keys-order": R9.Options;
  "toml/no-mixed-type-in-array": R10.Options;
  "toml/no-non-decimal-integer": R11.Options;
  "toml/no-space-dots": R12.Options;
  "toml/no-unreadable-number-separator": R13.Options;
  "toml/padding-line-between-pairs": R14.Options;
  "toml/padding-line-between-tables": R15.Options;
  "toml/precision-of-fractional-seconds": R16.Options;
  "toml/precision-of-integer": R17.Options;
  "toml/quoted-keys": R18.Options;
  "toml/space-eq-sign": R19.Options;
  "toml/spaced-comment": R20.Options;
  "toml/table-bracket-spacing": R21.Options;
  "toml/tables-order": R22.Options;
  "toml/vue-custom-block/no-parsing-error": R23.Options;
};

export type TypedRuleIds = never;
