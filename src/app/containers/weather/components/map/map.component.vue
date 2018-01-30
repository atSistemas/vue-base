<template>
  <gmap-map
    class="map"
    :zoom="zoom"
    :center="center"
    :options="options"
    @g-tilesloaded="onLoad()"
  >
    <weather-station-marker
      v-for="(station, index) of stations"
      :key="index"
      :station="station"
      v-on:select-station="onSelectStation($event)"
    ></weather-station-marker>
  </gmap-map>
</template>

<style scoped>
.map {
  height: 75vh;
}
</style>

<script>
import { mapGetters } from 'vuex';
import StationMarkerComponent from '../station-marker/station-marker.component';

export default {
  name: 'weather-map',
  components: {
    'weather-station-marker': StationMarkerComponent,
  },
  data() {
    return {
      zoom: 6,
      lat: 40.4047789,
      lng: -3.653974,
      options: {
        fullscreenControl: false,
        mapTypeControl: false,
        streetViewControl: false,
      }
    };
  },
  computed: {
    center() {
      const { lat, lng } = this;
      return { lat, lng };
    },
    ...mapGetters([
      'stations',
    ]),
  },
  methods: {
    onLoad() {
      this.$emit('loadMap', true);
    },
    onSelectStation(station) {
      this.$emit('selectStation', station);
    },
  }
};
</script>
