import nodePreGyp from '@discordjs/node-pre-gyp';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';

declare namespace Internals {
	export function getPromiseDetails(thing: any): number[];
	export function getProxyDetails(thing: any): number[];
}

// Both this source module and the bundled entry are one directory below package.json.
const bindingPath = nodePreGyp.find(fileURLToPath(new URL('../package.json', import.meta.url)));
const require = createRequire(import.meta.url);

export const { getPromiseDetails, getProxyDetails } = require(bindingPath) as typeof Internals;
