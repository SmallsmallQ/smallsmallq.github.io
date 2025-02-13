import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/zh/": [
    "",
    {
      text: "法律学习",
      icon: "scale-balanced",
      prefix: "legal study/",
      link: "legal study/",
      children: [
        {
          text: "法理学",
          icon: "gavel",
          prefix: "Jurisprudence/",
          link: "Jurisprudence/",
          collapsible: true,
          children: "structure",
        },
        {
          text: "民法",
          icon: "book-open",
          prefix: "Civil Law/",
          link: "Civil Law/",
          collapsible: true,
          children: [
            {
              text: "民法总论",
              prefix: "General Principles of Civil Law/",
              link: "General Principles of Civil Law/",
              collapsible: true,
              children: "structure",
            },
            {
              text: "民法分论",
              prefix: "Civil Law Discourse/",
              link: "Civil Law Discourse/",
              collapsible: true,
              children: "structure",
            }
          ],
        },
        {
          text: "商法",
          icon: "building-columns",
          prefix: "commercial-law/",
          link: "commercial-law/",
          collapsible: true,
          children: "structure",
        }
      ],
    },
    {
      text: "崇实学辅",
      icon: "person-chalkboard",
      link: "https://csxf.online",
    },
    {
      text: "关于我",
      icon: "user",
      link: "/zh/intro.html",
    },
  ],
});
