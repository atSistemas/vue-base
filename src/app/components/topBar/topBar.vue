<template>
  <header>
    <div class="nav">
      <ul>
        <li class="tutorials">
          <router-link to="/">Vue Base</router-link>
        </li>
        <li class="tutorials">
          <router-link to="/calculator">Calculator</router-link>
        </li>
        <li class="tutorials">
          <router-link to="/weather">Weather</router-link>
        </li>
        <li class="tutorials">
          <router-link to="/lazy">Lazy load</router-link>
        </li>
      </ul>
    </div>
  </header>
</template>
<style>
  :host {
    margin: 0;
    padding: 0;
  }
  .nav ul {
    list-style: none;
    background-color: #41b883;
    text-align: center;
    padding: 0;
    margin: 0;
  }
  .nav li {
    font-family: 'Oswald', sans-serif;
    font-size: 1.2em;
    line-height: 40px;
    height: 40px;
    border-bottom: 1px solid #888;
  }
  .nav a {
    text-decoration: none;
    color: #fff;
    display: block;
    transition: .3s background-color;
  }
  .nav a:hover {
    background-color: #35495e;
  }
  .nav a.active {
    background-color: #35495e;
    color: #444;
    cursor: default;
  }
  @media screen and (min-width: 600px) {
    .nav li {
      width: 150px;
      border-bottom: none;
      height: 50px;
      line-height: 50px;
      font-size: 1.4em;
    }
    .nav li {
      display: inline-block;
      margin-right: -4px;
    }
  }
</style>

<script>
export default {
  name: 'TopBar'
}
</script>
