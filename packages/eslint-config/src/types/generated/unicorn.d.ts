// Generated from installed rule schemas. Do not edit.
// schemas-sha256: 786d0b1e1e3b0daf80e1acff7f60845276378175012d2916b782c3beffa350e7
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
 * @maxItems 1
 */
type Options = []|[{
  /**
   * The expected name for the error variable.
   */
  name?: string
  /**
   * Patterns to ignore.
   */
  ignore?: (string | {
    [k: string]: unknown
  })[]
}]

}
declare namespace R3 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  /**
   * Prefer `this` over the current class name in static methods.
   */
  preferThis?: boolean
  /**
   * Prefer `super` over the superclass name in static methods.
   */
  preferSuper?: boolean
}]

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
type Options = []|[{
  /**
   * Whether to also re-case all-lowercase and all-uppercase tokens. When `false`, only tokens that already mix upper- and lower-case (for example, `Github`) are corrected.
   */
  checkUniformCase?: boolean
  /**
   * Whether to extend the default replacements.
   */
  extendDefaultReplacements?: boolean
  /**
   * Custom comment content replacements.
   */
  replacements?: {
    [k: string]: (false | string | {
      replacement: string
      caseSensitive?: boolean
    })
  }
}]

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
  /**
   * How to check variable names.
   */
  checkVariables?: ("always" | "prohibit" | "never")
  /**
   * How to check parameter names.
   */
  checkArguments?: ("always" | "prohibit" | "never")
  /**
   * How to check function names.
   */
  checkFunctions?: ("always" | "prohibit" | "never")
  /**
   * How to check object and class methods, getters, and TypeScript method signatures. Setter names are ignored because setters do not return values.
   */
  checkMethods?: ("always" | "prohibit" | "never")
  /**
   * How to check object properties, class fields, TypeScript property signatures, and constructor parameter properties.
   */
  checkFields?: ("always" | "prohibit" | "never")
  /**
   * Boolean name prefixes to allow or disallow.
   */
  prefixes?: {
    /**
     * Whether the prefix is allowed.
     */
    [k: string]: boolean
  }
  /**
   * Wrapper type names and their boolean-like value members.
   */
  wrappers?: {
    /**
     * The property or method that provides the wrapped value.
     */
    [k: string]: string
  }
  /**
   * Patterns to ignore.
   */
  ignore?: unknown[]
  [k: string]: unknown
}]

}
declare namespace R9 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  /**
   * The class member group order.
   *
   * @minItems 8
   * @maxItems 8
   */
  order?: [("static-field" | "static-block" | "static-method" | "private-field" | "public-field" | "constructor" | "private-method" | "public-method"), ("static-field" | "static-block" | "static-method" | "private-field" | "public-field" | "constructor" | "private-method" | "public-method"), ("static-field" | "static-block" | "static-method" | "private-field" | "public-field" | "constructor" | "private-method" | "public-method"), ("static-field" | "static-block" | "static-method" | "private-field" | "public-field" | "constructor" | "private-method" | "public-method"), ("static-field" | "static-block" | "static-method" | "private-field" | "public-field" | "constructor" | "private-method" | "public-method"), ("static-field" | "static-block" | "static-method" | "private-field" | "public-field" | "constructor" | "private-method" | "public-method"), ("static-field" | "static-block" | "static-method" | "private-field" | "public-field" | "constructor" | "private-method" | "public-method"), ("static-field" | "static-block" | "static-method" | "private-field" | "public-field" | "constructor" | "private-method" | "public-method")]
}]

}
declare namespace R10 {
type Options = []|[{
  /**
   * Whether to check property names.
   */
  checkProperties?: boolean
  /**
   * Whether to check variable names.
   */
  checkVariables?: boolean
  /**
   * Whether to check default and namespace import names.
   */
  checkDefaultAndNamespaceImports?: (boolean | "internal")
  /**
   * Whether to check shorthand import names.
   */
  checkShorthandImports?: (boolean | "internal")
  /**
   * Whether to check shorthand property names.
   */
  checkShorthandProperties?: boolean
  /**
   * Whether to extend the default replacements.
   */
  extendDefaultReplacements?: boolean
  replacements?: Replacements
  allowList?: TrueObject
}]

/**
 * Custom compound word replacements.
 */
interface Replacements {
  [k: string]: (false | string)
}
/**
 * Custom allow list of names.
 */
interface TrueObject {
  [k: string]: true
}

}
declare namespace R11 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[("logical" | "ternary")]

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
type Options = []|[("above" | "before" | "after")]

}
declare namespace R17 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  /**
   * Whether to check arrow functions.
   */
  checkArrowFunctions?: boolean
}]

}
declare namespace R18 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  default?: ("declaration" | "function-expression" | "arrow-function" | "ignore")
  defaultExport?: ("declaration" | "function-expression" | "arrow-function" | "ignore")
  namedFunctions?: ("declaration" | "function-expression" | "arrow-function" | "ignore")
  namedExports?: ("declaration" | "function-expression" | "arrow-function" | "ignore")
  callbacks?: ("function-expression" | "arrow-function" | "ignore")
  objectProperties?: ("method" | "function-expression" | "arrow-function" | "ignore")
  reassignedVariables?: ("function-expression" | "arrow-function" | "ignore")
  typedVariables?: ("function-expression" | "arrow-function" | "ignore")
}]

}
declare namespace R19 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[("string" | "buffer")]

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
 * @maxItems 1
 */
