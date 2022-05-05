import { createStore } from "vuex";
import actions from "./actions";
import mutations from "./mutations";
import getters from "./getters";
import dashboardModule from "./modules/dashboard";

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
  modules: {
    dashboard: dashboardModule,
  },
});

export default store;
