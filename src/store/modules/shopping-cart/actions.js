import axios from "axios";

export default {
  async addToShoppingCart(_, payload) {
    const userToken = localStorage.getItem("accessToken");
    const response = await axios.post("/api/shopping-cart", payload, {
      headers: {
        authorization: userToken,
      },
    });
    console.log(response);
  },
  async getShoppingCartItems(context) {
    const userToken = localStorage.getItem("accessToken");
    const lang = localStorage.getItem("lang") || "zh-HK";
    const response = await axios.get("/api/shopping-cart", {
      headers: {
        authorization: userToken,
        "accept-language-code": lang,
      },
    });
    console.log(response);
    context.commit("SET_SHOPPING_CART_ITEMS", response.data.item);
  },
  async updateCart(context, payload) {
    const userToken = localStorage.getItem("accessToken");
    const response = await axios.put("/api/shopping-cart", payload, {
      headers: {
        authorization: userToken,
      },
    });
    console.log(response);
    context.commit("SET_SHOPPING_CART_ITEMS", response.data.item);
  },
  async deleteCartItem(_, payload) {
    const userToken = localStorage.getItem("accessToken");
    const response = await axios.delete("/api/shopping-cart", {
      headers: {
        authorization: userToken,
      },
      data: payload,
    });
    console.log(response);
  },
};
