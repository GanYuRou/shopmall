<template>
  <div id="shopInfo">
    <div class="shopname">
      <img :src="shop.logo" alt="" />
      <p>{{ shop.name }}</p>
    </div>
    <div class="content">
      <div class="left-content">
        <div class="accordance">
          <span>{{ shop.sells | simplify }}</span>
          <span>总销量</span>
        </div>
        <div class="accordance">
          <span>{{ shop.goodsCount }}</span>
          <span>全部宝贝</span>
        </div>
      </div>
      <div class="split"></div>
      <div class="right-content">
        <div v-for="item in shop.score" :key="item.name">
          <span>{{ item.name }}</span>
          <span
            :class="{ showCol: item.isBetter, anotnerCol: !item.isBetter }"
            >{{ item.score }}</span
          >
        </div>
      </div>
    </div>
    <button>进店逛逛</button>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    shop: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  filters: {
    simplify(count) {
      if (count / 10000 > 1) {
        return (count / 10000).toFixed(1) + "万";
      }
    },
  },
};
</script>

<style lang='scss' scoped>
#shopInfo {
  height: 210px;
  border-bottom: 3px solid $color-light-grey;
  .shopname {
    padding: 0 18px;
    font-size: $normal-font-size;
    img {
      width: 55px;
      height: 55px;
      vertical-align: middle;
    }
    p {
      display: inline-block;
      color: $color-text;
      font-weight: bold;
      margin-left: 14px;
    }
  }

  .content {
    display: flex;
    .left-content {
      flex: 2;
      display: flex;
      text-align: center;
      padding: 30px 0;
      & > :first-child {
        flex-grow: 2;
      }
      .accordance {
        & > :first-child {
          font-size: $larger-font-size;
        }
        & > :last-child {
          display: inline-block;
          margin-top: 6px;
          font-size: $small-font-size;
          font-weight: bold;
          display: block;
        }
      }
    }
    .split {
      width: 0;
      height: 56px;
      margin: 22px 14px 0px 24px;
      border: 1px solid $color-light-grey;
    }
    .right-content {
      flex: 1;
      padding: 20px;
      font-size: $smaller-font-size;
      div {
        margin: 6px;
        span {
          padding: 0 3px;
        }
      }
    }
  }
  .showCol {
    color: $color-high-line;
  }
  .anotnerCol {
    color: rgb(16, 155, 16);
  }

  button {
    display: block;
    width: 40%;
    outline: none;
    border: 0;
    padding: 8px 14px;
    margin: 0 auto;
    color: $color-text;
  }
}
</style>