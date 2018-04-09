<template>
  <gmap-marker
    :position="position"
    :z-index="index"
    :clickable="true"
    @mouseover="showInfoWindow($event)"
    @mouseout="hideInfoWindow($event)"
    @g-click="onSelectStation()">
    <weather-station-info
      v-if="isHovered"
      :id="infoWindowID"
      :info="info"
    />
  </gmap-marker>
</template>

<script>
import StationInfoComponent from '../station-info/station-info.component'

export default {
  name: 'StationMarker',
  components: {
    'weather-station-info': StationInfoComponent,
  },
  props: {
    stationSelected: {
      type: Number,
      default: 0
    },
    station: {
      type: Object,
      default: Object
    },
    index: {
      type: Number,
      default: 0
    }
  },
  data: () => ({
    isHovered: false,
  }),
  computed: {
    position () {
      const { coord = {} } = this.station
      return {
        lat: coord.Lat,
        lng: coord.Lon,
      }
    },
    infoWindowID () {
      return `iw-${this.index}`
    },
    info () {
      return this.station.main
    },
  },
  methods: {
    onSelectStation () {
      this.$emit('selectStation', this.station)
    },
    showInfoWindow (event) {
      this.isHovered = true
    },
    hideInfoWindow ({ target: marker }) {
      this.isHovered = false
    },
  }
}
</script>
