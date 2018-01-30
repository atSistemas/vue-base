<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view></router-view>
    <app-footer />
  </div>
</template>

<script>
import FooterComponent from 'components/footer/footer.component';

export default {
  name: 'app',
  components: {'app-footer': FooterComponent}
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
