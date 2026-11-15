// Generated from installed rule schemas. Do not edit.
// schemas-sha256: f9715ae0f8c2bf5712389532bf6d6b4e83337b2bf1b0f4b9a2300a0d5435c9bf
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
type Options = []|[("always" | "never")]

}
declare namespace R4 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  caseInsensitive?: ("lowercase" | "uppercase" | "ignore")
  unicodeEscape?: ("lowercase" | "uppercase" | "ignore")
  hexadecimalEscape?: ("lowercase" | "uppercase" | "ignore")
  controlEscape?: ("lowercase" | "uppercase" | "ignore")
}]

}
declare namespace R5 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  /**
   * @minItems 1
   */
  allows?: [("[\\s\\S]" | "[\\S\\s]" | "[^]" | "dotAll"), ...(("[\\s\\S]" | "[\\S\\s]" | "[^]" | "dotAll"))[]]
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
 * @maxItems 0
 */
type Options = []

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
  report?: ("all" | "trivial" | "interesting")
  reportExponentialBacktracking?: ("none" | "certain" | "potential")
  reportUnreachable?: ("certain" | "potential")
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
 * @maxItems 0
 */
type Options = []

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
 * @maxItems 1
 */
type Options = []|[{
  ignorePartial?: boolean
}]

}
declare namespace R22 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  staticProperties?: ("input" | "$_" | "lastMatch" | "$&" | "lastParen" | "$+" | "leftContext" | "$`" | "rightContext" | "$'" | "$1" | "$2" | "$3" | "$4" | "$5" | "$6" | "$7" | "$8" | "$9")[]
  prototypeMethods?: ("compile")[]
}]

}
declare namespace R23 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  reportBacktrackingEnds?: boolean
}]

}
declare namespace R24 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  fixable?: boolean
}]

}
declare namespace R25 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  strictTypes?: boolean
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
 * @maxItems 1
 */
type Options = []|[{
  allowed?: (("all" | "alphanumeric") | [("all" | "alphanumeric")] | [("alphanumeric" | string), ...(("alphanumeric" | string))[]])
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
  report?: ("certain" | "potential")
}]

}
declare namespace R33 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  report?: ("certain" | "potential")
  ignoreSticky?: boolean
  ignorePartial?: boolean
}]

}
declare namespace R34 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R35 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
declare namespace R36 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  fixable?: boolean
  allowNamed?: boolean
}]

}
declare namespace R37 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

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
  ignores?: string[]
}]

}
declare namespace R40 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

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
 * @maxItems 1
 */
type Options = []|[{
  ignore?: ("i" | "m" | "s" | "g" | "y")[]
  strictTypes?: boolean
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
 * @maxItems 1
 */
type Options = []|[{
  allowTop?: (boolean | ("always" | "never" | "partial"))
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
 * @maxItems 0
 */
type Options = []

}
declare namespace R47 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

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
 * @maxItems 1
 */
type Options = []|[{
  capturingGroups?: ("ignore" | "report")
}]

}
declare namespace R53 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  minAlternatives?: number
}]

}
declare namespace R54 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  insideCharacterClass?: ("ignore" | "range" | "d")
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
  lookbehind?: boolean
  strictTypes?: boolean
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
 * @maxItems 1
 */
type Options = []|[{
  strictTypes?: boolean
}]

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
 * @maxItems 1
 */
type Options = []|[{
  allows?: string[]
}]

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
 * @maxItems 1
 */
type Options = []|[{
  target?: (("all" | "alphanumeric") | [("all" | "alphanumeric")] | [("alphanumeric" | string), ...(("alphanumeric" | string))[]])
}]

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
  strictTypes?: boolean
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
 * @maxItems 1
 */
type Options = []|[{
  order?: ("\\s" | "\\w" | "\\d" | "\\p" | "*" | "\\q" | "[]")[]
}]

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
 * @maxItems 1
 */