type Options = []|[{
  functions?: ("inline" | "separate" | "ignore")
  classes?: ("inline" | "separate" | "ignore")
}]

}
declare namespace R25 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  /**
   * Prefer attribute methods over named `.dataset` access.
   */
  preferAttributes?: boolean
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
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R28 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[("uppercase" | "lowercase")]

}
declare namespace R29 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  /**
   * Comment terms to check.
   */
  terms?: string[]
  /**
   * Patterns to ignore.
   */
  ignore?: (string | {
    [k: string]: unknown
  })[]
  /**
   * Whether to check expiration dates.
   */
  checkDates?: boolean
  /**
   * Whether to check expiration dates on pull requests.
   */
  checkDatesOnPullRequests?: boolean
  /**
   * Whether to allow warning comments.
   */
  allowWarningComments?: boolean
  /**
   * The reference date.
   */
  date?: string
}]

}
declare namespace R30 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  "non-zero"?: ("greater-than" | "not-equal")
}]

}
declare namespace R31 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[("always" | "never")]

}
declare namespace R32 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[({
  /**
   * The filename and directory name case style.
   */
  case?: ("camelCase" | "camelCaseWithAcronyms" | "snakeCase" | "kebabCase" | "pascalCase")
  /**
   * Path segment patterns to ignore.
   */
  ignore?: (string | {
    [k: string]: unknown
  })[]
  /**
   * Whether to treat additional, dot-separated parts of a filename as file extensions.
   */
  multipleFileExtensions?: boolean
  /**
   * Whether to check directory names.
   */
  checkDirectories?: boolean
  /**
   * Directory root paths or patterns, relative to the current working directory.
   */
  directoryRoots?: (string | {
    [k: string]: unknown
  })[]
} | {
  /**
   * The allowed filename and directory name case styles.
   */
  cases?: {
    /**
     * Whether to allow camelCase filenames and directory names.
     */
    camelCase?: boolean
    /**
     * Whether to allow camelCase filenames and directory names with acronym segments.
     */
    camelCaseWithAcronyms?: boolean
    /**
     * Whether to allow snake_case filenames and directory names.
     */
    snakeCase?: boolean
    /**
     * Whether to allow kebab-case filenames and directory names.
     */
    kebabCase?: boolean
    /**
     * Whether to allow PascalCase filenames and directory names.
     */
    pascalCase?: boolean
  }
  /**
   * Path segment patterns to ignore.
   */
  ignore?: (string | {
    [k: string]: unknown
  })[]
  /**
   * Whether to treat additional, dot-separated parts of a filename as file extensions.
   */
  multipleFileExtensions?: boolean
  /**
   * Whether to check directory names.
   */
  checkDirectories?: boolean
  /**
   * Directory root paths or patterns, relative to the current working directory.
   */
  directoryRoots?: (string | {
    [k: string]: unknown
  })[]
})]

}
declare namespace R33 {
/**
 * @minItems 0
 * @maxItems 2
 */
type Options = []|[string]|[string, {
  properties?: boolean
  classFields?: boolean
  onlyDeclarations?: boolean
  ignoreDestructuring?: boolean
  /**
   * Whether to check named import specifiers and external named export specifiers.
   */
  checkNamedSpecifiers?: boolean
}]

}
declare namespace R34 {
type Options = []|[{
  /**
   * Whether to check `import` statements.
   */
  checkImport?: boolean
  /**
   * Whether to check dynamic `import()` expressions.
   */
  checkDynamicImport?: boolean
  /**
   * Whether to check `export … from` statements.
   */
  checkExportFrom?: boolean
  /**
   * Whether to check `require()` calls.
   */
  checkRequire?: boolean
  /**
   * Whether to extend the default styles.
   */
  extendDefaultStyles?: boolean
  styles?: ModuleStyles
}]
type Styles = (false | BooleanObject)

/**
 * Module import styles.
 */
interface ModuleStyles {
  [k: string]: Styles
}
interface BooleanObject {
  [k: string]: boolean
}

}
declare namespace R35 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  /**
   * Use tabs or the specified number of spaces per indentation unit.
   */
  indent?: ("tab" | number)
  /**
   * Tab stop width used when converting CSS indentation.
   */
  tabWidth?: number
}]

}
declare namespace R36 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  /**
   * Override which global variables are allowed inside isolated scopes.
   */
  overrideGlobals?: {
    [k: string]: (boolean | ("readonly" | "writable" | "writeable" | "off"))
  }
  /**
   * Function names that mark a scope as isolated.
   */
  functions?: string[]
  /**
   * AST selectors that mark a scope as isolated.
   */
  selectors?: string[]
  /**
   * Comment patterns that mark a scope as isolated.
   */
  comments?: string[]
}]

}
declare namespace R37 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[("guard" | "fallback")]

}
declare namespace R38 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  /**
   * Whether to allow camelCase keys.
   */
  camelCase?: boolean
  /**
   * Whether to allow PascalCase keys.
   */
  PascalCase?: boolean
  /**
   * Whether to allow SCREAMING_SNAKE_CASE keys.
   */
  SCREAMING_SNAKE_CASE?: boolean
  /**
   * Whether to allow kebab-case keys.
   */
  "kebab-case"?: boolean
  /**
   * Whether to allow snake_case keys.
   */
  snake_case?: boolean
  /**
   * Regular expression patterns for keys to ignore.
   */
  ignore?: string[]
}]

}
declare namespace R39 {
type Options = (([]|["always"]|["always", {
  enforceForIfStatements?: boolean
}] | ["never"]) & unknown[])

}
declare namespace R40 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  /**
   * The maximum allowed nested call depth.
   */
  max?: number
}]

}
declare namespace R41 {
type Options = []|[{
  /**
   * Whether to check property names.
   */
  checkProperties?: boolean
  /**
   * Whether to check variable names.
   */
  checkVariables?: boolean
  /**
   * Whether to check default and namespace import names.
   */
  checkDefaultAndNamespaceImports?: (boolean | string)
  /**
   * Whether to check shorthand import names.
   */
  checkShorthandImports?: (boolean | string)
  /**
   * Whether to check shorthand property names.
   */
  checkShorthandProperties?: boolean
  /**
   * Whether to check filenames.
   */
  checkFilenames?: boolean
  /**
   * Whether to extend the default replacements.
   */
  extendDefaultReplacements?: boolean
  replacements?: NameReplacements
  /**
   * Whether to extend the default allow list.
   */
  extendDefaultAllowList?: boolean
  allowList?: BooleanObject1
  /**
   * Patterns to ignore.
   */
  ignore?: (string | {
    [k: string]: unknown
  })[]
}]
type Replacements = (false | BooleanObject)

/**
 * Custom name replacements.
 */
interface NameReplacements {
  [k: string]: Replacements
}
interface BooleanObject {
  [k: string]: boolean
}
/**
 * Custom allow list of names.
 */
interface BooleanObject1 {
  [k: string]: boolean
}

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
 * @maxItems 0
 */
type Options = []

}
declare namespace R46 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R47 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  /**
   * Callees to ignore.
   */
  ignore?: string[]
}]

}
declare namespace R48 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R49 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R50 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R51 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R52 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R53 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R54 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  /**
   * Whether to allow simple reduce operations whose callback body is a single binary expression.
   */
  allowSimpleOperations?: boolean
}]

}
declare namespace R55 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  allowExpressionStatement?: boolean
}]

}
declare namespace R56 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  allowExpressionStatement?: boolean
}]

}
declare namespace R57 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R58 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R59 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R60 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R61 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R62 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R63 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R64 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

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
  /**
   * Whether to also check unlabeled `continue` statements in nested loops and switches inside loops.
   */
  checkContinue?: boolean
}]

}
declare namespace R68 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R69 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R70 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R71 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R72 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

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
 * @maxItems 0
 */
