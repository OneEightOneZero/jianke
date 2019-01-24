import Vue from 'vue'

import 'weui'

import axios from 'axios'

// import './styles/footer.css'

import store from './configs/store.js'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

import './styles/icon.css'
import './styles/aliplayer.css'

import './iconfont/iconfont.css'
import './iconfont/iconfont.js'

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