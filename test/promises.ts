import ava from 'ava';
import { Type } from '../dist'

ava('promise(resolve)', (test): void => {
    const resolves = () => Promise.resolve(null);

    test.is(new Type(resolves()).toString(), 'Promise<null>');
});
