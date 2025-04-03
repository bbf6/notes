<template lang="pug">
.absolute-top
  q-card#editor-form(:class="{ open: noteStore.showEditor }")
    q-card-section
      title-text-field
    q-card-section#text-area
      text-field
    q-card-section.flex.justify-center
      save-button
</template>

<script setup>
import { useNoteStore } from 'src/stores/note'
import TitleTextField from 'src/components/editorForm/TitleTextField'
import TextField from 'src/components/editorForm/TextField'
import SaveButton from 'src/components/editorForm/SaveButton'

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
