import Vue from 'vue'
import Router from 'vue-router'

const HomeContainer = () => import('containers/home/home.container.vue')
const CalculatorContainer = () => import('containers/calculator/calculator.container.vue')
const WeatherContainer = () => import('containers/weather/weather.container.vue')
const LazyContainer = () => import('containers/lazy/lazy.container.vue')

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeContainer,
    },
    {
      path: '/calculator',
      name: 'calculator-container',
      component: CalculatorContainer,
    },
    {
      path: '/weather',
      name: 'weather',
      component: WeatherContainer,
    },
    {
      path: '/lazy',
      name: 'lazy',
      component: LazyContainer
    }
  ],
})
