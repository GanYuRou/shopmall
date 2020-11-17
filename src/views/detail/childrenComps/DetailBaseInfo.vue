<template>
  <div class="baseInfo" v-if="Object.keys(baseInfo).length !== 0">
    <p class="title">{{ baseInfo.title }}</p>
    <p class="price">
      <span>￥{{ baseInfo.lowNowPrice }}</span>
      <span>{{ baseInfo.oldPrice }}</span>
      <span :class="{exist: pink}">{{ baseInfo.discount }}</span>
    </p>
    <div class="logistic">
      <div>{{ baseInfo.columns[0] }}</div>
      <div>{{ baseInfo.columns[1] }}</div>
      <div>{{ freight }}</div>
    </div>
    <div class="info-service">
      <span v-for="index in services.length-1" :key="index" class="signal-serve">
        <img :src="services[index - 1].icon" />
        <span class="desc">{{ services[index - 1].name }}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    baseInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  computed: {
    pink() {
      if(this.baseInfo.discount) {
        return true;
      }
      return false;
    },
    freight() {
      if (this.baseInfo) {
        const len = this.baseInfo.services.length;
        return this.baseInfo.services[len - 1].name;
      }
    },
    services() {
      if (this.baseInfo) {
        if(this.baseInfo.services.length > 4) {
          this.baseInfo.services.shift();
          return this.baseInfo.services;
        }
        return this.baseInfo.services;
      }
    }
  },
};
</script>

<style lang='scss' scoped>
.baseInfo {
  margin-top: 16px;
  .title {
    font-size: $normal-font-size;
    padding: 0 8px;
    font-weight: bold;
  }
  .price {
    margin-top: 10px;
    & > :first-child {
      color: $color-high-line;
      font-size: $price-font;
    }
    & > :nth-child(2) {
      margin-left: 5px;
      font-size: $small-font-size;
      margin-left: 7px;
      text-decoration: line-through;
    }
    .exist {
      background-color: $color-tint;
      color: $white;
      font-size: 8px;
      padding: 3px 8px;
      margin-left: 8px;
      border-radius: 9px;
    }
  }
  .logistic {
    display: flex;
    margin-top: 20px;
    text-align: left;
    div {
      flex: 1;
      font-size: $small-font-size;
      color: $color-grey;
      padding: 0 6px;
    }
    & > :nth-child(2) {
      text-align: center;
    }
    & > :last-child {
      text-align: right;
    }
  }
  .info-service {
    margin: 25px 6px;
    display: flex;
    color: $color-grey;
    border-top: 3px solid $color-light-grey;
    border-bottom: 3px solid $color-light-grey;
    &>:nth-child(2) {
      text-align: center;
    }
    &>:last-child {
      text-align: right;
    }
    .signal-serve {
      display: inline-block;
      margin: 20px 0;
      flex: 1;
      img {
        width: 16px;
        height: 16px;
        vertical-align: middle;
        margin-right: 4px;
      }
      .desc {
        font-weight: bold;
      }
    }
  }
}
</style>