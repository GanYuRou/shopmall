<template>
  <div class="recommend">
    <div v-for="item in recommend" :key="item.title" class="single">
      <a :href="item.link">
        <img :src="item.image" alt="item.title">
      </a>
      <div>{{ item.title }}</div>
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
    recommend: {
      type: Array,
      default() {
        return [];
      }
    }
  }
}
</script>

<style lang='scss' scoped>
.recommend {
  display: flex;
  justify-content: space-between;
  text-align: center;
  padding: 15px 0 45px;
  border-bottom: 5px solid #eee;
  font-size: $small-font-size;
  width: 100%;

  & img {
    width: 80%;
    margin-bottom: 8px;
  }
  
}
</style>