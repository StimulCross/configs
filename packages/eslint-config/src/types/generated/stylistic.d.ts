// Generated from installed rule schemas. Do not edit.
// schemas-sha256: 4f6a74af05cde273226e428a09348441974e707f6f8258a675ab634349458310
declare namespace R0 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  /**
   * Allow leading property access to be on the same line
   */
  allowLeadingPropertyAccess?: boolean
}]

}
declare namespace R1 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  ArrayExpression?: boolean
  ArrayPattern?: boolean
  ArrowFunctionExpression?: boolean
  CallExpression?: boolean
  ExportNamedDeclaration?: boolean
  FunctionDeclaration?: boolean
  FunctionExpression?: boolean
  IfStatement?: boolean
  ImportDeclaration?: boolean
  JSONArrayExpression?: boolean
  JSONObjectExpression?: boolean
  JSXOpeningElement?: boolean
  NewExpression?: boolean
  ObjectExpression?: boolean
  ObjectPattern?: boolean
  TSFunctionType?: boolean
  TSInterfaceDeclaration?: boolean
  TSTupleType?: boolean
  TSTypeLiteral?: boolean
  TSTypeParameterDeclaration?: boolean
  TSTypeParameterInstantiation?: boolean
}]

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
  minObjectProperties?: number
  objectLineLength?: number
  minArrayItems?: number
  arrayLineLength?: number
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
type Options = []|[(("always" | "never" | "consistent") | {
  multiline?: boolean
  minItems?: (number | null)
})]

}
declare namespace R7 {
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
declare namespace R8 {
type Options = []|[(BasicConfig | {
  ArrayExpression?: BasicConfig
  ArrayPattern?: BasicConfig
})]
type BasicConfig = (("always" | "never" | "consistent") | {
  consistent?: boolean
  multiline?: boolean
  minItems?: (number | null)
})

}
declare namespace R9 {
/**
 * @minItems 0
 * @maxItems 2
 */
type Options = []|[("always" | "as-needed")]|[("always" | "as-needed"), {
  requireForBlockBody?: boolean
}]

}
declare namespace R10 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  before?: boolean
  after?: boolean
}]

}
declare namespace R11 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[("always" | "never")]

}
declare namespace R12 {
/**
 * @minItems 0
 * @maxItems 2
 */
type Options = []|[("1tbs" | "stroustrup" | "allman")]|[("1tbs" | "stroustrup" | "allman"), {
  allowSingleLine?: boolean
}]

}
declare namespace R13 {
type Options = []|[(Value | {
  arrays?: ValueWithIgnore
  objects?: ValueWithIgnore
  imports?: ValueWithIgnore
  exports?: ValueWithIgnore
  functions?: ValueWithIgnore
  importAttributes?: ValueWithIgnore
  dynamicImports?: ValueWithIgnore
  enums?: ValueWithIgnore
  generics?: ValueWithIgnore
  tuples?: ValueWithIgnore
})]
type Value = ("always-multiline" | "always" | "never" | "only-multiline")
type ValueWithIgnore = ("always-multiline" | "always" | "never" | "only-multiline" | "ignore")

}
declare namespace R14 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  before?: boolean
  after?: boolean
}]

}
declare namespace R15 {
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
declare namespace R16 {
/**
 * @minItems 0
 * @maxItems 2
 */
type Options = []|[("always" | "never")]|[("always" | "never"), {
  enforceForClassMembers?: boolean
}]

}
declare namespace R17 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[(("always" | "never") | {
  IfStatementConsequent?: (("always" | "never") | {
    multiline?: boolean
    minElements?: number
    consistent?: boolean
  })
  IfStatementAlternative?: (("always" | "never") | {
    multiline?: boolean
    minElements?: number
    consistent?: boolean
  })
  DoWhileStatement?: (("always" | "never") | {
    multiline?: boolean
    minElements?: number
    consistent?: boolean
  })
  ForInStatement?: (("always" | "never") | {
    multiline?: boolean
    minElements?: number
    consistent?: boolean
  })
  ForOfStatement?: (("always" | "never") | {
    multiline?: boolean
    minElements?: number
    consistent?: boolean
  })
  ForStatement?: (("always" | "never") | {
    multiline?: boolean
    minElements?: number
    consistent?: boolean
  })
  WhileStatement?: (("always" | "never") | {
    multiline?: boolean
    minElements?: number
    consistent?: boolean
  })
  SwitchStatement?: (("always" | "never") | {
    multiline?: boolean
    minElements?: number
    consistent?: boolean
  })
  SwitchCase?: (("always" | "never") | {
    multiline?: boolean
    minElements?: number
    consistent?: boolean
  })
  TryStatementBlock?: (("always" | "never") | {
    multiline?: boolean
    minElements?: number
    consistent?: boolean
  })
  TryStatementHandler?: (("always" | "never") | {
    multiline?: boolean
    minElements?: number
    consistent?: boolean
  })
  TryStatementFinalizer?: (("always" | "never") | {
    multiline?: boolean
    minElements?: number
    consistent?: boolean
  })
  BlockStatement?: (("always" | "never") | {
    multiline?: boolean
    minElements?: number
    consistent?: boolean
  })
  ArrowFunctionExpression?: (("always" | "never") | {
    multiline?: boolean
    minElements?: number
    consistent?: boolean
  })
  FunctionDeclaration?: (("always" | "never") | {
    multiline?: boolean
    minElements?: number
    consistent?: boolean
  })
  FunctionExpression?: (("always" | "never") | {
    multiline?: boolean
    minElements?: number
    consistent?: boolean
  })
  Property?: (("always" | "never") | {
    multiline?: boolean
    minElements?: number
    consistent?: boolean
  })
  ClassBody?: (("always" | "never") | {
    multiline?: boolean
    minElements?: number
    consistent?: boolean
  })
  StaticBlock?: (("always" | "never") | {
    multiline?: boolean
    minElements?: number
    consistent?: boolean
  })
  WithStatement?: (("always" | "never") | {
    multiline?: boolean
    minElements?: number
    consistent?: boolean
  })
  TSModuleBlock?: (("always" | "never") | {
    multiline?: boolean
    minElements?: number
    consistent?: boolean
  })
  multiline?: boolean
  minElements?: number
  consistent?: boolean
})]

}
declare namespace R18 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[("object" | "property")]

}
declare namespace R19 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[("always" | "never" | "unix" | "windows")]

}
declare namespace R20 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  singleLine?: {
    maxItems?: number
  }
  multiLine?: {
    minItems?: number
    maxItemsPerLine?: number
  }
}]

}
declare namespace R21 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  singleLine?: SingleLineConfig
  multiLine?: MultiLineConfig
  overrides?: {
    "()"?: OverrideConfig
    "[]"?: OverrideConfig
    "{}"?: OverrideConfig
    "<>"?: OverrideConfig
    ArrayExpression?: OverrideConfig
    ArrayPattern?: OverrideConfig
    ArrowFunctionExpression?: OverrideConfig
    CallExpression?: OverrideConfig
    ExportNamedDeclaration?: OverrideConfig
    FunctionDeclaration?: OverrideConfig
    FunctionExpression?: OverrideConfig
    IfStatement?: OverrideConfig
    ImportAttributes?: OverrideConfig
    ImportDeclaration?: OverrideConfig
    JSONArrayExpression?: OverrideConfig
    JSONObjectExpression?: OverrideConfig
    NewExpression?: OverrideConfig
    ObjectExpression?: OverrideConfig
    ObjectPattern?: OverrideConfig
    TSDeclareFunction?: OverrideConfig
    TSEnumBody?: OverrideConfig
    TSFunctionType?: OverrideConfig
    TSInterfaceBody?: OverrideConfig
    TSTupleType?: OverrideConfig
    TSTypeLiteral?: OverrideConfig
    TSTypeParameterDeclaration?: OverrideConfig
    TSTypeParameterInstantiation?: OverrideConfig
  }
}]
type OverrideConfig = (BaseConfig | "off")

