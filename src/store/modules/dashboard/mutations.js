export default {
  SET_MENU_ITEMS(state, payload) {
    state.menuItems = payload;
  },
  setSubMenuItems(state, payload) {
    state.subMenuItems = payload;
  },
  SET_PROMO_BANNERS(state, payload) {
    {
      state.promoBanners = payload;
    }
  },
  SET_THEMES(state, paylaod) {
    state.themes = paylaod;
  },
  SET_SERVICE_CATEGORY(state, payload) {
    state.serviceCategory = payload;
  },
  SET_PRODUCT_CATEGORY(state, payload) {
    state.productCategory = payload;
  },
  SET_PRODUCT_ITEMS(state, payload) {
    state.productItems = payload;
  },
  SET_CERVICAL_CANCER_THEME(state, payload) {
    state.cervicalCancerTheme = payload;
  },
  SET_PREGNANCY_THEME(state, payload) {
    state.pregnancyTheme = payload;
  },
  SET_MEDICAL_CONSULTANCY_THEME(state, payload) {
    state.medicalConsultancyTheme = payload;
  },
  SET_OTHER_THEME(state, payload) {
    state.otherTheme = payload;
  },
  SET_ABOUT_US_CONTENT(state, payload) {
    state.aboutUsContent = payload;
  },
  SET_BE_A_PARTNER_CONTENT(state, payload) {
    state.beAPartnerContent = payload;
  },
  SET_SHELAX_POINTS_CONTENT(state, payload) {
    state.shelaxPointsContent = payload;
  },
  SET_T_AND_C_CONTENT(state, payload) {
    state.tAndCContent = payload;
  },
  SET_PRIVACY_POLICY_CONTENT(state, payload) {
    state.privacyPolicyContent = payload;
  },
  SET_FAQ(state, payload) {
    state.faq = payload;
  },
  SET_FAQ_CONTENT(state, payload) {
    state.faqContent = payload;
  },
  SET_CONTACT_US_CONTENT(state, payload) {
    state.contactUsContent = payload;
  },
};
