export default {
  SET_SHOPPING_CART_ITEMS(state, payload) {
    state.shoppingCartItems = payload;
  },
  TOGGLE_CHECKBOX(state, payload) {
    if (payload.type === "service") {
      state.shoppingCartItems.validServiceItems.filter((item) => {
        item.selected = payload.value;
      });
    } else if (payload.type === "product") {
      state.shoppingCartItems.validProductItems.filter((item) => {
        item.selected = payload.value;
      });
    }
  },
};
