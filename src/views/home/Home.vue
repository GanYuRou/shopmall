<template>
  <div>
    <div>
      {{$store.state.a.count}}
    </div>
    <button @click="addition">+</button>
    <button @click="subtraction">-</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
    };
  },
  methods: {
    addition() {
      this.$store.commit("increment")
    },
    subtraction() {
      this.$store.commit("decrement")
    }
  }
}
</script>

<style lang='scss' scoped>
</style>