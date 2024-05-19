
function add(n1: number, n2: number): number {
	return n1 + n2
}

function printResult(result: number): void { 
	console.log(`Result: ${result}`)
	return
}

let combineValues: (a: number, b: number) => number
combineValues = add
console.log(combineValues(2, 3))

//combineValues = printResult

