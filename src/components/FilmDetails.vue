<template lang="html">
  <div class="container">
    <h2>{{ film.title }}</h2>
    <router-link :to="{ name: 'movieopening', params:{openingCrawl, title} }">Movie Opening</router-link>
    <table>
      <tr>
        <th>Episode No</th>
        <td>{{ film.episode_id }}</td>
      </tr>
      <tr>
        <th>Producer</th>
        <td>{{ film.producer }}</td>
      </tr>
      <tr>
        <th>Director</th>
        <td>{{ film.director }}</td>
      </tr>
      <tr>
        <th>Release Date</th>
        <td>{{ film.release_date | formatDate }}</td>
      </tr>
    </table>
    <h2>Characters</h2>
    <table>


    <character-list :characters="characters"></character-list>
      </table>
    </div>
</template>

<script>

import {eventBus} from '../main.js'
import CharacterList from './CharacterList.vue'

export default {
  name: 'film-details',
  props: ['film'],
  data() {
    return {
      characters: null,
      openingCrawl: this.film.opening_crawl,
      title: this.film.title,
    }
  },
  methods: {
    getCharacters() {
      const characterPromises = this.film.characters.map((characterURL) => {
        return fetch(characterURL).then(response => response.json());
      });
      Promise.all(characterPromises)
      .then(data => this.characters = data);
    },
  },
  mounted() {
    this.getCharacters();
  },
  components: {
    'character-list': CharacterList,
  }
}
</script>

}
<style lang="css" scoped>
.container {
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
}
table {
  /* border-style: solid; */
  color: black;
  font-weight: bold;
  width: 100%;
}

table tr:nth-child(even) {
  background-color: #696969;
}

table tr:nth-child(odd){
  background-color: #969696
}
th {
  text-align: left;
}
td {
  text-align: right;
}
tr {
  width: 100%;
}

a {
  font-size: 2em;
  padding-bottom: 10px;
}
</style>
