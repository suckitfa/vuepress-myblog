module.exports = {
    title: 'Guangyuan\'s blog',
    description: '广园的个人博客',
    head: [ // 注入到当前页面的 HTML <head> 中的标签
      ['link', { rel: 'icon', href: '/img/logo.jpg' }], // 增加一个自定义的 favicon(网页标签的图标)
    ],
    base: '/', // 这是部署到github相关的配置
    markdown: {
      lineNumbers: false // 代码块显示行号
    },
    themeConfig: {
        theme:"vuepress-theme-reco",
      nav:[ // 导航栏配置
        {text: 'FE-前端', link: '/FE/' },
        {text: 'github', link: 'https://github.com/suckitfa'}      
      ],
      sidebar: {
        '/FE/':[
          {
            title:"JavaScript基础",
            children:[
              ['/FE/JavaScript基础/this问题','this问题'],
              ['/FE/JavaScript基础/异步问题','异步问题'],
              ['/FE/JavaScript基础/Promise','Promise问题']
            ]
          },
          {
            title:"数据结构与算法",
            children:[
              ['/FE/数据结构与算法/array','数组']
            ]
          }
        ]
      }, // 侧边栏配置
      sidebarDepth: 2, // 侧边栏显示2级
    }
  };