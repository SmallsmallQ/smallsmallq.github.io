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
              prefix: "Civil Law/General Principles of Civil Law/",
              link: "Civil Law/General Principles of Civil Law/",
              collapsible: true,
              children: "structure",
            },
            {
              text: "民法分论",
              prefix: "Civil Law/Civil Law Discourse/",
              link: "Civil Law/Civil Law Discourse/",
              collapsible: true,
              children: "structure",
            },
          ],
        },
        {
          text: "商法",
          icon: "building-columns",
          prefix: "Business Law/",
          link: "Business Law/",
          collapsible: true,
          children: [
            {
              text: "公司法",
              prefix: "Business Law/Company Law/",
              link: "Business Law/Company Law/",
              collapsible: true,
              children: "structure",
            },
            {
              text: "合同法",
              prefix: "Business Law/Contract Law/",
              link: "Business Law/Contract Law/",
              collapsible: true,
              children: "structure",
            },
          ],
        },
      ],
    },
    {
      text: "社会实践",
      icon: "fa-users", // 使用 Font Awesome 图标
      prefix: "social practice/",
      link: "social practice/basic info", // 指向 basic info.md
      collapsible: true,
      children: [
        {
          text: "项目信息",
          link: "social practice/basic info.md",
        },
        {
          text: "项目报告",
          link: "social practice/writing.md",
        },
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
