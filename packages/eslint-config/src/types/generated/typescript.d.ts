// Generated from installed rule schemas. Do not edit.
// schemas-sha256: 2a1fc9b8c511dc0c2bc5e30125a146f2c03da75e6ea8c671ef3637cd5f68a9e1
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
 * @maxItems 1
 */
type Options = []|[{
  /**
   * The array type expected for mutable cases.
   */
  default?: ("array" | "generic" | "array-simple")
  /**
   * The array type expected for readonly cases. If omitted, the value for `default` will be used.
   */
  readonly?: ("array" | "generic" | "array-simple")
}]

}
declare namespace R2 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  /**
   * Whether to allow promise aggregators to receive iterables mixing Promise and non-Promise values, as long as at least one value may be a Promise.
   */
  allowMixedPromiseArrays?: boolean
}]

}
declare namespace R3 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  /**
   * A minimum character length for descriptions when `allow-with-description` is enabled.
   */
  minimumDescriptionLength?: number
  /**
   * Whether to allow ts-check directives, and with which restrictions.
   */
  "ts-check"?: (boolean | "allow-with-description" | {
    descriptionFormat?: string
  })
  /**
   * Whether to allow ts-expect-error directives, and with which restrictions.
   */
  "ts-expect-error"?: (boolean | "allow-with-description" | {
    descriptionFormat?: string
  })
  /**
   * Whether to allow ts-ignore directives, and with which restrictions.
   */
  "ts-ignore"?: (boolean | "allow-with-description" | {
    descriptionFormat?: string
  })
  /**
   * Whether to allow ts-nocheck directives, and with which restrictions.
   */
  "ts-nocheck"?: (boolean | "allow-with-description" | {
    descriptionFormat?: string
  })
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
type Options = []|[("fields" | "getters")]

}
declare namespace R6 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  /**
   * Enforces that functions used as instance field initializers utilize `this`.
   */
  enforceForClassFields?: boolean
  /**
   * Allows specified method names to be ignored with this rule.
   */
  exceptMethods?: string[]
  /**
   * Whether to ignore class members that are defined within a class that `implements` a type.
   */
  ignoreClassesThatImplementAnInterface?: (boolean | "public-fields")
  /**
   * Whether to ignore members marked with the `override` modifier.
   */
  ignoreOverrideMethods?: boolean
}]

}
declare namespace R7 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[("type-annotation" | "constructor")]

}
declare namespace R8 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[("record" | "index-signature")]

}
declare namespace R9 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  treatUndefinedAsUnspecified?: boolean
}]

}
declare namespace R10 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[({
  /**
   * The expected assertion style to enforce.
   */
  assertionStyle: "never"
} | {
  /**
   * Whether to always prefer type declarations for array literals used as variable initializers, rather than type assertions.
   */
  arrayLiteralTypeAssertions?: ("allow" | "allow-as-parameter" | "never")
  /**
   * The expected assertion style to enforce.
   */
  assertionStyle?: ("as" | "angle-bracket")
  /**
   * Whether to always prefer type declarations for object literals used as variable initializers, rather than type assertions.
   */
  objectLiteralTypeAssertions?: ("allow" | "allow-as-parameter" | "never")
})]

}
declare namespace R11 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[("interface" | "type")]

}
declare namespace R12 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  /**
   * Whether the rule will autofix "mixed" export cases using TS inline type specifiers.
   */
  fixMixedExportsWithInlineTypeSpecifier?: boolean
}]

}
declare namespace R13 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  /**
   * Whether to disallow type imports in type annotations (`import()`).
   */
  disallowTypeAnnotations?: boolean
  /**
   * The expected type modifier to be added when an import is detected as used only in the type position.
   */
  fixStyle?: ("separate-type-imports" | "inline-type-imports")
  /**
   * The expected import kind for type-only imports.
   */
  prefer?: ("type-imports" | "no-type-imports")
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
 * @maxItems 1
 */
