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
      <div class="all">
        <span
          class="cricle"
          @click="clickAll"
          :class="{ active: colorful }"
        ></span>
        <span>全选</span>
      </div>
      <div class="all-price">
        <span>合计：</span>
        <span class="price">￥{{ total }}</span>
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
    return {
      colorful: false,
    };
  },
  components: {
    NavBar,
    CartList,
    Scroll,
  },
  computed: {
    ...mapGetters(["allCount", "total"]),
  },
  activated() {
    this.$refs.scroll.refresh();
  },
  created() {
    let number = 1;
    this.$bus.$on("singleSelect", () => {
      if(number === this.allCount) {
        this.colorful = true;
      }
      number++;
    });
    this.$bus.$on("singleDisSelect", () => {
      this.colorful = false;
      number--;
    });
    this.$bus.$on("goodStart", () => {
      this.colorful = false;
    })
  },
  methods: {
    clickAll() {
      if (!this.colorful) {
        // 通知每个商品，并将circle填满颜色
        this.$bus.$emit("allSelected");
        // 计算总价
        this.$store.commit("computeAll");
        // 背景颜色显示
        this.colorful = true;
      }
      else {
        // 通知每个商品，取消circle颜色
        this.$bus.$emit("disAllSelected");
        // 将总价变为0
        this.$store.commit("zero");
        // 背景颜色消失
        this.colorful = false;
      }
    },
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
    height: calc(100% - 137px);
  }
  .summation {
    background-color: $color-orgin;
    color: $white;
    height: 44px;
    position: relative;
    z-index: 3;
    display: flex;
    text-align: center;
    line-height: 44px;
    justify-content: space-between;
    font-size: $normal-font-size;
    .all {
      .cricle {
        @include select($white);
      }
      .active {
        background-color: $color-tint;
      }
    }
    .all-price {
      button {
        margin: 0 20px;
        color: $color-orgin;
        width: 60px;
        height: 25px;
        border-radius: 15px;
        outline: 0;
        border: 0;
        background-color: $white;
      }
    }
  }
}
</style>