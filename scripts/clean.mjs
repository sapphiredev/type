import { rm } from 'node:fs/promises';

const rootDir = new URL('../', import.meta.url);

await Promise.all([
	rm(new URL('prebuild/', rootDir), { recursive: true }), //
	rm(new URL('dist/', rootDir), { recursive: true }), //
	rm(new URL('build/', rootDir), { recursive: true }) //
]);
