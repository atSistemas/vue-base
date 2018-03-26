<template>
  <gmap-info-window :id="id">
    <div class="container">
      <span class="content temperature">
        Temperature: <b>{{ temperature | temperature }}</b>
      </span>
      <span class="content humidity">
        Humidity: <b>{{ humidity | humidity }}</b>
      </span>
      <span class="content pressure">
        Pressure: <b>{{ pressure | pressure }}</b>
      </span>
    </div>
  </gmap-info-window>
</template>

<style scoped>
.container {
  display: flex;
  flex-flow: column nowrap;
}

.content{
  display: flex;
  flex-flow: row nowrap;
}
</style>

<script>
import { temperature, humidity, pressure } from '../../constants/weather.filters'

export default {
  name: 'StationInfo',
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
  },
  computed: {
    temperature () {
      return this.info.temp
    },
    pressure () {
      return this.info.pressure
    },
    humidity () {
      return this.info.humidity
    }
  }
}
</script>
