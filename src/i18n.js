import en from "./locale/en.json";
import zhCn from "./locale/zhCn.json";
import zhCht from "./locale/zhCht.json";
import { createI18n } from "vue-i18n";

const vueI18n = createI18n({
  locale: localStorage.getItem("lang") || "zh-cn",
  messages: {
    en: en,
    "zh-cn": zhCn,
    "zh-cht": zhCht,
  },
});

export default vueI18n;