type Options = []|[{
  /**
   * Whether to allow accessing properties matching an index signature with array notation.
   */
  allowIndexSignaturePropertyAccess?: boolean
  /**
   * Whether to allow keywords such as ["class"]`.
   */
  allowKeywords?: boolean
  /**
   * Regular expression of names to allow.
   */
  allowPattern?: string
  /**
   * Whether to allow accessing class members marked as `private` with array notation.
   */
  allowPrivateClassPropertyAccess?: boolean
  /**
   * Whether to allow accessing class members marked as `protected` with array notation.
   */
  allowProtectedClassPropertyAccess?: boolean
}]

}
declare namespace R16 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  /**
   * Whether to allow arrow functions that start with the `void` keyword.
   */
  allowConciseArrowFunctionExpressionsStartingWithVoid?: boolean
  /**
   * Whether to ignore arrow functions immediately returning a `as const` value.
   */
  allowDirectConstAssertionInArrowFunctions?: boolean
  /**
   * An array of function/method names that will not have their arguments or return values checked.
   */
  allowedNames?: string[]
  /**
   * Whether to ignore function expressions (functions which are not part of a declaration).
   */
  allowExpressions?: boolean
  /**
   * Whether to ignore functions that don't have generic type parameters.
   */
  allowFunctionsWithoutTypeParameters?: boolean
  /**
   * Whether to ignore functions immediately returning another function expression.
   */
  allowHigherOrderFunctions?: boolean
  /**
   * Whether to ignore immediately invoked function expressions (IIFEs).
   */
  allowIIFEs?: boolean
  /**
   * Whether to ignore type annotations on the variable of function expressions.
   */
  allowTypedFunctionExpressions?: boolean
}]

}
declare namespace R17 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  /**
   * Which accessibility modifier is required to exist or not exist.
   */
  accessibility?: ("explicit" | "no-public" | "off")
  /**
   * Specific method names that may be ignored.
   */
  ignoredMethodNames?: string[]
  /**
   * Changes to required accessibility modifiers for specific kinds of class members.
   */
  overrides?: {
    /**
     * Which member accessibility modifier requirements to apply for accessors.
     */
    accessors?: ("explicit" | "no-public" | "off")
    /**
     * Which member accessibility modifier requirements to apply for constructors.
     */
    constructors?: ("explicit" | "no-public" | "off")
    /**
     * Which member accessibility modifier requirements to apply for methods.
     */
    methods?: ("explicit" | "no-public" | "off")
    /**
     * Which member accessibility modifier requirements to apply for parameterProperties.
     */
    parameterProperties?: ("explicit" | "no-public" | "off")
    /**
     * Which member accessibility modifier requirements to apply for properties.
     */
    properties?: ("explicit" | "no-public" | "off")
  }
}]

}
declare namespace R18 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  /**
   * Whether to ignore arguments that are explicitly typed as `any`.
   */
  allowArgumentsExplicitlyTypedAsAny?: boolean
  /**
   * Whether to ignore return type annotations on body-less arrow functions that return an `as const` type assertion.
   * You must still type the parameters of the function.
   */
  allowDirectConstAssertionInArrowFunctions?: boolean
  /**
   * An array of function/method names that will not have their arguments or return values checked.
   */
  allowedNames?: string[]
  /**
   * Whether to ignore return type annotations on functions immediately returning another function expression.
   * You must still type the parameters of the function.
   */
  allowHigherOrderFunctions?: boolean
  /**
   * Whether to ignore return type annotations on functions with overload signatures.
   */
  allowOverloadFunctions?: boolean
  /**
   * Whether to ignore type annotations on the variable of a function expression.
   */
  allowTypedFunctionExpressions?: boolean
}]

}
declare namespace R19 {
type Options = ([]|["always"] | []|["never"]|["never", {
  ignoreForLoopInit?: boolean
}])

}
declare namespace R20 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  /**
   * Whether to count a `this` declaration when the type is `void`.
   */
  countVoidThis?: boolean
  /**
   * A maximum number of parameters in function definitions.
   */
  max?: number
  /**
   * (deprecated) A maximum number of parameters in function definitions.
   */
  maximum?: number
}]

}
declare namespace R21 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  /**
   * Which ordering to enforce for classes.
   */
  classes?: ("never" | (AllItems | AllItems[])[] | {
    memberTypes?: ((AllItems | AllItems[])[] | "never")
    optionalityOrder?: OptionalityOrderOptions
    order?: OrderOptions
  })
  /**
   * Which ordering to enforce for classExpressions.
   */
  classExpressions?: ("never" | (AllItems | AllItems[])[] | {
    memberTypes?: ((AllItems | AllItems[])[] | "never")
    optionalityOrder?: OptionalityOrderOptions
    order?: OrderOptions
  })
  /**
   * Which ordering to enforce for default.
   */
  default?: ("never" | (AllItems | AllItems[])[] | {
    memberTypes?: ((AllItems | AllItems[])[] | "never")
    optionalityOrder?: OptionalityOrderOptions
    order?: OrderOptions
  })
  /**
   * Which ordering to enforce for interfaces.
   */
  interfaces?: ("never" | (TypeItems | TypeItems[])[] | {
    memberTypes?: ((TypeItems | TypeItems[])[] | "never")
    optionalityOrder?: OptionalityOrderOptions
    order?: OrderOptions
  })
  /**
   * Which ordering to enforce for typeLiterals.
   */
  typeLiterals?: ("never" | (TypeItems | TypeItems[])[] | {
    memberTypes?: ((TypeItems | TypeItems[])[] | "never")
    optionalityOrder?: OptionalityOrderOptions
    order?: OrderOptions
  })
}]
type AllItems = ("readonly-signature" | "signature" | "readonly-field" | "public-readonly-field" | "public-decorated-readonly-field" | "decorated-readonly-field" | "static-readonly-field" | "public-static-readonly-field" | "instance-readonly-field" | "public-instance-readonly-field" | "abstract-readonly-field" | "public-abstract-readonly-field" | "protected-readonly-field" | "protected-decorated-readonly-field" | "protected-static-readonly-field" | "protected-instance-readonly-field" | "protected-abstract-readonly-field" | "private-readonly-field" | "private-decorated-readonly-field" | "private-static-readonly-field" | "private-instance-readonly-field" | "#private-readonly-field" | "#private-static-readonly-field" | "#private-instance-readonly-field" | "field" | "public-field" | "public-decorated-field" | "decorated-field" | "static-field" | "public-static-field" | "instance-field" | "public-instance-field" | "abstract-field" | "public-abstract-field" | "protected-field" | "protected-decorated-field" | "protected-static-field" | "protected-instance-field" | "protected-abstract-field" | "private-field" | "private-decorated-field" | "private-static-field" | "private-instance-field" | "#private-field" | "#private-static-field" | "#private-instance-field" | "method" | "public-method" | "public-decorated-method" | "decorated-method" | "static-method" | "public-static-method" | "instance-method" | "public-instance-method" | "abstract-method" | "public-abstract-method" | "protected-method" | "protected-decorated-method" | "protected-static-method" | "protected-instance-method" | "protected-abstract-method" | "private-method" | "private-decorated-method" | "private-static-method" | "private-instance-method" | "#private-method" | "#private-static-method" | "#private-instance-method" | "call-signature" | "constructor" | "public-constructor" | "protected-constructor" | "private-constructor" | "accessor" | "public-accessor" | "public-decorated-accessor" | "decorated-accessor" | "static-accessor" | "public-static-accessor" | "instance-accessor" | "public-instance-accessor" | "abstract-accessor" | "public-abstract-accessor" | "protected-accessor" | "protected-decorated-accessor" | "protected-static-accessor" | "protected-instance-accessor" | "protected-abstract-accessor" | "private-accessor" | "private-decorated-accessor" | "private-static-accessor" | "private-instance-accessor" | "#private-accessor" | "#private-static-accessor" | "#private-instance-accessor" | "get" | "public-get" | "public-decorated-get" | "decorated-get" | "static-get" | "public-static-get" | "instance-get" | "public-instance-get" | "abstract-get" | "public-abstract-get" | "protected-get" | "protected-decorated-get" | "protected-static-get" | "protected-instance-get" | "protected-abstract-get" | "private-get" | "private-decorated-get" | "private-static-get" | "private-instance-get" | "#private-get" | "#private-static-get" | "#private-instance-get" | "set" | "public-set" | "public-decorated-set" | "decorated-set" | "static-set" | "public-static-set" | "instance-set" | "public-instance-set" | "abstract-set" | "public-abstract-set" | "protected-set" | "protected-decorated-set" | "protected-static-set" | "protected-instance-set" | "protected-abstract-set" | "private-set" | "private-decorated-set" | "private-static-set" | "private-instance-set" | "#private-set" | "#private-static-set" | "#private-instance-set" | "static-initialization" | "static-static-initialization" | "public-static-static-initialization" | "instance-static-initialization" | "public-instance-static-initialization" | "abstract-static-initialization" | "public-abstract-static-initialization" | "protected-static-static-initialization" | "protected-instance-static-initialization" | "protected-abstract-static-initialization" | "private-static-static-initialization" | "private-instance-static-initialization" | "#private-static-static-initialization" | "#private-instance-static-initialization")
type OptionalityOrderOptions = ("optional-first" | "required-first")
type OrderOptions = ("alphabetically" | "alphabetically-case-insensitive" | "as-written" | "natural" | "natural-case-insensitive")
type TypeItems = ("readonly-signature" | "signature" | "readonly-field" | "field" | "method" | "constructor")

}
declare namespace R22 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[("property" | "method")]

}
declare namespace R23 {
type FormatOptionsConfig = (PredefinedFormats[] | null)
type PredefinedFormats = ("camelCase" | "strictCamelCase" | "PascalCase" | "StrictPascalCase" | "snake_case" | "UPPER_CASE")
type UnderscoreOptions = ("forbid" | "allow" | "require" | "requireDouble" | "allowDouble" | "allowSingleOrDouble")
type PrefixSuffixConfig = string[]
type TypeModifiers = ("boolean" | "string" | "number" | "function" | "array")
type Options = ({
  custom?: MatchRegexConfig
  failureMessage?: string
  format: FormatOptionsConfig
  leadingUnderscore?: UnderscoreOptions
  prefix?: PrefixSuffixConfig
  suffix?: PrefixSuffixConfig
  trailingUnderscore?: UnderscoreOptions
  filter?: (string | MatchRegexConfig)
  modifiers?: ("const" | "readonly" | "static" | "public" | "protected" | "private" | "#private" | "abstract" | "destructured" | "global" | "exported" | "unused" | "requiresQuotes" | "override" | "async" | "default" | "namespace")[]
  selector: ("default" | "variableLike" | "memberLike" | "typeLike" | "method" | "property" | "accessor" | "variable" | "function" | "parameter" | "parameterProperty" | "classicAccessor" | "enumMember" | "classMethod" | "objectLiteralMethod" | "typeMethod" | "classProperty" | "objectLiteralProperty" | "typeProperty" | "autoAccessor" | "class" | "interface" | "typeAlias" | "enum" | "typeParameter" | "import")[]
  types?: TypeModifiers[]
} | {
  custom?: MatchRegexConfig
  failureMessage?: string
  format: FormatOptionsConfig
  leadingUnderscore?: UnderscoreOptions
  prefix?: PrefixSuffixConfig
  suffix?: PrefixSuffixConfig
  trailingUnderscore?: UnderscoreOptions
  filter?: (string | MatchRegexConfig)
  selector: "default"
  modifiers?: ("const" | "readonly" | "static" | "public" | "protected" | "private" | "#private" | "abstract" | "destructured" | "global" | "exported" | "unused" | "requiresQuotes" | "override" | "async" | "default" | "namespace")[]
} | {
  custom?: MatchRegexConfig
  failureMessage?: string
  format: FormatOptionsConfig
  leadingUnderscore?: UnderscoreOptions
  prefix?: PrefixSuffixConfig
  suffix?: PrefixSuffixConfig
  trailingUnderscore?: UnderscoreOptions
  filter?: (string | MatchRegexConfig)
  selector: "variableLike"
  modifiers?: ("unused" | "async")[]
} | {
  custom?: MatchRegexConfig
  failureMessage?: string
  format: FormatOptionsConfig
  leadingUnderscore?: UnderscoreOptions
  prefix?: PrefixSuffixConfig
  suffix?: PrefixSuffixConfig
  trailingUnderscore?: UnderscoreOptions
  filter?: (string | MatchRegexConfig)
  selector: "variable"
  modifiers?: ("const" | "destructured" | "exported" | "global" | "unused" | "async")[]
  types?: TypeModifiers[]
} | {
  custom?: MatchRegexConfig
  failureMessage?: string
  format: FormatOptionsConfig
  leadingUnderscore?: UnderscoreOptions
  prefix?: PrefixSuffixConfig
  suffix?: PrefixSuffixConfig
  trailingUnderscore?: UnderscoreOptions
  filter?: (string | MatchRegexConfig)
  selector: "function"
  modifiers?: ("exported" | "global" | "unused" | "async")[]
} | {
  custom?: MatchRegexConfig
  failureMessage?: string
  format: FormatOptionsConfig
  leadingUnderscore?: UnderscoreOptions
  prefix?: PrefixSuffixConfig
  suffix?: PrefixSuffixConfig
  trailingUnderscore?: UnderscoreOptions
  filter?: (string | MatchRegexConfig)
  selector: "parameter"
  modifiers?: ("destructured" | "unused")[]
  types?: TypeModifiers[]
} | {
  custom?: MatchRegexConfig
  failureMessage?: string
  format: FormatOptionsConfig
  leadingUnderscore?: UnderscoreOptions
  prefix?: PrefixSuffixConfig
  suffix?: PrefixSuffixConfig
  trailingUnderscore?: UnderscoreOptions
  filter?: (string | MatchRegexConfig)
  selector: "memberLike"
  modifiers?: ("abstract" | "private" | "#private" | "protected" | "public" | "readonly" | "requiresQuotes" | "static" | "override" | "async")[]
} | {
  custom?: MatchRegexConfig
  failureMessage?: string
  format: FormatOptionsConfig
  leadingUnderscore?: UnderscoreOptions
  prefix?: PrefixSuffixConfig
  suffix?: PrefixSuffixConfig
  trailingUnderscore?: UnderscoreOptions
  filter?: (string | MatchRegexConfig)
  selector: "classProperty"
  modifiers?: ("abstract" | "private" | "#private" | "protected" | "public" | "readonly" | "requiresQuotes" | "static" | "override")[]
  types?: TypeModifiers[]
} | {
  custom?: MatchRegexConfig
  failureMessage?: string
  format: FormatOptionsConfig
  leadingUnderscore?: UnderscoreOptions
  prefix?: PrefixSuffixConfig
  suffix?: PrefixSuffixConfig
  trailingUnderscore?: UnderscoreOptions
  filter?: (string | MatchRegexConfig)
  selector: "objectLiteralProperty"
  modifiers?: ("public" | "requiresQuotes")[]
  types?: TypeModifiers[]
} | {
  custom?: MatchRegexConfig
  failureMessage?: string
  format: FormatOptionsConfig
  leadingUnderscore?: UnderscoreOptions
  prefix?: PrefixSuffixConfig
  suffix?: PrefixSuffixConfig
  trailingUnderscore?: UnderscoreOptions
  filter?: (string | MatchRegexConfig)
  selector: "typeProperty"
  modifiers?: ("public" | "readonly" | "requiresQuotes")[]
  types?: TypeModifiers[]
} | {
  custom?: MatchRegexConfig
  failureMessage?: string
  format: FormatOptionsConfig
  leadingUnderscore?: UnderscoreOptions
  prefix?: PrefixSuffixConfig
  suffix?: PrefixSuffixConfig
  trailingUnderscore?: UnderscoreOptions
  filter?: (string | MatchRegexConfig)
  selector: "parameterProperty"
  modifiers?: ("private" | "protected" | "public" | "readonly")[]
  types?: TypeModifiers[]
} | {
  custom?: MatchRegexConfig
  failureMessage?: string
  format: FormatOptionsConfig
  leadingUnderscore?: UnderscoreOptions
  prefix?: PrefixSuffixConfig
  suffix?: PrefixSuffixConfig
  trailingUnderscore?: UnderscoreOptions
  filter?: (string | MatchRegexConfig)
  selector: "property"
  modifiers?: ("abstract" | "private" | "#private" | "protected" | "public" | "readonly" | "requiresQuotes" | "static" | "override" | "async")[]
  types?: TypeModifiers[]
} | {
  custom?: MatchRegexConfig
  failureMessage?: string
  format: FormatOptionsConfig
  leadingUnderscore?: UnderscoreOptions
  prefix?: PrefixSuffixConfig
  suffix?: PrefixSuffixConfig
  trailingUnderscore?: UnderscoreOptions
  filter?: (string | MatchRegexConfig)
  selector: "classMethod"
  modifiers?: ("abstract" | "private" | "#private" | "protected" | "public" | "requiresQuotes" | "static" | "override" | "async")[]
} | {
  custom?: MatchRegexConfig
  failureMessage?: string
  format: FormatOptionsConfig
  leadingUnderscore?: UnderscoreOptions
  prefix?: PrefixSuffixConfig
  suffix?: PrefixSuffixConfig
  trailingUnderscore?: UnderscoreOptions
  filter?: (string | MatchRegexConfig)
  selector: "objectLiteralMethod"
  modifiers?: ("public" | "requiresQuotes" | "async")[]
} | {
  custom?: MatchRegexConfig
  failureMessage?: string
  format: FormatOptionsConfig
  leadingUnderscore?: UnderscoreOptions
  prefix?: PrefixSuffixConfig
  suffix?: PrefixSuffixConfig
  trailingUnderscore?: UnderscoreOptions
  filter?: (string | MatchRegexConfig)
  selector: "typeMethod"
  modifiers?: ("public" | "requiresQuotes")[]
} | {
  custom?: MatchRegexConfig
  failureMessage?: string
  format: FormatOptionsConfig
  leadingUnderscore?: UnderscoreOptions
  prefix?: PrefixSuffixConfig
  suffix?: PrefixSuffixConfig
  trailingUnderscore?: UnderscoreOptions
  filter?: (string | MatchRegexConfig)
  selector: "method"
  modifiers?: ("abstract" | "private" | "#private" | "protected" | "public" | "requiresQuotes" | "static" | "override" | "async")[]
} | {
  custom?: MatchRegexConfig
  failureMessage?: string
  format: FormatOptionsConfig
  leadingUnderscore?: UnderscoreOptions
  prefix?: PrefixSuffixConfig
  suffix?: PrefixSuffixConfig
  trailingUnderscore?: UnderscoreOptions
  filter?: (string | MatchRegexConfig)
  selector: "classicAccessor"
  modifiers?: ("abstract" | "private" | "protected" | "public" | "requiresQuotes" | "static" | "override")[]
  types?: TypeModifiers[]
} | {
  custom?: MatchRegexConfig
  failureMessage?: string
  format: FormatOptionsConfig
  leadingUnderscore?: UnderscoreOptions
  prefix?: PrefixSuffixConfig
  suffix?: PrefixSuffixConfig
  trailingUnderscore?: UnderscoreOptions
  filter?: (string | MatchRegexConfig)
  selector: "autoAccessor"
  modifiers?: ("abstract" | "private" | "protected" | "public" | "requiresQuotes" | "static" | "override")[]
  types?: TypeModifiers[]
} | {
  custom?: MatchRegexConfig
  failureMessage?: string
  format: FormatOptionsConfig
  leadingUnderscore?: UnderscoreOptions
  prefix?: PrefixSuffixConfig
  suffix?: PrefixSuffixConfig
  trailingUnderscore?: UnderscoreOptions
  filter?: (string | MatchRegexConfig)
  selector: "accessor"
  modifiers?: ("abstract" | "private" | "protected" | "public" | "requiresQuotes" | "static" | "override")[]
  types?: TypeModifiers[]
} | {
  custom?: MatchRegexConfig
  failureMessage?: string
  format: FormatOptionsConfig
  leadingUnderscore?: UnderscoreOptions
  prefix?: PrefixSuffixConfig
  suffix?: PrefixSuffixConfig
  trailingUnderscore?: UnderscoreOptions
  filter?: (string | MatchRegexConfig)
  selector: "enumMember"
  modifiers?: ("requiresQuotes")[]
} | {
  custom?: MatchRegexConfig
  failureMessage?: string
  format: FormatOptionsConfig
  leadingUnderscore?: UnderscoreOptions
  prefix?: PrefixSuffixConfig
  suffix?: PrefixSuffixConfig
  trailingUnderscore?: UnderscoreOptions
  filter?: (string | MatchRegexConfig)
  selector: "typeLike"
  modifiers?: ("abstract" | "exported" | "unused")[]
} | {
  custom?: MatchRegexConfig
  failureMessage?: string
  format: FormatOptionsConfig
  leadingUnderscore?: UnderscoreOptions
  prefix?: PrefixSuffixConfig
  suffix?: PrefixSuffixConfig
  trailingUnderscore?: UnderscoreOptions
  filter?: (string | MatchRegexConfig)
  selector: "class"
  modifiers?: ("abstract" | "exported" | "unused")[]
} | {
  custom?: MatchRegexConfig
  failureMessage?: string
  format: FormatOptionsConfig
  leadingUnderscore?: UnderscoreOptions
  prefix?: PrefixSuffixConfig
  suffix?: PrefixSuffixConfig
  trailingUnderscore?: UnderscoreOptions
  filter?: (string | MatchRegexConfig)
  selector: "interface"
  modifiers?: ("exported" | "unused")[]
} | {
  custom?: MatchRegexConfig
  failureMessage?: string
  format: FormatOptionsConfig
  leadingUnderscore?: UnderscoreOptions
  prefix?: PrefixSuffixConfig
  suffix?: PrefixSuffixConfig
  trailingUnderscore?: UnderscoreOptions
  filter?: (string | MatchRegexConfig)
  selector: "typeAlias"
  modifiers?: ("exported" | "unused")[]
} | {
  custom?: MatchRegexConfig
  failureMessage?: string
  format: FormatOptionsConfig
  leadingUnderscore?: UnderscoreOptions
  prefix?: PrefixSuffixConfig
  suffix?: PrefixSuffixConfig
  trailingUnderscore?: UnderscoreOptions
  filter?: (string | MatchRegexConfig)
  selector: "enum"
  modifiers?: ("exported" | "unused")[]
} | {
  custom?: MatchRegexConfig
  failureMessage?: string
  format: FormatOptionsConfig
  leadingUnderscore?: UnderscoreOptions
  prefix?: PrefixSuffixConfig
  suffix?: PrefixSuffixConfig
  trailingUnderscore?: UnderscoreOptions
  filter?: (string | MatchRegexConfig)
  selector: "typeParameter"
  modifiers?: ("unused")[]
} | {
  custom?: MatchRegexConfig
  failureMessage?: string
  format: FormatOptionsConfig
  leadingUnderscore?: UnderscoreOptions
  prefix?: PrefixSuffixConfig
  suffix?: PrefixSuffixConfig
  trailingUnderscore?: UnderscoreOptions
  filter?: (string | MatchRegexConfig)
  selector: "import"
  modifiers?: ("default" | "namespace")[]
})[]

interface MatchRegexConfig {
  match: boolean
  regex: string
}

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
 * @maxItems 1
 */
type Options = []|[{
  /**
   * Whether to also check values of type `unknown`
   */
  checkUnknown?: boolean
  /**
   * Stringified type names to ignore.
   */
  ignoredTypeNames?: string[]
}]

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
type Options = []|[{
  /**
   * Whether to ignore "shorthand" `() =>` arrow functions: those without `{ ... }` braces.
   */
  ignoreArrowShorthand?: boolean
  /**
   * Whether to ignore returns that start with the `void` operator.
   */
  ignoreVoidOperator?: boolean
  /**
   * Whether to ignore returns from functions with explicit `void` return types and functions with contextual `void` return types.
   */
  ignoreVoidReturningFunctions?: boolean
}]

}
declare namespace R29 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  /**
   * Type specifiers that can be allowed.
   */
  allow?: (string | {
    from: "file"
    name: (string | [string, ...(string)[]])
    path?: string
  } | {
    from: "lib"
    name: (string | [string, ...(string)[]])
  } | {
    from: "package"
    name: (string | [string, ...(string)[]])
    package: string
  })[]
}]

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
 * @maxItems 1
 */
