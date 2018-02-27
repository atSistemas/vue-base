<template>
  <footer>
    <h2>Apps</h2>
    <ul>
      <li>
        <router-link to="/">
          Inicio
        </router-link>
      </li>
      <li>
        <router-link
          to="/counter"
        >
          Contador
        </router-link>
      </li>
      <li>
        <router-link
          to="/weather"
        >
          Meteorología
        </router-link>
      </li>
    </ul>
  </footer>
</template>

<style scoped>
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
</style>

<script>
  export default {
    name: 'app-footer',
  };
</script>
