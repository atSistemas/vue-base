import ForecastDetail from '../forecast-detail/forecast-detail.component.vue'

export default {
  name: 'WeatherForecast',
  components: {
    'weather-forecast-detail': ForecastDetail,
  },
  props: {
    forecasts: {
      type: ArrayBuffer,
      default: []
    }
  },
}