type Options = []|[("unicodeCodePointEscape" | "unicodeEscape")]

}
declare namespace R80 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  generalCategory?: ("always" | "never" | "ignore")
  key?: ("short" | "long" | "ignore")
  property?: (("short" | "long" | "ignore") | {
    binary?: ("short" | "long" | "ignore")
    generalCategory?: ("short" | "long" | "ignore")
    script?: ("short" | "long" | "ignore")
  })
}]

}
declare namespace R81 {
/**
 * @minItems 0
 * @maxItems 0
 */
type Options = []

}
export type RuleOptions = {
  "regexp/confusing-quantifier": R0.Options;
  "regexp/control-character-escape": R1.Options;
  "regexp/grapheme-string-literal": R2.Options;
  "regexp/hexadecimal-escape": R3.Options;
  "regexp/letter-case": R4.Options;
  "regexp/match-any": R5.Options;
  "regexp/negation": R6.Options;
  "regexp/no-contradiction-with-assertion": R7.Options;
  "regexp/no-control-character": R8.Options;
  "regexp/no-dupe-characters-character-class": R9.Options;
  "regexp/no-dupe-disjunctions": R10.Options;
  "regexp/no-empty-alternative": R11.Options;
  "regexp/no-empty-capturing-group": R12.Options;
  "regexp/no-empty-character-class": R13.Options;
  "regexp/no-empty-group": R14.Options;
  "regexp/no-empty-lookarounds-assertion": R15.Options;
  "regexp/no-empty-string-literal": R16.Options;
  "regexp/no-escape-backspace": R17.Options;
  "regexp/no-extra-lookaround-assertions": R18.Options;
  "regexp/no-invalid-regexp": R19.Options;
  "regexp/no-invisible-character": R20.Options;
  "regexp/no-lazy-ends": R21.Options;
  "regexp/no-legacy-features": R22.Options;
  "regexp/no-misleading-capturing-group": R23.Options;
  "regexp/no-misleading-unicode-character": R24.Options;
  "regexp/no-missing-g-flag": R25.Options;
  "regexp/no-non-standard-flag": R26.Options;
  "regexp/no-obscure-range": R27.Options;
  "regexp/no-octal": R28.Options;
  "regexp/no-optional-assertion": R29.Options;
  "regexp/no-potentially-useless-backreference": R30.Options;
  "regexp/no-standalone-backslash": R31.Options;
  "regexp/no-super-linear-backtracking": R32.Options;
  "regexp/no-super-linear-move": R33.Options;
  "regexp/no-trivially-nested-assertion": R34.Options;
  "regexp/no-trivially-nested-quantifier": R35.Options;
  "regexp/no-unused-capturing-group": R36.Options;
  "regexp/no-useless-assertions": R37.Options;
  "regexp/no-useless-backreference": R38.Options;
  "regexp/no-useless-character-class": R39.Options;
  "regexp/no-useless-dollar-replacements": R40.Options;
  "regexp/no-useless-escape": R41.Options;
  "regexp/no-useless-flag": R42.Options;
  "regexp/no-useless-lazy": R43.Options;
  "regexp/no-useless-non-capturing-group": R44.Options;
  "regexp/no-useless-quantifier": R45.Options;
  "regexp/no-useless-range": R46.Options;
  "regexp/no-useless-set-operand": R47.Options;
  "regexp/no-useless-string-literal": R48.Options;
  "regexp/no-useless-two-nums-quantifier": R49.Options;
  "regexp/no-zero-quantifier": R50.Options;
  "regexp/optimal-lookaround-quantifier": R51.Options;
  "regexp/optimal-quantifier-concatenation": R52.Options;
  "regexp/prefer-character-class": R53.Options;
  "regexp/prefer-d": R54.Options;
  "regexp/prefer-escape-replacement-dollar-char": R55.Options;
  "regexp/prefer-lookaround": R56.Options;
  "regexp/prefer-named-backreference": R57.Options;
  "regexp/prefer-named-capture-group": R58.Options;
  "regexp/prefer-named-replacement": R59.Options;
  "regexp/prefer-plus-quantifier": R60.Options;
  "regexp/prefer-predefined-assertion": R61.Options;
  "regexp/prefer-quantifier": R62.Options;
  "regexp/prefer-question-quantifier": R63.Options;
  "regexp/prefer-range": R64.Options;
  "regexp/prefer-regexp-exec": R65.Options;
  "regexp/prefer-regexp-test": R66.Options;
  "regexp/prefer-result-array-groups": R67.Options;
  "regexp/prefer-set-operation": R68.Options;
  "regexp/prefer-star-quantifier": R69.Options;
  "regexp/prefer-unicode-codepoint-escapes": R70.Options;
  "regexp/prefer-w": R71.Options;
  "regexp/require-unicode-regexp": R72.Options;
  "regexp/require-unicode-sets-regexp": R73.Options;
  "regexp/simplify-set-operations": R74.Options;
  "regexp/sort-alternatives": R75.Options;
  "regexp/sort-character-class-elements": R76.Options;
  "regexp/sort-flags": R77.Options;
  "regexp/strict": R78.Options;
  "regexp/unicode-escape": R79.Options;
  "regexp/unicode-property": R80.Options;
  "regexp/use-ignore-case": R81.Options;
};

export type TypedRuleIds = never;
