<template>
  <div id="home">
    <nav-bar class="nav">
      <template v-slot:center>
        <div>购物街</div>
      </template>
    </nav-bar>
    <tab-control :titles="titles" @transfer="changtype" 
                 cref="control1" v-show="controlShow" class="control1"></tab-control>
    <scroll class="included" ref="scroll" :probeType="3" :pullUpLoad="true" @moreLoaded="loadImg" @scrolling="transparent">
      <home-swiper :banner="banner" @swiperImage="authenticHeight"></home-swiper>
      <home-recommend :recommend="recommend"></home-recommend>
      <home-fashion></home-fashion>
      <tab-control :titles="titles" @transfer="changtype" ref="control2"></tab-control>
      <goods-list :goods="goods[goodtype].list"></goods-list>
    </scroll>

    <back-top @click.native="goTop" v-if="showup"></back-top>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import Scroll from 'components/common/scroll/Scroll'
import TabControl from 'components/content/TabControl'
import GoodsList from 'components/content/goods/GoodsList'

import HomeSwiper from './childrenComps/HomeSwiper'
import HomeRecommend from './childrenComps/HomeRecommend'
import HomeFashion from './childrenComps/HomeFashion'

import { getHomeMessage, getHomeGoods } from 'network/home';

import { debounce } from 'common/utils/debounce'
import { BackTopMixin } from 'common/mixins';

export default {
  name: "home",
  data () {
    return {
      banner: [],
      recommend: [],
      titles: ['流行', '新款', '精选'],
      goods: {
        'pop': {page: 0, list: []},
        'new': {page: 0, list: []},
        'sell': {page: 0, list: []},
      },
      goodtype: 'pop',
      controlTop: 0,
      controlShow: false
    };
  },
  mixins: [BackTopMixin],
  components: {
    NavBar,
    Scroll,
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
  mounted() {
    const refresh = debounce(this.$refs.scroll.refresh, 100);
    this.$bus.$on("homeExhibition", () => {
      refresh();    
    });
  },
  methods: { 
    // 网络请求相关的操作
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
    },

    // tabControl的点击事件的操作
    changtype(index) {
      switch(index) {
        case 0: 
          this.goodtype = 'pop';
          break;
        case 1:
          this.goodtype = 'new';
          break;
        case 2:
          this.goodtype = 'sell';
      }
      (this.$refs.control1) && (this.$refs.control1.currentIndex = index);
      (this.$refs.control2) && (this.$refs.control2.currentIndex = index);
    },
    // 上拉加载图片
    loadImg() {
      this.getHomeGoods(this.goodtype);
      this.$refs.scroll.finishPullUp();
    },
    // 监听滚动，判断返回顶部的图片是否显示
    transparent(y) {
      this.showUpImg(y, 1000);
      this.controlShow = -y > this.controlTop
    },
    authenticHeight() {
      this.controlTop = this.$refs.control2.$el.offsetTop - 44;
    }
  }
}
</script>

<style lang='scss' scoped>
#home {
  position: relative;
  height: 100vh;
  .nav {
    box-shadow: 0 1px 3px rgba(180, 180, 180, .1);
    background-color: $color-tint;
    color: $white;
    font-size: $normal-font-size;
  }
  .control1 {
    position: fixed;
    top: 44px;
    left: 0;
    right: 0;
    z-index: 3;
  }
  .included {
    height: calc(100% - 93px);
    overflow: hidden;
  }
}
</style>