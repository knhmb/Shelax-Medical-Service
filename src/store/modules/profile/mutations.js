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
};
