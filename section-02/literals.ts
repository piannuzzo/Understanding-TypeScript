
type ReturnTypes = 'as-number' | 'as-string'  // literal type

function combine(val1: number | string, val2: number | string, resultType: ReturnTypes) {
	return typeof val1 === 'number' && typeof val2 === 'number' || resultType === 'as-number'
		? +val1 + +val2
		: `${val1}${val2}`
}

console.log(combine(12, 13, 'as-number'))
console.log(combine('12', '13', 'as-number'))
console.log(combine(12, 13, 'as-string'))
console.log(combine('12', '13', 'as-string'))
console.log(combine('Peter', 'Robert', 'as-string'))
console.log(combine('Peter', 'Robert', 'as-number'))




