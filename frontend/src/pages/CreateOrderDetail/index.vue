<template lang="pug">
  div.create_order_detail_container
    div
      div
      v-row.ma-1
      v-row.ma-0(align='center' justify='center')
        v-col(cols="4" align-self="center")
          span 品目
        v-col.divider-left(cols="7" align-self="end")
          v-select(:items="['item']"
            return-object
            hide-details)
      v-divider
      v-row.ma-0(align='center' justify='center')
        v-col(cols="4" align-self="center")
          span 品種
        v-col.divider-left(cols="7" align-self="end")
          v-select(:items="['variety']"
            return-object
            hide-details)
      v-divider
      v-row.ma-0(align='center' justify='center')
        v-col(cols="4" align-self="center")
          span 色
        v-col.divider-left(cols="7" align-self="end")
          v-select(:items="['red', 'pink', 'blue']"
            return-object
            hide-details
            multiple)
      v-divider
      v-row.ma-0(align='center' justify='center')
        v-col(cols="4" align-self="center")
          span 等級
        v-col.divider-left(cols="7" align-self="end")
          v-select(:items="['item']"
            return-object
            hide-details)
      v-divider
      v-row.ma-0(align='center' justify='center')
        v-col(cols="4" align-self="center")
          span サイズ
        v-col.divider-left(cols="7" align-self="end")
          v-select(:items="['item']"
            return-object
            hide-details)
      v-divider
      v-row.ma-0(align='center' justify='center')
        v-col(cols="4" align-self="center")
          span 入数
        v-col.divider-left(cols="7" align-self="end")
          v-select(:items="['item']"
            return-object
            hide-details)
      v-divider
      v-row.ma-0(align='center' justify='center')
        v-col(cols="4" align-self="center")
          span 単位
        v-col.divider-left(cols="7" align-self="end")
          v-select(:items="['unit']"
            return-object
            hide-details)
      v-divider
      v-row.ma-0(align='center' justify='center')
        v-col(cols="4" align-self="center")
          span 数量
        v-col.divider-left(cols="7" align-self="end")
          v-select(:items="['quantity']"
            return-object
            hide-details)
      v-divider
    v-btn-toggle(mandatory v-model="selected")
      v-btn(
        :color="selected === 0 ? 'orange' : 'white'"
        :class="selected === 0 ? 'white--text' : 'orange--text'"
        width="33%"
        height="56"
      )
        span 登録
      v-btn(
        :color="selected === 1 ? 'orange' : 'white'"
        :class="selected === 1 ? 'white--text' : 'orange--text'"
        width="33%"
        height="56"
      )
        span 登録&連続入力
      v-btn(
        :color="selected === 2 ? 'orange' : 'white'"
        :class="selected === 2 ? 'white--text' : 'orange--text'"
        width="34%"
        height="56"
      )
        span 登録&コピー
</template>

<script lang="ts">
import { defineComponent, ref, Ref } from '@vue/composition-api'

interface SetUp {
  selected: Ref<number>
}

const CreateOrderDetail = defineComponent({
  setup(): SetUp {
    const selected: Ref<number> = ref(1)
    return {
      selected
    }
  }
})
export default CreateOrderDetail
</script>

<style scoped lang="scss">
.v-input {
  padding-top: 0;
}
.divider-left {
  border-style: solid;
  border-width: 0px 0px 0px 1px;
  border-color: #ededed;
}
.bottom {
  position: fixed;
  bottom: 56px;
  justify-content: flex-end;
  display: flex;
  flex-direction: column;
  width: 100%;
}
.create_order_detail_container {
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
}
.v-btn-toggle {
  border-radius: 0;
}
</style>