type Options = []|[{
  /**
   * Whether to ignore `&` intersections.
   */
  ignoreIntersections?: boolean
  /**
   * Whether to ignore `|` unions.
   */
  ignoreUnions?: boolean
}]

}
declare namespace R33 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R34 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  /**
   * Locations and kinds of functions that are allowed to be empty.
   */
  allow?: ("functions" | "arrowFunctions" | "generatorFunctions" | "methods" | "generatorMethods" | "getters" | "setters" | "constructors" | "private-constructors" | "protected-constructors" | "asyncFunctions" | "asyncMethods" | "decoratedFunctions" | "overrideMethods")[]
}]

}
declare namespace R35 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  /**
   * Whether to allow empty interfaces that extend a single other interface.
   */
  allowSingleExtends?: boolean
}]

}
declare namespace R36 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  /**
   * Whether to allow empty interfaces.
   */
  allowInterfaces?: ("always" | "never" | "with-single-extends")
  /**
   * Whether to allow empty object type literals.
   */
  allowObjectTypes?: ("always" | "never")
  /**
   * A stringified regular expression to allow interfaces and object type aliases with the configured name.
   */
  allowWithName?: string
}]

}
declare namespace R37 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  /**
   * Whether to enable auto-fixing in which the `any` type is converted to the `unknown` type.
   */
  fixToUnknown?: boolean
  /**
   * Whether to ignore rest parameter arrays.
   */
  ignoreRestArgs?: boolean
}]

}
declare namespace R38 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R39 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  /**
   * Whether to allow extraneous classes that contain only a constructor.
   */
  allowConstructorOnly?: boolean
  /**
   * Whether to allow extraneous classes that have no body (i.e. are empty).
   */
  allowEmpty?: boolean
  /**
   * Whether to allow extraneous classes that only contain static members.
   */
  allowStaticOnly?: boolean
  /**
   * Whether to allow extraneous classes that include a decorator.
   */
  allowWithDecorator?: boolean
}]

}
declare namespace R40 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  /**
   * Type specifiers of functions whose calls are safe to float.
   */
  allowForKnownSafeCalls?: (string | {
    from: "file"
    name: (string | [string, ...(string)[]])
    path?: string
  } | {
    from: "lib"
    name: (string | [string, ...(string)[]])
  } | {
    from: "package"
    name: (string | [string, ...(string)[]])
    package: string
  })[]
  /**
   * Type specifiers that are known to be safe to float.
   */
  allowForKnownSafePromises?: (string | {
    from: "file"
    name: (string | [string, ...(string)[]])
    path?: string
  } | {
    from: "lib"
    name: (string | [string, ...(string)[]])
  } | {
    from: "package"
    name: (string | [string, ...(string)[]])
    package: string
  })[]
  /**
   * Whether to check all "Thenable"s, not just the built-in Promise type.
   */
  checkThenables?: boolean
  /**
   * Whether to ignore async IIFEs (Immediately Invoked Function Expressions).
   */
  ignoreIIFE?: boolean
  /**
   * Whether to ignore `void` expressions.
   */
  ignoreVoid?: boolean
}]

}
declare namespace R41 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

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
 * @maxItems 1
 */
