import axios from "axios";

export default {
  async getAccount(context) {
    const userToken = localStorage.getItem("accessToken");
    const response = await axios.get("/api/account", {
      headers: {
        authorization: userToken,
      },
    });
    console.log(response);
    context.commit("SET_ACCOUNT", response.data.item);
  },
  async getCountryCode(context) {
    const lang = localStorage.getItem("lang") || "zh-HK";

    const response = await axios.get("/api/country-code", {
      headers: {
        "accept-language-code": lang,
      },
    });
    console.log(response);
    context.commit("SET_COUNTRY_CODE", response.data.items);
  },
  async updateAccount(_, payload) {
    const userToken = localStorage.getItem("accessToken");

    const response = await axios.put("/api/account", payload, {
      headers: {
        authorization: userToken,
      },
    });
    console.log(response);
  },
  async profileChangePassword(_, payload) {
    const userToken = localStorage.getItem("accessToken");

    const response = await axios.post("/api/account/change-password", payload, {
      headers: {
        authorization: userToken,
      },
    });
    console.log(response);
  },
  async getServiceUsers(context) {
    const userToken = localStorage.getItem("accessToken");
    const response = await axios.get("/api/service-users ", {
      headers: {
        authorization: userToken,
      },
    });
    console.log(response);
    context.commit("SET_SERVICE_USERS", response.data.items);
  },
  async addServiceMember(_, payload) {
    const userToken = localStorage.getItem("accessToken");
    const response = await axios.post("/api/service-users", payload, {
      headers: {
        authorization: userToken,
      },
    });
    console.log(response);
  },
  async editServiceUser(_, payload) {
    const userToken = localStorage.getItem("accessToken");
    const response = await axios.put("/api/service-users", payload, {
      headers: {
        authorization: userToken,
      },
    });
    console.log(response);
  },
  async deleteServiceUser(_, payload) {
    const userToken = localStorage.getItem("accessToken");
    const response = await axios.delete("/api/service-users", {
      data: {
        id: payload,
      },
      headers: {
        authorization: userToken,
      },
    });
    console.log(response);
  },
  async getWishlist(context) {
    const userToken = localStorage.getItem("accessToken");
    const lang = localStorage.getItem("lang") || "zh-HK";

    const response = await axios.get("/api/wishlist", {
      headers: {
        authorization: userToken,
        "accept-language-code": lang,
      },
    });
    console.log(response);
    context.commit("SET_WISHLISTS", response.data.items);
  },
  async addWishlist(context, payload) {
    const userToken = localStorage.getItem("accessToken");

    const response = await axios.post("/api/wishlist", payload, {
      headers: {
        authorization: userToken,
      },
    });
    console.log(response);
    context.commit("UPDATE_BOOKMARK", true);
  },
  async removeWishlist(context, payload) {
    const userToken = localStorage.getItem("accessToken");

    const response = await axios.delete("/api/wishlist", {
      data: payload,
      headers: {
        authorization: userToken,
      },
    });
    console.log(response);
    context.commit("UPDATE_BOOKMARK", false);
  },
  async getOrderHistory(context) {
    const userToken = localStorage.getItem("accessToken");
    const lang = localStorage.getItem("lang") || "zh-HK";

    const response = await axios.get("/api/order", {
      headers: {
        authorization: userToken,
        "accept-langauge-code": lang,
      },
    });
    console.log(response);
    context.commit("SET_ORDER_HISTORY", response.data.items);
  },
  async getMemberPoints(context) {
    const userToken = localStorage.getItem("accessToken");

    const response = await axios.get("/api/member-points", {
      headers: {
        authorization: userToken,
      },
    });
    console.log(response);
    context.commit("SET_MEMBER_POINTS", response.data.item);
  },
  async getMemberPointsHistory(context) {
    const userToken = localStorage.getItem("accessToken");

    const response = await axios.get("/api/member-points/history", {
      headers: {
        authorization: userToken,
      },
    });
    console.log(response);
    context.commit("SET_MEMBER_POINTS_HISTORY", response.data.items);
  },
};
