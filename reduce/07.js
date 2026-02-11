let users = [
	{ id: 1, name: 'Ann' },
	{ id: 2, name: 'Bob' },
	{ id: 3, name: 'Kate' },
]

const groupUser = users.reduce((acc, user) => {
	if (!acc[user.id]) {
		acc[user.id] = user.name
	}
	return acc
}, {})

console.log(groupUser)
