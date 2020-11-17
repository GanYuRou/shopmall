<template>
  <div class="goods_container" v-if="Object.keys(goods).length !== 0">
    <goods-list-item v-for="(item, index) in goods" :key="index" :good="item"></goods-list-item>
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