import Vue from 'vue'

import 'weui'

import axios from 'axios'

import store from './configs/store.js'

import '../style/icon.css'
import '../style/aliplayer.css'
import $ from 'jquery'

Vue.prototype.$ = $;
Vue.prototype.$axios = axios;

Vue.config.productionTip = false

import router from './configs/router.js'

new Vue({
  el: "#app",
  router,
  store,
  render: h => h('router-view'),
})