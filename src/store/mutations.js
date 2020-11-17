export default {
  // 购物车+ -> 未选中圆圈
  addCount(state, oldProduction) {
    oldProduction.count++;
  },
  // 购物车+ -> 选中圆圈
  addCountAndP(state, oldProduction) {
    oldProduction.count++;
    state.totalPrice += Number(oldProduction.price);
  },
  // 购物车- -> 未选中圆圈
  subtractCount(state, oldProduction) {
    oldProduction.count--;
  },
  // 购物车- -> 选中圆圈
  subtractCountAndP(state, oldProduction) {
    oldProduction.count--;
    state.totalPrice -= Number(oldProduction.price);
  },

  pushList(state, payload) {
    payload.count++;
    state.productList.push(payload)
  },

  // 购物车页面
  // 点击商品前的按钮，选中
  selected(state, payload) {
    state.totalPrice += Number(payload.price) * payload.count;
  },
  // 点击商品前的按钮，不选中
  disdelected(state, payload) {
    state.totalPrice -= Number(payload.price) * payload.count;
  },
  // 点击全选圆圈，全部结算
  computeAll(state) {
    state.totalPrice = state.productList.reduce((pre, item) => {
      return pre + Number(item.price);
    }, 0)
  },
  zero(state) {
    state.totalPrice = 0;
  }
}