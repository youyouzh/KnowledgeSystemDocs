import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar";
import sidebar from "./sidebar";

export default hopeTheme({
  // 站点基本信息
  hostname: "https://ks.uusama.com",
  author: {
    name: "悠悠",
    url: "https://uusama.com",
  },
  iconAssets: "iconfont",
  // iconAssets: "//at.alicdn.com/t/font_2410206_a0xb9hku9iu.css",
  logo: "/logo.svg",
  docsDir: "/",
  docsBranch: 'master',

  // git仓库信息配置
  repo: "youyouzh/knowledge-system",
  repoLabel: 'GitHub',
  repoDisplay: true,

  // 站点界面设置
  navbar: navbar,   // 顶部导航栏
  sidebar: sidebar,  // 侧边栏
  // 页面底部页脚
  footer: 'Copyright © 2022 <a href="https://uusama.com" target="_blank"> 悠悠 </a> | ' +
      '<a href="https://www.beian.miit.gov.cn" target="_blank"> 粤ICP备17084400 </a> | ' +
      'Powered By <a href="https://github.com/vuejs/vuepress" target="_blank"> VuePress </a> | ' +
      'Theme By <a href="https://github.com/vuepress-theme-hope/vuepress-theme-hope" target="_blank"> vuepress-theme-hope </a> |' +
      '<a href="/sitemap.xml" title="站点地图" target="_blank"> 站点地图 </a>',
  displayFooter: true,
  backToTop: true,    // 返回顶部按钮
  fullscreen: true,   // 全屏按钮
  copyright: false,   // 版权信息
  pageInfo: ["Author", "Original", "Date", "Category", "Tag", "Word", "ReadingTime"],   // 文章信息，可以填入数组，数组的顺序是各条目显示的顺序

  // 文章原信息
  lastUpdated: true,
  contributors: true,
  editLink: true,

  // 博客设置，需要blog:true
  blog: {
    name: '悠悠',
    roundAvatar: true, // 是否剪裁头像为圆形形状
    description: "一个前端开发者",
    intro: "/intro.html",
    sidebarDisplay: 'none',  // 侧边栏不显示博客文章
    articlePerPage: 10,   // 文章每页数量
    articleInfo: ["Author", "Original", "Date", "PageView", "Category", "Tag", "ReadingTime"],  // 文章列表中展示的文章信息
    medias: {
      Baidu: "https://example.com",
      Bitbucket: "https://example.com",
      Wechat: "https://example.com",
      Weibo: "https://example.com",
      Youtube: "https://example.com",
      Zhihu: "https://example.com",
    },
  },

  // 文章加密设置
  encrypt: {
    config: {
      "/guide/encrypt.html": ["123456789"],
    },
  },

  // 插件配置
  plugins: {
    blog: {
      autoExcerpt: true,   // 文章自动摘要
    },

    nprogress: true,   // 页面切换进度条
    prismjs: true,     // prismjs提供的代码高亮
    // blog: false,  // 不需要博客

    // 如果你不需要评论，可以直接删除 comment 配置，
    // 以下配置仅供体验，如果你需要评论，请自行配置并使用自己的环境，详见文档。
    // 为了避免打扰主题开发者以及消耗他的资源，请不要在你的正式环境中直接使用下列配置!!!!!
    // comment: {
    //   /**
    //    * Using giscus
    //    */
    //   type: "giscus",
    //   repo: "vuepress-theme-hope/giscus-discussions",
    //   repoId: "R_kgDOG_Pt2A",
    //   category: "Announcements",
    //   categoryId: "DIC_kwDOG_Pt2M4COD69",
    //
    //   /**
    //    * Using twikoo
    //    */
    //   // type: "twikoo",
    //   // envId: "https://twikoo.ccknbc.vercel.app",
    //
    //   /**
    //    * Using Waline
    //    */
    //   // type: "waline",
    //   // serverURL: "https://vuepress-theme-hope-comment.vercel.app",
    // },

    // copyright: true,  // 启用版权信息，复制时会自动添加版权信息

    mdEnhance: {
      enableAll: true,
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
    },
  },
});
