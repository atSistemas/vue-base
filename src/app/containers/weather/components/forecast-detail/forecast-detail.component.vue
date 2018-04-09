<template>
  <div class="forecast-detail">
    <span class="title">
      {{ date }}
    </span>
    <span class="forecast-temp day">
      Day Temperature: <b>{{ day | temperature }}</b>
    </span>
    <span class="forecast-temp min">
      Min Daily Temperature: <b>{{ min | temperature }}</b>
    </span>
    <span class="forecast-temp max">
      Max Daily Temperature: <b>{{ max | temperature }}</b>
    </span>
    <span class="forecast-temp night">
      Night Temperature: <b>{{ night | temperature }}</b>
    </span>
    <span class="forecast-temp eve">
      Evening Daily Temperature: <b>{{ eve | temperature }}</b>
    </span>
    <span class="forecast-temp morn">
      Morning Daily Temperature: <b>{{ morn | temperature }}</b>
    </span>
  </div>
</template>

<style scoped>
.forecast-detail {
  display: flex;
  flex-flow: column nowrap;
  width: 300px;
  border: 3px solid #FAB10A;
  border-radius: 15px;
  margin: 10px 10px 10px 10px;
  padding: 10px 10px 10px 10px;
}

.title {
  font-size: 24px;
  font-weight: bold;
  align-self: center;
}

.forecast-temp {
  display: flex;
  flex-flow: row;
  justify-content: space-between;
}
</style>
<script>
import moment from 'moment'
import { temperature, pressure, humidity } from '../../constants/weather.filters'

export default {
  name: 'ForecastDetail',
  filters: {
    temperature,
    pressure,
    humidity,
  },
  computed: {
    date () {
      const dt = new Date(this.forecast.dt * 1000)
      return moment(dt).format('DD/MM/YYYY')
    },
    day () {
      return this.forecast.temp.day
    },
    min () {
      return this.forecast.temp.min
    },
    max () {
      return this.forecast.temp.max
    },
    night () {
      return this.forecast.temp.night
    },
    eve () {
      return this.forecast.temp.eve
    },
    morn () {
      return this.forecast.temp.morn
    },
  },
}
</script>
