export default {
  TOGGLE_STEPS(state, payload) {
    state.isSteps = payload;
  },
  SET_STEP(state, payload) {
    state.step = payload;
  },
  SET_LOGIN(state) {
    state.isLoggedIn = true;
  },
  REMOVE_LOGIN(state) {
    state.isLoggedIn = false;
  },
  SET_LANG(state, payload) {
    state.lang = payload;
  },
  SET_SEARCH_VALUES(state, payload) {
    state.date = payload.date;
    state.time = payload.time;
  },
  GET_LANGUAGE(state) {
    state.lang = localStorage.getItem("lang");
  },
  TOGGLE_PASSWORD_STEP(state, payload) {
    state.isStepOneCompleted = payload;
    console.log("reached");
  },
  SET_VENDOR_STEP(state, payload) {
    state.vendorStep = payload;
  },
};
