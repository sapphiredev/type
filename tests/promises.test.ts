import { Type } from '../src/lib/index.js';

describe('Promises', () => {
	test('promise(resolve)', () => {
		const resolves = () => Promise.resolve(null);

		expect(new Type(resolves()).toString()).toBe('Promise<null>');
	});
});
