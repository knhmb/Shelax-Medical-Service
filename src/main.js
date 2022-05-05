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

import BaseContainer from "./ui/BaseContainer.vue";
import BaseContentContainer from "./ui/BaseContentContainer.vue";
import BaseButton from "./ui/BaseButton.vue";
import BaseCard from "./ui/BaseCard.vue";
import BaseMemberCard from "./ui/BaseMemberCard.vue";
import i18n from "./i18n.js";
// import axios from "axios";

// Axios
// const lang = localStorage.getItem("lang");
// console.log(lang);
// axios.defaults.headers.common["accept-language-code"] = lang;

const app = createApp(App);

library.add(faChevronRight, faChevronLeft);
app.component("font-awesome-icon", FontAwesomeIcon);

app.use(ElementPlus);
app.use(router);
app.use(store);
app.use(i18n);

app.component("base-container", BaseContainer);
app.component("base-content-container", BaseContentContainer);
app.component("base-button", BaseButton);
app.component("base-card", BaseCard);
app.component("base-member-card", BaseMemberCard);

app.mount("#app");
