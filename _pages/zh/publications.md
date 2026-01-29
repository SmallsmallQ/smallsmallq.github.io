---
layout: archive
title: "论文发表"
permalink: /zh/publications/
lang: zh
author_profile: true
---

{% if site.author.googlescholar %}
  <div class="wordwrap">您可以在 <a href="{{site.author.googlescholar}}">我的 Google Scholar 主页</a> 上找到我的文章。</div>
{% endif %}

{% include base_path %}

{% for post in site.publications reversed %}
  {% include archive-single.html %}
{% endfor %}
