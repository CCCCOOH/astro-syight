---
sticky: 1000
createdTime: 2025-09-03
photos:
  - https://ccccooh.oss-cn-hangzhou.aliyuncs.com/img/202509030617247.png
  - https://ccccooh.oss-cn-hangzhou.aliyuncs.com/img/202509030618916.png
  - https://ccccooh.oss-cn-hangzhou.aliyuncs.com/img/202509030619106.png
  - https://ccccooh.oss-cn-hangzhou.aliyuncs.com/img/202509030619474.png
thumb: https://ccccooh.oss-cn-hangzhou.aliyuncs.com/img/202509031316680.jpg
gallery_h: 20rem
updatedTime: 2025-09-07T00:17:11.580Z
slug: syight使用文档
---

Syight，基于 Astro + Tailwind 的轻量化静态博客模板，由一个大二学生独自开发。

<!-- more -->

---


## 1. Features

Syight 采用 Astro+Tailwind 开发，Astro 基于 jsx 语法，类似于 React 的语法风格，大部分 CSS 采用 Tailwind 风格的内嵌类名，并通过组件化设计提高项目的扩展性。

Syight 有哪些特色：

- 优雅的蓝墨色字体颜色
- 极值优雅的审美体验
- 护眼的衬线字体
- 独家静态博客说说功能
- 极致简约的风格
- 响应式布局
- 双色主题
- 滑块图片展示功能
- 基于Astro的极致访问速度🚀(vercel部署情况下)
- 完美的 latex 渲染支持
- 来自Astro的超快的构建速度🔥
- 通过markdown注释自动生成摘要
- 冷门主题——不用担心撞车
- 搭配 [FrontMatter](https://frontmatter.codes/) 插件实现实时网站级别预览。

未来希望加入的功能：

- 更加极致的网页渲染体验
- 图片懒加载
- 接入 Next.js 提供极致的后台支持
- 加入 NPM 包集合

> 由于学业原因，开学会停止更新项目。

## 2. Article

> 如何发布一篇文章？

在 content 目录下，你可以随意创建文件夹和撰写文章。Syight中的文章分为两种类型：

- 博客
- 说说

撰写博客只需要加上frontmatter.date即可，如要撰写说说需要加上frontmatter.says=true。特别地，说说类型会在说说页显示。

## 3. Plugin

通过使用 VisualStudioCode 插件 [FrontMatter](https://frontmatter.codes/) 以高效、轻松地管理本地博客。

FrontMatter 提供后台管理功能，Syight 为你提供好了所需要的 frontmatter.json 配置，开箱即用。

## 4. Configs

`src/config` 文件夹下提供了几乎所有的配置，目前已提供的：
- about.js —— 关于页配置
- blog-grid.js —— 网格布局的文章列表
- nav.js —— 导航栏
- player.js —— 播放器相关
- says.js —— 说说
- site.js —— 站点
- style.js —— 样式

遗憾的是，由于项目还处于早期阶段，目前配置还不完善，后期将会提供更加自由的配置，如主色调、站点 Logo 等。

但你仍可以通过修改源代码的方式修改他们。

## 5. Frontmatter

所有的 frontmatter 可在 `src/content.config.ts` 中查看规定范式。

以说说类型内容为例：

```ts
// 说说文章下frontmatter 范式
const says = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string().optional(), // 说说标题
    says: z.coerce.boolean(),  // 是否启用说说，必须项
    photos: z.array(z.string()).optional(), // 说说下海报数组
    author: z.string().optional(),  // 作者
    avatar: z.string().optional(), // 头像
    description: z.string().optional(), // 描述
    gallery_h: z.string().optional(), // 海报中单个图像宽度 一般设置高度即可
    radius: z.string().optional(), // 海报圆角
    createdTime: z.date().optional(), // 日期
  })
})
```

这是所有说说的 frontmatter 定义，采用插件 `z` 提供 TypeScript 友好的类型限制。

你可以在`src/content`下随意组织你的文章，Syight 会根据你的 FrontMatter 来区分文章类型，并在构建时将其自动渲染到页面上。

需要注意的是，随着项目的不断更新 FrontMatter 规范可能会改变——这意味着文档可能不是最新的。但你永远可以在本地的 `content.config.ts` 中看到最正确的规范。

## 6. Install&Deploy

前提：在本地安装 node.js 环境，确保可以使用 npm 命令。

拷贝 Github 项目文件，进入项目根目录：

```sh
# 安装依赖
npm install
# 启动开发
npm run dev
```

<iframe title="bilibili" src="//player.bilibili.com/player.html?isOutside=true&aid=115136547262417&bvid=BV1ciaTz9EgQ&cid=32122340203&p=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>

Syight 推荐你通过 Vercel 进行部署，只需要在 Vercel 中创建一个新的项目并关联到你的 Syight 博客项目即可。

每一次推送到 Github 仓库，Vercel 都会自动构建你的网站，通过 Vercel 访问即可。

## 7. Other

你可以在 Syight 轻松潜入你的 Youtube、Bilibili 视频。

只需要复制对应的网页端潜入代码即可。特别的，对于bilibili，你需要为标签加上 `title="bilibili"` 属性来确保 CSS 生效。

```html
<!-- raw data -->
<iframe src="//player.bilibili.com/player.html?isOutside=true&aid=115136547262417&bvid=BV1ciaTz9EgQ&cid=32122340203&p=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>
<!-- 加入 title 属性 -->
<iframe title="bilibili" src="//player.bilibili.com/player.html?isOutside=true&aid=115136547262417&bvid=BV1ciaTz9EgQ&cid=32122340203&p=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>
```