<template lang="pug">
  div
    v-list.pt-0
      div(v-for="item in items" :key="item.title")
        section-header(:title="item.title")
        v-list-group(
          v-for="month in item.months"
          :key="month.title"
          no-action
        )
          template(v-slot:activator)
            v-list-item-content
              v-list-item-title(v-text="month.title")
          div(
            v-for="child in month.items"
            :key="child.auction_date"
          )
            v-list-item.pl-4(@click="goToOrderByAuction(child.auction_date)")
              v-list-item-content
                v-row
                  v-col(cols="3")
                    span.text-body-2 {{moment(child.auction_date).format('MM月DD日')}}
                  v-col(cols="4")
                    span.text-body-2 {{`引当済: ${child.pre_order_boxes}箱 `}}
                    span.text-body-2 {{`(${child.pre_order_stems})本`}}
                  v-col(cols="5")
                    span.text-body-2 {{`引当未: ${child.boxes}箱 (${child.stems})本 + 200本`}}
              v-list-item-action
                v-icon mdi-chevron-right
            v-divider
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

import { SectionHeader } from 'components'
import { urlPath } from 'utils'
import { ORDERS } from './mockup'

const Order = defineComponent({
  components: {
    SectionHeader
  },
  props: {},
  setup(props, { root }) {
    const items = ORDERS

    const goToOrderByAuction = (auctionDate: string): void => {
      root.$router.push({
        name: urlPath.ORDER_BY_AUCTION.name,
        params: {
          date: auctionDate
        },
        query: {
          subtitle: auctionDate
        }
      })
    }

    return {
      items,
      goToOrderByAuction
    }
  }
})
export default Order
</script>
