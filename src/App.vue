<template>
  <div id="app">

    <keep-alive exclude="detail">
      <router-view></router-view>
    </keep-alive>
    <main-tab-bar></main-tab-bar>
    
  </div>
</template>

<script>
import MainTabBar from 'components/content/MainTabBar'
export default {
  components: {
    MainTabBar
  }
}
</script>

<style lang='scss'>
@import 'assets/styles/base'
</style>
