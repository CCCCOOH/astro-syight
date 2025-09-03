// src/pages/all-content.json.js
import {
  getCollection
} from 'astro:content';
import {
  get_title
} from "../scripts/utils.js"

export const GET = async () => {
  const posts = await getCollection('blog');

  // 过滤掉草稿或不想被搜索的文章
  const searchData = posts
    .map((post) => {
      const res = {
        title: post?.data?.title || get_title(post),
        slug: post.slug,
        description: post.data.description,
        excerpt: post.data.excerpt,
        body: post.body,
      }
      return res;
    });

  return new Response(JSON.stringify(searchData));
};