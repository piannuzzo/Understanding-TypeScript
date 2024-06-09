const cL = (arg: any): void => console.log(arg)

// INTERSECTING TYPES

cL('INTERSECTING TYPES')

type Admin = {
	name: string,
	privileges: string[],
}

type Employee = {
	name: string,
	startDate: Date,
}

// interface ElevatedEmployee extends Admin, Employee

type ElevatedEmployee = Admin & Employee

const emp1: ElevatedEmployee = {
	name: 'Peter',
	privileges: ['create-server'],
	startDate: new Date()
}

cL(emp1)

type Combinable = string | number
type Numeric = number | boolean
type Universal = Combinable & Numeric

function add(a: Combinable, b: Combinable) {
	if (typeof a === 'string' || typeof b === 'string') {
		return a.toString() + b.toString()
	}
	return a + b
}

type UnknownEmployee = Employee | Admin

function printEmployeeInfo(emp: UnknownEmployee) {
	cL('Name: ' + emp.name)
	if ('privileges' in emp) {
		cL('Privileges: ' + emp.privileges)
	}
	'startDate' in emp && cL('Start Date: ' + emp.startDate)
}

printEmployeeInfo(emp1)

class Car {
	drive() {
		cL('Driving a car...')
	}
}

class Truck {
	drive() {
		cL('Driving a truck...')
	}

	loadCargo(amount: number) {
		cL(`Loading ${amount} cargo`)
	}
}

type Vehicle = Car | Truck

const v1 = new Car()
const v2 = new Truck()

function useVehicle(vehicle: Vehicle) {
	vehicle.drive()
	vehicle instanceof Truck && vehicle.loadCargo(100)
}

useVehicle(v1)
useVehicle(v2)


// TYPE GUARDS

cL('TYPE GUARDS')
interface Bird {
	type: 'bird'
	flyingSpeed: number
}

interface Horse {
	type: 'horse'
	runningSpeed: number
}


// DISCRIMINATED UNIONS
// Discriminated Union as both interfaces have a type propery defined

cL('DISCRIMINATED UNIONS')
type Animal = Bird | Horse

function moveAnimal(animal: Animal) {
	let speed
	switch (animal.type) {
		case 'bird':
			speed = animal.flyingSpeed
			break
		case 'horse':
			speed = animal.runningSpeed
			break
	}
	cL('Moving with speed: ' + speed)
}

moveAnimal({ type: 'bird', flyingSpeed: 10 })


// TYPE CASTING

cL('TYPE CASTING')
const paragraph = document.getElementById('message')!
paragraph.innerHTML = "I am a paragraph element."

// const userInput = <HTMLInputElement>document.getElementById('user-input')
const userInput = document.getElementById('user-input') as HTMLInputElement
userInput.value = 'Hello...'


// INDEX PROPERTIES

cL('INDEX PROPERTIES')
interface ErrorContainer {
	[prop: string]: string
}

const errorBag: ErrorContainer = {
	email: 'Not a vaild email.',
	username: 'Must be capitalcase.'
}


// FUNCTION OVERLOADS

cL('FUNCTION OVERLOADS')
function add2(a: number, b: number): number
function add2(a: Combinable, b: Combinable): string
function add2(a: Combinable, b: Combinable) {
	if (typeof a === 'string' || typeof b === 'string') {
		return a.toString() + b.toString()
	}
	return a + b
}

const result = add2('Peter', 'Robert')
result.split(' ')
const result2 = add2(1, 2)


// OPTIONAL CHAINING

cL('OPTIONAL CHAINING')
const fetchedUserData = {
	id: '1',
	name: 'Peter',
	job: { title: 'Developer', description: 'Front end devlopment' }
}

cL(fetchedUserData?.job?.title)


// NULLISH COALESCING

cL('NULLISH COALESCING')
const userInput2 = ''
const data = userInput2 ?? 'DEFAULT'
cL(userInput2)