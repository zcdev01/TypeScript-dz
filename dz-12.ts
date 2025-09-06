type FeatchMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

class FetchTestBuilder {
	private url: string;
	private method?: FeatchMethod;
	private headers?: HeadersInit;
	private body?: object;

	constructor() {
		this.url = '';
		this.headers = {};
		this.body = {};
	}

	public addUrl(url: string): FetchTestBuilder {
		if (url) {
			this.url = url;

			return this;
		}

		return this;
	}
	public addMethod(method: FeatchMethod): FetchTestBuilder {
		if (method) {
			this.method = method;

			return this;
		}

		return this;
	}
	public addHeaders(headers: Record<string, string>): FetchTestBuilder {
		if (headers) {
			let headersApi = new Headers()

			for (let key in headers) {
				if (headers[key]) {
					headersApi.set(
						key,
						headers[key]
					);
				}
			}
		}
		return this;
	}
	public addBody(body: object): FetchTestBuilder {
		if (body) {
			this.body = body;

			return this;
		}
		return this;
	}
	public async exec<T>(): Promise<T> {
		try {
			let data = {} as RequestInit

			if (this.method) data.method = this.method
			if (this.headers) data.headers = this.headers
			if (this.body) data.body = JSON.stringify(this.body)

			const response = await fetch(this.url, data);

			return response.json()
		} catch (error) {
			if (error instanceof Error) {
				throw error;
			} else {
				throw new Error(String(error));
			}
		}
	}
}

const fetchTest = new FetchTestBuilder()
.addUrl('https://jsonplaceholder.typicode.com/posts')
.addMethod('POST')
.addHeaders({})
.addBody({})
.exec()

console.log(fetchTest)