const cL = console.log

function Logger(log: string) {
	cL('Logger Factory')
	return function (constructor: Function) {
		cL(`Logger: ${log}`)
		cL(constructor)
	}
}

function HTMLTemplate(template: string, hookId: string) {
	cL('HTMLTemplate Factory')
	return function <T extends { new(...args: any[]): {name: string} }>(originalConstructor: T) {
		return class extends originalConstructor {
			constructor(..._: any[]) {
				super()
				cL('HTMLTemplate Decorator...')
				const decoratorEl = document.getElementById('decorator')
				if (decoratorEl) {
					decoratorEl.innerHTML = template
					setTimeout(() => {
						decoratorEl.querySelector('h1')!.textContent = this.name
					}, 2000)
				}
			}
		}
	}
}

@Logger('Log Person Class')
@HTMLTemplate('<h1>Person Class Decorator</h1>', 'app')
class Person {
	name = 'Peter'

	constructor() {
		cL('Instantiate new Person')
	}
}

const person = new Person()
cL(person)

// Section 110 : Property Decorators

function Log(target: any, propertyName: string | symbol) {
	cL('Log Decorator')
	cL(target, propertyName)
}

function Log2(target: any, name: string , descriptor: PropertyDecorator | TypedPropertyDescriptor<any>) {
	cL('Accessor Decorator')
	cL(target, name, descriptor)
}

function Log3(target: any, name: string, descriptor: PropertyDecorator | TypedPropertyDescriptor<any>) {
	cL('Method Decorator')
	cL(target, name, descriptor)
}

function Log4(target: any, name: string | Symbol, position: number) {
	cL('Parameter Decorator')
	cL(target, name, position)
}

class Product {
	@Log
	title: string
	#price: number

	constructor(title: string, price: number) {
		this.title = title
		this.price = this.#price = price
	}


	@Log2
	set price(price: number) {
		if (price > 0) {
			this.#price = price
		} else {
			throw new Error("Invalid price. Price must be a postiive number.")
		}
	}

	get price() { return this.#price }

	@Log3
	getPriceWithTax(@Log4 tax: number) {
		return this.#price * 1 + tax / 100
	}
}

const prod1 = new Product('Product1', 10)
const prod2 = new Product('Product2', 20)
prod1.getPriceWithTax(5)

// Section 115 : Autobind Decorator

function autoBind(_: any, _2: string, descriptor: PropertyDescriptor) {
	const originalMethod = descriptor.value
	const adjustedMethod: PropertyDescriptor = {
		configurable: true,
		enumerable: false,
		get() {
			const boundFunction = originalMethod.bind(this)
			return boundFunction
		}
	}
	return adjustedMethod
}

class Printer {
	message = 'Printer class message property'

	@autoBind
	showMessage() {
		cL(this.message)
	}
}

const printer = new Printer()

const button = document.querySelector('button')!
button.addEventListener('click', printer.showMessage)


// Section 116 : Validation

interface ValidatorConfig {
	[property: string]: {
		[validatableProp: string]: string[] // ['required', 'positive']
	}
}

const registeredValidators: ValidatorConfig = {}

function Required(target: any, propName: string) {
	registeredValidators[target.constructor.name] = {
		...registeredValidators[target.constructor.name],
		[propName]: ['required']
	}
}

function PositiveNumber(target: any, propName: string) {
	registeredValidators[target.constructor.name] = {
		...registeredValidators[target.constructor.name],
		[propName]: ['positive']
	}
}

function validate(obj: any): boolean {
	const objValidatorConfig = registeredValidators[obj.constructor.name]
	if (!objValidatorConfig) {
		return false
	}
	let isValid = true
	for (const prop in objValidatorConfig) {
		for (const validator of objValidatorConfig[prop]) {
			switch (validator) {
				case 'required':
					isValid = isValid && !!obj[prop]
					break
				case 'positive':
					isValid = isValid && obj[prop] > 0
					break
			}
		}
	}
	return isValid
}

class Course {
	@Required
	title: string
	@PositiveNumber
	price: number

	constructor(t: string, p: number) {
		this.title = t
		this.price = p
	}
}

const courseForm = document.querySelector('form')!
courseForm.addEventListener('submit', event => {
	event.preventDefault()
	const titleEl = document.getElementById('title') as unknown as HTMLInputElement
	const priceEl = document.getElementById('price') as unknown as HTMLInputElement

	const title = titleEl.value
	const price = +priceEl.value

	const myCourse = new Course(title, price)
	if (!validate(myCourse)) {
		alert('Invalid input')
		return
	}
	cL(myCourse)
})

