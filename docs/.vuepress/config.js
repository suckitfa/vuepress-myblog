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
            }
        ],
    } // 侧边栏配置
}