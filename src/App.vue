<template>
  <the-header></the-header>
  <el-config-provider :locale="locale">
    <router-view></router-view>
  </el-config-provider>
  <the-footer></the-footer>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
import TheFooter from "./components/TheFooter.vue";
import { ElConfigProvider } from "element-plus";
import zhCn from "element-plus/es/locale/lang/zh-cn";
import en from "element-plus/es/locale/lang/en";

export default {
  components: {
    TheHeader,
    TheFooter,
    ElConfigProvider,
  },
  data() {
    return {
      locale: "",
    };
  },
  watch: {
    language(newVal) {
      if (newVal === "en-US") {
        this.locale = en;
      } else {
        this.locale = zhCn;
      }
    },
  },
  computed: {
    language() {
      return this.$store.getters.lang;
    },
  },
  created() {
    if (this.language === "en-US") {
      this.locale = en;
    } else {
      this.locale = zhCn;
    }
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
