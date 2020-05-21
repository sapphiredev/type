import ava from 'ava';
import { Type } from '../src';

ava('promise(resolve)', (test): void => {
	const resolves = (): Promise<null> => Promise.resolve(null);

	test.is(new Type(resolves()).toString(), 'Promise<null>');
});
