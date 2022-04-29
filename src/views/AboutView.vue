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
    <h3>Wykorzystane Technologie</h3>
    <section class="stack--box">
      <div class="stack--box__item" v-for="tech in data.stack" :key="tech.name">
        <img :src="tech.link" alt="tech.name" />
        <h4>{{ tech.name }}</h4>
      </div>
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
    <div class="footer">
      <span class="wave"> </span>
    </div>
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
$green: #0aff7c;
$shadow-green: #0aff7c38;
$black: #000000;
$blue: #370aff;

.about--box {
  @media screen and (max-width: $medium) {
    min-height: auto;
    padding-top: 1rem;
  }
  position: relative;
  width: 100%;
  min-height: 90vh;
  overflow-x: hidden;
  background-color: white;
  padding-top: 3rem;
  h2 {
    position: relative;
    text-align: center;
    font-size: 2vw;
    margin: 1rem;
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
      font-size: 2vw;
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
        text-align: left;
        border-left: 10px solid $green;
        width: 40%;
        text-align: center;
        font-size: 30px;
        p {
          line-height: 30px;
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
        box-shadow: 2px 2px 10px 9px $shadow-green;
        .head--about--img {
          width: 500px;
          @media screen and (max-width: $medium) {
            width: 100%;
          }
        }
        p {
          font-size: 2vh;
          font-weight: bold;
          a {
            color: #0aff7c;
            text-decoration: none;
            opacity: 0.5;
          }
          a:hover {
            transition: 0.5s;
            opacity: 1;
          }
        }
      }
    }
  }
  h3 {
    text-align: center;
    font-size: 2vh;
    margin: 2rem;
  }
  .stack--box {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 50%;
    margin: 0 auto;
    .stack--box__item {
      width: 100px;
      padding: 50px;
      border: 1px solid rgba(204, 204, 204, 0.712);
      text-align: center;
      opacity: 0.5;
      transition: 1s;
      filter: grayscale(100%);
      img {
        width: auto;
        height: 70px;
      }
      h4 {
        text-align: center;
      }
    }
    .stack--box__item:hover {
      opacity: 1;
      filter: grayscale(0%);
      border-color: $green;
    }
  }
  .left {
    flex-flow: row-reverse;
    .contents--img__description {
      text-align: left;
    }
  }
  .right {
    flex-flow: row;
    .contents--img__description {
      text-align: right;
    }
  }
  .about--box--contents {
    @media screen and (max-width: $medium) {
      display: flex;
      flex-flow: column;
      justify-content: center;
      align-items: center;
    }
    display: flex;
    padding: 20px;
    width: 80%;
    margin: 0px auto;
    .contents--img__box {
      width: auto;
      padding: 10px;
      box-shadow: 0px 0px 10px 9px $shadow-green;
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

      font-size: 4vh;
      margin: auto 0;
      width: 50%;
    }
  }
  .footer {
    height: 10%;
    width: 100%;
    position: relative;
    bottom: -10%;
    left: 0;
    margin-top: 4rem;
    .wave {
      background-image: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/85486/wave.svg");
      position: absolute;
      background-repeat: repeat;
      bottom: 0%;
      left: 0%;
      width: 5000px;
      top: -95px;
      animation: wave 7s;
      opacity: 1;
    }
  }
}
@keyframes wave {
  0% {
    margin-left: 0;
  }
  100% {
    margin-left: -100%;
  }
}
</style>
