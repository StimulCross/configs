declare module 'eslint-plugin-no-only-tests' {
	const plugin: {
		rules: Record<string, {
			meta?: { schema?: unknown }
			create: (context: never) => object
		}>
	}

	export default plugin
}