type Options = []

}
declare namespace R75 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R76 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R77 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

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
 * @maxItems 0
 */
type Options = []

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
 * @maxItems 0
 */
type Options = []

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
 * @maxItems 1
 */
type Options = []|[{
  /**
   * Whether to allow files that only contain comments.
   */
  allowComments?: boolean
}]

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
 * @maxItems 0
 */
type Options = []

}
declare namespace R92 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R93 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

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
 * @maxItems 1
 */
type Options = []|[{
  /**
   * Whether to check conditional mutations.
   */
  checkConditionals?: boolean
}]

}
declare namespace R96 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

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
 * @maxItems 1
 */
type Options = []|[{
  useErrorIsError?: boolean
  strategy?: ("loose" | "strict")
  include?: string[]
  exclude?: string[]
}]

}
declare namespace R103 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  [k: string]: (number | [number, ...(number)[]] | {
    min?: number
    max?: number
  })
}]

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
 * @maxItems 0
 */
type Options = []

}
declare namespace R109 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R110 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

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
 * @maxItems 0
 */
type Options = []

}
declare namespace R113 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

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
 * @maxItems 0
 */
type Options = []

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
 * @maxItems 0
 */
type Options = []

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
type Options = []|[{
  /**
   * The prefixes to disallow.
   *
   * @minItems 0
   */
  disallowedPrefixes?: string[]
  /**
   * Whether to check property names.
   */
  checkProperties?: boolean
  /**
   * Whether to only check camelCase names.
   */
  onlyCamelCase?: boolean
}]

}
declare namespace R121 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R122 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

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
 * @maxItems 0
 */
type Options = []

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
 * @maxItems 0
 */
type Options = []

}
declare namespace R128 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R129 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

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
 * @maxItems 0
 */
type Options = []

}
declare namespace R133 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R134 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R135 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R136 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  /**
   * Check logical expressions that only contain equality comparisons.
   */
  checkLogicalExpressions?: boolean
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
 * @maxItems 0
 */
type Options = []

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
 * @maxItems 1
 */
type Options = []|[{
  /**
   * Function-style verb prefixes to check.
   *
   * @minItems 0
   */
  verbs?: string[]
  /**
   * Patterns to ignore.
   */
  ignore?: (string | {
    [k: string]: unknown
  })[]
}]

}
declare namespace R144 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R145 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  /**
   * Whether to check `null` used as a direct function call or constructor argument.
   */
  checkArguments?: boolean
  /**
   * Whether to check strict equality comparisons against `null`.
   */
  checkStrictEquality?: boolean
}]

}
declare namespace R146 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R147 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R148 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R149 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R150 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

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
 * @maxItems 0
 */
type Options = []

}
declare namespace R153 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

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
 * @maxItems 1
 */
type Options = []|[{
  /**
   * Additional pure export names by import source.
   */
  allow?: {
    [k: string]: string[]
  }
}]

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
 * @maxItems 1
 */
type Options = []|[{
  /**
   * Whether to also check `typeof` comparisons against global variables.
   */
  checkGlobalVariables?: boolean
}]

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
 * @maxItems 0
 */
type Options = []

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
 * @maxItems 0
 */
type Options = []

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
 * @maxItems 0
 */
type Options = []

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
 * @maxItems 0
 */
type Options = []

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
 * @maxItems 0
 */
type Options = []

}
declare namespace R180 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  /**
   * Minimum number of external call sites required to check a function.
   */
  minimumCallCount?: number
}]

}
declare namespace R181 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  /**
   * The target environments.
   */
  targets?: (string | string[] | {
    [k: string]: unknown
  })
}]

}
declare namespace R182 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R183 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R184 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R185 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  /**
   * Maximum number of consecutive ignored elements allowed.
   */
  maximumIgnoredElements?: number
}]

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
 * @maxItems 0
 */
type Options = []

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
 * @maxItems 0
 */
type Options = []

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
 * @maxItems 0
 */
type Options = []

}
declare namespace R193 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

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
 * @maxItems 0
 */
type Options = []

}
declare namespace R197 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

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
 * @maxItems 0
 */
type Options = []

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
 * @maxItems 0
 */
type Options = []

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
 * @maxItems 0
 */
type Options = []

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
 * @maxItems 0
 */
type Options = []

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
 * @maxItems 0
 */
type Options = []

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
 * @maxItems 0
 */
type Options = []

}
declare namespace R215 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R216 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

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
 * @maxItems 0
 */
type Options = []

}
declare namespace R220 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

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
 * @maxItems 1
 */
type Options = []|[{
  /**
   * Whether to check function arguments.
   */
  checkArguments?: boolean
  /**
   * Whether to check arrow function bodies.
   */
  checkArrowFunctionBody?: boolean
}]

}
declare namespace R225 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

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
  hexadecimalValue?: ("uppercase" | "lowercase")
}]

}
declare namespace R229 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  binary?: {
    /**
     * Whether to only enforce the style if the number already contains a separator.
     */
    onlyIfContainsSeparator?: boolean
    /**
     * The minimum number of digits before separators are enforced.
     */
    minimumDigits?: number
    /**
     * The number of digits in each group.
     */
    groupLength?: number
  }
  octal?: {
    /**
     * Whether to only enforce the style if the number already contains a separator.
     */
    onlyIfContainsSeparator?: boolean
    /**
     * The minimum number of digits before separators are enforced.
     */
    minimumDigits?: number
    /**
     * The number of digits in each group.
     */
    groupLength?: number
  }
  hexadecimal?: {
    /**
     * Whether to only enforce the style if the number already contains a separator.
     */
    onlyIfContainsSeparator?: boolean
    /**
     * The minimum number of digits before separators are enforced.
     */
    minimumDigits?: number
    /**
     * The number of digits in each group.
     */
    groupLength?: number
  }
  number?: {
    /**
     * Whether to only enforce the style if the number already contains a separator.
     */
    onlyIfContainsSeparator?: boolean
    /**
     * The minimum number of digits before separators are enforced.
     */
    minimumDigits?: number
    /**
     * The number of digits in each group.
     */
    groupLength?: number
    /**
     * The number of digits in each group after the decimal point. Defaults to no grouping.
     */
    fractionGroupLength?: number
  }
  /**
   * Whether to only enforce the style if the number already contains a separator.
   */
  onlyIfContainsSeparator?: boolean
}]

}
declare namespace R230 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[("always" | "never")]

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
 * @maxItems 0
 */
type Options = []

}
declare namespace R233 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  /**
   * Packages to exclude from checking.
   */
  excludedPackages?: string[]
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
 * @maxItems 1
 */
