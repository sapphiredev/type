import ava from 'ava';
import Type from '../dist';

ava('number', (test): void => {
	test.is(new Type(2).toString(), 'number');
});

ava('string', (test): void => {
	test.is(new Type('this is a string').toString(), 'string');
});

ava('boolean', (test): void => {
	test.is(new Type(true).toString(), 'boolean');

	test.is(new Type(false).toString(), 'boolean');
});

ava('symbols', (test): void => {
	test.is(new Type(Symbol()).toString(), 'symbol');
});

ava('symbols with strings', (test): void => {
	const sym1 = Symbol('1');
	const sym2 = Symbol('2');

	test.not(new Type(sym1), new Type(sym2));
});

ava('promise.resolve', (test): void => {
	const returnsPromise = (): Promise<void> => Promise.resolve(undefined);

	test.is(new Type(returnsPromise()).toString(), 'Promise<void>');
});

ava('promise(setTimeout)', (test): void => {
	const returnsPromise = (): Promise<void> => new Promise((resolve): void => { setTimeout(resolve, 5000); });


	test.is(new Type(returnsPromise()).toString(), 'Promise');
});

// ... others
