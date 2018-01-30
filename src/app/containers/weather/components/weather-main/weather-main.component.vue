<template>
  <div>
    <weather-map
      :stations="stations"
      @selectStation="onSelectStation"
    ></weather-map>
    <weather-forecast
      v-if="hasForecast"
      :forecasts="forecasts"
    ></weather-forecast>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import MapComponent from '../map/map.component';
import ForecastComponent from '../forecast/forecast.component';

export default {
  name: 'weather-main',
  components: {
    'weather-map': MapComponent,
    'weather-forecast': ForecastComponent,
  },
  computed: {
    ...mapGetters([
      'stations',
      'forecasts',
    ]),
    hasForecast: function(){
      return this.forecasts.size > 0;
    },
  },
  methods: {
    ...mapActions([
      'getStations',
      'onSelectStation',
    ]),
  },
  created: function(){
    this.getStations();
  },
};
</script>
