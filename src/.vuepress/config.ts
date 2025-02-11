import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "en-US",
      title: "SmallQ's Personal Website",
      description: "Welcome to my website!",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "小Q的个人网站",
      description: "欢迎大家来访！",
    },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
