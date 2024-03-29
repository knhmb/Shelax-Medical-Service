import { createApp } from "vue";
import router from "./route.js";
import store from "./store/store.js";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import App from "./App.vue";

import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import "element-plus/theme-chalk/display.css";

import vue3GoogleLogin from "vue3-google-login";

// import gAuthPlugin from "vue3-google-oauth2";
let gAuthClientId =
  "145313498532-mbtkbu2ncbjcrddqcngeii997qlu6a1n.apps.googleusercontent.com";
// let apiKey = "AIzaSyC7B_fGxboPSr8iSPW_dq6J5GJ-PdgVEJg";

import BaseContainer from "./ui/BaseContainer.vue";
import BaseContentContainer from "./ui/BaseContentContainer.vue";
import BaseButton from "./ui/BaseButton.vue";
import BaseCard from "./ui/BaseCard.vue";
import BaseMemberCard from "./ui/BaseMemberCard.vue";
import i18n from "./i18n.js";

import "v-calendar/dist/style.css";

const app = createApp(App);

app.config.globalProperties.window = window;

library.add(faChevronRight, faChevronLeft);
app.component("font-awesome-icon", FontAwesomeIcon);

app.use(ElementPlus);
app.use(router);
app.use(store);
app.use(i18n);
app.use(vue3GoogleLogin, {
  clientId: gAuthClientId,
});

app.component("base-container", BaseContainer);
app.component("base-content-container", BaseContentContainer);
app.component("base-button", BaseButton);
app.component("base-card", BaseCard);
app.component("base-member-card", BaseMemberCard);

const asyncLocalStorage = {
  setItem: async function (key, value) {
    await null;
    return localStorage.setItem(key, value);
  },
  getItem: async function (key) {
    await null;
    return localStorage.getItem(key);
  },
};

asyncLocalStorage.setItem("lang", "zh-HK").then(() => {
  app.mount("#app");
});

// app.mount("#app");
