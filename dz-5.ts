function hash(key: string): number {
	let hash = 0
	for (let i = 0; i < key.length; i++) {
		hash += key.charCodeAt(i)
	}
	return hash
}

class Map {
	bucket: Array<Array<[string, number]>>
	constructor(size: number = 16) {
		this.bucket = new Array(size);
	}

	add(key: string, value: number): void {
		const index = hash(key) % this.bucket.length

		if (!this.bucket[index]) {
			this.bucket[index] = [[key, value]]
		} else if (!this.bucket[index].some(([k, _]) => k === key)) {
			this.bucket[index].push([key, value])
		} else {
			const found = this.bucket[index].find(pair => pair[0] === key);
			if (found) {
				found[1] = value;
				return;
			}
		}
	}
	get(key: string): number {
		const index = hash(key) % this.bucket.length

		if (!this.bucket[index]) {
			throw new Error('Key not found')
		} else {
			for (let [k, v] of this.bucket[index]) {
				if (k === key) return v
			}
			throw new Error('Key not found')
		}
	}
	delete(key: string): void {
		const index = hash(key) % this.bucket.length
		if (!this.bucket[index]) {
			throw new Error('Key not found')
		} else {
			for (let [k, v] of this.bucket[index]) {
				if (k === key) {
					this.bucket[index] = this.bucket[index].filter(([k, v]) => k !== key)
					break
				}
			}
		}
	}
	clean(): void {
		this.bucket = new Array(this.bucket.length);
	}
}