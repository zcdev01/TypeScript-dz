interface IA {
	a: number;
	b: string;
}

interface IB {
	a: number;
	c: boolean;
}

let a: IA = { a: 5, b: '' };
let b: IB = { a: 10, c: true };

const difference = <T extends object, U extends object>(a: T, b: U): Omit<T, keyof U> => {
	let result = {...a}

	for (let key in a) {
		if ((key in b)) {
			delete result[key];
		}
	}

	return result;
}


let v0 = difference(a, b);

console.log(v0)