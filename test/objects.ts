import ava from 'ava';
import { Type } from '../dist';

ava('object(generic)', (test): void => {
	test.is(new Type({}).toString(), 'any');
});

ava('object(custom)', (test): void => {
	class Foo {}
	test.is(new Type(new Foo()).toString(), 'Foo');
});
