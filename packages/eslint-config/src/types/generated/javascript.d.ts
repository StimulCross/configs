// Generated from installed rule schemas. Do not edit.
// schemas-sha256: 5a7e2e5d559bc4ab58d9080e45293701794be41cac8d5eff27a2c2486f518476
declare namespace R0 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  getWithoutSet?: boolean
  setWithoutGet?: boolean
  enforceForClassMembers?: boolean
  enforceForTSTypes?: boolean
}]

}
declare namespace R1 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  indent?: number
  tags?: string[]
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
type Options = []|[(("always" | "never" | "consistent") | {
  multiline?: boolean
  minItems?: (number | null)
})]

}
declare namespace R5 {
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
declare namespace R6 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  allowImplicit?: boolean
  checkForEach?: boolean
  allowVoid?: boolean
}]

}
declare namespace R7 {
type Options = []|[(BasicConfig | {
  ArrayExpression?: BasicConfig
  ArrayPattern?: BasicConfig
})]
type BasicConfig = (("always" | "never" | "consistent") | {
  multiline?: boolean
  minItems?: (number | null)
})

}
declare namespace R8 {
type Options = ([]|[("always" | "never")] | []|["as-needed"]|["as-needed", {
  requireReturnForObjectLiteral?: boolean
}])

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
 * @maxItems 0
 */
type Options = []

}
declare namespace R12 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[("always" | "never")]

}
declare namespace R13 {
/**
 * @minItems 0
 * @maxItems 2
 */
type Options = []|[("1tbs" | "stroustrup" | "allman")]|[("1tbs" | "stroustrup" | "allman"), {
  allowSingleLine?: boolean
}]

}
declare namespace R14 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[string[]]

}
declare namespace R15 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  ignoreDestructuring?: boolean
  ignoreImports?: boolean
  ignoreGlobals?: boolean
  properties?: ("always" | "never")
  /**
   * @minItems 0
   */
  allow?: string[]
}]

}
declare namespace R16 {
/**
 * @minItems 0
 * @maxItems 2
 */
type Options = []|[("always" | "never")]|[("always" | "never"), ({
  ignorePattern?: string
  ignoreInlineComments?: boolean
  ignoreConsecutiveComments?: boolean
} | {
  line?: {
    ignorePattern?: string
    ignoreInlineComments?: boolean
    ignoreConsecutiveComments?: boolean
  }
  block?: {
    ignorePattern?: string
    ignoreInlineComments?: boolean
    ignoreConsecutiveComments?: boolean
  }
})]

}
declare namespace R17 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  exceptMethods?: string[]
  enforceForClassFields?: boolean
  ignoreOverrideMethods?: boolean
  ignoreClassesWithImplements?: ("all" | "public-fields")
}]

}
declare namespace R18 {
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
declare namespace R19 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  before?: boolean
  after?: boolean
}]

}
declare namespace R20 {
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
declare namespace R21 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[(number | {
  maximum?: number
  max?: number
  variant?: ("classic" | "modified")
})]

}
declare namespace R22 {
/**
 * @minItems 0
 * @maxItems 2
 */
type Options = []|[("always" | "never")]|[("always" | "never"), {
  enforceForClassMembers?: boolean
}]

}
declare namespace R23 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  treatUndefinedAsUnspecified?: boolean
}]

}
declare namespace R24 {
type Options = string[]

}
declare namespace R25 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R26 {
type Options = ([]|["all"] | []|[("multi" | "multi-line" | "multi-or-nest")]|[("multi" | "multi-line" | "multi-or-nest"), "consistent"])

}
declare namespace R27 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  commentPattern?: string
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
 * @maxItems 1
 */
type Options = []|[("object" | "property")]

}
declare namespace R31 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  allowKeywords?: boolean
  allowPattern?: string
}]

}
declare namespace R32 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[("always" | "never" | "unix" | "windows")]

}
declare namespace R33 {
type Options = ([]|["always"]|["always", {
  null?: ("always" | "never" | "ignore")
}] | []|[("smart" | "allow-null")])

}
declare namespace R34 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R35 {
type Options = ([]|["never"] | []|["always"]|["always", {
  allowNewlines?: boolean
}])

}
declare namespace R36 {
type Options = ([]|[("always" | "never")]|[("always" | "never"), {
  considerPropertyDescriptor?: boolean
  includeCommonJSModuleExports?: boolean
}] | []|[{
  considerPropertyDescriptor?: boolean
  includeCommonJSModuleExports?: boolean
}])

}
declare namespace R37 {
type Options = []|[Value]|[Value, {
  generators?: Value
}]
type Value = ("always" | "as-needed" | "never")

}
declare namespace R38 {
/**
 * @minItems 0
 * @maxItems 2
 */
type Options = []|[("declaration" | "expression")]|[("declaration" | "expression"), {
  allowArrowFunctions?: boolean
  allowTypeAnnotation?: boolean
  overrides?: {
    namedExports?: ("declaration" | "expression" | "ignore")
  }
}]

}
declare namespace R39 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[("always" | "never" | "consistent")]

}
declare namespace R40 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[(("always" | "never" | "consistent" | "multiline" | "multiline-arguments") | {
  minItems?: number
})]

}
declare namespace R41 {
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
})]

}
declare namespace R42 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  allowImplicit?: boolean
}]

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
 * @maxItems 2
 */
