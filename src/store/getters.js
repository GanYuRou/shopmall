export default {
  lists(state) {
    return state.productList;
  },
  allCount(state) {
    return state.productList.length;
  },
  total(state) {
    return state.totalPrice.toFixed(2);
  }
}