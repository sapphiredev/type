import { getPromiseDetails, getProxyDetails } from '../src';

describe('Internals', () => {
	describe('getPromiseDetails', () => {
		test('pending', () => {
			const promise = Promise.resolve('pending').then(() => undefined);

			void expect(getPromiseDetails(promise)).toEqual([0]);
		});

		test('resolve', () => {
			const promise = Promise.resolve(true);
			const promise2 = Promise.resolve('promise');

			expect(getPromiseDetails(promise)).toEqual([1, true]);
			expect(getPromiseDetails(promise2)).toEqual([1, 'promise']);
		});

		test('reject', () => {
			const promise = Promise.reject(new Error('kaboom'));

			expect(getPromiseDetails(promise)).toEqual([2, new Error('kaboom')]);

			// Catch the promise, otherwise Node crashes
			promise.catch(() => undefined);
		});
	});

	describe('getProxyDetails', () => {
		test('target-handler proxy', () => {
			const target = {
				message1: 'hello',
				message2: 'everyone'
			};

			const handler: ProxyHandler<{ message1: string; message2: string }> = {
				get() {
					return 'world';
				}
			};

			const proxy = new Proxy(target, handler);

			expect(getProxyDetails(proxy)).toEqual([target, handler]);
		});
	});
});
