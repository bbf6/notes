<template lang="pug">
q-card#editor-form(:class="{ open: noteStore.showEditor }")
  q-card-section
    q-input(v-model="noteStore.newNote.title" label="Title" :dense="true")
  q-card-section#text-area
    q-input(
      v-model="noteStore.newNote.text"
      :dense="true"
      type="textarea"
      autogrow
      borderless
      filled
    )
  q-card-section.flex.justify-center
    q-btn.bg-primary.text-white(
      size="lg"
      icon="save"
      round
      color="primary"
      @click="noteStore.addNote"
    )
</template>

<script setup>
import { useNoteStore } from 'src/stores/note'

const noteStore = useNoteStore()
</script>

<style lang="sass">
#editor-form
  background-color: $white
  height: 100vh
  transition: all 0.3s ease-in-out
  transform: translateY(100vh)
  &.open
    transform: translateY(0vh)

#text-area
  height: calc(100vh - 220px)
</style>
