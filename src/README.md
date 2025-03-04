---
home: true
icon: https://i.postimg.cc/zvQ41bSP/logo.png
title: 小Q的个人网站
heroFullScreen: true
heroImageDark: https://i.postimg.cc/zvQ41bSP/logo.png
heroImageLight: https://i.postimg.cc/zvQ41bSP/logo.png
heroImage: https://i.postimg.cc/zvQ41bSP/logo.png

bgImage: /img/bg4.svg
heroText: 小Q的个人网站
tagline: 分享法律笔记，记录生活点滴，展示项目成果
actions:
  - text: 法律笔记
    icon: scale-balanced
    link: legal%20study/
    type: primary

  - text: 项目展示
    icon: fa6-brands fa-vuejs
    link: project-demo/
    type: primary

  - text: 关于我
    icon: circle-info
    link: /about
    type: secondary

highlights:
  - header: 法律学习
    description: 法学笔记，案例分析，法学资源分享
    image: /assets/image/legal.svg
    features:
      - title: 民法学
        link: legal%20study/civil-law/

      - title: 法理学
        icon: balance-scale
        link: legal%20study/jurisprudence/

      - title: 法律模型
        icon: file-alt
        link: legal%20study/model/

  - header: 项目展示
    description: 个人项目，技术实践，成果分享
    image: /assets/image/project.svg
    features:
      - title: 腾飞杯作品
        icon: fa6-brands fa-vuejs
        link: project-demo/energy/

      - title: 社会实践
        icon: users
        link: project-demo/social-practice/

  - header: 生活分享
    description: 旅行游记，美食推荐，生活感悟
    image: /assets/image/life.svg
    features:
      - title: 去旅行
        icon: plane
        link: life-sharing/go-on-journey/

  - header: 技术学习
    description: 技术文章，学习笔记，经验分享
    image: /assets/image/tech.svg
    features:
      - title: 技术文章
        icon: code
        link: tech/

head:
  - - meta
    - name: keywords
      content: 法律笔记, 项目展示, 生活分享, 技术文章
  - - meta
    - name: description
      content: 小Q的个人网站，分享法律笔记，记录生活点滴，展示项目成果。
  - - meta
    - name: wwads-cn-verify
      content: 2f2b265625d76a6704b08093c652fd79

  - - meta
    - name: baidu-site-verification
      content: codeva-CrZ94MmST2
---

<style>
.home-container {
  max-width: 960px;
  margin: 0 auto;
  padding: 20px;
}

.links {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}

.links a {
  margin: 0 10px;
}

.links a img {
  width: 30px;
  height: 30px;
}

.home-section {
  margin-bottom: 30px;
}

.home-section h2 {
  font-size: 2em;
  margin-bottom: 20px;
  border-bottom: 1px solid #eee;
  padding-bottom: 10px;
}

.home-section p {
  font-size: 1.2em;
  color: #666;
}

.home-link-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.home-link-item {
  width: 30%;
  min-width: 200px;
  margin-bottom: 20px;
  padding: 20px;
  border: 1px solid #eee;
  border-radius: 5px;
  text-align: center;
}

.home-link-item img {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-bottom: 10px;
}

.home-link-item a {
  text-decoration: none;
  color: #333;
}

.home-link-item a:hover {
  color: #007bff;
}

/* 新增样式 */
.about-section {
  display: flex;
  align-items: center;
  margin-bottom: 30px;
}

.about-section img {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-right: 20px;
}

.about-section h2 {
  font-size: 2.5em;
  margin-bottom: 10px;
}

.about-section p {
  font-size: 1.2em;
  color: #666;
}

/* 新增图标样式 */
.home-section h2::before {
  content: "📚 "; /* 使用书本图标 */
  margin-right: 5px;
}

.home-section h3::before {
  content: "📝 "; /* 使用笔图标 */
  margin-right: 5px;
}

.home-section ul li::before {
  content: "📌 "; /* 使用图钉图标 */
  margin-right: 5px;
}
</style>

