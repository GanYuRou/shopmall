export default {
  goCart({state, commit}, payload) {
    let oldProduction = null;
    oldProduction = state.productList.find(item => item.iid === payload.iid)
    oldProduction ? commit("addCount", oldProduction) :  commit("pushList", payload);
  }
}