import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/legal-study/": [
    {
      text: "民法学",
      icon: "book",
      prefix: "civil-law/",
      collapsible: true,
      children: [
        {
          text: "民法总论",
          icon: "book",
          link: "General Principles of Civil Law",
        },
        {
          text: "民法分论",
          icon: "book",
          link: "Civil Law Discourse",
        }
      ],
    },
    {
      text: "法理学",
      icon: "gavel",
      prefix: "jurisprudence/",
      collapsible: true,
      children: [
        {
          text: "初级法理学",
          icon: "book",
          link: "Elementary Jurisprudence",
        },
        {
          text: "西政法理学",
          icon: "book",
          link: "Elementary Jurisprudence from Northwest University of Political Science and Law",
        }
      ],
    }
  ],
  "/life-sharing/": [
    {
      text: "生活分享",
      icon: "mug-hot",
      children: ["go-on-journey"],
    },
    {
      text: "友链",
      icon: "link",
      link: "friend",
    },
  ],
});
