<template>
  <div>
    <tab-bar>
      <tab-bar-item link='/home'>
        <template v-slot:icon-item>
          <img src='~assets/image/tabbar/home.svg' alt='home' />
        </template>
        <template v-slot:icon-substitute>
          <img src='~assets/image/tabbar/homecolor.svg' alt='home' />
        </template>
        <template v-slot:description>
          <div>首页</div>
        </template>
      </tab-bar-item>
      <tab-bar-item link='/category'>
        <template v-slot:icon-item>
          <img src='~assets/image/tabbar/category.svg' alt='classify' />
        </template>
        <template v-slot:icon-substitute>
          <img src='~assets/image/tabbar/categorycolor.svg' alt='classify' />
        </template>
        <template v-slot:description>
          <div>分类</div>
        </template>
      </tab-bar-item>
      <tab-bar-item link='/shopcart'>
        <template v-slot:icon-item>
          <img src='~assets/image/tabbar/shopcart.svg' alt='cart' />
        </template>
        <template v-slot:icon-substitute>
          <img src='~assets/image/tabbar/shopcartcolor.svg' alt='cart' />
        </template>
        <template v-slot:description>
          <div>购物车</div>
        </template>
      </tab-bar-item>
      <tab-bar-item link='/profile'>
        <template v-slot:icon-item>
          <img src='~assets/image/tabbar/profile.svg' alt='profile' />
        </template>
        <template v-slot:icon-substitute>
          <img src='~assets/image/tabbar/profilecolor.svg' alt='profile' />
        </template>
        <template v-slot:description>
          <div>我的</div>
        </template>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from 'components/common/tabber/TabBar'
import TabBarItem from 'components/common/tabber/TabBarItem'

export default {
  components: {
    TabBar,
    TabBarItem
  }
};
</script>

<style lang='scss' scoped>
</style>