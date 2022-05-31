import en from "./locale/en.json";
import zhCn from "./locale/zhCn.json";
import zhCht from "./locale/zhCht.json";
import { createI18n } from "vue-i18n";

const vueI18n = createI18n({
  // locale: localStorage.getItem("lang") || "zh-HK",
  locale: "zh-HK",
  fallbackLocale: "zh-HK",
  messages: {
    "en-US": en,
    "zh-CN": zhCn,
    "zh-HK": zhCht,
  },
});

export default vueI18n;
