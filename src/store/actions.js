export default {
  // 点击购物车添加商品
  goCart({state, commit}, payload) {
    let oldProduction = null;
    oldProduction = state.productList.find(item => item.iid === payload.iid)
    oldProduction ? commit("addCount", oldProduction) :  commit("pushList", payload);
  },
}