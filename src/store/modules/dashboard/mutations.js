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
};
