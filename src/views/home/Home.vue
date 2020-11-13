<template>
  <div id="home">
      <nav-bar class="nav">
      <template v-slot:center>
        <div>购物街</div>
      </template>
    </nav-bar>
    <home-swiper :banner="banner"></home-swiper>
    <home-recommend :recommend="recommend"></home-recommend>
    <home-fashion></home-fashion>
    <tab-control :titles="titles"></tab-control>
    <goods-list :goods="goods['pop'].list"></goods-list>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import TabControl from 'components/content/TabControl'
import GoodsList from 'components/content/goods/GoodsList'

import HomeSwiper from './childrenComps/HomeSwiper'
import HomeRecommend from './childrenComps/HomeRecommend'
import HomeFashion from './childrenComps/HomeFashion'

import {getHomeMessage, getHomeGoods} from 'network/home';

export default {
  data () {
    return {
      banner: [],
      recommend: [],
      titles: ['流行', '新款', '精选'],
      goods: {
        'pop': {page: 0, list: []},
        'new': {page: 0, list: []},
        'sell': {page: 0, list: []},
      }
    };
  },
  components: {
    NavBar,
    TabControl,
    HomeSwiper,
    HomeRecommend,
    HomeFashion,
    GoodsList
  },
  created() {
    this.getHomeMessage();

    this.getHomeGoods('pop');
    this.getHomeGoods('new');
    this.getHomeGoods('sell');

  },
  methods: {
    getHomeMessage() {
      getHomeMessage().then(res => {
      this.banner = res.data.banner.list;
      this.recommend = res.data.recommend.list;
    })
    },

    getHomeGoods(type) {
      let page = this.goods[type].page + 1;
      getHomeGoods(type, page).then(res => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page = page;
      })
    }
  }
}
</script>

<style lang='scss' scoped>
.nav {
  background-color: $color-tint;
  color: $white;
  font-size: $normal-font-size;
}
</style>