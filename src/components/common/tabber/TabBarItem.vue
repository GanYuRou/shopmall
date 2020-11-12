<template>
  <div class="item" @click="acviteClick">
    <div v-if="activity">
        <slot name="icon-substitute"></slot>
    </div>
    <div v-else>
        <slot name="icon-item"></slot> 
    </div>
    <div :style="cuttentColor">
      <slot name="description"></slot>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    };
  },
  props: {
    link: String,
    alterTextColor: {
      type: String,
      default: '#fa8072'
    }
  },
  methods: {
    acviteClick() {
      this.$router.push(this.link);
    }
  },
  computed: {
    activity() {
      return this.$route.path === this.link;
    },
    cuttentColor() {
      if(this.$route.path === this.link) {
        return {color: this.alterTextColor};
      }
      return {color: '#777'};
    }
  }
}
</script>

<style lang='scss' scoped>
.item {
  flex: 1;
  height: 49px;
  text-align: center;
  font-size: 12px;
  cursor: default;
  img {
    width: 20px;
    height: 20px;
    margin: 3px 0;
  }
}
</style>