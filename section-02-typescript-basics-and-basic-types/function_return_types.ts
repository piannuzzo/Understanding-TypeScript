
function add(n1: number, n2: number): number {
	return n1 + n2
}

function printResult(result: number): void { 
	console.log(`Result: ${result}`)
	return
}

console.log(printResult(add(1, 2)) === undefined)
