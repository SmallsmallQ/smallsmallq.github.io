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
      text: "Legal Study",
      icon: "book",
      prefix: "legal/",
      children: "structure",
    },
    "intro",
    {
      text: "崇实学辅",
      icon: "person-chalkboard",
      link: "https://csxf.online",
    },
  ],
});
