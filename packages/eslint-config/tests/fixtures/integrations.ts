import type { ESLint, Rule } from 'eslint'
import typescript from '@typescript-eslint/eslint-plugin'
import { defineIntegration } from '../../src/index.ts'

export interface WordOptions {
	names: string[]
	severity: 'warn' | 'error'
}
export interface WordRules { 'words/restricted': [{ names: string[] }] }

const restricted: Rule.RuleModule = {
	meta: {
		type: 'problem',
		schema: [
			{
				type: 'object',
				properties: {
					names: {
						type: 'array',
						items: { type: 'string' },
					},
				},
				required: ['names'],
				additionalProperties: false,
			},
		],
		messages: { forbidden: 'Identifier {{name}} is restricted.' },
	},
	create(context) {
		const options = context.options[0] as Pick<WordOptions, 'names'>

		return {
			Identifier(node) {
				if (options.names.includes(node.name)) {
					context.report({
						node,
						messageId: 'forbidden',
						data: { name: node.name },
					})
				}
			},
		}
	},
}

export const wordPlugin: ESLint.Plugin = {
	rules: { restricted },
}
export const words = defineIntegration<WordOptions, WordRules>()({
	id: 'words',
	defaults: {
		names: ['banned'],
		severity: 'error',
	},
	plugins: { words: wordPlugin },
	ruleMeta: { 'words/restricted': {} },
	configure(options, context) {
		if (context.language !== 'javascript' && context.language !== 'typescript')
			return []

		return [
			{
				name: 'identifiers',
				config: {
					rules: {
						'words/restricted': [
							options.severity,
							{ names: options.names },
						],
					},
				},
			},
		]
	},
})

export const environment = defineIntegration()({
	id: 'environment',
	defaults: {},
	ruleMeta: {},
	configure: () => [
		{
			name: 'globals',
			config: {
				languageOptions: {
					globals: { projectToken: 'readonly' },
				},
			},
		},
	],
})

export const preprocess = defineIntegration()({
	id: 'preprocess',
	defaults: {},
	ruleMeta: {},
	configure: () => [
		{
			name: 'tokens',
			config: {
				processor: {
					preprocess: text => [
						text.replaceAll('TOKEN()', '1'),
					],
					postprocess: messages => messages.flat(),
				},
			},
		},
	],
})

const floatingPromises = typescript.rules['no-floating-promises']

if (!floatingPromises)
	throw new Error('The fixture requires the real typescript-eslint no-floating-promises rule.')

export const typed = defineIntegration<Record<never, never>, { 'typed/floating-promise': [] }>()({
	id: 'typed',
	defaults: {},
	plugins: {
		typed: {
			rules: { 'floating-promise': floatingPromises },
		},
	},
	ruleMeta: {
		'typed/floating-promise': {
			requires: ['typescriptSyntax', 'typeInformation'],
		},
	},
	configure: () => [
		{
			name: 'promises',
			requires: ['typescriptSyntax', 'typeInformation'],
			config: {
				rules: { 'typed/floating-promise': 'error' },
			},
		},
	],
})
