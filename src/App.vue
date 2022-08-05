<template>
  <the-header></the-header>
  <!-- <el-config-provider :locale="locale"> -->
  <router-view></router-view>
  <!-- </el-config-provider> -->
  <the-footer></the-footer>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
import TheFooter from "./components/TheFooter.vue";
// import { ElConfigProvider } from "element-plus";
// import zhCn from "element-plus/es/locale/lang/zh-cn";
// import en from "element-plus/es/locale/lang/en";
import initiFacebookSdk from "./plugins/initi-facebook-sdk";
import initAppleSdk from "./plugins/init-apple-sdk";

export default {
  components: {
    TheHeader,
    TheFooter,
    // ElConfigProvider,
  },
  data() {
    return {
      locale: "",
    };
  },
  watch: {
    // language() {
    //   if (this.language === "en-US") {
    //     // this.locale = en;
    //     this.$i18n.locale = en;
    //   } else {
    //     // this.locale = zhTw;
    //     this.$i18n.locale = zhCn;
    //   }
    // },
  },
  computed: {
    language() {
      return this.$store.getters.lang;
    },
  },
  beforeCreate() {
    localStorage.setItem("lang", "zh-HK");
  },
  async created() {
    this.$store.commit("GET_LANGUAGE");
    if (this.language === "en-US") {
      // this.locale = en;
      this.$i18n.locale = "en-US";
    } else {
      // this.locale = zhTw;
      this.$i18n.locale = "zh-HK";
    }
    // console.log(initiFacebookSdk);
    await initiFacebookSdk.loadFacebookSDK(
      document,
      "script",
      "facebook-jssdk"
    );
    await initiFacebookSdk.initFacebook();
    await initAppleSdk.loadAppleSDK(document, "script", "apple-jssdk");
    await initAppleSdk.initApple();
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: "Noto Sans HK", sans-serif;
  position: absolute;
  overflow-x: hidden;
  width: 100%;
  /* background-color: #f5f7fa; */
}
</style>
