# AstroSyight 🚀

- 演示站点：[https://www.syight.site/](https://www.syight.site/)
- README: [English](./README.md)

<!-- 展示 -->
![](https://ccccooh.oss-cn-hangzhou.aliyuncs.com/img/202509020540653.png)



<!-- 徽章 -->
![](https://img.shields.io/badge/Github-181717?style=for-the-badge&logo=github&logoColor=white)
![](https://img.shields.io/github/license/ccccooh/astro-theme-syight.svg)


## 说说

![](https://ccccooh.oss-cn-hangzhou.aliyuncs.com/img/202509020543957.png)


## 🔥 功能

- [x] 文章页沉浸式网格背景
- [x] 麻雀虽小五脏俱全
- [x] 首页 Apple Music 专辑展示
- [x] About页技术栈展示
- [x] Latex支持
- [ ] 明亮色主题切换
- [ ] 响应式

## 🚀 项目结构

```
astro-theme-syight
├─.DS_Store
├─LICENSE
├─README.md
├─astro.config.mjs
├─package-lock.json
├─package.json
├─tsconfig.json
├─src
|  ├─.DS_Store
|  ├─content.config.ts
|  ├─styles
|  |   └global.css
|  ├─scripts
|  ├─pages
|  |   ├─.DS_Store
|  |   ├─about.md
|  |   ├─blog.astro
|  |   ├─index.astro
|  |   ├─rss.xml.js
|  |   ├─tags
|  |   |  ├─[tag].astro
|  |   |  └index.astro
|  |   ├─posts
|  |   |   └[...slug].astro
|  ├─layouts
|  |    ├─About.astro
|  |    ├─BaseLayout.astro
|  |    └MarkdownPostLayout.astro
|  ├─content
|  |    ├─blog
|  ├─config
|  |   ├─about.js
|  |   ├─nav.js
|  |   ├─player.js
|  |   └site.js
|  ├─components
|  |     ├─ArticleContainerItem.astro
|  |     ├─AuthorCard.astro
|  |     ├─BlogPost.astro
|  |     ├─Footer.astro
|  |     ├─Header.astro
|  |     ├─HomeArticleContainer.astro
|  |     ├─HomeBackground.astro
|  |     ├─MusicPlayer.astro
|  |     ├─Navigation.astro
|  |     ├─Social.astro
|  |     ├─StackExhibition.astro
|  |     ├─TOC.astro
|  |     ├─Tag.astro
|  |     ├─ToTop.astro
|  |     └VideoPlayer.astro
├─public
|   └favicon.svg
```

Astro 在目录中查找.astro或.md文件src/pages/。每个页面都会根据其文件名显示为一条路由。

任何静态资产（例如图像）都可以放置在public/目录中。

所有博客文章都存储在src/data/blog目录中。

## 💻 技术栈

- 主要框架 - [Astro](https://astro.build/)
- 类型检查 - [TypeScript](https://www.typescriptlang.org/)
- 部署 - [Vercel](https://vercel.com/)
- 工具 - [VsCode](https://code.visualstudio.com/)

## 💗 本地安装

作者没钱订阅 npm 发包，但你可以手动安装本主题，请谅解。

- 安装框架

```
# pnpm
pnpm create astro@latest --template satnaing/astro-paper

# npm
npm create astro@latest -- --template satnaing/astro-paper

# yarn
yarn create astro --template satnaing/astro-paper

# bun
bun create astro@latest -- --template satnaing/astro-paper
```

- 启动项目 🚀

```
# 第一次启动请务必安装依赖
pnpm install

# 原神，启动！
pnpm run dev
```

- 构建 🏠

```
# 生成静态文件
npm run build
```

## 📜 协议

Licensed under the MIT License, Copyright © 2025


## 🪓 Personal Contributions:

![](https://ghchart.rshah.org/ccccooh)

---

Made with 🤍 Sy 👨🏻‍💻