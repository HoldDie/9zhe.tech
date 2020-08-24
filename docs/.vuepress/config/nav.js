module.exports = [
    {text: '首页', link: '/'},
    {
        text: '前端',
        link: '/frontend/',  //目录页，vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
        items: [
            {
                text: '前端基础', items: [
                    {text: 'HTML', link: '/pages/8309a5b876fc95e3/'},
                    {text: 'CSS', link: '/pages/0a83b083bdf257cb/'},
                    {text: 'JavaScript', link: '/pages/8143cc480faf9a11/'}, // 注意link结尾有斜杠和没有斜杠的区别
                    {text: 'Vue', link: '/pages/802a1ca6f7b71c59/'},
                ]
            },
            {
                text: '学习笔记', items: [
                    {text: '《JavaScript教程》笔记', link: '/note/javascript/'},
                    {text: '《JavaScript高级程序设计》笔记', link: '/note/js/'},
                    {text: '《ES6 教程》笔记', link: '/note/es6/'},
                    {text: '《Vue》笔记', link: '/note/vue/'},
                    {text: '《TypeScript 从零实现 axios》', link: '/note/typescript-axios/'},
                    {text: '小程序笔记', link: '/note/wx-miniprogram/'},
                ]
            }
        ]
    }, {
        text: '后端',
        link: '/backend/',
        items: [
            {text: 'Go', link: '/pages/efqvhyl29qjrcdzs/'},
            {text: 'MIT-6824', link: '/pages/seas6nequoow3xia/'},
        ]
    }, {
        text: '架构',
        link: '/arch/',
        items: [
            {text: '算法与数据结构', link: '/pages/aiteeh2uph9veway/'},
            {text: '面向对象', link: '/pages/uj8chu4zieg4vahz/'},
            {text: '设计原则', link: '/pages/eeredaefie0oj7ni/'},
            {text: '代码整洁', link: '/pages/wiesohmoovaik4ee/'},
            {text: '重构', link: '/pages/xieghaungaesooj9/'},
            {text: '设计模式', link: '/pages/phau4foo4xaithep/'},
            {text: '编程范式', link: '/pages/iefoh9ahwei0fein/'},
            {text: '架构风格', link: '/pages/ai6chingoheewoo5/'},
            {text: '架构模式', link: '/pages/ohh2aim1nu1sies5/'},
        ]
    }, {
        text: '读书',
        link: '/book/',
        items: [
            {text: '学习', link: '/pages/iek1woy2sae7gije/'},
            {text: '技术', link: '/pages/ree0ua6ighoof1ie/'},
            {text: '人文', link: '/pages/uha1io6adielaeli/'},
        ]
    },
    {text: '关于', link: '/about/'},
    {
        text: '收藏',
        link: '/pages/beb6c0bd8a66cea6/',
        items: [
            {text: '网站', link: '/pages/beb6c0bd8a66cea6/'},
            {text: '资源', link: '/pages/eee83a9211a70f9d/'},
            {text: 'Vue资源', link: '/pages/12df8ace52d493f6/'},
        ]
    },
    {
        text: '索引',
        link: '/archives/',
        items: [
            {text: '分类', link: '/categories/'},
            {text: '标签', link: '/tags/'},
            {text: '归档', link: '/archives/'},
        ]
    }
]
