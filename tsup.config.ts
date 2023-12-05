import { defineConfig, type Options } from 'tsup';

const baseOptions: Options = {
	clean: true,
	entry: ['src/lib/index.ts'],
	dts: true,
	minify: false,
	skipNodeModulesBundle: true,
	sourcemap: true,
	target: 'es2021',
	tsconfig: 'src/tsconfig.json',
	keepNames: true,
	treeshake: true
};

export default [
	defineConfig({
		...baseOptions,
		outDir: 'dist/cjs',
		format: 'cjs',
		outExtension: () => ({ js: '.cjs' })
	}),
	defineConfig({
		...baseOptions,
		outDir: 'dist/esm',
		format: 'esm',
		shims: true,
		esbuildOptions: (options, context) => {
			switch (context.format) {
				case 'esm': {
					options.banner = {
						js: [
							//
							"import { createRequire } from 'node:module';",
							'const require = createRequire(import.meta.url);'
						].join('\n')
					};
					break;
				}
				// If it's not esm then we do nothing
				default: {
					break;
				}
			}
		}
	})
];
