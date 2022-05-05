import axios from "axios";

export default {
  getMenuItems(context) {
    const lang = localStorage.getItem("lang");
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
    const lang = localStorage.getItem("lang");
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
};
