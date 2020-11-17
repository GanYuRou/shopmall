<template>
  <div v-if="Object.keys(subcategoryList) !== 0" class="sub-right">
    <div
      v-for="(item, index) in subcategoryList"
      :key="index"
      class="right-item"
    >
      <a :href="item.link"><img :src="item.image" @load="imgLoaded"></a>
      <p>{{ item.title }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
      imgLen: 0
    };
  },
  props: {
    subcategoryList: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    imgLoaded() {
      if(++this.count === this.imgLen) {
        this.$emit("loadFulfilled");
      }
    }
  },
  watch: {
    subcategoryList() {
      this.imgLen = this.subcategoryList.length;
    }
  }
};
</script>

<style lang='scss' scoped>
.sub-right {
  margin: 0 auto;
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  .right-item {
    a {
      width: 80px;
      height: 80px;
      display: inline-block;
      img {
        width: 65px;
        height: 65px;
      }
    }
    p {
      font-size: $small-font-size;
    }
  }
}
</style>