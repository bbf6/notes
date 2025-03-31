import { defineStore } from 'pinia'
import { LocalStorage } from 'quasar'
import uuidv4 from 'src/lib/uuid'

const createNewNote = () => ({
  id: uuidv4(),
  title: '',
  text: '',
  date: new Date()
})

const shorten = text => text.length > 50 ? `${text.substr(0, 50)}...` : text

export const useNoteStore = defineStore('note', {
  state: () => ({
    showEditor: false,
    newNote: createNewNote(),
    notes: LocalStorage.getItem('notes') || []
  }),
  getters: {
    list (state) {
      return state.notes
        .sort((a, b) => a.date < b.date)
        .map(n => ({
          id: n.id,
          title: shorten(n.title) || shorten(n.text)
        }))
    }
  },
  actions: {
    addNote () {
      this.notes = this.notes.filter(n => n.id !== this.newNote.id)
      this.newNote.date = new Date()
      this.notes.push(this.newNote)
      LocalStorage.set('notes', this.notes)
      this.closeEditor()
    },
    closeEditor () {
      this.showEditor = false
      this.newNote = createNewNote()
    },
    edit (id) {
      const note = this.notes.find(n => n.id === id)
      this.newNote = structuredClone(note)
      this.showEditor = true
    }
  }
})
