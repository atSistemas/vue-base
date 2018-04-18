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

<script src="./station-marker.component.js"></script>
