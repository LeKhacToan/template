<template lang="pug">
  v-app
    header-bar(:back="enableGoBack")
    v-main.mb-14
      router-view
    bottom-container
      navigation
</template>

<script lang="ts">
import { defineComponent, ref, watch, Ref } from '@vue/composition-api'
import { Navigation, HeaderBar, BottomContainer } from 'components'
import { urlPath } from 'utils'

interface SetUp {
  enableGoBack: Ref<boolean>
}

const App = defineComponent({
  components: {
    Navigation,
    HeaderBar,
    BottomContainer
  },
  props: {},
  setup(props, { root }): SetUp {
    const enableGoBack = ref(false)

    watch(
      () => root.$route,
      () => {
        const { path } = root.$route
        const isMainUrl = urlPath.DISABLE_NAVIGATION.find((url) => url === path)
        enableGoBack.value = !isMainUrl
      }
    )

    return {
      enableGoBack
    }
  }
})
export default App
</script>
