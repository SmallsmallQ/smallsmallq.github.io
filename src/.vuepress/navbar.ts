import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "法律学习",
    icon: "scale-balanced",
    prefix: "/zh/legal study/",
    children: [
      {
        text: "法理学",
        icon: "gavel",
        children: [
          { text: "基础法理学", link: "Jurisprudence/Elementary Jurisprudence" },
          { text: "西政法理学", link: "Jurisprudence/Elementary Jurisprudence from Northwest University of Political Science and Law" }
        ]
      },
      {
        text: "民商法",
        icon: "book-open",
        children: [
          { text: "民法总论", link: "Civil Law/General Principles of Civil Law" },
          { text: "民法分论", link: "Civil Law/Civil Law Discourse" },
          { text: "公司法", link: "Business Law/Company Law/Company Law" }
        ]
      }
    ]
  },
  {
    text: "社会实践",
    icon: "users",
    prefix: "/zh/social practice/",
    children: [
      { text: "项目信息", link: "basic info" },
      { text: "项目报告", link: "writing" }
    ]
  },
  {
    text: "崇实学辅",
    icon: "person-chalkboard",
    link: "https://csxf.online"
  },
  {
    text: "关于我",
    icon: "user",
    link: "/zh/intro"
  }
]);
