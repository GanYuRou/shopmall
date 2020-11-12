<template>
  <div class='bav-bar'>
    <div class='left'>
      <slot name='left'></slot>
    </div>
    <div class='center'>
      <slot name='center'></slot>
    </div>
    <div class='right'>
      <slot name='right'></slot>
    </div>
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
.bav-bar {
  display: flex;
  text-align: center;
  height: 44px;
  line-height: 44px;
  box-shadow: 0 2px 3px rgba(180, 180, 180, .2);
}
.left, .right{
  width: 60px;
}
.center {
  flex: 1;
}
</style>