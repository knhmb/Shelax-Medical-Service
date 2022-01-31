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

// import lang from "element-plus/lib/locale/lang/zh-cn";

const app = createApp(App);

library.add(faChevronRight, faChevronLeft);
app.component("font-awesome-icon", FontAwesomeIcon);

app.use(ElementPlus);
app.use(router);
app.use(store);

app.component("base-container", BaseContainer);
app.component("base-content-container", BaseContentContainer);
app.component("base-button", BaseButton);

app.mount("#app");
