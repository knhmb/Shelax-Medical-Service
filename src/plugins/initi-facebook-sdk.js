import store from "../store/store";

export default {
  async logInWithFacebook() {
    // await this.loadFacebookSDK(document, "script", "facebook-jssdk");
    // await this.initFacebook();
    window.FB.login(function (response) {
      if (response.authResponse) {
        // alert("You are logged in &amp; cookie set!");
        // console.log(response);
        store.dispatch("auth/facebookLogin", {
          access_token: response.authResponse.accessToken,
        });
        // Now you can redirect the user or do an AJAX request to
        // a PHP script that grabs the signed request from the cookie.
      } else {
        alert("User cancelled login or did not fully authorize.");
        // console.log(response);
      }
    });
    return false;
  },
  async initFacebook() {
    window.fbAsyncInit = function () {
      window.FB.init({
        appId: "3312594352352328", //You will need to change this
        cookie: true, // This is important, it's not enabled by default
        xfbml: true,
        version: "v8.0",
      });
    };
  },
  async loadFacebookSDK(d, s, id) {
    var js,
      fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {
      return;
    }
    js = d.createElement(s);
    js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
  },
};
// export function initFacebookSdk() {
//   return new Promise((resolve) => {
//     // wait for facebook sdk to initialize before starting the vue app
//     window.fbAsyncInit = function () {
//       window.FB.init({
//         appId: "3312594352352328",
//         cookie: true,
//         xfbml: true,
//         version: "v8.0",
//       });

//       window.FB.login(function (response) {
//         console.log(response);

//         if (response.authResponse) {
//           alert("You are logged in &amp; cookie set!");
//           console.log(response);
//           store.dispatch("auth/facebookLogin", {
//             access_token: response.authResponse.accessToken,
//           });
//           // Now you can redirect the user or do an AJAX request to
//           // a PHP script that grabs the signed request from the cookie.
//         } else {
//           alert("User cancelled login or did not fully authorize.");
//           resolve();
//         }
//       });
//       return false;

//       //   // auto authenticate with the api if already logged in with facebook
//       //   window.FB.getLoginStatus(({ authResponse }) => {
//       //     console.log(authResponse);
//       //     if (authResponse) {
//       //       // accountService.apiAuthenticate(authResponse.accessToken).then(resolve);
//       //       console.log(authResponse);
//       //     } else {
//       //       console.log(authResponse);
//       //       resolve();
//       //     }
//       //   });
//     };

//     // load facebook sdk script
//     (function (d, s, id) {
//       var js,
//         fjs = d.getElementsByTagName(s)[0];
//       if (d.getElementById(id)) {
//         return;
//       }
//       js = d.createElement(s);
//       js.id = id;
//       js.src = "https://connect.facebook.net/en_US/sdk.js";
//       fjs.parentNode.insertBefore(js, fjs);
//     })(document, "script", "facebook-jssdk");
//   });
// }
