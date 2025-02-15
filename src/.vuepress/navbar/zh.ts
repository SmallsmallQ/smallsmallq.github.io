import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/zh/",
  {
    text: "法律学习",
    icon: "scale-balanced",
    prefix: "/zh/legal study/",
    children: [
      {
        text: "法理学",
        icon: "gavel",
        link: "Jurisprudence/",
      },
      {
        text: "民法",
        icon: "book-open",
        link: "Civil Law/",
      },
      {
        text: "商法",
        icon: "building-columns",
        children: [
          {
            text: "公司法",
            link: "Business Law/Company Law/",
          },
          {
            text: "合同法",
            link: "Business Law/Contract Law/",
          },
        ],
      },
    ],
  },
  {
    text: "社会实践",
    icon: "fa-users",
    children: [
      {
        text: "项目信息",
        link: "/zh/social practice/basic info.md",
      },
      {
        text: "项目报告",
        link: "/zh/social practice/writing.md",
      },
    ],
  },
  {
    text: "崇实学辅",
    icon: "person-chalkboard",
    link: "https://csxf.online/",
  },
  {
    text: "关于我",
    icon: "user",
    link: "/zh/intro.html",
  },
]);
