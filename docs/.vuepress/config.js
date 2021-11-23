module.exports = {
    title: 'Guangyuan\'s blog',
    description: '广园的个人博客',
    head: [
        // 注入到当前页面的 HTML <head> 中的标签
        ['link', { rel: 'icon', href: '/img/logo.jpg' }],
    ],
    base: '/',
    markdown: {
        lineNumbers: true // 代码块显示行号
    },

    themeConfig: {
        theme: "vuepress-theme-reco",
        // 导航栏配置 顶部导航栏
        nav: [
            { text: 'FE-前端', link: '/前端基础/' },
        ],
        sidebar: renderSideBar(),
        sidebarDepth: 2, // 侧边栏显示2级
    },
    plugins: [
        ['@vuepress/back-to-top', true],
    ]
};


function renderSideBar() {
    return {
        '/前端基础/': [{
                title: "JavaScript基础",
                children: [
                    ['JavaScript基础/01-JavaScript数据类型及其相关问题.md', '01-JavaScript数据类型及其相关问题'],
                    ['JavaScript基础/02-数据拷贝.md', '02-数据拷贝'],
                    ['JavaScript基础/03-原型链和继承.md', '03-原型链和继承'],
                    ['JavaScript基础/04-JavaScript执行过程.md', '04-JavaScript执行过程'],
                    ['JavaScript基础/05-this指向.md', '05-this指向'],
                    ['JavaScript基础/06-闭包.md', '06-闭包'],
                    ['JavaScript基础/07-函数的柯里化.md', '07-函数的柯里化'],
                    ['JavaScript基础/08-深入数组.md', '08-深入数组'],
                    ['JavaScript基础/09-Promise.md', '09-Promise'],
                    ['JavaScript基础/10-aync&await.md', '10-aync&await'],
                    ['JavaScript基础/11-eventLoop.md', '11-eventloop'],
                    ['JavaScript基础/12-js模块化.md', '12-js的模块化'],
                    ['JavaScript基础/13-防抖和节流.md', '13-防抖和节流'],
                ]
            },
            {
                title: "ES6",
                children: [
                    ['ES6/01-let-const.md', '01-let-const'],
                    ['ES6/02-展开运算符.md', '02-展开运算符'],
                    ['ES6/03-set-map.md', '03-set-maps'],
                ]
            },
            {
                title: "计算机网络",
                children: [
                    ['计算机网络/01-HTTP的进化史', '01-HTTP的进化史'],
                    ['计算机网络/02-HTTP之缓存', '02-HTTP之缓存'],
                    ['计算机网络/03-HTTP', '03-HTTP'],
                ]
            },
            {
                title: "TypeScript",
                children: [
                    ['TypeScript/01-Typescript和Javascript.md', '01-Typescript和Javascript'],
                ]
            },
            {
                title: "认知",
                children: [
                    ['/前端基础/认知/01-学会如何学习.md', '01-学会如何学习'],
                ]
            },
            {
                title: 'web安全',
                children: [
                    ['web安全/常见的web安全问题.md', '01-常见的web安全']
                ]
            },
            {
                title: '算法和数据结构',
                children: [
                    // leetcode
                    ['算法和数据结构/01-数组中的问题.md', '01-数组中相关问题'],
                    ['算法和数据结构/leetcode.md', 'bobo老师玩转算法']

                ]
            },
            // 读牙羽的文章摘抄
            {
                title: '课程笔记',
                children: [
                    // leetcode
                    ['课程笔记/01-promsie的详解.md', '01-promsie的详解'],
                    ['课程笔记/读牙羽的文章摘抄', '读牙羽的文章摘抄'],
                    ['课程笔记/CDN.md', 'CDN'],
                    ['课程笔记/Vue 常考基础知识点.md', 'Vue 常考基础知识点'],
                    ['课程笔记/Vue 常考进阶知识点.md', 'Vue 常考进阶知识点']

                ]
            }
        ],
    } // 侧边栏配置
}