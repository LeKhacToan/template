<template lang="pug">
  v-navigation-drawer(
    absolute
    left
    temporary
    :value="value"
    @input="drawer => $emit('input', drawer)"
  )
    v-list(nav dense id="nav")
      v-list-item-group(
        v-model="group"
        active-class="deep-purple--text text--accent-4"
      )
        router-link(to="/")
          v-list-item
            v-list-item-title Home
        router-link(to="/about")
          v-list-item
            v-list-item-title About
</template>

<script lang="ts">
import { ref, Ref, defineComponent } from '@vue/composition-api'

interface SetUp {
  group: Ref<Array<string> | null>
}

const Drawer = defineComponent({
  props: {
    value: {
      type: Boolean,
      required: true
    }
  },
  setup(): SetUp {
    const group = ref(null)
    return {
      group
    }
  }
})

export default Drawer
</script>

<style lang="scss" scoped>
#nav a {
  color: none;
  text-decoration: none;
}
</style>
