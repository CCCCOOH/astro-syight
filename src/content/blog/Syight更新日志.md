---
title: 🚀 Astro-Syight 更新日志
date: 2025-09-01
author: Sy_
sticky: 999
---

## 1. 前言 📄

首页的单元测试文章来自 Hexo。

最初的计划是开发一个小而美的静态博客模板，但随着时间的推移总有新的灵感💡不断涌现出来，`Astro Syight` 的项目体积不断膨胀，内容和功能频繁增添，或许某一天这个项目就相对比较繁杂了，但为了让本项目更加“开源友好”，我决定记录下我的开发日志。

<!-- more -->

本项目和传统的博客主题有区别，是一个博客模板。

本日志文件暂时分为以下几个部分：
- 时间线日志
- Syight 安装&使用方法
- 具体模块介绍

## 2. 日志 📔

2025-09-01 前:
```yml
- 搭建基础框架 
- 主页 📄
- 关于页 📄
- 归档页（即/blog页）📄
- 标签页 Tags 🏷️
- 标签动态路由
- 文章动态路由
- 作者卡片 AuthorCard 👤
- 首页加入 Apple Music 卡片 🎵
- 归档页自动根据时间排序整理 ⌛️
- 页脚组件
- 右下角粉色ToTop按钮 快速到达页面顶部
- 目录模块 TOC
- 可自动收缩的导航栏
- 技术栈展示卡片
- 文章封面占位配置
- 文章标题会优先采用frontmatter.title，若缺省则匹配文件名
```

2025-09-01:
```yml
- 特性: 文章 frontmatter.date ⚠️ 必须设置为 2025-09-01 22:57:49 格式，如果是 2025-9-1 则会报错。
- 特性: 添加文章自动分页功能，在文章内插入<!-- more -->标签即可自动截取其上方所有内容作为摘要。 ⚠️ 必须严格为<!-- more -->，如果是<!--more-->则不行，后续我会优化这一点。文章摘要优先级为: p.data?.excerpt || p.data?.description || more 分割内容
- 更新: 优化TOC模块，增加折叠功能，并赋予动画。
- 美化: 修改代码块样式，鼠标悬浮时文代码富有红色背景高亮。
- 新增: 通过frontmatter.photos可加入多个图片作为文章的 Gallery Post，点击可滑动。
- 美化: 适配 bilibili 和 Youtube 的iframe嵌入式视频代码，提供专属演示，见演示站点 Videos 一文。
- 新增: 文章frontmatter.sticky可以设置文章优先级，默认为0不显示置顶图钉📌，大于0时按照其值大小排序。
- 特性: 文章frontmatter.visible可以设置文章首页可见性，此可见性的修改仅可作用于首页文章列表，不在归档中生效
- 新增: 说说页面😋
```

## 3. 安装 🚀

依赖:
- npm
- node.js

只需要在 Github clone 本项目的仓库，进入项目文件夹安装相关依赖即可，是不是超级简单！

具体方法:

```
# 克隆本项目
git clone git@github.com:CCCCOOH/astro-theme-syight.git
# 安装相关依赖
npm install
# 启动开发模式 默认运行在: http://localhost:4321
npm run dev
```

在开发模式下你可以任意更改项目中的内容，网页端会实时进行更新。

## 4. 部署

想要全面了解所有部署方法请参考 [Astro 官方文档](https://docs.astro.build/en/guides/deploy/vercel/)，这里只列出我正在使用的方法。

🟡 最小构建方式，产生可以部署的静态HTML文件，将其直接丢进你的网站根目录内即可（不推荐，太麻烦，即使配合 Git Actions 也不方便）。

```
npm run build
```

✅ 推荐的构建方式：[使用 Vercel 脚手架](https://docs.astro.build/en/guides/deploy/vercel/)。

```
# 第一步：在全局（-g表示整台电脑而不是单个的项目）安装vercel，可以理解为作为命令行应用安装
npm install -g vercel
# 第二部：在项目根目录执行 vercel 会自动引导登录 vercel 账号，在账号中绑定相应的仓库即可
vercel
```

这里需要注意的是，使用该方法请自己在github中创建一个仓库，将 Astro-Syight 复制到你的仓库中，此时将vercel上的项目绑定到你对应的 Github Reporsitory 就可以在每次git推送后自动同步更新vercel，极其方便。


## 5.QA❔

- **Question**：Asyight 的项目文件夹这么一坨，我怎么优雅地管理博客和在本地写博客呢？
- **Anwser**：在终端自定义一条cd到项目目录并run dev的快捷指令，并用 Obsidian 将 content/ 目录作为一个 Vault 打开，这样就不需要每次看到那一大坨文件了，并且直接打开终端一键查看博客的实时渲染效果！推送文章也是一个原理，在使用 Vercel 部署的前提下，以 macOS为例，我们只需要在 ~/.zsh 中添加一个脚本：
	
	```shell
	function ph() {
		cd 你的项目绝对路径
		git add .
		git commit -m "$1"
		git push origin main
	}
	```
	添加完成后`source ~/.zsh`编译生效，就可以通过`ph "提交描述..."`来一键推送到仓库并且自动更新到你的 vercel 站点了，也挺方便的对吧？


