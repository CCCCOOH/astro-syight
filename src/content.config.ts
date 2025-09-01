// src/content/config.js
import { defineCollection, getCollection, z } from 'astro:content';

// 1. 定义posts集合的schema（规范）
const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string().optional(),
    excerpt: z.string().optional(),
    date: z.coerce.date(),
    sticky: z.number().optional(),
    tags: z.array(z.string()).optional(),
    author: z.string().optional(),
    photos: z.array(z.string()).optional(),
    ph_height: z.string().optional(),
    latex: z.boolean().optional(),
    visible: z.boolean().optional()
  })
});

const says = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string().optional(),
    says: z.boolean(),
    photos: z.array(z.string()).optional(),
    author: z.string().optional(),
    avatar: z.string().optional(),
    description: z.string().optional(),
    img_width: z.string().optional(),
    height: z.string().optional(),
    radius: z.string().optional(),
    date: z.coerce.date().optional(),
  })
})


// 2. 导出注册的集合
export const collections = {
  blog, says
};
