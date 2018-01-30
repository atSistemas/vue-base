import Vue from 'vue';
import App from 'app/App';
import router from '../routes';
import store from '../store';
import maps from '../plugins/maps';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App },
});
