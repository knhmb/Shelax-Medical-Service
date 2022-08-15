import { createRouter, createWebHistory } from "vue-router";

import Home from "./pages/Home.vue";
import Search from "./pages/Search.vue";
import Service from "./pages/Service.vue";
import ContactUs from "./pages/ContactUs.vue";
import ShoppingCart from "./pages/ShoppingCart.vue";
import ShoppingCart2 from "./pages/ShoppingCart2.vue";
import PrivacyAndPolicy from "./pages/PrivacyAndPolicy.vue";
import TC from "./pages/T&C.vue";
import QAndA from "./pages/Q&A.vue";
import AboutUs from "./pages/AboutUs.vue";
import BeAPartner from "./pages/BeAPartner.vue";
import ProductDetail from "./pages/ProductDetail.vue";
import ProductSearch from "./pages/ProductSearch.vue";
import VendorRegistration from "./pages/VendorRegistration.vue";
import VendorLogin from "./pages/VendorLogin.vue";
import VendorForgotPassword from "./pages/VendorForgotPassword.vue";
import MemberProfile from "./pages/MemberProfile.vue";
import PersonalInformation from "./pages/PersonalInformation.vue";
import ShelaxPoints from "./pages/ShelaxPoints.vue";
import OtherMember from "./pages/OtherMember.vue";
import Comment from "./pages/Comment.vue";
import Booking from "./pages/Booking.vue";
import Wishlist from "./pages/Wishlist.vue";
import MemberPoints from "./pages/MemberPoints.vue";

const router = createRouter({
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/home" },
    { path: "/home", component: Home },
    { path: "/reset-password", component: Home },
    { path: "/search", component: Search, name: "search" },
    { path: "/service", component: Service },
    { path: "/contact-us", component: ContactUs },
    { path: "/shopping-cart", component: ShoppingCart },
    { path: "/shopping-cart-step-2", component: ShoppingCart2 },
    { path: "/privacy-and-policy", component: PrivacyAndPolicy },
    { path: "/terms-and-conditions", component: TC },
    { path: "/questions-and-answers", component: QAndA },
    { path: "/about-us", component: AboutUs },
    { path: "/become-a-partner", component: BeAPartner },
    { path: "/product-detail", component: ProductDetail },
    { path: "/product-search", component: ProductSearch },
    { path: "/vendor-registration", component: VendorRegistration },
    { path: "/admin-login", component: VendorLogin },
    { path: "/vendor-forgot-password", component: VendorForgotPassword },
    { path: "/shelax-points", component: ShelaxPoints },
    {
      path: "/member-profile",
      component: MemberProfile,
      beforeEnter: (to, from, next) => {
        if (localStorage.getItem("accessToken")) {
          next();
        } else {
          router.replace("/");
        }
      },
      children: [
        {
          path: "personal-information",
          component: PersonalInformation,
          name: "personal-information",
        },
        {
          path: "other-member",
          component: OtherMember,
          name: "other-member",
        },
        {
          path: "comment",
          component: Comment,
          name: "comment",
        },
        {
          path: "booking",
          component: Booking,
          name: "booking",
        },
        {
          path: "wishlist",
          component: Wishlist,
          name: "wishlist",
        },
        {
          path: "member-points",
          component: MemberPoints,
          name: "shelax-points",
        },
      ],
    },
  ],
});

export default router;
