<template lang="pug">
q-list#list(:class="{ open: !noteStore.showEditor }")
  q-item(
    v-for="note in noteStore.list" :key="note.id"
    clickable
    v-ripple
    @click="() => noteStore.edit(note.id)"
  )
    q-item-section="{{ note.title }}"
</template>

<script setup>
import { useNoteStore } from 'src/stores/note'

const noteStore = useNoteStore()
</script>

<style lang="sass">
#list
  max-height: calc(100vh - 150px)
  max-width: 100vw
  overflow-y: auto
  overflow-x: hidden
  background-color: $white
  flex: 1
  transform: translateY(-100vh)
  transition: all 0.3s ease-in-out
  .q-item:nth-child(2n)
    background-color: adjust-color($white, $lightness: -5%)
  &.open
    transform: translateY(0)
</style>
