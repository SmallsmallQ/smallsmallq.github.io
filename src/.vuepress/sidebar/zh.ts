import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/zh/": [
    "",
    {
      text: "如何使用",
      icon: "laptop-code",
      prefix: "demo/",
      link: "demo/",
      children: "structure",
    },
    {
      text: "文章",
      icon: "book",
      prefix: "posts/",
      children: "structure",
    },
    {
      text: "法律学习",
      icon: "scale-balanced",
      prefix: "legal study/",
      link: "legal study/",
      children: [
        {
          text: "法理学",  // 显示中文名称
          prefix: "Jurisprudence/", // 保持英文目录名
          link: "Jurisprudence/",
          collapsible: true,
          children: "structure",
        },
      ],
    },
    "intro",
    {
      text: "崇实学辅",
      icon: "person-chalkboard",
      link: "https://csxf.online",
    },
  ],
});
