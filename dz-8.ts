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

const pickObjectKeys = <T>(data: T, keys: (keyof T)[]): Omit<T, keyof T> => {
	const res = { ...data };
	for (let key of keys) {
		delete res[key];
	}

	return res;
}

const res = pickObjectKeys<User>(user, ['age', 'skills']);

console.log(res)