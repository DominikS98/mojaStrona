<template>
  <div class="file__box">
    <section class="file__box--strap">
      <div class="file__box--strap__fileName">
        <p>{{ data.title }}</p>
      </div>
      <div class="file__box--strap__options">
        <button type="button" class="">-</button>
        <button @click="$emit('close-file')" type="button" class="">X</button>
      </div>
    </section>
    <section class="file__box--body">
      <items
        v-for="item in data.stack"
        :key="item.id"
        :item="item"
        @open-window="openWindow"
      />
    </section>
  </div>
</template>
<script>
import items from "./IconsItem.vue";
//import TxtFile from "./TxtFile.vue";
export default {
  components: {
    items,
    //TxtFile,
  },
  props: ["data"],
  methods: {
    openWindow(data) {
      this.$emit("open-window", data);
    },
    closeFile() {
      this.dataToWindow = "";
    },
  },
};
</script>

<style lang="scss" scoped>
.file__box {
  position: absolute;
  background: white;
  width: 60%;
  min-height: 50vh;
  top: 20%;
  left: 20%;
  right: 20%;
  box-shadow: 2px 2px 20px 2px rgba(0, 0, 0, 0.301);
  border: 0.5px solid black;
  .file__box--strap {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #ccc;
    .file__box--strap__fileName {
      padding: 0 5px;
      font-size: 12px;
    }
    .file__box--strap__options {
      display: flex;
      button {
        font: 1em sans-serif;
        padding: 2px;
        background: inherit;
        border: none;
        height: 100%;
        width: 40px;
        &:hover {
          background-color: rgba(238, 44, 44, 0.911);
        }
      }
    }
  }
  .file__box--body {
    display: flex;
    flex-wrap: wrap;
  }
}
</style>