interface SingleLineConfig {
  spacing?: ("always" | "never")
  maxItems?: number
}
interface MultiLineConfig {
  minItems?: number
}
interface BaseConfig {
  singleLine?: SingleLineConfig
  multiline?: MultiLineConfig
}

}
declare namespace R22 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[("always" | "never" | "consistent")]

}
declare namespace R23 {
type Options = ([]|["never"] | []|["always"]|["always", {
  allowNewlines?: boolean
  optionalChain?: {
    before?: boolean
    after?: boolean
  }
}])

}
declare namespace R24 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[(("always" | "never" | "consistent" | "multiline" | "multiline-arguments") | {
  minItems?: number
})]

}
declare namespace R25 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[(("before" | "after" | "both" | "neither") | {
  before?: boolean
  after?: boolean
  named?: (("before" | "after" | "both" | "neither") | {
    before?: boolean
    after?: boolean
  })
  anonymous?: (("before" | "after" | "both" | "neither") | {
    before?: boolean
    after?: boolean
  })
  method?: (("before" | "after" | "both" | "neither") | {
    before?: boolean
    after?: boolean
  })
  shorthand?: (("before" | "after" | "both" | "neither") | {
    before?: boolean
    after?: boolean
  })
})]

}
declare namespace R26 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[("beside" | "below")]

}
declare namespace R27 {
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
    using?: (number | ("first" | "off"))
  })
  assignmentOperator?: (number | "off")
  outerIIFEBody?: (number | "off")
  MemberExpression?: (number | "off")
  FunctionDeclaration?: {
    parameters?: (number | ("first" | "off"))
    body?: number
    returnType?: number
  }
  FunctionExpression?: {
    parameters?: (number | ("first" | "off"))
    body?: number
    returnType?: number
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
  offsetTernaryExpressions?: (boolean | {
    CallExpression?: boolean
    AwaitExpression?: boolean
    NewExpression?: boolean
  })
  offsetTernaryExpressionsOffsetCallExpressions?: boolean
  ignoredNodes?: string[]
  ignoreComments?: boolean
  tabLength?: number
}]

}
declare namespace R28 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[(number | "tab")]

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
 * @maxItems 1
 */
