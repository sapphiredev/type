import ava from 'ava';
import { Type } from '../src';

ava('function(empty)', (test): void => {
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	test.is(new Type(() => {}).toString(), 'Function(0-arity)');
});

ava('function(two args)', (test): void => {
	test.is(new Type((a: number, b: number): number => a + b).toString(), 'Function(2-arity)');
});
