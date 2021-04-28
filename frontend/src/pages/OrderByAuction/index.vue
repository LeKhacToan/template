<template lang="pug">
  div
    v-tabs(
      fixed-tabs
      v-model="tab"
    )
      v-tab By customer(8)
      v-tab By product(15)

    v-tabs-items(v-model="tab")
      div
        v-text-field(
          solo
          filled
          hide-details
          :label="tab === 0 ? 'Search by customer code or name' : 'Search by product name'"
          prepend-inner-icon="mdi-magnify"
        )

        v-list.pa-0
          div(
            v-for="order in orders"
            :key="order.code"
          )
            v-list-item(@click="navigateToDetail")
              v-list-item-content
                v-row.pa-0.ma-0(align="center")
                  v-col.pa-0(cols="5")
                    span {{`[${order.code}] ${order.name}`}}
                  v-col.pa-0(cols="7")
                    v-row.my-2
                      span.text-subtitle-2 {{`引当済: ${order.assignedBoxes}箱 `}}
                      span.text-subtitle-2 {{`(${order.assignedStems}本)`}}
                    v-row.my-2
                      span.text-subtitle-2 {{`引当未: ${order.notAssignedBoxes}箱`}}
                      span.text-subtitle-2 {{`(${order.notAssignedStems}本) + 200本`}}
              v-list-item-action.ml-0
                v-icon mdi-chevron-right
            v-divider
</template>
<script lang="ts">
import { defineComponent, ref, Ref } from '@vue/composition-api'
import { urlPath } from 'utils'
import { ORDERS } from './orders'

interface Order {
  code: number
  name: string
  assignedBoxes: number
  assignedStems: number
  notAssignedBoxes: number
  notAssignedStems: number
}
interface SetUp {
  tab: Ref<number | null>
  orders: Array<Order>
  navigateToDetail: () => void
}

const OrderByAuction = defineComponent({
  props: {},
  setup(props, { root }): SetUp {
    const tab: Ref<number | null> = ref(null)
    const orders = ORDERS
    const navigateToDetail = (): void => {
      root.$router.push(urlPath.ORDER_DETAIL.path)
    }

    return {
      tab,
      orders,
      navigateToDetail
    }
  }
})
export default OrderByAuction
</script>
