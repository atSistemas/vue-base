import Vue from 'vue';
import App from 'app/App';
import router from '../routes';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});
