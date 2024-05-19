function add(n1: number, n2: number, logResult: boolean) {
	const sum = n1 + n2
	logResult && console.log(sum)
	return sum
}

const n1 = 5
let n2
n2 = '2.8'
const printResult = true

const result = add(n1, n2, printResult)
