import { defineClientConfig } from "@vuepress/client";

export default defineClientConfig({
  enhance({ app, router, siteData }) {},
  setup() {
    // 当在浏览器环境中运行时，初始化 Clarity
    if (typeof window !== "undefined") {
      window.onload = function() {
        const script = document.createElement("script");
        script.type = "text/javascript";
        script.async = true;
        script.src = "https://www.clarity.ms/tag/pdxiqtgnxl";
        (document.getElementsByTagName("head")[0] || document.getElementsByTagName("body")[0]).appendChild(script);
      };
    }
  },
  rootComponents: [],
});