<template>
  <div id="category">
    <nav-bar class="nav">
      <template v-slot:center>
        <div>分类</div>
      </template>
    </nav-bar>
    <slider-bar
      :categoryList="categoryList"
      @sliderBarClick="changeCategory"
    ></slider-bar>
    <scroll class="included" ref="scroll" @scrolling="transparent" :probeType="3">
      <subcategory
        :subcategoryList="subcategoryList"
        @loadFulfilled="updateHeight"
      ></subcategory>
      <tab-control :titles="titleList" ref="tabControl" @transfer="change"></tab-control>
      <goods-list :goods="categoryDetailList"></goods-list>
    </scroll>
    <back-top @click.native="goTop" v-if="showup"></back-top>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import Scroll from "components/common/scroll/Scroll";
import TabControl from "components/content/TabControl";
import GoodsList from "components/content/goods/GoodsList";
import BackTop from 'components/content/BackTop'

import SliderBar from "./childrenComps/SliderBar";
import Subcategory from "./childrenComps/Subcategory";

import { debounce } from "common/utils/debounce";
import { BackTopMixin } from 'common/mixins'
import {
  getCategory,
  getsubCategory,
  getCategoryDetail,
} from "network/category";

export default {
  data() {
    return {
      categoryList: [],
      subcategoryList: [],
      currentIndex: 0,
      titleList: ["流行", "新款", "精选"],
      types: ['pop', 'new', 'sell'],
      categoryDetailList: []
    };
  },
  mixins: [BackTopMixin],
  components: {
    NavBar,
    Scroll,
    TabControl,
    GoodsList,
    BackTop,
    SliderBar,
    Subcategory
    
  },
  created() {
    // 侧边栏的数据
    this.getCategory();
  },
  mounted() {
    // 防抖
    if (this.$refs.scroll) {
      const refresh = debounce(this.$refs.scroll.refresh, 200);
      this.$bus.$on("categoryExhibition", () => {
        refresh();
      });
    }
  },
  methods: {
    // 网络相关的
    changeCategory({ maitKey, index }) {
      if (this.currentIndex === index) {
        return;
      }
      this.currentIndex = index;
      //每次切换后，tabControl的下表重新变为0
      this.$refs.tabControl.currentIndex = 0;
      // 右侧的分类显示出来
      this.getsubCategory(maitKey);
      // tabControl下面的内容展示
      this.getCategoryDetail(
        this.categoryList[this.currentIndex].miniWallkey,
        "pop"
      );
    },
    getCategory() {
      getCategory().then((res) => {
        this.categoryList = res.data.category.list;
        //侧边栏的DOM更新完会执行回调
        this.$nextTick(() => {
          const first = this.categoryList[0];
          this.getsubCategory(first.maitKey);
          this.getCategoryDetail(first.miniWallkey, 'pop')
        });
      });
    },
    getsubCategory(key) {
      getsubCategory(key).then((res) => {
        this.subcategoryList = res.data.list;
      });
    },
    getCategoryDetail(key, type) {
      getCategoryDetail(key, type).then((res) => {
        this.categoryDetailList = res;
      });
    },

    //事件相关的
    updateHeight() {
      this.$refs.scroll.refresh();
    },
    change(index) {
      this.getCategoryDetail(this.categoryList[this.currentIndex].miniWallkey, this.types[index]);
    },
    transparent(y) {
      this.showUpImg(y, 1000);
    }
  },
};
</script>

<style lang='scss' scoped>
#category {
  width: 100vw;
  height: 100vh;
  .nav {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-color: $color-tint;
    color: $white;
    font-size: 16px;
  }
  .included {
    width: 70%;
    position: fixed;
    right: 0;
    bottom: 50px;
    left: 120px;
    overflow: hidden;
    height: calc(100% - 93px);
  }
}
</style>