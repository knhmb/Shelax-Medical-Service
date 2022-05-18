import actions from "./actions";
import mutations from "./mutations";
import getters from "./getters";

export default {
  namespaced: true,
  state() {
    return {
      menuItems: [],
      subMenuItems: [],
      promoBanners: [],
      themes: [],
      serviceCategory: [],
      productCategory: [],
      productItems: [],
      pregnancyTheme: [],
      cervicalCancerTheme: [],
      medicalConsultancyTheme: [],
      otherTheme: [],
    };
  },
  getters,
  mutations,
  actions,
};
