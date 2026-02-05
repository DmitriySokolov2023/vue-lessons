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
	methods: {
		addItem() {
			this.items.unshift(this.$refs.myInput.value)
		},
	},
	computed: {
		evenItems() {
			return this.items.filter(el => el % 2 === 0)
		},
	},
	watch: {},
}

Vue.createApp(App).mount('#app')
