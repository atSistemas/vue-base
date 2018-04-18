import moment from 'moment'
import { temperature, pressure, humidity } from '../../constants/weather.filters'

export default {
  name: 'ForecastDetail',
  data () {
    return {
      day: this.forecast.temp.day,
      min: this.forecast.temp.min,
      max: this.forecast.temp.max,
      night: this.forecast.temp.night,
      eve: this.forecast.temp.eve,
      morn: this.forecast.temp.morn
    }
  },
  filters: {
    temperature,
    pressure,
    humidity,
  },
  computed: {
    date () {
      const dt = new Date(this.forecast.dt * 1000)
      return moment(dt).format('DD/MM/YYYY')
    }
  }
}
