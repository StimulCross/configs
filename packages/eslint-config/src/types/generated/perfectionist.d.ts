// Generated from installed rule schemas. Do not edit.
// schemas-sha256: 4c471d4e914813d8444235a5163dbccce02a874f0a6b6830f7ff5ec9229bc454
declare namespace R0 {
type Options = {
  /**
   * Fallback sort order.
   */
  fallbackSort?: {
    /**
     * Specifies the sorting method.
     */
    type: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order")
    /**
     * Specifies whether to sort items in ascending or descending order.
     */
    order?: ("asc" | "desc")
  }
  /**
   * Specifies the sorting method.
   */
  type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order")
  /**
   * Specifies whether to trim, remove, or keep special characters before sorting.
   */
  specialCharacters?: ("remove" | "trim" | "keep")
  /**
   * Controls whether sorting should be case-sensitive or not.
   */
  ignoreCase?: boolean
  /**
   * Used only when the `type` option is set to `'custom'`. Specifies the custom alphabet for sorting.
   */
  alphabet?: string
  /**
   * Specifies the sorting locales.
   */
  locales?: (string | string[])
  /**
   * Specifies whether to sort items in ascending or descending order.
   */
  order?: ("asc" | "desc")
  /**
   * Defines custom groups to match specific members.
   */
  customGroups?: ({
    /**
     * Fallback sort order.
     */
    fallbackSort?: {
      /**
       * Specifies the sorting method.
       */
      type: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order")
      /**
       * Specifies whether to sort items in ascending or descending order.
       */
      order?: ("asc" | "desc")
    }
    /**
     * Specifies the sorting method.
     */
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order")
    /**
     * Custom group name.
     */
    groupName: string
    newlinesInside?: ("ignore" | number)
    /**
     * Specifies whether to sort items in ascending or descending order.
     */
    order?: ("asc" | "desc")
    /**
     * @minItems 1
     */
    anyOf: [{
      /**
       * Regular expression.
       */
      elementNamePattern?: (({
        /**
         * Regular expression pattern.
         */
        pattern: string
        /**
         * Regular expression flags.
         */
        flags?: string
      } | string)[] | ({
        /**
         * Regular expression pattern.
         */
        pattern: string
        /**
         * Regular expression flags.
         */
        flags?: string
      } | string))
      /**
       * Selector filter.
       */
      selector?: "literal"
    }, ...({
      /**
       * Regular expression.
       */
      elementNamePattern?: (({
        /**
         * Regular expression pattern.
         */
        pattern: string
        /**
         * Regular expression flags.
         */
        flags?: string
      } | string)[] | ({
        /**
         * Regular expression pattern.
         */
        pattern: string
        /**
         * Regular expression flags.
         */
        flags?: string
      } | string))
      /**
       * Selector filter.
       */
      selector?: "literal"
    })[]]
  } | {
    /**
     * Fallback sort order.
     */
    fallbackSort?: {
      /**
       * Specifies the sorting method.
       */
      type: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order")
      /**
       * Specifies whether to sort items in ascending or descending order.
       */
      order?: ("asc" | "desc")
    }
    /**
     * Specifies the sorting method.
     */
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order")
    /**
     * Custom group name.
     */
    groupName: string
    newlinesInside?: ("ignore" | number)
    /**
     * Specifies whether to sort items in ascending or descending order.
     */
    order?: ("asc" | "desc")
    /**
     * Regular expression.
     */
    elementNamePattern?: (({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)[] | ({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string))
    /**
     * Selector filter.
     */
    selector?: "literal"
  })[]
  newlinesInside?: (("ignore" | number) | "newlinesBetween")
  /**
   * Specifies a list of groups for sorting.
   */
  groups?: (string | [string, ...(string)[]] | {
    newlinesBetween: ("ignore" | number)
  } | {
    group: (string | [string, ...(string)[]])
    /**
     * Fallback sort order.
     */
    fallbackSort?: {
      /**
       * Specifies the sorting method.
       */
      type: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order")
      /**
       * Specifies whether to sort items in ascending or descending order.
       */
      order?: ("asc" | "desc")
    }
    /**
     * Specifies a comment to enforce above the group.
     */
    commentAbove?: string
    /**
     * Specifies the sorting method.
     */
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order")
    newlinesInside?: ("ignore" | number)
    /**
     * Specifies whether to sort items in ascending or descending order.
     */
    order?: ("asc" | "desc")
  })[]
  newlinesBetween?: ("ignore" | number)
  /**
   * Specifies filters to match a particular options configuration for a given element to sort.
   */
  useConfigurationIf?: {
    /**
     * Regular expression.
     */
    allNamesMatchPattern?: (({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)[] | ({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string))
    /**
     * Specifies an AST selector to match elements for conditional configuration.
     */
    matchesAstSelector?: string
  }
  /**
   * Enables the use of comments to separate the nodes into logical groups.
   */
  partitionByComment?: (boolean | (({
    /**
     * Regular expression pattern.
     */
    pattern: string
    /**
     * Regular expression flags.
     */
    flags?: string
  } | string)[] | ({
    /**
     * Regular expression pattern.
     */
    pattern: string
    /**
     * Regular expression flags.
     */
    flags?: string
  } | string)) | {
    /**
     * Enables specific block comments to separate the nodes.
     */
    block?: (boolean | (({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)[] | ({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)))
    /**
     * Enables specific line comments to separate the nodes.
     */
    line?: (boolean | (({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)[] | ({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)))
  })
  /**
   * Enables the use of newlines to separate the nodes into logical groups.
   */
  partitionByNewLine?: boolean
}[]

}
declare namespace R1 {
/**
 * @minItems 1
 */
type Options = [{
  /**
   * Fallback sort order.
   */
  fallbackSort?: {
    /**
     * Specifies the sorting method.
     */
    type: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order")
    /**
     * Specifies whether to sort items in ascending or descending order.
     */
    order?: ("asc" | "desc")
  }
  /**
   * Specifies the sorting method.
   */
  type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order")
  /**
   * Specifies whether to trim, remove, or keep special characters before sorting.
   */
  specialCharacters?: ("remove" | "trim" | "keep")
  /**
   * Controls whether sorting should be case-sensitive or not.
   */
  ignoreCase?: boolean
  /**
   * Used only when the `type` option is set to `'custom'`. Specifies the custom alphabet for sorting.
   */
  alphabet?: string
  /**
   * Specifies the sorting locales.
   */
  locales?: (string | string[])
  /**
   * Specifies whether to sort items in ascending or descending order.
   */
  order?: ("asc" | "desc")
  /**
   * Defines custom groups to match specific members.
   */
  customGroups?: ({
    /**
     * Fallback sort order.
     */
    fallbackSort?: {
      /**
       * Specifies the sorting method.
       */
      type: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order")
      /**
       * Specifies whether to sort items in ascending or descending order.
       */
      order?: ("asc" | "desc")
    }
    /**
     * Specifies the sorting method.
     */
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order")
    /**
     * Custom group name.
     */
    groupName: string
    newlinesInside?: ("ignore" | number)
    /**
     * Specifies whether to sort items in ascending or descending order.
     */
    order?: ("asc" | "desc")
    /**
     * @minItems 1
     */
    anyOf: [{
      /**
       * Regular expression.
       */
      elementNamePattern?: (({
        /**
         * Regular expression pattern.
         */
        pattern: string
        /**
         * Regular expression flags.
         */
        flags?: string
      } | string)[] | ({
        /**
         * Regular expression pattern.
         */
        pattern: string
        /**
         * Regular expression flags.
         */
        flags?: string
      } | string))
      /**
       * Selector filter.
       */
      selector?: "literal"
    }, ...({
      /**
       * Regular expression.
       */
      elementNamePattern?: (({
        /**
         * Regular expression pattern.
         */
        pattern: string
        /**
         * Regular expression flags.
         */
        flags?: string
      } | string)[] | ({
        /**
         * Regular expression pattern.
         */
        pattern: string
        /**
         * Regular expression flags.
         */
        flags?: string
      } | string))
      /**
       * Selector filter.
       */
      selector?: "literal"
    })[]]
  } | {
    /**
     * Fallback sort order.
     */
    fallbackSort?: {
      /**
       * Specifies the sorting method.
       */
      type: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order")
      /**
       * Specifies whether to sort items in ascending or descending order.
       */
      order?: ("asc" | "desc")
    }
    /**
     * Specifies the sorting method.
     */
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order")
    /**
     * Custom group name.
     */
    groupName: string
    newlinesInside?: ("ignore" | number)
    /**
     * Specifies whether to sort items in ascending or descending order.
     */
    order?: ("asc" | "desc")
    /**
     * Regular expression.
     */
    elementNamePattern?: (({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)[] | ({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string))
    /**
     * Selector filter.
     */
    selector?: "literal"
  })[]
  newlinesInside?: (("ignore" | number) | "newlinesBetween")
  /**
   * Specifies a list of groups for sorting.
   */
  groups?: (string | [string, ...(string)[]] | {
    newlinesBetween: ("ignore" | number)
  } | {
    group: (string | [string, ...(string)[]])
    /**
     * Fallback sort order.
     */
    fallbackSort?: {
      /**
       * Specifies the sorting method.
       */
      type: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order")
      /**
       * Specifies whether to sort items in ascending or descending order.
       */
      order?: ("asc" | "desc")
    }
    /**
     * Specifies a comment to enforce above the group.
     */
    commentAbove?: string
    /**
     * Specifies the sorting method.
     */
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order")
    newlinesInside?: ("ignore" | number)
    /**
     * Specifies whether to sort items in ascending or descending order.
     */
    order?: ("asc" | "desc")
  })[]
  newlinesBetween?: ("ignore" | number)
  /**
   * Specifies filters to match a particular options configuration for a given element to sort.
   */
  useConfigurationIf: {
    /**
     * Regular expression.
     */
    allNamesMatchPattern?: (({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)[] | ({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string))
    /**
     * Specifies an AST selector to match elements for conditional configuration.
     */
    matchesAstSelector?: string
  }
  /**
   * Enables the use of comments to separate the nodes into logical groups.
   */
  partitionByComment?: (boolean | (({
    /**
     * Regular expression pattern.
     */
    pattern: string
    /**
     * Regular expression flags.
     */
    flags?: string
  } | string)[] | ({
    /**
     * Regular expression pattern.
     */
    pattern: string
    /**
     * Regular expression flags.
     */
    flags?: string
  } | string)) | {
    /**
     * Enables specific block comments to separate the nodes.
     */
    block?: (boolean | (({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)[] | ({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)))
    /**
     * Enables specific line comments to separate the nodes.
     */
    line?: (boolean | (({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)[] | ({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)))
  })
  /**
   * Enables the use of newlines to separate the nodes into logical groups.
   */
  partitionByNewLine?: boolean
}, ...({
  /**
   * Fallback sort order.
   */
  fallbackSort?: {
    /**
     * Specifies the sorting method.
     */
    type: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order")
    /**
     * Specifies whether to sort items in ascending or descending order.
     */
    order?: ("asc" | "desc")
  }
  /**
   * Specifies the sorting method.
   */
  type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order")
  /**
   * Specifies whether to trim, remove, or keep special characters before sorting.
   */
  specialCharacters?: ("remove" | "trim" | "keep")
  /**
   * Controls whether sorting should be case-sensitive or not.
   */
  ignoreCase?: boolean
  /**
   * Used only when the `type` option is set to `'custom'`. Specifies the custom alphabet for sorting.
   */
  alphabet?: string
  /**
   * Specifies the sorting locales.
   */
  locales?: (string | string[])
  /**
   * Specifies whether to sort items in ascending or descending order.
   */
  order?: ("asc" | "desc")
  /**
   * Defines custom groups to match specific members.
   */
  customGroups?: ({
    /**
     * Fallback sort order.
     */
    fallbackSort?: {
      /**
       * Specifies the sorting method.
       */
      type: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order")
      /**
       * Specifies whether to sort items in ascending or descending order.
       */
      order?: ("asc" | "desc")
    }
    /**
     * Specifies the sorting method.
     */
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order")
    /**
     * Custom group name.
     */
    groupName: string
    newlinesInside?: ("ignore" | number)
    /**
     * Specifies whether to sort items in ascending or descending order.
     */
    order?: ("asc" | "desc")
    /**
     * @minItems 1
     */
    anyOf: [{
      /**
       * Regular expression.
       */
      elementNamePattern?: (({
        /**
         * Regular expression pattern.
         */
        pattern: string
        /**
         * Regular expression flags.
         */
        flags?: string
      } | string)[] | ({
        /**
         * Regular expression pattern.
         */
        pattern: string
        /**
         * Regular expression flags.
         */
        flags?: string
      } | string))
      /**
       * Selector filter.
       */
      selector?: "literal"
    }, ...({
      /**
       * Regular expression.
       */
      elementNamePattern?: (({
        /**
         * Regular expression pattern.
         */
        pattern: string
        /**
         * Regular expression flags.
         */
        flags?: string
      } | string)[] | ({
        /**
         * Regular expression pattern.
         */
        pattern: string
        /**
         * Regular expression flags.
         */
        flags?: string
      } | string))
      /**
       * Selector filter.
       */
      selector?: "literal"
    })[]]
  } | {
    /**
     * Fallback sort order.
     */
    fallbackSort?: {
      /**
       * Specifies the sorting method.
       */
      type: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order")
      /**
       * Specifies whether to sort items in ascending or descending order.
       */
      order?: ("asc" | "desc")
    }
    /**
     * Specifies the sorting method.
     */
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order")
    /**
     * Custom group name.
     */
    groupName: string
    newlinesInside?: ("ignore" | number)
    /**
     * Specifies whether to sort items in ascending or descending order.
     */
    order?: ("asc" | "desc")
    /**
     * Regular expression.
     */
    elementNamePattern?: (({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)[] | ({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string))
    /**
     * Selector filter.
     */
    selector?: "literal"
  })[]
  newlinesInside?: (("ignore" | number) | "newlinesBetween")
  /**
   * Specifies a list of groups for sorting.
   */
  groups?: (string | [string, ...(string)[]] | {
    newlinesBetween: ("ignore" | number)
  } | {
    group: (string | [string, ...(string)[]])
    /**
     * Fallback sort order.
     */
    fallbackSort?: {
      /**
       * Specifies the sorting method.
       */
      type: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order")
      /**
       * Specifies whether to sort items in ascending or descending order.
       */
      order?: ("asc" | "desc")
    }
    /**
     * Specifies a comment to enforce above the group.
     */
    commentAbove?: string
    /**
     * Specifies the sorting method.
     */
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order")
    newlinesInside?: ("ignore" | number)
    /**
     * Specifies whether to sort items in ascending or descending order.
     */
    order?: ("asc" | "desc")
  })[]
  newlinesBetween?: ("ignore" | number)
  /**
   * Specifies filters to match a particular options configuration for a given element to sort.
   */
  useConfigurationIf: {
    /**
     * Regular expression.
     */
    allNamesMatchPattern?: (({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)[] | ({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string))
    /**
     * Specifies an AST selector to match elements for conditional configuration.
     */
    matchesAstSelector?: string
  }
  /**
   * Enables the use of comments to separate the nodes into logical groups.
   */
  partitionByComment?: (boolean | (({
    /**
     * Regular expression pattern.
     */
    pattern: string
    /**
     * Regular expression flags.
     */
    flags?: string
  } | string)[] | ({
    /**
     * Regular expression pattern.
     */
    pattern: string
    /**
     * Regular expression flags.
     */
    flags?: string
  } | string)) | {
    /**
     * Enables specific block comments to separate the nodes.
     */
    block?: (boolean | (({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)[] | ({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)))
    /**
     * Enables specific line comments to separate the nodes.
     */
    line?: (boolean | (({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)[] | ({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)))
  })
  /**
   * Enables the use of newlines to separate the nodes into logical groups.
   */
  partitionByNewLine?: boolean
})[]]

}
declare namespace R2 {
type Options = {
  /**
   * Fallback sort order.
   */
  fallbackSort?: {
    /**
     * Specifies the sorting method.
     */
    type: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order")
    /**
     * Specifies whether to sort items in ascending or descending order.
     */
    order?: ("asc" | "desc")
  }
  /**
   * Specifies the sorting method.
   */
  type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order")
  /**
   * Specifies whether to trim, remove, or keep special characters before sorting.
   */
  specialCharacters?: ("remove" | "trim" | "keep")
  /**
   * Controls whether sorting should be case-sensitive or not.
   */
  ignoreCase?: boolean
  /**
   * Used only when the `type` option is set to `'custom'`. Specifies the custom alphabet for sorting.
   */
  alphabet?: string
  /**
   * Specifies the sorting locales.
   */
  locales?: (string | string[])
  /**
   * Specifies whether to sort items in ascending or descending order.
   */
  order?: ("asc" | "desc")
  /**
   * Defines custom groups to match specific members.
   */
  customGroups?: ({
    /**
     * Fallback sort order.
     */
    fallbackSort?: {
      /**
       * Specifies the sorting method.
       */
      type: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order")
      /**
       * Specifies whether to sort items in ascending or descending order.
       */
      order?: ("asc" | "desc")
    }
    /**
     * Specifies the sorting method.
     */
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order")
    /**
     * Custom group name.
     */
    groupName: string
    newlinesInside?: ("ignore" | number)
    /**
     * Specifies whether to sort items in ascending or descending order.
     */
    order?: ("asc" | "desc")
    /**
     * @minItems 1
     */
    anyOf: [{
      /**
       * Regular expression.
       */
      elementNamePattern?: (({
        /**
         * Regular expression pattern.
         */
        pattern: string
        /**
         * Regular expression flags.
         */
        flags?: string
      } | string)[] | ({
        /**
         * Regular expression pattern.
         */
        pattern: string
        /**
         * Regular expression flags.
         */
        flags?: string
      } | string))
      /**
       * Modifier filters.
       */
      modifiers?: ("async" | "protected" | "private" | "public" | "static" | "abstract" | "override" | "readonly" | "decorated" | "declare" | "optional")[]
      /**
       * Selector filter.
       */
      selector?: ("accessor-property" | "index-signature" | "constructor" | "static-block" | "get-method" | "set-method" | "function-property" | "property" | "method")
      /**
       * Regular expression.
       */
      decoratorNamePattern?: (({
        /**
         * Regular expression pattern.
         */
        pattern: string
        /**
         * Regular expression flags.
         */
        flags?: string
      } | string)[] | ({
        /**
         * Regular expression pattern.
         */
        pattern: string
        /**
         * Regular expression flags.
         */
        flags?: string
      } | string))
      /**
       * Regular expression.
       */
      elementValuePattern?: (({
        /**
         * Regular expression pattern.
         */
        pattern: string
        /**
         * Regular expression flags.
         */
        flags?: string
      } | string)[] | ({
        /**
         * Regular expression pattern.
         */
        pattern: string
        /**
         * Regular expression flags.
         */
        flags?: string
      } | string))
    }, ...({
      /**
       * Regular expression.
       */
      elementNamePattern?: (({
        /**
         * Regular expression pattern.
         */
        pattern: string
        /**
         * Regular expression flags.
         */
        flags?: string
      } | string)[] | ({
        /**
         * Regular expression pattern.
         */
        pattern: string
        /**
         * Regular expression flags.
         */
        flags?: string
      } | string))
      /**
       * Modifier filters.
       */
      modifiers?: ("async" | "protected" | "private" | "public" | "static" | "abstract" | "override" | "readonly" | "decorated" | "declare" | "optional")[]
      /**
       * Selector filter.
       */
      selector?: ("accessor-property" | "index-signature" | "constructor" | "static-block" | "get-method" | "set-method" | "function-property" | "property" | "method")
      /**
       * Regular expression.
       */
      decoratorNamePattern?: (({
        /**
         * Regular expression pattern.
         */
        pattern: string
        /**
         * Regular expression flags.
         */
        flags?: string
      } | string)[] | ({
        /**
         * Regular expression pattern.
         */
        pattern: string
        /**
         * Regular expression flags.
         */
        flags?: string
      } | string))
      /**
       * Regular expression.
       */
      elementValuePattern?: (({
        /**
         * Regular expression pattern.
         */
        pattern: string
        /**
         * Regular expression flags.
         */
        flags?: string
      } | string)[] | ({
        /**
         * Regular expression pattern.
         */
        pattern: string
        /**
         * Regular expression flags.
         */
        flags?: string
      } | string))
    })[]]
  } | {
    /**
     * Fallback sort order.
     */
    fallbackSort?: {
      /**
       * Specifies the sorting method.
       */
      type: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order")
      /**
       * Specifies whether to sort items in ascending or descending order.
       */
      order?: ("asc" | "desc")
    }
    /**
     * Specifies the sorting method.
     */
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order")
    /**
     * Custom group name.
     */
    groupName: string
    newlinesInside?: ("ignore" | number)
    /**
     * Specifies whether to sort items in ascending or descending order.
     */
    order?: ("asc" | "desc")
    /**
     * Regular expression.
     */
    elementNamePattern?: (({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)[] | ({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string))
    /**
     * Modifier filters.
     */
    modifiers?: ("async" | "protected" | "private" | "public" | "static" | "abstract" | "override" | "readonly" | "decorated" | "declare" | "optional")[]
    /**
     * Selector filter.
     */
    selector?: ("accessor-property" | "index-signature" | "constructor" | "static-block" | "get-method" | "set-method" | "function-property" | "property" | "method")
    /**
     * Regular expression.
     */
    decoratorNamePattern?: (({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)[] | ({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string))
    /**
     * Regular expression.
     */
    elementValuePattern?: (({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)[] | ({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string))
  })[]
  newlinesInside?: (("ignore" | number) | "newlinesBetween")
  /**
   * Specifies a list of groups for sorting.
   */
  groups?: (string | [string, ...(string)[]] | {
    newlinesBetween: ("ignore" | number)
  } | {
    group: (string | [string, ...(string)[]])
    /**
     * Fallback sort order.
     */
    fallbackSort?: {
      /**
       * Specifies the sorting method.
       */
      type: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order")
      /**
       * Specifies whether to sort items in ascending or descending order.
       */
      order?: ("asc" | "desc")
    }
    /**
     * Specifies a comment to enforce above the group.
     */
    commentAbove?: string
    /**
     * Specifies the sorting method.
     */
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order")
    newlinesInside?: ("ignore" | number)
    /**
     * Specifies whether to sort items in ascending or descending order.
     */
    order?: ("asc" | "desc")
  })[]
  newlinesBetween?: ("ignore" | number)
  /**
   * Specifies filters to match a particular options configuration for a given element to sort.
   */
  useConfigurationIf?: {
    /**
     * Regular expression.
     */
    allNamesMatchPattern?: (({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)[] | ({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string))
    /**
     * Specifies an AST selector to match elements for conditional configuration.
     */
    matchesAstSelector?: string
  }
  /**
   * Enables experimental dependency detection for sorting rules that support it.
   */
  useExperimentalDependencyDetection?: boolean
  newlinesBetweenOverloadSignatures?: ("ignore" | number)
  /**
   * Regular expression.
   */
  ignoreCallbackDependenciesPatterns?: (({
    /**
     * Regular expression pattern.
     */
    pattern: string
    /**
     * Regular expression flags.
     */
    flags?: string
  } | string)[] | ({
    /**
     * Regular expression pattern.
     */
    pattern: string
    /**
     * Regular expression flags.
     */
    flags?: string
  } | string))
  /**
   * Enables the use of comments to separate the nodes into logical groups.
   */
  partitionByComment?: (boolean | (({
    /**
     * Regular expression pattern.
     */
    pattern: string
    /**
     * Regular expression flags.
     */
    flags?: string
  } | string)[] | ({
    /**
     * Regular expression pattern.
     */
    pattern: string
    /**
     * Regular expression flags.
     */
    flags?: string
  } | string)) | {
    /**
     * Enables specific block comments to separate the nodes.
     */
    block?: (boolean | (({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)[] | ({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)))
    /**
     * Enables specific line comments to separate the nodes.
     */
    line?: (boolean | (({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)[] | ({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)))
  })
  /**
   * Enables the use of newlines to separate the nodes into logical groups.
   */
  partitionByNewLine?: boolean
}[]

}
declare namespace R3 {
/**
 * @minItems 1
 */
type Options = [{
  /**
   * Fallback sort order.
   */
  fallbackSort?: {
    /**
     * Specifies the sorting method.
     */
    type: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order")
    /**
     * Specifies whether to sort items in ascending or descending order.
     */
    order?: ("asc" | "desc")
  }
  /**
   * Specifies the sorting method.
   */
  type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order")
  /**
   * Specifies whether to trim, remove, or keep special characters before sorting.
   */
  specialCharacters?: ("remove" | "trim" | "keep")
  /**
   * Controls whether sorting should be case-sensitive or not.
   */
  ignoreCase?: boolean
  /**
   * Used only when the `type` option is set to `'custom'`. Specifies the custom alphabet for sorting.
   */
  alphabet?: string
  /**
   * Specifies the sorting locales.
   */
  locales?: (string | string[])
  /**
   * Specifies whether to sort items in ascending or descending order.
   */
  order?: ("asc" | "desc")
  /**
   * Defines custom groups to match specific members.
   */
  customGroups?: ({
    /**
     * Fallback sort order.
     */
    fallbackSort?: {
      /**
       * Specifies the sorting method.
       */
      type: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order")
      /**
       * Specifies whether to sort items in ascending or descending order.
       */
      order?: ("asc" | "desc")
    }
    /**
     * Specifies the sorting method.
     */
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order")
    /**
     * Custom group name.
     */
    groupName: string
    newlinesInside?: ("ignore" | number)
    /**
     * Specifies whether to sort items in ascending or descending order.
     */
    order?: ("asc" | "desc")
    /**
     * @minItems 1
     */
    anyOf: [{
      /**
       * Regular expression.
       */
      elementNamePattern?: (({
        /**
         * Regular expression pattern.
         */
        pattern: string
        /**
         * Regular expression flags.
         */
        flags?: string
      } | string)[] | ({
        /**
         * Regular expression pattern.
         */
        pattern: string
        /**
         * Regular expression flags.
         */
        flags?: string
      } | string))
      /**
       * Modifier filters.
       */
      modifiers?: ("decorated" | "override" | "readonly" | "protected" | "private" | "public")[]
      /**
       * Selector filter.
       */
      selector?: "parameter"
      /**
       * Regular expression.
       */
      decoratorNamePattern?: (({
        /**
         * Regular expression pattern.
         */
        pattern: string
        /**
         * Regular expression flags.
         */
        flags?: string
      } | string)[] | ({
        /**
         * Regular expression pattern.
         */
        pattern: string
        /**
         * Regular expression flags.
         */
        flags?: string
      } | string))
    }, ...({
      /**
       * Regular expression.
       */
      elementNamePattern?: (({
        /**
         * Regular expression pattern.
         */
        pattern: string
        /**
         * Regular expression flags.
         */
        flags?: string
      } | string)[] | ({
        /**
         * Regular expression pattern.
         */
        pattern: string
        /**
         * Regular expression flags.
         */
        flags?: string
      } | string))
      /**
       * Modifier filters.
       */
      modifiers?: ("decorated" | "override" | "readonly" | "protected" | "private" | "public")[]
      /**
       * Selector filter.
       */
      selector?: "parameter"
      /**
       * Regular expression.
       */
      decoratorNamePattern?: (({
        /**
         * Regular expression pattern.
         */
        pattern: string
        /**
         * Regular expression flags.
         */
        flags?: string
      } | string)[] | ({
        /**
         * Regular expression pattern.
         */
        pattern: string
        /**
         * Regular expression flags.
         */
        flags?: string
      } | string))
    })[]]
  } | {
    /**
     * Fallback sort order.
     */
    fallbackSort?: {
      /**
       * Specifies the sorting method.
       */
      type: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order")
      /**
       * Specifies whether to sort items in ascending or descending order.
       */
      order?: ("asc" | "desc")
    }
    /**
     * Specifies the sorting method.
     */
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order")
    /**
     * Custom group name.
     */
    groupName: string
    newlinesInside?: ("ignore" | number)
    /**
     * Specifies whether to sort items in ascending or descending order.
     */
    order?: ("asc" | "desc")
    /**
     * Regular expression.
     */
    elementNamePattern?: (({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)[] | ({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string))
    /**
     * Modifier filters.
     */
    modifiers?: ("decorated" | "override" | "readonly" | "protected" | "private" | "public")[]
    /**
     * Selector filter.
     */
    selector?: "parameter"
    /**
     * Regular expression.
     */
    decoratorNamePattern?: (({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)[] | ({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string))
  })[]
  newlinesInside?: (("ignore" | number) | "newlinesBetween")
  /**
   * Specifies a list of groups for sorting.
   */
  groups?: (string | [string, ...(string)[]] | {
    newlinesBetween: ("ignore" | number)
  } | {
    group: (string | [string, ...(string)[]])
    /**
     * Fallback sort order.
     */
    fallbackSort?: {
      /**
       * Specifies the sorting method.
       */
      type: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order")
      /**
       * Specifies whether to sort items in ascending or descending order.
       */
      order?: ("asc" | "desc")
    }
    /**
     * Specifies a comment to enforce above the group.
     */
    commentAbove?: string
    /**
     * Specifies the sorting method.
     */
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order")
    newlinesInside?: ("ignore" | number)
    /**
     * Specifies whether to sort items in ascending or descending order.
     */
    order?: ("asc" | "desc")
  })[]
  newlinesBetween?: ("ignore" | number)
  /**
   * Specifies filters to match a particular options configuration for a given element to sort.
   */
  useConfigurationIf: {
    /**
     * Regular expression.
     */
    allNamesMatchPattern?: (({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)[] | ({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string))
    /**
     * Specifies an AST selector to match elements for conditional configuration.
     */
    matchesAstSelector?: string
  }
  /**
   * Enables the use of comments to separate the nodes into logical groups.
   */
  partitionByComment?: (boolean | (({
    /**
     * Regular expression pattern.
     */
    pattern: string
    /**
     * Regular expression flags.
     */
    flags?: string
  } | string)[] | ({
    /**
     * Regular expression pattern.
     */
    pattern: string
    /**
     * Regular expression flags.
     */
    flags?: string
  } | string)) | {
    /**
     * Enables specific block comments to separate the nodes.
     */
    block?: (boolean | (({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)[] | ({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)))
    /**
     * Enables specific line comments to separate the nodes.
     */
    line?: (boolean | (({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)[] | ({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)))
  })
  /**
   * Enables the use of newlines to separate the nodes into logical groups.
   */
  partitionByNewLine?: boolean
}, ...({
  /**
   * Fallback sort order.
   */
  fallbackSort?: {
    /**
     * Specifies the sorting method.
     */
    type: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order")
    /**
     * Specifies whether to sort items in ascending or descending order.
     */
    order?: ("asc" | "desc")
  }
  /**
   * Specifies the sorting method.
   */
  type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order")
  /**
   * Specifies whether to trim, remove, or keep special characters before sorting.
   */
  specialCharacters?: ("remove" | "trim" | "keep")
  /**
   * Controls whether sorting should be case-sensitive or not.
   */
  ignoreCase?: boolean
  /**
   * Used only when the `type` option is set to `'custom'`. Specifies the custom alphabet for sorting.
   */
  alphabet?: string
  /**
   * Specifies the sorting locales.
   */
  locales?: (string | string[])
  /**
   * Specifies whether to sort items in ascending or descending order.
   */
  order?: ("asc" | "desc")
  /**
   * Defines custom groups to match specific members.
   */
  customGroups?: ({
    /**
     * Fallback sort order.
     */
    fallbackSort?: {
      /**
       * Specifies the sorting method.
       */
      type: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order")
      /**
       * Specifies whether to sort items in ascending or descending order.
       */
      order?: ("asc" | "desc")
    }
    /**
     * Specifies the sorting method.
     */
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order")
    /**
     * Custom group name.
     */
    groupName: string
    newlinesInside?: ("ignore" | number)
    /**
     * Specifies whether to sort items in ascending or descending order.
     */
    order?: ("asc" | "desc")
    /**
     * @minItems 1
     */
    anyOf: [{
      /**
       * Regular expression.
       */
      elementNamePattern?: (({
        /**
         * Regular expression pattern.
         */
        pattern: string
        /**
         * Regular expression flags.
         */
        flags?: string
      } | string)[] | ({
        /**
         * Regular expression pattern.
         */
        pattern: string
        /**
         * Regular expression flags.
         */
        flags?: string
      } | string))
      /**
       * Modifier filters.
       */
      modifiers?: ("decorated" | "override" | "readonly" | "protected" | "private" | "public")[]
      /**
       * Selector filter.
       */
      selector?: "parameter"
      /**
       * Regular expression.
       */
      decoratorNamePattern?: (({
        /**
         * Regular expression pattern.
         */
        pattern: string
        /**
         * Regular expression flags.
         */
        flags?: string
      } | string)[] | ({
        /**
         * Regular expression pattern.
         */
        pattern: string
        /**
         * Regular expression flags.
         */
        flags?: string
      } | string))
    }, ...({
      /**
       * Regular expression.
       */
      elementNamePattern?: (({
        /**
         * Regular expression pattern.
         */
        pattern: string
        /**
         * Regular expression flags.
         */
        flags?: string
      } | string)[] | ({
        /**
         * Regular expression pattern.
         */
        pattern: string
        /**
         * Regular expression flags.
         */
        flags?: string
      } | string))
      /**
       * Modifier filters.
       */
      modifiers?: ("decorated" | "override" | "readonly" | "protected" | "private" | "public")[]
      /**
       * Selector filter.
       */
      selector?: "parameter"
      /**
       * Regular expression.
       */
      decoratorNamePattern?: (({
        /**
         * Regular expression pattern.
         */
        pattern: string
        /**
         * Regular expression flags.
         */
        flags?: string
      } | string)[] | ({
        /**
         * Regular expression pattern.
         */
        pattern: string
        /**
         * Regular expression flags.
         */
        flags?: string
      } | string))
    })[]]
  } | {
    /**
     * Fallback sort order.
     */
    fallbackSort?: {
      /**
       * Specifies the sorting method.
       */
      type: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order")
      /**
       * Specifies whether to sort items in ascending or descending order.
       */
      order?: ("asc" | "desc")
    }
    /**
     * Specifies the sorting method.
     */
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order")
    /**
     * Custom group name.
     */
    groupName: string
    newlinesInside?: ("ignore" | number)
    /**
     * Specifies whether to sort items in ascending or descending order.
     */
    order?: ("asc" | "desc")
    /**
     * Regular expression.
     */
    elementNamePattern?: (({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)[] | ({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string))
    /**
     * Modifier filters.
     */
    modifiers?: ("decorated" | "override" | "readonly" | "protected" | "private" | "public")[]
    /**
     * Selector filter.
     */
    selector?: "parameter"
    /**
     * Regular expression.
     */
    decoratorNamePattern?: (({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)[] | ({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string))
  })[]
  newlinesInside?: (("ignore" | number) | "newlinesBetween")
  /**
   * Specifies a list of groups for sorting.
   */
  groups?: (string | [string, ...(string)[]] | {
    newlinesBetween: ("ignore" | number)
  } | {
    group: (string | [string, ...(string)[]])
    /**
     * Fallback sort order.
     */
    fallbackSort?: {
      /**
       * Specifies the sorting method.
       */
      type: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order")
      /**
       * Specifies whether to sort items in ascending or descending order.
       */
      order?: ("asc" | "desc")
    }
    /**
     * Specifies a comment to enforce above the group.
     */
    commentAbove?: string
    /**
     * Specifies the sorting method.
     */
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order")
    newlinesInside?: ("ignore" | number)
    /**
     * Specifies whether to sort items in ascending or descending order.
     */
    order?: ("asc" | "desc")
  })[]
  newlinesBetween?: ("ignore" | number)
  /**
   * Specifies filters to match a particular options configuration for a given element to sort.
   */
  useConfigurationIf: {
    /**
     * Regular expression.
     */
    allNamesMatchPattern?: (({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)[] | ({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string))
    /**
     * Specifies an AST selector to match elements for conditional configuration.
     */
    matchesAstSelector?: string
  }
  /**
   * Enables the use of comments to separate the nodes into logical groups.
   */
  partitionByComment?: (boolean | (({
    /**
     * Regular expression pattern.
     */
    pattern: string
    /**
     * Regular expression flags.
     */
    flags?: string
  } | string)[] | ({
    /**
     * Regular expression pattern.
     */
    pattern: string
    /**
     * Regular expression flags.
     */
    flags?: string
  } | string)) | {
    /**
     * Enables specific block comments to separate the nodes.
     */
    block?: (boolean | (({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)[] | ({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)))
    /**
     * Enables specific line comments to separate the nodes.
     */
    line?: (boolean | (({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)[] | ({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)))
  })
  /**
   * Enables the use of newlines to separate the nodes into logical groups.
   */
  partitionByNewLine?: boolean
})[]]

}
declare namespace R4 {
type Options = {
  /**
   * Fallback sort order.
   */
  fallbackSort?: {
    /**
     * Specifies the sorting method.
     */
    type: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order")
    /**
     * Specifies whether to sort items in ascending or descending order.
     */
    order?: ("asc" | "desc")
  }
  /**
   * Specifies the sorting method.
   */
  type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order")
  /**
   * Specifies whether to trim, remove, or keep special characters before sorting.
   */
  specialCharacters?: ("remove" | "trim" | "keep")
  /**
   * Controls whether sorting should be case-sensitive or not.
   */
  ignoreCase?: boolean
  /**
   * Used only when the `type` option is set to `'custom'`. Specifies the custom alphabet for sorting.
   */
  alphabet?: string
  /**
   * Specifies the sorting locales.
   */
  locales?: (string | string[])
  /**
   * Specifies whether to sort items in ascending or descending order.
   */
  order?: ("asc" | "desc")
  /**
   * Defines custom groups to match specific members.
   */
  customGroups?: ({
    /**
     * Fallback sort order.
     */
    fallbackSort?: {
      /**
       * Specifies the sorting method.
       */
      type: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order")
      /**
       * Specifies whether to sort items in ascending or descending order.
       */
      order?: ("asc" | "desc")
    }
    /**
     * Specifies the sorting method.
     */
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order")
    /**
     * Custom group name.
     */
    groupName: string
    newlinesInside?: ("ignore" | number)
    /**
     * Specifies whether to sort items in ascending or descending order.
     */
    order?: ("asc" | "desc")
    /**
     * @minItems 1
     */
    anyOf: [{
      /**
       * Regular expression.
       */
      elementNamePattern?: (({
        /**
         * Regular expression pattern.
         */
        pattern: string
        /**
         * Regular expression flags.
         */
        flags?: string
      } | string)[] | ({
        /**
         * Regular expression pattern.
         */
        pattern: string
        /**
         * Regular expression flags.
         */
        flags?: string
      } | string))
    }, ...({
      /**
       * Regular expression.
       */
      elementNamePattern?: (({
        /**
         * Regular expression pattern.
         */
        pattern: string
        /**
         * Regular expression flags.
         */
        flags?: string
      } | string)[] | ({
        /**
         * Regular expression pattern.
         */
        pattern: string
        /**
         * Regular expression flags.
         */
        flags?: string
      } | string))
    })[]]
  } | {
    /**
     * Fallback sort order.
     */
    fallbackSort?: {
      /**
       * Specifies the sorting method.
       */
      type: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order")
      /**
       * Specifies whether to sort items in ascending or descending order.
       */
      order?: ("asc" | "desc")
    }
    /**
     * Specifies the sorting method.
     */
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order")
    /**
     * Custom group name.
     */
    groupName: string
    newlinesInside?: ("ignore" | number)
    /**
     * Specifies whether to sort items in ascending or descending order.
     */
    order?: ("asc" | "desc")
    /**
     * Regular expression.
     */
    elementNamePattern?: (({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)[] | ({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string))
  })[]
  newlinesInside?: (("ignore" | number) | "newlinesBetween")
  /**
   * Specifies a list of groups for sorting.
   */
  groups?: (string | [string, ...(string)[]] | {
    newlinesBetween: ("ignore" | number)
  } | {
    group: (string | [string, ...(string)[]])
    /**
     * Fallback sort order.
     */
    fallbackSort?: {
      /**
       * Specifies the sorting method.
       */
      type: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order")
      /**
       * Specifies whether to sort items in ascending or descending order.
       */
      order?: ("asc" | "desc")
    }
    /**
     * Specifies a comment to enforce above the group.
     */
    commentAbove?: string
    /**
     * Specifies the sorting method.
     */
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order")
    newlinesInside?: ("ignore" | number)
    /**
     * Specifies whether to sort items in ascending or descending order.
     */
    order?: ("asc" | "desc")
  })[]
  newlinesBetween?: ("ignore" | number)
  /**
   * Controls whether sorting should be enabled for method parameter decorators.
   */
  sortOnParameters?: boolean
  /**
   * Controls whether sorting should be enabled for class property decorators.
   */
  sortOnProperties?: boolean
  /**
   * Controls whether sorting should be enabled for class accessor decorators.
   */
  sortOnAccessors?: boolean
  /**
   * Controls whether sorting should be enabled for class method decorators.
   */
  sortOnMethods?: boolean
  /**
   * Controls whether sorting should be enabled for class decorators.
   */
  sortOnClasses?: boolean
  /**
   * Enables the use of comments to separate the nodes into logical groups.
   */
  partitionByComment?: (boolean | (({
    /**
     * Regular expression pattern.
     */
    pattern: string
    /**
     * Regular expression flags.
     */
    flags?: string
  } | string)[] | ({
    /**
     * Regular expression pattern.
     */
    pattern: string
    /**
     * Regular expression flags.
     */
    flags?: string
  } | string)) | {
    /**
     * Enables specific block comments to separate the nodes.
     */
    block?: (boolean | (({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)[] | ({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)))
    /**
     * Enables specific line comments to separate the nodes.
     */
    line?: (boolean | (({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)[] | ({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)))
  })
  /**
   * Enables the use of newlines to separate the nodes into logical groups.
   */
  partitionByNewLine?: boolean
}[]

}
declare namespace R5 {
type Options = {
  /**
   * Fallback sort order.
   */
  fallbackSort?: {
    /**
     * Specifies the sorting method.
     */
    type: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order")
    /**
     * Specifies whether to sort items in ascending or descending order.
     */
    order?: ("asc" | "desc")
  }
  /**
   * Specifies the sorting method.
   */
  type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order")
  /**
   * Specifies whether to trim, remove, or keep special characters before sorting.
   */
  specialCharacters?: ("remove" | "trim" | "keep")
  /**
   * Controls whether sorting should be case-sensitive or not.
   */
  ignoreCase?: boolean
  /**
   * Used only when the `type` option is set to `'custom'`. Specifies the custom alphabet for sorting.
   */
  alphabet?: string
  /**
   * Specifies the sorting locales.
   */
  locales?: (string | string[])
  /**
   * Specifies whether to sort items in ascending or descending order.
   */
  order?: ("asc" | "desc")
  /**
   * Defines custom groups to match specific members.
   */
  customGroups?: ({
    /**
     * Fallback sort order.
     */
    fallbackSort?: {
      /**
       * Specifies the sorting method.
       */
      type: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order")
      /**
       * Specifies whether to sort items in ascending or descending order.
       */
      order?: ("asc" | "desc")
    }
    /**
     * Specifies the sorting method.
     */
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order")
    /**
     * Custom group name.
     */
    groupName: string
    newlinesInside?: ("ignore" | number)
    /**
     * Specifies whether to sort items in ascending or descending order.
     */
    order?: ("asc" | "desc")
    /**
     * @minItems 1
     */
    anyOf: [{
      /**
       * Regular expression.
       */
      elementNamePattern?: (({
        /**
         * Regular expression pattern.
         */
        pattern: string
        /**
         * Regular expression flags.
         */
        flags?: string
      } | string)[] | ({
        /**
         * Regular expression pattern.
         */
        pattern: string
        /**
         * Regular expression flags.
         */
        flags?: string
      } | string))
      /**
       * Regular expression.
       */
      elementValuePattern?: (({
        /**
         * Regular expression pattern.
         */
        pattern: string
        /**
         * Regular expression flags.
         */
        flags?: string
      } | string)[] | ({
        /**
         * Regular expression pattern.
         */
        pattern: string
        /**
         * Regular expression flags.
         */
        flags?: string
      } | string))
    }, ...({
      /**
       * Regular expression.
       */
      elementNamePattern?: (({
        /**
         * Regular expression pattern.
         */
        pattern: string
        /**
         * Regular expression flags.
         */
        flags?: string
      } | string)[] | ({
        /**
         * Regular expression pattern.
         */
        pattern: string
        /**
         * Regular expression flags.
         */
        flags?: string
      } | string))
      /**
       * Regular expression.
       */
      elementValuePattern?: (({
        /**
         * Regular expression pattern.
         */
        pattern: string
        /**
         * Regular expression flags.
         */
        flags?: string
      } | string)[] | ({
        /**
         * Regular expression pattern.
         */
        pattern: string
        /**
         * Regular expression flags.
         */
        flags?: string
      } | string))
    })[]]
  } | {
    /**
     * Fallback sort order.
     */
    fallbackSort?: {
      /**
       * Specifies the sorting method.
       */
      type: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order")
      /**
       * Specifies whether to sort items in ascending or descending order.
       */
      order?: ("asc" | "desc")
    }
    /**
     * Specifies the sorting method.
     */
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order")
    /**
     * Custom group name.
     */
    groupName: string
    newlinesInside?: ("ignore" | number)
    /**
     * Specifies whether to sort items in ascending or descending order.
     */
    order?: ("asc" | "desc")
    /**
     * Regular expression.
     */
    elementNamePattern?: (({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)[] | ({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string))
    /**
     * Regular expression.
     */
    elementValuePattern?: (({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)[] | ({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string))
  })[]
  newlinesInside?: (("ignore" | number) | "newlinesBetween")
  /**
   * Specifies a list of groups for sorting.
   */
  groups?: (string | [string, ...(string)[]] | {
    newlinesBetween: ("ignore" | number)
  } | {
    group: (string | [string, ...(string)[]])
    /**
     * Fallback sort order.
     */
    fallbackSort?: {
      /**
       * Specifies the sorting method.
       */
      type: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order")
      /**
       * Specifies whether to sort items in ascending or descending order.
       */
      order?: ("asc" | "desc")
    }
    /**
     * Specifies a comment to enforce above the group.
     */
    commentAbove?: string
    /**
     * Specifies the sorting method.
     */
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order")
    newlinesInside?: ("ignore" | number)
    /**
     * Specifies whether to sort items in ascending or descending order.
     */
    order?: ("asc" | "desc")
  })[]
  newlinesBetween?: ("ignore" | number)
  /**
   * Specifies whether to sort enums by value.
   */
  sortByValue?: ("always" | "ifNumericEnum" | "never")
  /**
   * Specifies filters to match a particular options configuration for a given element to sort.
   */
  useConfigurationIf?: {
    /**
     * Regular expression.
     */
    allNamesMatchPattern?: (({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)[] | ({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string))
    /**
     * Specifies an AST selector to match elements for conditional configuration.
     */
    matchesAstSelector?: string
  }
  /**
   * Enables experimental dependency detection for sorting rules that support it.
   */
  useExperimentalDependencyDetection?: boolean
  /**
   * Enables the use of comments to separate the nodes into logical groups.
   */
  partitionByComment?: (boolean | (({
    /**
     * Regular expression pattern.
     */
    pattern: string
    /**
     * Regular expression flags.
     */
    flags?: string
  } | string)[] | ({
    /**
     * Regular expression pattern.
     */
    pattern: string
    /**
     * Regular expression flags.
     */
    flags?: string
  } | string)) | {
    /**
     * Enables specific block comments to separate the nodes.
     */
    block?: (boolean | (({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)[] | ({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)))
    /**
     * Enables specific line comments to separate the nodes.
     */
    line?: (boolean | (({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)[] | ({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)))
  })
  /**
   * Enables the use of newlines to separate the nodes into logical groups.
   */
  partitionByNewLine?: boolean
}[]

}
declare namespace R6 {
type Options = {
  /**
   * Fallback sort order.
   */
  fallbackSort?: {
    /**
     * Specifies the sorting method.
     */
    type: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order")
    /**
     * Specifies whether to sort items in ascending or descending order.
     */
    order?: ("asc" | "desc")
  }
  /**
   * Specifies the sorting method.
   */
  type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order")
  /**
   * Specifies whether to trim, remove, or keep special characters before sorting.
   */
  specialCharacters?: ("remove" | "trim" | "keep")
  /**
   * Controls whether sorting should be case-sensitive or not.
   */
  ignoreCase?: boolean
  /**
   * Used only when the `type` option is set to `'custom'`. Specifies the custom alphabet for sorting.
   */
  alphabet?: string
  /**
   * Specifies the sorting locales.
   */
  locales?: (string | string[])
  /**
   * Specifies whether to sort items in ascending or descending order.
   */
  order?: ("asc" | "desc")
  /**
   * Defines custom groups to match specific members.
   */
  customGroups?: ({
    /**
     * Fallback sort order.
     */
    fallbackSort?: {
      /**
       * Specifies the sorting method.
       */
      type: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order")
      /**
       * Specifies whether to sort items in ascending or descending order.
       */
      order?: ("asc" | "desc")
    }
    /**
     * Specifies the sorting method.
     */
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order")
    /**
     * Custom group name.
     */
    groupName: string
    newlinesInside?: ("ignore" | number)
    /**
     * Specifies whether to sort items in ascending or descending order.
     */
    order?: ("asc" | "desc")
    /**
     * @minItems 1
     */
    anyOf: [{
      /**
       * Regular expression.
       */
      elementNamePattern?: (({
        /**
         * Regular expression pattern.
         */
        pattern: string
        /**
         * Regular expression flags.
         */
        flags?: string
      } | string)[] | ({
        /**
         * Regular expression pattern.
         */
        pattern: string
        /**
         * Regular expression flags.
         */
        flags?: string
      } | string))
    }, ...({
      /**
       * Regular expression.
       */
      elementNamePattern?: (({
        /**
         * Regular expression pattern.
         */
        pattern: string
        /**
         * Regular expression flags.
         */
        flags?: string
      } | string)[] | ({
        /**
         * Regular expression pattern.
         */
        pattern: string
        /**
         * Regular expression flags.
         */
        flags?: string
      } | string))
    })[]]
  } | {
    /**
     * Fallback sort order.
     */
    fallbackSort?: {
      /**
       * Specifies the sorting method.
       */
      type: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order")
      /**
       * Specifies whether to sort items in ascending or descending order.
       */
      order?: ("asc" | "desc")
    }
    /**
     * Specifies the sorting method.
     */
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order")
    /**
     * Custom group name.
     */
    groupName: string
    newlinesInside?: ("ignore" | number)
    /**
     * Specifies whether to sort items in ascending or descending order.
     */
    order?: ("asc" | "desc")
    /**
     * Regular expression.
     */
    elementNamePattern?: (({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)[] | ({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string))
  })[]
  newlinesInside?: (("ignore" | number) | "newlinesBetween")
  /**
   * Specifies a list of groups for sorting.
   */
  groups?: (string | [string, ...(string)[]] | {
    newlinesBetween: ("ignore" | number)
  } | {
    group: (string | [string, ...(string)[]])
    /**
     * Fallback sort order.
     */
    fallbackSort?: {
      /**
       * Specifies the sorting method.
       */
      type: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order")
      /**
       * Specifies whether to sort items in ascending or descending order.
       */
      order?: ("asc" | "desc")
    }
    /**
     * Specifies a comment to enforce above the group.
     */
    commentAbove?: string
    /**
     * Specifies the sorting method.
     */
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order")
    newlinesInside?: ("ignore" | number)
    /**
     * Specifies whether to sort items in ascending or descending order.
     */
    order?: ("asc" | "desc")
  })[]
  newlinesBetween?: ("ignore" | number)
  /**
   * Specifies filters to match a particular options configuration for a given element to sort.
   */
  useConfigurationIf?: {
    /**
     * Regular expression.
     */
    allNamesMatchPattern?: (({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)[] | ({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string))
    /**
     * Specifies an AST selector to match elements for conditional configuration.
     */
    matchesAstSelector?: string
  }
  /**
   * Enables the use of comments to separate the nodes into logical groups.
   */
  partitionByComment?: (boolean | (({
    /**
     * Regular expression pattern.
     */
    pattern: string
    /**
     * Regular expression flags.
     */
    flags?: string
  } | string)[] | ({
    /**
     * Regular expression pattern.
     */
    pattern: string
    /**
     * Regular expression flags.
     */
    flags?: string
  } | string)) | {
    /**
     * Enables specific block comments to separate the nodes.
     */
    block?: (boolean | (({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)[] | ({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)))
    /**
     * Enables specific line comments to separate the nodes.
     */
    line?: (boolean | (({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)[] | ({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)))
  })
  /**
   * Enables the use of newlines to separate the nodes into logical groups.
   */
  partitionByNewLine?: boolean
}[]

}
declare namespace R7 {
type Options = {
  /**
   * Fallback sort order.
   */
  fallbackSort?: {
    /**
     * Specifies the sorting method.
     */
    type: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order")
    /**
     * Specifies whether to sort items in ascending or descending order.
     */
    order?: ("asc" | "desc")
  }
  /**
   * Specifies the sorting method.
   */
  type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order")
  /**
   * Specifies whether to trim, remove, or keep special characters before sorting.
   */
  specialCharacters?: ("remove" | "trim" | "keep")
  /**
   * Controls whether sorting should be case-sensitive or not.
   */
  ignoreCase?: boolean
  /**
   * Used only when the `type` option is set to `'custom'`. Specifies the custom alphabet for sorting.
   */
  alphabet?: string
  /**
   * Specifies the sorting locales.
   */
  locales?: (string | string[])
  /**
   * Specifies whether to sort items in ascending or descending order.
   */
  order?: ("asc" | "desc")
  /**
   * Defines custom groups to match specific members.
   */
  customGroups?: ({
    /**
     * Fallback sort order.
     */
    fallbackSort?: {
      /**
       * Specifies the sorting method.
       */
      type: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order")
      /**
       * Specifies whether to sort items in ascending or descending order.
       */
      order?: ("asc" | "desc")
    }
    /**
     * Specifies the sorting method.
     */
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order")
    /**
     * Custom group name.
     */
    groupName: string
    newlinesInside?: ("ignore" | number)
    /**
     * Specifies whether to sort items in ascending or descending order.
     */
    order?: ("asc" | "desc")
    /**
     * @minItems 1
     */
    anyOf: [{
      /**
       * Regular expression.
       */
      elementNamePattern?: (({
        /**
         * Regular expression pattern.
         */
        pattern: string
        /**
         * Regular expression flags.
         */
        flags?: string
      } | string)[] | ({
        /**
         * Regular expression pattern.
         */
        pattern: string
        /**
         * Regular expression flags.
         */
        flags?: string
      } | string))
      /**
       * Modifier filters.
       */
      modifiers?: ("value" | "type" | "named" | "wildcard" | "multiline" | "singleline")[]
      /**
       * Selector filter.
       */
      selector?: "export"
    }, ...({
      /**
       * Regular expression.
       */
      elementNamePattern?: (({
        /**
         * Regular expression pattern.
         */
        pattern: string
        /**
         * Regular expression flags.
         */
        flags?: string
      } | string)[] | ({
        /**
         * Regular expression pattern.
         */
        pattern: string
        /**
         * Regular expression flags.
         */
        flags?: string
      } | string))
      /**
       * Modifier filters.
       */
      modifiers?: ("value" | "type" | "named" | "wildcard" | "multiline" | "singleline")[]
      /**
       * Selector filter.
       */
      selector?: "export"
    })[]]
  } | {
    /**
     * Fallback sort order.
     */
    fallbackSort?: {
      /**
       * Specifies the sorting method.
       */
      type: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order")
      /**
       * Specifies whether to sort items in ascending or descending order.
       */
      order?: ("asc" | "desc")
    }
    /**
     * Specifies the sorting method.
     */
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order")
    /**
     * Custom group name.
     */
    groupName: string
    newlinesInside?: ("ignore" | number)
    /**
     * Specifies whether to sort items in ascending or descending order.
     */
    order?: ("asc" | "desc")
    /**
     * Regular expression.
     */
    elementNamePattern?: (({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)[] | ({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string))
    /**
     * Modifier filters.
     */
    modifiers?: ("value" | "type" | "named" | "wildcard" | "multiline" | "singleline")[]
    /**
     * Selector filter.
     */
    selector?: "export"
  })[]
  newlinesInside?: (("ignore" | number) | "newlinesBetween")
  /**
   * Specifies a list of groups for sorting.
   */
  groups?: (string | [string, ...(string)[]] | {
    newlinesBetween: ("ignore" | number)
  } | {
    group: (string | [string, ...(string)[]])
    /**
     * Fallback sort order.
     */
    fallbackSort?: {
      /**
       * Specifies the sorting method.
       */
      type: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order")
      /**
       * Specifies whether to sort items in ascending or descending order.
       */
      order?: ("asc" | "desc")
    }
    /**
     * Specifies a comment to enforce above the group.
     */
    commentAbove?: string
    /**
     * Specifies the sorting method.
     */
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order")
    newlinesInside?: ("ignore" | number)
    /**
     * Specifies whether to sort items in ascending or descending order.
     */
    order?: ("asc" | "desc")
  })[]
  newlinesBetween?: ("ignore" | number)
  /**
   * Enables the use of comments to separate the nodes into logical groups.
   */
  partitionByComment?: (boolean | (({
    /**
     * Regular expression pattern.
     */
    pattern: string
    /**
     * Regular expression flags.
     */
    flags?: string
  } | string)[] | ({
    /**
     * Regular expression pattern.
     */
    pattern: string
    /**
     * Regular expression flags.
     */
    flags?: string
  } | string)) | {
    /**
     * Enables specific block comments to separate the nodes.
     */
    block?: (boolean | (({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)[] | ({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)))
    /**
     * Enables specific line comments to separate the nodes.
     */
    line?: (boolean | (({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)[] | ({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)))
  })
  /**
   * Enables the use of newlines to separate the nodes into logical groups.
   */
  partitionByNewLine?: boolean
}[]

}
declare namespace R8 {
type Options = {
  /**
   * Fallback sort order.
   */
  fallbackSort?: {
    /**
     * Specifies the sorting method.
     */
    type: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order")
    /**
     * Specifies whether to sort items in ascending or descending order.
     */
    order?: ("asc" | "desc")
  }
  /**
   * Specifies the sorting method.
   */
  type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order")
  /**
   * Specifies whether to trim, remove, or keep special characters before sorting.
   */
  specialCharacters?: ("remove" | "trim" | "keep")
  /**
   * Controls whether sorting should be case-sensitive or not.
   */
  ignoreCase?: boolean
  /**
   * Used only when the `type` option is set to `'custom'`. Specifies the custom alphabet for sorting.
   */
  alphabet?: string
  /**
   * Specifies the sorting locales.
   */
  locales?: (string | string[])
  /**
   * Specifies whether to sort items in ascending or descending order.
   */
  order?: ("asc" | "desc")
  /**
   * Defines custom groups to match specific members.
   */
  customGroups?: ({
    /**
     * Fallback sort order.
     */
    fallbackSort?: {
      /**
       * Specifies the sorting method.
       */
      type: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order")
      /**
       * Specifies whether to sort items in ascending or descending order.
       */
      order?: ("asc" | "desc")
    }
    /**
     * Specifies the sorting method.
     */
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order")
    /**
     * Custom group name.
     */
    groupName: string
    newlinesInside?: ("ignore" | number)
    /**
     * Specifies whether to sort items in ascending or descending order.
     */
    order?: ("asc" | "desc")
    /**
     * @minItems 1
     */
    anyOf: [{
      /**
       * Regular expression.
       */
      elementNamePattern?: (({
        /**
         * Regular expression pattern.
         */
        pattern: string
        /**
         * Regular expression flags.
         */
        flags?: string
      } | string)[] | ({
        /**
         * Regular expression pattern.
         */
        pattern: string
        /**
         * Regular expression flags.
         */
        flags?: string
      } | string))
    }, ...({
      /**
       * Regular expression.
       */
      elementNamePattern?: (({
        /**
         * Regular expression pattern.
         */
        pattern: string
        /**
         * Regular expression flags.
         */
        flags?: string
      } | string)[] | ({
        /**
         * Regular expression pattern.
         */
        pattern: string
        /**
         * Regular expression flags.
         */
        flags?: string
      } | string))
    })[]]
  } | {
    /**
     * Fallback sort order.
     */
    fallbackSort?: {
      /**
       * Specifies the sorting method.
       */
      type: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order")
      /**
       * Specifies whether to sort items in ascending or descending order.
       */
      order?: ("asc" | "desc")
    }
    /**
     * Specifies the sorting method.
     */
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order")
    /**
     * Custom group name.
     */
    groupName: string
    newlinesInside?: ("ignore" | number)
    /**
     * Specifies whether to sort items in ascending or descending order.
     */
    order?: ("asc" | "desc")
    /**
     * Regular expression.
     */
    elementNamePattern?: (({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)[] | ({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string))
  })[]
  newlinesInside?: (("ignore" | number) | "newlinesBetween")
  /**
   * Specifies a list of groups for sorting.
   */
  groups?: (string | [string, ...(string)[]] | {
    newlinesBetween: ("ignore" | number)
  } | {
    group: (string | [string, ...(string)[]])
    /**
     * Fallback sort order.
     */
    fallbackSort?: {
      /**
       * Specifies the sorting method.
       */
      type: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order")
      /**
       * Specifies whether to sort items in ascending or descending order.
       */
      order?: ("asc" | "desc")
    }
    /**
     * Specifies a comment to enforce above the group.
     */
    commentAbove?: string
    /**
     * Specifies the sorting method.
     */
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order")
    newlinesInside?: ("ignore" | number)
    /**
     * Specifies whether to sort items in ascending or descending order.
     */
    order?: ("asc" | "desc")
  })[]
  newlinesBetween?: ("ignore" | number)
  /**
   * Specifies filters to match a particular options configuration for a given element to sort.
   */
  useConfigurationIf?: {
    /**
     * Regular expression.
     */
    allNamesMatchPattern?: (({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)[] | ({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string))
    /**
     * Specifies an AST selector to match elements for conditional configuration.
     */
    matchesAstSelector?: string
  }
  /**
   * Enables the use of newlines to separate the nodes into logical groups.
   */
  partitionByNewLine?: boolean
  /**
   * Enables the use of comments to separate the nodes into logical groups.
   */
  partitionByComment?: (boolean | (({
    /**
     * Regular expression pattern.
     */
    pattern: string
    /**
     * Regular expression flags.
     */
    flags?: string
  } | string)[] | ({
    /**
     * Regular expression pattern.
     */
    pattern: string
    /**
     * Regular expression flags.
     */
    flags?: string
  } | string)) | {
    /**
     * Enables specific block comments to separate the nodes.
     */
    block?: (boolean | (({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)[] | ({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)))
    /**
     * Enables specific line comments to separate the nodes.
     */
    line?: (boolean | (({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)[] | ({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)))
  })
}[]

}
declare namespace R9 {
type Options = {
  /**
   * Fallback sort order.
   */
  fallbackSort?: {
    /**
     * Specifies the sorting method.
     */
    type: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order")
    /**
     * Specifies whether to sort items in ascending or descending order.
     */
    order?: ("asc" | "desc")
  }
  /**
   * Specifies the sorting method.
   */
  type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order")
  /**
   * Specifies whether to trim, remove, or keep special characters before sorting.
   */
  specialCharacters?: ("remove" | "trim" | "keep")
  /**
   * Controls whether sorting should be case-sensitive or not.
   */
  ignoreCase?: boolean
  /**
   * Used only when the `type` option is set to `'custom'`. Specifies the custom alphabet for sorting.
   */
  alphabet?: string
  /**
   * Specifies the sorting locales.
   */
  locales?: (string | string[])
  /**
   * Specifies whether to sort items in ascending or descending order.
   */
  order?: ("asc" | "desc")
  /**
   * Defines custom groups to match specific members.
   */
  customGroups?: ({
    /**
     * Fallback sort order.
     */
    fallbackSort?: {
      /**
       * Specifies the sorting method.
       */
      type: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order")
      /**
       * Specifies whether to sort items in ascending or descending order.
       */
      order?: ("asc" | "desc")
    }
    /**
     * Specifies the sorting method.
     */
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order")
    /**
     * Custom group name.
     */
    groupName: string
    newlinesInside?: ("ignore" | number)
    /**
     * Specifies whether to sort items in ascending or descending order.
     */
    order?: ("asc" | "desc")
    /**
     * @minItems 1
     */
    anyOf: [{
      /**
       * Regular expression.
       */
      elementNamePattern?: (({
        /**
         * Regular expression pattern.
         */
        pattern: string
        /**
         * Regular expression flags.
         */
        flags?: string
      } | string)[] | ({
        /**
         * Regular expression pattern.
         */
        pattern: string
        /**
         * Regular expression flags.
         */
        flags?: string
      } | string))
    }, ...({
      /**
       * Regular expression.
       */
      elementNamePattern?: (({
        /**
         * Regular expression pattern.
         */
        pattern: string
        /**
         * Regular expression flags.
         */
        flags?: string
      } | string)[] | ({
        /**
         * Regular expression pattern.
         */
        pattern: string
        /**
         * Regular expression flags.
         */
        flags?: string
      } | string))
    })[]]
  } | {
    /**
     * Fallback sort order.
     */
    fallbackSort?: {
      /**
       * Specifies the sorting method.
       */
      type: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order")
      /**
       * Specifies whether to sort items in ascending or descending order.
       */
      order?: ("asc" | "desc")
    }
    /**
     * Specifies the sorting method.
     */
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order")
    /**
     * Custom group name.
     */
    groupName: string
    newlinesInside?: ("ignore" | number)
    /**
     * Specifies whether to sort items in ascending or descending order.
     */
    order?: ("asc" | "desc")
    /**
     * Regular expression.
     */
    elementNamePattern?: (({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)[] | ({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string))
  })[]
  newlinesInside?: (("ignore" | number) | "newlinesBetween")
  /**
   * Specifies a list of groups for sorting.
   */
  groups?: (string | [string, ...(string)[]] | {
    newlinesBetween: ("ignore" | number)
  } | {
    group: (string | [string, ...(string)[]])
    /**
     * Fallback sort order.
     */
    fallbackSort?: {
      /**
       * Specifies the sorting method.
       */
      type: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order")
      /**
       * Specifies whether to sort items in ascending or descending order.
       */
      order?: ("asc" | "desc")
    }
    /**
     * Specifies a comment to enforce above the group.
     */
    commentAbove?: string
    /**
     * Specifies the sorting method.
     */
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order")
    newlinesInside?: ("ignore" | number)
    /**
     * Specifies whether to sort items in ascending or descending order.
     */
    order?: ("asc" | "desc")
  })[]
  newlinesBetween?: ("ignore" | number)
  /**
   * Specifies filters to match a particular options configuration for a given element to sort.
   */
  useConfigurationIf?: {
    /**
     * Regular expression.
     */
    allNamesMatchPattern?: (({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)[] | ({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string))
    /**
     * Specifies an AST selector to match elements for conditional configuration.
     */
    matchesAstSelector?: string
  }
  /**
   * Enables the use of comments to separate the nodes into logical groups.
   */
  partitionByComment?: (boolean | (({
    /**
     * Regular expression pattern.
     */
    pattern: string
    /**
     * Regular expression flags.
     */
    flags?: string
  } | string)[] | ({
    /**
     * Regular expression pattern.
     */
    pattern: string
    /**
     * Regular expression flags.
     */
    flags?: string
  } | string)) | {
    /**
     * Enables specific block comments to separate the nodes.
     */
    block?: (boolean | (({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)[] | ({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)))
    /**
     * Enables specific line comments to separate the nodes.
     */
    line?: (boolean | (({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)[] | ({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)))
  })
  /**
   * Enables the use of newlines to separate the nodes into logical groups.
   */
  partitionByNewLine?: boolean
}[]

}
declare namespace R10 {
type Options = {
  /**
   * Fallback sort order.
   */
  fallbackSort?: {
    /**
     * Specifies the sorting method.
     */
    type: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order" | "type-import-first")
    /**
     * Specifies whether to sort items in ascending or descending order.
     */
    order?: ("asc" | "desc")
    sortBy?: ("specifier" | "path")
  }
  /**
   * Specifies the sorting method.
   */
  type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order" | "type-import-first")
  /**
   * Specifies whether to trim, remove, or keep special characters before sorting.
   */
  specialCharacters?: ("remove" | "trim" | "keep")
  /**
   * Controls whether sorting should be case-sensitive or not.
   */
  ignoreCase?: boolean
  /**
   * Used only when the `type` option is set to `'custom'`. Specifies the custom alphabet for sorting.
   */
  alphabet?: string
  /**
   * Specifies the sorting locales.
   */
  locales?: (string | string[])
  /**
   * Specifies whether to sort items in ascending or descending order.
   */
  order?: ("asc" | "desc")
  sortBy?: ("specifier" | "path")
  /**
   * Defines custom groups to match specific members.
   */
  customGroups?: ({
    /**
     * Fallback sort order.
     */
    fallbackSort?: {
      /**
       * Specifies the sorting method.
       */
      type: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order" | "type-import-first")
      /**
       * Specifies whether to sort items in ascending or descending order.
       */
      order?: ("asc" | "desc")
      sortBy?: ("specifier" | "path")
    }
    /**
     * Specifies the sorting method.
     */
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order" | "type-import-first")
    /**
     * Custom group name.
     */
    groupName: string
    newlinesInside?: ("ignore" | number)
    /**
     * Specifies whether to sort items in ascending or descending order.
     */
    order?: ("asc" | "desc")
    sortBy?: ("specifier" | "path")
    /**
     * @minItems 1
     */
    anyOf: [{
      /**
       * Regular expression.
       */
      elementNamePattern?: (({
        /**
         * Regular expression pattern.
         */
        pattern: string
        /**
         * Regular expression flags.
         */
        flags?: string
      } | string)[] | ({
        /**
         * Regular expression pattern.
         */
        pattern: string
        /**
         * Regular expression flags.
         */
        flags?: string
      } | string))
      /**
       * Modifier filters.
       */
      modifiers?: ("default" | "multiline" | "named" | "require" | "side-effect" | "singleline" | "ts-equals" | "type" | "value" | "wildcard")[]
      /**
       * Selector filter.
       */
      selector?: ("side-effect-style" | "tsconfig-path" | "side-effect" | "external" | "internal" | "builtin" | "sibling" | "subpath" | "import" | "parent" | "index" | "style" | "type")
    }, ...({
      /**
       * Regular expression.
       */
      elementNamePattern?: (({
        /**
         * Regular expression pattern.
         */
        pattern: string
        /**
         * Regular expression flags.
         */
        flags?: string
      } | string)[] | ({
        /**
         * Regular expression pattern.
         */
        pattern: string
        /**
         * Regular expression flags.
         */
        flags?: string
      } | string))
      /**
       * Modifier filters.
       */
      modifiers?: ("default" | "multiline" | "named" | "require" | "side-effect" | "singleline" | "ts-equals" | "type" | "value" | "wildcard")[]
      /**
       * Selector filter.
       */
      selector?: ("side-effect-style" | "tsconfig-path" | "side-effect" | "external" | "internal" | "builtin" | "sibling" | "subpath" | "import" | "parent" | "index" | "style" | "type")
    })[]]
  } | {
    /**
     * Fallback sort order.
     */
    fallbackSort?: {
      /**
       * Specifies the sorting method.
       */
      type: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order" | "type-import-first")
      /**
       * Specifies whether to sort items in ascending or descending order.
       */
      order?: ("asc" | "desc")
      sortBy?: ("specifier" | "path")
    }
    /**
     * Specifies the sorting method.
     */
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order" | "type-import-first")
    /**
     * Custom group name.
     */
    groupName: string
    newlinesInside?: ("ignore" | number)
    /**
     * Specifies whether to sort items in ascending or descending order.
     */
    order?: ("asc" | "desc")
    sortBy?: ("specifier" | "path")
    /**
     * Regular expression.
     */
    elementNamePattern?: (({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)[] | ({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string))
    /**
     * Modifier filters.
     */
    modifiers?: ("default" | "multiline" | "named" | "require" | "side-effect" | "singleline" | "ts-equals" | "type" | "value" | "wildcard")[]
    /**
     * Selector filter.
     */
    selector?: ("side-effect-style" | "tsconfig-path" | "side-effect" | "external" | "internal" | "builtin" | "sibling" | "subpath" | "import" | "parent" | "index" | "style" | "type")
  })[]
  newlinesInside?: (("ignore" | number) | "newlinesBetween")
  /**
   * Specifies a list of groups for sorting.
   */
  groups?: (string | [string, ...(string)[]] | {
    newlinesBetween: ("ignore" | number)
  } | {
    group: (string | [string, ...(string)[]])
    /**
     * Fallback sort order.
     */
    fallbackSort?: {
      /**
       * Specifies the sorting method.
       */
      type: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order" | "type-import-first")
      /**
       * Specifies whether to sort items in ascending or descending order.
       */
      order?: ("asc" | "desc")
      sortBy?: ("specifier" | "path")
    }
    /**
     * Specifies a comment to enforce above the group.
     */
    commentAbove?: string
    /**
     * Specifies the sorting method.
     */
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order" | "type-import-first")
    newlinesInside?: ("ignore" | number)
    /**
     * Specifies whether to sort items in ascending or descending order.
     */
    order?: ("asc" | "desc")
    sortBy?: ("specifier" | "path")
  })[]
  newlinesBetween?: ("ignore" | number)
  /**
   * Specifies the maximum line length.
   */
  maxLineLength?: number
  /**
   * Controls whether side-effect imports should be sorted.
   */
  sortSideEffects?: boolean
  /**
   * Specifies the environment.
   */
  environment?: ("node" | "bun")
  /**
   * Enables experimental dependency detection for sorting rules that support it.
   */
  useExperimentalDependencyDetection?: boolean
  /**
   * Enables the use of comments to separate the nodes into logical groups.
   */
  partitionByComment?: (boolean | (({
    /**
     * Regular expression pattern.
     */
    pattern: string
    /**
     * Regular expression flags.
     */
    flags?: string
  } | string)[] | ({
    /**
     * Regular expression pattern.
     */
    pattern: string
    /**
     * Regular expression flags.
     */
    flags?: string
  } | string)) | {
    /**
     * Enables specific block comments to separate the nodes.
     */
    block?: (boolean | (({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)[] | ({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)))
    /**
     * Enables specific line comments to separate the nodes.
     */
    line?: (boolean | (({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)[] | ({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)))
  })
  /**
   * Enables the use of newlines to separate the nodes into logical groups.
   */
  partitionByNewLine?: boolean
  /**
   * Regular expression.
   */
  internalPattern?: (({
    /**
     * Regular expression pattern.
     */
    pattern: string
    /**
     * Regular expression flags.
     */
    flags?: string
  } | string)[] | ({
    /**
     * Regular expression pattern.
     */
    pattern: string
    /**
     * Regular expression flags.
     */
    flags?: string
  } | string))
  tsconfig?: {
    /**
     * Specifies the tsConfig root directory.
     */
    rootDir: string
    /**
     * Specifies the tsConfig filename.
     */
    filename?: string
  }
}[]

}
declare namespace R11 {
type Options = {
  /**
   * Fallback sort order.
   */
  fallbackSort?: {
    /**
     * Specifies the sorting method.
     */
    type: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order")
    /**
     * Specifies whether to sort items in ascending or descending order.
     */
    order?: ("asc" | "desc")
    sortBy?: ("name" | "value")
  }
  /**
   * Specifies the sorting method.
   */
  type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order")
  /**
   * Specifies whether to trim, remove, or keep special characters before sorting.
   */
  specialCharacters?: ("remove" | "trim" | "keep")
  /**
   * Controls whether sorting should be case-sensitive or not.
   */
  ignoreCase?: boolean
  /**
   * Used only when the `type` option is set to `'custom'`. Specifies the custom alphabet for sorting.
   */
  alphabet?: string
  /**
   * Specifies the sorting locales.
   */
  locales?: (string | string[])
  /**
   * Specifies whether to sort items in ascending or descending order.
   */
  order?: ("asc" | "desc")
  sortBy?: ("name" | "value")
  /**
   * Defines custom groups to match specific members.
   */
  customGroups?: ({
    /**
     * Fallback sort order.
     */
    fallbackSort?: {
      /**
       * Specifies the sorting method.
       */
      type: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order")
      /**
       * Specifies whether to sort items in ascending or descending order.
       */
      order?: ("asc" | "desc")
      sortBy?: ("name" | "value")
    }
    /**
     * Specifies the sorting method.
     */
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order")
    /**
     * Custom group name.
     */
    groupName: string
    newlinesInside?: ("ignore" | number)
    /**
     * Specifies whether to sort items in ascending or descending order.
     */
    order?: ("asc" | "desc")
    sortBy?: ("name" | "value")
    /**
     * @minItems 1
     */
    anyOf: [{
      /**
       * Regular expression.
       */
      elementNamePattern?: (({
        /**
         * Regular expression pattern.
         */
        pattern: string
        /**
         * Regular expression flags.
         */
        flags?: string
      } | string)[] | ({
        /**
         * Regular expression pattern.
         */
        pattern: string
        /**
         * Regular expression flags.
         */
        flags?: string
      } | string))
      /**
       * Modifier filters.
       */
      modifiers?: ("optional" | "required" | "multiline")[]
      /**
       * Selector filter.
       */
      selector?: ("index-signature" | "member" | "method" | "property")
      /**
       * Regular expression.
       */
      elementValuePattern?: (({
        /**
         * Regular expression pattern.
         */
        pattern: string
        /**
         * Regular expression flags.
         */
        flags?: string
      } | string)[] | ({
        /**
         * Regular expression pattern.
         */
        pattern: string
        /**
         * Regular expression flags.
         */
        flags?: string
      } | string))
    }, ...({
      /**
       * Regular expression.
       */
      elementNamePattern?: (({
        /**
         * Regular expression pattern.
         */
        pattern: string
        /**
         * Regular expression flags.
         */
        flags?: string
      } | string)[] | ({
        /**
         * Regular expression pattern.
         */
        pattern: string
        /**
         * Regular expression flags.
         */
        flags?: string
      } | string))
      /**
       * Modifier filters.
       */
      modifiers?: ("optional" | "required" | "multiline")[]
      /**
       * Selector filter.
       */
      selector?: ("index-signature" | "member" | "method" | "property")
      /**
       * Regular expression.
       */
      elementValuePattern?: (({
        /**
         * Regular expression pattern.
         */
        pattern: string
        /**
         * Regular expression flags.
         */
        flags?: string
      } | string)[] | ({
        /**
         * Regular expression pattern.
         */
        pattern: string
        /**
         * Regular expression flags.
         */
        flags?: string
      } | string))
    })[]]
  } | {
    /**
     * Fallback sort order.
     */
    fallbackSort?: {
      /**
       * Specifies the sorting method.
       */
      type: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order")
      /**
       * Specifies whether to sort items in ascending or descending order.
       */
      order?: ("asc" | "desc")
      sortBy?: ("name" | "value")
    }
    /**
     * Specifies the sorting method.
     */
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order")
    /**
     * Custom group name.
     */
    groupName: string
    newlinesInside?: ("ignore" | number)
    /**
     * Specifies whether to sort items in ascending or descending order.
     */
    order?: ("asc" | "desc")
    sortBy?: ("name" | "value")
    /**
     * Regular expression.
     */
    elementNamePattern?: (({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)[] | ({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string))
    /**
     * Modifier filters.
     */
    modifiers?: ("optional" | "required" | "multiline")[]
    /**
     * Selector filter.
     */
    selector?: ("index-signature" | "member" | "method" | "property")
    /**
     * Regular expression.
     */
    elementValuePattern?: (({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)[] | ({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string))
  })[]
  newlinesInside?: (("ignore" | number) | "newlinesBetween")
  /**
   * Specifies a list of groups for sorting.
   */
  groups?: (string | [string, ...(string)[]] | {
    newlinesBetween: ("ignore" | number)
  } | {
    group: (string | [string, ...(string)[]])
    /**
     * Fallback sort order.
     */
    fallbackSort?: {
      /**
       * Specifies the sorting method.
       */
      type: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order")
      /**
       * Specifies whether to sort items in ascending or descending order.
       */
      order?: ("asc" | "desc")
      sortBy?: ("name" | "value")
    }
    /**
     * Specifies a comment to enforce above the group.
     */
    commentAbove?: string
    /**
     * Specifies the sorting method.
     */
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order")
    newlinesInside?: ("ignore" | number)
    /**
     * Specifies whether to sort items in ascending or descending order.
     */
    order?: ("asc" | "desc")
    sortBy?: ("name" | "value")
  })[]
  newlinesBetween?: ("ignore" | number)
  /**
   * Specifies filters to match a particular options configuration for a given element to sort.
   */
  useConfigurationIf?: {
    /**
     * Regular expression.
     */
    allNamesMatchPattern?: (({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)[] | ({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string))
    /**
     * Specifies whether to only match types that have exclusively numeric keys.
     */
    hasNumericKeysOnly?: boolean
    /**
     * Regular expression.
     */
    declarationCommentMatchesPattern?: (({
      scope?: ("shallow" | "deep")
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)[] | ({
      scope?: ("shallow" | "deep")
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string))
    /**
     * Specifies an AST selector to match elements for conditional configuration.
     */
    matchesAstSelector?: string
    /**
     * Regular expression.
     */
    declarationMatchesPattern?: (({
      scope?: ("shallow" | "deep")
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)[] | ({
      scope?: ("shallow" | "deep")
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string))
  }
  /**
   * Enables the use of comments to separate the nodes into logical groups.
   */
  partitionByComment?: (boolean | (({
    /**
     * Regular expression pattern.
     */
    pattern: string
    /**
     * Regular expression flags.
     */
    flags?: string
  } | string)[] | ({
    /**
     * Regular expression pattern.
     */
    pattern: string
    /**
     * Regular expression flags.
     */
    flags?: string
  } | string)) | {
    /**
     * Enables specific block comments to separate the nodes.
     */
    block?: (boolean | (({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)[] | ({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)))
    /**
     * Enables specific line comments to separate the nodes.
     */
    line?: (boolean | (({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)[] | ({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)))
  })
  /**
   * Enables the use of newlines to separate the nodes into logical groups.
   */
  partitionByNewLine?: boolean
}[]

}
declare namespace R12 {
type Options = {
  /**
   * Fallback sort order.
   */
  fallbackSort?: {
    /**
     * Specifies the sorting method.
     */
    type: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order")
    /**
     * Specifies whether to sort items in ascending or descending order.
     */
    order?: ("asc" | "desc")
  }
  /**
   * Specifies the sorting method.
   */
  type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order")
  /**
   * Specifies whether to trim, remove, or keep special characters before sorting.
   */
  specialCharacters?: ("remove" | "trim" | "keep")
  /**
   * Controls whether sorting should be case-sensitive or not.
   */
  ignoreCase?: boolean
  /**
   * Used only when the `type` option is set to `'custom'`. Specifies the custom alphabet for sorting.
   */
  alphabet?: string
  /**
   * Specifies the sorting locales.
   */
  locales?: (string | string[])
  /**
   * Specifies whether to sort items in ascending or descending order.
   */
  order?: ("asc" | "desc")
  /**
   * Defines custom groups to match specific members.
   */
  customGroups?: ({
    /**
     * Fallback sort order.
     */
    fallbackSort?: {
      /**
       * Specifies the sorting method.
       */
      type: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order")
      /**
       * Specifies whether to sort items in ascending or descending order.
       */
      order?: ("asc" | "desc")
    }
    /**
     * Specifies the sorting method.
     */
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order")
    /**
     * Custom group name.
     */
    groupName: string
    newlinesInside?: ("ignore" | number)
    /**
     * Specifies whether to sort items in ascending or descending order.
     */
    order?: ("asc" | "desc")
    /**
     * @minItems 1
     */
    anyOf: [{
      /**
       * Regular expression.
       */
      elementNamePattern?: (({
        /**
         * Regular expression pattern.
         */
        pattern: string
        /**
         * Regular expression flags.
         */
        flags?: string
      } | string)[] | ({
        /**
         * Regular expression pattern.
         */
        pattern: string
        /**
         * Regular expression flags.
         */
        flags?: string
      } | string))
      /**
       * Selector filter.
       */
      selector?: ("intersection" | "conditional" | "function" | "operator" | "keyword" | "literal" | "nullish" | "import" | "object" | "named" | "tuple" | "union")
    }, ...({
      /**
       * Regular expression.
       */
      elementNamePattern?: (({
        /**
         * Regular expression pattern.
         */
        pattern: string
        /**
         * Regular expression flags.
         */
        flags?: string
      } | string)[] | ({
        /**
         * Regular expression pattern.
         */
        pattern: string
        /**
         * Regular expression flags.
         */
        flags?: string
      } | string))
      /**
       * Selector filter.
       */
      selector?: ("intersection" | "conditional" | "function" | "operator" | "keyword" | "literal" | "nullish" | "import" | "object" | "named" | "tuple" | "union")
    })[]]
  } | {
    /**
     * Fallback sort order.
     */
    fallbackSort?: {
      /**
       * Specifies the sorting method.
       */
      type: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order")
      /**
       * Specifies whether to sort items in ascending or descending order.
       */
      order?: ("asc" | "desc")
    }
    /**
     * Specifies the sorting method.
     */
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order")
    /**
     * Custom group name.
     */
    groupName: string
    newlinesInside?: ("ignore" | number)
    /**
     * Specifies whether to sort items in ascending or descending order.
     */
    order?: ("asc" | "desc")
    /**
     * Regular expression.
     */
    elementNamePattern?: (({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)[] | ({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string))
    /**
     * Selector filter.
     */
    selector?: ("intersection" | "conditional" | "function" | "operator" | "keyword" | "literal" | "nullish" | "import" | "object" | "named" | "tuple" | "union")
  })[]
  newlinesInside?: (("ignore" | number) | "newlinesBetween")
  /**
   * Specifies a list of groups for sorting.
   */
  groups?: (string | [string, ...(string)[]] | {
    newlinesBetween: ("ignore" | number)
  } | {
    group: (string | [string, ...(string)[]])
    /**
     * Fallback sort order.
     */
    fallbackSort?: {
      /**
       * Specifies the sorting method.
       */
      type: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order")
      /**
       * Specifies whether to sort items in ascending or descending order.
       */
      order?: ("asc" | "desc")
    }
    /**
     * Specifies a comment to enforce above the group.
     */
    commentAbove?: string
    /**
     * Specifies the sorting method.
     */
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order")
    newlinesInside?: ("ignore" | number)
    /**
     * Specifies whether to sort items in ascending or descending order.
     */
    order?: ("asc" | "desc")
  })[]
  newlinesBetween?: ("ignore" | number)
  /**
   * Specifies filters to match a particular options configuration for a given element to sort.
   */
  useConfigurationIf?: {
    /**
     * Regular expression.
     */
    allNamesMatchPattern?: (({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)[] | ({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string))
    /**
     * Specifies an AST selector to match elements for conditional configuration.
     */
    matchesAstSelector?: string
  }
  /**
   * Enables the use of comments to separate the nodes into logical groups.
   */
  partitionByComment?: (boolean | (({
    /**
     * Regular expression pattern.
     */
    pattern: string
    /**
     * Regular expression flags.
     */
    flags?: string
  } | string)[] | ({
    /**
     * Regular expression pattern.
     */
    pattern: string
    /**
     * Regular expression flags.
     */
    flags?: string
  } | string)) | {
    /**
     * Enables specific block comments to separate the nodes.
     */
    block?: (boolean | (({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)[] | ({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)))
    /**
     * Enables specific line comments to separate the nodes.
     */
    line?: (boolean | (({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)[] | ({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)))
  })
  /**
   * Enables the use of newlines to separate the nodes into logical groups.
   */
  partitionByNewLine?: boolean
  ignoreCallableTypes?: boolean
}[]

}
declare namespace R13 {
type Options = {
  /**
   * Fallback sort order.
   */
  fallbackSort?: {
    /**
     * Specifies the sorting method.
     */
    type: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order")
    /**
     * Specifies whether to sort items in ascending or descending order.
     */
    order?: ("asc" | "desc")
  }
  /**
   * Specifies the sorting method.
   */
  type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order")
  /**
   * Specifies whether to trim, remove, or keep special characters before sorting.
   */
  specialCharacters?: ("remove" | "trim" | "keep")
  /**
   * Controls whether sorting should be case-sensitive or not.
   */
  ignoreCase?: boolean
  /**
   * Used only when the `type` option is set to `'custom'`. Specifies the custom alphabet for sorting.
   */
  alphabet?: string
  /**
   * Specifies the sorting locales.
   */
  locales?: (string | string[])
  /**
   * Specifies whether to sort items in ascending or descending order.
   */
  order?: ("asc" | "desc")
  /**
   * Defines custom groups to match specific members.
   */
  customGroups?: ({
    /**
     * Fallback sort order.
     */
    fallbackSort?: {
      /**
       * Specifies the sorting method.
       */
      type: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order")
      /**
       * Specifies whether to sort items in ascending or descending order.
       */
      order?: ("asc" | "desc")
    }
    /**
     * Specifies the sorting method.
     */
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order")
    /**
     * Custom group name.
     */
    groupName: string
    newlinesInside?: ("ignore" | number)
    /**
     * Specifies whether to sort items in ascending or descending order.
     */
    order?: ("asc" | "desc")
    /**
     * @minItems 1
     */
    anyOf: [{
      /**
       * Regular expression.
       */
      elementNamePattern?: (({
        /**
         * Regular expression pattern.
         */
        pattern: string
        /**
         * Regular expression flags.
         */
        flags?: string
      } | string)[] | ({
        /**
         * Regular expression pattern.
         */
        pattern: string
        /**
         * Regular expression flags.
         */
        flags?: string
      } | string))
      /**
       * Modifier filters.
       */
      modifiers?: ("shorthand" | "multiline")[]
      /**
       * Selector filter.
       */
      selector?: "prop"
      /**
       * Regular expression.
       */
      elementValuePattern?: (({
        /**
         * Regular expression pattern.
         */
        pattern: string
        /**
         * Regular expression flags.
         */
        flags?: string
      } | string)[] | ({
        /**
         * Regular expression pattern.
         */
        pattern: string
        /**
         * Regular expression flags.
         */
        flags?: string
      } | string))
    }, ...({
      /**
       * Regular expression.
       */
      elementNamePattern?: (({
        /**
         * Regular expression pattern.
         */
        pattern: string
        /**
         * Regular expression flags.
         */
        flags?: string
      } | string)[] | ({
        /**
         * Regular expression pattern.
         */
        pattern: string
        /**
         * Regular expression flags.
         */
        flags?: string
      } | string))
      /**
       * Modifier filters.
       */
      modifiers?: ("shorthand" | "multiline")[]
      /**
       * Selector filter.
       */
      selector?: "prop"
      /**
       * Regular expression.
       */
      elementValuePattern?: (({
        /**
         * Regular expression pattern.
         */
        pattern: string
        /**
         * Regular expression flags.
         */
        flags?: string
      } | string)[] | ({
        /**
         * Regular expression pattern.
         */
        pattern: string
        /**
         * Regular expression flags.
         */
        flags?: string
      } | string))
    })[]]
  } | {
    /**
     * Fallback sort order.
     */
    fallbackSort?: {
      /**
       * Specifies the sorting method.
       */
      type: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order")
      /**
       * Specifies whether to sort items in ascending or descending order.
       */
      order?: ("asc" | "desc")
    }
    /**
     * Specifies the sorting method.
     */
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order")
    /**
     * Custom group name.
     */
    groupName: string
    newlinesInside?: ("ignore" | number)
    /**
     * Specifies whether to sort items in ascending or descending order.
     */
    order?: ("asc" | "desc")
    /**
     * Regular expression.
     */
    elementNamePattern?: (({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)[] | ({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string))
    /**
     * Modifier filters.
     */
    modifiers?: ("shorthand" | "multiline")[]
    /**
     * Selector filter.
     */
    selector?: "prop"
    /**
     * Regular expression.
     */
    elementValuePattern?: (({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)[] | ({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string))
  })[]
  newlinesInside?: (("ignore" | number) | "newlinesBetween")
  /**
   * Specifies a list of groups for sorting.
   */
  groups?: (string | [string, ...(string)[]] | {
    newlinesBetween: ("ignore" | number)
  } | {
    group: (string | [string, ...(string)[]])
    /**
     * Fallback sort order.
     */
    fallbackSort?: {
      /**
       * Specifies the sorting method.
       */
      type: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order")
      /**
       * Specifies whether to sort items in ascending or descending order.
       */
      order?: ("asc" | "desc")
    }
    /**
     * Specifies a comment to enforce above the group.
     */
    commentAbove?: string
    /**
     * Specifies the sorting method.
     */
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order")
    newlinesInside?: ("ignore" | number)
    /**
     * Specifies whether to sort items in ascending or descending order.
     */
    order?: ("asc" | "desc")
  })[]
  newlinesBetween?: ("ignore" | number)
  /**
   * Specifies filters to match a particular options configuration for a given element to sort.
   */
  useConfigurationIf?: {
    /**
     * Regular expression.
     */
    allNamesMatchPattern?: (({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)[] | ({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string))
    /**
     * Specifies an AST selector to match elements for conditional configuration.
     */
    matchesAstSelector?: string
    /**
     * Regular expression.
     */
    tagMatchesPattern?: (({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)[] | ({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string))
  }
  /**
   * Enables the use of newlines to separate the nodes into logical groups.
   */
  partitionByNewLine?: boolean
}[]

}
declare namespace R14 {
type Options = {
  /**
   * Fallback sort order.
   */
  fallbackSort?: {
    /**
     * Specifies the sorting method.
     */
    type: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order")
    /**
     * Specifies whether to sort items in ascending or descending order.
     */
    order?: ("asc" | "desc")
  }
  /**
   * Specifies the sorting method.
   */
  type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order")
  /**
   * Specifies whether to trim, remove, or keep special characters before sorting.
   */
  specialCharacters?: ("remove" | "trim" | "keep")
  /**
   * Controls whether sorting should be case-sensitive or not.
   */
  ignoreCase?: boolean
  /**
   * Used only when the `type` option is set to `'custom'`. Specifies the custom alphabet for sorting.
   */
  alphabet?: string
  /**
   * Specifies the sorting locales.
   */
  locales?: (string | string[])
  /**
   * Specifies whether to sort items in ascending or descending order.
   */
  order?: ("asc" | "desc")
  /**
   * Defines custom groups to match specific members.
   */
  customGroups?: ({
    /**
     * Fallback sort order.
     */
    fallbackSort?: {
      /**
       * Specifies the sorting method.
       */
      type: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order")
      /**
       * Specifies whether to sort items in ascending or descending order.
       */
      order?: ("asc" | "desc")
    }
    /**
     * Specifies the sorting method.
     */
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order")
    /**
     * Custom group name.
     */
    groupName: string
    newlinesInside?: ("ignore" | number)
    /**
     * Specifies whether to sort items in ascending or descending order.
     */
    order?: ("asc" | "desc")
    /**
     * @minItems 1
     */
    anyOf: [{
      /**
       * Regular expression.
       */
      elementNamePattern?: (({
        /**
         * Regular expression pattern.
         */
        pattern: string
        /**
         * Regular expression flags.
         */
        flags?: string
      } | string)[] | ({
        /**
         * Regular expression pattern.
         */
        pattern: string
        /**
         * Regular expression flags.
         */
        flags?: string
      } | string))
    }, ...({
      /**
       * Regular expression.
       */
      elementNamePattern?: (({
        /**
         * Regular expression pattern.
         */
        pattern: string
        /**
         * Regular expression flags.
         */
        flags?: string
      } | string)[] | ({
        /**
         * Regular expression pattern.
         */
        pattern: string
        /**
         * Regular expression flags.
         */
        flags?: string
      } | string))
    })[]]
  } | {
    /**
     * Fallback sort order.
     */
    fallbackSort?: {
      /**
       * Specifies the sorting method.
       */
      type: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order")
      /**
       * Specifies whether to sort items in ascending or descending order.
       */
      order?: ("asc" | "desc")
    }
    /**
     * Specifies the sorting method.
     */
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order")
    /**
     * Custom group name.
     */
    groupName: string
    newlinesInside?: ("ignore" | number)
    /**
     * Specifies whether to sort items in ascending or descending order.
     */
    order?: ("asc" | "desc")
    /**
     * Regular expression.
     */
    elementNamePattern?: (({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)[] | ({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string))
  })[]
  newlinesInside?: (("ignore" | number) | "newlinesBetween")
  /**
   * Specifies a list of groups for sorting.
   */
  groups?: (string | [string, ...(string)[]] | {
    newlinesBetween: ("ignore" | number)
  } | {
    group: (string | [string, ...(string)[]])
    /**
     * Fallback sort order.
     */
    fallbackSort?: {
      /**
       * Specifies the sorting method.
       */
      type: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order")
      /**
       * Specifies whether to sort items in ascending or descending order.
       */
      order?: ("asc" | "desc")
    }
    /**
     * Specifies a comment to enforce above the group.
     */
    commentAbove?: string
    /**
     * Specifies the sorting method.
     */
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order")
    newlinesInside?: ("ignore" | number)
    /**
     * Specifies whether to sort items in ascending or descending order.
     */
    order?: ("asc" | "desc")
  })[]
  newlinesBetween?: ("ignore" | number)
  /**
   * Specifies filters to match a particular options configuration for a given element to sort.
   */
  useConfigurationIf?: {
    /**
     * Regular expression.
     */
    allNamesMatchPattern?: (({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)[] | ({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string))
    /**
     * Specifies an AST selector to match elements for conditional configuration.
     */
    matchesAstSelector?: string
  }
  /**
   * Enables the use of comments to separate the nodes into logical groups.
   */
  partitionByComment?: (boolean | (({
    /**
     * Regular expression pattern.
     */
    pattern: string
    /**
     * Regular expression flags.
     */
    flags?: string
  } | string)[] | ({
    /**
     * Regular expression pattern.
     */
    pattern: string
    /**
     * Regular expression flags.
     */
    flags?: string
  } | string)) | {
    /**
     * Enables specific block comments to separate the nodes.
     */
    block?: (boolean | (({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)[] | ({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)))
    /**
     * Enables specific line comments to separate the nodes.
     */
    line?: (boolean | (({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)[] | ({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)))
  })
  /**
   * Enables the use of newlines to separate the nodes into logical groups.
   */
  partitionByNewLine?: boolean
}[]

}
declare namespace R15 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  /**
   * Fallback sort order.
   */
  fallbackSort?: {
    /**
     * Specifies the sorting method.
     */
    type: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order" | "usage")
    /**
     * Specifies whether to sort items in ascending or descending order.
     */
    order?: ("asc" | "desc")
  }
  /**
   * Specifies the sorting method.
   */
  type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order" | "usage")
  /**
   * Specifies whether to trim, remove, or keep special characters before sorting.
   */
  specialCharacters?: ("remove" | "trim" | "keep")
  /**
   * Controls whether sorting should be case-sensitive or not.
   */
  ignoreCase?: boolean
  /**
   * Used only when the `type` option is set to `'custom'`. Specifies the custom alphabet for sorting.
   */
  alphabet?: string
  /**
   * Specifies the sorting locales.
   */
  locales?: (string | string[])
  /**
   * Specifies whether to sort items in ascending or descending order.
   */
  order?: ("asc" | "desc")
  /**
   * Defines custom groups to match specific members.
   */
  customGroups?: ({
    /**
     * Fallback sort order.
     */
    fallbackSort?: {
      /**
       * Specifies the sorting method.
       */
      type: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order" | "usage")
      /**
       * Specifies whether to sort items in ascending or descending order.
       */
      order?: ("asc" | "desc")
    }
    /**
     * Specifies the sorting method.
     */
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order" | "usage")
    /**
     * Custom group name.
     */
    groupName: string
    newlinesInside?: ("ignore" | number)
    /**
     * Specifies whether to sort items in ascending or descending order.
     */
    order?: ("asc" | "desc")
    /**
     * @minItems 1
     */
    anyOf: [{
      /**
       * Regular expression.
       */
      elementNamePattern?: (({
        /**
         * Regular expression pattern.
         */
        pattern: string
        /**
         * Regular expression flags.
         */
        flags?: string
      } | string)[] | ({
        /**
         * Regular expression pattern.
         */
        pattern: string
        /**
         * Regular expression flags.
         */
        flags?: string
      } | string))
      /**
       * Modifier filters.
       */
      modifiers?: ("async" | "declare" | "decorated" | "default" | "export")[]
      /**
       * Selector filter.
       */
      selector?: ("enum" | "function" | "interface" | "type" | "class")
      /**
       * Regular expression.
       */
      decoratorNamePattern?: (({
        /**
         * Regular expression pattern.
         */
        pattern: string
        /**
         * Regular expression flags.
         */
        flags?: string
      } | string)[] | ({
        /**
         * Regular expression pattern.
         */
        pattern: string
        /**
         * Regular expression flags.
         */
        flags?: string
      } | string))
    }, ...({
      /**
       * Regular expression.
       */
      elementNamePattern?: (({
        /**
         * Regular expression pattern.
         */
        pattern: string
        /**
         * Regular expression flags.
         */
        flags?: string
      } | string)[] | ({
        /**
         * Regular expression pattern.
         */
        pattern: string
        /**
         * Regular expression flags.
         */
        flags?: string
      } | string))
      /**
       * Modifier filters.
       */
      modifiers?: ("async" | "declare" | "decorated" | "default" | "export")[]
      /**
       * Selector filter.
       */
      selector?: ("enum" | "function" | "interface" | "type" | "class")
      /**
       * Regular expression.
       */
      decoratorNamePattern?: (({
        /**
         * Regular expression pattern.
         */
        pattern: string
        /**
         * Regular expression flags.
         */
        flags?: string
      } | string)[] | ({
        /**
         * Regular expression pattern.
         */
        pattern: string
        /**
         * Regular expression flags.
         */
        flags?: string
      } | string))
    })[]]
  } | {
    /**
     * Fallback sort order.
     */
    fallbackSort?: {
      /**
       * Specifies the sorting method.
       */
      type: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order" | "usage")
      /**
       * Specifies whether to sort items in ascending or descending order.
       */
      order?: ("asc" | "desc")
    }
    /**
     * Specifies the sorting method.
     */
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order" | "usage")
    /**
     * Custom group name.
     */
    groupName: string
    newlinesInside?: ("ignore" | number)
    /**
     * Specifies whether to sort items in ascending or descending order.
     */
    order?: ("asc" | "desc")
    /**
     * Regular expression.
     */
    elementNamePattern?: (({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)[] | ({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string))
    /**
     * Modifier filters.
     */
    modifiers?: ("async" | "declare" | "decorated" | "default" | "export")[]
    /**
     * Selector filter.
     */
    selector?: ("enum" | "function" | "interface" | "type" | "class")
    /**
     * Regular expression.
     */
    decoratorNamePattern?: (({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)[] | ({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string))
  })[]
  newlinesInside?: (("ignore" | number) | "newlinesBetween")
  /**
   * Specifies a list of groups for sorting.
   */
  groups?: (string | [string, ...(string)[]] | {
    newlinesBetween: ("ignore" | number)
  } | {
    group: (string | [string, ...(string)[]])
    /**
     * Fallback sort order.
     */
    fallbackSort?: {
      /**
       * Specifies the sorting method.
       */
      type: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order" | "usage")
      /**
       * Specifies whether to sort items in ascending or descending order.
       */
      order?: ("asc" | "desc")
    }
    /**
     * Specifies a comment to enforce above the group.
     */
    commentAbove?: string
    /**
     * Specifies the sorting method.
     */
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order" | "usage")
    newlinesInside?: ("ignore" | number)
    /**
     * Specifies whether to sort items in ascending or descending order.
     */
    order?: ("asc" | "desc")
  })[]
  newlinesBetween?: ("ignore" | number)
  /**
   * Specifies the node types to analyze as module blocks, in addition to the built-in ones.
   */
  additionalModuleBlockTypes?: string[]
  /**
   * Enables experimental dependency detection for sorting rules that support it.
   */
  useExperimentalDependencyDetection?: boolean
  newlinesBetweenOverloadSignatures?: ("ignore" | number)
  /**
   * Enables the use of comments to separate the nodes into logical groups.
   */
  partitionByComment?: (boolean | (({
    /**
     * Regular expression pattern.
     */
    pattern: string
    /**
     * Regular expression flags.
     */
    flags?: string
  } | string)[] | ({
    /**
     * Regular expression pattern.
     */
    pattern: string
    /**
     * Regular expression flags.
     */
    flags?: string
  } | string)) | {
    /**
     * Enables specific block comments to separate the nodes.
     */
    block?: (boolean | (({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)[] | ({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)))
    /**
     * Enables specific line comments to separate the nodes.
     */
    line?: (boolean | (({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)[] | ({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)))
  })
  /**
   * Enables the use of newlines to separate the nodes into logical groups.
   */
  partitionByNewLine?: boolean
  tsconfig?: {
    /**
     * Specifies the tsConfig root directory.
     */
    rootDir: string
    /**
     * Specifies the tsConfig filename.
     */
    filename?: string
  }
}]

}
declare namespace R16 {
type Options = {
  /**
   * Fallback sort order.
   */
  fallbackSort?: {
    /**
     * Specifies the sorting method.
     */
    type: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order")
    /**
     * Specifies whether to sort items in ascending or descending order.
     */
    order?: ("asc" | "desc")
  }
  /**
   * Specifies the sorting method.
   */
  type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order")
  /**
   * Specifies whether to trim, remove, or keep special characters before sorting.
   */
  specialCharacters?: ("remove" | "trim" | "keep")
  /**
   * Controls whether sorting should be case-sensitive or not.
   */
  ignoreCase?: boolean
  /**
   * Used only when the `type` option is set to `'custom'`. Specifies the custom alphabet for sorting.
   */
  alphabet?: string
  /**
   * Specifies the sorting locales.
   */
  locales?: (string | string[])
  /**
   * Specifies whether to sort items in ascending or descending order.
   */
  order?: ("asc" | "desc")
  /**
   * Defines custom groups to match specific members.
   */
  customGroups?: ({
    /**
     * Fallback sort order.
     */
    fallbackSort?: {
      /**
       * Specifies the sorting method.
       */
      type: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order")
      /**
       * Specifies whether to sort items in ascending or descending order.
       */
      order?: ("asc" | "desc")
    }
    /**
     * Specifies the sorting method.
     */
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order")
    /**
     * Custom group name.
     */
    groupName: string
    newlinesInside?: ("ignore" | number)
    /**
     * Specifies whether to sort items in ascending or descending order.
     */
    order?: ("asc" | "desc")
    /**
     * @minItems 1
     */
    anyOf: [{
      /**
       * Regular expression.
       */
      elementNamePattern?: (({
        /**
         * Regular expression pattern.
         */
        pattern: string
        /**
         * Regular expression flags.
         */
        flags?: string
      } | string)[] | ({
        /**
         * Regular expression pattern.
         */
        pattern: string
        /**
         * Regular expression flags.
         */
        flags?: string
      } | string))
      /**
       * Modifier filters.
       */
      modifiers?: ("value" | "type")[]
      /**
       * Selector filter.
       */
      selector?: "export"
    }, ...({
      /**
       * Regular expression.
       */
      elementNamePattern?: (({
        /**
         * Regular expression pattern.
         */
        pattern: string
        /**
         * Regular expression flags.
         */
        flags?: string
      } | string)[] | ({
        /**
         * Regular expression pattern.
         */
        pattern: string
        /**
         * Regular expression flags.
         */
        flags?: string
      } | string))
      /**
       * Modifier filters.
       */
      modifiers?: ("value" | "type")[]
      /**
       * Selector filter.
       */
      selector?: "export"
    })[]]
  } | {
    /**
     * Fallback sort order.
     */
    fallbackSort?: {
      /**
       * Specifies the sorting method.
       */
      type: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order")
      /**
       * Specifies whether to sort items in ascending or descending order.
       */
      order?: ("asc" | "desc")
    }
    /**
     * Specifies the sorting method.
     */
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order")
    /**
     * Custom group name.
     */
    groupName: string
    newlinesInside?: ("ignore" | number)
    /**
     * Specifies whether to sort items in ascending or descending order.
     */
    order?: ("asc" | "desc")
    /**
     * Regular expression.
     */
    elementNamePattern?: (({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)[] | ({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string))
    /**
     * Modifier filters.
     */
    modifiers?: ("value" | "type")[]
    /**
     * Selector filter.
     */
    selector?: "export"
  })[]
  newlinesInside?: (("ignore" | number) | "newlinesBetween")
  /**
   * Specifies a list of groups for sorting.
   */
  groups?: (string | [string, ...(string)[]] | {
    newlinesBetween: ("ignore" | number)
  } | {
    group: (string | [string, ...(string)[]])
    /**
     * Fallback sort order.
     */
    fallbackSort?: {
      /**
       * Specifies the sorting method.
       */
      type: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order")
      /**
       * Specifies whether to sort items in ascending or descending order.
       */
      order?: ("asc" | "desc")
    }
    /**
     * Specifies a comment to enforce above the group.
     */
    commentAbove?: string
    /**
     * Specifies the sorting method.
     */
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order")
    newlinesInside?: ("ignore" | number)
    /**
     * Specifies whether to sort items in ascending or descending order.
     */
    order?: ("asc" | "desc")
  })[]
  newlinesBetween?: ("ignore" | number)
  /**
   * Specifies filters to match a particular options configuration for a given element to sort.
   */
  useConfigurationIf?: {
    /**
     * Regular expression.
     */
    allNamesMatchPattern?: (({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)[] | ({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string))
    /**
     * Specifies an AST selector to match elements for conditional configuration.
     */
    matchesAstSelector?: string
  }
  /**
   * Controls whether to ignore alias names.
   */
  ignoreAlias?: boolean
  /**
   * Enables the use of comments to separate the nodes into logical groups.
   */
  partitionByComment?: (boolean | (({
    /**
     * Regular expression pattern.
     */
    pattern: string
    /**
     * Regular expression flags.
     */
    flags?: string
  } | string)[] | ({
    /**
     * Regular expression pattern.
     */
    pattern: string
    /**
     * Regular expression flags.
     */
    flags?: string
  } | string)) | {
    /**
     * Enables specific block comments to separate the nodes.
     */
    block?: (boolean | (({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)[] | ({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)))
    /**
     * Enables specific line comments to separate the nodes.
     */
    line?: (boolean | (({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)[] | ({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)))
  })
  /**
   * Enables the use of newlines to separate the nodes into logical groups.
   */
  partitionByNewLine?: boolean
}[]

}
declare namespace R17 {
type Options = {
  /**
   * Fallback sort order.
   */
  fallbackSort?: {
    /**
     * Specifies the sorting method.
     */
    type: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order")
    /**
     * Specifies whether to sort items in ascending or descending order.
     */
    order?: ("asc" | "desc")
  }
  /**
   * Specifies the sorting method.
   */
  type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order")
  /**
   * Specifies whether to trim, remove, or keep special characters before sorting.
   */
  specialCharacters?: ("remove" | "trim" | "keep")
  /**
   * Controls whether sorting should be case-sensitive or not.
   */
  ignoreCase?: boolean
  /**
   * Used only when the `type` option is set to `'custom'`. Specifies the custom alphabet for sorting.
   */
  alphabet?: string
  /**
   * Specifies the sorting locales.
   */
  locales?: (string | string[])
  /**
   * Specifies whether to sort items in ascending or descending order.
   */
  order?: ("asc" | "desc")
  /**
   * Defines custom groups to match specific members.
   */
  customGroups?: ({
    /**
     * Fallback sort order.
     */
    fallbackSort?: {
      /**
       * Specifies the sorting method.
       */
      type: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order")
      /**
       * Specifies whether to sort items in ascending or descending order.
       */
      order?: ("asc" | "desc")
    }
    /**
     * Specifies the sorting method.
     */
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order")
    /**
     * Custom group name.
     */
    groupName: string
    newlinesInside?: ("ignore" | number)
    /**
     * Specifies whether to sort items in ascending or descending order.
     */
    order?: ("asc" | "desc")
    /**
     * @minItems 1
     */
    anyOf: [{
      /**
       * Regular expression.
       */
      elementNamePattern?: (({
        /**
         * Regular expression pattern.
         */
        pattern: string
        /**
         * Regular expression flags.
         */
        flags?: string
      } | string)[] | ({
        /**
         * Regular expression pattern.
         */
        pattern: string
        /**
         * Regular expression flags.
         */
        flags?: string
      } | string))
      /**
       * Modifier filters.
       */
      modifiers?: ("value" | "type")[]
      /**
       * Selector filter.
       */
      selector?: "import"
    }, ...({
      /**
       * Regular expression.
       */
      elementNamePattern?: (({
        /**
         * Regular expression pattern.
         */
        pattern: string
        /**
         * Regular expression flags.
         */
        flags?: string
      } | string)[] | ({
        /**
         * Regular expression pattern.
         */
        pattern: string
        /**
         * Regular expression flags.
         */
        flags?: string
      } | string))
      /**
       * Modifier filters.
       */
      modifiers?: ("value" | "type")[]
      /**
       * Selector filter.
       */
      selector?: "import"
    })[]]
  } | {
    /**
     * Fallback sort order.
     */
    fallbackSort?: {
      /**
       * Specifies the sorting method.
       */
      type: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order")
      /**
       * Specifies whether to sort items in ascending or descending order.
       */
      order?: ("asc" | "desc")
    }
    /**
     * Specifies the sorting method.
     */
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order")
    /**
     * Custom group name.
     */
    groupName: string
    newlinesInside?: ("ignore" | number)
    /**
     * Specifies whether to sort items in ascending or descending order.
     */
    order?: ("asc" | "desc")
    /**
     * Regular expression.
     */
    elementNamePattern?: (({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)[] | ({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string))
    /**
     * Modifier filters.
     */
    modifiers?: ("value" | "type")[]
    /**
     * Selector filter.
     */
    selector?: "import"
  })[]
  newlinesInside?: (("ignore" | number) | "newlinesBetween")
  /**
   * Specifies a list of groups for sorting.
   */
  groups?: (string | [string, ...(string)[]] | {
    newlinesBetween: ("ignore" | number)
  } | {
    group: (string | [string, ...(string)[]])
    /**
     * Fallback sort order.
     */
    fallbackSort?: {
      /**
       * Specifies the sorting method.
       */
      type: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order")
      /**
       * Specifies whether to sort items in ascending or descending order.
       */
      order?: ("asc" | "desc")
    }
    /**
     * Specifies a comment to enforce above the group.
     */
    commentAbove?: string
    /**
     * Specifies the sorting method.
     */
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order")
    newlinesInside?: ("ignore" | number)
    /**
     * Specifies whether to sort items in ascending or descending order.
     */
    order?: ("asc" | "desc")
  })[]
  newlinesBetween?: ("ignore" | number)
  /**
   * Specifies filters to match a particular options configuration for a given element to sort.
   */
  useConfigurationIf?: {
    /**
     * Regular expression.
     */
    allNamesMatchPattern?: (({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)[] | ({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string))
    /**
     * Specifies an AST selector to match elements for conditional configuration.
     */
    matchesAstSelector?: string
  }
  /**
   * Controls whether to ignore alias names.
   */
  ignoreAlias?: boolean
  /**
   * Enables the use of comments to separate the nodes into logical groups.
   */
  partitionByComment?: (boolean | (({
    /**
     * Regular expression pattern.
     */
    pattern: string
    /**
     * Regular expression flags.
     */
    flags?: string
  } | string)[] | ({
    /**
     * Regular expression pattern.
     */
    pattern: string
    /**
     * Regular expression flags.
     */
    flags?: string
  } | string)) | {
    /**
     * Enables specific block comments to separate the nodes.
     */
    block?: (boolean | (({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)[] | ({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)))
    /**
     * Enables specific line comments to separate the nodes.
     */
    line?: (boolean | (({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)[] | ({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)))
  })
  /**
   * Enables the use of newlines to separate the nodes into logical groups.
   */
  partitionByNewLine?: boolean
}[]

}
declare namespace R18 {
type Options = {
  /**
   * Fallback sort order.
   */
  fallbackSort?: {
    /**
     * Specifies the sorting method.
     */
    type: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order")
    /**
     * Specifies whether to sort items in ascending or descending order.
     */
    order?: ("asc" | "desc")
    sortBy?: ("name" | "value")
  }
  /**
   * Specifies the sorting method.
   */
  type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order")
  /**
   * Specifies whether to trim, remove, or keep special characters before sorting.
   */
  specialCharacters?: ("remove" | "trim" | "keep")
  /**
   * Controls whether sorting should be case-sensitive or not.
   */
  ignoreCase?: boolean
  /**
   * Used only when the `type` option is set to `'custom'`. Specifies the custom alphabet for sorting.
   */
  alphabet?: string
  /**
   * Specifies the sorting locales.
   */
  locales?: (string | string[])
  /**
   * Specifies whether to sort items in ascending or descending order.
   */
  order?: ("asc" | "desc")
  sortBy?: ("name" | "value")
  /**
   * Defines custom groups to match specific members.
   */
  customGroups?: ({
    /**
     * Fallback sort order.
     */
    fallbackSort?: {
      /**
       * Specifies the sorting method.
       */
      type: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order")
      /**
       * Specifies whether to sort items in ascending or descending order.
       */
      order?: ("asc" | "desc")
      sortBy?: ("name" | "value")
    }
    /**
     * Specifies the sorting method.
     */
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order")
    /**
     * Custom group name.
     */
    groupName: string
    newlinesInside?: ("ignore" | number)
    /**
     * Specifies whether to sort items in ascending or descending order.
     */
    order?: ("asc" | "desc")
    sortBy?: ("name" | "value")
    /**
     * @minItems 1
     */
    anyOf: [{
      /**
       * Regular expression.
       */
      elementNamePattern?: (({
        /**
         * Regular expression pattern.
         */
        pattern: string
        /**
         * Regular expression flags.
         */
        flags?: string
      } | string)[] | ({
        /**
         * Regular expression pattern.
         */
        pattern: string
        /**
         * Regular expression flags.
         */
        flags?: string
      } | string))
      /**
       * Modifier filters.
       */
      modifiers?: ("optional" | "required" | "multiline")[]
      /**
       * Selector filter.
       */
      selector?: ("index-signature" | "member" | "method" | "property")
      /**
       * Regular expression.
       */
      elementValuePattern?: (({
        /**
         * Regular expression pattern.
         */
        pattern: string
        /**
         * Regular expression flags.
         */
        flags?: string
      } | string)[] | ({
        /**
         * Regular expression pattern.
         */
        pattern: string
        /**
         * Regular expression flags.
         */
        flags?: string
      } | string))
    }, ...({
      /**
       * Regular expression.
       */
      elementNamePattern?: (({
        /**
         * Regular expression pattern.
         */
        pattern: string
        /**
         * Regular expression flags.
         */
        flags?: string
      } | string)[] | ({
        /**
         * Regular expression pattern.
         */
        pattern: string
        /**
         * Regular expression flags.
         */
        flags?: string
      } | string))
      /**
       * Modifier filters.
       */
      modifiers?: ("optional" | "required" | "multiline")[]
      /**
       * Selector filter.
       */
      selector?: ("index-signature" | "member" | "method" | "property")
      /**
       * Regular expression.
       */
      elementValuePattern?: (({
        /**
         * Regular expression pattern.
         */
        pattern: string
        /**
         * Regular expression flags.
         */
        flags?: string
      } | string)[] | ({
        /**
         * Regular expression pattern.
         */
        pattern: string
        /**
         * Regular expression flags.
         */
        flags?: string
      } | string))
    })[]]
  } | {
    /**
     * Fallback sort order.
     */
    fallbackSort?: {
      /**
       * Specifies the sorting method.
       */
      type: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order")
      /**
       * Specifies whether to sort items in ascending or descending order.
       */
      order?: ("asc" | "desc")
      sortBy?: ("name" | "value")
    }
    /**
     * Specifies the sorting method.
     */
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order")
    /**
     * Custom group name.
     */
    groupName: string
    newlinesInside?: ("ignore" | number)
    /**
     * Specifies whether to sort items in ascending or descending order.
     */
    order?: ("asc" | "desc")
    sortBy?: ("name" | "value")
    /**
     * Regular expression.
     */
    elementNamePattern?: (({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)[] | ({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string))
    /**
     * Modifier filters.
     */
    modifiers?: ("optional" | "required" | "multiline")[]
    /**
     * Selector filter.
     */
    selector?: ("index-signature" | "member" | "method" | "property")
    /**
     * Regular expression.
     */
    elementValuePattern?: (({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)[] | ({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string))
  })[]
  newlinesInside?: (("ignore" | number) | "newlinesBetween")
  /**
   * Specifies a list of groups for sorting.
   */
  groups?: (string | [string, ...(string)[]] | {
    newlinesBetween: ("ignore" | number)
  } | {
    group: (string | [string, ...(string)[]])
    /**
     * Fallback sort order.
     */
    fallbackSort?: {
      /**
       * Specifies the sorting method.
       */
      type: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order")
      /**
       * Specifies whether to sort items in ascending or descending order.
       */
      order?: ("asc" | "desc")
      sortBy?: ("name" | "value")
    }
    /**
     * Specifies a comment to enforce above the group.
     */
    commentAbove?: string
    /**
     * Specifies the sorting method.
     */
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order")
    newlinesInside?: ("ignore" | number)
    /**
     * Specifies whether to sort items in ascending or descending order.
     */
    order?: ("asc" | "desc")
    sortBy?: ("name" | "value")
  })[]
  newlinesBetween?: ("ignore" | number)
  /**
   * Specifies filters to match a particular options configuration for a given element to sort.
   */
  useConfigurationIf?: {
    /**
     * Regular expression.
     */
    allNamesMatchPattern?: (({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)[] | ({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string))
    /**
     * Specifies whether to only match types that have exclusively numeric keys.
     */
    hasNumericKeysOnly?: boolean
    /**
     * Regular expression.
     */
    declarationCommentMatchesPattern?: (({
      scope?: ("shallow" | "deep")
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)[] | ({
      scope?: ("shallow" | "deep")
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string))
    /**
     * Specifies an AST selector to match elements for conditional configuration.
     */
    matchesAstSelector?: string
    /**
     * Regular expression.
     */
    declarationMatchesPattern?: (({
      scope?: ("shallow" | "deep")
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)[] | ({
      scope?: ("shallow" | "deep")
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string))
  }
  /**
   * Enables the use of comments to separate the nodes into logical groups.
   */
  partitionByComment?: (boolean | (({
    /**
     * Regular expression pattern.
     */
    pattern: string
    /**
     * Regular expression flags.
     */
    flags?: string
  } | string)[] | ({
    /**
     * Regular expression pattern.
     */
    pattern: string
    /**
     * Regular expression flags.
     */
    flags?: string
  } | string)) | {
    /**
     * Enables specific block comments to separate the nodes.
     */
    block?: (boolean | (({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)[] | ({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)))
    /**
     * Enables specific line comments to separate the nodes.
     */
    line?: (boolean | (({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)[] | ({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)))
  })
  /**
   * Enables the use of newlines to separate the nodes into logical groups.
   */
  partitionByNewLine?: boolean
}[]

}
declare namespace R19 {
type Options = {
  /**
   * Fallback sort order.
   */
  fallbackSort?: {
    /**
     * Specifies the sorting method.
     */
    type: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order")
    /**
     * Specifies whether to sort items in ascending or descending order.
     */
    order?: ("asc" | "desc")
    sortBy?: ("name" | "value")
  }
  /**
   * Specifies the sorting method.
   */
  type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order")
  /**
   * Specifies whether to trim, remove, or keep special characters before sorting.
   */
  specialCharacters?: ("remove" | "trim" | "keep")
  /**
   * Controls whether sorting should be case-sensitive or not.
   */
  ignoreCase?: boolean
  /**
   * Used only when the `type` option is set to `'custom'`. Specifies the custom alphabet for sorting.
   */
  alphabet?: string
  /**
   * Specifies the sorting locales.
   */
  locales?: (string | string[])
  /**
   * Specifies whether to sort items in ascending or descending order.
   */
  order?: ("asc" | "desc")
  sortBy?: ("name" | "value")
  /**
   * Defines custom groups to match specific members.
   */
  customGroups?: ({
    /**
     * Fallback sort order.
     */
    fallbackSort?: {
      /**
       * Specifies the sorting method.
       */
      type: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order")
      /**
       * Specifies whether to sort items in ascending or descending order.
       */
      order?: ("asc" | "desc")
      sortBy?: ("name" | "value")
    }
    /**
     * Specifies the sorting method.
     */
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order")
    /**
     * Custom group name.
     */
    groupName: string
    newlinesInside?: ("ignore" | number)
    /**
     * Specifies whether to sort items in ascending or descending order.
     */
    order?: ("asc" | "desc")
    sortBy?: ("name" | "value")
    /**
     * @minItems 1
     */
    anyOf: [{
      /**
       * Regular expression.
       */
      elementNamePattern?: (({
        /**
         * Regular expression pattern.
         */
        pattern: string
        /**
         * Regular expression flags.
         */
        flags?: string
      } | string)[] | ({
        /**
         * Regular expression pattern.
         */
        pattern: string
        /**
         * Regular expression flags.
         */
        flags?: string
      } | string))
      /**
       * Modifier filters.
       */
      modifiers?: ("multiline")[]
      /**
       * Selector filter.
       */
      selector?: ("member" | "method" | "property")
      /**
       * Regular expression.
       */
      elementValuePattern?: (({
        /**
         * Regular expression pattern.
         */
        pattern: string
        /**
         * Regular expression flags.
         */
        flags?: string
      } | string)[] | ({
        /**
         * Regular expression pattern.
         */
        pattern: string
        /**
         * Regular expression flags.
         */
        flags?: string
      } | string))
    }, ...({
      /**
       * Regular expression.
       */
      elementNamePattern?: (({
        /**
         * Regular expression pattern.
         */
        pattern: string
        /**
         * Regular expression flags.
         */
        flags?: string
      } | string)[] | ({
        /**
         * Regular expression pattern.
         */
        pattern: string
        /**
         * Regular expression flags.
         */
        flags?: string
      } | string))
      /**
       * Modifier filters.
       */
      modifiers?: ("multiline")[]
      /**
       * Selector filter.
       */
      selector?: ("member" | "method" | "property")
      /**
       * Regular expression.
       */
      elementValuePattern?: (({
        /**
         * Regular expression pattern.
         */
        pattern: string
        /**
         * Regular expression flags.
         */
        flags?: string
      } | string)[] | ({
        /**
         * Regular expression pattern.
         */
        pattern: string
        /**
         * Regular expression flags.
         */
        flags?: string
      } | string))
    })[]]
  } | {
    /**
     * Fallback sort order.
     */
    fallbackSort?: {
      /**
       * Specifies the sorting method.
       */
      type: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order")
      /**
       * Specifies whether to sort items in ascending or descending order.
       */
      order?: ("asc" | "desc")
      sortBy?: ("name" | "value")
    }
    /**
     * Specifies the sorting method.
     */
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order")
    /**
     * Custom group name.
     */
    groupName: string
    newlinesInside?: ("ignore" | number)
    /**
     * Specifies whether to sort items in ascending or descending order.
     */
    order?: ("asc" | "desc")
    sortBy?: ("name" | "value")
    /**
     * Regular expression.
     */
    elementNamePattern?: (({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)[] | ({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string))
    /**
     * Modifier filters.
     */
    modifiers?: ("multiline")[]
    /**
     * Selector filter.
     */
    selector?: ("member" | "method" | "property")
    /**
     * Regular expression.
     */
    elementValuePattern?: (({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)[] | ({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string))
  })[]
  newlinesInside?: (("ignore" | number) | "newlinesBetween")
  /**
   * Specifies a list of groups for sorting.
   */
  groups?: (string | [string, ...(string)[]] | {
    newlinesBetween: ("ignore" | number)
  } | {
    group: (string | [string, ...(string)[]])
    /**
     * Fallback sort order.
     */
    fallbackSort?: {
      /**
       * Specifies the sorting method.
       */
      type: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order")
      /**
       * Specifies whether to sort items in ascending or descending order.
       */
      order?: ("asc" | "desc")
      sortBy?: ("name" | "value")
    }
    /**
     * Specifies a comment to enforce above the group.
     */
    commentAbove?: string
    /**
     * Specifies the sorting method.
     */
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order")
    newlinesInside?: ("ignore" | number)
    /**
     * Specifies whether to sort items in ascending or descending order.
     */
    order?: ("asc" | "desc")
    sortBy?: ("name" | "value")
  })[]
  newlinesBetween?: ("ignore" | number)
  /**
   * Specifies filters to match a particular options configuration for a given element to sort.
   */
  useConfigurationIf?: {
    /**
     * Regular expression.
     */
    allNamesMatchPattern?: (({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)[] | ({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string))
    /**
     * Specifies whether to only match destructured objects or regular objects.
     */
    objectType?: ("destructured" | "non-destructured")
    /**
     * Specifies whether to only match objects that have exclusively numeric keys.
     */
    hasNumericKeysOnly?: boolean
    /**
     * Regular expression.
     */
    declarationCommentMatchesPattern?: (({
      scope?: ("shallow" | "deep")
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)[] | ({
      scope?: ("shallow" | "deep")
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string))
    /**
     * Regular expression.
     */
    callingFunctionNamePattern?: (({
      scope?: ("shallow" | "deep")
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)[] | ({
      scope?: ("shallow" | "deep")
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string))
    /**
     * Specifies an AST selector to match elements for conditional configuration.
     */
    matchesAstSelector?: string
    /**
     * Regular expression.
     */
    declarationMatchesPattern?: (({
      scope?: ("shallow" | "deep")
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)[] | ({
      scope?: ("shallow" | "deep")
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string))
  }
  /**
   * Controls whether to partition objects by computed keys.
   */
  partitionByComputedKey?: boolean
  /**
   * Controls whether to sort styled components.
   */
  styledComponents?: boolean
  /**
   * Enables experimental dependency detection for sorting rules that support it.
   */
  useExperimentalDependencyDetection?: boolean
  /**
   * Regular expression.
   */
  ignoreCallbackDependenciesPatterns?: (({
    /**
     * Regular expression pattern.
     */
    pattern: string
    /**
     * Regular expression flags.
     */
    flags?: string
  } | string)[] | ({
    /**
     * Regular expression pattern.
     */
    pattern: string
    /**
     * Regular expression flags.
     */
    flags?: string
  } | string))
  /**
   * Enables the use of comments to separate the nodes into logical groups.
   */
  partitionByComment?: (boolean | (({
    /**
     * Regular expression pattern.
     */
    pattern: string
    /**
     * Regular expression flags.
     */
    flags?: string
  } | string)[] | ({
    /**
     * Regular expression pattern.
     */
    pattern: string
    /**
     * Regular expression flags.
     */
    flags?: string
  } | string)) | {
    /**
     * Enables specific block comments to separate the nodes.
     */
    block?: (boolean | (({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)[] | ({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)))
    /**
     * Enables specific line comments to separate the nodes.
     */
    line?: (boolean | (({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)[] | ({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)))
  })
  /**
   * Enables the use of newlines to separate the nodes into logical groups.
   */
  partitionByNewLine?: boolean
}[]

}
declare namespace R20 {
type Options = {
  /**
   * Fallback sort order.
   */
  fallbackSort?: {
    /**
     * Specifies the sorting method.
     */
    type: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order")
    /**
     * Specifies whether to sort items in ascending or descending order.
     */
    order?: ("asc" | "desc")
  }
  /**
   * Specifies the sorting method.
   */
  type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order")
  /**
   * Specifies whether to trim, remove, or keep special characters before sorting.
   */
  specialCharacters?: ("remove" | "trim" | "keep")
  /**
   * Controls whether sorting should be case-sensitive or not.
   */
  ignoreCase?: boolean
  /**
   * Used only when the `type` option is set to `'custom'`. Specifies the custom alphabet for sorting.
   */
  alphabet?: string
  /**
   * Specifies the sorting locales.
   */
  locales?: (string | string[])
  /**
   * Specifies whether to sort items in ascending or descending order.
   */
  order?: ("asc" | "desc")
  /**
   * Defines custom groups to match specific members.
   */
  customGroups?: ({
    /**
     * Fallback sort order.
     */
    fallbackSort?: {
      /**
       * Specifies the sorting method.
       */
      type: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order")
      /**
       * Specifies whether to sort items in ascending or descending order.
       */
      order?: ("asc" | "desc")
    }
    /**
     * Specifies the sorting method.
     */
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order")
    /**
     * Custom group name.
     */
    groupName: string
    newlinesInside?: ("ignore" | number)
    /**
     * Specifies whether to sort items in ascending or descending order.
     */
    order?: ("asc" | "desc")
    /**
     * @minItems 1
     */
    anyOf: [{
      /**
       * Regular expression.
       */
      elementNamePattern?: (({
        /**
         * Regular expression pattern.
         */
        pattern: string
        /**
         * Regular expression flags.
         */
        flags?: string
      } | string)[] | ({
        /**
         * Regular expression pattern.
         */
        pattern: string
        /**
         * Regular expression flags.
         */
        flags?: string
      } | string))
      /**
       * Selector filter.
       */
      selector?: "literal"
    }, ...({
      /**
       * Regular expression.
       */
      elementNamePattern?: (({
        /**
         * Regular expression pattern.
         */
        pattern: string
        /**
         * Regular expression flags.
         */
        flags?: string
      } | string)[] | ({
        /**
         * Regular expression pattern.
         */
        pattern: string
        /**
         * Regular expression flags.
         */
        flags?: string
      } | string))
      /**
       * Selector filter.
       */
      selector?: "literal"
    })[]]
  } | {
    /**
     * Fallback sort order.
     */
    fallbackSort?: {
      /**
       * Specifies the sorting method.
       */
      type: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order")
      /**
       * Specifies whether to sort items in ascending or descending order.
       */
      order?: ("asc" | "desc")
    }
    /**
     * Specifies the sorting method.
     */
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order")
    /**
     * Custom group name.
     */
    groupName: string
    newlinesInside?: ("ignore" | number)
    /**
     * Specifies whether to sort items in ascending or descending order.
     */
    order?: ("asc" | "desc")
    /**
     * Regular expression.
     */
    elementNamePattern?: (({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)[] | ({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string))
    /**
     * Selector filter.
     */
    selector?: "literal"
  })[]
  newlinesInside?: (("ignore" | number) | "newlinesBetween")
  /**
   * Specifies a list of groups for sorting.
   */
  groups?: (string | [string, ...(string)[]] | {
    newlinesBetween: ("ignore" | number)
  } | {
    group: (string | [string, ...(string)[]])
    /**
     * Fallback sort order.
     */
    fallbackSort?: {
      /**
       * Specifies the sorting method.
       */
      type: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order")
      /**
       * Specifies whether to sort items in ascending or descending order.
       */
      order?: ("asc" | "desc")
    }
    /**
     * Specifies a comment to enforce above the group.
     */
    commentAbove?: string
    /**
     * Specifies the sorting method.
     */
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order")
    newlinesInside?: ("ignore" | number)
    /**
     * Specifies whether to sort items in ascending or descending order.
     */
    order?: ("asc" | "desc")
  })[]
  newlinesBetween?: ("ignore" | number)
  /**
   * Specifies filters to match a particular options configuration for a given element to sort.
   */
  useConfigurationIf?: {
    /**
     * Regular expression.
     */
    allNamesMatchPattern?: (({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)[] | ({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string))
    /**
     * Specifies an AST selector to match elements for conditional configuration.
     */
    matchesAstSelector?: string
  }
  /**
   * Enables the use of comments to separate the nodes into logical groups.
   */
  partitionByComment?: (boolean | (({
    /**
     * Regular expression pattern.
     */
    pattern: string
    /**
     * Regular expression flags.
     */
    flags?: string
  } | string)[] | ({
    /**
     * Regular expression pattern.
     */
    pattern: string
    /**
     * Regular expression flags.
     */
    flags?: string
  } | string)) | {
    /**
     * Enables specific block comments to separate the nodes.
     */
    block?: (boolean | (({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)[] | ({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)))
    /**
     * Enables specific line comments to separate the nodes.
     */
    line?: (boolean | (({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)[] | ({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)))
  })
  /**
   * Enables the use of newlines to separate the nodes into logical groups.
   */
  partitionByNewLine?: boolean
}[]

}
declare namespace R21 {
/**
 * @minItems 0
 * @maxItems 1
 */
type Options = []|[{
  /**
   * Fallback sort order.
   */
  fallbackSort?: {
    /**
     * Specifies the sorting method.
     */
    type: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order")
    /**
     * Specifies whether to sort items in ascending or descending order.
     */
    order?: ("asc" | "desc")
  }
  /**
   * Specifies the sorting method.
   */
  type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order")
  /**
   * Specifies whether to trim, remove, or keep special characters before sorting.
   */
  specialCharacters?: ("remove" | "trim" | "keep")
  /**
   * Controls whether sorting should be case-sensitive or not.
   */
  ignoreCase?: boolean
  /**
   * Used only when the `type` option is set to `'custom'`. Specifies the custom alphabet for sorting.
   */
  alphabet?: string
  /**
   * Specifies the sorting locales.
   */
  locales?: (string | string[])
  /**
   * Specifies whether to sort items in ascending or descending order.
   */
  order?: ("asc" | "desc")
}]

}
declare namespace R22 {
type Options = {
  /**
   * Fallback sort order.
   */
  fallbackSort?: {
    /**
     * Specifies the sorting method.
     */
    type: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order")
    /**
     * Specifies whether to sort items in ascending or descending order.
     */
    order?: ("asc" | "desc")
  }
  /**
   * Specifies the sorting method.
   */
  type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order")
  /**
   * Specifies whether to trim, remove, or keep special characters before sorting.
   */
  specialCharacters?: ("remove" | "trim" | "keep")
  /**
   * Controls whether sorting should be case-sensitive or not.
   */
  ignoreCase?: boolean
  /**
   * Used only when the `type` option is set to `'custom'`. Specifies the custom alphabet for sorting.
   */
  alphabet?: string
  /**
   * Specifies the sorting locales.
   */
  locales?: (string | string[])
  /**
   * Specifies whether to sort items in ascending or descending order.
   */
  order?: ("asc" | "desc")
  /**
   * Defines custom groups to match specific members.
   */
  customGroups?: ({
    /**
     * Fallback sort order.
     */
    fallbackSort?: {
      /**
       * Specifies the sorting method.
       */
      type: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order")
      /**
       * Specifies whether to sort items in ascending or descending order.
       */
      order?: ("asc" | "desc")
    }
    /**
     * Specifies the sorting method.
     */
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order")
    /**
     * Custom group name.
     */
    groupName: string
    newlinesInside?: ("ignore" | number)
    /**
     * Specifies whether to sort items in ascending or descending order.
     */
    order?: ("asc" | "desc")
    /**
     * @minItems 1
     */
    anyOf: [{
      /**
       * Regular expression.
       */
      elementNamePattern?: (({
        /**
         * Regular expression pattern.
         */
        pattern: string
        /**
         * Regular expression flags.
         */
        flags?: string
      } | string)[] | ({
        /**
         * Regular expression pattern.
         */
        pattern: string
        /**
         * Regular expression flags.
         */
        flags?: string
      } | string))
      /**
       * Selector filter.
       */
      selector?: ("intersection" | "conditional" | "function" | "operator" | "keyword" | "literal" | "nullish" | "import" | "object" | "named" | "tuple" | "union")
    }, ...({
      /**
       * Regular expression.
       */
      elementNamePattern?: (({
        /**
         * Regular expression pattern.
         */
        pattern: string
        /**
         * Regular expression flags.
         */
        flags?: string
      } | string)[] | ({
        /**
         * Regular expression pattern.
         */
        pattern: string
        /**
         * Regular expression flags.
         */
        flags?: string
      } | string))
      /**
       * Selector filter.
       */
      selector?: ("intersection" | "conditional" | "function" | "operator" | "keyword" | "literal" | "nullish" | "import" | "object" | "named" | "tuple" | "union")
    })[]]
  } | {
    /**
     * Fallback sort order.
     */
    fallbackSort?: {
      /**
       * Specifies the sorting method.
       */
      type: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order")
      /**
       * Specifies whether to sort items in ascending or descending order.
       */
      order?: ("asc" | "desc")
    }
    /**
     * Specifies the sorting method.
     */
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order")
    /**
     * Custom group name.
     */
    groupName: string
    newlinesInside?: ("ignore" | number)
    /**
     * Specifies whether to sort items in ascending or descending order.
     */
    order?: ("asc" | "desc")
    /**
     * Regular expression.
     */
    elementNamePattern?: (({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)[] | ({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string))
    /**
     * Selector filter.
     */
    selector?: ("intersection" | "conditional" | "function" | "operator" | "keyword" | "literal" | "nullish" | "import" | "object" | "named" | "tuple" | "union")
  })[]
  newlinesInside?: (("ignore" | number) | "newlinesBetween")
  /**
   * Specifies a list of groups for sorting.
   */
  groups?: (string | [string, ...(string)[]] | {
    newlinesBetween: ("ignore" | number)
  } | {
    group: (string | [string, ...(string)[]])
    /**
     * Fallback sort order.
     */
    fallbackSort?: {
      /**
       * Specifies the sorting method.
       */
      type: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order")
      /**
       * Specifies whether to sort items in ascending or descending order.
       */
      order?: ("asc" | "desc")
    }
    /**
     * Specifies a comment to enforce above the group.
     */
    commentAbove?: string
    /**
     * Specifies the sorting method.
     */
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order")
    newlinesInside?: ("ignore" | number)
    /**
     * Specifies whether to sort items in ascending or descending order.
     */
    order?: ("asc" | "desc")
  })[]
  newlinesBetween?: ("ignore" | number)
  /**
   * Specifies filters to match a particular options configuration for a given element to sort.
   */
  useConfigurationIf?: {
    /**
     * Regular expression.
     */
    allNamesMatchPattern?: (({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)[] | ({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string))
    /**
     * Specifies an AST selector to match elements for conditional configuration.
     */
    matchesAstSelector?: string
  }
  /**
   * Enables the use of comments to separate the nodes into logical groups.
   */
  partitionByComment?: (boolean | (({
    /**
     * Regular expression pattern.
     */
    pattern: string
    /**
     * Regular expression flags.
     */
    flags?: string
  } | string)[] | ({
    /**
     * Regular expression pattern.
     */
    pattern: string
    /**
     * Regular expression flags.
     */
    flags?: string
  } | string)) | {
    /**
     * Enables specific block comments to separate the nodes.
     */
    block?: (boolean | (({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)[] | ({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)))
    /**
     * Enables specific line comments to separate the nodes.
     */
    line?: (boolean | (({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)[] | ({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)))
  })
  /**
   * Enables the use of newlines to separate the nodes into logical groups.
   */
  partitionByNewLine?: boolean
}[]

}
declare namespace R23 {
type Options = {
  /**
   * Fallback sort order.
   */
  fallbackSort?: {
    /**
     * Specifies the sorting method.
     */
    type: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order")
    /**
     * Specifies whether to sort items in ascending or descending order.
     */
    order?: ("asc" | "desc")
  }
  /**
   * Specifies the sorting method.
   */
  type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order")
  /**
   * Specifies whether to trim, remove, or keep special characters before sorting.
   */
  specialCharacters?: ("remove" | "trim" | "keep")
  /**
   * Controls whether sorting should be case-sensitive or not.
   */
  ignoreCase?: boolean
  /**
   * Used only when the `type` option is set to `'custom'`. Specifies the custom alphabet for sorting.
   */
  alphabet?: string
  /**
   * Specifies the sorting locales.
   */
  locales?: (string | string[])
  /**
   * Specifies whether to sort items in ascending or descending order.
   */
  order?: ("asc" | "desc")
  /**
   * Defines custom groups to match specific members.
   */
  customGroups?: ({
    /**
     * Fallback sort order.
     */
    fallbackSort?: {
      /**
       * Specifies the sorting method.
       */
      type: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order")
      /**
       * Specifies whether to sort items in ascending or descending order.
       */
      order?: ("asc" | "desc")
    }
    /**
     * Specifies the sorting method.
     */
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order")
    /**
     * Custom group name.
     */
    groupName: string
    newlinesInside?: ("ignore" | number)
    /**
     * Specifies whether to sort items in ascending or descending order.
     */
    order?: ("asc" | "desc")
    /**
     * @minItems 1
     */
    anyOf: [{
      /**
       * Regular expression.
       */
      elementNamePattern?: (({
        /**
         * Regular expression pattern.
         */
        pattern: string
        /**
         * Regular expression flags.
         */
        flags?: string
      } | string)[] | ({
        /**
         * Regular expression pattern.
         */
        pattern: string
        /**
         * Regular expression flags.
         */
        flags?: string
      } | string))
      /**
       * Selector filter.
       */
      selector?: ("initialized" | "uninitialized")
    }, ...({
      /**
       * Regular expression.
       */
      elementNamePattern?: (({
        /**
         * Regular expression pattern.
         */
        pattern: string
        /**
         * Regular expression flags.
         */
        flags?: string
      } | string)[] | ({
        /**
         * Regular expression pattern.
         */
        pattern: string
        /**
         * Regular expression flags.
         */
        flags?: string
      } | string))
      /**
       * Selector filter.
       */
      selector?: ("initialized" | "uninitialized")
    })[]]
  } | {
    /**
     * Fallback sort order.
     */
    fallbackSort?: {
      /**
       * Specifies the sorting method.
       */
      type: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order")
      /**
       * Specifies whether to sort items in ascending or descending order.
       */
      order?: ("asc" | "desc")
    }
    /**
     * Specifies the sorting method.
     */
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order")
    /**
     * Custom group name.
     */
    groupName: string
    newlinesInside?: ("ignore" | number)
    /**
     * Specifies whether to sort items in ascending or descending order.
     */
    order?: ("asc" | "desc")
    /**
     * Regular expression.
     */
    elementNamePattern?: (({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)[] | ({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string))
    /**
     * Selector filter.
     */
    selector?: ("initialized" | "uninitialized")
  })[]
  newlinesInside?: (("ignore" | number) | "newlinesBetween")
  /**
   * Specifies a list of groups for sorting.
   */
  groups?: (string | [string, ...(string)[]] | {
    newlinesBetween: ("ignore" | number)
  } | {
    group: (string | [string, ...(string)[]])
    /**
     * Fallback sort order.
     */
    fallbackSort?: {
      /**
       * Specifies the sorting method.
       */
      type: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order")
      /**
       * Specifies whether to sort items in ascending or descending order.
       */
      order?: ("asc" | "desc")
    }
    /**
     * Specifies a comment to enforce above the group.
     */
    commentAbove?: string
    /**
     * Specifies the sorting method.
     */
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order")
    newlinesInside?: ("ignore" | number)
    /**
     * Specifies whether to sort items in ascending or descending order.
     */
    order?: ("asc" | "desc")
  })[]
  newlinesBetween?: ("ignore" | number)
  /**
   * Specifies filters to match a particular options configuration for a given element to sort.
   */
  useConfigurationIf?: {
    /**
     * Regular expression.
     */
    allNamesMatchPattern?: (({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)[] | ({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string))
    /**
     * Specifies an AST selector to match elements for conditional configuration.
     */
    matchesAstSelector?: string
  }
  /**
   * Enables experimental dependency detection for sorting rules that support it.
   */
  useExperimentalDependencyDetection?: boolean
  /**
   * Regular expression.
   */
  ignoreCallbackDependenciesPatterns?: (({
    /**
     * Regular expression pattern.
     */
    pattern: string
    /**
     * Regular expression flags.
     */
    flags?: string
  } | string)[] | ({
    /**
     * Regular expression pattern.
     */
    pattern: string
    /**
     * Regular expression flags.
     */
    flags?: string
  } | string))
  /**
   * Enables the use of comments to separate the nodes into logical groups.
   */
  partitionByComment?: (boolean | (({
    /**
     * Regular expression pattern.
     */
    pattern: string
    /**
     * Regular expression flags.
     */
    flags?: string
  } | string)[] | ({
    /**
     * Regular expression pattern.
     */
    pattern: string
    /**
     * Regular expression flags.
     */
    flags?: string
  } | string)) | {
    /**
     * Enables specific block comments to separate the nodes.
     */
    block?: (boolean | (({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)[] | ({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)))
    /**
     * Enables specific line comments to separate the nodes.
     */
    line?: (boolean | (({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)[] | ({
      /**
       * Regular expression pattern.
       */
      pattern: string
      /**
       * Regular expression flags.
       */
      flags?: string
    } | string)))
  })
  /**
   * Enables the use of newlines to separate the nodes into logical groups.
   */
  partitionByNewLine?: boolean
}[]

}
export type RuleOptions = {
  "perfectionist/sort-array-includes": R0.Options;
  "perfectionist/sort-arrays": R1.Options;
  "perfectionist/sort-classes": R2.Options;
  "perfectionist/sort-constructor-parameters": R3.Options;
  "perfectionist/sort-decorators": R4.Options;
  "perfectionist/sort-enums": R5.Options;
  "perfectionist/sort-export-attributes": R6.Options;
  "perfectionist/sort-exports": R7.Options;
  "perfectionist/sort-heritage-clauses": R8.Options;
  "perfectionist/sort-import-attributes": R9.Options;
  "perfectionist/sort-imports": R10.Options;
  "perfectionist/sort-interfaces": R11.Options;
  "perfectionist/sort-intersection-types": R12.Options;
  "perfectionist/sort-jsx-props": R13.Options;
  "perfectionist/sort-maps": R14.Options;
  "perfectionist/sort-modules": R15.Options;
  "perfectionist/sort-named-exports": R16.Options;
  "perfectionist/sort-named-imports": R17.Options;
  "perfectionist/sort-object-types": R18.Options;
  "perfectionist/sort-objects": R19.Options;
  "perfectionist/sort-sets": R20.Options;
  "perfectionist/sort-switch-case": R21.Options;
  "perfectionist/sort-union-types": R22.Options;
  "perfectionist/sort-variable-declarations": R23.Options;
};

export type TypedRuleIds = never;
