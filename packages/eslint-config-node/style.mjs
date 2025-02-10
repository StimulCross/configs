import base from '@stimulcross/eslint-config-base/style';

/** @type {import("eslint").Linter.Config} */
export const config = {
	...base,

	plugins: {
		...base.plugins,
	},

	rules: {
		...base.rules,

		/**
		 * Enforce specific import styles per module.
		 *
		 * Sometimes a module contains unrelated functions, like util, thus it is a good practice to enforce
		 * destructuring or named imports here. Other times, in modules like path, it is good to use default import
		 * as they have similar functions, all likely to be utilized.
		 *
		 * This rule defines 4 import styles:
		 *
		 *     unassigned - import 'foo' or require('foo')
		 *     default - import path from 'path' or const path = require('path')
		 *     namespace - import * as path from 'path' or const path = require('path')
		 *     named - import {inspect} from 'util' or const {inspect} = require('util')
		 */
		// 'unicorn/import-style': [
		// 	'warn',
		// 	{
		// 		styles: {
		// 			path: {
		// 				named: true,
		// 			},
		// 		},
		// 	},
		// ],

		/**
		 * Prefer using the node: protocol when importing Node.js builtin modules.
		 */
		'unicorn/prefer-node-protocol': 'error',

		/**
		 * Enforce consistent case for text encoding identifiers.
		 *
		 *     Enforce 'utf8' for UTF-8 encoding.
		 *     Enforce 'ascii' for ASCII encoding.
		 *
		 * This rule only auto-fix encoding in fs.readFile() and fs.readFileSync().
		 */
		'unicorn/text-encoding-identifier-case': 'error',
	},
};

export default config;
