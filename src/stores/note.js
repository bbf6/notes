import { defineStore } from 'pinia'
import { LocalStorage } from 'quasar'
import uuidv4 from 'src/lib/uuid'
import { shorten } from 'src/lib/format'

const createNewNote = () => ({
  id: uuidv4(),
  title: '',
  text: '',
  date: new Date()
})

export const useNoteStore = defineStore('note', {
  state: () => ({
    showEditor: false,
    newNote: createNewNote(),
    notes: LocalStorage.getItem('notes') || []
  }),
  getters: {
    list (state) {
      return state.notes.map(n => ({
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
      this.notes = this.notes.sort((a, b) => a.date < b.date)
      LocalStorage.set('notes', this.notes)
      this.closeEditor()
    },
    deleteNote () {
      this.notes = this.notes.filter(n => n.id !== this.newNote.id)
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
