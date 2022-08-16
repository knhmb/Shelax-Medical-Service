import actions from "./actions";
import mutations from "./mutations";
import getters from "./getters";

export default {
  namespaced: true,
  state() {
    return {
      userDetails: [],
      countryCodes: [],
      serviceUsers: [],
      wishlists: [],
      orderHistory: [],
      memberPoints: null,
      memberPointsHistory: [],
      comments: [],
      tableData: [],
      instructions: [],
    };
  },
  getters,
  mutations,
  actions,
};
