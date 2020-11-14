<template>
  <div class="good-item" v-if="good.show">
    <img :src="good.show.img" :alt="good.title" @load="imageLoaded">
    <div class="description">
      <p class="good_title">{{ good.title }}</p>
      <span class="price">价格：<span class="price-digit">{{good.price}}</span></span>
    </div>
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
  methods: {
    imageLoaded() {
      // 图片加载完成一次就触发refresh
      this.$bus.$emit("itemImageLoaded");
    }
  }
};
</script>

<style lang='scss' scoped>
.good-item {
  width: 50%;
  text-align: center;
  height: 310px;
  position: relative;
  img {
    border-radius: 5px;
    width: 96%;
  }
  .description {
    position: absolute;
    bottom: -3px;
    left: 20px;
    width: 80%;
    height: 40px;
    text-align: center;
    .good_title {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: $smaller-font-size;
      margin: 0 auto;
      padding: 3px;
    }
    .price {
      position: relative;
      left: -10px;
      .price-digit {
        color: $color-high-line;
      }
    }
  }
}
</style>