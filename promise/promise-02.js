const power = (a, grade) => {
	return new Promise((resolve, reject) => {
		if (a === 0) {
			return reject('Переменная a должна быть больше 0')
		}
		resolve(a ** grade)
	})
}

power(5, 5)
	.then(x => console.log(x))
	.catch(e => console.log(e))
