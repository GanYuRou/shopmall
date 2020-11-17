import BackTop from 'components/content/BackTop'

// 将返回顶部的逻辑全部写在这，然后通过mixin混入到需要使用的页面组件中
export const BackTopMixin = {
  data() {
    return {
      showup: false,
    }
  },
  components: {
    BackTop
  },
  methods: {
    goTop() {
      this.$refs.scroll.scrollTo(0, 0);
    },
    showUpImg(y, h) {
      this.showup = -y > h;
    }
  },
}