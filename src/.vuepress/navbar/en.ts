import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  "/",
  {
    text: "Legal Study",
    icon: "scale-balanced",
    prefix: "/legal study/",
    children: [
      {
        text: "Jurisprudence",
        icon: "book",
        link: "Jurisprudence/",
      },
      // You can add more legal courses here
    ],
  },
  {
    text: "Chongshi Academic Support",
    icon: "person-chalkboard",
    link: "https://csxf.online/",
  },
  {
    text: "About",
    icon: "user",
    link: "/intro.html",
  },
]);
