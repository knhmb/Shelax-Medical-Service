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
};
