import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/zh/legal study/": [
    {
      text: "法理学",
      icon: "gavel",
      prefix: "Jurisprudence/",
      collapsible: true,
      children: [
        "Elementary Jurisprudence",
        "Elementary Jurisprudence from Northwest University of Political Science and Law"
      ]
    },
    {
      text: "民商法",
      icon: "book-open",
      collapsible: true,
      children: [
        {
          text: "民法",
          collapsible: true,
          children: [
            "Civil Law/General Principles of Civil Law",  // 民法总论文件
            "Civil Law/Civil Law Discourse",             // 民法分论文件
          ]
        },
        {
          text: "商法",
          collapsible: true,
          children: [
            "Business Law/Company Law/Company Law"       // 公司法文件
          ]
        }
      ]
    }
  ],
  "/zh/social practice/": [
    {
      text: "社会实践",
      icon: "users",
      children: [
        "basic info",
        "writing"
      ]
    }
  ],
  "/zh/": [
    "",
    "intro"
  ]
});
