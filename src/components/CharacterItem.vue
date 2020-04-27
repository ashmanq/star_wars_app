<template lang="html">
  <div class="">
    <tr>
      <th>Name</th>
      <td>{{ character.name }}</td>
    </tr>
    <tr>
      <th>Height</th>
      <td>{{ character.height | cmToMeters }}</td>
    </tr>
    <tr>
      <th>Homeworld</th>
      <td v-if="homeworld">{{ homeworld.name }}</td>
    </tr>
    <tr>
      <th>Homeworld Terrain</th>
      <td v-if="homeworld">{{ homeworld.terrain }}</td>
    </tr>
  </div>
</template>

<script>
export default {
  name: 'character-item',
  props: ['character'],
  data() {
    return {
        homeworld: null,
    }
  },
  mounted() {
    this.getHomeWorld();
  },

  methods: {
    getHomeWorld: function() {
      fetch(this.character.homeworld)
      .then(response => response.json())
      .then(data => this.homeworld = data);
    },
  },

  filters: {
    cmToMeters: function(heightInCm) {
      return heightInCm/100 + 'm';
    },
  },

}
</script>

<style lang="css" scoped>
</style>