type Options = []|[{
  /**
   * Whether to also check for patterns that can be replaced with `findLast()`.
   */
  checkFromLast?: boolean
}]

}
declare namespace R237 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  /**
   * Additional functions to check.
   */
  functions?: string[]
}]

}
declare namespace R238 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R239 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R240 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R241 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R242 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R243 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R244 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R245 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R246 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R247 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  /**
   * Additional functions that return the last element.
   */
  getLastElementFunctions?: string[]
  /**
   * Whether to also check non-negative integer index access.
   */
  checkAllIndexAccess?: boolean
}]

}
declare namespace R248 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R249 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

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
 * @maxItems 0
 */
type Options = []

}
declare namespace R256 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  /**
   * Check guards with compound conditions.
   */
  checkCompoundConditions?: boolean
  /**
   * Check guards whose bodies run the same statements before the exit.
   */
  checkMultiStatementBodies?: boolean
}]

}
declare namespace R257 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  /**
   * Maximum number of statements allowed in a conditional wrapping the remainder of the loop body.
   */
  maximumStatements?: number
  /**
   * Enforce conditional wrapping when the body after a guard, or its else body, has between one and maximumStatements statements.
   */
  checkShortBodies?: boolean
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
 * @maxItems 1
 */
type Options = []|[{
  /**
   * Check fallback reads in parameters and destructured variables.
   */
  checkFallbackExpressions?: boolean
}]

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
 * @maxItems 0
 */
type Options = []

}
declare namespace R262 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R263 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R264 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  /**
   * Whether to check reads from `.innerHTML`.
   */
  checkGetHTML?: boolean
  /**
   * Whether to check assignments to `.innerHTML`.
   */
  checkSetHTML?: boolean
}]

}
declare namespace R265 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

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
 * @maxItems 0
 */
type Options = []

}
declare namespace R268 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  /**
   * Maximum number of statements allowed in a conditional wrapping the remainder of the function body.
   */
  maximumStatements?: number
  /**
   * Enforce conditional wrapping when the body after a guard, or its else body, has between one and maximumStatements statements.
   */
  checkShortBodies?: boolean
}]

}
declare namespace R269 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R270 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R271 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R272 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R273 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R274 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  /**
   * Whether to check variables that are used in the module.
   */
  checkUsedVariables?: boolean
}]

}
declare namespace R275 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R276 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R277 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R278 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R279 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R280 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R281 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R282 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  /**
   * Exact URLs and regular expressions to ignore.
   */
  ignore?: (string | {
    [k: string]: unknown
  })[]
}]

}
declare namespace R283 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

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
 * @maxItems 0
 */
type Options = []

}
declare namespace R286 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  /**
   * The minimum number of equality comparisons before reporting.
   */
  minimumComparisons?: number
}]

}
declare namespace R287 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R288 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R289 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

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
 * @maxItems 0
 */
type Options = []

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
 * @maxItems 0
 */
