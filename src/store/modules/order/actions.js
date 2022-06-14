import axios from "axios";

export default {
  async createOrder(context, payload) {
    const userToken = localStorage.getItem("accessToken");
    const response = await axios.post("/api/order/create-order", payload, {
      headers: {
        authorization: userToken,
      },
    });
    console.log(response);
    context.commit("SET_ORDER_ITEM", response.data.item);
  },
  async getSpecifiedDistrict(context, payload) {
    const lang = localStorage.getItem("lang") || "zh-HK";
    const response = await axios.get(
      `/api/codex?filter=codexTypeCode:DISTRICT,parentCodexSlug:${payload}`,
      {
        headers: {
          "accept-language-code": lang,
        },
      }
    );
    console.log(response);
    context.commit("SET_SPECIFIED_DISTRICTS", response.data.items);
  },
  async applyCoupon(context, payload) {
    const userToken = localStorage.getItem("accessToken");
    const response = await axios.post("/api/coupon/apply-coupon", payload, {
      headers: {
        authorization: userToken,
      },
    });
    console.log(response);
    context.commit("SET_NEW_COUPON", response.data.item);
  },
};