type Options = []|[(("after-props" | "props-aligned" | "tag-aligned" | "line-aligned") | {
  location?: ("after-props" | "props-aligned" | "tag-aligned" | "line-aligned")
} | {
  nonEmpty?: (("after-props" | "props-aligned" | "tag-aligned" | "line-aligned") | false)
  selfClosing?: (("after-props" | "props-aligned" | "tag-aligned" | "line-aligned") | false)
})]

}
declare namespace R31 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[("tag-aligned" | "line-aligned")]

}
declare namespace R32 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[({
  props?: ("always" | "never" | "ignore")
  children?: ("always" | "never" | "ignore")
  propElementValues?: ("always" | "never" | "ignore")
} | ("always" | "never" | "ignore"))]

}
declare namespace R33 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[(("consistent" | "never") | {
  singleline?: ("consistent" | "require" | "forbid")
  multiline?: ("consistent" | "require" | "forbid")
})]

}
declare namespace R34 {
type Options = []|[({
  when?: ("always" | "never")
  allowMultiline?: boolean
  spacing?: {
    objectLiterals?: ("always" | "never")
  }
  attributes?: ({
    when?: ("always" | "never")
    allowMultiline?: boolean
    spacing?: {
      objectLiterals?: ("always" | "never")
    }
  } | boolean)
  children?: ({
    when?: ("always" | "never")
    allowMultiline?: boolean
    spacing?: {
      objectLiterals?: ("always" | "never")
    }
  } | boolean)
} | ("always" | "never"))]|[({
  when?: ("always" | "never")
  allowMultiline?: boolean
  spacing?: {
    objectLiterals?: ("always" | "never")
  }
  attributes?: ({
    when?: ("always" | "never")
    allowMultiline?: boolean
    spacing?: {
      objectLiterals?: ("always" | "never")
    }
  } | boolean)
  children?: ({
    when?: ("always" | "never")
    allowMultiline?: boolean
    spacing?: {
      objectLiterals?: ("always" | "never")
    }
  } | boolean)
} | ("always" | "never")), {
  allowMultiline?: boolean
  spacing?: {
    objectLiterals?: ("always" | "never")
  }
}]

}
declare namespace R35 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[("always" | "never")]

}
declare namespace R36 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[("always" | "never" | "multiline" | "multiline-multiprop" | "multiprop")]

}
declare namespace R37 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[("always" | "multiline")]

}
declare namespace R38 {
/**
 * @minItems 0
 * @maxItems 2
 */
type Options = []|[("tab" | number)]|[("tab" | number), {
  checkAttributes?: boolean
  indentLogicalExpressions?: boolean
}]

}
declare namespace R39 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[(("tab" | "first") | number | {
  indentMode?: (("tab" | "first") | number)
  ignoreTernaryOperator?: boolean
})]

}
declare namespace R40 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[({
  maximum?: {
    single?: number
    multi?: number
  }
} | {
  maximum?: number
  when?: ("always" | "multiline")
})]

}
declare namespace R41 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  prevent?: boolean
  allowMultilines?: boolean
}]

}
declare namespace R42 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  allow?: ("none" | "literal" | "single-child" | "single-line" | "non-jsx")
}]

}
declare namespace R43 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  allowAllCaps?: boolean
  allowLeadingUnderscore?: boolean
  allowNamespace?: boolean
  ignore?: string[]
}]

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
 * @maxItems 1
 */