<div class="home-container">
  <div class="links">
    <a href="https://twitter.com/FastRequest666" target="_blank">
      <img src="https://img.shields.io/static/v1?label=Twitter&message=FastRequest666&logo=twitter&color=FC8D34" alt="Twitter">
    </a>
    <a href="https://github.com/smallsmallq" target="_blank">
      <img src="https://badgen.net/badge/Github/smallsmallq/21D789?icon=github" alt="GitHub">
    </a>
    <a href="https://www.bilibili.com/video/BV1LvYQe2EV7/" target="_blank">
      <img src="https://img.shields.io/badge/BiliBili-我是小Q诶-blue?logo=bilibili" alt="BiliBili">
    </a>
    <a href="mailto:gongyunbo@stu.xjtu.edu.cn">
      <img src="https://img.shields.io/badge/Email-gongyunbo@stu.xjtu.edu.cn-blue?logo=gmail" alt="Email">
    </a>
  </div>

  <div class="home-section">
    <h2>✨ 关于我</h2>
    <div class="about-section">
      <img src="https://i.postimg.cc/zvQ41bSP/logo.png" alt="小Q">
      <div>
        <h2>龚运博 (SmallQ)</h2>
        <p>西安交通大学法学(复合)专业学生，法律与科技爱好者。</p>
        <p>在这里分享我的法律笔记、项目展示、生活点滴和技术心得。</p>
        <p>
          <a href="/about">了解更多关于我的信息</a>
        </p>
      </div>
    </div>
  </div>

  <div class="home-section">
    <h2>📚 学习与研究</h2>
    <p>
      分享我在法律、技术等领域的学习笔记和研究成果，希望能与大家交流学习，共同进步。
    </p>
    <div class="home-link-list">
      <div class="home-link-item">
        <img src="https://i.postimg.cc/zvQ41bSP/logo.png" alt="法律笔记">
        <a href="/legal-study/">法律笔记</a>
      </div>
      <div class="home-link-item">
        <img src="https://i.postimg.cc/zvQ41bSP/logo.png" alt="项目展示">
        <a href="/project-demo/">项目展示</a>
      </div>
      <div class="home-link-item">
        <img src="https://i.postimg.cc/zvQ41bSP/logo.png" alt="技术文章">
        <a href="/tech/">技术文章</a>
      </div>
    </div>
  </div>

  <div class="home-section">
    <h2>🏛️ 课程笔记</h2>
    <p>
      分享我在大学期间的学习笔记，希望能帮助到更多同学。
    </p>
    <h3>通识课课程</h3>
    <ul>
      <li><a href="https://www.csxf.online/article/122c9f55-1e8c-80dd-968b-d98ebcc8b338">中国近代史纲要</a></li>
      <li><a href="https://www.csxf.online/article/122c9f55-1e8c-800b-ac7b-c3c1cb8e09bf">军事理论课</a></li>
      <li><a href="https://www.csxf.online/article/122c9f55-1e8c-8001-ad9f-f8ac88673011">毛泽东思想概论</a></li>
      <li><a href="https://www.csxf.online/article/122c9f55-1e8c-80e8-a20e-edf32d85f500">马克思主义基本原理</a></li>
      <li><a href="https://www.csxf.online/article/politics">习思想</a></li>
    </ul>
    <h3>专业课课程</h3>
    <ul>
      <li><a href="https://www.csxf.online/article/121c9f55-1e8c-8038-96a7-d9ec0095f01e">法学资料</a></li>
    </ul>
    <h3>最近更新：习思想概论</h3>
    <p>
      <a href="https://file.notion.so/f/f/ce7d7ee5-dc89-4fc9-be95-586c88edcd2e/d96937dd-eb79-47c3-bfe3-99c9ba577120/%E3%80%90%E9%92%B1%E5%AD%A6%E7%BB%84%E3%80%91%E3%80%8A%E4%B9%A0%E6%80%9D%E6%83%B3%E3%80%8B%E5%A4%8D%E4%B9%A0%E6%8F%90%E7%BA%B2%EF%BC%88%E7%AC%AC%E4%BA%94%E7%89%88%EF%BC%89_(1).pdf?table=block&id=1a3c9f55-1e8c-8072-8185-f375a634f0bf&spaceId=ce7d7ee5-dc89-4fc9-be95-586c88edcd2e&expirationTimestamp=1740319200000&signature=rviH1vGNABlTF7Fy8Fj2BK9WMYR7N9gRtYRJkOsxRJM&downloadName=%E3%80%90%E9%92%B1%E5%AD%A6%E7%BB%84%E3%80%91%E3%80%8A%E4%B9%A0%E6%80%9D%E6%83%B3%E3%80%8B%E5%A4%8D%E4%B9%A0%E6%8F%90%E7%BA%B2%EF%BC%88%E7%AC%AC%E4%BA%94%E7%89%88%EF%BC%89_%281%29.pdf">【钱学组】《习思想》复习提纲（第五版）</a>
    </p>
  </div>

  <div class="home-section">
    <h2>🏞️ 生活与分享</h2>
    <p>
      记录生活中的点滴，分享旅行、美食等美好事物，希望能给大家带来一些快乐和启发。
    </p>
    <div class="home-link-list">
      <div class="home-link-item">
        <img src="https://i.postimg.cc/zvQ41bSP/logo.png" alt="生活分享">
        <a href="/life-sharing/">生活分享</a>
      </div>
    </div>
  </div>

  <div class="home-section">
    <h2>🔗 友情链接</h2>
    <p>
      这里是一些我推荐的网站和资源，希望能对你有所帮助。
    </p>
    <ul>
      <li>
        <a href="https://theme-hope.vuejs.press/" target="_blank">VuePress Theme Hope</a>
      </li>
      <li>
        <a href="https://vuepress.vuejs.org/" target="_blank">VuePress</a>
      </li>
    </ul>
  </div>

  <div class="home-section">
    <h2>联系方式</h2>
    <p>
      欢迎大家与我交流学习，共同进步！
    </p>
    <ul>
      <li>邮箱：gongyunbo@stu.xjtu.edu.cn</li>
      <li>GitHub：https://github.com/smallsmallq</li>
      <li>BiliBili：https://space.bilibili.com/your_bilibili_id</li>
    </ul>
  </div>
</div>
