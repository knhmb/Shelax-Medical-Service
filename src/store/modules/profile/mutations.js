export default {
  SET_ACCOUNT(state, payload) {
    state.userDetails = payload;
  },
  SET_COUNTRY_CODE(state, payload) {
    state.countryCodes = payload;
  },
  SET_SERVICE_USERS(state, payload) {
    state.serviceUsers = payload;
  },
  UPDATE_BOOKMARK(state, payload) {
    this.state.search.singleItemDetail.bookmarked = payload;
  },
  SET_WISHLISTS(state, payload) {
    state.wishlists = payload;
  },
};
