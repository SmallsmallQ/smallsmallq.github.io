import { defineUserConfig } from "vuepress";
import { mdEnhancePlugin } from "vuepress-plugin-md-enhance"; // 使用插件
import theme from "./theme.js";
import ab_mdit from "any-block-converter-markdown-it"
import jsdom from "jsdom"
const { JSDOM } = jsdom
const dom = new JSDOM(`<!DOCTYPE html><html><body></body></html>`, {
  url: 'http://localhost/', // @warn 若缺少该行，则在mdit+build环境下，编译报错
});
// @ts-ignore 不能将类型“DOMWindow”分配给类型“Window & typeof globalThis”
global.window = dom.window
global.history = dom.window.history // @warn 若缺少该行，则在mdit+build环境下，编译报错：ReferenceError: history is not defined
global.document = dom.window.document
global.NodeList = dom.window.NodeList
global.HTMLElement = dom.window.HTMLElement
global.HTMLDivElement = dom.window.HTMLDivElement
global.HTMLPreElement = dom.window.HTMLPreElement
global.HTMLQuoteElement = dom.window.HTMLQuoteElement
global.HTMLTableElement = dom.window.HTMLTableElement
global.HTMLUListElement = dom.window.HTMLUListElement
global.HTMLScriptElement = dom.window.HTMLScriptElement
dom.window.scrollTo = ()=>{} // @warn 若缺少该行，编译警告：Error: Not implemented: window.scrollTo*/

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "小Q的网站",
  description: "这里是小Q的个人网站，记录了小Q的学习笔记，生活随笔，以及一些个人的想法",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,

  // VuePress 2.x 的 Markdown 配置方式
  extendsMarkdown: (md) => {
    md.use(ab_mdit);
  }
});
