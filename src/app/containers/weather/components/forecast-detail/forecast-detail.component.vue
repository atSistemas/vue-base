<template>
  <div class="forecast-detail">
    <span class="title">
      {{ date }}
    </span>
    <span class="forecast-temp day">
      Day Temperature: <b>{{ day | temperature }}</b>
    </span>
    <span class="forecast-temp min">
      Min Daily Temperature: <b>{{ min | temperature }}</b>
    </span>
    <span class="forecast-temp max">
      Max Daily Temperature: <b>{{ max | temperature }}</b>
    </span>
    <span class="forecast-temp night">
      Night Temperature: <b>{{ night | temperature }}</b>
    </span>
    <span class="forecast-temp eve">
      Evening Daily Temperature: <b>{{ eve | temperature }}</b>
    </span>
    <span class="forecast-temp morn">
      Morning Daily Temperature: <b>{{ morn | temperature }}</b>
    </span>
  </div>
</template>

<style scoped src="./forecast-detail.component.css"></style>
<script src="./forecast-detail.component.js"></script>
