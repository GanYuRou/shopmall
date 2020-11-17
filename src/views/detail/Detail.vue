<template>
  <div id="detail">
    <nav-bar-detail
      :title="title"
      @switched="skip"
      ref="navtitle"
    ></nav-bar-detail>
    <scroll
      class="included"
      ref="scroll"
      :probeType="3"
      @scrolling="transparent"
    >
      <detail-swiper :topImages="topImages" ref="good"></detail-swiper>
      <detail-base-info :baseInfo="baseInfo"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-images-info
        :imagesInfo="imagesInfo"
        @allLoaded="oneRefresh"
      ></detail-images-info>
      <detail-params-info
        :goodsParam="goodsParam"
        ref="params"
      ></detail-params-info>
      <detail-comment-info
        :comments="comments"
        v-if="commentShow"
        ref="comment"
      ></detail-comment-info>
      <goods-list :goods="recommendGoods" ref="recommend"></goods-list>
    </scroll>
    <detail-bottom-bar @addition="addToCart"></detail-bottom-bar>
    <back-top @click.native="goTop" v-if="showup"></back-top>
  </div>
</template>

<script>
import NavBarDetail from "./childrenComps/NavBarDetail";
import DetailSwiper from "./childrenComps/DetailSwiper";
import DetailBaseInfo from "./childrenComps/DetailBaseInfo";
import DetailShopInfo from "./childrenComps/DetailShopInfo";
import DetailImagesInfo from "./childrenComps/DetailImagesInfo";
import DetailParamsInfo from "./childrenComps/DetailParamsInfo";
import DetailCommentInfo from "./childrenComps/DetailCommentInfo";
import DetailBottomBar from './childrenComps/DetailBottomBar'

import Scroll from "components/common/scroll/Scroll";
import GoodsList from "components/content/goods/GoodsList";

import {
  getDetail,
  recommendUnit,
  BaseInfo,
  Shop,
  GoodsParam,
} from "network/detail";
import { debounce } from "common/utils/debounce";
import { BackTopMixin } from "common/mixins";

export default {
  name: "detail",
  data() {
    return {
      title: ["商品", "参数", "评论", "推荐"],
      topImages: [],
      baseInfo: {},
      shop: {},
      imagesInfo: {},
      goodsParam: {},
      comments: {},
      commentShow: null,
      recommendGoods: [],
      titlesTopY: [],
      currentIndex: 0,
    };
  },
  mixins: [BackTopMixin],
  components: {
    NavBarDetail,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailImagesInfo,
    DetailParamsInfo,
    DetailCommentInfo,
    DetailBottomBar,
    Scroll,
    GoodsList
  },
  created() {
    getDetail(this.$route.params.iid).then((res) => {
      const data = res.result;
      // 1.轮播图片的获取
      this.topImages = data.itemInfo.topImages;
      // 2.标题一栏信息的获取
      this.baseInfo = new BaseInfo(data.itemInfo, data.columns, data.shopInfo);
      // 3.店铺一栏信息
      this.shop = new Shop(data.shopInfo);
      // 4.详情图片
      this.imagesInfo = data.detailInfo;
      // 5.参数信息
      this.goodsParam = new GoodsParam(
        data.itemParams.info,
        data.itemParams.rule
      );
      // 6.评论
      this.commentShow = data.rate.cRate;
      data.rate.list && (this.comments = data.rate.list[0]);
    });
    recommendUnit().then((res) => {
      // 7.推荐商品
      this.recommendGoods = res.data.list;
    });
  },
  mounted() {
    const refresh = debounce(this.$refs.scroll.refresh, 100);
    const specP = debounce(this.specPosition, 100);
    this.$bus.$on("detailRecommends", () => {
      refresh();
      specP();
    });
  },
  methods: {
    oneRefresh() {
      this.$refs.scroll.refresh();
      this.specPosition();
    },
    specPosition() {
      this.titlesTopY = [];
      this.$refs.good && this.titlesTopY.push(this.$refs.good.$el.offsetTop);
      this.$refs.params && this.titlesTopY.push(this.$refs.params.$el.offsetTop);
      if(this.commentShow) {
        this.$refs.comment && this.titlesTopY.push(this.$refs.comment.$el.offsetTop);
      }
      else {
        this.$refs.recommend && this.titlesTopY.push(this.$refs.recommend.$el.offsetTop);
      }
      this.$refs.recommend && this.titlesTopY.push(this.$refs.recommend.$el.offsetTop);
      this.titlesTopY.push(Number.MAX_VALUE);
    },
    transparent(y) {
      // 返回图片滚动到800显示
      this.showUpImg(y, 800);
      // 滚动到对应的位置标红相应的标题
      let vertical = -y;
      for (let i = 0; i < this.titlesTopY.length - 1; i++) {
          if (i !== this.currentIndex) {
            if (vertical >= this.titlesTopY[i] && vertical < this.titlesTopY[i + 1]) {
              this.$refs.navtitle && (this.$refs.navtitle.currentIndex = i);
              this.currentIndex = i;
            }
          }
      }
    },
    skip(index) {
      this.$refs.scroll.scrollTo(0, -this.titlesTopY[index], 1000);
    },
    addToCart() {
      const signalPro = {
        iid: this.$route.params.iid,
        title: this.baseInfo.title,
        image: this.topImages[0],
        price: this.baseInfo.lowNowPrice,
        shopName: this.shop.name,
        count: 0
      }
      this.$store.dispatch("goCart", signalPro);
    }
  },
};
</script>

<style lang='scss' scoped>
#detail {
  position: relative;
  height: 100vh;
  .included {
    position: relative;
    background-color: $white;
    height: calc(100% - 93px);
    overflow: hidden;
  }
}
</style>