type Options = []|[("prefer-single" | "prefer-double")]

}
declare namespace R46 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  component?: boolean
  html?: boolean
}]

}
declare namespace R47 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  callbacksLast?: boolean
  shorthandFirst?: boolean
  shorthandLast?: boolean
  multiline?: ("ignore" | "first" | "last")
  ignoreCase?: boolean
  noSortAlphabetically?: boolean
  reservedFirst?: (string[] | boolean)
  reservedLast?: string[]
  locale?: string
}]

}
declare namespace R48 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  closingSlash?: ("always" | "never" | "allow")
  beforeSelfClosing?: ("always" | "proportional-always" | "never" | "allow")
  afterOpening?: ("always" | "allow-multiline" | "never" | "allow")
  beforeClosing?: ("always" | "proportional-always" | "never" | "allow")
}]

}
declare namespace R49 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  declaration?: ((true | false | "ignore" | "parens" | "parens-new-line") | (true | false | "ignore" | "parens" | "parens-new-line"))
  assignment?: ((true | false | "ignore" | "parens" | "parens-new-line") | (true | false | "ignore" | "parens" | "parens-new-line"))
  return?: ((true | false | "ignore" | "parens" | "parens-new-line") | (true | false | "ignore" | "parens" | "parens-new-line"))
  arrow?: ((true | false | "ignore" | "parens" | "parens-new-line") | (true | false | "ignore" | "parens" | "parens-new-line"))
  condition?: ((true | false | "ignore" | "parens" | "parens-new-line") | (true | false | "ignore" | "parens" | "parens-new-line"))
  logical?: ((true | false | "ignore" | "parens" | "parens-new-line") | (true | false | "ignore" | "parens" | "parens-new-line"))
  prop?: ((true | false | "ignore" | "parens" | "parens-new-line") | (true | false | "ignore" | "parens" | "parens-new-line"))
  propertyValue?: ((true | false | "ignore" | "parens" | "parens-new-line") | (true | false | "ignore" | "parens" | "parens-new-line"))
}]

}
declare namespace R50 {
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
  ignoredNodes?: ("ObjectExpression" | "ObjectPattern" | "ImportDeclaration" | "ExportNamedDeclaration" | "ExportAllDeclaration" | "TSTypeLiteral" | "TSInterfaceBody" | "ClassBody")[]
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
declare namespace R51 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  before?: boolean
  after?: boolean
  overrides?: {
    abstract?: {
      before?: boolean
      after?: boolean
    }
    boolean?: {
      before?: boolean
      after?: boolean
    }
    break?: {
      before?: boolean
      after?: boolean
    }
    byte?: {
      before?: boolean
      after?: boolean
    }
    case?: {
      before?: boolean
      after?: boolean
    }
    catch?: {
      before?: boolean
      after?: boolean
    }
    char?: {
      before?: boolean
      after?: boolean
    }
    class?: {
      before?: boolean
      after?: boolean
    }
    const?: {
      before?: boolean
      after?: boolean
    }
    continue?: {
      before?: boolean
      after?: boolean
    }
    debugger?: {
      before?: boolean
      after?: boolean
    }
    default?: {
      before?: boolean
      after?: boolean
    }
    delete?: {
      before?: boolean
      after?: boolean
    }
    do?: {
      before?: boolean
      after?: boolean
    }
    double?: {
      before?: boolean
      after?: boolean
    }
    else?: {
      before?: boolean
      after?: boolean
    }
    enum?: {
      before?: boolean
      after?: boolean
    }
    export?: {
      before?: boolean
      after?: boolean
    }
    extends?: {
      before?: boolean
      after?: boolean
    }
    false?: {
      before?: boolean
      after?: boolean
    }
    final?: {
      before?: boolean
      after?: boolean
    }
    finally?: {
      before?: boolean
      after?: boolean
    }
    float?: {
      before?: boolean
      after?: boolean
    }
    for?: {
      before?: boolean
      after?: boolean
    }
    function?: {
      before?: boolean
      after?: boolean
    }
    goto?: {
      before?: boolean
      after?: boolean
    }
    if?: {
      before?: boolean
      after?: boolean
    }
    implements?: {
      before?: boolean
      after?: boolean
    }
    import?: {
      before?: boolean
      after?: boolean
    }
    in?: {
      before?: boolean
      after?: boolean
    }
    instanceof?: {
      before?: boolean
      after?: boolean
    }
    int?: {
      before?: boolean
      after?: boolean
    }
    interface?: {
      before?: boolean
      after?: boolean
    }
    long?: {
      before?: boolean
      after?: boolean
    }
    native?: {
      before?: boolean
      after?: boolean
    }
    new?: {
      before?: boolean
      after?: boolean
    }
    null?: {
      before?: boolean
      after?: boolean
    }
    package?: {
      before?: boolean
      after?: boolean
    }
    private?: {
      before?: boolean
      after?: boolean
    }
    protected?: {
      before?: boolean
      after?: boolean
    }
    public?: {
      before?: boolean
      after?: boolean
    }
    return?: {
      before?: boolean
      after?: boolean
    }
    short?: {
      before?: boolean
      after?: boolean
    }
    static?: {
      before?: boolean
      after?: boolean
    }
    super?: {
      before?: boolean
      after?: boolean
    }
    switch?: {
      before?: boolean
      after?: boolean
    }
    synchronized?: {
      before?: boolean
      after?: boolean
    }
    this?: {
      before?: boolean
      after?: boolean
    }
    throw?: {
      before?: boolean
      after?: boolean
    }
    throws?: {
      before?: boolean
      after?: boolean
    }
    transient?: {
      before?: boolean
      after?: boolean
    }
    true?: {
      before?: boolean
      after?: boolean
    }
    try?: {
      before?: boolean
      after?: boolean
    }
    typeof?: {
      before?: boolean
      after?: boolean
    }
    var?: {
      before?: boolean
      after?: boolean
    }
    void?: {
      before?: boolean
      after?: boolean
    }
    volatile?: {
      before?: boolean
      after?: boolean
    }
    while?: {
      before?: boolean
      after?: boolean
    }
    with?: {
      before?: boolean
      after?: boolean
    }
    arguments?: {
      before?: boolean
      after?: boolean
    }
    as?: {
      before?: boolean
      after?: boolean
    }
    async?: {
      before?: boolean
      after?: boolean
    }
    await?: {
      before?: boolean
      after?: boolean
    }
    eval?: {
      before?: boolean
      after?: boolean
    }
    from?: {
      before?: boolean
      after?: boolean
    }
    get?: {
      before?: boolean
      after?: boolean
    }
    let?: {
      before?: boolean
      after?: boolean
    }
    of?: {
      before?: boolean
      after?: boolean
    }
    set?: {
      before?: boolean
      after?: boolean
    }
    type?: {
      before?: boolean
      after?: boolean
    }
    using?: {
      before?: boolean
      after?: boolean
    }
    yield?: {
      before?: boolean
      after?: boolean
    }
    accessor?: {
      before?: boolean
      after?: boolean
    }
    satisfies?: {
      before?: boolean
      after?: boolean
    }
  }
}]

}
declare namespace R52 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[(("above" | "beside") | {
  position?: ("above" | "beside")
  ignorePattern?: string
  applyDefaultPatterns?: boolean
  applyDefaultIgnorePatterns?: boolean
})]

}
declare namespace R53 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[("unix" | "windows")]

}
declare namespace R54 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  beforeBlockComment?: boolean
  afterBlockComment?: boolean
  beforeLineComment?: boolean
  afterLineComment?: boolean
  allowBlockStart?: boolean
  allowBlockEnd?: boolean
  allowClassStart?: boolean
  allowClassEnd?: boolean
  allowObjectStart?: boolean
  allowObjectEnd?: boolean
  allowArrayStart?: boolean
  allowArrayEnd?: boolean
  allowInterfaceStart?: boolean
  allowInterfaceEnd?: boolean
  allowTypeStart?: boolean
  allowTypeEnd?: boolean
  allowEnumStart?: boolean
  allowEnumEnd?: boolean
  allowModuleStart?: boolean
  allowModuleEnd?: boolean
  ignorePattern?: string
  applyDefaultIgnorePatterns?: boolean
  afterHashbangComment?: boolean
}]

}
declare namespace R55 {
/**
 * @minItems 0
 * @maxItems 2
 */
type Options = []|[({
  /**
   * @minItems 1
   */
  enforce: [{
    blankLine: ("always" | "never")
    prev: ("method" | "field" | "*")
    next: ("method" | "field" | "*")
  }, ...({
    blankLine: ("always" | "never")
    prev: ("method" | "field" | "*")
    next: ("method" | "field" | "*")
  })[]]
} | ("always" | "never"))]|[({
  /**
   * @minItems 1
   */
  enforce: [{
    blankLine: ("always" | "never")
    prev: ("method" | "field" | "*")
    next: ("method" | "field" | "*")
  }, ...({
    blankLine: ("always" | "never")
    prev: ("method" | "field" | "*")
    next: ("method" | "field" | "*")
  })[]]
} | ("always" | "never")), {
  exceptAfterSingleLine?: boolean
  exceptAfterOverload?: boolean
}]

}
declare namespace R56 {
/**
 * @minItems 0
 * @maxItems 3
 */
type Options = []|[({
  code?: number
  comments?: number
  tabWidth?: number
  ignorePattern?: string
  ignoreComments?: boolean
  ignoreStrings?: boolean
  ignoreUrls?: boolean
  ignoreTemplateLiterals?: boolean
  ignoreRegExpLiterals?: boolean
  ignoreTrailingComments?: boolean
} | number)]|[({
  code?: number
  comments?: number
  tabWidth?: number
  ignorePattern?: string
  ignoreComments?: boolean
  ignoreStrings?: boolean
  ignoreUrls?: boolean
  ignoreTemplateLiterals?: boolean
  ignoreRegExpLiterals?: boolean
  ignoreTrailingComments?: boolean
} | number), ({
  code?: number
  comments?: number
  tabWidth?: number
  ignorePattern?: string
  ignoreComments?: boolean
  ignoreStrings?: boolean
  ignoreUrls?: boolean
  ignoreTemplateLiterals?: boolean
  ignoreRegExpLiterals?: boolean
  ignoreTrailingComments?: boolean
} | number)]|[({
  code?: number
  comments?: number
  tabWidth?: number
  ignorePattern?: string
  ignoreComments?: boolean
  ignoreStrings?: boolean
  ignoreUrls?: boolean
  ignoreTemplateLiterals?: boolean
  ignoreRegExpLiterals?: boolean
  ignoreTrailingComments?: boolean
} | number), ({
  code?: number
  comments?: number
  tabWidth?: number
  ignorePattern?: string
  ignoreComments?: boolean
  ignoreStrings?: boolean
  ignoreUrls?: boolean
  ignoreTemplateLiterals?: boolean
  ignoreRegExpLiterals?: boolean
  ignoreTrailingComments?: boolean
} | number), {
  code?: number
  comments?: number
  tabWidth?: number
  ignorePattern?: string
  ignoreComments?: boolean
  ignoreStrings?: boolean
  ignoreUrls?: boolean
  ignoreTemplateLiterals?: boolean
  ignoreRegExpLiterals?: boolean
  ignoreTrailingComments?: boolean
}]

}
declare namespace R57 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  max?: number
  ignoredNodes?: ("BreakStatement" | "ClassDeclaration" | "ContinueStatement" | "DebuggerStatement" | "DoWhileStatement" | "ExpressionStatement" | "ForInStatement" | "ForOfStatement" | "ForStatement" | "FunctionDeclaration" | "IfStatement" | "ImportDeclaration" | "LabeledStatement" | "ReturnStatement" | "SwitchStatement" | "ThrowStatement" | "TryStatement" | "VariableDeclaration" | "WhileStatement" | "WithStatement" | "ExportNamedDeclaration" | "ExportDefaultDeclaration" | "ExportAllDeclaration")[]
}]

}
declare namespace R58 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  multiline?: {
    delimiter?: MultiLineOption
    requireLast?: boolean
  }
  singleline?: {
    delimiter?: SingleLineOption
    requireLast?: boolean
  }
  overrides?: {
    interface?: DelimiterConfig
    typeLiteral?: DelimiterConfig
  }
  multilineDetection?: ("brackets" | "last-member")
}]
type MultiLineOption = ("none" | "semi" | "comma")
type SingleLineOption = ("semi" | "comma")

