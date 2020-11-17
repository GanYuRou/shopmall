<template>
  <div class="login">
    <div class="user-pic">
      <img src="~assets/image/profile/me.jpg" class="user-pic-img" />
    </div>
    <div class="user-info">
      <p>登录/注册</p>
      <div class="phone-num">
        <img alt="" class="icon-phone" src="~assets/image/profile/phone.png" />
        <p>暂未绑定手机号</p>
      </div>
    </div>
    <div class="profile-arrow-right">
      <img alt="" src="~assets/image/profile/arrow_right.png" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang='scss' scoped>
.login {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 90px;
  padding: 0 20px;
  background-color: $color-orgin;
  .user-pic {
    img {
      display: inline-block;
      width: 60px;
      height: 60px;
      border-radius: 50%;
    }
  }
  .user-info {
    font-size: 16px;
    margin-left: 20px;
    color: $white;
    & p:last-child {
      margin-left: 3px;
    }
    .phone-num {
      font-size: $small-font-size;
      display: flex;
      align-items: center;
      margin-top: 8px;
      .icon-phone {
        display: inline-block;
        width: 16px;
        height: 16px;
      }
    }
  }
  .profile-arrow-right {
    position: absolute;
    right: 10px;
    width: 20px;
    height: 20px;
    img {
      display: inline-block;
      width: 20px;
      height: 20px;
    }
  }
}
</style>
