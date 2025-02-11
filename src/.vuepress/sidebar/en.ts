import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/": [
    "",
    {
      text: "Demo",
      icon: "laptop-code",
      prefix: "demo/",
      link: "demo/",
      children: "structure",
    },
    {
      text: "Articles",
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
      text: "Learning Guide",
      icon: "person-chalkboard",
      link: "https://csxf.online",
    },
  ],
});
