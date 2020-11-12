<template>
  <div class="nav">
    <nav-bar>
      <template v-slot:center>
        <div>我的</div>
      </template>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'

export default {
  data () {
    return {
    };
  },
  components: {
    NavBar
  }
}
</script>

<style lang='scss' scoped>
.nav {
  background-color: $color-tint;
  color: $color-background;
  font-size: 16px;
}
</style>