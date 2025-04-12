<template lang="pug">
q-layout(view="hHh lpR fFf")
  q-header.bg-primary.text-white(bordered)
    q-toolbar
      q-toolbar-title
        q-avatar(square)
          img(src="~/assets/logo.png")
        |  Notes app
      q-icon.text-white(
        v-if="noteStore.showEditor"
        size="md"
        name="close"
        @click="noteStore.closeEditor"
      )
  q-page-container
    router-view
</template>

<script setup>
import { useNoteStore } from 'src/stores/note'

const noteStore = useNoteStore()
</script>
