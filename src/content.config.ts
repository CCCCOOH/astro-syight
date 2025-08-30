// src/content/config.js
import { defineCollection, getCollection, z } from 'astro:content';

// 1. 定义posts集合的schema（规范）
const blog = defineCollection({
  type: 'content'
});


// 2. 导出注册的集合
export const collections = {
  blog,
};
