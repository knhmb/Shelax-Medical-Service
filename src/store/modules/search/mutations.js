export default {
  SET_SEARCH_ITEMS(state, payload) {
    state.searchItems = payload;
  },
  SET_REGIONS(state, payload) {
    state.regions = payload;
  },
  SET_DISTRICTS(state, payload) {
    state.destricts = payload;
  },
  SET_SINGLE_ITEM_DETIAL(state, payload) {
    state.singleItemDetail = payload;
  },
};