type Options = []

}
declare namespace R294 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R295 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R296 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R297 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R298 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R299 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R300 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R301 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R302 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R303 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R304 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R305 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  /**
   * Also report expressions that differ only by the base of a call or member access, whose minimization moves the ternary into the base (`(test ? a : b).foo`).
   */
  checkVaryingBase?: boolean
  /**
   * Also report property reads and method calls sharing a simple receiver when only the static property or method name differs, requiring computed member access.
   */
  checkComputedMemberAccess?: boolean
}]

}
declare namespace R306 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R307 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R308 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R309 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R310 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R311 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R312 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R313 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R314 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  /**
   * Whether to check usage of the global `Infinity`.
   */
  checkInfinity?: boolean
  /**
   * Whether to check usage of the global `NaN`.
   */
  checkNaN?: boolean
}]

}
declare namespace R315 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R316 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R317 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  /**
   * Additional functions to check.
   */
  functions?: string[]
}]

}
declare namespace R318 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R319 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R320 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R321 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R322 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R323 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R324 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R325 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R326 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R327 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  /**
   * Allow using the old APIs when called with non-literal arguments (variables, expressions, etc.).
   */
  allowWithVariables?: boolean
}]

}
declare namespace R328 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  /**
   * Whether to also check `setImmediate()`.
   */
  checkSetImmediate?: boolean
  /**
   * Whether to also check `setTimeout(…, 0)`.
   */
  checkSetTimeout?: boolean
}]

}
declare namespace R329 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R330 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R331 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R332 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R333 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R334 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  /**
   * The minimum known array size before `Set#has()` is enforced.
   */
  minimumItems?: number
}]

}
declare namespace R335 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R336 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R337 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[("always" | "consistent-as-needed")]

}
declare namespace R338 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R339 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R340 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R341 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  /**
   * Whether to expand negated logical conditions only when it reduces negations or regardless of negation count.
   */
  negatedConditions?: ("simplify" | "expand")
}]

}
declare namespace R342 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R343 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  /**
   * Methods to ignore.
   */
  ignore?: string[]
}]

}
declare namespace R344 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R345 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R346 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R347 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R348 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R349 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R350 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R351 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R352 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  /**
   * The minimum number of repeated whitespace characters before `String#repeat()` is enforced.
   */
  minimumRepetitions?: number
}]

}
declare namespace R353 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R354 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R355 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R356 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R357 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  /**
   * Additional functions to check.
   */
  functions?: string[]
}]

}
declare namespace R358 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  /**
   * The minimum number of `if`/`else if` cases before suggesting a `switch` statement.
   */
  minimumCases?: number
  /**
   * How to handle an empty `default` case.
   */
  emptyDefaultCase?: ("no-default-comment" | "do-nothing-comment" | "no-default-case")
}]

}
declare namespace R359 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  /**
   * Whether to also flag `Date.now()`.
   */
  checkDateNow?: boolean
  /**
   * Whether to also flag bare references to `Date`, such as `x instanceof Date`.
   */
  checkReferences?: boolean
  /**
   * Whether to also flag methods called on `Date` instances, such as `date.getFullYear()`. Requires TypeScript type information.
   */
  checkMethods?: boolean
}]

}
declare namespace R360 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R361 {
/**
 * @minItems 0
 * @maxItems 2
 */
type Options = []|[("always" | "only-single-line")]|[("always" | "only-single-line"), {
  /**
   * Also report expressions that differ only by the base of a call or member access, whose minimization moves the ternary into the base (`(test ? a : b).foo`).
   */
  checkVaryingBase?: boolean
  /**
   * Also report property reads and method calls sharing a simple receiver when only the static property or method name differs, requiring computed member access.
   */
  checkComputedMemberAccess?: boolean
}]

}
declare namespace R362 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R363 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R364 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R365 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R366 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R367 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R368 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R369 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R370 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R371 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R372 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R373 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R374 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R375 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R376 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[("never" | "always")]

}
declare namespace R377 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R378 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R379 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  /**
   * Check all selector interpolations instead of only attribute selector interpolations.
   */
  checkAllSelectors?: boolean
}]

}
declare namespace R380 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  /**
   * Top-level YAML frontmatter fields that are required.
   */
  fields?: string[]
}]

}
declare namespace R381 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R382 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R383 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R384 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R385 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R386 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R387 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R388 {
/**
 * @minItems 0
 * @maxItems 2
 */
type Options = []|[("multiline" | "single-line")]|[("multiline" | "single-line"), {
  /**
   * Regular expressions to ignore.
   */
  ignore?: (string | {
    [k: string]: unknown
  })[]
}]

}
declare namespace R389 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  /**
   * Patterns to replace in string content.
   */
  patterns?: {
    [k: string]: (string | {
      suggest: string
      fix?: boolean
      caseSensitive?: boolean
      message?: string
    })
  }
  /**
   * AST selectors for string nodes to check.
   */
  selectors?: string[]
}]

}
declare namespace R390 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[("always" | "avoid" | "single-statement")]

}
declare namespace R391 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R392 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  /**
   * The indentation to use inside the template literal.
   */
  indent?: (string | number)
  /**
   * Tagged template names to check.
   */
  tags?: string[]
  /**
   * Function names whose template literal arguments to check.
   */
  functions?: string[]
  /**
   * AST selectors for template literals to check.
   */
  selectors?: string[]
  /**
   * Comment patterns to mark template literals for checking.
   */
  comments?: string[]
}]

}
declare namespace R393 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  /**
   * Whether to prefer identifiers with a dash, like `utf-8` instead of `utf8`.
   */
  withDash?: boolean
}]

}
declare namespace R394 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R395 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  /**
   * The maximum allowed complexity of a `try` block.
   */
  max?: number
}]

}
export type RuleOptions = {
  "unicorn/better-dom-traversing": R0.Options;
  "unicorn/better-regex": R1.Options;
  "unicorn/catch-error-name": R2.Options;
  "unicorn/class-reference-in-static-methods": R3.Options;
  "unicorn/comma-spacing": R4.Options;
  "unicorn/comment-content": R5.Options;
  "unicorn/consistent-arrow-return-style": R6.Options;
  "unicorn/consistent-assert": R7.Options;
  "unicorn/consistent-boolean-name": R8.Options;
  "unicorn/consistent-class-member-order": R9.Options;
  "unicorn/consistent-compound-words": R10.Options;
  "unicorn/consistent-conditional-object-spread": R11.Options;
  "unicorn/consistent-date-clone": R12.Options;
  "unicorn/consistent-destructuring": R13.Options;
  "unicorn/consistent-empty-array-spread": R14.Options;
  "unicorn/consistent-existence-index-check": R15.Options;
  "unicorn/consistent-export-decorator-position": R16.Options;
  "unicorn/consistent-function-scoping": R17.Options;
  "unicorn/consistent-function-style": R18.Options;
  "unicorn/consistent-json-file-read": R19.Options;
  "unicorn/consistent-optional-chaining": R20.Options;
  "unicorn/consistent-template-literal-escape": R21.Options;
  "unicorn/consistent-tuple-labels": R22.Options;
  "unicorn/custom-error-definition": R23.Options;
  "unicorn/default-export-style": R24.Options;
  "unicorn/dom-node-dataset": R25.Options;
  "unicorn/empty-brace-spaces": R26.Options;
  "unicorn/error-message": R27.Options;
  "unicorn/escape-case": R28.Options;
  "unicorn/expiring-todo-comments": R29.Options;
  "unicorn/explicit-length-check": R30.Options;
  "unicorn/explicit-timer-delay": R31.Options;
  "unicorn/filename-case": R32.Options;
  "unicorn/id-match": R33.Options;
  "unicorn/import-style": R34.Options;
  "unicorn/indent": R35.Options;
  "unicorn/isolated-functions": R36.Options;
  "unicorn/iteration-fallback-style": R37.Options;
  "unicorn/key-name-casing": R38.Options;
  "unicorn/logical-assignment-operators": R39.Options;
  "unicorn/max-nested-calls": R40.Options;
  "unicorn/name-replacements": R41.Options;
  "unicorn/new-for-builtins": R42.Options;
  "unicorn/no-abusive-eslint-disable": R43.Options;
  "unicorn/no-accessor-recursion": R44.Options;
  "unicorn/no-accidental-bitwise-operator": R45.Options;
  "unicorn/no-anonymous-default-export": R46.Options;
  "unicorn/no-array-callback-reference": R47.Options;
  "unicorn/no-array-concat-in-loop": R48.Options;
  "unicorn/no-array-fill-with-reference-type": R49.Options;
  "unicorn/no-array-from-fill": R50.Options;
  "unicorn/no-array-front-mutation": R51.Options;
  "unicorn/no-array-method-this-argument": R52.Options;
  "unicorn/no-array-push-push": R53.Options;
  "unicorn/no-array-reduce": R54.Options;
  "unicorn/no-array-reverse": R55.Options;
  "unicorn/no-array-sort": R56.Options;
  "unicorn/no-array-sort-for-min-max": R57.Options;
  "unicorn/no-array-splice": R58.Options;
  "unicorn/no-asterisk-prefix-in-documentation-comments": R59.Options;
  "unicorn/no-async-iterator-callback": R60.Options;
  "unicorn/no-async-promise-finally": R61.Options;
  "unicorn/no-await-expression-member": R62.Options;
  "unicorn/no-await-in-promise-methods": R63.Options;
  "unicorn/no-barrel-files": R64.Options;
  "unicorn/no-blob-to-file": R65.Options;
  "unicorn/no-boolean-sort-comparator": R66.Options;
  "unicorn/no-break-in-nested-loop": R67.Options;
  "unicorn/no-canvas-to-image": R68.Options;
  "unicorn/no-chained-comparison": R69.Options;
  "unicorn/no-collection-bracket-access": R70.Options;
  "unicorn/no-computed-property-existence-check": R71.Options;
  "unicorn/no-conflicting-constraints": R72.Options;
  "unicorn/no-confusing-array-splice": R73.Options;
  "unicorn/no-confusing-array-with": R74.Options;
  "unicorn/no-console-spaces": R75.Options;
  "unicorn/no-constant-zero-expression": R76.Options;
  "unicorn/no-declarations-before-early-exit": R77.Options;
  "unicorn/no-deprecated-css-features": R78.Options;
  "unicorn/no-document-cookie": R79.Options;
  "unicorn/no-double-comparison": R80.Options;
  "unicorn/no-duplicate-css-selectors": R81.Options;
  "unicorn/no-duplicate-font-family-names": R82.Options;
  "unicorn/no-duplicate-if-branches": R83.Options;
  "unicorn/no-duplicate-logical-operands": R84.Options;
  "unicorn/no-duplicate-loops": R85.Options;
  "unicorn/no-duplicate-set-values": R86.Options;
  "unicorn/no-empty-file": R87.Options;
  "unicorn/no-empty-link-text": R88.Options;
  "unicorn/no-error-property-assignment": R89.Options;
  "unicorn/no-exports-in-scripts": R90.Options;
  "unicorn/no-for-each": R91.Options;
  "unicorn/no-for-loop": R92.Options;
  "unicorn/no-global-object-property-assignment": R93.Options;
  "unicorn/no-hex-escape": R94.Options;
  "unicorn/no-immediate-mutation": R95.Options;
  "unicorn/no-impossible-length-comparison": R96.Options;
  "unicorn/no-incomplete-accessor-override": R97.Options;
  "unicorn/no-incorrect-query-selector": R98.Options;
  "unicorn/no-incorrect-template-string-interpolation": R99.Options;
  "unicorn/no-ineffective-csp-directives": R100.Options;
  "unicorn/no-instanceof-array": R101.Options;
  "unicorn/no-instanceof-builtins": R102.Options;
  "unicorn/no-invalid-argument-count": R103.Options;
  "unicorn/no-invalid-boolean-attribute-value": R104.Options;
  "unicorn/no-invalid-character-comparison": R105.Options;
  "unicorn/no-invalid-dom-token": R106.Options;
  "unicorn/no-invalid-fetch-options": R107.Options;
  "unicorn/no-invalid-file-input-accept": R108.Options;
  "unicorn/no-invalid-integrity": R109.Options;
  "unicorn/no-invalid-intl-options": R110.Options;
  "unicorn/no-invalid-media-features": R111.Options;
  "unicorn/no-invalid-property-descriptor": R112.Options;
  "unicorn/no-invalid-remove-event-listener": R113.Options;
  "unicorn/no-invalid-response-options": R114.Options;
  "unicorn/no-invalid-style-set-property": R115.Options;
  "unicorn/no-invalid-temporal-arithmetic": R116.Options;
  "unicorn/no-invalid-url-protocol-comparison": R117.Options;
  "unicorn/no-invalid-well-known-symbol-methods": R118.Options;
  "unicorn/no-javascript-url": R119.Options;
  "unicorn/no-keyword-prefix": R120.Options;
  "unicorn/no-late-current-target-access": R121.Options;
  "unicorn/no-late-event-control": R122.Options;
  "unicorn/no-leading-empty-lines": R123.Options;
  "unicorn/no-length-as-slice-end": R124.Options;
  "unicorn/no-lonely-if": R125.Options;
  "unicorn/no-loop-iterable-mutation": R126.Options;
  "unicorn/no-loss-of-precision": R127.Options;
  "unicorn/no-magic-array-flat-depth": R128.Options;
  "unicorn/no-manually-wrapped-comments": R129.Options;
  "unicorn/no-mismatched-map-key": R130.Options;
  "unicorn/no-misrefactored-assignment": R131.Options;
  "unicorn/no-missing-local-resource": R132.Options;
  "unicorn/no-multiple-promise-resolver-calls": R133.Options;
  "unicorn/no-named-default": R134.Options;
  "unicorn/no-negated-array-predicate": R135.Options;
  "unicorn/no-negated-comparison": R136.Options;
  "unicorn/no-negated-condition": R137.Options;
  "unicorn/no-negation-in-equality-check": R138.Options;
  "unicorn/no-nested-ternary": R139.Options;
  "unicorn/no-nesting-with-mixed-specificity": R140.Options;
  "unicorn/no-new-array": R141.Options;
  "unicorn/no-new-buffer": R142.Options;
  "unicorn/no-non-function-verb-prefix": R143.Options;
  "unicorn/no-nonstandard-builtin-properties": R144.Options;
  "unicorn/no-null": R145.Options;
  "unicorn/no-object-as-default-parameter": R146.Options;
  "unicorn/no-object-methods-with-collections": R147.Options;
  "unicorn/no-optional-chaining-on-undeclared-variable": R148.Options;
  "unicorn/no-prevent-default-in-passive-listener": R149.Options;
  "unicorn/no-process-exit": R150.Options;
  "unicorn/no-redundant-comparison": R151.Options;
  "unicorn/no-redundant-nested-style-rules": R152.Options;
  "unicorn/no-repeated-call-wrappers": R153.Options;
  "unicorn/no-return-array-push": R154.Options;
  "unicorn/no-selector-as-dom-name": R155.Options;
  "unicorn/no-shorthand-property-overrides": R156.Options;
  "unicorn/no-single-promise-in-promise-methods": R157.Options;
  "unicorn/no-static-only-class": R158.Options;
  "unicorn/no-subtraction-comparison": R159.Options;
  "unicorn/no-thenable": R160.Options;
  "unicorn/no-this-assignment": R161.Options;
  "unicorn/no-this-outside-of-class": R162.Options;
  "unicorn/no-top-level-assignment-in-function": R163.Options;
  "unicorn/no-top-level-side-effects": R164.Options;
  "unicorn/no-transition-all": R165.Options;
  "unicorn/no-typeof-undefined": R166.Options;
  "unicorn/no-uncalled-method": R167.Options;
  "unicorn/no-undeclared-class-members": R168.Options;
  "unicorn/no-unknown-css-annotations": R169.Options;
  "unicorn/no-unknown-pseudo-selectors": R170.Options;
  "unicorn/no-unnecessary-array-flat-depth": R171.Options;
  "unicorn/no-unnecessary-array-flat-map": R172.Options;
  "unicorn/no-unnecessary-array-splice-count": R173.Options;
  "unicorn/no-unnecessary-await": R174.Options;
  "unicorn/no-unnecessary-boolean-comparison": R175.Options;
  "unicorn/no-unnecessary-default-arguments": R176.Options;
  "unicorn/no-unnecessary-fetch-options": R177.Options;
  "unicorn/no-unnecessary-global-this": R178.Options;
  "unicorn/no-unnecessary-nested-ternary": R179.Options;
  "unicorn/no-unnecessary-parameters": R180.Options;
  "unicorn/no-unnecessary-polyfills": R181.Options;
  "unicorn/no-unnecessary-slice-end": R182.Options;
  "unicorn/no-unnecessary-splice": R183.Options;
  "unicorn/no-unnecessary-string-trim": R184.Options;
  "unicorn/no-unreadable-array-destructuring": R185.Options;
  "unicorn/no-unreadable-for-of-expression": R186.Options;
  "unicorn/no-unreadable-iife": R187.Options;
  "unicorn/no-unreadable-new-expression": R188.Options;
  "unicorn/no-unreadable-object-destructuring": R189.Options;
  "unicorn/no-unsafe-buffer-conversion": R190.Options;
  "unicorn/no-unsafe-dom-html": R191.Options;
  "unicorn/no-unsafe-json-serialization": R192.Options;
  "unicorn/no-unsafe-promise-all-settled-values": R193.Options;
  "unicorn/no-unsafe-property-key": R194.Options;
  "unicorn/no-unsafe-sqlite-interpolation": R195.Options;
  "unicorn/no-unsafe-string-replacement": R196.Options;
  "unicorn/no-unscoped-css-nesting-selector": R197.Options;
  "unicorn/no-unused-array-method-return": R198.Options;
  "unicorn/no-unused-builtin-method-return": R199.Options;
  "unicorn/no-unused-iterator-helper": R200.Options;
  "unicorn/no-unused-properties": R201.Options;
  "unicorn/no-url-in-search-params": R202.Options;
  "unicorn/no-useless-boolean-cast": R203.Options;
  "unicorn/no-useless-coercion": R204.Options;
  "unicorn/no-useless-collection-argument": R205.Options;
  "unicorn/no-useless-compound-assignment": R206.Options;
  "unicorn/no-useless-concat": R207.Options;
  "unicorn/no-useless-continue": R208.Options;
  "unicorn/no-useless-delete-check": R209.Options;
  "unicorn/no-useless-else": R210.Options;
  "unicorn/no-useless-error-capture-stack-trace": R211.Options;
  "unicorn/no-useless-fallback-in-spread": R212.Options;
  "unicorn/no-useless-iterator-to-array": R213.Options;
  "unicorn/no-useless-length-check": R214.Options;
  "unicorn/no-useless-logical-operand": R215.Options;
  "unicorn/no-useless-override": R216.Options;
  "unicorn/no-useless-promise-resolve-reject": R217.Options;
  "unicorn/no-useless-re-export": R218.Options;
  "unicorn/no-useless-recursion": R219.Options;
  "unicorn/no-useless-set-construction": R220.Options;
  "unicorn/no-useless-spread": R221.Options;
  "unicorn/no-useless-switch-case": R222.Options;
  "unicorn/no-useless-template-literals": R223.Options;
  "unicorn/no-useless-undefined": R224.Options;
  "unicorn/no-using-resource-escape": R225.Options;
  "unicorn/no-xor-as-exponentiation": R226.Options;
  "unicorn/no-zero-fractions": R227.Options;
  "unicorn/number-literal-case": R228.Options;
  "unicorn/numeric-separators-style": R229.Options;
  "unicorn/operator-assignment": R230.Options;
  "unicorn/prefer-abort-signal-any": R231.Options;
  "unicorn/prefer-abort-signal-timeout": R232.Options;
  "unicorn/prefer-add-event-listener": R233.Options;
  "unicorn/prefer-add-event-listener-options": R234.Options;
  "unicorn/prefer-aggregate-error": R235.Options;
  "unicorn/prefer-array-find": R236.Options;
  "unicorn/prefer-array-flat": R237.Options;
  "unicorn/prefer-array-flat-map": R238.Options;
  "unicorn/prefer-array-from-async": R239.Options;
  "unicorn/prefer-array-from-map": R240.Options;
  "unicorn/prefer-array-from-range": R241.Options;
  "unicorn/prefer-array-index-of": R242.Options;
  "unicorn/prefer-array-iterable-methods": R243.Options;
  "unicorn/prefer-array-last-methods": R244.Options;
  "unicorn/prefer-array-slice": R245.Options;
  "unicorn/prefer-array-some": R246.Options;
  "unicorn/prefer-at": R247.Options;
  "unicorn/prefer-await": R248.Options;
  "unicorn/prefer-bigint-literals": R249.Options;
  "unicorn/prefer-blob-reading-methods": R250.Options;
  "unicorn/prefer-block-statement-over-iife": R251.Options;
  "unicorn/prefer-boolean-return": R252.Options;
  "unicorn/prefer-class-fields": R253.Options;
  "unicorn/prefer-classlist-toggle": R254.Options;
  "unicorn/prefer-code-point": R255.Options;
  "unicorn/prefer-combined-guards": R256.Options;
  "unicorn/prefer-continue": R257.Options;
  "unicorn/prefer-date-now": R258.Options;
  "unicorn/prefer-default-parameters": R259.Options;
  "unicorn/prefer-direct-iteration": R260.Options;
  "unicorn/prefer-dispose": R261.Options;
  "unicorn/prefer-dom-node-append": R262.Options;
  "unicorn/prefer-dom-node-dataset": R263.Options;
  "unicorn/prefer-dom-node-html-methods": R264.Options;
  "unicorn/prefer-dom-node-remove": R265.Options;
  "unicorn/prefer-dom-node-replace-children": R266.Options;
  "unicorn/prefer-dom-node-text-content": R267.Options;
  "unicorn/prefer-early-return": R268.Options;
  "unicorn/prefer-else-if": R269.Options;
  "unicorn/prefer-error-is-error": R270.Options;
  "unicorn/prefer-escaped-irregular-whitespace": R271.Options;
  "unicorn/prefer-event-target": R272.Options;
  "unicorn/prefer-explicit-viewport-units": R273.Options;
  "unicorn/prefer-export-from": R274.Options;
  "unicorn/prefer-flat-math-min-max": R275.Options;
  "unicorn/prefer-get-or-insert-computed": R276.Options;
  "unicorn/prefer-global-number-constants": R277.Options;
  "unicorn/prefer-global-this": R278.Options;
  "unicorn/prefer-group-by": R279.Options;
  "unicorn/prefer-has-check": R280.Options;
  "unicorn/prefer-hoisting-branch-code": R281.Options;
  "unicorn/prefer-https": R282.Options;
  "unicorn/prefer-identifier-import-export-specifiers": R283.Options;
  "unicorn/prefer-import-meta-properties": R284.Options;
  "unicorn/prefer-includes": R285.Options;
  "unicorn/prefer-includes-over-repeated-comparisons": R286.Options;
  "unicorn/prefer-iterable-in-constructor": R287.Options;
  "unicorn/prefer-iterator-concat": R288.Options;
  "unicorn/prefer-iterator-helpers": R289.Options;
  "unicorn/prefer-iterator-to-array": R290.Options;
  "unicorn/prefer-iterator-to-array-at-end": R291.Options;
  "unicorn/prefer-iterator-zip": R292.Options;
  "unicorn/prefer-json-import": R293.Options;
  "unicorn/prefer-json-parse-buffer": R294.Options;
  "unicorn/prefer-keyboard-event-key": R295.Options;
  "unicorn/prefer-literal-ascii": R296.Options;
  "unicorn/prefer-location-assign": R297.Options;
  "unicorn/prefer-logical-operator-over-ternary": R298.Options;
  "unicorn/prefer-map-from-entries": R299.Options;
  "unicorn/prefer-math-abs": R300.Options;
  "unicorn/prefer-math-constants": R301.Options;
  "unicorn/prefer-math-min-max": R302.Options;
  "unicorn/prefer-math-trunc": R303.Options;
  "unicorn/prefer-media-feature-range-syntax": R304.Options;
  "unicorn/prefer-minimal-ternary": R305.Options;
  "unicorn/prefer-modern-dom-apis": R306.Options;
  "unicorn/prefer-modern-math-apis": R307.Options;
  "unicorn/prefer-module": R308.Options;
  "unicorn/prefer-native-coercion-functions": R309.Options;
  "unicorn/prefer-negative-index": R310.Options;
  "unicorn/prefer-node-protocol": R311.Options;
  "unicorn/prefer-number-coercion": R312.Options;
  "unicorn/prefer-number-is-safe-integer": R313.Options;
  "unicorn/prefer-number-properties": R314.Options;
  "unicorn/prefer-object-define-properties": R315.Options;
  "unicorn/prefer-object-destructuring-defaults": R316.Options;
  "unicorn/prefer-object-from-entries": R317.Options;
  "unicorn/prefer-object-iterable-methods": R318.Options;
  "unicorn/prefer-observer-apis": R319.Options;
  "unicorn/prefer-optional-catch-binding": R320.Options;
  "unicorn/prefer-path2d": R321.Options;
  "unicorn/prefer-private-class-fields": R322.Options;
  "unicorn/prefer-promise-static-methods": R323.Options;
  "unicorn/prefer-promise-try": R324.Options;
  "unicorn/prefer-promise-with-resolvers": R325.Options;
  "unicorn/prefer-prototype-methods": R326.Options;
  "unicorn/prefer-query-selector": R327.Options;
  "unicorn/prefer-queue-microtask": R328.Options;
  "unicorn/prefer-reflect-apply": R329.Options;
  "unicorn/prefer-regexp-escape": R330.Options;
  "unicorn/prefer-regexp-test": R331.Options;
  "unicorn/prefer-response-static-json": R332.Options;
  "unicorn/prefer-scoped-selector": R333.Options;
  "unicorn/prefer-set-has": R334.Options;
  "unicorn/prefer-set-methods": R335.Options;
  "unicorn/prefer-set-size": R336.Options;
  "unicorn/prefer-short-arrow-method": R337.Options;
  "unicorn/prefer-short-escape-sequences": R338.Options;
  "unicorn/prefer-simple-condition-first": R339.Options;
  "unicorn/prefer-simple-sort-comparator": R340.Options;
  "unicorn/prefer-simplified-conditions": R341.Options;
  "unicorn/prefer-single-array-predicate": R342.Options;
  "unicorn/prefer-single-call": R343.Options;
  "unicorn/prefer-single-object-destructuring": R344.Options;
  "unicorn/prefer-single-replace": R345.Options;
  "unicorn/prefer-smaller-scope": R346.Options;
  "unicorn/prefer-split-limit": R347.Options;
  "unicorn/prefer-spread": R348.Options;
  "unicorn/prefer-string-match-all": R349.Options;
  "unicorn/prefer-string-pad-start-end": R350.Options;
  "unicorn/prefer-string-raw": R351.Options;
  "unicorn/prefer-string-repeat": R352.Options;
  "unicorn/prefer-string-replace-all": R353.Options;
  "unicorn/prefer-string-slice": R354.Options;
  "unicorn/prefer-string-starts-ends-with": R355.Options;
  "unicorn/prefer-string-trim-start-end": R356.Options;
  "unicorn/prefer-structured-clone": R357.Options;
  "unicorn/prefer-switch": R358.Options;
  "unicorn/prefer-temporal": R359.Options;
  "unicorn/prefer-temporal-conversion": R360.Options;
  "unicorn/prefer-ternary": R361.Options;
  "unicorn/prefer-then-catch": R362.Options;
  "unicorn/prefer-toggle-attribute": R363.Options;
  "unicorn/prefer-top-level-await": R364.Options;
  "unicorn/prefer-type-error": R365.Options;
  "unicorn/prefer-type-literal-last": R366.Options;
  "unicorn/prefer-uint8array-base64": R367.Options;
  "unicorn/prefer-uint8array-hex": R368.Options;
  "unicorn/prefer-unary-minus": R369.Options;
  "unicorn/prefer-unicode-code-point-escapes": R370.Options;
  "unicorn/prefer-url-can-parse": R371.Options;
  "unicorn/prefer-url-href": R372.Options;
  "unicorn/prefer-url-search-parameters": R373.Options;
  "unicorn/prefer-while-loop-condition": R374.Options;
  "unicorn/prevent-abbreviations": R375.Options;
  "unicorn/relative-url-style": R376.Options;
  "unicorn/require-array-join-separator": R377.Options;
  "unicorn/require-array-sort-compare": R378.Options;
  "unicorn/require-css-escape": R379.Options;
  "unicorn/require-frontmatter-fields": R380.Options;
  "unicorn/require-module-attributes": R381.Options;
  "unicorn/require-module-specifiers": R382.Options;
  "unicorn/require-number-to-fixed-digits-argument": R383.Options;
  "unicorn/require-passive-events": R384.Options;
  "unicorn/require-post-message-target-origin": R385.Options;
  "unicorn/require-proxy-trap-boolean-return": R386.Options;
  "unicorn/require-text-decoder-streaming": R387.Options;
  "unicorn/single-line-block-comment-style": R388.Options;
  "unicorn/string-content": R389.Options;
  "unicorn/switch-case-braces": R390.Options;
  "unicorn/switch-case-break-position": R391.Options;
  "unicorn/template-indent": R392.Options;
  "unicorn/text-encoding-identifier-case": R393.Options;
  "unicorn/throw-new-error": R394.Options;
  "unicorn/try-complexity": R395.Options;
};

export type TypedRuleIds = "unicorn/no-non-function-verb-prefix";
