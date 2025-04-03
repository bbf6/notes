<template lang="pug">
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
