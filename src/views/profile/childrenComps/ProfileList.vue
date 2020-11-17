<template>
  <div class="profile-list">
    <div class="profile-list-item">
      <span>我的消息</span>
    </div>
    <div class="profile-list-item">
      <span>积分商城</span>
    </div>
    <div class="profile-list-item">
      <span style="border-bottom: 0">会员卡</span>
    </div>
    <div class="line"></div>
    <div class="profile-list-item">
      <span>我的购物车</span>
    </div>
    <div class="profile-list-item">
      <span>点赞购物APP</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "profileList",
};
</script>

<style lang='scss' scoped>
.profile-list {
  width: 100%;
  .profile-list-item {
    line-height: 45px;
    display: flex;
    align-items: center;
    height: 45px;
    padding-left: 20px;
    span {
      font-size: $normal-font-size;
      display: inline-block;
      width: 100%;
      color: $color-grey-dark;
      border-bottom: 1px solid $color-little-grey;
    }
  }
  .line {
    width: 100%;
    height: 10px;
    background-color: $color-light-grey;
  }
}
</style>
