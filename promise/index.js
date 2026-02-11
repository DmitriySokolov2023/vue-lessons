const state = {
	items: [],
	loading: false,
	error: null,
}

function setState(patch) {
	Object.assign(state, patch)
	render()
}

function render() {
	const statusEl = document.querySelector('#status')
	const listEl = document.querySelector('#list')

	statusEl.textContent = state.loading
		? 'Loading...'
		: state.error
			? `Error: ${state.error}`
			: `Loaded: ${state.items.length}`

	listEl.replaceChildren()

	const frag = document.createDocumentFragment()
	for (const item of state.items) {
		const li = document.createElement('li')
		li.textContent = item.title
		frag.append(li)
	}
	listEl.append(frag)
}

async function load() {
	setState({ loading: true, error: null })

	try {
		const res = await fetch(
			'https://jsonplaceholder.typicode.com/posts?_limit=10',
		)
		if (!res.ok) throw new Error(`HTTP ${res.status}`)
		const data = await res.json()

		setState({ items: data, loading: false })
	} catch (e) {
		setState({ error: e.message, loading: false, items: [] })
	}
}

load()

console.log(state)
