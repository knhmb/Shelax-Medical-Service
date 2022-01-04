import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import App from "./App.vue";

import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

import BaseContainer from "./ui/BaseContainer.vue";
import BaseContentContainer from "./ui/BaseContentContainer.vue";

import Home from "./pages/Home.vue";
import Search from "./pages/Search.vue";
import Service from "./pages/Service.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/home" },
    { path: "/home", component: Home },
    { path: "/search", component: Search },
    { path: "/service", component: Service },
  ],
});
const app = createApp(App);

library.add(faEyeSlash);
app.component("font-awesome-icon", FontAwesomeIcon);

app.use(ElementPlus);
app.use(router);

app.component("base-container", BaseContainer);
app.component("base-content-container", BaseContentContainer);

app.mount("#app");
