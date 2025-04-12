<template lang="pug">
q-btn.bg-primary.text-white(
  size="lg"
  icon="delete"
  round
  color="accent"
  @click="noteStore.deleteNote"
)
</template>

<script setup>
import { useNoteStore } from 'src/stores/note'

const noteStore = useNoteStore()
</script>
