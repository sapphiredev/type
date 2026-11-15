import { Type } from '../src/lib/index.js';

describe('Promises', () => {
	test('promise(resolve)', () => {
		expect(new Type(Promise.resolve(null)).toString()).toBe('Promise<null>');
	});
});
