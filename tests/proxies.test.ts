import { Type } from '../src/lib/index.js';

describe('Proxies', () => {
	test('proxy(object)', () => {
		const proxy = new Proxy({}, {});
		expect(new Type(proxy).toString()).toBe('Proxy<Record>');
	});

	test('proxy(function)', () => {
		const proxy = new Proxy(() => {}, {});
		expect(new Type(proxy).toString()).toBe('Proxy<Function(0-arity)>');
	});
});
