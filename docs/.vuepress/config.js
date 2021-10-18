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
        theme: "vuepress-theme-reco",
        // 导航栏配置 顶部导航栏
        nav: [
            { text: 'FE-前端', link: '/前端基础/' },
        ],
        sidebar: {
            '/前端基础/': [{
                title: "JavaScript基础",
                children: [
                    ['/前端基础/JavaScript基础/01-原型链', '01-原型链'],
                ]
            }, ],
        }, // 侧边栏配置
        sidebarDepth: 2, // 侧边栏显示2级
    }
};