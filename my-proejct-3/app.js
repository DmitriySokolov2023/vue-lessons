const App = {
	data() {
		return {
			count: 0,
		}
	},
	template: `
	<div class="card center"> <h1>Это из template</h1></div>
	`,
}

Vue.createApp(App).mount('#app')
