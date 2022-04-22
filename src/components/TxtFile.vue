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
      <p>{{ data.description }}</p>
    </section>
  </div>
</template>
<script>
export default {
  props: ["data"],
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
}
</style>
