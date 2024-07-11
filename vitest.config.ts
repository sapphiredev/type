import { configDefaults, defineConfig } from 'vitest/config';

export default defineConfig({
	test: {
		pool: 'threads',
		poolOptions: {
			threads: {
				singleThread: true
			}
		},
		globals: true,
		coverage: {
			enabled: true,
			reporter: ['text', 'lcov', 'clover'],
			exclude: [...(configDefaults.coverage.exclude ?? []), 'scripts/']
		},
		deps: {
			interopDefault: true
		}
	},
	esbuild: {
		target: 'es2021'
	}
});
