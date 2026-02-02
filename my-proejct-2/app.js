const App = {
	data: () => ({
		title: 'Vue3 App',
		person: {
			firstName: 'Dmitriy',
			lastName: 'Sokolov',
			age: 22,
		},
		items: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
	}),
	methods: {},
	computed: {},
	watch: {},
}

Vue.createApp(App).mount('#app')
