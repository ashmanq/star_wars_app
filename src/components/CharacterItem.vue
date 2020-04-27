<template lang="html">
  <div class="container">
    <table>
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
    </table>
    <p></p>
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

.cotainer {
  display:flex;
  flex-direction: column;
}

table {
  /* border-style: solid; */
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
</style>
