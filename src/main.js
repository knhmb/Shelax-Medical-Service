import { createApp } from "vue";
import App from "./App.vue";

import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

import BaseContainer from "./ui/BaseContainer.vue";
import BaseContentContainer from "./ui/BaseContentContainer.vue";

const app = createApp(App);

app.use(ElementPlus);

app.component("base-container", BaseContainer);
app.component("base-content-container", BaseContentContainer);

app.mount("#app");
