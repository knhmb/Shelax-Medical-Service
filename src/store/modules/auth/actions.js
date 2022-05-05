import axios from "axios";
// import i18n from "../../../i18n";

// const { t } = i18n.global;

export default {
  async receiveOtp(_, payload) {
    const response = await axios.post("/api/account/otp", { email: payload });
    console.log(response);
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  },
  async register(_, payload) {
    const response = await axios.post("/api/account", payload);
    console.log(response);
    // await axios
    //   .post("/api/account", payload)
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((err) => {
    //     console.log(err.response.data.message);
    //     // const error = new Error(t(err.response.data.message));
    //     // throw error;
    //   });
  },
};
