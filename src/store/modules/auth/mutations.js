export default {
  LOGGEDIN(state, payload) {
    localStorage.setItem("accessToken", payload.accessToken);
    localStorage.setItem("refreshToken", payload.refreshToken);
    state.currentUser = payload.currentUser;
  },
  LOGOUT(state) {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    state.currentUser = null;
  },
};
