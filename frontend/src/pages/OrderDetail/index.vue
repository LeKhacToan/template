<template lang="pug">
  v-list.pa-0
    div(v-for="order in orders" :key="order.code")
      v-list-item
        v-list-item-content
          v-row.pa-0.mx-0
            v-col(cols="6")
              span {{`[${order.code}] ${order.name}`}}
            v-col
              span {{order.boxes}} cs
            v-col
              span {{`[${order.status.toUpperCase()}]`}}
      v-divider
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { ORDERS } from './orders'

const OrderDetail = defineComponent({
  setup() {
    const orders = ORDERS
    return {
      orders
    }
  }
})

export default OrderDetail
</script>
