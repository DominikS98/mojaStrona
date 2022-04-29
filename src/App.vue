<template>
  <router-view :key="$route.path" />
  <nav class="menu--box" v-if="$route.params.id">
    <section class="menu" :class="{ active: isActive }">
      <router-link to="/">Start</router-link>
      <router-link
        v-for="item in data"
        :key="item.id"
        :to="{
          name: 'more',
          params: {
            id: item.id,
          },
        }"
        >{{ item.title }}</router-link
      >
    </section>
    <div class="hamburger--box" @click="myFilter">
      <span class="hamburger__line"></span>
      <span class="hamburger__line"></span>
      <span class="hamburger__line"></span>
    </div>
  </nav>
</template>
<script>
export default {
  data() {
    return {
      data: [],
      isActive: false,
    };
  },
  methods: {
    myFilter: function () {
      this.isActive = !this.isActive;
    },
  },
  async created() {
    const url = "http://localhost:3000/project";
    const response = await fetch(url);
    this.data = await response.json();
  },
};
</script>
<style lang="scss">
$small: 300px;
$medium: 900px;
$green: #0aff7c;
$black: #000000;
$blue: #370aff;
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
  }

  .menu--box {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    min-height: 50px;
    @media screen and (max-width: $medium) {
      background-color: rgba(8, 8, 8, 0.856);
    }
    .menu {
      transition: 0.5s;
      display: flex;
      padding: 20px;
      justify-content: space-evenly;
      background-color: rgba(8, 8, 8, 0.856);
      z-index: 10;
      a {
        font-weight: bold;
        color: #fcfcfc;
        text-decoration: none;

        &.router-link-exact-active {
          color: #42b983;
        }
      }

      .hamburger--box {
        @media screen and (max-width: $medium) {
          display: block;
          position: absolute;
          right: 0;
          bottom: 0;
          span {
            height: 0px;
            width: 5px;
            border: 1px solid white;
            margin: 1px;
          }
        }
      }
      @media screen and (max-width: $medium) {
        display: none;
        flex-flow: column;
        height: 50vh;
        padding: 0px;
        overflow: hidden;
      }
    }
    .active {
      display: flex;
    }
    .hamburger--box {
      @media screen and (max-width: $medium) {
        position: absolute;
        right: 25px;
        top: 15px;
        span {
          height: 0px;
          width: 1px;
          border: 1px solid rgb(252, 252, 252);
          margin: 2px;
        }
      }
    }
  }
}
</style>
