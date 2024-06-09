
interface AddFn {
	(a: number, b: number): number
}

let add: AddFn = (n1: number, n2: number) => {
	return n1 + n2
}

interface Named {
	readonly name?: string
	displayName?: string
	printName?: () => string
}

interface Greetable extends Named {
	greet(phrase: string): void,
}

class Person implements Greetable {
	name?: string
	age: number = 21

	constructor(name?: string) {
		if (name) {
			this.name = name
		}
	}

	greet(phrase: string): void {
		if (this.name) {
			console.log(`${this.name} (${this.age}) says: ${phrase}`)
		} else {
			console.log('No name provided for greeting.')
		}
		
	}
}

let user1: Greetable = new Person('')
user1.greet(`Hi, my name is`)
