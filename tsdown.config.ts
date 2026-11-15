import { defineConfig } from 'tsdown';

export default defineConfig({
	clean: ['dist/**'],
	entry: ['src/lib/index.ts'],
	outDir: 'dist',
	format: 'esm',
	platform: 'node',
	dts: true,
	minify: false,
	sourcemap: true,
	target: 'es2024',
	tsconfig: 'src/tsconfig.json'
});
