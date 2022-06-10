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
};
