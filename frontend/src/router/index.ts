import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

import { urlPath } from 'utils'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    ...urlPath.MENU,
    component: () => import(/* webpackChunkName: "menu" */ '../pages/Menu/index.vue')
  },
  {
    ...urlPath.ORDER,
    component: () => import(/* webpackChunkName: "list_order" */ '../pages/Order/index.vue')
  },
  {
    ...urlPath.ORDER_BY_AUCTION,
    component: () =>
      import(/* webpackChunkName: "order_by_auction_date" */ '../pages/OrderByAuction/index.vue')
  },
  {
    ...urlPath.ORDER_DETAIL,
    component: () => import(/* webpackChunkName: "order_detail" */ '../pages/OrderDetail/index.vue')
  },
  {
    ...urlPath.ADD_ORDER,
    component: () => import(/* webpackChunkName: "add_order" */ '../pages/AddOrder/index.vue')
  },
  {
    ...urlPath.CREATE_ORDER_DETAIL,
    component: () =>
      import(/* webpackChunkName: "create_order_detail" */ '../pages/CreateOrderDetail/index.vue')
  },
  {
    ...urlPath.SALES,
    component: () => import(/* webpackChunkName: "sales" */ '../pages/Sales/index.vue')
  },
  {
    ...urlPath.SETTING,
    component: () => import(/* webpackChunkName: "settings" */ '../pages/Setting/index.vue')
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
