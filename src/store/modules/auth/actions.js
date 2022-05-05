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
    });
    context.commit("SET_LOGIN", {}, { root: true });
  },
  logout(context) {
    context.commit("LOGOUT");
    context.commit("REMOVE_LOGIN", {}, { root: true });
    router.replace("/");
  },
};
