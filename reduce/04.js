const orders = [
	{ userId: 1, amount: 100 },
	{ userId: 2, amount: 150 },
	{ userId: 1, amount: 200 },
	{ userId: 3, amount: 50 },
	{ userId: 2, amount: 75 },
]

const svod = orders.reduce((acc, order) => {
	acc[order.userId] = (acc[order.userId] || 0) + order.amount

	return acc
}, {})

console.log(svod)
