<template>
  <div v-if="Object.keys(categoryList) !== 0" id="slider">
    <scroll class="included" ref="scroll">
      <div
        v-for="(item, index) in categoryList"
        :key="item.title"
        :class="{ active: index === currentIndex, title: true }"
        @click="clickTheme(item, index)"
      >
        <div>{{ item.title }}</div>
      </div>
    </scroll>
  </div>
</template>

<script>
import Scroll from "components/common/scroll/Scroll";
export default {
  data() {
    return {
      currentIndex: 0,
    };
  },
  props: {
    categoryList: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  components: {
    Scroll,
  },
  updated() {
    // 需要刷新一下
    this.$refs.scroll.refresh();
  },
  methods: {
    clickTheme(item, index) {
      //改变样式
      this.currentIndex = index;
      const keys = {
        maitKey: item.maitKey,
        index
      };
      this.$emit("sliderBarClick", keys);
    },
  },
  computed: {
  }
};
</script>

<style lang='scss' scoped>
#slider {
  width: 30%;
  height: calc(100% - 93px);
  background-color: #dcdcdc3f;
  font-size: $large-font-size;
  font-weight: bold;
  text-align: center;
  margin-top: 44px;
  .included {
    height: 100%;
    overflow: hidden;
  }
  .title {
    padding: 15px;
  }
  .active {
    color: $color-high-line;
    background-color: $white;
    border-left: 2px solid $color-high-line;
  }
}
</style>