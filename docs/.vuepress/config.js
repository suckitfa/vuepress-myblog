module.exports = {
    title: 'Guangyuan\'s blog',
    description: '广园的个人博客',
    head: [ // 注入到当前页面的 HTML <head> 中的标签
      ['link', { rel: 'icon', href: '/log.jpg' }], // 增加一个自定义的 favicon(网页标签的图标)
    ],
    base: '/', // 这是部署到github相关的配置
    markdown: {
      lineNumbers: false // 代码块显示行号
    },
    themeConfig: {
        theme:"vuepress-theme-reco",
      nav:[ // 导航栏配置
        {text: '前端基础', link: '/FE/' },
        {text: '算法题库', link: '/algorithm/'},
        {text: 'github', link: 'https://suckitfa.github.com'}      
      ],
      sidebar: {
        '/FE/':[
          {
            title:'前端基础',
            children:[
              ['/FE/test','测试']
            ]
          }
        ]
      }, // 侧边栏配置
      sidebarDepth: 2, // 侧边栏显示2级
    }
  };