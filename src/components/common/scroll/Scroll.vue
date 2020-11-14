<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from '@better-scroll/core'
import Pullup from '@better-scroll/pull-up'
// 安装插件
BScroll.use(Pullup);
export default {
  data () {
    return {
      scroll: null
    };
  },
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    this.scroll = BScroll(this.$refs.wrapper, {
      // 因为监听会降低性能，需要暴露出去，让别人自行决定是否需要该配置
      probeType: this.probeType,
      scrollY: true,
      click: true,
      pullUpLoad: this.pullUpLoad
    });
    // 返回顶部图片是否显示
    if(this.probeType == 2 || this.probeType == 3) {
      this.scroll.on('scroll', (position) => {
      this.$emit("invisible", position.y);
    })
    }
    // 下拉刷新的业务
    if(this.pullUpLoad) {
      this.scroll.on('pullingUp', () => {
      this.$emit("moreLoaded");
    });
    }
  },
  methods: {
    scrollTo(x, y, time = 500) {
      this.scroll && this.scroll.scrollTo(x, y, time);
    },
    refresh() {
      this.scroll && this.scroll.refresh();
    },
    finishPullUp() {
      this.scroll && this.scroll.finishPullUp();
    }
  }
}
</script>

<style lang='scss' scoped>
</style>