// src/content/config.js
import { defineCollection, getCollection, z } from 'astro:content';

// 1. 定义posts集合的schema（规范）
const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string().optional(), // 标题
    excerpt: z.string().optional(), // 摘要
    createdTime: z.coerce.date(),  // 日期
    updatedTime: z.date().optional(),  // 日期
    sticky: z.number().optional(), // 置顶级别（越大越置顶）
    tags: z.array(z.string()).optional(), // 标签
    author: z.string().optional(), // 作者
    photos: z.array(z.string()).optional(), // 文章内顶部海报组
    ph_height: z.string().optional(), // photos 海报的高度
    radius: z.string().optional(), // 海报圆角
    thumb: z.string().optional(), // 首页文章封面
    latex: z.boolean().optional(), // 是否对文章啊启用 latex，启用则加载 latex包，单个页面会变慢，其他页面不受影响
    visible: z.boolean().optional(), // 文章在首页列表是否可见
    hidden: z.boolean().optional() // 文章在首页列表是否隐藏
  })
});

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
    img_width: z.string().optional(), // 海报中单个图像宽度 一般设置高度即可
    height: z.string().optional(), // 海报图像高度
    radius: z.string().optional(), // 海报圆角
    createdTime: z.date().optional(), // 日期
  })
})


// 2. 导出注册的集合
export const collections = {
  blog, says
};
