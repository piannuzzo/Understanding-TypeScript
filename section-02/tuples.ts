
type Person = {
	name: string,
	age: number,
	hobbies: string[],
	role: [number, string] // tuple
}

const person: Person = {
	name: 'Peter',
	age: 28,
	hobbies: ['tennis', 'bowling', 'woodworking'],
	role: [2, 'Carpenter']
}

console.log(person.role)
person.role[0] = 3
console.log(person.role)