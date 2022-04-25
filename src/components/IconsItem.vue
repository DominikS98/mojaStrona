<template>
  <router-link
    class="box__icon"
    v-if="item.routes"
    :to="{
      name: 'more',
      params: {
        id: item.id,
      },
    }"
  >
    <section class="box__icon--img">
      <img :src="'../assets/icons/' + item.img + '.png'" />
    </section>
    <section class="box__icon--title">
      <p>{{ item.title }}</p>
    </section>
  </router-link>
  <a class="box__icon" v-else-if="item.link" :href="item.link" target="_blank">
    <section class="box__icon--img">
      <img :src="'../assets/icons/' + item.img + '.png'" />
    </section>
    <section class="box__icon--title">
      <p>{{ item.title }}</p>
    </section>
  </a>
  <div
    v-else
    class="box__icon"
    @click="openWindow(item.title, item.description, item.stack)"
  >
    <section class="box__icon--img">
      <img :src="'../assets/icons/' + item.img + '.png'" />
    </section>
    <section class="box__icon--title">
      <p>{{ item.title }}</p>
    </section>
  </div>
</template>
<script>
export default {
  props: ["item"],
  methods: {
    openWindow(title, description, stack) {
      const data = {
        title: title,
        description: description,
        stack: stack,
      };
      this.$emit("open-window", data);
    },
  },
};
</script>

<style lang="scss" scoped>
$small: 300px;
$medium: 900px;
.box__icon {
  text-align: center;
  min-width: 100px;
  padding: 10px;
  text-decoration: none;
  border: 1px solid rgba(255, 255, 255, 0);
  cursor: pointer;
  @media screen and (max-width: $medium) {
    padding: 5px;
  }
  &:hover {
    background-color: rgba(0, 0, 0, 0.226);
    border: 1px solid rgba(27, 27, 27, 0.644);
  }
  &:active {
    background-color: rgba(255, 255, 255, 0.493);
    border: 1px solid white;
  }
  .box__icon--title {
    color: white;
    text-shadow: 0 0 10px #000000, 0 0 5px #000000;
    font-size: 15px;
  }
}
</style>
