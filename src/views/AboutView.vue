<template>
  <div v-if="data" class="about--box">
    <section class="about--box__head">
      <h1>Nazwa projektu:{{ data.title }}</h1>
      <section class="head--about">
        <h3>
          Założenia projektu
          <p>{{ data.description }}</p>
        </h3>

        <div class="head--about--img__box">
          <img class="head--about--img" :src="data.prevImg" alt="" />
          <p>Strona live: <a :href="data.link">link</a></p>
        </div>
      </section>
    </section>
    <h2>Opis wybranych funkcji projektu</h2>
    <section
      v-for="item in data.photo"
      :key="item.link"
      class="about--box--contents"
      :class="item.id % 2 == 0 ? 'left' : 'right'"
    >
      <div class="contents--img__box">
        <img class="contents--img" :src="item.link" alt="" />
      </div>
      <div class="contents--img__description">
        <p>{{ item.description }}</p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: "",
    };
  },
  methods: {
    async getData() {
      const url = "http://localhost:3000/project/" + this.$route.params.id;
      const response = await fetch(url);
      this.data = await response.json();
    },
  },
  async created() {
    this.getData();
  },
};
</script>

<style lang="scss" scoped>
$small: 300px;
$medium: 900px;
.about--box {
  @media screen and (max-width: $medium) {
    min-height: auto;
    padding-top: 1rem;
  }
  width: 100%;
  min-height: 90vh;
  overflow-x: hidden;
  background-color: white;
  padding-top: 3rem;
  h2 {
    text-align: center;
    @media screen and (max-width: $medium) {
      padding: 0px;
    }
  }
  .about--box__head {
    width: 100%;
    min-height: 50vh;
    padding: 20px;
    @media screen and (max-width: $medium) {
      padding: 0px;
    }
    h1 {
      text-align: center;
      font-size: 4vw;
      margin: 2rem;
    }
    .head--about {
      @media screen and (max-width: $medium) {
        display: flex;
        flex-flow: column;
        justify-content: center;
        align-items: center;
      }
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      h3 {
        @media screen and (max-width: $medium) {
          width: 100%;
          text-align: center;
          font-size: 30px;
        }
        width: 40%;
        text-align: center;
        font-size: 30px;
        p {
          padding: 10px;
          text-align: left;
          font-size: 20px;
          @media screen and (max-width: $medium) {
            text-align: center;
            font-size: 14px;
          }
        }
      }
      .head--about--img__box {
        width: auto;
        height: 50%;
        text-align: center;
        padding: 10px;
        box-shadow: 0px 0px 10px 20px rgba(0, 0, 0, 0.2);
        .head--about--img {
          width: 500px;
          @media screen and (max-width: $medium) {
            width: 100%;
          }
        }
      }
    }
  }
  .left {
    flex-flow: row-reverse;
  }
  .right {
    flex-flow: row;
  }
  .about--box--contents {
    @media screen and (max-width: $medium) {
      display: flex;
      flex-flow: column;
      justify-content: center;
      align-items: center;
    }
    display: flex;
    justify-content: center;
    padding: 20px;
    .contents--img__box {
      width: auto;
      height: 50%;
      padding: 10px;
      box-shadow: 0px 0px 10px 20px rgba(0, 0, 0, 0.2);
      .contents--img {
        @media screen and (max-width: $medium) {
          width: 100%;
        }
        width: 500px;
      }
    }
    .contents--img__description {
      @media screen and (max-width: $medium) {
        margin-top: 20px;
      }
      text-align: center;
      margin: auto 0;
      width: 50%;
    }
  }
}
</style>
