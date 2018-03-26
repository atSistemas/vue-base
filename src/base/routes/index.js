import Vue from 'vue'
import Router from 'vue-router'

import CalculatorContainer from 'containers/calculator/calculator.container.vue'
import HomeComponent from 'containers/home/components/home-main/home-main.component'
import CounterComponent from 'containers/counter/components/counter-main/counter-main.component'
import WeatherComponent from 'containers/weather/components/weather-main/weather-main.component'

const Lazy = () => import('containers/lazy/components/lazy-main/lazy-main.component')

Vue.use(Router)

export default new Router({
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
      path: '/counter',
      name: 'counter',
      component: CounterComponent,
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
