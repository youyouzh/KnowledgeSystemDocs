import { defineUserConfig } from "vuepress";
import theme from "./theme";


export default defineUserConfig({
  lang: "zh-CN",
  title: "悠悠的知识库",
  description: "悠悠的个人知识库",
  base: "/",
  // head: [
  // // 添加百度统计
  //   [
  //     "script", {},
  //     `var _hmt = _hmt || [];
  //     (function() {
  //       var hm = document.createElement("script");
  //       hm.src = "https://hm.baidu.com/hm.js?5dd2e8c97962d57b7b8fea1737c01743";
  //       var s = document.getElementsByTagName("script")[0];
  //       s.parentNode.insertBefore(hm, s);
  //     })();`
  //   ],
  //   [
  //     "link",
  //     {
  //       rel: "stylesheet",
  //       href: "//at.alicdn.com/t/font_2922463_99aa80ii7cf.css",
  //     },
  //   ],
  // ],

  theme,
});
