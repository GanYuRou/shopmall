<template>
  <div id="cart">
    <nav-bar class="nav">
      <template v-slot:center>
        <div>购物车({{ allCount }})</div>
      </template>
    </nav-bar>
    <scroll class="included" ref="scroll">
      <cart-list></cart-list>
    </scroll>
    <div class="summation">
      <span>全选</span>
      <div>
        <span>合计：</span>
        <span class="price">￥23</span>
        <button class="total">结算</button>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import CartList from "./childrenComps/CartList";

import Scroll from "components/common/scroll/Scroll";

import { mapGetters } from "vuex";

export default {
  data() {
    return {};
  },
  components: {
    NavBar,
    CartList,
    Scroll,
  },
  computed: {
    ...mapGetters(["allCount"]),
  },
  activated() {
    this.$refs.scroll.refresh();
  },
};
</script>

<style lang='scss' scoped>
#cart {
  position: relative;
  height: 100vh;
  .nav {
    background-color: $color-tint;
    color: $white;
    font-size: 16px;
    position: relative;
    z-index: 2;
  }
  .included {
    position: relative;
    background-color: $white;
    height: calc(100% - 93px);
  }
}
</style>