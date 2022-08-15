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
    state.memberPoints = payload.memberPointsBalance;
    state.memberPointsDetails = payload.memberPointsUsed;
    state.orderItem.discount = payload.discount;
    state.orderItem.totalPrice = payload.totalPrice;
    state.orderItem.finalPrice = payload.finalPrice;
    state.isPromoApplied = true;
  },
  SET_MEMBER_POINTS(state, payload) {
    state.memberPoints = payload;
  },
  SET_MEMBER_POINTS_DETAILS(state, payload) {
    state.memberPointsDetails = payload;
    state.memberPoints = payload.memberPointsBalance;
    state.couponDetails.newTotalDiscount = payload.newTotalDiscount;
    state.couponDetails.amountToBePaid = payload.amountToBePaid;
    state.isPromoApplied = true;
  },
  DISABLE_PROMO(state, payload) {
    state.isPromoApplied = payload;
  },
};
