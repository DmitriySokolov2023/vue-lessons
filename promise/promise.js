fetch('https://jsonplaceholder.typicode.com/todos/1')
	.then(response => {
		if (!response.ok) {
			throw new Error(`HTTP error: ${response.status}`)
		}
		return response.json() // тоже Promise
	})
	.then(data => {
		console.log('todo:', data)
	})
	.catch(err => {
		console.error('request failed:', err)
	})

async function loadTodo() {
	try {
		const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')

		if (!response.ok) {
			throw new Error(`HTTP error: ${response.status}`)
		}

		const data = await response.json()
		console.log('todo:', data)
		return data // вернётся как Promise.resolve(data)
	} catch (err) {
		console.error('request failed:', err)
		throw err // чтобы вызывающий мог обработать
	}
}

loadTodo()

console.log('Синхронный')
