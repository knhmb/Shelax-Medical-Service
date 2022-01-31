import { createStore } from "vuex";
import actions from "./actions";
import mutations from "./mutations";
import getters from "./getters";

const store = createStore({
  state() {
    return {
      isSteps: false,
      step: 0,
    };
  },
  actions,
  mutations,
  getters,
});

export default store;
