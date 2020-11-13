<template>
  <div class="tab-control">
    <div v-for="(item, index) in titles" 
         :key="item" @click="swift(index)" :class="{active: index === currentIndex}">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      currentIndex: 0
    };
  },
  props: {
    titles: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    swift(index) {
      this.currentIndex = index;
    }
  }
}
</script>

<style lang='scss' scoped>
.tab-control {
  display: flex;
  height: 44px;
  line-height: 44px;
  background-color: $white;
  font-size: $normal-font-size;
  text-align: center;
  div {
    flex: 1;
    span {
      padding: 5px;
    }
  }
}
.active {
  color: $color-high-line;
  span {
    border-bottom: 2px solid $color-high-line;
  }
}
</style>