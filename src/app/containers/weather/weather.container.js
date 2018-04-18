import { mapActions, mapGetters } from 'vuex'
import MapComponent from './components/map/map.component.vue'
import ForecastComponent from './components/forecast/forecast.component.vue'

export default {
  name: 'WeatherMain',
  components: {
    'weather-map': MapComponent,
    'weather-forecast': ForecastComponent,
  },
  computed: {
    ...mapGetters([
      'stations',
      'forecasts',
    ]),
    hasForecast: function () {
      return this.forecasts.size > 0
    },
  },
  created: function () {
    this.getStations()
  },
  methods: {
    ...mapActions([
      'getStations',
      'onSelectStation',
    ]),
  },
}
