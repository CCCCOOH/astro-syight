---
title: 🚀 Astro-Syight 更新日志
createdTime: 2025-09-01
author: Sy_
sticky: 999
thumb: https://ccccooh.oss-cn-hangzhou.aliyuncs.com/img/202509031316259.jpg
slug: syight更新日志
excerpt: 更新日志、更新进度。
updatedTime: 2025-09-04T08:37:13.143Z
---

## 2025-09-01 前:

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

## 2025-09-01:

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
- 美化: 对所有页面增加了加载动画
- 美化: 美化TOC动画
- 新增: 分页功能🔥，点击Read More按钮加载更多
- 新增: 接入Gicus评论系统
```

## 2025-09-02:

```yml
- 新增: 完成所有页面明亮色主题切换功能，新增左上角色调切换按钮
- 优化: 重构颜色 CSS -> color.css
- 新增: 主页公告牌组件
- 新增: 优化标签标题生成
- 新增: 网站title于导航栏
- 优化: 重构样式和布局屎山代码💩——作者貌似把整个项目样式重写了一遍...
- 新增: 首页搜索按钮，纯原生实现，头秃。
```

## 2025-09-04:

```yml
- 新增: 相应式布局，适配小尺寸屏幕🖥️
- 特性: 为 Syight 配置 Front Matter CMS 功能, 开箱即用
- 移除: 统一 Front Matter, 将统一功能的多个 Front Matter 移除, 如：只保留 thumb 作为文章封面, 移除了 index_img（多余）
- 进度: Syight 尝试开发 CMS 功能中...
- 新增: Giscus 自动随主题按钮切换主题
- 优化: 修复主题切换bug
- 新增: 文章内封面
- 调整: 重构文章 Frontmatter date->createdTime、updatedTime
- 优化: 为Gallery、ArticleCover 等提供相应式布局
```

