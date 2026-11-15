import type {
	BuildContext,
	Input,
	Integration,
	IntegrationDefinition,
	Members,
	Preset,
	RuleInfo,
	RuleOptions,
	RuntimeIntegration,
	RuntimeLayer,
	RuntimePreset,
	TypedRuleIds,
} from '../types/index.ts'
import { assertIntegration, assertPreset, integrations, presets } from '../utils/branding.ts'
import { copy } from '../utils/copy.ts'

/**
 * Curried type parameters preserve the literal id while accepting a generated RuleOptions map.
 */
export function defineIntegration<TOptions extends object = Record<never, never>, TRules extends RuleOptions<keyof TRules> = Record<never, never>, TTyped extends Extract<keyof TRules, string> = never>() {
	return function<const TId extends string, const TMeta extends Record<Extract<keyof TRules, string>, RuleInfo>>(definition: Omit<IntegrationDefinition<TId, TOptions, TRules>, 'ruleMeta'> & { ruleMeta: TMeta }): Integration<TId, TOptions, TRules, TTyped | Extract<TypedRuleIds<TMeta>, string>> {
		if (!definition.id || typeof definition.configure !== 'function')
			throw new TypeError('An integration needs an id and configure factory.')

		const value: RuntimeIntegration = {
			id: definition.id,
			...(definition.plugins
				? {
						plugins: { ...definition.plugins },
					}
				: {}),
			...(definition.overridesScope
				? {
						overridesScope: copy(definition.overridesScope),
					}
				: {}),
			defaults: copy(definition.defaults),
			ruleMeta: copy(definition.ruleMeta),
			configure: (options: object, context: BuildContext) => definition.configure(options as TOptions, context),
		}
		integrations.add(value)

		// The symbol carries types only; runtime branding is checked by the WeakSet.
		return value as Integration<TId, TOptions, TRules, TTyped | Extract<TypedRuleIds<TMeta>, string>>
	}
}

export function definePreset<
	const TUses extends readonly RuntimeIntegration[] = readonly [],
	const TParents extends readonly Preset<RuntimeIntegration>[] = readonly [],
>(input: Input<TUses, TParents>): Preset<TUses[number] | Members<TParents[number]>> {
	const { use = [], extends: parents = [], globalIgnores = [], ...layer } = input

	for (const integration of use)
		assertIntegration(integration)

	for (const parent of parents)
		assertPreset(parent)

	if ('rootDir' in input)
		throw new TypeError('rootDir belongs to defineConfig, not definePreset.')

	const value: RuntimePreset = {
		input: copy(layer as RuntimeLayer),
		parents: [...parents],
		use: [...use],
		globalIgnores: [...globalIgnores],
	}
	presets.add(value)

	return value as Preset<TUses[number] | Members<TParents[number]>>
}
