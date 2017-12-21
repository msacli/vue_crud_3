import Vue from 'vue'
import App from './App'
import VueAxios from 'vue-axios';
import router from './router'
import axios from 'axios';
Vue.use(VueAxios, axios);


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,  
  template: '<App/>',
  components: { App }
})
