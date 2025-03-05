import { sidebar } from "vuepress-theme-hope";

export default sidebar([
  {
    text: "法律笔记",
    icon: "scale-balanced",
    prefix: "/legal-study/",
    collapsible: true,
    children: [
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
          },
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
          },
        ],
      },
    ],
  },
  {
    text: "生活分享",
    icon: "mug-hot",
    prefix: "/life-sharing/",
    collapsible: true,
    children: [
      {
        text: "去旅行",
        icon: "plane",
        link: "go-on-journey",
      },
    ],
  },
  {
    text: "项目展示",
    icon: "fa6-brands fa-vuejs",
    prefix: "project-demo/",
    collapsible: true, // 添加 collapsible 属性
    children: [
      {
        text: "能源",
        prefix: "energy/",
        icon: "fa6-solid fa-bolt",
        collapsible: true, // 添加 collapsible 属性
        children: [
          {
            text: "社会实践",
            link: "social-practice", // 添加 link 属性
          },
          {
            text: "腾飞杯",
            link: "submit", // 添加 link 属性
          },
        ],
      },
    ],
  },
  {
    text: "友链",
    icon: "link",
    link: "/friend",
  },
]);
