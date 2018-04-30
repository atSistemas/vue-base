import { temperature, humidity, pressure } from '../../constants/weather.filters'

export default {
  name: 'StationInfo',
  data () {
    return {
      temperature: this.info.temp,
      pressure: this.info.pressure,
      humidity: this.info.humidity
    }
  },
  filters: {
    temperature,
    pressure,
    humidity,
  },
  props: {
    id: {
      type: String,
      default: ''
    },
    info: {
      type: Object,
      default: Object
    }
  }
}
