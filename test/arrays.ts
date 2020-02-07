import ava from 'ava';
import { Type } from '../dist';

ava('array(empty)', (test): void => {
	test.is(new Type([]).toString(), 'Array');
});

ava('array(same-type)', (test): void => {
	test.is(new Type([1, 2, 3]).toString(), 'Array<number>');
});

ava('array(different-type)', (test): void => {
	test.is(new Type([true, 'Test', 7]).toString(), 'Array<boolean | number | string>');
});

ava('array circular', (test): void => {
	const a = [];
	const b = [a];
	a.push(b);
	test.is(new Type(a).toString(), 'Array<Array<[Circular:Array]>>');
});
