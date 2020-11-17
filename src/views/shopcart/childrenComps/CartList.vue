<template>
  <div>
    <div v-for="(item, index) in lists" :key="index">
      <single-item :single="item"></single-item>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import SingleItem from './SingleItem'

export default {
  data () {
    return {
    };
  },
  computed: {
    ...mapGetters(['lists'])
  },
  components: {
    SingleItem
  }
}
</script>

<style lang='scss' scoped>
</style>