type Options = []|[("anyOrder" | "getBeforeSet" | "setBeforeGet")]|[("anyOrder" | "getBeforeSet" | "setBeforeGet"), {
  enforceForTSTypes?: boolean
}]

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
 * @maxItems 1
 */
type Options = []|[string]

}
declare namespace R47 {
type Options = string[]

}
declare namespace R48 {
type Options = string[]

}
declare namespace R49 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  min?: number
  max?: number
  exceptions?: string[]
  exceptionPatterns?: string[]
  properties?: ("always" | "never")
}]

}
declare namespace R50 {
/**
 * @minItems 0
 * @maxItems 2
 */
type Options = []|[string]|[string, {
  properties?: boolean
  classFields?: boolean
  onlyDeclarations?: boolean
  ignoreDestructuring?: boolean
}]

}
declare namespace R51 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[("beside" | "below")]

}
declare namespace R52 {
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
declare namespace R53 {
/**
 * @minItems 0
 * @maxItems 2
 */
type Options = []|[("tab" | number)]|[("tab" | number), {
  SwitchCase?: number
  VariableDeclarator?: (number | {
    var?: number
    let?: number
    const?: number
    [k: string]: unknown
  })
  outerIIFEBody?: number
  MemberExpression?: number
  FunctionDeclaration?: {
    parameters?: (number | "first")
    body?: number
    [k: string]: unknown
  }
  FunctionExpression?: {
    parameters?: (number | "first")
    body?: number
    [k: string]: unknown
  }
  CallExpression?: {
    parameters?: (number | "first")
    [k: string]: unknown
  }
  ArrayExpression?: (number | "first")
  ObjectExpression?: (number | "first")
}]

}
declare namespace R54 {
type Options = ([]|["always"] | []|["never"]|["never", {
  ignoreForLoopInit?: boolean
}])

}
declare namespace R55 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[("prefer-single" | "prefer-double")]

}
declare namespace R56 {
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
declare namespace R57 {
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
    from?: {
      before?: boolean
      after?: boolean
    }
    function?: {
      before?: boolean
      after?: boolean
    }
    get?: {
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
    let?: {
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
    of?: {
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
    set?: {
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
    yield?: {
      before?: boolean
      after?: boolean
    }
  }
}]

}
declare namespace R58 {
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
declare namespace R59 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[("unix" | "windows")]

}
declare namespace R60 {
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
  ignorePattern?: string
  applyDefaultIgnorePatterns?: boolean
  afterHashbangComment?: boolean
}]

}
declare namespace R61 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[(("always" | "never") | {
  before?: ("always" | "never")
  after?: ("always" | "never")
})]

}
declare namespace R62 {
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
}]

}
declare namespace R63 {
type Options = (([]|["always"]|["always", {
  enforceForIfStatements?: boolean
}] | ["never"]) & unknown[])

}
declare namespace R64 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[(number | {
  ignoreExpressions?: boolean
  max?: number
})]

}
declare namespace R65 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[(number | {
  maximum?: number
  max?: number
})]

}
declare namespace R66 {
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
declare namespace R67 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[(number | {
  max?: number
  skipComments?: boolean
  skipBlankLines?: boolean
})]

}
declare namespace R68 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[({
  max?: number
  skipComments?: boolean
  skipBlankLines?: boolean
  IIFEs?: boolean
} | number)]

}
declare namespace R69 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[(number | {
  maximum?: number
  max?: number
})]

}
declare namespace R70 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[(number | {
  maximum?: number
  max?: number
  /**
   * Whether to count a `this` declaration when the type is `void`.
   */
  countVoidThis?: boolean
  /**
   * Whether to count a `this` declaration.
   */
  countThis?: ("never" | "except-void" | "always")
})]

}
declare namespace R71 {
/**
 * @minItems 0
 * @maxItems 2
 */
type Options = []|[(number | {
  maximum?: number
  max?: number
})]|[(number | {
  maximum?: number
  max?: number
}), {
  ignoreTopLevelFunctions?: boolean
}]

}
declare namespace R72 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  max?: number
}]

}
declare namespace R73 {
type Options = ([]|[("starred-block" | "bare-block")] | []|["separate-lines"]|["separate-lines", {
  checkJSDoc?: boolean
}])

}
declare namespace R74 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[("always" | "always-multiline" | "never")]

}
declare namespace R75 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  newIsCap?: boolean
  capIsNew?: boolean
  newIsCapExceptions?: string[]
  newIsCapExceptionPattern?: string
  capIsNewExceptions?: string[]
  capIsNewExceptionPattern?: string
  properties?: boolean
}]

}
declare namespace R76 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[("always" | "never")]

}
declare namespace R77 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[("never" | "always")]

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
  ignoreChainWithDepth?: number
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
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R82 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R83 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R84 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  allow?: ("^" | "|" | "&" | "<<" | ">>" | ">>>" | "^=" | "|=" | "&=" | "<<=" | ">>=" | ">>>=" | "~")[]
  int32Hint?: boolean
}]

}
declare namespace R85 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R86 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R87 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R88 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R89 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R90 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R91 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[("except-parens" | "always")]

}
declare namespace R92 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  allowParens?: boolean
  onlyOneSimpleParam?: boolean
}]

}
declare namespace R93 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  /**
   * @minItems 1
   */
  allow?: [string, ...(string)[]]
}]

}
declare namespace R94 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R95 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R96 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  checkLoops?: ("all" | "allExceptWhileTrue" | "none" | true | false)
}]

}
declare namespace R97 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

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
 * @maxItems 0
 */
