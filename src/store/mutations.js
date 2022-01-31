export default {
  TOGGLE_STEPS(state, payload) {
    state.isSteps = payload;
  },
  SET_STEP(state, payload) {
    state.step = payload;
  },
};
