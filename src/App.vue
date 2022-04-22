<template>
  <router-view />
  <nav v-if="this.$route.params.id">
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
  </nav>
</template>

<style lang="scss">
* {
  margin: 0;
  body {
    min-height: 100vh;
    background-image: url("../public/assets/imgs/wallPaper.jpg");
  }
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }

  nav {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 20px;
    display: flex;
    justify-content: space-evenly;
    background-color: rgba(8, 8, 8, 0.699);
    z-index: 10;
    a {
      font-weight: bold;
      color: #fcfcfc;
      text-decoration: none;

      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
}
</style>
