import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "小Q的个人网站",
  description: "欢迎大家来访",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
