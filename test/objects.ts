import ava from 'ava';
import { Type } from '../dist';

ava('object(generic)', (test): void => {
	test.is(new Type({}).toString(), 'Record');
});

ava('object(null)', (test): void => {
	test.is(new Type(null).toString(), 'null');
});

ava('object(custom)', (test): void => {
	class Foo { }
	test.is(new Type(new Foo()).toString(), 'Foo');
});

ava('object(types)', (test): void => {
	test.is(new Type({ foo: 'bar', baz: 2, hello: true }).toString(), 'Record<string, boolean | number | string>');
});

ava('object(recursive)', (test): void => {
	test.is(new Type({ foo: 'bar', hello: { baz: 'world' } }).toString(), 'Record<string, Record<string, string> | string>');
});
