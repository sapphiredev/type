// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
const { getPromiseDetails } = process.binding('util');

/**
 * The class for deep checking Types
 */
export default class Type {
	/**
	 * The value to generate a deep Type of
	 * @type {*}
	 */
	public value: unknown;

	/**
	 * The shallow type of this
	 * @type {string}
	 */
	public is: string;

	/**
	 * The parent of this Type
	 * @type {?Type}
	 * @private
	 */
	private parent: Type | null;

	/**
	 * The child keys of this Type
	 * @type {Map<string, Type>}
	 * @private
	 */
	private childKeys: Map<string, Type>;

	/**
	 * The child values of this Type
	 * @type {Map<string, Type>}
	 * @private
	 */
	private childValues: Map<string, Type>;

	/**
	 * @param {*} value The value to generate a deep Type of
	 * @param {Type} [parent=null] The parent value used in recursion
	 */
	public constructor(value: unknown, parent: Type | null = null) {
		this.value = value;

		this.is = Type.resolve(value);

		this.parent = parent;

		this.childKeys = new Map();

		this.childValues = new Map();
	}

	/**
	 * The type string for the children of this Type
	 * @type {string}
	 * @readonly
	 * @private
	 */
	private get childTypes(): string {
		if (!this.childValues.size) return '';
		return `<${(this.childKeys.size ? `${Type.list(this.childKeys)}, ` : '') + Type.list(this.childValues)}>`;
	}

	/**
	 * The full type string generated.
	 * @returns {string}
	 */
	public toString(): string {
		this.check();
		return this.is + this.childTypes;
	}

	/**
	 * Walks the linked list backwards, for checking circulars.
	 * @yields {?Type}
	 * @private
	 */
	private *parents(): Generator<Type, void, unknown> {
		// eslint-disable-next-line @typescript-eslint/no-this-alias, no-cond-assign, consistent-this
		let current: Type | null = this;
		// eslint-disable-next-line no-cond-assign
		while (current = current.parent) yield current;
	}

	/**
	 * Checks if the value of this Type is a circular reference to any parent.
	 * @returns {boolean}
	 * @private
	 */
	private isCircular(): boolean {
		for (const parent of this.parents()) if (parent.value === this.value) return true;
		return false;
	}

	/**
	 * The subtype to create based on this.value's sub value.
	 * @param {*} value The sub value
	 * @private
	 */
	private addValue(value: unknown): void {
		const child = new Type(value, this);
		this.childValues.set(child.is, child);
	}

	/**
	 * The subtype to create based on this.value's entries.
	 * @param {Array<string, *>} entry The entry
	 * @private
	 */
	private addEntry([key, value]: [string, unknown]): void {
		const child = new Type(key, this);
		this.childKeys.set(child.is, child);
		this.addValue(value);
	}

	/**
	 * Get the deep type name that defines the input.
	 * @private
	 */
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

	/**
	 * Resolves the type name that defines the input.
	 * @param {*} value The value to get the type name of
	 * @returns {string}
	 */
	public static resolve(value: any): string {
		const type = typeof value;
		switch (type) {
			case 'object': return value === null ? 'null' : (value.constructor && value.constructor.name) || 'any';
			case 'function': return `${value.constructor.name}(${value.length}-arity)`;
			case 'undefined': return 'void';
			default: return type;
		}
	}

	/**
	 * Joins the list of child types.
	 * @param {Map<string, Type>} values The values to list
	 * @returns {string}
	 * @private
	 */
	private static list(values: Map<string, Type>): string {
		return values.has('any') ? 'any' : [...values.values()].sort().join(' | ');
	}

}
