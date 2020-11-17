<template>
  <div class="single-pro">
    <h3>{{ single.shopName }}</h3>
    <div class="content">
      <img :src="single.image" />
      <div class="right">
        <h5>{{ single.title }}</h5>
        <div class="price-bottom">
          <span>￥<span class="price">{{ single.price }}</span></span>
          <div class="component">
            <button @click="decrement" disabled="show">-</button>
            <span>{{ single.count }}</span>
            <button @click="increment">+</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true
    };
  },
  props: {
    single: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    increment() {
      this.single.count++;
    },
    decrement() {
      this.single.count--;
    }
  }
};
</script>

<style lang='scss' scoped>
.single-pro {
  width: 90%;
  margin: 5px auto;
  padding: 15px 20px;
  border-bottom: 3px solid $color-light-grey;
  h3 {
    font-size: $large-font-size;
    margin-bottom: 8px;
    color: $color-grey-dark;
  }
  .content {
    display: flex;
    img {
      width: 100px;
      height: 140px;
    }
    .right {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      h5 {
        width: 180px;
        font-size: $small-font-size;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        margin-left: 10px;
      }
      .price-bottom {
        display: flex;
        justify-content: space-between;
        margin-left: 10px;
        .price {
          color: $color-high-line;
          font-size: $larger-font-size;
        }
        .component {
          button {
            width: 20px;
            height: 20px;
            outline: none;
            background-color: $white;
            border: 1px solid $color-little-grey;
          }
          span {
            display: inline-block;
            text-align: center;
            margin: 0 4px;
            vertical-align: middle;
            border: 2px solid $color-little-grey;
            width: 40px;
            height: 21px;
            line-height: 21px;
          }
        }
      }
    }
  }
}
</style>