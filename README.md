Okay, here is the translation of your README content into English:

# AstroSyight 🚀

![](https://ccccooh.oss-cn-hangzhou.aliyuncs.com/img/202508310413326.png)
![](https://ccccooh.oss-cn-hangzhou.aliyuncs.com/img/202508310504660.png)
![](https://img.shields.io/badge/Github-181717?style=for-the-badge&logo=github&logoColor=white)
![](https://img.shields.io/github/license/ccccooh/astro-theme-syight.svg)

## 🔥 Features

- [x] Immersive grid background on article pages
- [x] Small but feature-packed (Lit. "Small as a sparrow but has all vital organs")
- [x] Apple Music album showcase on the homepage
- [x] Tech stack display on the About page
- [x] LaTeX support
- [ ] Light theme toggle
- [ ] Responsive design

## 📄 Pages

### Homepage
![](https://ccccooh.oss-cn-hangzhou.aliyuncs.com/img/202508310413326.png)

### Article Page
![](https://ccccooh.oss-cn-hangzhou.aliyuncs.com/img/202508310458801.png)

### Footer
![](https://ccccooh.oss-cn-hangzhou.aliyuncs.com/img/202508310459732.png)

### About
![](https://ccccooh.oss-cn-hangzhou.aliyuncs.com/img/202508310500164.png)

### Archive
![](https://ccccooh.oss-cn-hangzhou.aliyuncs.com/img/202508310500915.png)

### Tags
![](https://ccccooh.oss-cn-hangzhou.aliyuncs.com/img/202508310501883.png)

### LaTeX
![](https://ccccooh.oss-cn-hangzhou.aliyuncs.com/img/202508310502619.png)

## 🚀 Project Structure

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

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

Any static assets, like images, can be placed in the `public/` directory.

All blog posts are stored in the `src/content/blog` directory.

## 💻 Tech Stack

-   Main Framework - [Astro](https://astro.build/)
-   Type Checking - [TypeScript](https://www.typescriptlang.org/)
-   Deployment - [Vercel](https://vercel.com/)
-   Tooling - [VsCode](https://code.visualstudio.com/)

## 💗 Local Installation

(The author cannot afford an npm subscription to publish the package, but you can install this theme manually. Please understand.)

-   Install the framework

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

-   Start the project 🚀

```
# Be sure to install dependencies the first time you start
pnpm install

# Genshin Impact, start! (Lit. "Original God, start!")
pnpm run dev
```

-   Build 🏠

```
# Generate static files
npm run build
```

## 📜 License

Licensed under the MIT License, Copyright © 2025

## 🪓 Personal Contributions:

![](https://ghchart.rshah.org/ccccooh)

---

Made with 🤍 by Sy 👨🏻‍💻