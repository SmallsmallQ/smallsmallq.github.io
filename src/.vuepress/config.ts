import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "zh-CN",
      title: "小Q的个人网站",
      description: "欢迎大家来访！",
    },
    "/zh/": {
      lang: "en-US",
      title: "smallQ's Personal Website",
      description: "Welcome to visit!",
    },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
