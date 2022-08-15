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
    console.log(state.themes);
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
  SET_THEME_X(state, payload) {
    state.themeX = payload;
  },
  SET_THEME_THEME_8(state, payload) {
    state.themeTheme8 = payload;
  },
  SET_ALL_THEMES(state, payload) {
    const arr = [];
    arr.push({ data: payload.data, slug: payload.slug });
    arr.forEach((item) => state.allThemes.push(item));
    // state.allThemes.push
    // payload.data.forEach((item) => {
    //   arr.push({ data: item, slug: payload.slug });
    //   state.allThemes.push(arr);
    // });
    console.log(arr);
    console.log(state.allThemes);
  },
  RESET_THEMES(state) {
    state.allThemes = [];
  },
};
