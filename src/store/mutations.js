export default {
  addCount(state, oldProduction) {
    oldProduction.count++;
  },
  pushList(state, payload) {
    payload.count++;
    state.productList.push(payload)
  }
}