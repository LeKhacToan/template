<template lang="pug">
  v-subheader.section_header {{ title }}
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

const SectionHeader = defineComponent({
  props: {
    title: {
      type: String,
      required: true
    }
  }
})
export default SectionHeader
</script>

<style scoped>
.section_header {
  background-color: var(--v-light_gray-base) !important;
}
</style>
