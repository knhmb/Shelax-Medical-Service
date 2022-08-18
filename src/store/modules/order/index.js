import actions from "./actions";
import mutations from "./mutations";
import getters from "./getters";

export default {
  namespaced: true,
  state() {
    return {
      orderItem: [],
      specifiedDistricts: [],
      couponDetails: [],
      isPromoApplied: false,
      memberPoints: "",
      memberPointsDetails: [],
      userData: [],
      participatedUsers: [],
      selectedUser: [],
    };
  },
  getters,
  mutations,
  actions,
};
