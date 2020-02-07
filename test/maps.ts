import ava from 'ava';
import { Type } from '../dist';

ava('map(empty)', (test): void => {
	test.is(new Type(new Map()).toString(), 'Map');
});

ava('map(same-type)', (test): void => {
	test.is(new Type(new Map([['one', 1], ['two', 2], ['three', 3]])).toString(), 'Map<string, number>');
});

ava('map(different-type)', (test): void => {
	test.is(new Type(new Map<string, string | number>([['text', 'abc'], ['digit', 1]])).toString(), 'Map<string, number | string>');
});

ava('map(mixed with object)', (test): void => {
	test.is(new Type(new Map<string, any>([['text', 'abc'], ['digit', 1], ['object', {}]])).toString(), 'Map<string, any>');
});
