<template lang="pug">
  div.bottom_container
    slot
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

const BottomContainer = defineComponent({})

export default BottomContainer
</script>
<style scoped>
.bottom_container {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  padding: 0;
  margin: 0;
}
</style>
