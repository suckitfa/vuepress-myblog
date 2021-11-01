module.exports = {
    title: 'Guangyuan\'s blog',
    description: '广园的个人博客',
    head: [ // 注入到当前页面的 HTML <head> 中的标签
        ['link', { rel: 'icon', href: '/img/logo.jpg' }], // 增加一个自定义的 favicon(网页标签的图标)
    ],
    base: '/', // 这是部署到github相关的配置
    markdown: {
        lineNumbers: true // 代码块显示行号
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
                        ['/前端基础/JavaScript基础/01-JavaScript数据类型及其相关问题.md', '01-JavaScript数据类型及其相关问题'],
                        ['/前端基础/JavaScript基础/02-数据拷贝.md', '02-数据拷贝'],
                        ['/前端基础/JavaScript基础/03-原型链和继承.md', '03-原型链和继承'],
                        ['/前端基础/JavaScript基础/04-this指向.md', '04-this指向.md'],
                        ['/前端基础/JavaScript基础/05-js模块化.md', '05-js模块化.md'],
                        ['/前端基础/JavaScript基础/06-闭包.md', '06-闭包.md'],
                        ['/前端基础/JavaScript基础/07-深入数组.md', '07-深入数组.md'],
                    ]
                },
                {
                    title: "认知",
                    children: [
                        ['/前端基础/认知/01-学会如何学习.md', '01-学会如何学习'],
                    ]
                },
            ],
        }, // 侧边栏配置
        sidebarDepth: 2, // 侧边栏显示2级
    }
};