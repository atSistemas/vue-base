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

<style scoped src="./forecast.component.css"></style>
<script src="./forecast.component.js"></script>
