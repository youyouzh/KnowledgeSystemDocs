import {sidebar} from "vuepress-theme-hope";

export default sidebar([
  "/home",
  {
    "text": "Java基础",
    "prefix": "计算机科学/后台开发/Java/",
    "icon": "java",
    "collapsable": true,
    "children": [
      {
        "text": "Java基础",
        "prefix": "Java基础/",
        "collapsable": true,
        "children": [
          "java-idea+Maven+springMVC环境搭建",
          "java-junit-单元测试",
          "java-junit4-mock单元测试",
          "java-maven配置springmvc环境搭建",
          "Java基础",
          "Java多版本Windows安装",
          "Java容器初始化方法",
          "随机数生成原理"
        ]
      },
      {
        "text": "Java工具包",
        "prefix": "Java工具包/",
        "collapsable": true,
        "children": [
          "gradle构建工具",
          "Java Jackson相关",
          "Java反编译",
          "Java爬虫Document文档解析Jsoup",
          "Lombok相关注解和使用"
        ]
      },
      {
        "text": "Java框架相关",
        "prefix": "Java框架相关/",
        "collapsable": true,
        "children": [
          "Hibernate使用技巧",
          "Hystrix微服务相关",
          "Java中的@Transactional事务",
          "Spring Boot使用JPA",
          "Spring注解与AOP"
        ]
      },
      {
        "text": "Java虚拟机",
        "prefix": "Java虚拟机/",
        "collapsable": true,
        "children": [
          "Java 虚拟机"
        ]
      },
      {
        "text": "Java高级特性",
        "prefix": "Java高级特性/",
        "collapsable": true,
        "children": [
          "Java IO",
          "Java 容器",
          "Java 并发",
          "Java单例模式实现",
          "Java泛型特性",
          "Java线程池"
        ]
      },
      "README",
      {
        "text": "编程方法论",
        "prefix": "编程方法论/",
        "collapsable": true,
        "children": [
          "Java参数过多",
          "Java设计模式-创造型",
          "Java设计模式-结构型",
          "Java设计模式-行为型",
          "代码可读性",
          "代码风格规范",
          "面向对象思想"
        ]
      }
    ]
  }
])
