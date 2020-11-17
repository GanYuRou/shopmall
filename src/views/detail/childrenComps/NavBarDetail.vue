<template>
  <div>
    <nav-bar>
      <template v-slot:left>
        <img src="~assets/image/common/back.svg" alt="back" class="back" @click="backHome">
      </template>
      <template v-slot:center>
        <div class="titles">
          <div v-for="(item, index) in title" :key="item"
               @click="switching(index)" :class="{active: index === currentIndex}">
            <span>{{item}}</span>
          </div>
        </div>
      </template>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
export default {
  data() {
    return {
      currentIndex: 0
    };
  },
  props: {
    title: {
      type: Array,
      defalut() {
        return []
      }
    }
  },
  components: {
    NavBar,
  },
  methods: {
    switching(index) {
      this.currentIndex = index;
      this.$emit("switched", index);
    },
    backHome() {
      this.$router.back();
    }
  },
};
</script>

<style lang='scss' scoped>
.back {
  width: 26px;
  margin-top: 10px;
}
.titles{
  display: flex;
  font-size: $small-font-size;
  div {
    flex: 1;
  }
  .active {
  color: $color-high-line;
  }
}
</style>
