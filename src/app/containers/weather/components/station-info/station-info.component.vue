<template>
  <gmap-info-window :id="id">
    <div class="container">
      <span class="content temperature">
        Temperature: <b>{{ temperature | temperature }}</b>
      </span>
      <span class="content humidity">
        Humidity: <b>{{ humidity | humidity }}</b>
      </span>
      <span class="content pressure">
        Pressure: <b>{{ pressure | pressure }}</b>
      </span>
    </div>
  </gmap-info-window>
</template>

<style scoped src="./station-info.component.css"></style>

<script src="./station-info.component.js"></script>
