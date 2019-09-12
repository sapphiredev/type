import ava from 'ava';
import Type from '../dist';

ava('number', async (test): void => {
	test.equal(new Type(2).toString(), 'number');
});

//... others
