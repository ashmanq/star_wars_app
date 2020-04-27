<template lang="html">
  <div class="">
    <character-item v-for="(character, index) in characters" :character="character" :key="index"></character-item>
  </div>
</template>

<script>

import CharacterItem from './CharacterItem.vue';

export default {
  name: 'character-list',
  props: ['characters'],

  components: {
    'character-item': CharacterItem,
  }
}
</script>

<style lang="css" scoped>
</style>
