<template lang="html">
  <div class="">
    <h2>{{ film.title }}</h2>
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
      <td>{{ film.release_date }}</td>
    </tr>
    <h2>Characters</h2>
    <character-list :characters="characters"></character-list>
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

<style lang="css" scoped>
</style>
