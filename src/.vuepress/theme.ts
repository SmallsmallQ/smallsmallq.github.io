import { hopeTheme } from "vuepress-theme-hope";
// import type { IconOptions } from "@vuepress/plugin-icon";
import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

export default hopeTheme({
  hostname: "https://smallsmallq.github.io",

  author: {
    name: "smallQ",
    url: "https://smallq.top",
  },

  logo: "https://i.postimg.cc/zvQ41bSP/logo.png",

  repo: "vuepress-theme-hope/vuepress-theme-hope",

  docsDir: "src",

  // 导航栏
  navbar,

  // 侧边栏
  sidebar,

  // 页脚
  footer: "西安交通大学的法学生",
  displayFooter: true,

  // 博客相关
  blog: {
    description: "一个非典型法学生",
    intro: "/intro.html",
    medias: {
      //Baidu: "https://example.com",
      //BiliBili: "https://space.bilibili.com/564524939",
      //Bitbucket: "https://example.com",
      //Dingding: "https://example.com",
      //Discord: "https://example.com",
      //Dribbble: "https://example.com",
      Email: "mailto:gongyunbo@stu.xjtu.edu.cn",
      //Evernote: "https://example.com",
      //Facebook: "https://example.com",
      //Flipboard: "https://example.com",
      //Gitee: "https://example.com",
      GitHub: "https://github.com/SmallsmallQ/",
      //Gitlab: "https://example.com",
      Gmail: "mailto:smallsmallqwq@gmail.com",
      //Instagram: "https://example.com",
      Lark: "https://example.com",
      //Lines: "https://example.com",
     // Linkedin: "https://example.com",
      //Pinterest: "https://example.com",
      //Pocket: "https://example.com",
      //QQ: "https://example.com",
      //Qzone: "https://example.com",
      //Reddit: "https://example.com",
      //Rss: "https://example.com",
      //Steam: "https://example.com",
      //Twitter: "https://example.com",
      //Wechat: "https://example.com",
     // Weibo: "https://example.com",
      //Whatsapp: "https://example.com",
      //Youtube: "https://example.com",
      //Zhihu: "https://example.com",
      //VuePressThemeHope: {
      //  icon: "https://theme-hope-assets.vuejs.press/logo.svg",
      //  link: "https://theme-hope.vuejs.press",
      //},
    },
  },

  // 加密配置


  // 多语言配置
  metaLocales: {
    editLink: "在 GitHub 上编辑此页",
  },

  // 如果想要实时查看任何改变，启用它。注: 这对更新性能有很大负面影响
  // hotReload: true,

  // 此处开启了很多功能用于演示，你应仅保留用到的功能。
  markdown: {
    align: true,
    attrs: true,
    codeTabs: true,
    component: true,
    demo: true,
    echarts: true,
    footnote: true,
    imgMark: true,
    imgLazyload: true,
    sub: true,
    sup: true,
    tabs: true,
    tasklist: true,
    vPre: true,
    chartjs: true,  // 将 chart 改为 chartjs
    
    // 启用 Mermaid
    mermaid: true,
    
    // 其他增强功能
    figure: true,
    imgSize: true,
    include: true,
    mark: true,
    // stylize: true
  },

  // 在这里配置主题提供的插件
  plugins: {
    blog: true,
    components: {
      components: ["Badge", "VPCard"],
    }
  },
});
