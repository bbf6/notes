<template lang="pug">
q-page#page.flex.column.flex-start
  .absolute-top
    editor-form
  q-list#list(
    :class="{ open: !noteStore.showEditor }"
    bordered
    separator
  )
    q-item(
      v-for="note in noteStore.list" :key="note.id"
      clickable
      v-ripple
      @click="() => noteStore.edit(note.id)"
    )
      q-item-section="{{ note.title }}"
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
import EditorForm from 'src/components/EditorForm'

const noteStore = useNoteStore()
</script>

<style lang="sass">
#page
  overflow: hidden
#list
  background-color: $white
  flex: 1
  transform: translateY(-100vh)
  transition: all 0.3s ease-in-out
  .q-item:nth-child(2n)
    background-color: adjust-color($white, $lightness: -5%)
  &.open
    transform: translateY(0)
</style>
