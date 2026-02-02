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
		addNotes() {
			if (this.inputValue.length === 0) {
				return
			}
			this.notes.push(this.inputValue)
			this.inputValue = ''
		},
		removeNote(idx) {
			console.log(idx)
			this.notes.splice(idx, 1)
		},
	},
	computed: {
		doubleCount() {
			console.log('doubleCount')
			return this.notes.length * 2
		},
	},
	watch: {
		inputValue(value) {
			if (value.length > 10) {
				this.inputValue = ''
			}
		},
	},
}

Vue.createApp(App).mount('#app')
