<template lang="pug">
q-input(
  v-model="noteStore.newNote.title"
  label="Title"
  :dense="true"
  input-class="note-title"
)
</template>

<script setup>
import { useNoteStore } from 'src/stores/note'

const noteStore = useNoteStore()
</script>

<style lang="sass">
.note-title
  font-size: 20px
  font-weight: bold
</style>
