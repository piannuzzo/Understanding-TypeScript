export class Product {
	title: string
	price: number
	#data: {
		title: string
		price: number
		tax: number
	} = {
		title: '',
		price: 0,
		tax: 0
	}

	constructor(title: string, price: number) {
		this.title = title
		this.price = price
		this.#setData()
	}

	#setData() {
		this.#data = {
			title: this.title,
			price: this.price,
			tax: this.price * .0625
		}
	}

	getInformation() {
		return [this.title, `$${this.price}`, {...this.#data}]
	}
}

