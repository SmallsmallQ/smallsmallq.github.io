import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "个人介绍",
    icon: "user",
    link: "/intro"
  },
  {
    text: "法律学习",
    icon: "book",
    prefix: "/legal study/",
    children: [
      {
        text: "法理学",
        icon: "gavel",
        prefix: "Jurisprudence/",
        children: [
          "Elementary Jurisprudence",
          "Elementary Jurisprudence from Northwest University of Political Science and Law"
        ]
      },
      {
        text: "民商法",
        icon: "book-open",
        children: [
          {
            text: "民法",
            prefix: "Civil Law/",
            children: [
              "General Principles of Civil Law",
              "Civil Law Discourse"
            ]
          },
          {
            text: "商法",
            prefix: "Business Law/Company Law/",
            children: [
              "Company Law"
            ]
          }
        ]
      }
    ]
  },
  {
    text: "社会实践",
    icon: "users",
    prefix: "/social practice/",
    children: [
      "basic info",
      "writing"
    ]
  }
]);
