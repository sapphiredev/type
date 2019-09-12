import ava from 'ava';
import Type from '../dist';

ava('number', async (test): Promise<void> => {
	test.is(new Type(2).toString(), 'number');
});

// ... others
