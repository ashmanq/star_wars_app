<template lang="html">
  <div class="">
    <p class="item" v-on:click="selectFilm">{{ film.title }}</p>
  </div>
</template>

<script>

import {eventBus} from '../main.js'

export default {
  name: 'film-item',
  props: ['film'],
  methods: {
    selectFilm: function() {
      eventBus.$emit('selected-film', this.film);
    },
  },
}
</script>

<style lang="css" scoped>
.item {
  font-size: 1.5em;
}
.item:hover {
  cursor: pointer;
}

</style>
