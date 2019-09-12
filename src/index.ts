// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
const { getPromiseDetails } = process.binding('util');

export default class Type {

	public value: unknown;

	public is: string;

	private parent: Type | null;

	private childKeys: Map<string, Type>;

	private childValues: Map<string, Type>;

	public constructor(value: unknown, parent: Type | null = null) {
		this.value = value;

		this.is = Type.resolve(value);

		this.parent = parent;

		this.childKeys = new Map();

		this.childValues = new Map();
	}

	private get childTypes(): string {
		if (!this.childValues.size) return '';
		return `<${(this.childKeys.size ? `${Type.list(this.childKeys)}, ` : '') + Type.list(this.childValues)}>`;
	}

	public toString(): string {
		this.check();
		return this.is + this.childTypes;
	}

	private *parents(): Generator<Type, void, unknown> {
		// eslint-disable-next-line @typescript-eslint/no-this-alias, no-cond-assign, consistent-this
		let current: Type | null = this;
		// eslint-disable-next-line no-cond-assign
		while (current = current.parent) yield current;
	}

	private isCircular(): boolean {
		for (const parent of this.parents()) if (parent.value === this.value) return true;
		return false;
	}

	private addValue(value: unknown): void {
		const child = new Type(value, this);
		this.childValues.set(child.is, child);
	}

	private addEntry([key, value]: [string, unknown]): void {
		const child = new Type(key, this);
		this.childKeys.set(child.is, child);
		this.addValue(value);
	}

	private check(): void {
		if (Object.isFrozen(this)) return;
		const promise = getPromiseDetails(this.value);
		if (typeof this.value === 'object' && this.isCircular()) this.is = `[Circular:${this.is}]`;
		else if (promise && promise[0]) this.addValue(promise[1]);
		else if (this.value instanceof Map) for (const entry of this.value) this.addEntry(entry);
		else if (Array.isArray(this.value) || this.value instanceof Set) for (const value of this.value) this.addValue(value);
		else if (this.is === 'Object') this.is = 'any';
		Object.freeze(this);
	}

	public static resolve(value: any): string {
		const type = typeof value;
		switch (type) {
			case 'object': return value === null ? 'null' : (value.constructor && value.constructor.name) || 'any';
			case 'function': return `${value.constructor.name}(${value.length}-arity)`;
			case 'undefined': return 'void';
			default: return type;
		}
	}

	private static list(values: Map<string, Type>): string {
		return values.has('any') ? 'any' : [...values.values()].sort().join(' | ');
	}

}
