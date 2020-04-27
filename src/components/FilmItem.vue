<template lang="html">
  <div class="">
    <p>{{ film.title }}</p>
  </div>
</template>

<script>
export default {
  name: 'film-item',
  props: ['film'],
}
</script>

<style lang="css" scoped>
</style>
