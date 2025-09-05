declare module 'sort-by' {
	function type<T>(prop: string): (value: T) => boolean;
	function sort<T>(property: string, map?: (prop: string, value: any) => any): (a: T, b: T) => number;
	function sortBy<T>(...args: (string | ((prop: string, value: any) => any))[]): (a: T, b: T) => number;

	export = sortBy;
}