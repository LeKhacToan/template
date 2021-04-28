<template lang="pug">
  v-bottom-navigation(
    grow
    v-model="route"
  )
    v-btn(icon)
      span {{$t('menu')}}
      v-icon mdi-menu

    v-btn(icon)
      span {{$t('list_order')}}
      v-icon mdi-clipboard-check-outline

    v-btn(icon)
      span {{$t('add_order')}}
      v-icon mdi-plus-circle-outline

    v-btn(icon)
      span {{$t('sales')}}
      v-icon mdi-file-document

    v-btn(icon)
      span {{$t('settings')}}
      v-icon mdi-cog-outline
</template>

<script lang="ts">
import { ref, Ref, defineComponent, watch } from '@vue/composition-api'
import { urlPath } from 'utils'

interface SetUp {
  route: Ref<number>
}

const Navigation = defineComponent({
  props: {},
  setup(props, { root }): SetUp {
    const route: Ref<number> = ref(0)

    const navigateToPage = (page: string): void => {
      if (page !== root.$route.path) {
        root.$router.push(page)
      }
    }

    watch(
      () => root.$route,
      () => {
        const { path } = root.$route
        const index = urlPath.DISABLE_NAVIGATION.indexOf(path)
        if (index !== -1) {
          route.value = index
        }
      }
    )

    watch(route, () => {
      let url = urlPath.MENU.path
      switch (route.value) {
        case 1:
          url = urlPath.ORDER.path
          break
        case 2:
          url = urlPath.ADD_ORDER.path
          break
        case 3:
          url = urlPath.SALES.path
          break
        case 4:
          url = urlPath.SETTING.path
          break
        default:
      }
      navigateToPage(url)
    })

    return {
      route
    }
  }
})
export default Navigation
</script>