type Options = []

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
 * @maxItems 0
 */
type Options = []

}
declare namespace R103 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R104 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R105 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R106 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R107 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R108 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  includeExports?: boolean
  allowSeparateTypeImports?: boolean
}]

}
declare namespace R109 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  allowElseIf?: boolean
}]

}
declare namespace R110 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  allowEmptyCatch?: boolean
}]

}
declare namespace R111 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R112 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  allow?: ("functions" | "arrowFunctions" | "generatorFunctions" | "methods" | "generatorMethods" | "getters" | "setters" | "constructors" | "asyncFunctions" | "asyncMethods" | "privateConstructors" | "protectedConstructors" | "decoratedFunctions" | "overrideMethods")[]
}]

}
declare namespace R113 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  allowObjectPatternsAsParameters?: boolean
}]

}
declare namespace R114 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R115 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R116 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  allowIndirect?: boolean
}]

}
declare namespace R117 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R118 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  exceptions?: string[]
}]

}
declare namespace R119 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R120 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[({
  enforceForInnerExpressions?: boolean
} | {
  enforceForLogicalOperands?: boolean
})]

}
declare namespace R121 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R122 {
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
}])

}
declare namespace R123 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R124 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  commentPattern?: string
  allowEmptyCase?: boolean
  reportUnusedFallthroughComment?: boolean
}]

}
declare namespace R125 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R126 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R127 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  exceptions?: string[]
}]

}
declare namespace R128 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  boolean?: boolean
  number?: boolean
  string?: boolean
  disallowTemplateShorthand?: boolean
  allow?: ("~" | "!!" | "+" | "- -" | "-" | "*")[]
}]

}
declare namespace R129 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  lexicalBindings?: boolean
}]

}
declare namespace R130 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R131 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R132 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  ignorePattern?: string
}]

}
declare namespace R133 {
/**
 * @minItems 0
 * @maxItems 2
 */
type Options = []|[("functions" | "both")]|[("functions" | "both"), {
  blockScopedFunctions?: ("allow" | "disallow")
}]

}
declare namespace R134 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  allowConstructorFlags?: string[]
}]

}
declare namespace R135 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  capIsConstructor?: boolean
}]

}
declare namespace R136 {
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
declare namespace R137 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R138 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R139 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  allowLoop?: boolean
  allowSwitch?: boolean
}]

}
declare namespace R140 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R141 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R142 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R143 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R144 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  detectObjects?: boolean
  enforceConst?: boolean
  ignore?: (number | string)[]
  ignoreArrayIndexes?: boolean
  ignoreDefaultValues?: boolean
  ignoreClassFieldInitialValues?: boolean
  ignoreEnums?: boolean
  ignoreNumericLiteralTypes?: boolean
  ignoreReadonlyClassProperties?: boolean
  ignoreTypeIndexes?: boolean
}]

}
declare namespace R145 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  allowEscape?: boolean
}]

}
declare namespace R146 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  groups?: [("+" | "-" | "*" | "/" | "%" | "**" | "&" | "|" | "^" | "~" | "<<" | ">>" | ">>>" | "==" | "!=" | "===" | "!==" | ">" | ">=" | "<" | "<=" | "&&" | "||" | "in" | "instanceof" | "?:" | "??"), ("+" | "-" | "*" | "/" | "%" | "**" | "&" | "|" | "^" | "~" | "<<" | ">>" | ">>>" | "==" | "!=" | "===" | "!==" | ">" | ">=" | "<" | "<=" | "&&" | "||" | "in" | "instanceof" | "?:" | "??"), ...(("+" | "-" | "*" | "/" | "%" | "**" | "&" | "|" | "^" | "~" | "<<" | ">>" | ">>>" | "==" | "!=" | "===" | "!==" | ">" | ">=" | "<" | "<=" | "&&" | "||" | "in" | "instanceof" | "?:" | "??"))[]][]
  allowSamePrecedence?: boolean
}]

}
declare namespace R147 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[(boolean | {
  grouping?: boolean
  allowCall?: boolean
})]

}
declare namespace R148 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[("smart-tabs" | true | false)]

}
declare namespace R149 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  ignoreNonDeclaration?: boolean
}]

}
declare namespace R150 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  exceptions?: {
    [k: string]: boolean
  }
  ignoreEOLComments?: boolean
}]

}
declare namespace R151 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R152 {
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
declare namespace R153 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  exceptions?: string[]
}]

}
declare namespace R154 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R155 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R156 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R157 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R158 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R159 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R160 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R161 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R162 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R163 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R164 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R165 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R166 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R167 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R168 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R169 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[({
  props?: false
} | {
  props?: true
  ignorePropertyModificationsFor?: string[]
  ignorePropertyModificationsForRegex?: string[]
})]

}
declare namespace R170 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R171 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  allowForLoopAfterthoughts?: boolean
}]

}
declare namespace R172 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R173 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R174 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  allowVoid?: boolean
}]

}
declare namespace R175 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R176 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R177 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  builtinGlobals?: boolean
}]

}
declare namespace R178 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R179 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[({
  restrictedNamedExports?: string[]
  restrictedNamedExportsPattern?: string
} | {
  restrictedNamedExports?: string[]
  restrictedNamedExportsPattern?: string
  restrictDefaultExports?: {
    direct?: boolean
    named?: boolean
    defaultFrom?: boolean
    namedFrom?: boolean
    namespaceFrom?: boolean
  }
})]

}
declare namespace R180 {
type Options = ((string | {
  name: string
  message?: string
})[] | []|[{
  /**
   * @minItems 0
   */
  globals: (string | {
    name: string
    message?: string
  })[]
  checkGlobalObject?: boolean
  globalObjects?: string[]
}])

}
declare namespace R181 {
type Options = ((string | {
  name: string
  message?: string
  importNames?: string[]
  allowImportNames?: string[]
  /**
   * Whether to allow type-only imports for a path.
   */
  allowTypeImports?: boolean
})[] | []|[{
  paths?: (string | {
    name: string
    message?: string
    importNames?: string[]
    allowImportNames?: string[]
    /**
     * Whether to allow type-only imports for a path.
     */
    allowTypeImports?: boolean
  })[]
  patterns?: (string[] | ({
    [k: string]: unknown
  } | {
    [k: string]: unknown
  })[])
}])

}
declare namespace R182 {
type Options = ((string | {
  name: string
  message?: string
})[] | {
  paths?: (string | {
    name: string
    message?: string
  })[]
  patterns?: string[]
}[])

}
declare namespace R183 {
type Options = ({
  [k: string]: unknown
} | {
  [k: string]: unknown
})[]

}
declare namespace R184 {
/**
 * @minItems 0
 */
type Options = (string | {
  selector: string
  message?: string
})[]

}
declare namespace R185 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[("except-parens" | "always")]

}
declare namespace R186 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R187 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R188 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  props?: boolean
}]

}
declare namespace R189 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R190 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  allowInParentheses?: boolean
}]

}
declare namespace R191 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R192 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  builtinGlobals?: boolean
  hoist?: ("all" | "functions" | "never" | "types" | "functions-and-types")
  allow?: string[]
  ignoreOnInitialization?: boolean
  ignoreTypeValueShadow?: boolean
  ignoreFunctionTypeParameterNameValueShadow?: boolean
}]

}
declare namespace R193 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  reportGlobalThis?: boolean
}]

}
declare namespace R194 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R195 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R196 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  allowAtRootLevel?: boolean
}]

}
declare namespace R197 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  allowIndentationTabs?: boolean
}]

}
declare namespace R198 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R199 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R200 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R201 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R202 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  skipBlankLines?: boolean
  ignoreComments?: boolean
}]

}
declare namespace R203 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R204 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  typeof?: boolean
}]

}
declare namespace R205 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R206 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R207 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  allow?: string[]
  allowAfterThis?: boolean
  allowAfterSuper?: boolean
  allowAfterThisConstructor?: boolean
  enforceInMethodNames?: boolean
  allowFunctionParams?: boolean
  enforceInClassFields?: boolean
  allowInArrayDestructuring?: boolean
  allowInObjectDestructuring?: boolean
}]

}
declare namespace R208 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R209 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R210 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  defaultAssignment?: boolean
}]

}
declare namespace R211 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R212 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  ignore?: ("WhileStatement" | "DoWhileStatement" | "ForStatement" | "ForInStatement" | "ForOfStatement")[]
}]

}
declare namespace R213 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R214 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  enforceForOrderingRelations?: boolean
}]

}
declare namespace R215 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  disallowArithmeticOperators?: boolean
}]

}
declare namespace R216 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  allowShortCircuit?: boolean
  allowTernary?: boolean
  allowTaggedTemplates?: boolean
  enforceForJSX?: boolean
  ignoreDirectives?: boolean
}]

}
declare namespace R217 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R218 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R219 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[(("all" | "local") | {
  vars?: ("all" | "local")
  varsIgnorePattern?: string
  args?: ("all" | "after-used" | "none")
  ignoreRestSiblings?: boolean
  argsIgnorePattern?: string
  caughtErrors?: ("all" | "none")
  caughtErrorsIgnorePattern?: string
  destructuredArrayIgnorePattern?: string
  ignoreClassWithStaticInitBlock?: boolean
  ignoreUsingDeclarations?: boolean
  reportUsedIgnorePattern?: boolean
})]

}
declare namespace R220 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[("nofunc" | {
  functions?: boolean
  classes?: boolean
  variables?: boolean
  allowNamedExports?: boolean
  enums?: boolean
  typedefs?: boolean
  ignoreTypeReferences?: boolean
})]

}
declare namespace R221 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R222 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R223 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R224 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R225 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  enforceForClassMembers?: boolean
}]

}
declare namespace R226 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R227 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R228 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  allowRegexCharacters?: string[]
}]

}
declare namespace R229 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  ignoreDestructuring?: boolean
  ignoreImport?: boolean
  ignoreExport?: boolean
}]

}
declare namespace R230 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R231 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R232 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  allowAsStatement?: boolean
}]

}
declare namespace R233 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  terms?: string[]
  location?: ("start" | "anywhere")
  /**
   * @minItems 1
   */
  decoration?: [string, ...(string)[]]
}]

}
declare namespace R234 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R235 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R236 {
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
declare namespace R237 {
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
declare namespace R238 {
/**
 * @minItems 0
 * @maxItems 2
 */
type Options = []|[("always" | "never")]|[("always" | "never"), {
  arraysInObjects?: boolean
  objectsInObjects?: boolean
}]

}
declare namespace R239 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  allowAllPropertiesOnSameLine?: boolean
  allowMultiplePropertiesPerLine?: boolean
}]

}
declare namespace R240 {
type Options = ([]|[("always" | "methods" | "properties" | "never" | "consistent" | "consistent-as-needed")] | []|[("always" | "methods" | "properties")]|[("always" | "methods" | "properties"), {
  avoidQuotes?: boolean
}] | []|[("always" | "methods")]|[("always" | "methods"), {
  ignoreConstructors?: boolean
  methodsIgnorePattern?: string
  avoidQuotes?: boolean
  avoidExplicitReturnArrows?: boolean
}])

}
declare namespace R241 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[(("always" | "never" | "consecutive") | {
  separateRequires?: boolean
  var?: ("always" | "never" | "consecutive")
  let?: ("always" | "never" | "consecutive")
  const?: ("always" | "never" | "consecutive")
  using?: ("always" | "never" | "consecutive")
  awaitUsing?: ("always" | "never" | "consecutive")
} | {
  initialized?: ("always" | "never" | "consecutive")
  uninitialized?: ("always" | "never" | "consecutive")
})]

}
declare namespace R242 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[("always" | "initializations")]

}
declare namespace R243 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[("always" | "never")]

}
declare namespace R244 {
/**
 * @minItems 0
 * @maxItems 2
 */
type Options = []|[("after" | "before" | "none" | null)]|[("after" | "before" | "none" | null), {
  overrides?: {
    [k: string]: ("after" | "before" | "none" | "ignore")
  }
}]

}
declare namespace R245 {
/**
 * @minItems 0
 * @maxItems 2
 */
type Options = []|[(("always" | "never") | {
  blocks?: ("always" | "never")
  switches?: ("always" | "never")
  classes?: ("always" | "never")
})]|[(("always" | "never") | {
  blocks?: ("always" | "never")
  switches?: ("always" | "never")
  classes?: ("always" | "never")
}), {
  allowSingleLineBlocks?: boolean
}]

}
declare namespace R246 {
type PaddingType = ("any" | "never" | "always")
type StatementType = (("*" | "block-like" | "cjs-export" | "cjs-import" | "directive" | "expression" | "iife" | "multiline-block-like" | "multiline-expression" | "multiline-const" | "multiline-let" | "multiline-var" | "singleline-const" | "singleline-let" | "singleline-var" | "block" | "empty" | "function" | "break" | "case" | "class" | "const" | "continue" | "debugger" | "default" | "do" | "export" | "for" | "if" | "import" | "let" | "return" | "switch" | "throw" | "try" | "var" | "while" | "with") | [("*" | "block-like" | "cjs-export" | "cjs-import" | "directive" | "expression" | "iife" | "multiline-block-like" | "multiline-expression" | "multiline-const" | "multiline-let" | "multiline-var" | "singleline-const" | "singleline-let" | "singleline-var" | "block" | "empty" | "function" | "break" | "case" | "class" | "const" | "continue" | "debugger" | "default" | "do" | "export" | "for" | "if" | "import" | "let" | "return" | "switch" | "throw" | "try" | "var" | "while" | "with"), ...(("*" | "block-like" | "cjs-export" | "cjs-import" | "directive" | "expression" | "iife" | "multiline-block-like" | "multiline-expression" | "multiline-const" | "multiline-let" | "multiline-var" | "singleline-const" | "singleline-let" | "singleline-var" | "block" | "empty" | "function" | "break" | "case" | "class" | "const" | "continue" | "debugger" | "default" | "do" | "export" | "for" | "if" | "import" | "let" | "return" | "switch" | "throw" | "try" | "var" | "while" | "with"))[]])
type Options = {
  blankLine: PaddingType
  prev: StatementType
  next: StatementType
}[]

}
declare namespace R247 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  allowNamedFunctions?: boolean
  allowUnboundThis?: boolean
}]

}
declare namespace R248 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  destructuring?: ("any" | "all")
  ignoreReadBeforeAssign?: boolean
}]

}
declare namespace R249 {
/**
 * @minItems 0
 * @maxItems 2
 */
type Options = []|[({
  VariableDeclarator?: {
    array?: boolean
    object?: boolean
  }
  AssignmentExpression?: {
    array?: boolean
    object?: boolean
  }
} | {
  array?: boolean
  object?: boolean
})]|[({
  VariableDeclarator?: {
    array?: boolean
    object?: boolean
  }
  AssignmentExpression?: {
    array?: boolean
    object?: boolean
  }
} | {
  array?: boolean
  object?: boolean
}), {
  enforceForRenamedProperties?: boolean
}]

}
declare namespace R250 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R251 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R252 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R253 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R254 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R255 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  allowEmptyReject?: boolean
}]

}
declare namespace R256 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  exceptions?: ("apply" | "call" | "delete" | "defineProperty" | "getOwnPropertyDescriptor" | "getPrototypeOf" | "setPrototypeOf" | "isExtensible" | "getOwnPropertyNames" | "preventExtensions")[]
}]

}
declare namespace R257 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  disallowRedundantWrapping?: boolean
}]

}
declare namespace R258 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R259 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R260 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R261 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  /**
   * Requires the catch blocks to always have the caught error parameter so it is not discarded.
   */
  requireCatchParameter?: boolean
}]

}
declare namespace R262 {
type Options = ([]|[("always" | "as-needed" | "consistent" | "consistent-as-needed")] | []|[("always" | "as-needed" | "consistent" | "consistent-as-needed")]|[("always" | "as-needed" | "consistent" | "consistent-as-needed"), {
  keywords?: boolean
  unnecessary?: boolean
  numbers?: boolean
}])

}
declare namespace R263 {
/**
 * @minItems 0
 * @maxItems 2
 */
type Options = []|[("single" | "double" | "backtick")]|[("single" | "double" | "backtick"), ("avoid-escape" | {
  avoidEscape?: boolean
  allowTemplateLiterals?: boolean
})]

}
declare namespace R264 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[("always" | "as-needed")]

}
declare namespace R265 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  allowProperties?: boolean
}]

}
declare namespace R266 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R267 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  requireFlag?: ("u" | "v")
}]

}
declare namespace R268 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R269 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[("always" | "never")]

}
declare namespace R270 {
type Options = ([]|["never"]|["never", {
  beforeStatementContinuationChars?: ("always" | "any" | "never")
}] | []|["always"]|["always", {
  omitLastInOneLineBlock?: boolean
  omitLastInOneLineClassBody?: boolean
}])

}
declare namespace R271 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  before?: boolean
  after?: boolean
}]

}
declare namespace R272 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[("last" | "first")]

}
declare namespace R273 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  ignoreCase?: boolean
  /**
   * @minItems 4
   * @maxItems 4
   */
  memberSyntaxSortOrder?: [("none" | "all" | "multiple" | "single"), ("none" | "all" | "multiple" | "single"), ("none" | "all" | "multiple" | "single"), ("none" | "all" | "multiple" | "single")]
  ignoreDeclarationSort?: boolean
  ignoreMemberSort?: boolean
  allowSeparatedGroups?: boolean
}]

}
declare namespace R274 {
/**
 * @minItems 0
 * @maxItems 2
 */
type Options = []|[("asc" | "desc")]|[("asc" | "desc"), {
  caseSensitive?: boolean
  natural?: boolean
  minKeys?: number
  allowLineSeparatedGroups?: boolean
  ignoreComputedKeys?: boolean
}]

}
declare namespace R275 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  ignoreCase?: boolean
}]

}
declare namespace R276 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[(("always" | "never") | {
  keywords?: ("always" | "never" | "off")
  functions?: ("always" | "never" | "off")
  classes?: ("always" | "never" | "off")
})]

}
declare namespace R277 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[(("always" | "never") | {
  anonymous?: ("always" | "never" | "ignore")
  named?: ("always" | "never" | "ignore")
  asyncArrow?: ("always" | "never" | "ignore")
})]

}
declare namespace R278 {
/**
 * @minItems 0
 * @maxItems 2
 */
type Options = []|[("always" | "never")]|[("always" | "never"), {
  exceptions?: ("{}" | "[]" | "()" | "empty")[]
}]

}
declare namespace R279 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  int32Hint?: boolean
}]

}
declare namespace R280 {
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
declare namespace R281 {
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
declare namespace R282 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[("never" | "global" | "function" | "safe")]

}
declare namespace R283 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  before?: boolean
  after?: boolean
}]

}
declare namespace R284 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R285 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[("always" | "never")]

}
declare namespace R286 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[("always" | "never")]

}
declare namespace R287 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[("always" | "never")]

}
declare namespace R288 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  enforceForSwitchCase?: boolean
  enforceForIndexOf?: boolean
}]

}
declare namespace R289 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  requireStringLiterals?: boolean
}]

}
declare namespace R290 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R291 {
/**
 * @minItems 0
 * @maxItems 2
 */
type Options = []|[("outside" | "inside" | "any")]|[("outside" | "inside" | "any"), {
  functionPrototypeMethods?: boolean
}]

}
declare namespace R292 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R293 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[(("before" | "after" | "both" | "neither") | {
  before?: boolean
  after?: boolean
})]

}
declare namespace R294 {
/**
 * @minItems 0
 * @maxItems 2
 */
type Options = []|[("always" | "never")]|[("always" | "never"), {
  exceptRange?: boolean
  onlyEquality?: boolean
}]

}
export type RuleOptions = {
  "accessor-pairs": R0.Options;
  "antfu/indent-unindent": R1.Options;
  "antfu/no-top-level-await": R2.Options;
  "antfu/no-ts-export-equal": R3.Options;
  "array-bracket-newline": R4.Options;
  "array-bracket-spacing": R5.Options;
  "array-callback-return": R6.Options;
  "array-element-newline": R7.Options;
  "arrow-body-style": R8.Options;
  "arrow-parens": R9.Options;
  "arrow-spacing": R10.Options;
  "block-scoped-var": R11.Options;
  "block-spacing": R12.Options;
  "brace-style": R13.Options;
  "callback-return": R14.Options;
  "camelcase": R15.Options;
  "capitalized-comments": R16.Options;
  "class-methods-use-this": R17.Options;
  "comma-dangle": R18.Options;
  "comma-spacing": R19.Options;
  "comma-style": R20.Options;
  "complexity": R21.Options;
  "computed-property-spacing": R22.Options;
  "consistent-return": R23.Options;
  "consistent-this": R24.Options;
  "constructor-super": R25.Options;
  "curly": R26.Options;
  "default-case": R27.Options;
  "default-case-last": R28.Options;
  "default-param-last": R29.Options;
  "dot-location": R30.Options;
  "dot-notation": R31.Options;
  "eol-last": R32.Options;
  "eqeqeq": R33.Options;
  "for-direction": R34.Options;
  "func-call-spacing": R35.Options;
  "func-name-matching": R36.Options;
  "func-names": R37.Options;
  "func-style": R38.Options;
  "function-call-argument-newline": R39.Options;
  "function-paren-newline": R40.Options;
  "generator-star-spacing": R41.Options;
  "getter-return": R42.Options;
  "global-require": R43.Options;
  "grouped-accessor-pairs": R44.Options;
  "guard-for-in": R45.Options;
  "handle-callback-err": R46.Options;
  "id-blacklist": R47.Options;
  "id-denylist": R48.Options;
  "id-length": R49.Options;
  "id-match": R50.Options;
  "implicit-arrow-linebreak": R51.Options;
  "indent": R52.Options;
  "indent-legacy": R53.Options;
  "init-declarations": R54.Options;
  "jsx-quotes": R55.Options;
  "key-spacing": R56.Options;
  "keyword-spacing": R57.Options;
  "line-comment-position": R58.Options;
  "linebreak-style": R59.Options;
  "lines-around-comment": R60.Options;
  "lines-around-directive": R61.Options;
  "lines-between-class-members": R62.Options;
  "logical-assignment-operators": R63.Options;
  "max-classes-per-file": R64.Options;
  "max-depth": R65.Options;
  "max-len": R66.Options;
  "max-lines": R67.Options;
  "max-lines-per-function": R68.Options;
  "max-nested-callbacks": R69.Options;
  "max-params": R70.Options;
  "max-statements": R71.Options;
  "max-statements-per-line": R72.Options;
  "multiline-comment-style": R73.Options;
  "multiline-ternary": R74.Options;
  "new-cap": R75.Options;
  "new-parens": R76.Options;
  "newline-after-var": R77.Options;
  "newline-before-return": R78.Options;
  "newline-per-chained-call": R79.Options;
  "no-alert": R80.Options;
  "no-array-constructor": R81.Options;
  "no-async-promise-executor": R82.Options;
  "no-await-in-loop": R83.Options;
  "no-bitwise": R84.Options;
  "no-buffer-constructor": R85.Options;
  "no-caller": R86.Options;
  "no-case-declarations": R87.Options;
  "no-catch-shadow": R88.Options;
  "no-class-assign": R89.Options;
  "no-compare-neg-zero": R90.Options;
  "no-cond-assign": R91.Options;
  "no-confusing-arrow": R92.Options;
  "no-console": R93.Options;
  "no-const-assign": R94.Options;
  "no-constant-binary-expression": R95.Options;
  "no-constant-condition": R96.Options;
  "no-constructor-return": R97.Options;
  "no-continue": R98.Options;
  "no-control-regex": R99.Options;
  "no-debugger": R100.Options;
  "no-delete-var": R101.Options;
  "no-div-regex": R102.Options;
  "no-dupe-args": R103.Options;
  "no-dupe-class-members": R104.Options;
  "no-dupe-else-if": R105.Options;
  "no-dupe-keys": R106.Options;
  "no-duplicate-case": R107.Options;
  "no-duplicate-imports": R108.Options;
  "no-else-return": R109.Options;
  "no-empty": R110.Options;
  "no-empty-character-class": R111.Options;
  "no-empty-function": R112.Options;
  "no-empty-pattern": R113.Options;
  "no-empty-static-block": R114.Options;
  "no-eq-null": R115.Options;
  "no-eval": R116.Options;
  "no-ex-assign": R117.Options;
  "no-extend-native": R118.Options;
  "no-extra-bind": R119.Options;
  "no-extra-boolean-cast": R120.Options;
  "no-extra-label": R121.Options;
  "no-extra-parens": R122.Options;
  "no-extra-semi": R123.Options;
  "no-fallthrough": R124.Options;
  "no-floating-decimal": R125.Options;
  "no-func-assign": R126.Options;
  "no-global-assign": R127.Options;
  "no-implicit-coercion": R128.Options;
  "no-implicit-globals": R129.Options;
  "no-implied-eval": R130.Options;
  "no-import-assign": R131.Options;
  "no-inline-comments": R132.Options;
  "no-inner-declarations": R133.Options;
  "no-invalid-regexp": R134.Options;
  "no-invalid-this": R135.Options;
  "no-irregular-whitespace": R136.Options;
  "no-iterator": R137.Options;
  "no-label-var": R138.Options;
  "no-labels": R139.Options;
  "no-lone-blocks": R140.Options;
  "no-lonely-if": R141.Options;
  "no-loop-func": R142.Options;
  "no-loss-of-precision": R143.Options;
  "no-magic-numbers": R144.Options;
  "no-misleading-character-class": R145.Options;
  "no-mixed-operators": R146.Options;
  "no-mixed-requires": R147.Options;
  "no-mixed-spaces-and-tabs": R148.Options;
  "no-multi-assign": R149.Options;
  "no-multi-spaces": R150.Options;
  "no-multi-str": R151.Options;
  "no-multiple-empty-lines": R152.Options;
  "no-native-reassign": R153.Options;
  "no-negated-condition": R154.Options;
  "no-negated-in-lhs": R155.Options;
  "no-nested-ternary": R156.Options;
  "no-new": R157.Options;
  "no-new-func": R158.Options;
  "no-new-native-nonconstructor": R159.Options;
  "no-new-object": R160.Options;
  "no-new-require": R161.Options;
  "no-new-symbol": R162.Options;
  "no-new-wrappers": R163.Options;
  "no-nonoctal-decimal-escape": R164.Options;
  "no-obj-calls": R165.Options;
  "no-object-constructor": R166.Options;
  "no-octal": R167.Options;
  "no-octal-escape": R168.Options;
  "no-param-reassign": R169.Options;
  "no-path-concat": R170.Options;
  "no-plusplus": R171.Options;
  "no-process-env": R172.Options;
  "no-process-exit": R173.Options;
  "no-promise-executor-return": R174.Options;
  "no-proto": R175.Options;
  "no-prototype-builtins": R176.Options;
  "no-redeclare": R177.Options;
  "no-regex-spaces": R178.Options;
  "no-restricted-exports": R179.Options;
  "no-restricted-globals": R180.Options;
  "no-restricted-imports": R181.Options;
  "no-restricted-modules": R182.Options;
  "no-restricted-properties": R183.Options;
  "no-restricted-syntax": R184.Options;
  "no-return-assign": R185.Options;
  "no-return-await": R186.Options;
  "no-script-url": R187.Options;
  "no-self-assign": R188.Options;
  "no-self-compare": R189.Options;
  "no-sequences": R190.Options;
  "no-setter-return": R191.Options;
  "no-shadow": R192.Options;
  "no-shadow-restricted-names": R193.Options;
  "no-spaced-func": R194.Options;
  "no-sparse-arrays": R195.Options;
  "no-sync": R196.Options;
  "no-tabs": R197.Options;
  "no-template-curly-in-string": R198.Options;
  "no-ternary": R199.Options;
  "no-this-before-super": R200.Options;
  "no-throw-literal": R201.Options;
  "no-trailing-spaces": R202.Options;
  "no-unassigned-vars": R203.Options;
  "no-undef": R204.Options;
  "no-undef-init": R205.Options;
  "no-undefined": R206.Options;
  "no-underscore-dangle": R207.Options;
  "no-unexpected-multiline": R208.Options;
  "no-unmodified-loop-condition": R209.Options;
  "no-unneeded-ternary": R210.Options;
  "no-unreachable": R211.Options;
  "no-unreachable-loop": R212.Options;
  "no-unsafe-finally": R213.Options;
  "no-unsafe-negation": R214.Options;
  "no-unsafe-optional-chaining": R215.Options;
  "no-unused-expressions": R216.Options;
  "no-unused-labels": R217.Options;
  "no-unused-private-class-members": R218.Options;
  "no-unused-vars": R219.Options;
  "no-use-before-define": R220.Options;
  "no-useless-assignment": R221.Options;
  "no-useless-backreference": R222.Options;
  "no-useless-call": R223.Options;
  "no-useless-catch": R224.Options;
  "no-useless-computed-key": R225.Options;
  "no-useless-concat": R226.Options;
  "no-useless-constructor": R227.Options;
  "no-useless-escape": R228.Options;
  "no-useless-rename": R229.Options;
  "no-useless-return": R230.Options;
  "no-var": R231.Options;
  "no-void": R232.Options;
  "no-warning-comments": R233.Options;
  "no-whitespace-before-property": R234.Options;
  "no-with": R235.Options;
  "nonblock-statement-body-position": R236.Options;
  "object-curly-newline": R237.Options;
  "object-curly-spacing": R238.Options;
  "object-property-newline": R239.Options;
  "object-shorthand": R240.Options;
  "one-var": R241.Options;
  "one-var-declaration-per-line": R242.Options;
  "operator-assignment": R243.Options;
  "operator-linebreak": R244.Options;
  "padded-blocks": R245.Options;
  "padding-line-between-statements": R246.Options;
  "prefer-arrow-callback": R247.Options;
  "prefer-const": R248.Options;
  "prefer-destructuring": R249.Options;
  "prefer-exponentiation-operator": R250.Options;
  "prefer-named-capture-group": R251.Options;
  "prefer-numeric-literals": R252.Options;
  "prefer-object-has-own": R253.Options;
  "prefer-object-spread": R254.Options;
  "prefer-promise-reject-errors": R255.Options;
  "prefer-reflect": R256.Options;
  "prefer-regex-literals": R257.Options;
  "prefer-rest-params": R258.Options;
  "prefer-spread": R259.Options;
  "prefer-template": R260.Options;
  "preserve-caught-error": R261.Options;
  "quote-props": R262.Options;
  "quotes": R263.Options;
  "radix": R264.Options;
  "require-atomic-updates": R265.Options;
  "require-await": R266.Options;
  "require-unicode-regexp": R267.Options;
  "require-yield": R268.Options;
  "rest-spread-spacing": R269.Options;
  "semi": R270.Options;
  "semi-spacing": R271.Options;
  "semi-style": R272.Options;
  "sort-imports": R273.Options;
  "sort-keys": R274.Options;
  "sort-vars": R275.Options;
  "space-before-blocks": R276.Options;
  "space-before-function-paren": R277.Options;
  "space-in-parens": R278.Options;
  "space-infix-ops": R279.Options;
  "space-unary-ops": R280.Options;
  "spaced-comment": R281.Options;
  "strict": R282.Options;
  "switch-colon-spacing": R283.Options;
  "symbol-description": R284.Options;
  "template-curly-spacing": R285.Options;
  "template-tag-spacing": R286.Options;
  "unicode-bom": R287.Options;
  "use-isnan": R288.Options;
  "valid-typeof": R289.Options;
  "vars-on-top": R290.Options;
  "wrap-iife": R291.Options;
  "wrap-regex": R292.Options;
  "yield-star-spacing": R293.Options;
  "yoda": R294.Options;
};

export type TypedRuleIds = never;
