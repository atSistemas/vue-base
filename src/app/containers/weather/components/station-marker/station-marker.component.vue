<template>
  <gmap-marker
    :position="position"
    :zIndex="index"
    @mouseover="showInfoWindow($event)"
    @mouseout="hideInfoWindow($event)"
    :clickable="true"
    @g-click="onSelectStation()"
  >
    <weather-station-info
      v-if="isHovered"
      :id="infoWindowID"
      :info="info"
    ></weather-station-info>
  </gmap-marker>
</template>

<script>
import StationInfoComponent from '../station-info/station-info.component';

export default {
  name: 'station-marker',
  props: ['stationSelected', 'station', 'index'],
  components: {
    'weather-station-info': StationInfoComponent,
  },
  data: () => ({
    isHovered: false,
  }),
  computed: {
    position() {
      const { coord = {} } = this.station;
      return {
        lat: coord.Lat,
        lng: coord.Lon,
      };
    },
    infoWindowID() {
      return `iw-${ this.index }`;
    },
    info() {
      return this.station.main;
    },
  },
  methods: {
    onSelectStation() {
      this.$emit('selectStation', this.station);
    },
    showInfoWindow(event) {
      this.isHovered = true;
    },
    hideInfoWindow({ target: marker }) {
      this.isHovered = false;
    },
  }
};
</script>
