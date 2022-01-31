export default {
  toggleSteps(context, payload) {
    context.commit("TOGGLE_STEPS", payload);
  },
  setStep(context, payload) {
    context.commit("SET_STEP", payload);
  },
};
