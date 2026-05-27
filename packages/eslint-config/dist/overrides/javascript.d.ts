declare const _default: {
    camelcase: "off";
    'id-length': "off";
    'for-direction': "error";
    'func-style': ["error", "declaration", {
        allowArrowFunctions: true;
    }];
    'getter-return': ["error", {
        allowImplicit: true;
    }];
    'guard-for-in': "error";
    'max-classes-per-file': ["warn", number];
    'max-depth': ["warn", number];
    'max-nested-callbacks': ["error", number];
    'max-params': ["warn", number];
    'no-console': "warn";
    'no-constant-condition': ["error", {
        checkLoops: false;
    }];
    'no-dupe-else-if': "error";
    'no-empty-function': "warn";
    'no-inner-declarations': ["error", "both"];
    'no-return-assign': ["error", "except-parens"];
    'no-script-url': "error";
    'no-setter-return': "error";
    'no-shadow': ["error", {
        allow: string[];
        hoist: "functions";
        ignoreFunctionTypeParameterNameValueShadow: true;
    }];
    'no-undef': ["error", {
        typeof: true;
    }];
    'no-unused-vars': ["warn", {
        argsIgnorePattern: string;
    }];
    'no-useless-escape': "off";
    'no-useless-return': "off";
    'prefer-arrow-callback': ["error", {
        allowNamedFunctions: true;
        allowUnboundThis: false;
    }];
};
export default _default;
//# sourceMappingURL=javascript.d.ts.map