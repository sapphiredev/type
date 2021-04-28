declare module '@mapbox/node-pre-gyp' {
	/**
	 * Resolves the bindings path for the current operating system
	 * @param path The path to the package.json file with the bindings information
	 */
	function find(path: string): string;
}
