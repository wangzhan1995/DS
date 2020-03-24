import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import axios from 'axios';// npm i -D axios
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
Vue.prototype.$axios = axios;
import Qs from 'qs'; // 引用 qs 模块；
Vue.prototype.qs = Qs;
Vue.use(ElementUI)

Vue.config.productionTip = false

//插件
import echarts from 'echarts'
Vue.prototype.$echarts = echarts

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
