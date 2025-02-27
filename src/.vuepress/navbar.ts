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
    text: "友链",
    icon: "link",
    link: "/friend",
  },
]);
