import Vue from 'vue/dist/vue'
import Router from 'vue-router'
import { context } from 'base'

// if(context.client) {
import HomeContainer from 'containers/home/home.container.js'
// import CalculatorContainer from 'containers/calculator/calculator.container.vue'
// import WheaterContainer from 'containers/weather/weather.container.vue'
// import LazyContainer from 'containers/lazy/lazy.container.vue'
// } else {
//   const HomeContainer = () => import('containers/home/home.container.vue')
//   const CalculatorContainer = () => import('containers/calculator/calculator.container.vue')
//   const WeatherContainer = () => import('containers/weather/weather.container.vue')
//   const LazyContainer = () => import('containers/lazy/lazy.container.vue')
// }

Vue.use(Router)

export function createRouter () {
  return new Router({
    mode: 'history',
    routes: [
      {
        path: '/',
        name: 'home',
        component: HomeContainer,
      },
      // {
      //   path: '/calculator',
      //   name: 'calculator-container',
      //   component: CalculatorContainer,
      // },
      // {
      //   path: '/weather',
      //   name: 'weather',
      //   component: WheaterContainer,
      // },
      // {
      //   path: '/lazy',
      //   name: 'lazy',
      //   component: LazyContainer
      // }
    ],
  })
}
