import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  "/home",
  { text: "后台", icon: "backend", link: "/计算机科学/后台开发" },
  { text: "Java", icon: "java", link: "/计算机科学/后台开发/Java/" },
  // {
  //   text: "博文",
  //   icon: "edit",
  //   prefix: "/posts/",
  //   children: [
  //     {
  //       text: "文章 1-4",
  //       icon: "edit",
  //       prefix: "article/",
  //       children: [
  //         { text: "文章 1", icon: "edit", link: "article1" },
  //         { text: "文章 2", icon: "edit", link: "article2" },
  //         "article3",
  //         "article4",
  //       ],
  //     },
  //     "article11",
  //     "article12",
  //   ],
  // },
  {
    text: "主题文档",
    icon: "note",
    link: "https://vuepress-theme-hope.github.io/v2/zh/",
  },
]);
