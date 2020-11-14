<template>
  <div>
    <swiper>
      <swiper-item v-for="item in banner" :key="item.title">
        <a :href="item.link">
          <img :src="item.image" :alt="item.title" @load="imageLoaded">
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import {Swiper, SwiperItem} from 'components/common/swiper/index'
export default {
  data () {
    return {
      once: true
    };
  },
  props: {
    banner: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  components: {
    Swiper,
    SwiperItem
  },
  methods: {
    imageLoaded() {
      if(this.once) {
        this.$emit("swiperImage");
        this.once = false;
      }
    }
  }
}
</script>

<style lang='scss' scoped>
</style>