import { createStore } from "vuex";
import actions from "./actions";
import mutations from "./mutations";
import getters from "./getters";
import dashboardModule from "./modules/dashboard/index";
import authModule from "./modules/auth/index";
import profileModule from "./modules/profile/index";
import searchModule from "./modules/search/index";
import createPersistedState from "vuex-persistedstate";

const store = createStore({
  plugins: [createPersistedState()],
  state() {
    return {
      isSteps: false,
      step: 0,
      isLoggedIn: false,
      lang: localStorage.getItem("lang"),
      date: null,
      time: null,
    };
  },
  actions,
  mutations,
  getters,
  modules: {
    dashboard: dashboardModule,
    auth: authModule,
    profile: profileModule,
    search: searchModule,
  },
});

export default store;