type Options = []|[{
  /**
   * Whether to ignore function parameters.
   */
  ignoreParameters?: boolean
  /**
   * Whether to ignore class properties.
   */
  ignoreProperties?: boolean
}]

}
declare namespace R46 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  capIsConstructor?: boolean
}]

}
declare namespace R47 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  /**
   * Whether a `this` parameter of a function may be `void`.
   */
  allowAsThisParameter?: boolean
  /**
   * Whether `void` can be used as a valid value for generic type parameters.
   */
  allowInGenericTypeArguments?: (boolean | [string, ...(string)[]])
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
 * @maxItems 1
 */
type Options = []|[{
  detectObjects?: boolean
  enforceConst?: boolean
  ignore?: (number | string)[]
  ignoreArrayIndexes?: boolean
  ignoreDefaultValues?: boolean
  ignoreClassFieldInitialValues?: boolean
  /**
   * Whether enums used in TypeScript are considered okay.
   */
  ignoreEnums?: boolean
  /**
   * Whether numbers used in TypeScript numeric literal types are considered okay.
   */
  ignoreNumericLiteralTypes?: boolean
  /**
   * Whether `readonly` class properties are considered okay.
   */
  ignoreReadonlyClassProperties?: boolean
  /**
   * Whether numbers used to index types are okay.
   */
  ignoreTypeIndexes?: boolean
}]

}
declare namespace R51 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  /**
   * Whether to suggest removing `void` when a call's return type is `never`.
   */
  checkNever?: boolean
}]

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
 * @maxItems 1
 */
