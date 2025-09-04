// src/pages/all-content.json.js
import {
  getCollection
} from 'astro:content';
import { giscus } from '../config/site';

export const GET = async () => {
  // 过滤掉草稿或不想被搜索的文章
  return new Response(JSON.stringify(giscus));
};