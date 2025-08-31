const obj: Record<string, number> = {
	a: 1,
	b: 2,
	c: 3,
	d: 123,
	f: 55
}


const swapKeysAndValues = <K extends string | number, V extends string | number>(obj: Record<K, V>): Record<V, K> => {
	let data = {} as Record<V, K>

	for (const key in obj) {
		const value = obj[key];
		data[value] = key;
	}

	return data
}

console.log(swapKeysAndValues(obj))