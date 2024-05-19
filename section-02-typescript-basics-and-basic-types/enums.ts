
enum Roles {
	Carpenter = 100, Programmer
}

type Person = {
	name: string,
	age: number,
	hobbies: string[],
	role: Roles,
}

const person: Person = {
	name: 'Peter',
	age: 28,
	hobbies: ['tennis', 'bowling', 'woodworking'],
	role: Roles.Programmer,
}

console.log(person.role)
