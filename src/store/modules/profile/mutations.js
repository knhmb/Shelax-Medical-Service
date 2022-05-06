export default {
  SET_ACCOUNT(state, payload) {
    state.userDetails = payload;
  },
  SET_COUNTRY_CODE(state, payload) {
    state.countryCodes = payload;
  },
};
