import Vue from 'vue';
import Router from 'vue-router';
import MainComponent from 'app/containers/main/components/main-component/main-component';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: MainComponent,
    },
  ],
});
