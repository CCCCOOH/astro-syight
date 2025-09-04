// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import remarkMath from 'remark-math';
 import rehypeKatex from 'rehype-katex';
 import mdx from '@astrojs/mdx';
 import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // 替换为你自己的站点地址
  site: "https://syight.site",
  integrations: [mdx(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
  markdown: {
      remarkPlugins: [remarkMath],
      rehypePlugins: [rehypeKatex]
  }
});
