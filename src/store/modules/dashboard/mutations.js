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
};
