<template>
  <div id="app">
    <nav>
      <router-link :to="{ name: 'home' }">Home</router-link>
      <!-- <router-link :to="{ name: 'about', params:{message} }">About</router-link> -->
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      message: "Hellow World!",
    }
  }
}
</script>

<style lang="css" scoped>

nav {
  display: flex;
  justify-content: center;
  width: 50vw;
  margin: 0 auto;
}

#view {
  width: 50vw;
  margin: 0 auto;
}

a{
  margin: 0 20px;
  text-align: left;
  width:100%;
  color:green;
}

</style>
