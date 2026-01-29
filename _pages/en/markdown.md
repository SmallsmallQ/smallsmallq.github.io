---
permalink: /en/markdown/
title: "Markdown Guide"
lang: en
author_profile: true
redirect_from:
  - /en/md/
  - /en/markdown.html
---

{% include toc %}

## Locations of key files/directories

* Basic config options: _config.yml
* Top navigation bar config: _data/navigation.yml
* Single pages: _pages/
* Collections of pages are .md or .html files in:
  * _publications/
  * _portfolio/
  * _posts/
  * _teaching/
  * _talks/
* Footer: _includes/footer.html
* Static files (like PDFs): /files/
* Profile image (can set in _config.yml): images/profile.png

## Tips and hints

* Name a file ".md" to have it render in markdown, name it ".html" to render in HTML.
* Go to the [commit list](https://github.com/academicpages/academicpages.github.io/commits/master) (on your repo) to find the last version GitHub built with Jekyll.
  * Green check: successful build
  * Orange circle: building
  * Red X: error
  * No icon: not built

* Academic Pages uses [Jekyll Kramdown](https://jekyllrb.com/docs/configuration/markdown/), GitHub Flavored Markdown (GFM) parser, which is similar to the version of Markdown used on GitHub, but may have some minor differences.
  * Some of emoji supported on GitHub should be supposed via the [Jemoji](https://github.com/jekyll/jemoji) plugin :computer:.
  * The best list of the supported emoji can be found in the [Emojis for Jekyll via Jemoji](https://www.fabriziomusacchio.com/blog/2021-08-16-emojis_for_Jekyll/#computer) blog post.

* While GitHub Pages prevents server side code from running, client-side scripts are supported.
  * This means that Google Analytics is supported, and [the wiki](https://github.com/academicpages/academicpages.github.io/wiki/Adding-Google-Analytics) should contain the most up-to-date information on getting it working.

* Your CV can be written using either Markdown ([preview](https://academicpages.github.io/cv/)) or generated via JSON ([preview](https://academicpages.github.io/cv-json/)) and the layouts are slightly different. You can update the path to the one being used in `_data/navigation.yml` with the JSON formatted CV being hidden by default.

 * The [Liquid syntax guide](https://shopify.github.io/liquid/tags/control-flow/) is a useful guide for those that want to add functionality to the template or to become contributors to the [template on GitHub](https://github.com/academicpages/academicpages.github.io).

For more information, please refer to the official documentation.
