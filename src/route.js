import { createRouter, createWebHistory } from "vue-router";

import Home from "./pages/Home.vue";
import Search from "./pages/Search.vue";
import Service from "./pages/Service.vue";
import ContactUs from "./pages/ContactUs.vue";
import ShoppingCart from "./pages/ShoppingCart.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/home" },
    { path: "/home", component: Home },
    { path: "/search", component: Search },
    { path: "/service", component: Service },
    { path: "/contact-us", component: ContactUs },
    { path: "/shopping-cart", component: ShoppingCart },
  ],
});

export default router;
