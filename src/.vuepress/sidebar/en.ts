import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/": [
    "",
    {
      text: "Guide",
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
      icon: "scale-balanced",
      prefix: "legal study/",
      link: "legal study/",
      children: [
        {
          text: "Jurisprudence",  // English display name
          prefix: "Jurisprudence/", // Keep the same folder name
          link: "Jurisprudence/",
          collapsible: true,
          children: "structure",
        },
      ],
    },
    "intro",
    {
      text: "Learning Guide",
      icon: "person-chalkboard",
      link: "https://csxf.online",
    },
  ],
});
