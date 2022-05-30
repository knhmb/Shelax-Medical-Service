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
  SET_UPDATED_PRICE(state, payload) {
    state.singleItemDetail.originalPrice = payload;
  },
  GET_NEW_COMMENTS(state, payload) {
    state.singleItemDetail.comments = payload;
  },
  updateItemDetails(state, payload) {
    state.singleItemDetail.discountedPrice = payload.discountedPrice;
    state.singleItemDetail.originalPrice = payload.originalPrice;
    state.singleItemDetail.defaultDateTimeslots = payload.defaultDateTimeslots;
    state.singleItemDetail.defaultBookingDate = payload.defaultBookingDate;
    state.singleItemDetail.defaultBookingTime = payload.defaultBookingTime;
    state.calendarViewDates = payload.calendarViewDates;
  },
};
