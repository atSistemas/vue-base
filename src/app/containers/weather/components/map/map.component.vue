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

<style scoped src="./map.component.css"></style>
<script src="./map.component.js"></script>
