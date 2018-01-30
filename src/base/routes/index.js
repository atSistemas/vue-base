import Vue from 'vue';
import Router from 'vue-router';
import HomeComponent from 'app/containers/home/components/home-main/home-main.component';
import TodoComponent from 'app/containers/todo/components/todo-main/todo-main.component';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeComponent,
    },
    {
      path: '/todo',
      name: 'todo',
      component: TodoComponent,
    },
  ],
});