interface DelimiterConfig {
  multiline?: {
    delimiter?: MultiLineOption
    requireLast?: boolean
  }
  singleline?: {
    delimiter?: SingleLineOption
    requireLast?: boolean
  }
}

}
declare namespace R59 {
type Options = ([]|[("starred-block" | "bare-block")] | []|["separate-lines"]|["separate-lines", {
  checkJSDoc?: boolean
  checkExclamation?: boolean
}])

}
declare namespace R60 {
/**
 * @minItems 0
 * @maxItems 2
 */
type Options = []|[("always" | "always-multiline" | "never")]|[("always" | "always-multiline" | "never"), {
  ignoreJSX?: boolean
}]

}
declare namespace R61 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[("always" | "never")]

}
declare namespace R62 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  ignoreChainWithDepth?: number
}]

}
declare namespace R63 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  allowParens?: boolean
  onlyOneSimpleParam?: boolean
}]

}
declare namespace R64 {
type Options = ([]|["functions"] | []|["all"]|["all", {
  conditionalAssign?: boolean
  ternaryOperandBinaryExpressions?: boolean
  nestedBinaryExpressions?: boolean
  returnAssign?: boolean
  ignoreJSX?: ("none" | "all" | "single-line" | "multi-line")
  enforceForArrowConditionals?: boolean
  enforceForSequenceExpressions?: boolean
  enforceForNewInMemberExpressions?: boolean
  enforceForFunctionPrototypeMethods?: boolean
  allowParensAfterCommentPattern?: string
  nestedConditionalExpressions?: boolean
  allowNodesInSpreadElement?: {
    ConditionalExpression?: boolean
    LogicalExpression?: boolean
    AwaitExpression?: boolean
  }
  ignoredNodes?: string[]
}])

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
 * @maxItems 1
 */
type Options = []|[{
  groups?: [("+" | "-" | "*" | "/" | "%" | "**" | "&" | "|" | "^" | "~" | "<<" | ">>" | ">>>" | "==" | "!=" | "===" | "!==" | ">" | ">=" | "<" | "<=" | "&&" | "||" | "in" | "instanceof" | "?:" | "??"), ("+" | "-" | "*" | "/" | "%" | "**" | "&" | "|" | "^" | "~" | "<<" | ">>" | ">>>" | "==" | "!=" | "===" | "!==" | ">" | ">=" | "<" | "<=" | "&&" | "||" | "in" | "instanceof" | "?:" | "??"), ...(("+" | "-" | "*" | "/" | "%" | "**" | "&" | "|" | "^" | "~" | "<<" | ">>" | ">>>" | "==" | "!=" | "===" | "!==" | ">" | ">=" | "<" | "<=" | "&&" | "||" | "in" | "instanceof" | "?:" | "??"))[]][]
  allowSamePrecedence?: boolean
}]

}
declare namespace R68 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[("smart-tabs" | boolean)]

}
declare namespace R69 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  exceptions?: {
    [k: string]: boolean
  }
  ignoreEOLComments?: boolean
  includeTabs?: boolean
}]

}
declare namespace R70 {
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
declare namespace R71 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  allowIndentationTabs?: boolean
}]

}
declare namespace R72 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  skipBlankLines?: boolean
  ignoreComments?: boolean
}]

}
declare namespace R73 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R74 {
/**
 * @minItems 0
 * @maxItems 2
 */
type Options = []|[("beside" | "below" | "any")]|[("beside" | "below" | "any"), {
  overrides?: {
    if?: ("beside" | "below" | "any")
    else?: ("beside" | "below" | "any")
    while?: ("beside" | "below" | "any")
    do?: ("beside" | "below" | "any")
    for?: ("beside" | "below" | "any")
  }
}]

}
declare namespace R75 {
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
  TSTypeLiteral?: (("always" | "never") | {
    multiline?: boolean
    minProperties?: number
    consistent?: boolean
  })
  TSInterfaceBody?: (("always" | "never") | {
    multiline?: boolean
    minProperties?: number
    consistent?: boolean
  })
  TSEnumBody?: (("always" | "never") | {
    multiline?: boolean
    minProperties?: number
    consistent?: boolean
  })
})]

}
declare namespace R76 {
/**
 * @minItems 0
 * @maxItems 2
 */
type Options = []|[("always" | "never")]|[("always" | "never"), {
  arraysInObjects?: boolean
  objectsInObjects?: boolean
  overrides?: {
    ObjectPattern?: ("always" | "never")
    ObjectExpression?: ("always" | "never")
    ImportDeclaration?: ("always" | "never")
    ImportAttributes?: ("always" | "never")
    ExportNamedDeclaration?: ("always" | "never")
    ExportAllDeclaration?: ("always" | "never")
    TSMappedType?: ("always" | "never")
    TSTypeLiteral?: ("always" | "never")
    TSInterfaceBody?: ("always" | "never")
    TSEnumBody?: ("always" | "never")
  }
  emptyObjects?: ("ignore" | "always" | "never")
}]

}
declare namespace R77 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  allowAllPropertiesOnSameLine?: boolean
}]

}
declare namespace R78 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[("always" | "initializations")]

}
declare namespace R79 {
/**
 * @minItems 0
 * @maxItems 2
 */
type Options = []|[(("after" | "before" | "none") | null)]|[(("after" | "before" | "none") | null), {
  overrides?: {
    [k: string]: ("after" | "before" | "none" | "ignore")
  }
}]

}
declare namespace R80 {
/**
 * @minItems 0
 * @maxItems 2
 */
type Options = []|[(("always" | "never" | "start" | "end") | {
  blocks?: ("always" | "never" | "start" | "end")
  switches?: ("always" | "never" | "start" | "end")
  classes?: ("always" | "never" | "start" | "end")
})]|[(("always" | "never" | "start" | "end") | {
  blocks?: ("always" | "never" | "start" | "end")
  switches?: ("always" | "never" | "start" | "end")
  classes?: ("always" | "never" | "start" | "end")
}), {
  allowSingleLineBlocks?: boolean
}]

}
declare namespace R81 {
type PaddingType = ("any" | "never" | "always")
type StatementOption = (StatementMatcher | [StatementMatcher, ...(StatementMatcher)[]])
type StatementMatcher = (StatementType | SelectorOption)
type StatementType = ("*" | "exports" | "require" | "directive" | "iife" | "block" | "empty" | "function" | "ts-method" | "break" | "case" | "class" | "continue" | "debugger" | "default" | "do" | "for" | "if" | "import" | "switch" | "throw" | "try" | "while" | "with" | "cjs-export" | "cjs-import" | "enum" | "interface" | "function-overload" | "block-like" | "singleline-block-like" | "multiline-block-like" | "expression" | "singleline-expression" | "multiline-expression" | "return" | "singleline-return" | "multiline-return" | "export" | "singleline-export" | "multiline-export" | "var" | "singleline-var" | "multiline-var" | "let" | "singleline-let" | "multiline-let" | "const" | "singleline-const" | "multiline-const" | "using" | "singleline-using" | "multiline-using" | "type" | "singleline-type" | "multiline-type")
type Options = {
  blankLine: PaddingType
  prev: StatementOption
  next: StatementOption
}[]

interface SelectorOption {
  selector: string
  lineMode?: ("any" | "singleline" | "multiline")
}

}
declare namespace R82 {
type Options = ([]|[("always" | "as-needed" | "consistent" | "consistent-as-needed")] | []|[("always" | "as-needed" | "consistent" | "consistent-as-needed")]|[("always" | "as-needed" | "consistent" | "consistent-as-needed"), {
  keywords?: boolean
  unnecessary?: boolean
  numbers?: boolean
}])

}
declare namespace R83 {
/**
 * @minItems 0
 * @maxItems 2
 */
type Options = []|[("single" | "double" | "backtick")]|[("single" | "double" | "backtick"), ("avoid-escape" | {
  avoidEscape?: boolean
  allowTemplateLiterals?: (boolean | ("never" | "avoidEscape" | "always"))
  ignoreStringLiterals?: boolean
})]

}
declare namespace R84 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[("always" | "never")]

}
declare namespace R85 {
type Options = ([]|["never"]|["never", {
  beforeStatementContinuationChars?: ("always" | "any" | "never")
}] | []|["always"]|["always", {
  omitLastInOneLineBlock?: boolean
  omitLastInOneLineClassBody?: boolean
}])

}
declare namespace R86 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  before?: boolean
  after?: boolean
}]

}
declare namespace R87 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[("last" | "first")]

}
declare namespace R88 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[(("always" | "never") | {
  keywords?: ("always" | "never" | "off")
  functions?: ("always" | "never" | "off")
  classes?: ("always" | "never" | "off")
  modules?: ("always" | "never" | "off")
})]

}
declare namespace R89 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[(("always" | "never") | {
  anonymous?: ("always" | "never" | "ignore")
  named?: ("always" | "never" | "ignore")
  asyncArrow?: ("always" | "never" | "ignore")
  catch?: ("always" | "never" | "ignore")
})]

}
declare namespace R90 {
/**
 * @minItems 0
 * @maxItems 2
 */
type Options = []|[("always" | "never")]|[("always" | "never"), {
  exceptions?: ("{}" | "[]" | "()" | "empty")[]
}]

}
declare namespace R91 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  int32Hint?: boolean
  ignoreTypes?: boolean
}]

}
declare namespace R92 {
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
declare namespace R93 {
/**
 * @minItems 0
 * @maxItems 2
 */
type Options = []|[("always" | "never")]|[("always" | "never"), {
  exceptions?: string[]
  markers?: string[]
  line?: {
    exceptions?: string[]
    markers?: string[]
  }
  block?: {
    exceptions?: string[]
    markers?: string[]
    balanced?: boolean
  }
}]

}
declare namespace R94 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  before?: boolean
  after?: boolean
}]

}
declare namespace R95 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[("always" | "never")]

}
declare namespace R96 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[("always" | "never")]

}
declare namespace R97 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  before?: boolean
  after?: boolean
  overrides?: {
    colon?: SpacingConfig
    arrow?: ("ignore" | SpacingConfig)
    variable?: SpacingConfig
    parameter?: SpacingConfig
    property?: SpacingConfig
    returnType?: SpacingConfig
  }
}]