type Options = []|[{
  /**
   * Whether to warn when a Promise is provided to conditional statements.
   */
  checksConditionals?: (boolean | {
    /**
     * Configures how union types containing Promise-like types are checked.
     */
    flagUnions?: ("all" | "strict" | "none")
  })
  /**
   * Whether to warn when `...` spreading a `Promise`.
   */
  checksSpreads?: boolean
  /**
   * Whether to warn when a Promise is returned from a function typed as returning `void`.
   */
  checksVoidReturn?: (boolean | {
    /**
     * Disables checking an asynchronous function passed as argument where the parameter type expects a function that returns `void`.
     */
    arguments?: boolean
    /**
     * Disables checking an asynchronous function passed as a JSX attribute expected to be a function that returns `void`.
     */
    attributes?: boolean
    /**
     * Disables checking an asynchronous method in a type that extends or implements another type expecting that method to return `void`.
     */
    inheritedMethods?: boolean
    /**
     * Disables checking an asynchronous function passed as an object property expected to be a function that returns `void`.
     */
    properties?: boolean
    /**
     * Disables checking an asynchronous function returned in a function whose return type is a function that returns `void`.
     */
    returns?: boolean
    /**
     * Disables checking an asynchronous function used as a variable whose return type is a function that returns `void`.
     */
    variables?: boolean
  })
}]

}
declare namespace R54 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  /**
   * An array of type specifiers that are known to be safe to spread.
   */
  allow?: (string | {
    from: "file"
    name: (string | [string, ...(string)[]])
    path?: string
  } | {
    from: "lib"
    name: (string | [string, ...(string)[]])
  } | {
    from: "package"
    name: (string | [string, ...(string)[]])
    package: string
  })[]
}]

}
declare namespace R55 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R56 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  /**
   * Whether to allow `declare` with custom TypeScript namespaces.
   */
  allowDeclarations?: boolean
  /**
   * Whether to allow `declare` with custom TypeScript namespaces inside definition files.
   */
  allowDefinitionFiles?: boolean
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
 * @maxItems 1
 */
type Options = []|[{
  /**
   * Whether to report shadowing of built-in global variables.
   */
  builtinGlobals?: boolean
  /**
   * Whether to ignore declaration merges between certain TypeScript declaration types.
   */
  ignoreDeclarationMerge?: boolean
}]

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
 * @maxItems 1
 */
type Options = []|[{
  /**
   * Patterns of import paths to allow requiring from.
   */
  allow?: string[]
  /**
   * Allows `require` statements in import declarations.
   */
  allowAsImport?: boolean
}]

}
declare namespace R63 {
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
  patterns?: (string[] | {
    /**
     * @minItems 1
     */
    importNames?: [string, ...(string)[]]
    /**
     * @minItems 1
     */
    allowImportNames?: [string, ...(string)[]]
    /**
     * @minItems 1
     */
    group?: [string, ...(string)[]]
    regex?: string
    importNamePattern?: string
    allowImportNamePattern?: string
    message?: string
    caseSensitive?: boolean
    /**
     * Whether to allow type-only imports for a path.
     */
    allowTypeImports?: boolean
  }[])
}])

}
declare namespace R64 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  /**
   * An object whose keys are the types you want to ban, and the values are error messages.
   */
  types?: {
    [k: string]: BanConfig
  }
}]
type BanConfig = (true | string | {
  /**
   * Type to autofix replace with. Note that autofixers can be applied automatically - so you need to be careful with this option.
   */
  fixWith?: string
  /**
   * Custom error message.
   */
  message?: string
  /**
   * Types to suggest replacing with.
   */
  suggest?: string[]
})

}
declare namespace R65 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  /**
   * Identifier names for which shadowing is allowed.
   */
  allow?: string[]
  /**
   * Whether to report shadowing of built-in global variables.
   */
  builtinGlobals?: boolean
  /**
   * Whether to report shadowing before outer functions or variables are defined.
   */
  hoist?: ("all" | "functions" | "functions-and-types" | "never" | "types")
  /**
   * Whether to ignore function parameters named the same as a variable.
   */
  ignoreFunctionTypeParameterNameValueShadow?: boolean
  /**
   * Whether to ignore the variable initializers when the shadowed variable is presumably still uninitialized.
   */
  ignoreOnInitialization?: boolean
  /**
   * Whether to ignore types named the same as a variable.
   */
  ignoreTypeValueShadow?: boolean
}]

}
declare namespace R66 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  /**
   * Whether to ignore destructuring, such as `const { props, state } = this`.
   */
  allowDestructuring?: boolean
  /**
   * Names to ignore, such as ["self"] for `const self = this;`.
   */
  allowedNames?: string[]
}]

}
declare namespace R67 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  /**
   * Whether to allow direct one-to-one type aliases.
   */
  allowAliases?: ("always" | "never" | "in-unions" | "in-intersections" | "in-unions-and-intersections")
  /**
   * Whether to allow type aliases for callbacks.
   */
  allowCallbacks?: ("always" | "never")
  /**
   * Whether to allow type aliases for conditional types.
   */
  allowConditionalTypes?: ("always" | "never")
  /**
   * Whether to allow type aliases with constructors.
   */
  allowConstructors?: ("always" | "never")
  /**
   * Whether to allow type aliases with generic types.
   */
  allowGenerics?: ("always" | "never")
  /**
   * Whether to allow type aliases with object literal types.
   */
  allowLiterals?: ("always" | "never" | "in-unions" | "in-intersections" | "in-unions-and-intersections")
  /**
   * Whether to allow type aliases with mapped types.
   */
  allowMappedTypes?: ("always" | "never" | "in-unions" | "in-intersections" | "in-unions-and-intersections")
  /**
   * Whether to allow type aliases with tuple types.
   */
  allowTupleTypes?: ("always" | "never" | "in-unions" | "in-intersections" | "in-unions-and-intersections")
}]

}
declare namespace R68 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  /**
   * Whether to allow comparisons between nullable boolean variables and `false`.
   */
  allowComparingNullableBooleansToFalse?: boolean
  /**
   * Whether to allow comparisons between nullable boolean variables and `true`.
   */
  allowComparingNullableBooleansToTrue?: boolean
  /**
   * Unless this is set to `true`, the rule will error on every file whose `tsconfig.json` does _not_ have the `strictNullChecks` compiler option (or `strict`) set to `true`.
   */
  allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing?: boolean
}]

}
declare namespace R69 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  /**
   * Whether to ignore constant loop conditions, such as `while (true)`.
   */
  allowConstantLoopConditions?: (boolean | ("always" | "never" | "only-allowed-literals"))
  /**
   * Whether to not error when running with a tsconfig that has strictNullChecks turned.
   */
  allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing?: boolean
  /**
   * Whether to check the asserted argument of a type predicate function for unnecessary conditions
   */
  checkTypePredicates?: boolean
}]

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
 * @maxItems 1
 */
type Options = []|[{
  /**
   * Whether to check literal const assertions.
   */
  checkLiteralConstAssertions?: boolean
  /**
   * A list of type names to ignore.
   */
  typesToIgnore?: string[]
}]

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
 * @maxItems 1
 */
