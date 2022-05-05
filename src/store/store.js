import { createStore } from "vuex";
import actions from "./actions";
import mutations from "./mutations";
import getters from "./getters";
import dashboardModule from "./modules/dashboard/index";
import authModule from "./modules/auth/index";

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
    auth: authModule,
  },
});

export default store;
