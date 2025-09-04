export const article = {
  default_cover: 'https://ccccooh.oss-cn-hangzhou.aliyuncs.com/img/202509031715479.jpg',  // 首页文章默认封面
  page_size: 5, // 每页显示的文章数
  show_all: false,  // 是否一次性显示所有文章
  use_frontmatter_title: true, // 启用frontmatter.title，会覆盖自动生成的标题
  comment: true // 启用评论功能
}

// 首页作者信息卡片
export const author_info = {
  avatar: 'https://ccccooh.oss-cn-hangzhou.aliyuncs.com/img/202508041157020.gif',
  name: 'Sy_OvO',
  description: '充满好奇...',
  tags: ['Front End', 'ComputerGraphic', 'EVA', 'Hollow Knight', '404'],
  announcement: {
    title: '公告牌',
    icon: 'fa-solid fa-bell',
    content: [
      '欢迎访问Astro Syight博客站点，这是一个演示站点哦！',
      '友情提示：左上角的按钮是用来切换主题的！'
    ]
  }
}

// 站点配置
export const site ={
  title: 'Syight'
}

// 页脚标签
export const footer = [
  // { name, icon, link, color, dark_color }
  // {
  //   name: 'bilibili',
  //   icon: '',
  //   link: 'https://space.bilibili.com/450034908?spm_id_from=333.1007.0.0',
  //   color: '#f8309d',
  //   dark_color: 'indigo'
  // },
  // {
  //   name: 'CSDN',
  //   link: 'https://blog.csdn.net/2301_79640368?spm=1000.2115.3001.5343',
  //   color: '#ff5900',
  //   dark_color: ''
  // },
  {
    // 请尊重作者
    name: 'Copyright © Astro Syight',
    link: 'https://github.com/CCCCOOH/astro-syight',
    color: 'black',
    dark_color: ''
  },
]

export const giscus = {
  src: "https://giscus.app/client.js",
  "data-repo": "ccccooh/astro-syight",
  "data-repo-id": "R_kgDOPnDlCQ",
  "data-category": "Show and tell",
  "data-category-id": "DIC_kwDOPnDlCc4Cu2dZ",
  "data-mapping": "pathname",
  "data-strict": "0",
  "data-reactions-enabled": "1",
  "data-emit-metadata": "0",
  "data-input-position": "bottom",
  "data-theme": "catppuccin_latte",
  "data-lang": "zh-CN",
  crossorigin: "anonymous",
  async: true
}