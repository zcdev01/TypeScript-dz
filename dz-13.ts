import { FetchTestBuilder } from './dz-12';

class ProxeTest<T extends any> {
	constructor(private api: (id: number) => Promise<T>) { }

    async getData<U extends T>(id: number): Promise<U> {
        if (id >= 10) {
            throw new Error('id must be less than 10');
        }
        return this.api(id) as Promise<U>;
    }
}

const fetchTest = new ProxeTest((id: number) =>
	new FetchTestBuilder()
		.addUrl(`https://dummyjson.com/products/${id}`)
		.addMethod('GET')
		.exec()
)

fetchTest.getData(1).then(data => console.log(data));
