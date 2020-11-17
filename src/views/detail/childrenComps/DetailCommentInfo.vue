<template>
  <div class="comment-info" v-if="Object.keys(comments).length !== 0">
    <div class="header">
      <div>用户评价</div>
      <div>更多</div>
    </div>
    <div class="user">
      <img :src="comments.user.avatar">
      <span>{{comments.user.uname}}</span>
    </div>
    <div class="comment-detail">
      <p>{{comments.content}}</p>
      <div class="specific">
        <span class="data">{{comments.created | showDate}}</span>
        <span class="style">{{comments.style}}</span>
      </div>
    </div>
    <div class="info-imgs">
      <img :key="index" :src="item" v-for="(item, index) in comments.images" />
    </div>
  </div>
</template>

<script>
import { formatDate } from 'common/utils/formatdate'
export default {
  data () {
    return {
    };
  },
  props: {
    comments: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  filters: {
    showDate(date) {
      const time = new Date(date * 1000);
      return formatDate(time, "yyyy-MM-dd hh:mm");
    }
  }
}
</script>

<style lang='scss' scoped>
.comment-info {
  border-bottom: 3px solid $color-light-grey;
  width: 95%;
  margin: 0 auto;
  .header {
    margin: 0 auto;
    font-size: $large-font-size;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 2px 10px 15px;
    border-bottom: 3px solid $color-light-grey;
  }
  .user {
    padding: 8px;
    img {
      width: 50px;
      height: 50px;
      vertical-align: middle;
    }
    span {
      font-size: $large-font-size;
      padding-left: 10px;
      color: $color-grey-dark;
    }
  }
  .comment-detail {
    padding: 5px;
    margin-bottom: 10px;
    p {
      font-size: $normal-font-size;
      line-height: 1.5;
    }
    .specific {
      margin-top: 10px;
      font-size: $smaller-font-size;
    }
  }
  .info-imgs {
    margin: 10px 0;
    img {
      width: 90px;
      height: 90px;
      margin-right: 10px;
    }
  }
}
</style>