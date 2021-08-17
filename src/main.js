import Vue from 'vue'
import App from './App.vue'
import router from './router'
require("./plugins/buefy")
require("./plugins/vuelidate")
import axios from './plugins/axios';

Vue.use(axios);
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
