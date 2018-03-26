<template>
  <div class="forecast-container">
    <h2>Forecast</h2>
    <div class="forecast-list">
      <weather-forecast-detail
        v-for="(forecast, index) of forecasts"
        :key="index"
        :forecast="forecast"
      />
    </div>
  </div>
</template>

<style scoped>
  .forecast-container {
    display: flex;
    flex-flow: column wrap;
    align-items: center;
  }

  .forecast-list {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
  }
</style>

<script>
import ForecastDetail from '../forecast-detail/forecast-detail.component'

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
</script>