type Options = []|[{
  /**
   * Whether to allow `?.` optional chains on `any` values.
   */
  allowOptionalChaining?: boolean
}]

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
type Options = []|[(("all" | "local") | {
  /**
   * Whether to check all, some, or no arguments.
   */
  args?: ("all" | "after-used" | "none")
  /**
   * Regular expressions of argument names to not check for usage.
   */
  argsIgnorePattern?: string
  /**
   * Whether to check catch block arguments.
   */
  caughtErrors?: ("all" | "none")
  /**
   * Regular expressions of catch block argument names to not check for usage.
   */
  caughtErrorsIgnorePattern?: string
  /**
   * Regular expressions of destructured array variable names to not check for usage.
   */
  destructuredArrayIgnorePattern?: string
  /**
   * Configurable automatic fixes for different types of unused variables.
   */
  enableAutofixRemoval?: {
    /**
     * Whether to enable automatic removal of unused imports.
     */
    imports?: boolean
  }
  /**
   * Whether to ignore classes with at least one static initialization block.
   */
  ignoreClassWithStaticInitBlock?: boolean
  /**
   * Whether to ignore sibling properties in `...` destructuring.
   */
  ignoreRestSiblings?: boolean
  /**
   * Whether to ignore using or await using declarations.
   */
  ignoreUsingDeclarations?: boolean
  /**
   * Whether to report variables that match any of the valid ignore pattern options if they have been used.
   */
  reportUsedIgnorePattern?: boolean
  /**
   * Whether to check all variables or only locally-declared variables.
   */
  vars?: ("all" | "local")
  /**
   * Regular expressions of variable names to not check for usage.
   */
  varsIgnorePattern?: string
})]

}
declare namespace R92 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[("nofunc" | {
  /**
   * Whether to ignore named exports.
   */
  allowNamedExports?: boolean
  /**
   * Whether to ignore references to class declarations.
   */
  classes?: boolean
  /**
   * Whether to check references to enums.
   */
  enums?: boolean
  /**
   * Whether to ignore references to function declarations.
   */
  functions?: boolean
  /**
   * Whether to ignore type references, such as in type annotations and assertions.
   */
  ignoreTypeReferences?: boolean
  /**
   * Whether to check references to types.
   */
  typedefs?: boolean
  /**
   * Whether to ignore references to variables.
   */
  variables?: boolean
})]

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
 * @maxItems 1
 */
type Options = []|[{
  /**
   * Unless this is set to `true`, the rule will error on every file whose `tsconfig.json` does _not_ have the `strictNullChecks` compiler option (or `strict`) set to `true`.
   */
  allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing?: boolean
}]

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
  /**
   * Patterns of import paths to allow requiring from.
   */
  allow?: string[]
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
 * @maxItems 1
 */
type Options = []|[{
  /**
   * Type specifiers that can be thrown.
   */
  allow?: (string | {
    from: "file"
    name: (string | [string, ...(string)[]])
    path?: string
  } | {
    from: "lib"
    name: (string | [string, ...(string)[]])
  } | {
    from: "package"
    name: (string | [string, ...(string)[]])
    package: string
  })[]
  /**
   * Whether to allow rethrowing caught values that are not `Error` objects.
   */
  allowRethrowing?: boolean
  /**
   * Whether to always allow throwing values typed as `any`.
   */
  allowThrowingAny?: boolean
  /**
   * Whether to always allow throwing values typed as `unknown`.
   */
  allowThrowingUnknown?: boolean
}]

}
declare namespace R100 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  /**
   * Whether to allow certain kinds of properties to be ignored.
   */
  allow?: Modifier[]
  /**
   * Whether to prefer class properties or parameter properties.
   */
  prefer?: ("class-property" | "parameter-property")
}]
type Modifier = ("readonly" | "private" | "protected" | "public" | "private readonly" | "protected readonly" | "public readonly")

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
 * @maxItems 2
 */
type Options = []|[({
  AssignmentExpression?: {
    array?: boolean
    object?: boolean
  }
  VariableDeclarator?: {
    array?: boolean
    object?: boolean
  }
} | {
  array?: boolean
  object?: boolean
})]|[({
  AssignmentExpression?: {
    array?: boolean
    object?: boolean
  }
  VariableDeclarator?: {
    array?: boolean
    object?: boolean
  }
} | {
  array?: boolean
  object?: boolean
}), {
  /**
   * Whether to enforce destructuring on variable declarations with type annotations.
   */
  enforceForDeclarationWithTypeAnnotation?: boolean
  /**
   * Whether to enforce destructuring that use a different variable name than the property name.
   */
  enforceForRenamedProperties?: boolean
}]

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
  /**
   * Whether to allow using bitwise expressions in enum initializers.
   */
  allowBitwiseExpressions?: boolean
}]

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
 * @maxItems 1
 */
type Options = []|[{
  /**
   * Unless this is set to `true`, the rule will error on every file whose `tsconfig.json` does _not_ have the `strictNullChecks` compiler option (or `strict`) set to `true`.
   */
  allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing?: boolean
  /**
   * Whether to ignore arguments to the `Boolean` constructor
   */
  ignoreBooleanCoercion?: boolean
  /**
   * Whether to ignore cases that are located within a conditional test.
   */
  ignoreConditionalTests?: boolean
  /**
   * Whether to ignore any if statements that could be simplified by using the nullish coalescing operator.
   */
  ignoreIfStatements?: boolean
  /**
   * Whether to ignore any logical or expressions that are part of a mixed logical expression (with `&&`).
   */
  ignoreMixedLogicalExpressions?: boolean
  /**
   * Whether to ignore all (`true`) or some (an object with properties) primitive types.
   */
  ignorePrimitives?: ({
    /**
     * Ignore bigint primitive types.
     */
    bigint?: boolean
    /**
     * Ignore boolean primitive types.
     */
    boolean?: boolean
    /**
     * Ignore number primitive types.
     */
    number?: boolean
    /**
     * Ignore string primitive types.
     */
    string?: boolean
  } | true)
  /**
   * Whether to ignore any ternary expressions that could be simplified by using the nullish coalescing operator.
   */
  ignoreTernaryTests?: boolean
}]

}
declare namespace R111 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  /**
   * Allow autofixers that will change the return type of the expression. This option is considered unsafe as it may break the build.
   */
  allowPotentiallyUnsafeFixesThatModifyTheReturnTypeIKnowWhatImDoing?: boolean
  /**
   * Check operands that are typed as `any` when inspecting "loose boolean" operands.
   */
  checkAny?: boolean
  /**
   * Check operands that are typed as `bigint` when inspecting "loose boolean" operands.
   */
  checkBigInt?: boolean
  /**
   * Check operands that are typed as `boolean` when inspecting "loose boolean" operands.
   */
  checkBoolean?: boolean
  /**
   * Check operands that are typed as `number` when inspecting "loose boolean" operands.
   */
  checkNumber?: boolean
  /**
   * Check operands that are typed as `string` when inspecting "loose boolean" operands.
   */
  checkString?: boolean
  /**
   * Check operands that are typed as `unknown` when inspecting "loose boolean" operands.
   */
  checkUnknown?: boolean
  /**
   * Skip operands that are not typed with `null` and/or `undefined` when inspecting "loose boolean" operands.
   */
  requireNullish?: boolean
}]

}
declare namespace R112 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  /**
   * Type specifiers that can be used as Promise rejection reasons.
   */
  allow?: (string | {
    from: "file"
    name: (string | [string, ...(string)[]])
    path?: string
  } | {
    from: "lib"
    name: (string | [string, ...(string)[]])
  } | {
    from: "package"
    name: (string | [string, ...(string)[]])
    package: string
  })[]
  /**
   * Whether to allow calls to `Promise.reject()` with no arguments.
   */
  allowEmptyReject?: boolean
  /**
   * Whether to always allow throwing values typed as `any`.
   */
  allowThrowingAny?: boolean
  /**
   * Whether to always allow throwing values typed as `unknown`.
   */
  allowThrowingUnknown?: boolean
}]

}
declare namespace R113 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  /**
   * Whether to restrict checking only to members immediately assigned a lambda value.
   */
  onlyInlineLambdas?: boolean
}]

}
declare namespace R114 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  /**
   * An array of type specifiers to ignore.
   */
  allow?: (string | {
    from: "file"
    name: (string | [string, ...(string)[]])
    path?: string
  } | {
    from: "lib"
    name: (string | [string, ...(string)[]])
  } | {
    from: "package"
    name: (string | [string, ...(string)[]])
    package: string
  })[]
  /**
   * Whether to check class parameter properties.
   */
  checkParameterProperties?: boolean
  /**
   * Whether to ignore parameters which don't explicitly specify a type.
   */
  ignoreInferredTypes?: boolean
  /**
   * Whether to treat all mutable methods as though they are readonly.
   */
  treatMethodsAsReadonly?: boolean
}]

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
 * @maxItems 1
 */
