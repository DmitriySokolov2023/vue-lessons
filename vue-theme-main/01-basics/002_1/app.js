const App = {
	data() {
		//то что передаем в html шаблон
		return {
			title: 'Список заметок',
			stringPlaceholder: 'Введите название заметки',
			inputValue: '',
			notes: ['Заметка 1'],
		}
	},
	methods: {
		inputChangeHandler(e) {
			this.inputValue = e.target.value
		},

		addNotes() {
			this.notes.push(this.inputValue)
			this.inputValue = ''
		},
		removeNote() {
			this.notes.push(this.inputValue)
		},
	},
}

Vue.createApp(App).mount('#app')
