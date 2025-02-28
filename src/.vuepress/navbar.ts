import { navbar } from "vuepress-theme-hope";

export default navbar([
  {
    text: "主页",
    icon: "house",
    link: "/",
  },
  {
    text: "个人介绍",
    icon: "circle-info",
    link: "/about",
  },
  {
    text: "法律笔记",
    icon: "scale-balanced",
    prefix: "/legal-study/",
    children: [
      {
        text: "民法",
        icon: "book",
        children: [
          { text: "民法总论", link: "civil-law/General Principles of Civil Law" },
          { text: "民法分论", link: "civil-law/Civil Law Discourse" }
        ],
      },
      {
        text: "法理学",
        icon: "gavel",
        children: [
          { text: "初级法理学", link: "jurisprudence/Elementary Jurisprudence" },
          { text: "西政法理学", link: "jurisprudence/Elementary Jurisprudence from Northwest University of Political Science and Law" }
        ],
      }
    ],
  },
  {
    text: "生活分享",
    icon: "mug-hot",
    prefix: "/life-sharing/",
    children: [
      { text: "去旅行", icon: "plane", link: "go-on-journey" }
    ],
  },
    {
    text: "项目展示",
    icon: "fa6-brands fa-vuejs",
    prefix: "/project-demo/",
    children: [
      {
        text: "能源",
        icon: "fa6-solid fa-bolt",
        children: [
          {
            text: "社会实践",
            link: "energy/social-practice",
          },
          {
            text: "腾飞杯",
            link: "energy/submit",
          },
        ],
      },
    ],
  },
  {
    text: "友链",
    icon: "link",
    link: "/friend",
  },
]);
