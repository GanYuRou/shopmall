<template>
  <div v-if="Object.keys(imagesInfo).length !== 0">
    <div class="dress-info">
      <div class="start"></div>
      <div class="desc">{{ imagesInfo.desc }}</div>
      <div class="end"></div>
    </div>
    <div v-for="(item, index) in imagesInfo.detailImage" :key="index">
      <div class="info-key">{{ item.key }}</div>
      <div class="info-list">
        <img :src="img" v-for="img in item.list" :key="img" @load="imagesLoaded"/>
      </div>
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
    imagesInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    imagesLoaded() {
      if(++this.count === this.imgLen) {
        this.$emit("allLoaded")
      }
    }
  },
  watch: {
    imagesInfo() {
      this.imgLen = this.imagesInfo.detailImage[0].list.length;
    }
  }
};
</script>

<style lang='scss' scoped>
.dress-info {
  // height: 40px;
  margin: 18px 3px;
  .start {
    position: relative;
    width: 40%;
    border: 1px dashed $color-little-grey;
    &::after {
      content: "";
      position: absolute;
      right: -9px;
      top: -3px;
      width: 0;
      border: 3px solid $color-text;
    }
  }
  .desc {
    padding: 10px 0;
    font-size: $smaller-font-size;
    line-height: 18px;
    color: $color-grey-dark;
  }
  .end {
    position: relative;
    width: 40%;
    border: 1px dashed $color-little-grey;
    float: right;
    &::before {
      content: "";
      position: absolute;
      left: -9px;
      top: -3px;
      width: 0;
      border: 3px solid $color-text;
    }
  }
}
.info-key {
  font-size: $normal-font-size;
  padding: 14px 8px;
  color: $color-grey-dark;
}
.info-list {
  img {
    width: 100%;
  }
}
</style>