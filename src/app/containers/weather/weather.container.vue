<template>
  <div>
    <weather-map
      :stations="stations"
      @selectStation="onSelectStation"/>
    <weather-forecast
      v-if="hasForecast"
      :forecasts="forecasts"/>
  </div>
</template>

<script src="./weather.container.js"></script>
