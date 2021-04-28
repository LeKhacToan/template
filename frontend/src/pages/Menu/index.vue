<template lang="pug">
  div
    v-list.pa-0
      div(v-for="menu in menus" :key="menu.title")
        section-header(:title="menu.title")
        div(
          v-for="child in menu.children"
          :key="child.title"
        )
          v-list-item
            v-list-item-content
              v-list-item-title {{child.title}}
            v-list-item-action
              v-icon mdi-chevron-right
          v-divider
</template>

<script lang="ts">
import { defineComponent, reactive, onMounted } from '@vue/composition-api'

import { SectionHeader } from 'components'
import { api } from 'plugins'

import { MENU } from './menu'

interface SubItem {
  title: string
}
interface Item {
  title: string
  children: Array<SubItem>
}
interface SetUp {
  menus: Array<Item>
}

const Menu = defineComponent({
  components: {
    SectionHeader
  },
  props: {},
  setup(): SetUp {
    const menus: Array<Item> = reactive(MENU)

    onMounted(async () => {
      const { data } = await api.get('/')
      console.log(data)
    })

    return {
      menus
    }
  }
})
export default Menu
</script>
