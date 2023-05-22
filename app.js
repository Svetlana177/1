const App = {
  data() {
    return {
      counter: 0,
      title: 'Список дел',
      placeholderString: 'Добавьте пункт',
      inputValue: '',
      notes: ['Сходить в спортзал', 'Отдать вещи в химчистку'],
    }
  },
  methods: {
    addNewNote() {
      if (this.inputValue === '' ) {
        this.placeholderString = 'Поле не должно быть пустым'
      }
      if (this.inputValue !== '') {
        this.notes.push(this.inputValue)
        this.inputValue = ''
        this.placeholderString = 'Добавьте пункт'
      }
    },
    deleteNote(index) {
      this.notes.splice(index, 1)
    }
  },
  watch: {
    inputValue(value) {
      if (value.length > 100) {
        this.inputValue = ''
      }
    }
  }
}

const app = Vue.createApp(App)
app.mount('#app')
