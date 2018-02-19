import Vue from 'vue';
import Router from 'vue-router';
import HomeComponent from 'app/containers/home/components/home-main/home-main.component';

Vue.use(Router);

const Lazy = () => import('containers/lazy/components/lazy-main/lazy-main.component');

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeComponent,
    },
    {
      path: '/lazy',
      name: 'lazy',
      component: Lazy,
    },
  ],
});

