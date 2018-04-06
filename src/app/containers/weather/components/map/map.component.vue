<template>
  <gmap-map
    :zoom="zoom"
    :center="center"
    :options="options"
    class="map"
    @g-tilesloaded="onLoad()"
  >
    <weather-station-marker
      v-for="(station, index) of stations"
      :key="index"
      :station="station"
      @select-station="onSelectStation($event)"
    />
  </gmap-map>
</template>

<style scoped>
.map {
  height: calc(100vh - 50px)
}
</style>

<script>
import Vue from 'vue/dist/vue'
import * as VueGoogleMaps from 'vue2-google-maps'
import { mapGetters } from 'vuex'
import StationMarkerComponent from '../station-marker/station-marker.component'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyDCNAQelN8Ug0jxWzpoZz_PFW_SKBTHcJs',
    v: '3',
    libraries: 'places'
  }
})

export default {
  name: 'WeatherMap',
  components: {
    'weather-station-marker': StationMarkerComponent,
  },
  data () {
    return {
      zoom: 6,
      lat: 40.4047789,
      lng: -3.653974,
      options: {
        fullscreenControl: false,
        mapTypeControl: false,
        streetViewControl: false,
      }
    }
  },
  computed: {
    center () {
      const { lat, lng } = this
      return { lat, lng }
    },
    ...mapGetters([
      'stations',
    ]),
  },
  methods: {
    onLoad () {
      this.$emit('loadMap', true)
    },
    onSelectStation (station) {
      this.$emit('selectStation', station)
    },
  }
}
</script>
