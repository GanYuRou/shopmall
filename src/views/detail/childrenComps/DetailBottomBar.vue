<template>
  <div class="bottom-bar">
    <div class="left-content">
      <div class="icon-item">
        <span class="icon service"></span>
        <span>客服</span>
      </div>
      <div class="icon-item">
        <span class="icon shop"></span>
        <span>店铺</span>
      </div>
      <div class="icon-item">
        <span class="icon collect"></span>
        <span>收藏</span>
      </div>
    </div>
    <div class="right-content">
      <div class="cart" @click="addGood">加入购物车</div>
      <div class="purchase">购买</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    addGood() {
      this.$emit("addition");
    }
  }
};
</script>

<style lang='scss' scoped>
.bottom-bar {
  height: 49px;
  background-color: $white;
  position: relative;
  z-index: 3;
  display: flex;
  text-align: center;

  .left-content {
    display: flex;
    width: 50%;

    .icon-item {
      flex: 1;
      .icon {
        display: block;
        width: 26px;
        height: 26px;
        background: url("~assets/image/detail/detail_bottom.png") 0 0/110%;
        margin: 0 auto;
      }
      .shop {
        background-position: -1px -69px;
      }
      .collect {
        background-position: -1px -1px;
      }
      .service {
        background-position: -1px -128px;
      }
      &>:last-child {
        display: inline-block;
        font-size: $smaller-font-size;
        margin-top: 4px;
      }
    }
  }

  .right-content {
    display: flex;
    width: 50%;
    line-height: 49px;
    text-align: center;
    font-size: $normal-font-size;
    color: $white;
    .cart {
      flex: 1;
      background-color: $color-gold;
    }
    .purchase {
      flex: 1;
      background-color: $color-tint;
    }
  }
}
</style>