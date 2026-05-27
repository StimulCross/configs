import type { ConfigNames, OptionsConfig, TypedFlatConfigItem } from '@antfu/eslint-config';
import type { Linter } from 'eslint';
import type { Awaitable, FlatConfigComposer } from 'eslint-flat-config-utils';
export declare function factory(options?: OptionsConfig & Omit<TypedFlatConfigItem, 'files' | 'ignores'>, ...userConfigs: Awaitable<TypedFlatConfigItem | TypedFlatConfigItem[] | FlatConfigComposer<any, any> | Linter.Config[]>[]): Promise<FlatConfigComposer<TypedFlatConfigItem, ConfigNames>>;
//# sourceMappingURL=factory.d.ts.map