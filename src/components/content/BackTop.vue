<template>
  <div class="back-top">
    <img src="~assets/image/common/top.png" alt="返回顶部">
  </div>
</template>

<script>
export default {
  data () {
    return {
    };
  },
}
</script>

<style lang='scss' scoped>
.back-top {
  position: fixed;
  bottom: 64px;
  right: 26px;
  z-index: 8;
  img {
    width: 42px;
    height: 42px;
  }
}
</style>