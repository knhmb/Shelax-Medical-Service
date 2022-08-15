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
      aboutUsContent: {},
      beAPartnerContent: {},
      shelaxPointsContent: {},
      tAndCContent: {},
      privacyPolicyContent: {},
      faq: {},
      faqContent: {},
      contactUsContent: {},
      allThemes: [],
      themeTheme8: [],
      themeX: [],
    };
  },
  getters,
  mutations,
  actions,
};
