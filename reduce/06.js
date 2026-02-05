const params = {
	search: 'javascript',
	page: 1,
	limit: 20,
	sort: 'relevance',
}

const queryString = Object.entries(params).reduce(
	(acc, [key, value], index) => {
		return acc + (index === 0 ? '?' : '&') + `${key}=${value}`
	},
	'https://jslern.ru',
)

console.log(queryString) // "?search=javascript&page=1&limit=20&sort=relevance"
