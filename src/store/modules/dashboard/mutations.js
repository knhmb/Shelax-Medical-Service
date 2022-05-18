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
};
