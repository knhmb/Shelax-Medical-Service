import axios from "axios";

export default {
  async searchItem(context, payload) {
    const lang = localStorage.getItem("lang") || "zh-HK";
    const response = await axios.get(
      `/api/item?${payload.search ? `search=${payload.search}&` : ""}${
        payload.option && payload.time && payload.date
          ? `filter=itemtype:${payload.option},bookingdate:${payload.date},bookingtime:${payload.time}`
          : payload.option && payload.date
          ? `filter=itemtype:${payload.option},bookingdate:${payload.date}`
          : payload.option && payload.time
          ? `filter=itemtype:${payload.option},bookingtime:${payload.time}`
          : payload.option
          ? `filter=itemtype:${payload.option}`
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
  async searchMenuItem(context, slug) {
    const lang = localStorage.getItem("lang") || "zh-HK";
    const response = await axios.get(`/api/item?filter=servicecat:${slug}`, {
      headers: {
        "accept-language-code": lang,
      },
    });
    console.log(response);
    context.commit("SET_SEARCH_ITEMS", response.data.items);
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
    const response = await axios
      .get(`/api/item`, {
        headers: {
          "accept-language-code": lang,
        },
        params: {
          filter: `${
            payload.query.includes("theme")
              ? `theme:${payload.query}`
              : `${payload.query}`
          }${payload.location ? `,location:${payload.location}` : ""}${
            payload.price
              ? `,price:${payload.price[0]}-${payload.price[1]}`
              : ""
          }${payload.sort ? `&sort=${payload.sort}` : ""}`,
        },
      })
      .catch((err) => {
        context.commit("SET_SEARCH_ITEMS", []);
        throw err;
      });
    // const response = await axios
    //   .get(
    //     `/api/item?${payload.query}${
    //       payload.location ? `,location:${payload.location}` : ""
    //     }${
    //       payload.price ? `,price:${payload.price[0]}-${payload.price[1]}` : ""
    //     }${payload.sort ? `&sort=${payload.sort}` : ""}`,
    //     {
    //       headers: {
    //         "accept-language-code": lang,
    //       },
    //     }
    //   )
    //   .catch((err) => {
    //     context.commit("SET_SEARCH_ITEMS", []);
    //     throw err;
    //   });
    console.log(response);
    context.commit("SET_SEARCH_ITEMS", response.data.items);
  },
  async searchItems(context, payload) {
    const lang = localStorage.getItem("lang") || "zh-HK";
    const response = await axios.get(
      `/api/item?${payload.search ? `search=${payload.search}&` : ""}${
        payload.bookingDate && payload.bookingTime
          ? `filter=bookingdate:${payload.bookingDate},bookingtime:${payload.bookingTime}`
          : payload.bookingDate
          ? `filter=bookingdate:${payload.bookingDate}`
          : payload.bookingTime
          ? `filter=bookingtime:${payload.bookingTime}`
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
  async getTheme(context, slug) {
    const lang = localStorage.getItem("lang") || "zh-HK";
    const response = await axios.get(`/api/item?filter=theme:${slug}`, {
      headers: {
        "accept-language-code": lang,
      },
    });
    console.log(response);
    context.commit("SET_SEARCH_ITEMS", response.data.items);
  },
  async getItemDetail(context, payload) {
    const lang = localStorage.getItem("lang") || "zh-HK";
    const response = await axios.get(
      `api/item/${payload.itemId}/${payload.bookingDate}/${payload.bookingTime}`,
      {
        headers: {
          "accept-language-code": lang,
          // authorization: localStorage.getItem("accessToken")
          //   ? localStorage.getItem("accessToken")
          //   : "",
        },
      }
    );
    console.log(response);
    context.commit("SET_SINGLE_ITEM_DETIAL", response.data.item);
  },
  async updatePrice(context, payload) {
    const response = await axios.get(
      `/api/item/enquire-stock/itemid/${payload.itemId}/quantity/${payload.quantity}`
    );
    console.log(response);
    context.commit("SET_UPDATED_PRICE", response.data.item.price);
  },
  async loadComments(context, payload) {
    const response = await axios.get(
      `/api/item/more-comments/itemid/${payload.itemId}/size/${payload.size}`
    );
    console.log(response);
    context.commit("GET_NEW_COMMENTS", response.data.items);
  },
  async getRecommendations() {
    const lang = localStorage.getItem("lang") || "zh-HK";
    const response = await axios.get(
      "/api/item/sort=recommendation&pagesize=4",
      {
        headers: {
          "accept-language-code": lang,
        },
      }
    );
    console.log(response);
  },
  async getDates(context, payload) {
    const response = await axios.get(
      `/api/item/enquire-by-month/${payload.itemId}/${payload.dateFrom}/${payload.dateTo}/${payload.quantity}`
    );
    console.log(response);
    context.commit("updateItemDetails", response.data.item);
  },
  async getSelectedDate(context, payload) {
    const response = await axios.get(
      `/api/item/enquire-by-date/${payload.itemId}/${payload.bookingDate}/${payload.quantity}`
    );
    console.log(response);
    context.commit("SET_UPDATED_ITEM_DATA", response.data.item);
  },
  async getTime(context, payload) {
    const response = await axios.get(
      `/api/item/select-timeslot/timeslotid/${payload.timeslotId}/quantity/${payload.quantity}`
    );
    console.log(response);
    context.commit("SET_UPDATE_PRICE", response.data.item);
  },
  // async updateIndividuals(_, payload) {
  //   const response = await axios.get(
  //     `/api/item/enquire-by-month/${payload.itemId}/${payload.dateFrom}/${payload.dateTo}/${payload.quantity}`
  //   );
  //   console.log(response);
  // },
};
