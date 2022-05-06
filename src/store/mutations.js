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
};
