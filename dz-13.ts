import { FetchTestBuilder } from './dz-12';

class ProxeTest {
	constructor(private api: (id: number) => Promise<any>) { }

    async getData<T>(id: number): Promise<T> {
        if (id >= 10) {
            throw new Error('id must be less than 10');
        }
        return this.api(id);
    }
}

const fetchTest = new ProxeTest((id: number) =>
	new FetchTestBuilder()
		.addUrl(`https://dummyjson.com/products/${id}`)
		.addMethod('GET')
		.exec()
)

fetchTest.getData(1).then(data => console.log(data));
