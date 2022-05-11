import actions from "./actions";
import mutations from "./mutations";
import getters from "./getters";

export default {
  namespaced: true,
  state() {
    return {
      searchItems: [],
      regions: [],
      districts: [],
    };
  },
  getters,
  mutations,
  actions,
};
