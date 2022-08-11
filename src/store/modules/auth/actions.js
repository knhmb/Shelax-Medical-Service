import axios from "axios";
import router from "../../../route";
// import i18n from "../../../i18n";

// const { t } = i18n.global;

export default {
  async receiveOtp(_, payload) {
    const response = await axios.post("/api/account/otp", { email: payload });
    console.log(response);
  },
  async register(_, payload) {
    const response = await axios.post("/api/account", payload);
    console.log(response);
  },
  async login(context, payload) {
    const response = await axios.post("/api/authenticate", payload);
    console.log(response);
    context.commit("LOGGEDIN", {
      accessToken: response.data.accessToken,
      refreshToken: response.data.refreshToken,
      currentUser: response.data.item.username,
    });
    context.commit("SET_LOGIN", {}, { root: true });
  },
  async googleLogin(context, payload) {
    const response = await axios.post(
      "/api/authenticate/oauth2/google",
      payload
    );
    console.log(response);

    context.commit("LOGGEDIN", {
      accessToken: response.data.accessToken,
      refreshToken: response.data.refreshToken,
      currentUser: response.data.item.username,
    });
    context.commit("SET_LOGIN", {}, { root: true });
  },
  async facebookLogin(context, payload) {
    const response = await axios.post(
      "/api/authenticate/oauth2/facebook",
      payload
    );
    console.log(response);
    if (response.data.statusCode === 200) {
      context.commit("LOGGEDIN", {
        accessToken: response.data.accessToken,
        refreshToken: response.data.refreshToken,
        currentUser: response.data.item.username,
      });
      context.commit("SET_LOGIN", {}, { root: true });
    }
    // context.commit("LOGGEDIN", {
    //   accessToken: response.data.accessToken,
    //   refreshToken: response.data.refreshToken,
    //   currentUser: response.data.item.username,
    // });
    // context.commit("SET_LOGIN", {}, { root: true });
  },
  async appleLogin(context, payload) {
    const response = await axios.post(
      "/api/authenticate/oauth2/apple",
      payload
    );
    console.log(response);
    if (response.status === 200) {
      context.commit("LOGGEDIN", {
        accessToken: response.data.accessToken,
        refreshToken: response.data.refreshToken,
        currentUser: response.data.item.username,
      });
      context.commit("SET_LOGIN", {}, { root: true });
    }
  },
  async logout(context) {
    const userToken = localStorage.getItem("accessToken");

    const response = await axios.delete("/api/authenticate", {
      headers: {
        authorization: userToken,
      },
    });
    console.log(response);
    context.commit("LOGOUT");
    context.commit("REMOVE_LOGIN", {}, { root: true });
    router.replace("/");
  },
  async checkAccessToken() {
    const userToken = localStorage.getItem("accessToken");

    const response = await axios.get("/api/authenticate", {
      headers: {
        authorization: userToken,
      },
    });
    console.log(response);
  },
  async checkRefreshToken(context) {
    const userToken = localStorage.getItem("refreshToken");

    const response = await axios.put(
      "/api/authenticate",
      {},
      {
        headers: {
          authorization: userToken,
        },
      }
    );
    console.log(response);
    context.commit("LOGGEDIN", {
      accessToken: response.data.accessToken,
      refreshToken: response.data.refreshToken,
      currentUser: response.data.item.username,
    });
  },
  async forgetPassword(_, payload) {
    // const lang = localStorage.getItem('lang') || 'zh-HK'
    const response = await axios.post("/api/account/forget-password", {
      username: payload,
    });
    console.log(response);
  },
  async resetPassword(_, payload) {
    const response = await axios.post("/api/account/reset-password", payload);
    console.log(response);
  },
  async vendorRegistration(_, payload) {
    const response = await axios.post(
      "/api/upload/vendor-registration",
      payload
    );
    console.log(response);
  },
};
