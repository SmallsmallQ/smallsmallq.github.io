import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/": [
    "",
    {
      text: "Legal Study",
      icon: "scale-balanced",
      prefix: "legal study/",
      link: "legal study/",
      children: [
        {
          text: "Jurisprudence",
          icon: "gavel",
          prefix: "Jurisprudence/",
          link: "Jurisprudence/",
          collapsible: true,
          children: "structure",
        },
        {
          text: "Civil Law",
          icon: "book-open",
          prefix: "Civil Law/",
          link: "Civil Law/",
          collapsible: true,
          children: [
            {
              text: "General Principles",
              prefix: "General Principles of Civil Law/",
              link: "General Principles of Civil Law/",
              collapsible: true,
              children: "structure",
            },
            {
              text: "Specific Provisions",
              prefix: "Civil Law Discourse/",
              link: "Civil Law Discourse/",
              collapsible: true,
              children: "structure",
            }
          ],
        },
        {
          text: "Commercial Law",
          icon: "building-columns",
          prefix: "commercial-law/",
          link: "commercial-law/",
          collapsible: true,
          children: "structure",
        }
      ],
    },
    {
      text: "Learning Guide",
      icon: "person-chalkboard",
      link: "https://csxf.online",
    },
    {
      text: "About",
      icon: "user",
      link: "/intro.html",
    },
  ],
});
