---
permalink: /zh/markdown/
title: "Markdown 使用指南"
lang: zh
author_profile: true
redirect_from:
  - /zh/md/
  - /zh/markdown.html
---

{% include toc %}

## 关键文件/目录位置

* 基本配置选项: _config.yml
* 顶部导航栏配置: _data/navigation.yml
* 单个页面: _pages/
* 页面集合是 .md 或 .html 文件，位于:
  * _publications/
  * _portfolio/
  * _posts/
  * _teaching/
  * _talks/
* 页脚: _includes/footer.html
* 静态文件（如 PDF）: /files/
* 个人头像（可在 _config.yml 中设置）: images/profile.png

## 提示和技巧

* 将文件命名为".md"以使用 markdown 渲染，命名为".html"以使用 HTML 渲染。
* 访问[提交列表](https://github.com/academicpages/academicpages.github.io/commits/master)（在您的仓库上）查找 GitHub 使用 Jekyll 构建的最后一个版本。
  * 绿色勾号: 构建成功
  * 橙色圆圈: 正在构建
  * 红色 X: 错误
  * 无图标: 未构建

* Academic Pages 使用 [Jekyll Kramdown](https://jekyllrb.com/docs/configuration/markdown/)、GitHub 风格的 Markdown (GFM) 解析器，它与 GitHub 上使用的 Markdown 版本类似，但可能有一些细微差别。
  * 通过 [Jemoji](https://github.com/jekyll/jemoji) 插件支持一些 GitHub 上支持的表情符号 :computer:。
  * 支持的表情符号的最佳列表可以在 [Emojis for Jekyll via Jemoji](https://www.fabriziomusacchio.com/blog/2021-08-16-emojis_for_Jekyll/#computer) 博客文章中找到。

* 虽然 GitHub Pages 阻止服务器端代码运行，但支持客户端脚本。
  * 这意味着支持 Google Analytics，[wiki](https://github.com/academicpages/academicpages.github.io/wiki/Adding-Google-Analytics) 应包含有关如何使其工作的最新信息。

* 您的简历可以使用 Markdown 编写（[预览](https://academicpages.github.io/cv/)）或通过 JSON 生成（[预览](https://academicpages.github.io/cv-json/)），布局略有不同。您可以在 `_data/navigation.yml` 中更新正在使用的路径，默认情况下隐藏 JSON 格式的简历。

* [Liquid 语法指南](https://shopify.github.io/liquid/tags/control-flow/)对于那些想要向模板添加功能或成为 [GitHub 模板](https://github.com/academicpages/academicpages.github.io)贡献者的人来说是一个有用的指南。

## MathJax

模板中包含对 MathJax 的支持（通过 [jsDelivr](https://www.jsdelivr.com/) 的版本 3.*，[文档](https://docs.mathjax.org/en/latest/)）。

更多内容请参考英文版本或官方文档。
