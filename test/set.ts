import ava from 'ava';
import { Type } from '../dist'

ava('set(empty)', (test): void => {
    test.is(new Type(new Set()).toString(), 'Set');
});

ava('set(same-type)', (test): void => {
    test.is(new Type(new Set([1, 2, 3])).toString(), 'Set<number>');
})

ava('set(different-type)', (test): void => {
    test.is(new Type(new Set(['abc', 1])).toString(), 'Set<number | string>');
})