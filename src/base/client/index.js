import Vue from 'vue'
import App from 'app/App'

import store from '../store'
import router from '../routes'

// FIXME
Vue.config.productionTip = false

new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>',
})
