import Vue from 'vue';
import Router from 'vue-router';
import HomeComponent from 'app/containers/home/components/home-main/home-main.component';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeComponent,
    },
  ],
});
