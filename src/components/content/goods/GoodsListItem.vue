<template>
  <div class="good-item">
    <img
      :src="showImg"
      :alt="good.title"
      @load="imageLoaded"
      @click="enterDetail"
    />
    <div class="description">
      <p class="good_title">{{ good.title }}</p>
      <span class="price"
        >价格：<span class="price-digit">{{ good.price }}</span></span
      >
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
  computed: {
    showImg() {
      return this.good.img || this.good.image || this.good.show.img;
    },
  },
  methods: {
    imageLoaded() {
      // 图片加载完成一次就触发refresh
      if (this.$route.name === "detail") {
        this.$bus.$emit("detailRecommends");
      }
      if (this.$route.name === "home") {
        this.$bus.$emit("homeExhibition");
      }
      if (this.$route.name === "category") {
        this.$bus.$emit("categoryExhibition");
      }
    },
    enterDetail() {
      this.$router.push({
        path: "/detail/",
        name: "detail",
        params: {
          iid: this.good.iid,
        },
      });
    },
  },
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