export default {
  SET_ORDER_ITEM(state, payload) {
    state.orderItem = payload;
  },
  SET_SPECIFIED_DISTRICTS(state, payload) {
    state.specifiedDistricts = payload;
  },
  SET_NEW_COUPON(state, payload) {
    console.log(state.orderItem);
    console.log(payload);
    state.couponDetails = payload;
    state.isPromoApplied = true;
  },
};
