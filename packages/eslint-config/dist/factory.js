import { antfu } from '@antfu/eslint-config';
import importsOverrides from './overrides/imports.js';
import javascriptOverrides from './overrides/javascript.js';
import stylisticDefaults from './overrides/stylistic.js';
import { typescriptOverrides, typescriptTypeAwareOverrides } from './overrides/typescript.js';
import unicornOverrides from './overrides/unicorn.js';
const flatConfigProps = [
    'name',
    'languageOptions',
    'linterOptions',
    'processor',
    'plugins',
    'rules',
    'settings',
];
function merge(key, options, myDefaults = {}) {
    const userGroup = typeof options[key] === 'object' ? options[key] : {};
    // eslint-disable-next-line ts/no-unsafe-assignment, ts/no-explicit-any
    const legacyOverrides = options.overrides?.[key];
    return {
        ...myDefaults,
        ...legacyOverrides,
        ...userGroup['overrides'],
    };
}
export async function factory(options, 
// eslint-disable-next-line ts/no-explicit-any
...userConfigs) {
    const userFusedConfig = {};
    const cleanOptions = { ...options };
    for (const key of flatConfigProps) {
        if (key in cleanOptions) {
            // @ts-expect-error - any
            // eslint-disable-next-line ts/no-unsafe-assignment
            userFusedConfig[key] = cleanOptions[key];
            // @ts-expect-error - any
            // eslint-disable-next-line ts/no-dynamic-delete
            delete cleanOptions[key];
        }
    }
    // js
    const userJavascript = typeof cleanOptions.javascript === 'object' ? cleanOptions.javascript : {};
    cleanOptions.javascript = {
        ...userJavascript,
        overrides: merge('javascript', cleanOptions, javascriptOverrides),
    };
    // ts
    if (cleanOptions.typescript !== false) {
        const userTypescript = typeof cleanOptions.typescript === 'object' ? cleanOptions.typescript : {};
        cleanOptions.typescript = {
            ...userTypescript,
            overrides: merge('typescript', cleanOptions, typescriptOverrides),
            overridesTypeAware: {
                ...typescriptTypeAwareOverrides,
                ...userTypescript.overridesTypeAware,
            },
        };
    }
    // stylistic
    if (cleanOptions.stylistic !== false) {
        const userStylistic = typeof cleanOptions.stylistic === 'object' ? cleanOptions.stylistic : {};
        cleanOptions.stylistic = {
            ...stylisticDefaults,
            ...userStylistic,
            overrides: merge('stylistic', cleanOptions, stylisticDefaults.overrides),
        };
    }
    else {
        cleanOptions.stylistic = false;
    }
    // imports
    if (cleanOptions.imports !== false) {
        const userImports = typeof cleanOptions.imports === 'object' ? cleanOptions.imports : {};
        cleanOptions.imports = {
            ...userImports,
            overrides: merge('imports', cleanOptions, importsOverrides),
        };
    }
    else {
        cleanOptions.imports = false;
    }
    // unicorn
    if (cleanOptions.unicorn !== false) {
        const userUnicorn = typeof cleanOptions.unicorn === 'object' ? cleanOptions.unicorn : {};
        cleanOptions.unicorn = {
            ...userUnicorn,
            overrides: merge('unicorn', cleanOptions, unicornOverrides),
            ...userUnicorn.allRecommended !== undefined ? { allRecommended: userUnicorn.allRecommended } : {},
        };
    }
    // e18e
    if (cleanOptions.e18e !== false) {
        cleanOptions.e18e = {
            modernization: true,
            moduleReplacements: true,
            performanceImprovements: true,
            ...typeof cleanOptions.e18e === 'boolean' ? {} : cleanOptions.e18e,
        };
    }
    delete cleanOptions.overrides;
    return await antfu(cleanOptions, Object.keys(userFusedConfig).length > 0 ? userFusedConfig : {}, ...userConfigs);
}
//# sourceMappingURL=factory.js.map