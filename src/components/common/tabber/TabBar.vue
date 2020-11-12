<template>
  <div class="tab-bar">
    <slot></slot>
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
.tab-bar {
  position: fixed;
  display: flex;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #f1f1f0;
  box-shadow: 0 -2px 3px rgba(180, 180, 180, .2);
}
</style>