import assert from 'node:assert/strict'
import { describe, it } from 'node:test'
import { defineConfig, definePreset } from '../src/index.ts'
import { project } from './helpers.ts'

void describe('Configuration errors', () => {
	for (const rootDir of ['', '.', 'packages/api']) {
		void it(`should reject relative rootDir ${JSON.stringify(rootDir)}`, () => {
			assert.throws(() => defineConfig({ rootDir }), /absolute/)
		})
	}

	void it('should reject unknown integrations for JavaScript consumers', async t => {
		const root = await project(t)

		assert.throws(() => defineConfig({
			rootDir: root,
			// @ts-expect-error Runtime validation also protects untyped consumers.
			integrations: { missing: true },
		}), /Unknown integration missing/)
	})

	void it('should reject unknown rules rather than silently dropping them', async t => {
		const root = await project(t)

		assert.throws(() => defineConfig({
			rootDir: root,
			// @ts-expect-error Runtime validation also protects untyped consumers.
			rules: { 'unicorn/missing': 'error' },
		}), /Unknown rule unicorn\/missing/)
	})

	void it('should reject invalid type-aware modes', async t => {
		const root = await project(t)
		// @ts-expect-error Runtime validation also protects untyped consumers.
		assert.throws(() => defineConfig({ rootDir: root, typeAware: 'sometimes' }), /typeAware/)
	})

	void it('should reject consumer roots inside reusable presets', () => {
		// @ts-expect-error A preset cannot capture its author root.
		assert.throws(() => definePreset({ rootDir: '/tmp' }), /rootDir.*defineConfig/)
	})

	void it('should reject ready-made configs as managed parents', async t => {
		const root = await project(t)
		const flat = defineConfig({ rootDir: root })

		assert.throws(() => defineConfig({
			rootDir: root,
			// @ts-expect-error A flat config cannot be used as a preset.
			extends: [flat],
		}), /definePreset|preset/i)
	})

	void it('should reject parser overrides outside their owning integration', async t => {
		const root = await project(t)

		assert.throws(() => defineConfig({
			rootDir: root,
			languageOptions: {
				// @ts-expect-error Parser settings must go through their integration.
				parserOptions: { projectService: true },
			},
		}), /parserOptions.*integration/)
	})

	void it('should reject integration switches in scopes instead of silently ignoring them', async t => {
		const root = await project(t)

		assert.throws(() => defineConfig({
			rootDir: root,
			scopes: [
				{
					files: ['plain/**'],
					// @ts-expect-error Full switches require a separate configuration.
					integrations: { unicorn: false },
				},
			],
		}), /separate configurations/)
	})

	void it('should reject type-aware switches in scopes', async t => {
		const root = await project(t)

		assert.throws(() => defineConfig({
			rootDir: root,
			scopes: [
				{
					files: ['plain/**'],
					// @ts-expect-error Typed selection belongs to the complete configuration.
					typeAware: false,
				},
			],
		}), /separate configurations/)
	})

	void it('should reject parser project options that bypass managed type-aware control', async t => {
		const root = await project(t)

		assert.throws(() => defineConfig({
			rootDir: root,
			integrations: {
				typescript: {
					// @ts-expect-error Project ownership cannot be overridden through parserOptions.
					parserOptions: { project: true },
				},
			},
		}), /project.*managed|project.*integration/)
	})
})
