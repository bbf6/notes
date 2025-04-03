<template lang="pug">
.absolute-bottom.text-center.q-mb-lg.no-pointer-events
  q-btn.all-pointer-events(
    v-if="!noteStore.showEditor"
    @click="noteStore.showEditor = true"
    round
    color="primary"
    size="lg"
    icon="add"
  )
</template>

<script setup>
import { useNoteStore } from 'src/stores/note'

const noteStore = useNoteStore()
</script>
