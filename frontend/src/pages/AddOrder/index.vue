<template lang="pug">
  div.create_order_container
    div
      div
        v-row.ma-0.pa-0(align="center")
          v-col(cols="4")
            span Auction date
          v-col(cols="8")
            v-select.pa-0(
              hide-details
              placeholder="Select auction date"
              @input="auctionDate = $event"
              :value="auctionDate"
              :items="auctionDates"
            )
      div
        v-row.ma-0.pa-0(align="center")
          v-col(cols="4")
            span Customer
          v-col(cols="8")
            v-select.pa-0(
              hide-details
              placeholder="Select customer"
              @input="customer = $event"
              :value="customer"
              :items="customers"
            )
    v-btn.white--text(
      width="100%"
      height="56"
      color="orange"
      @click="navigateToDetail"
    )
      span Save and create detail
</template>
<script lang="ts">
import { defineComponent, reactive, ref, Ref } from '@vue/composition-api'

import { urlPath } from 'utils'
import { AUCTION_DATES, CUSTOMERS } from './addOrder'

interface SetUp {
  auctionDates: Array<string>
  customers: Array<string>
  auctionDate: Ref<string>
  customer: Ref<string>
  navigateToDetail: () => void
}

const AddOrder = defineComponent({
  props: {},
  setup(props, { root }): SetUp {
    const auctionDates: Array<string> = reactive(AUCTION_DATES)
    const customers: Array<string> = reactive(CUSTOMERS)
    const auctionDate: Ref<string> = ref('')
    const customer: Ref<string> = ref('')

    const navigateToDetail = (): void => {
      root.$router.push({
        name: urlPath.CREATE_ORDER_DETAIL.name,
        query: {
          subtitle: `${auctionDate.value} ${customer.value}`
        }
      })
    }
    return {
      auctionDates,
      customers,
      auctionDate,
      customer,
      navigateToDetail
    }
  }
})
export default AddOrder
</script>

<style scoped>
.create_order_container {
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
}
.v-btn {
  border-radius: 0;
}
</style>
