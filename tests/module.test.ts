import * as discordjs from 'discord.js';
import { Type } from '../src/lib/index.js';

describe('Modules', () => {
	test('discord.js', () => {
		expect(new Type(discordjs).toString()).toBe(
			'Proxy<Record<string, Array<string> | AsyncFunction(1-arity) | AsyncFunction(7-arity) | Function | Function(0-arity) | Function(1-arity) | Function(2-arity) | Function(3-arity) | Function(4-arity) | Function(5-arity) | Function(6-arity) | GeneratorFunction(1-arity) | Record<string, Array<string> | AsyncFunction(1-arity) | AsyncFunction(7-arity) | Function | Function(0-arity) | Function(1-arity) | Function(2-arity) | Function(3-arity) | Function(4-arity) | Function(5-arity) | Function(6-arity) | GeneratorFunction(1-arity) | Record<string, number | string> | Set<string> | Snowflake | string> | Set<string> | Snowflake | string | void>>'
		);
	});
});