type Options = []|[{
  /**
   * Whether to allow equality checks against the first or last element of a string.
   */
  allowSingleElementEquality?: ("always" | "never")
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
type Options = []|[{
  /**
   * Whether to consider `any` and `unknown` to be Promises.
   */
  allowAny?: boolean
  /**
   * Any extra names of classes or interfaces to be considered Promises.
   */
  allowedPromiseNames?: string[]
  /**
   * Whether to check arrow functions.
   */
  checkArrowFunctions?: boolean
  /**
   * Whether to check standalone function declarations.
   */
  checkFunctionDeclarations?: boolean
  /**
   * Whether to check inline function expressions
   */
  checkFunctionExpressions?: boolean
  /**
   * Whether to check methods on classes and object literals.
   */
  checkMethodDeclarations?: boolean
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
 * @maxItems 1
 */
type Options = []|[{
  /**
   * Whether to ignore arrays in which all elements are strings.
   */
  ignoreStringArrays?: boolean
}]

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
  /**
   * Whether to allow `any` typed values.
   */
  allowAny?: boolean
  /**
   * Whether to allow `boolean` typed values.
   */
  allowBoolean?: boolean
  /**
   * Whether to allow potentially `null` or `undefined` typed values.
   */
  allowNullish?: boolean
  /**
   * Whether to allow `bigint`/`number` typed values and `string` typed values to be added together.
   */
  allowNumberAndString?: boolean
  /**
   * Whether to allow `regexp` typed values.
   */
  allowRegExp?: boolean
  /**
   * Whether to skip compound assignments such as `+=`.
   */
  skipCompoundAssignments?: boolean
}]

}
declare namespace R125 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  /**
   * Whether to allow `any` typed values in template expressions.
   */
  allowAny?: boolean
  /**
   * Whether to allow `array` typed values in template expressions.
   */
  allowArray?: boolean
  /**
   * Whether to allow `boolean` typed values in template expressions.
   */
  allowBoolean?: boolean
  /**
   * Whether to allow `nullish` typed values in template expressions.
   */
  allowNullish?: boolean
  /**
   * Whether to allow `number` typed values in template expressions.
   */
  allowNumber?: boolean
  /**
   * Whether to allow `regexp` typed values in template expressions.
   */
  allowRegExp?: boolean
  /**
   * Whether to allow `never` typed values in template expressions.
   */
  allowNever?: boolean
  /**
   * Types to allow in template expressions.
   */
  allow?: (string | {
    from: "file"
    name: (string | [string, ...(string)[]])
    path?: string
  } | {
    from: "lib"
    name: (string | [string, ...(string)[]])
  } | {
    from: "package"
    name: (string | [string, ...(string)[]])
    package: string
  })[]
}]

}
declare namespace R126 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[(("always" | "error-handling-correctness-only" | "in-try-catch" | "never") & string)]

}
declare namespace R127 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  /**
   * Whether to sort using case sensitive string comparisons.
   */
  caseSensitive?: boolean
  /**
   * Whether to check intersection types (`&`).
   */
  checkIntersections?: boolean
  /**
   * Whether to check union types (`|`).
   */
  checkUnions?: boolean
  /**
   * Ordering of the groups.
   */
  groupOrder?: ("conditional" | "function" | "import" | "intersection" | "keyword" | "nullish" | "literal" | "named" | "object" | "operator" | "tuple" | "union")[]
}]

}
declare namespace R128 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  /**
   * Whether to allow `any`s in a boolean context.
   */
  allowAny?: boolean
  /**
   * Whether to allow nullable `boolean`s in a boolean context.
   */
  allowNullableBoolean?: boolean
  /**
   * Whether to allow nullable `enum`s in a boolean context.
   */
  allowNullableEnum?: boolean
  /**
   * Whether to allow nullable `number`s in a boolean context.
   */
  allowNullableNumber?: boolean
  /**
   * Whether to allow nullable `object`s, `symbol`s, and functions in a boolean context.
   */
  allowNullableObject?: boolean
  /**
   * Whether to allow nullable `string`s in a boolean context.
   */
  allowNullableString?: boolean
  /**
   * Whether to allow `number`s in a boolean context.
   */
  allowNumber?: boolean
  /**
   * Unless this is set to `true`, the rule will error on every file whose `tsconfig.json` does _not_ have the `strictNullChecks` compiler option (or `strict`) set to `true`.
   */
  allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing?: boolean
  /**
   * Whether to allow `string`s in a boolean context.
   */
  allowString?: boolean
}]

}
declare namespace R129 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  /**
   * Whether to allow functions returning `any` to be used in place expecting a `void` function.
   */
  allowReturnAny?: boolean
}]

}
declare namespace R130 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  /**
   * If 'true', allow 'default' cases on switch statements with exhaustive cases.
   */
  allowDefaultCaseForExhaustiveSwitch?: boolean
  /**
   * If 'true', the 'default' clause is used to determine whether the switch statement is exhaustive for union type
   */
  considerDefaultExhaustiveForUnions?: boolean
  /**
   * Regular expression for a comment that can indicate an intentionally omitted default case.
   */
  defaultCaseCommentPattern?: string
  /**
   * If 'true', require a 'default' clause for switches on non-union types.
   */
  requireDefaultForNonUnion?: boolean
}]

}
declare namespace R131 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  /**
   * What to enforce for `/// <reference lib="..." />` references.
   */
  lib?: ("always" | "never")
  /**
   * What to enforce for `/// <reference path="..." />` references.
   */
  path?: ("always" | "never")
  /**
   * What to enforce for `/// <reference types="..." />` references.
   */
  types?: ("always" | "never" | "prefer-import")
}]

}
declare namespace R132 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  /**
   * Whether to enforce type annotations on variables declared using array destructuring.
   */
  arrayDestructuring?: boolean
  /**
   * Whether to enforce type annotations for parameters of arrow functions.
   */
  arrowParameter?: boolean
  /**
   * Whether to enforce type annotations on member variables of classes.
   */
  memberVariableDeclaration?: boolean
  /**
   * Whether to enforce type annotations on variables declared using object destructuring.
   */
  objectDestructuring?: boolean
  /**
   * Whether to enforce type annotations for parameters of functions and methods.
   */
  parameter?: boolean
  /**
   * Whether to enforce type annotations for properties of interfaces and types.
   */
  propertyDeclaration?: boolean
  /**
   * Whether to enforce type annotations for variable declarations, excluding array and object destructuring.
   */
  variableDeclaration?: boolean
  /**
   * Whether to ignore variable declarations for non-arrow and arrow functions.
   */
  variableDeclarationIgnoreFunction?: boolean
}]

}
declare namespace R133 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  /**
   * Whether to skip checking whether `static` methods are correctly bound.
   */
  ignoreStatic?: boolean
}]

}
declare namespace R134 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  /**
   * Whether two parameters with different names at the same index should be considered different even if their types are the same.
   */
  ignoreDifferentlyNamedParameters?: boolean
  /**
   * Whether two overloads with different JSDoc comments should be considered different even if their parameter and return types are the same.
   */
  ignoreOverloadsWithDifferentJSDoc?: boolean
}]

}
declare namespace R135 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
export type RuleOptions = {
  "ts/adjacent-overload-signatures": R0.Options;
  "ts/array-type": R1.Options;
  "ts/await-thenable": R2.Options;
  "ts/ban-ts-comment": R3.Options;
  "ts/ban-tslint-comment": R4.Options;
  "ts/class-literal-property-style": R5.Options;
  "ts/class-methods-use-this": R6.Options;
  "ts/consistent-generic-constructors": R7.Options;
  "ts/consistent-indexed-object-style": R8.Options;
  "ts/consistent-return": R9.Options;
  "ts/consistent-type-assertions": R10.Options;
  "ts/consistent-type-definitions": R11.Options;
  "ts/consistent-type-exports": R12.Options;
  "ts/consistent-type-imports": R13.Options;
  "ts/default-param-last": R14.Options;
  "ts/dot-notation": R15.Options;
  "ts/explicit-function-return-type": R16.Options;
  "ts/explicit-member-accessibility": R17.Options;
  "ts/explicit-module-boundary-types": R18.Options;
  "ts/init-declarations": R19.Options;
  "ts/max-params": R20.Options;
  "ts/member-ordering": R21.Options;
  "ts/method-signature-style": R22.Options;
  "ts/naming-convention": R23.Options;
  "ts/no-array-constructor": R24.Options;
  "ts/no-array-delete": R25.Options;
  "ts/no-base-to-string": R26.Options;
  "ts/no-confusing-non-null-assertion": R27.Options;
  "ts/no-confusing-void-expression": R28.Options;
  "ts/no-deprecated": R29.Options;
  "ts/no-dupe-class-members": R30.Options;
  "ts/no-duplicate-enum-values": R31.Options;
  "ts/no-duplicate-type-constituents": R32.Options;
  "ts/no-dynamic-delete": R33.Options;
  "ts/no-empty-function": R34.Options;
  "ts/no-empty-interface": R35.Options;
  "ts/no-empty-object-type": R36.Options;
  "ts/no-explicit-any": R37.Options;
  "ts/no-extra-non-null-assertion": R38.Options;
  "ts/no-extraneous-class": R39.Options;
  "ts/no-floating-promises": R40.Options;
  "ts/no-for-in-array": R41.Options;
  "ts/no-generated-empty-object-type": R42.Options;
  "ts/no-implied-eval": R43.Options;
  "ts/no-import-type-side-effects": R44.Options;
  "ts/no-inferrable-types": R45.Options;
  "ts/no-invalid-this": R46.Options;
  "ts/no-invalid-void-type": R47.Options;
  "ts/no-loop-func": R48.Options;
  "ts/no-loss-of-precision": R49.Options;
  "ts/no-magic-numbers": R50.Options;
  "ts/no-meaningless-void-operator": R51.Options;
  "ts/no-misused-new": R52.Options;
  "ts/no-misused-promises": R53.Options;
  "ts/no-misused-spread": R54.Options;
  "ts/no-mixed-enums": R55.Options;
  "ts/no-namespace": R56.Options;
  "ts/no-non-null-asserted-nullish-coalescing": R57.Options;
  "ts/no-non-null-asserted-optional-chain": R58.Options;
  "ts/no-non-null-assertion": R59.Options;
  "ts/no-redeclare": R60.Options;
  "ts/no-redundant-type-constituents": R61.Options;
  "ts/no-require-imports": R62.Options;
  "ts/no-restricted-imports": R63.Options;
  "ts/no-restricted-types": R64.Options;
  "ts/no-shadow": R65.Options;
  "ts/no-this-alias": R66.Options;
  "ts/no-type-alias": R67.Options;
  "ts/no-unnecessary-boolean-literal-compare": R68.Options;
  "ts/no-unnecessary-condition": R69.Options;
  "ts/no-unnecessary-parameter-property-assignment": R70.Options;
  "ts/no-unnecessary-qualifier": R71.Options;
  "ts/no-unnecessary-template-expression": R72.Options;
  "ts/no-unnecessary-type-arguments": R73.Options;
  "ts/no-unnecessary-type-assertion": R74.Options;
  "ts/no-unnecessary-type-constraint": R75.Options;
  "ts/no-unnecessary-type-conversion": R76.Options;
  "ts/no-unnecessary-type-parameters": R77.Options;
  "ts/no-unsafe-argument": R78.Options;
  "ts/no-unsafe-assignment": R79.Options;
  "ts/no-unsafe-call": R80.Options;
  "ts/no-unsafe-declaration-merging": R81.Options;
  "ts/no-unsafe-enum-assignment": R82.Options;
  "ts/no-unsafe-enum-comparison": R83.Options;
  "ts/no-unsafe-function-type": R84.Options;
  "ts/no-unsafe-member-access": R85.Options;
  "ts/no-unsafe-return": R86.Options;
  "ts/no-unsafe-type-assertion": R87.Options;
  "ts/no-unsafe-unary-minus": R88.Options;
  "ts/no-unused-expressions": R89.Options;
  "ts/no-unused-private-class-members": R90.Options;
  "ts/no-unused-vars": R91.Options;
  "ts/no-use-before-define": R92.Options;
  "ts/no-useless-constructor": R93.Options;
  "ts/no-useless-default-assignment": R94.Options;
  "ts/no-useless-empty-export": R95.Options;
  "ts/no-var-requires": R96.Options;
  "ts/no-wrapper-object-types": R97.Options;
  "ts/non-nullable-type-assertion-style": R98.Options;
  "ts/only-throw-error": R99.Options;
  "ts/parameter-properties": R100.Options;
  "ts/prefer-as-const": R101.Options;
  "ts/prefer-destructuring": R102.Options;
  "ts/prefer-enum-initializers": R103.Options;
  "ts/prefer-find": R104.Options;
  "ts/prefer-for-of": R105.Options;
  "ts/prefer-function-type": R106.Options;
  "ts/prefer-includes": R107.Options;
  "ts/prefer-literal-enum-member": R108.Options;
  "ts/prefer-namespace-keyword": R109.Options;
  "ts/prefer-nullish-coalescing": R110.Options;
  "ts/prefer-optional-chain": R111.Options;
  "ts/prefer-promise-reject-errors": R112.Options;
  "ts/prefer-readonly": R113.Options;
  "ts/prefer-readonly-parameter-types": R114.Options;
  "ts/prefer-reduce-type-parameter": R115.Options;
  "ts/prefer-regexp-exec": R116.Options;
  "ts/prefer-return-this-type": R117.Options;
  "ts/prefer-string-starts-ends-with": R118.Options;
  "ts/prefer-ts-expect-error": R119.Options;
  "ts/promise-function-async": R120.Options;
  "ts/related-getter-setter-pairs": R121.Options;
  "ts/require-array-sort-compare": R122.Options;
  "ts/require-await": R123.Options;
  "ts/restrict-plus-operands": R124.Options;
  "ts/restrict-template-expressions": R125.Options;
  "ts/return-await": R126.Options;
  "ts/sort-type-constituents": R127.Options;
  "ts/strict-boolean-expressions": R128.Options;
  "ts/strict-void-return": R129.Options;
  "ts/switch-exhaustiveness-check": R130.Options;
  "ts/triple-slash-reference": R131.Options;
  "ts/typedef": R132.Options;
  "ts/unbound-method": R133.Options;
  "ts/unified-signatures": R134.Options;
  "ts/use-unknown-in-catch-callback-variable": R135.Options;
};

