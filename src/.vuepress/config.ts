import { defineUserConfig } from "vuepress";
import { path } from '@vuepress/utils';
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "小Q的网站",
  description: "这里是小Q的个人网站,记录了小Q的学习笔记，生活随笔，以及一些个人的想法",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
  alias: {
    '@components': path.resolve(__dirname, './components'),
  },
});
