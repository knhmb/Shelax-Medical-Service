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
    const response = await axios.get("/api/shopping-cart", {
      headers: {
        authorization: userToken,
      },
    });
    console.log(response);
    context.commit("SET_SHOPPING_CART_ITEMS", response.data.item);
  },
};
