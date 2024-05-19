function combine(val1: number | string, val2: number | string) {
	return typeof val1 === 'number' && typeof val2 === 'number'
		? val1 + val2
		: `${val1}${val2}`
}

const agesTotal = combine(12, 13)
console.log(agesTotal)

const namesCombined = combine('Peter', 'Robert')
console.log(namesCombined)