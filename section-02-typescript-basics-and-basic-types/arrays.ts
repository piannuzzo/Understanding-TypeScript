
type Person = {
	name: string,
	age: number,
	hobbies: string[]
}

const person: Person = {
	name: 'Peter',
	age: 28,
	hobbies: ['tennis', 'bowling', 'woodworking']
}

let hobbies: (string | number)[]
hobbies = ['watching tennis', 2, 'bowling', 4]

console.log(person.name)