interface SpacingConfig {
  before?: boolean
  after?: boolean
}

}
declare namespace R98 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R99 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R100 {
/**
 * @minItems 0
 * @maxItems 2
 */
type Options = []|[("outside" | "inside" | "any")]|[("outside" | "inside" | "any"), {
  functionPrototypeMethods?: boolean
}]

}
declare namespace R101 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R102 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[(("before" | "after" | "both" | "neither") | {
  before?: boolean
  after?: boolean
})]

}
export type RuleOptions = {
  "antfu/consistent-chaining": R0.Options;
  "antfu/consistent-list-newline": R1.Options;
  "antfu/curly": R2.Options;
  "antfu/if-newline": R3.Options;
  "antfu/reasonable-newline": R4.Options;
  "antfu/top-level-function": R5.Options;
  "style/array-bracket-newline": R6.Options;
  "style/array-bracket-spacing": R7.Options;
  "style/array-element-newline": R8.Options;
  "style/arrow-parens": R9.Options;
  "style/arrow-spacing": R10.Options;
  "style/block-spacing": R11.Options;
  "style/brace-style": R12.Options;
  "style/comma-dangle": R13.Options;
  "style/comma-spacing": R14.Options;
  "style/comma-style": R15.Options;
  "style/computed-property-spacing": R16.Options;
  "style/curly-newline": R17.Options;
  "style/dot-location": R18.Options;
  "style/eol-last": R19.Options;
  "style/exp-jsx-props-style": R20.Options;
  "style/exp-list-style": R21.Options;
  "style/function-call-argument-newline": R22.Options;
  "style/function-call-spacing": R23.Options;
  "style/function-paren-newline": R24.Options;
  "style/generator-star-spacing": R25.Options;
  "style/implicit-arrow-linebreak": R26.Options;
  "style/indent": R27.Options;
  "style/indent-binary-ops": R28.Options;
  "style/jsx-child-element-spacing": R29.Options;
  "style/jsx-closing-bracket-location": R30.Options;
  "style/jsx-closing-tag-location": R31.Options;
  "style/jsx-curly-brace-presence": R32.Options;
  "style/jsx-curly-newline": R33.Options;
  "style/jsx-curly-spacing": R34.Options;
  "style/jsx-equals-spacing": R35.Options;
  "style/jsx-first-prop-new-line": R36.Options;
  "style/jsx-function-call-newline": R37.Options;
  "style/jsx-indent": R38.Options;
  "style/jsx-indent-props": R39.Options;
  "style/jsx-max-props-per-line": R40.Options;
  "style/jsx-newline": R41.Options;
  "style/jsx-one-expression-per-line": R42.Options;
  "style/jsx-pascal-case": R43.Options;
  "style/jsx-props-no-multi-spaces": R44.Options;
  "style/jsx-quotes": R45.Options;
  "style/jsx-self-closing-comp": R46.Options;
  "style/jsx-sort-props": R47.Options;
  "style/jsx-tag-spacing": R48.Options;
  "style/jsx-wrap-multilines": R49.Options;
  "style/key-spacing": R50.Options;
  "style/keyword-spacing": R51.Options;
  "style/line-comment-position": R52.Options;
  "style/linebreak-style": R53.Options;
  "style/lines-around-comment": R54.Options;
  "style/lines-between-class-members": R55.Options;
  "style/max-len": R56.Options;
  "style/max-statements-per-line": R57.Options;
  "style/member-delimiter-style": R58.Options;
  "style/multiline-comment-style": R59.Options;
  "style/multiline-ternary": R60.Options;
  "style/new-parens": R61.Options;
  "style/newline-per-chained-call": R62.Options;
  "style/no-confusing-arrow": R63.Options;
  "style/no-extra-parens": R64.Options;
  "style/no-extra-semi": R65.Options;
  "style/no-floating-decimal": R66.Options;
  "style/no-mixed-operators": R67.Options;
  "style/no-mixed-spaces-and-tabs": R68.Options;
  "style/no-multi-spaces": R69.Options;
  "style/no-multiple-empty-lines": R70.Options;
  "style/no-tabs": R71.Options;
  "style/no-trailing-spaces": R72.Options;
  "style/no-whitespace-before-property": R73.Options;
  "style/nonblock-statement-body-position": R74.Options;
  "style/object-curly-newline": R75.Options;
  "style/object-curly-spacing": R76.Options;
  "style/object-property-newline": R77.Options;
  "style/one-var-declaration-per-line": R78.Options;
  "style/operator-linebreak": R79.Options;
  "style/padded-blocks": R80.Options;
  "style/padding-line-between-statements": R81.Options;
  "style/quote-props": R82.Options;
  "style/quotes": R83.Options;
  "style/rest-spread-spacing": R84.Options;
  "style/semi": R85.Options;
  "style/semi-spacing": R86.Options;
  "style/semi-style": R87.Options;
  "style/space-before-blocks": R88.Options;
  "style/space-before-function-paren": R89.Options;
  "style/space-in-parens": R90.Options;
  "style/space-infix-ops": R91.Options;
  "style/space-unary-ops": R92.Options;
  "style/spaced-comment": R93.Options;
  "style/switch-colon-spacing": R94.Options;
  "style/template-curly-spacing": R95.Options;
  "style/template-tag-spacing": R96.Options;
  "style/type-annotation-spacing": R97.Options;
  "style/type-generic-spacing": R98.Options;
  "style/type-named-tuple-spacing": R99.Options;
  "style/wrap-iife": R100.Options;
  "style/wrap-regex": R101.Options;
  "style/yield-star-spacing": R102.Options;
};

export type TypedRuleIds = never;
