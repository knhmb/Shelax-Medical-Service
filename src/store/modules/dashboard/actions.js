import axios from "axios";

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
  getThemes(context) {
    const lang = localStorage.getItem("lang") || "zh-HK";
    axios
      .get("/api/codex?filter=codexTypeCode:THEME", {
        headers: {
          "accept-language-code": lang,
        },
      })
      .then((res) => {
        console.log(res);
        context.commit("SET_THEMES", res.data.items);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  getSingleTheme(_, item) {
    const lang = localStorage.getItem("lang") || "zh-HK";
    axios
      .get(`/api/item?filter=theme:${item[0].slug}&pagesize=4`, {
        headers: {
          "accept-language-code": lang,
        },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
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
};
