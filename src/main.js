// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import store from './store/index.js'
// import { Lazyload } from 'vant'
// import { Swipe, SwipeItem } from 'vant'
// import Mock from '@/mock'
import './axios.js'
import axios from 'axios'
import VueAMap from 'vue-amap'

Vue.use(VueAMap)

VueAMap.initAMapApiLoader({
    key:"1554f3e66f47d1e624abe17e2ad6a6ec",
    plugin:['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor'],   //插件
    v:"1.4.4"  //版本号，默认高德sdk版本为1.4.4，可自行修改
})
Vue.prototype.$ajax = axios
// Vue.use(Mock)
Vue.use(Vuex)
Vue.config.productionTip = false
// Vue.use(Lazyload)
// Vue.use(Swipe)
// Vue.use(SwipeItem)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
