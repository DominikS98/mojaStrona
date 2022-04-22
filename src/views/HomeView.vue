<template>
  <div class="home">
    <items
      v-for="item in data"
      :key="item.id"
      :item="item"
      @open-window="openWindow"
    />
    <FileData
      v-if="dataToWindow.stack"
      :data="dataToWindow"
      @close-file="closeFile"
      @open-window="openWindow"
    />
    <TxtFile
      v-else-if="dataToWindow"
      :data="dataToWindow"
      @close-file="closeFile"
    />
  </div>
</template>

<script>
import items from "../components/IconsItem.vue";
import TxtFile from "../components/TxtFile.vue";
import FileData from "../components/FileData.vue";

export default {
  components: {
    items,
    TxtFile,
    FileData,
  },
  data() {
    return {
      dataToWindow: "",
      data: "",
    };
  },
  async created() {
    const url = "http://localhost:3000/items";
    const response = await fetch(url);
    this.data = await response.json();
    console.log(this.data);
  },
  methods: {
    openWindow(data) {
      this.dataToWindow = data;
    },
    closeFile() {
      this.dataToWindow = "";
    },
  },
};
</script>

<style lang="scss" scoped>
.home {
  position: relative;
  display: flex;
  flex-flow: column;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
}
</style>
