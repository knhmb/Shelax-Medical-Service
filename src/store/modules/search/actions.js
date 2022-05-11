import axios from "axios";

export default {
  async searchItem(context, payload) {
    const lang = localStorage.getItem("lang") || "zh-HK";
    const response = await axios.get(
      `/api/item?${payload.search ? `search=${payload.search}` : ""}${
        payload.option && payload.time && payload.date
          ? `&filter=itemtype:${payload.option},bookingdate:${payload.date},bookingtime:${payload.time}`
          : payload.option && payload.date
          ? `&filter=itemtype:${payload.option},bookingdate:${payload.date}`
          : payload.option && payload.time
          ? `&filter=itemtype:${payload.option},bookingtime:${payload.time}`
          : payload.option
          ? `&filter=itemtype:${payload.option}`
          : ""
      }`,
      {
        headers: {
          "accept-language-code": lang,
        },
      }
    );
    console.log(response);
    context.commit("SET_SEARCH_ITEMS", response.data.items);
  },
  async searchMenuItem(_, slug) {
    const lang = localStorage.getItem("lang") || "zh-HK";
    const response = await axios.get(`/api/item?filter=servicecat:${slug}`, {
      headers: {
        "accept-language-code": lang,
      },
    });
    console.log(response);
  },
  async searchProduct(context, slug) {
    const lang = localStorage.getItem("lang") || "zh-HK";
    const response = await axios.get(`/api/item?filter=productcat:${slug}`, {
      headers: {
        "accept-language-code": lang,
      },
    });
    console.log(response);
    context.commit("SET_SEARCH_ITEMS", response.data.items);
  },
  async getRegions(context) {
    const lang = localStorage.getItem("lang") || "zh-HK";
    const response = await axios.get("/api/codex?filter=codexTypeCode:REGION", {
      headers: {
        "accept-language-code": lang,
      },
    });
    console.log(response);
    context.commit("SET_REGIONS", response.data.items);
  },
  async getDistricts(context) {
    const lang = localStorage.getItem("lang") || "zh-HK";
    const response = await axios.get(
      "/api/codex?filter=codexTypeCode:DISTRICT",
      {
        headers: {
          "accept-language-code": lang,
        },
      }
    );
    console.log(response);
    context.commit("SET_DISTRICTS", response.data.items);
  },
  async searchSpecificItem(context, payload) {
    const lang = localStorage.getItem("lang") || "zh-HK";
    const response = await axios.get(
      `/api/item?${payload.query}${
        payload.location ? `,location:${payload.location}` : ""
      }${
        payload.price ? `,price:${payload.price[0]}-${payload.price[1]}` : ""
      }${payload.sort ? `,sort=${payload.sort}` : ""}`,
      {
        headers: {
          "accept-language-code": lang,
        },
      }
    );
    console.log(response);
    context.commit("SET_SEARCH_ITEMS", response.data.items);
  },
};