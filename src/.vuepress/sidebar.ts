import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    "intro",
    {
      text: "法理学",
      icon: "gavel",
      prefix: "legal study/Jurisprudence/",
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
          prefix: "legal study/Civil Law/",
          collapsible: true,
          children: [
            "General Principles of Civil Law",  // 民法总论
            "Civil Law Discourse",             // 民法分论
          ]
        },
        {
          text: "商法",
          prefix: "legal study/Business Law/Company Law/",
          collapsible: true,
          children: [
            "Company Law"       // 公司法
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