export type TypedRuleIds = "ts/await-thenable" | "ts/consistent-return" | "ts/consistent-type-exports" | "ts/dot-notation" | "ts/naming-convention" | "ts/no-array-delete" | "ts/no-base-to-string" | "ts/no-confusing-void-expression" | "ts/no-deprecated" | "ts/no-duplicate-type-constituents" | "ts/no-floating-promises" | "ts/no-for-in-array" | "ts/no-generated-empty-object-type" | "ts/no-implied-eval" | "ts/no-meaningless-void-operator" | "ts/no-misused-promises" | "ts/no-misused-spread" | "ts/no-mixed-enums" | "ts/no-redundant-type-constituents" | "ts/no-unnecessary-boolean-literal-compare" | "ts/no-unnecessary-condition" | "ts/no-unnecessary-qualifier" | "ts/no-unnecessary-template-expression" | "ts/no-unnecessary-type-arguments" | "ts/no-unnecessary-type-assertion" | "ts/no-unnecessary-type-conversion" | "ts/no-unnecessary-type-parameters" | "ts/no-unsafe-argument" | "ts/no-unsafe-assignment" | "ts/no-unsafe-call" | "ts/no-unsafe-enum-assignment" | "ts/no-unsafe-enum-comparison" | "ts/no-unsafe-member-access" | "ts/no-unsafe-return" | "ts/no-unsafe-type-assertion" | "ts/no-unsafe-unary-minus" | "ts/no-useless-default-assignment" | "ts/non-nullable-type-assertion-style" | "ts/only-throw-error" | "ts/prefer-destructuring" | "ts/prefer-find" | "ts/prefer-includes" | "ts/prefer-nullish-coalescing" | "ts/prefer-optional-chain" | "ts/prefer-promise-reject-errors" | "ts/prefer-readonly" | "ts/prefer-readonly-parameter-types" | "ts/prefer-reduce-type-parameter" | "ts/prefer-regexp-exec" | "ts/prefer-return-this-type" | "ts/prefer-string-starts-ends-with" | "ts/promise-function-async" | "ts/related-getter-setter-pairs" | "ts/require-array-sort-compare" | "ts/require-await" | "ts/restrict-plus-operands" | "ts/restrict-template-expressions" | "ts/return-await" | "ts/strict-boolean-expressions" | "ts/strict-void-return" | "ts/switch-exhaustiveness-check" | "ts/unbound-method" | "ts/use-unknown-in-catch-callback-variable";
