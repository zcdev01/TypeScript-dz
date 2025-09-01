const user = {
	name: "Vasiliy",
	age: 8,
	skills: ['typescript', 'javascript']
}

interface User {
	name: string,
	age: number,
	skills: string[]
}

const pickObjectKeys = <T, K extends keyof T>(data: T, keys: K[]): Pick<T, K> => {
    const res = {} as Pick<T, K>;

	for (let key of keys) {
		res[key] = data[key]
	}

	return res;
}

const res = pickObjectKeys<User, keyof User>(user, ['age', 'name']);

console.log(res)