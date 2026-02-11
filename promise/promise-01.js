const divide = (a, b) => {
	return new Promise((resolve, reject) => {
		if (b === 0) {
			return reject(new Error('Деление на 0 невозможно!'))
		}
		setTimeout(() => {
			resolve(a / b)
		}, 1000)
	})
}

divide(10, 0)
	.then(n => console.log(n))
	.catch(e => console.error(e.message))

async function run() {
	try {
		const x = await divide(14, 0)
		console.log('await', x)
	} catch (e) {
		console.error('Ошибка', e.message)
	}
}

run()
