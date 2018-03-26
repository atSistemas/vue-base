import Vue from 'vue'
import Router from 'vue-router'

import CalculatorContainer from 'containers/calculator/calculator.container.vue'
import HomeComponent from 'containers/home/home.container.vue'
import WeatherComponent from 'containers/weather/weather.container.vue'

const Lazy = () => import('containers/lazy/lazy.container.vue')

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeComponent,
    },
    {
      path: '/calculator',
      name: 'calculator-container',
      component: CalculatorContainer,
    },
    {
      path: '/weather',
      name: 'weather',
      component: WeatherComponent,
    },
    {
      path: '/lazy',
      name: 'lazy',
      component: Lazy
    }
  ],
})
