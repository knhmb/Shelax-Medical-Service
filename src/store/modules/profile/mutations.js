import i18n from "../../../i18n";

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
  SET_ORDER_HISTORY(state, payload) {
    state.orderHistory = payload;
  },
  SET_MEMBER_POINTS(state, payload) {
    state.memberPoints = payload;
  },
  SET_MEMBER_POINTS_HISTORY(state, payload) {
    state.memberPointsHistory = payload;
  },
  SET_COMMENTS(state, payload) {
    state.comments = payload;
  },
  SET_TABLE_DATA(state, payload) {
    payload.forEach((order) => {
      state.tableData.push({
        orderNumber: order.orderNo,
        earnPoints:
          order.transactionType === "DEPOSIT" ? order.pointsRewarded : "",
        pointsUsed:
          order.transactionType === "WITHDRAWAL" ? order.pointsUsed : "",
        validUntil: order.expiryDate,
        expired: order.expired
          ? i18n.global.$t("expired")
          : order.invalid
          ? ""
          : "",
      });
    });
  },
  RESET_TABLE_DATA(state) {
    state.tableData = [];
  },
};
