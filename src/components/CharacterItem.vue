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
    <!-- <tr>
      <th>Mass</th>
      <td>{{ character.mass }}</td>
    </tr>
    <tr>
      <th>Gender</th>
      <td>{{ character.gender }}</td>
    </tr>
    <tr>
      <th>Birth Year</th>
      <td>{{ character.birth_year }}</td>
    </tr> -->
  </div>
</template>

<script>
export default {
  name: 'character-item',
  props: ['character'],

  filters: {
    cmToMeters: function(value) {
      return value/100 + 'm';
    },
  },

}
</script>

<style lang="css" scoped>
</style>
