export default {
  LOGGEDIN(state, payload) {
    localStorage.setItem("accessToken", payload.accessToken);
    localStorage.setItem("refreshToken", payload.refreshToken);
  },
  LOGOUT() {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
  },
};
