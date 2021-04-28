const MENU = {
  path: '/',
  name: 'Menu'
}
const ORDER = {
  path: '/order',
  name: 'Order'
}
const ORDER_BY_AUCTION = {
  path: '/order/auction_date/:date',
  name: 'Orders by date'
}
const ORDER_DETAIL = {
  path: '/order/detail',
  name: 'Order detail'
}
const ADD_ORDER = {
  path: '/add_order',
  name: 'Add order'
}
const CREATE_ORDER_DETAIL = {
  path: '/create_order',
  name: 'Create order detail'
}
const SALES = {
  path: '/sales',
  name: 'Sales'
}
const SETTING = {
  path: '/setting',
  name: 'Setting'
}

const DISABLE_NAVIGATION = [MENU.path, ORDER.path, ADD_ORDER.path, SALES.path, SETTING.path]

export {
  MENU,
  ORDER,
  ADD_ORDER,
  SALES,
  SETTING,
  DISABLE_NAVIGATION,
  ORDER_BY_AUCTION,
  ORDER_DETAIL,
  CREATE_ORDER_DETAIL
}
