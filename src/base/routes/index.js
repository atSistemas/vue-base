import Vue from 'vue';
import Router from 'vue-router';
import HomeComponent from 'app/containers/home/components/home-main/home-main.component';
import CounterComponent from 'app/containers/counter/components/counter-main/counter-main.component';
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
      path: '/counter',
      name: 'counter',
      component: CounterComponent,
    },
    {
      path: '/todo',
      name: 'todo',
      component: TodoComponent,
    },
  ],
});
