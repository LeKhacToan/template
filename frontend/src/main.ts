import Vue from 'vue'
import router from 'router'
import store from 'store'
import { vuetify, i18n, api, moment, numbro } from 'plugins'
import VueCompositionAPI from '@vue/composition-api'
import App from './App.vue'
import './registerServiceWorker'

Vue.config.productionTip = false

Vue.prototype.$api = api
Vue.prototype.moment = moment
Vue.prototype.numbro = numbro

Vue.use(VueCompositionAPI)

new Vue({
  router,
  store,
  vuetify,
  i18n,
  render: (h) => h(App)
}).$mount('#app')
