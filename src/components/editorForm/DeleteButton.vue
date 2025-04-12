<template lang="pug">
q-btn.bg-primary.text-white(
  size="lg"
  icon="delete"
  round
  color="accent"
  @click="confirmDelete"
)
</template>

<script setup>
import { useNoteStore } from 'src/stores/note'
import { confirmationAlert } from 'src/lib/notifications'

const noteStore = useNoteStore()

const confirmDelete = () =>
  confirmationAlert(
    'Are you sure?',
    'If you delete this, its not going back.',
    noteStore.deleteNote
  )
</script>
