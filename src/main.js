import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import router from './router'
import store from './store'
import axios from 'axios'
import api from './api/order.js'
import 'element-ui/lib/theme-chalk/index.css';


Vue.use(ElementUI);

Vue.prototype.api = api
Vue.prototype.axios = axios

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
