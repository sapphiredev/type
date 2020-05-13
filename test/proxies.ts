import ava from 'ava';
import { Type } from '../dist';

ava('proxy(object)', (test): void => {
	const proxy = new Proxy({}, {});

	test.is(new Type(proxy).toString(), 'Proxy<Record>');
});

ava('proxy(function)', (test): void => {
	const proxy = new Proxy((): void => {}, {}); // eslint-disable-line @typescript-eslint/no-empty-function

	test.is(new Type(proxy).toString(), 'Proxy<Function(0-arity)>');
});
