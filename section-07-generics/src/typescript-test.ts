
// 95

const names: Array<string> = ['Max']
const promise: Promise<number> = new Promise((resolve, reject) => {
	setTimeout(() => resolve(Math.random()), 2000)
})
promise.then((value) => { console.log(value) })

// 96 & 97 Generic Functions and Contstraints

type Name = {
	name: string
}

type Age = {
	age: number
}

function merge<T extends object, U extends object>(objA: T, objB: U) {
	return Object.assign(objA, objB)
}
const merged = merge<Name, Age>({ name: 'Peter' }, { age: 25 })
console.log(merged.age)

// 98 Generic Functions

interface HasLength {
	length: number
}

function countAndPrint<T extends HasLength>(element: T): [T, string] {
	let descriptionText = 'Got no value.'
	if (element.length === 1) {
		descriptionText = 'Got 1 element.'
	} else if (element.length > 1) {
		descriptionText = 'Got ' + element.length + ' elements.'
	}
	return [element, descriptionText]
}
console.log(countAndPrint(['Hi there!', 'Goodbye']))

// 99 keyof Constraint

function extractAndCovert<T extends object, U extends keyof T>(obj: T, key: U) {
	return `${String(key)} : ${obj[key]}`
}
console.log(extractAndCovert({ name: 'Peter' }, 'name'))

// 100 - Generic Classes

class DataStorage<T> {
	private data: T[] = []

	addItem(item: T): DataStorage<T> {
		this.data.push(item)
		return this
	}

	removeItem(item: T) {
		this.data.splice(this.data.indexOf(item), 1)
	}

	getItems(): T[] {
		return [...this.data]
	}
}

const textStorage = new DataStorage<string>()
textStorage.addItem('Foo')
textStorage.addItem('Bar')
textStorage.addItem('Baz')
console.log(textStorage.getItems())
textStorage.removeItem('Bar')
console.log(textStorage.getItems())

const numberStorage = new DataStorage<number>()
numberStorage.addItem(1).addItem(2).addItem(3)
console.log(numberStorage.getItems())
numberStorage.removeItem(1)
console.log(numberStorage.getItems())

const objStorage = new DataStorage<object>()
objStorage.addItem({ a: 'A' })
objStorage.addItem({ b: 'B' })
objStorage.addItem({ c: 'C' })
console.log(objStorage.getItems())
objStorage.removeItem({ b: 'B' })
console.log(objStorage.getItems())

// 102 Utility Types

interface CourseGoal {
	title: string
	description: string
	completionDate: Date
}

function createCourseGoal(
	title: string,
	description: string,
	data: Date
): CourseGoal {
	let courseGoal: Partial<CourseGoal> = {
		title,
		description
	}
	return courseGoal as CourseGoal
}

const names2: Readonly<string[]> = ['Peter', 'Robert']
// names2 is readonly
names2.push('Stephen')

let foo: Readonly<string> = 'FOO'
foo = 'Bar'

// 103 Generics vs Unions

class Foo<T extends string | number | boolean> { 
	#data: T[] = []

	addData(item: T) {
		this.#data.push(item)
	}

	get _data() { return [...this.#data] }
}

class Bar {
	#data: string[] | number[] | boolean[] = []

	// this does not work as #data can only contain 1 of 3 different types
	// this function allow adding any of 3 different types
	addData(item: string | number | boolean) {
		this.#data.push(item)
	}

	get data() { return this.#data}
}