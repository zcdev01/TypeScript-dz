declare module 'sort-by' {
	export function type<T>(prop: string): (value: T) => boolean;
	export function sort<T>(property: string, map?: (prop: string, value: any) => any): (a: T, b: T) => number;
	export function sortBy<T>(...args: (string | ((prop: string, value: any) => any))[]): (a: T, b: T) => number;
}