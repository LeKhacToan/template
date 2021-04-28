<template lang="pug">
  v-app-bar(app color="white" dark elevation="1")
    v-row.ma-0.pa-0(align="center" justify="space-around")
      v-col.pa-0
        v-btn(
          v-if="back"
          icon
          color="black"
          @click="goBack"
        )
          v-icon(medium) mdi-chevron-left
      v-col.pa-0(cols="8")
        v-row(justify="center")
          v-toolbar-title.black--text {{$route.name}}
        v-row(justify="center")
          span.black--text {{getSubTitle($route.query.subtitle || '')}}
      v-col.pa-0
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

interface SetUp {
  goBack: () => void
  getSubTitle: (subtitle: string) => string
}

interface Props {
  back?: boolean
}

const HeaderBar = defineComponent({
  props: {
    back: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  setup(props: Props, { root }): SetUp {
    const goBack = (): void => {
      root.$router.back()
    }

    const getSubTitle = (subtitle: string): string => {
      const { length } = subtitle

      return length > 25 ? `${subtitle.substring(0, 25).trim()}...` : subtitle
    }

    return {
      goBack,
      getSubTitle
    }
  }
})
export default HeaderBar
</script>
