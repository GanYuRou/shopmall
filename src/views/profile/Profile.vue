<template>
  <div id="profile">
    <nav-bar class="nav">
      <template v-slot:center>
        <div>我的</div>
      </template>
    </nav-bar>
    <login></login>
    <money></money>
    <div class="line"></div>
    <profile-list></profile-list>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import Login from "./childrenComps/Login";
import Money from "./childrenComps/Money";
import ProfileList from "./childrenComps/ProfileList";

export default {
  data() {
    return {};
  },
  components: {
    NavBar,
    Login,
    Money,
    ProfileList,
  },
};
</script>

<style lang='scss' scoped>
#profile {
  width: 100%;
  height: 100%;
  .nav {
    background-color: $color-tint;
    color: $white;
    font-size: $normal-font-size;
  }
  .line {
    width: 100%;
    height: 10px;
    background-color: $color-light-grey;
  }
}
</style>