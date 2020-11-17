<template>
  <div class="single-pro">
    <h3>{{ single.shopName }}</h3>
    <div class="content">
      <span
        class="cricle"
        @click="clickCricle"
        :class="{ active: colorful }"
      ></span>
      <img :src="single.image" />
      <div class="right">
        <h5>{{ single.title }}</h5>
        <div class="price-bottom">
          <span
            >￥<span class="price">{{ single.price }}</span></span
          >
          <div class="component">
            <button @click="decrement" :disabled="show">-</button>
            <span>{{ single.count }}</span>
            <button @click="increment">+</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      colorful: false
    };
  },
  props: {
    single: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  computed: {
    show() {
      return this.single.count <= 1 ? true : false;
    }
  },
  created() {
    this.$bus.$on("allSelected", () => {
      this.colorful = true;
    });
    this.$bus.$on("disAllSelected", () => {
      this.colorful = false;
    });
    this.$bus.$emit("goodStart")
  },
  methods: {
    increment() {
      this.colorful ? this.$store.commit("addCountAndP", this.single) : this.$store.commit("addCount", this.single);;
    },
    decrement() {
      this.colorful ? this.$store.commit("subtractCountAndP", this.single) :this.$store.commit("subtractCount", this.single);
    },
    clickCricle() {
      if(!this.colorful) {
        this.colorful = true;
        this.$store.commit("selected", this.single);
        // 向购物车组件发起事件
        this.$bus.$emit("singleSelect");
      }
      else {
        // 圆圈按钮取消，总价改变
        this.colorful = false;
        this.$store.commit("disdelected", this.single);
         // 向购物车组件发起事件
        this.$bus.$emit("singleDisSelect");
      }
    }
  }
};
</script>

<style lang='scss' scoped>
.single-pro {
  width: 90%;
  margin: 5px auto;
  padding: 15px 20px;
  border-bottom: 3px solid $color-light-grey;
  h3 {
    font-size: $large-font-size;
    margin-bottom: 8px;
    color: $color-grey-dark;
  }
  .content {
    display: flex;
    position: relative;
    .cricle {
      @include select($white);
      position: absolute;
      left: -50px;
      top: 50px;
    }
    .active {
      background-color: $color-tint;
    }
    img {
      width: 100px;
      height: 120px;
    }
    .right {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      h5 {
        width: 200px;
        font-size: $small-font-size;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        margin-left: 10px;
      }
      .price-bottom {
        display: flex;
        justify-content: space-between;
        margin-left: 10px;
        .price {
          color: $color-high-line;
          font-size: $larger-font-size;
        }
        .component {
          button {
            width: 20px;
            height: 20px;
            outline: none;
            background-color: $white;
            border: 1px solid $color-little-grey;
          }
          span {
            display: inline-block;
            text-align: center;
            margin: 0 4px;
            vertical-align: middle;
            border: 2px solid $color-little-grey;
            width: 40px;
            height: 21px;
            line-height: 21px;
          }
        }
      }
    }
  }
}
</style>