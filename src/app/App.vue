<template>
  <div id="app">
    <top-bar/>
    <router-view/>
  </div>
</template>
<style>
  body {
    margin: 0px;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
<script>
import topBar from './components/topBar/topBar.component.vue'

export default {
  name: 'App',
  components: {
    topBar
  }
}
</script>
