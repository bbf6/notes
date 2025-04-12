<template lang="pug">
q-btn.bg-primary.text-white(
  size="lg"
  icon="close"
  round
  color="primary"
  @click="noteStore.closeEditor"
)
</template>

<script setup>
import { useNoteStore } from 'src/stores/note'

const noteStore = useNoteStore()
</script>
