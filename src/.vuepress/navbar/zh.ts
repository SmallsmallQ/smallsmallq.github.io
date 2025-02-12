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
        icon: "book",
        link: "Jurisprudence/",
      },
      // 可以继续添加其他法律课程
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
