export default {
  async initApple() {
    window.fbAsyncInit = function () {
      window.AppleID.auth.init({
        clientId: "com.marvelconnect.oauth2",
        scope: "openid name email",
        redirectURI: `${window.location.protocol}//${window.location.hostname}/api/authenticate/oauth2/apple`,
        state: `${new Date().getTime()}`,
        nonce: "[NONCE]",
        usePopup: true,
      });
    };
  },
  async loadAppleSDK(d, s, id) {
    var js,
      fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {
      return;
    }
    js = d.createElement(s);
    js.id = id;
    js.src =
      "https://appleid.cdn-apple.com/appleauth/static/jsapi/appleid/1/en_US/appleid.auth.js";
    fjs.parentNode.insertBefore(js, fjs);
  },
};
