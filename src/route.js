import { createRouter, createWebHistory } from "vue-router";

import Home from "./pages/Home.vue";
import Search from "./pages/Search.vue";
import Service from "./pages/Service.vue";
import ContactUs from "./pages/ContactUs.vue";
import ShoppingCart from "./pages/ShoppingCart.vue";
import ShoppingCart2 from "./pages/ShoppingCart2.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/home" },
    { path: "/home", component: Home },
    { path: "/search", component: Search },
    { path: "/service", component: Service },
    { path: "/contact-us", component: ContactUs },
    { path: "/shopping-cart", component: ShoppingCart },
    { path: "/shopping-cart-step-2", component: ShoppingCart2 },
  ],
});

export default router;
