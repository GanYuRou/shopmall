<template>
  <div class="param-info" v-if="Object.keys(goodsParam).length !== 0">
    <p>参数信息</p>
    <table v-for="(table, index) in goodsParam.sizes" :key="index">
      <tr :key="indey" v-for="(tr, indey) in table">
        <td :key="indez" v-for="(td, indez) in tr">{{td}}</td>
      </tr>
    </table>

    <table class="info-param">
      <tr :key="index" v-for="(info, index) in goodsParam.infos">
        <td>{{info.key}}</td>
        <td class="colorful">{{info.value}}</td>
      </tr>
    </table>

    <div class="info-img" v-if="goodsParam.image.length !== 0">
      <img :src="goodsParam.image" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    goodsParam: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style lang='scss' scoped>
.param-info {
  font-size: $smaller-font-size;
  padding: 20px 15px;
  border-top: 3px solid $color-light-grey;
  p {
    font-size: $normal-font-size;
    margin-bottom: 8px;
    color: $color-grey-dark;
  }
  table {
    width: 100%;
    border-collapse: collapse;
    text-align: center;
    border-bottom: 3px solid $color-light-grey;
    tr {
      height: 42px;
      td {
        border-bottom: 1px solid $color-light-grey;
      }
    }
  }
  .info-param {
    .colorful {
      color: $color-high-line;
    }
  }
  .info-img {
    img {
      width: 100%;
      margin-bottom: -13px;
    }
  }
}
</style>