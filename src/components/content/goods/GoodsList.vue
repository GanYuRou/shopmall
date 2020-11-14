<template>
  <div class="goods_container">
    <goods-list-item></goods-list-item>
    <goods-list-item v-for="item in goods" :key="item.acm" :good="item"></goods-list-item>
  </div>
</template>

<script>
import GoodsListItem from './GoodsListItem'
export default {
  data () {
    return {
    };
  },
  props: {
    goods: {
      type: Array,
      default() {
        return []
      }
    }
  },
  components: {
    GoodsListItem
  },
}
</script>

<style lang='scss' scoped>
.goods_container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 10px;
}
</style>