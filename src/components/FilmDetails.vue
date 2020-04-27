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
    </div>
</template>

<script>

import {eventBus} from '../main.js'

export default {
  name: 'film-details',
  props: ['film'],
}
</script>

<style lang="css" scoped>
</style>
