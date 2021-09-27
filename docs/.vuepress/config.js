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
            { text: 'FE-前端', link: '/FE/' },
            {text:'算法与数据结构',link:'/ALGO/'},
            {text:"心理认知",link:'/心理认知/'},
            { text: 'github', link: 'https://github.com/suckitfa' }
        ],
        sidebar: {
            '/FE/': [{
                    title: "JavaScript基础",
                    children: [
                        ['/FE/JavaScript基础/01-原型链', '01-原型链'],
                        ['/FE/JavaScript基础/02-几种继承写法', '02-几种继承写法']
                    ]
                },
            ],
            '/ALGO/':[
                {
                    title: "数据结构与算法",
                    children: [
                        ['/ALGO/01-数组', '01-数组'],
                        ['/ALGO/02-二叉树','02-二叉树']
                    ]
                }
            ],
            '/心理认知/':[
                {
                    title:"心理认知",
                    children:[
                        ['/心理认知/01-摘抄木木','木木朋友圈']
                    ]
            }]
        }, // 侧边栏配置
        sidebarDepth: 2, // 侧边栏显示2级
    }
};