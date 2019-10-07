import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/store'
import './registerServiceWorker'
//Vant UI
import Vant from './vant/vant'
Vant()
//qs解决post请求跨域问题
import qs from 'qs'
Vue.prototype.$qs = qs
//axios
import axios from 'axios'
Vue.prototype.$axios = axios

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
