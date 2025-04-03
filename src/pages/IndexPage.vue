<template lang="pug">
q-page#page.flex.column.flex-start
  editor-form
  notes-list
  footer-actions
</template>

<script setup>
import { useNoteStore } from 'src/stores/note'
import NotesList from 'src/components/NotesList'
import EditorForm from 'src/components/editorForm/EditorForm'
import FooterActions from 'src/components/FooterActions'

const noteStore = useNoteStore()
</script>

<style lang="sass">
#page
  overflow: hidden
</style>
