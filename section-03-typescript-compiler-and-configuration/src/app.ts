const userName = 'pri'
console.log(userName)

const handleButtonClick = (value: string): void => {
	console.log(value)
}

const button = document.querySelector("button") as HTMLButtonElement
button.addEventListener('click', handleButtonClick.bind({ foo: 'FOO' }, 'Peter'))
