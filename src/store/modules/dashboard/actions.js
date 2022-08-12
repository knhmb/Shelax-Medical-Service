import axios from "axios";
// import i18n from "../../../i18n";

export default {
  getMenuItems(context) {
    const lang = localStorage.getItem("lang") || "zh-HK";
    axios
      .get("/api/codex?filter=codexTypeCode:SERV_CAT&sort=+displayOrder", {
        headers: {
          "accept-language-code": lang,
        },
      })
      .then((res) => {
        // console.log(res);
        context.commit("SET_MENU_ITEMS", res.data.items);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  getGenericTestingSubMenuItem(context) {
    const lang = localStorage.getItem("lang") || "zh-HK";
    axios
      .get(
        "/api/codex?filter=parentCodexSlug:servcat-genetic-testing&sort=+displayOrder",
        {
          headers: {
            "accept-language-code": lang,
          },
        }
      )
      .then((res) => {
        console.log(res);
        context.commit("setSubMenuItems", res.data.items);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  getPromoBanner(context) {
    axios
      .get("/api/promo-banner")
      .then((res) => {
        // console.log(res);
        context.commit("SET_PROMO_BANNERS", res.data.items);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  async getThemes(context) {
    const lang = localStorage.getItem("lang") || "zh-HK";
    await axios
      .get("/api/codex?filter=codexTypeCode:THEME", {
        headers: {
          "accept-language-code": lang,
        },
      })
      .then((res) => {
        console.log("themes here");
        console.log(res);
        context.commit("SET_THEMES", res.data.items);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  async getSingleTheme(context, item) {
    const lang = localStorage.getItem("lang") || "zh-HK";
    await axios
      .get(`/api/item?filter=theme:${item.slug}&pagesize=4`, {
        headers: {
          "accept-language-code": lang,
        },
      })
      .then((res) => {
        console.log(res);
        if (item.slug === "theme-prevent-cervical-cancer") {
          context.commit("SET_CERVICAL_CANCER_THEME", res.data.items);
          console.log("Cancer");
          console.log(res.data.items);
        }
        if (item.slug === "theme-medical-consultancy") {
          context.commit("SET_MEDICAL_CONSULTANCY_THEME", res.data.items);
          console.log("Medical");
        }
        if (item.slug === "theme-pre-pregnancy-check-up") {
          context.commit("SET_PREGNANCY_THEME", res.data.items);
          console.log("Pregnancy");
        }
        if (item.slug === "theme-other") {
          context.commit("SET_OTHER_THEME", res.data.items);
          console.log("OTHER");
        }
      })
      .catch((err) => {
        console.log(err);
      });
    // axios
    //   .get(`/api/item?filter=theme:${item[0].slug}&pagesize=4`, {
    //     headers: {
    //       "accept-language-code": lang,
    //     },
    //   })
    //   .then((res) => {
    //     console.log(res);
    //     if (item[0].slug === "theme-prevent-cervical-cancer") {
    //       context.commit("SET_CERVICAL_CANCER_THEME", res.data.items);
    //       console.log("Cancer");
    //     }
    //     if (item[0].slug === "theme-medical-consultancy") {
    //       context.commit("SET_MEDICAL_CONSULTANCY_THEME", res.data.items);
    //       console.log("Medical");
    //     }
    //     if (item[0].slug === "theme-pre-pregnancy-check-up") {
    //       context.commit("SET_PREGNANCY_THEME", res.data.items);
    //       console.log("Pregnancy");
    //     }
    //     if (item[0].slug === "theme-other") {
    //       context.commit("SET_OTHER_THEME", res.data.items);
    //       console.log("OTHER");
    //     }
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  },
  async getServiceCategory(context) {
    const lang = localStorage.getItem("lang") || "zh-HK";
    const response = await axios.get(
      "/api/codex?filter=codexTypeCode:SERV_CAT",
      {
        headers: {
          "accept-language-code": lang,
        },
      }
    );
    console.log(response);
    context.commit("SET_SERVICE_CATEGORY", response.data.items);
  },
  async getProductCategory(context) {
    const lang = localStorage.getItem("lang") || "zh-HK";
    const response = await axios.get(
      "/api/codex?filter=codexTypeCode:PROD_CAT",
      {
        headers: {
          "accept-language-code": lang,
        },
      }
    );
    console.log(response);
    context.commit("SET_PRODUCT_CATEGORY", response.data.items);
  },
  async getProductItems(context) {
    const lang = localStorage.getItem("lang") || "zh-HK";
    const response = await axios.get(
      "/api/codex?filter=codexTypeCode:PROD_CAT",
      {
        headers: {
          "accept-language-code": lang,
        },
      }
    );
    console.log(response);
    context.commit("SET_PRODUCT_ITEMS", response.data.items);
  },
  async getAboutUsContent(context) {
    const lang = localStorage.getItem("lang") || "zh-HK";

    const response = await axios.get("/api/cms-page/about-shelax", {
      headers: {
        "accept-language-code": lang,
      },
    });
    console.log(response);
    context.commit("SET_ABOUT_US_CONTENT", response.data.item);
  },
  async getBeAPartnerContent(context) {
    const lang = localStorage.getItem("lang") || "zh-HK";

    const response = await axios.get("/api/cms-page/to-be-partner", {
      headers: {
        "accept-language-code": lang,
      },
    });
    console.log(response);
    context.commit("SET_BE_A_PARTNER_CONTENT", response.data.item);
  },
  async getShelaxPointsContent(context) {
    const lang = localStorage.getItem("lang") || "zh-HK";

    const response = await axios.get("/api/cms-page/about-shelax-points", {
      headers: {
        "accept-language-code": lang,
      },
    });
    console.log(response);
    context.commit("SET_SHELAX_POINTS_CONTENT", response.data.item);
  },
  async getTAndCContent(context) {
    const lang = localStorage.getItem("lang") || "zh-HK";

    const response = await axios.get("/api/cms-page/t-and-c", {
      headers: {
        "accept-language-code": lang,
      },
    });
    console.log(response);
    context.commit("SET_T_AND_C_CONTENT", response.data.item);
  },
  async getPrivacyPolicyContent(context) {
    const lang = localStorage.getItem("lang") || "zh-HK";

    const response = await axios.get("/api/cms-page/privacy-policy", {
      headers: {
        "accept-language-code": lang,
      },
    });
    console.log(response);
    context.commit("SET_PRIVACY_POLICY_CONTENT", response.data.item);
  },
  async getFaq(context) {
    const lang = localStorage.getItem("lang") || "zh-HK";

    const response = await axios.get("/api/cms-page/faq", {
      headers: {
        "accept-language-code": lang,
      },
    });
    console.log(response);
    context.commit("SET_FAQ", response.data.item);
  },
  async getFaqContent(context) {
    const lang = localStorage.getItem("lang") || "zh-HK";

    const response = await axios.get("/api/faq", {
      headers: {
        "accept-language-code": lang,
      },
    });
    console.log(response);
    context.commit("SET_FAQ_CONTENT", response.data.items);
  },
  async getContactUsContent(context) {
    const lang = localStorage.getItem("lang") || "zh-HK";

    const response = await axios.get("/api/cms-page/contact-us", {
      headers: {
        "accept-language-code": lang,
      },
    });
    console.log(response);
    context.commit("SET_CONTACT_US_CONTENT", response.data.item);
  },
  async contactUs(_, payload) {
    const response = await axios.post("/api/contact-us", payload);
    console.log(response);
  },
};
