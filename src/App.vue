<template>
  <div class="container" id="app">
    <h1>Star Wars App</h1>
    <div class="row">
      <div class="list">
        <film-list :films="films"></film-list>
      </div>
      <div class="details">

      </div>
    </div>
  </div>
</template>

<script>

import FilmList from './components/FilmList.vue';
import FilmDetails from './components/FilmDetails.vue';

export default {
  name: 'App',
  data() {
    return {
      films: [],
    }
  },
  mounted() {
    fetch('https://swapi.dev/api/films/')
    .then(promise => promise.json())
    .then(data => this.films = data.results);
  },
  methods: {

  },
  components: {
    'film-list': FilmList,
    'film-details': FilmDetails,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.container {
  display:flex;
  flex-direction: column;
}
.row {
  display:flex;
}
</style>
