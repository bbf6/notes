<template lang="pug">
q-input(
  v-model="noteStore.newNote.text"
  :dense="true"
  type="textarea"
  autogrow
  borderless
  filled
  input-class="note-text"
)
</template>

<script setup>
import { useNoteStore } from 'src/stores/note'

const noteStore = useNoteStore()
</script>

<style lang="sass">
.note-text
  font-size: 18px
  max-height: calc(100vh - 230px)
</style>
