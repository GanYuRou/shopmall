<template>
  <div class="good-item">
    <img :src="good.show.img" :alt="good.title">
    <p class="good_title">{{ good.title }}</p>
    <span class="price">{{good.price}}</span>
    <span class="collect">{{good.cfav}}</span>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    good: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style lang='scss' scoped>
.good-item {
  width: 50%;
  text-align: center;
  .single_img {
    width: 100%;
    img {
      border-radius: 5px;
      width: 95%;
    }
  }
  .good_title {
    width: 80%;
    height: 20px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    border: 1px solid red;
    font-size: $small-font-size;
  }
}
</style>