export const article = {
  default_cover: 'https://ccccooh.oss-cn-hangzhou.aliyuncs.com/img/202508041157020.gif',
  page_size: 5,
  show_all: false,
  // excerpt_size: 50
  use_frontmatter_title: true,
  comment: true
}

export const author_info = {
  avatar: 'https://ccccooh.oss-cn-hangzhou.aliyuncs.com/img/202508041157020.gif',
  name: 'Sy_ovo',
  description: '对世界充满好奇...',
  tags: ['夜猫子', '程序猿', '前端', 'ComputerGraphic', 'EVA', '二刺螈'],
  announcement: {
    title: '公告牌',
    icon: 'fa-solid fa-bell',
    content: [
      '欢迎访问Astro Syight博客站点，这是一个演示站点哦！',
      '友情提示：左上角的按钮是用来切换主题的！'
    ]
  }
}

export const site ={
  title: 'Syight'
}

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
    link: '/',
    color: 'black',
    dark_color: ''
  },
  {
    name: 'Link',
    link: 'https://sygmail.github.io/',
    color: '#555',
    dark_color: ''
  }
]