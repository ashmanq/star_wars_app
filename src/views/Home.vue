<template lang="html">
  <div class="container" id="home">
    <h1>Star Wars App</h1>
    <div class="row">
      <div class="list">
        <film-list :films="films"></film-list>
      </div>
      <div class="details">
        <film-details v-if="selectedFilm" :film="selectedFilm"></film-details>
      </div>
    </div>
    <div class="">
      <router-view id="view"></router-view>
    </div>
  </div>
</template>

<script>

import FilmList from '@/components/FilmList.vue';
import FilmDetails from '@/components/FilmDetails.vue';
import {eventBus} from '@/main.js';

export default {

  data() {
    return {
      films: [],
      selectedFilm: null,
    }
  },
  mounted() {
    fetch('https://swapi.dev/api/films/')
    .then(promise => promise.json())
    .then(data => this.films = data.results);

    eventBus.$on('selected-film', (film) => {
      this.selectedFilm = film;
    })
  },
  methods: {

  },
  components: {
    'film-list': FilmList,
    'film-details': FilmDetails,
  }
}
</script>

<style lang="css" scoped>

#home {
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
  justify-content: space-around;
}
</style>
