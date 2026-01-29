---
permalink: /
title: "龚云博 / 学术主页"
lang: zh
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

这是一个由 [Academic Pages 模板](https://github.com/academicpages/academicpages.github.io)驱动并托管在 GitHub Pages 上的学术个人网站。[GitHub Pages](https://pages.github.com) 是一项免费服务，可以从 GitHub 仓库中的代码和数据构建和托管网站，当对仓库进行新的提交时会自动更新。该模板从 Michael Rose 创建的 [Minimal Mistakes Jekyll 主题](https://mmistakes.github.io/minimal-mistakes/)派生而来，然后扩展以支持学者所需的各种内容：论文发表、学术报告、教学经历、作品集、博客文章和动态生成的简历。顺便说一句，这些相同的功能也使它成为任何需要展示专业形象的人的绝佳模板！

您可以立即 [fork 这个模板](https://github.com/academicpages/academicpages.github.io)，修改配置和 Markdown 文件，添加您自己的 PDF 和其他内容，免费拥有自己的网站，无广告！

数据驱动的个人网站
======
与许多其他基于 Jekyll 的 GitHub Pages 模板一样，Academic Pages 让您将网站的内容与其形式分离。您的网站内容和元数据位于结构化的 Markdown 文件中，而各种其他文件构成主题，指定如何将内容和元数据转换为 HTML 页面。您将这些各种 Markdown (.md)、YAML (.yml)、HTML 和 CSS 文件保存在公共 GitHub 仓库中。每次您提交并推送更新到仓库时，[GitHub Pages](https://pages.github.com/) 服务都会基于这些文件创建静态 HTML 页面，这些页面免费托管在 GitHub 的服务器上。

动态内容管理系统（如 Wordpress）的许多功能都可以通过这种方式实现，使用的计算资源只是其中的一小部分，并且更不容易受到黑客攻击和 DDoS 的影响。您还可以随心所欲地修改主题，而无需触及网站的内容。如果您在 Jekyll/HTML/CSS 中破坏了无法修复的内容，您的描述演讲、出版物等的 Markdown 文件是安全的。您可以回滚更改，甚至删除仓库并重新开始 - 只需确保保存 Markdown 文件！您还可以编写脚本来处理网站上的结构化数据，例如[这个脚本](https://github.com/academicpages/academicpages.github.io/blob/master/talkmap.ipynb)分析有关演讲的页面中的元数据以显示[您进行过演讲的每个地点的地图](https://academicpages.github.io/talkmap.html)。

对于需要更高级功能的用户，该模板还支持以下流行工具：
- [MathJax](https://www.mathjax.org/) 用于数学公式
- [Mermaid](https://mermaid.js.org/) 用于图表绘制
- [Plotly](https://plotly.com/javascript/) 用于数据可视化

入门指南
======
1. 如果您还没有 GitHub 账户，请注册一个并确认您的电子邮件（必需！）
2. 通过点击右上角的"Use this template"按钮来 [fork 此模板](https://github.com/academicpages/academicpages.github.io)
3. 进入仓库的设置（从"Code"开始的选项卡中最右边的项目，应该在"Unwatch"下方）。将仓库重命名为"[您的 GitHub 用户名].github.io"，这也将是您网站的 URL
4. 设置网站范围的配置并创建内容和元数据（请参见下文 - 另请参阅[此差异集](https://archive.is/3TPas)，显示为用户名为"getorg-testacct"的用户设置[示例网站](https://getorg-testacct.github.io)时更改了哪些文件）
5. 将任何文件（如 PDF、.zip 文件等）上传到 files/ 目录。它们将显示在 https://[您的 GitHub 用户名].github.io/files/example.pdf
6. 转到仓库设置中的"GitHub pages"部分查看状态

网站范围的配置
------
网站的主要配置文件位于基本目录中的 [_config.yml](https://github.com/academicpages/academicpages.github.io/blob/master/_config.yml)，它定义了侧边栏和其他网站范围功能的内容。您需要用关于您自己和您网站的 GitHub 仓库的信息替换默认变量。顶部菜单的配置文件在 [_data/navigation.yml](https://github.com/academicpages/academicpages.github.io/blob/master/_data/navigation.yml) 中。例如，如果您没有作品集或博客文章，您可以从该 navigation.yml 文件中删除这些项目，以将它们从标题中删除。

创建内容和元数据
------
对于网站内容，每种类型的内容都有一个 Markdown 文件，存储在 _publications、_talks、_posts、_teaching 或 _pages 等目录中。例如，每个演讲都是 [_talks 目录](https://github.com/academicpages/academicpages.github.io/tree/master/_talks)中的一个 Markdown 文件。每个 Markdown 文件的顶部都是关于演讲的 YAML 结构化数据，主题将解析这些数据以完成许多很酷的事情。关于演讲的相同结构化数据用于生成[演讲页面](https://academicpages.github.io/talks)上的演讲列表、特定演讲的每个[单独页面](https://academicpages.github.io/talks/2012-03-01-talk-1)、[简历页面](https://academicpages.github.io/cv)的演讲部分，以及[您进行过演讲的地点的地图](https://academicpages.github.io/talkmap.html)（如果您运行此 [python 文件](https://github.com/academicpages/academicpages.github.io/blob/master/talkmap.py)或 [Jupyter notebook](https://github.com/academicpages/academicpages.github.io/blob/master/talkmap.ipynb)，它将根据 _talks 目录的内容创建地图的 HTML）。

**Markdown 生成器**

该仓库包含[一组 Jupyter notebooks](https://github.com/academicpages/academicpages.github.io/tree/master/markdown_generator)，可将包含有关演讲或演示的结构化数据的 CSV 转换为单独的 Markdown 文件，这些文件将针对 Academic Pages 模板正确格式化。该目录中的示例 CSV 是我用来创建我自己的个人网站 stuartgeiger.com 的。我通常的工作流程是保留一个包含我的出版物和演讲的电子表格，然后在这些 notebook 中运行代码以生成 Markdown 文件，然后提交并推送到 GitHub 仓库。

如何编辑您网站的 GitHub 仓库
------
许多人使用 git 客户端在本地计算机上创建文件，然后将它们推送到 GitHub 的服务器。如果您不熟悉 git，可以直接在 github.com 界面中直接编辑这些配置和 Markdown 文件。导航到文件（如[这个文件](https://github.com/academicpages/academicpages.github.io/blob/master/_talks/2012-03-01-talk-1.md)）并单击内容预览右上角的铅笔图标（在"Raw | Blame | History"按钮的右侧）。您可以通过单击铅笔图标右侧的垃圾桶图标来删除文件。您还可以通过导航到目录并单击"Create new file"或"Upload files"按钮来创建新文件或上传文件。

示例：编辑演讲的 Markdown 文件
![编辑演讲的 Markdown 文件](/images/editing-talk.png)

更多信息
------
有关配置 Academic Pages 的更多信息，请参阅[指南](https://academicpages.github.io/markdown/)、[不断增长的 wiki](https://github.com/academicpages/academicpages.github.io/wiki)，您始终可以[在 GitHub 上提问](https://github.com/academicpages/academicpages.github.io/discussions)。[Minimal Mistakes 主题的指南](https://mmistakes.github.io/minimal-mistakes/docs/configuration/)（此主题从中派生）也可能有所帮助。
