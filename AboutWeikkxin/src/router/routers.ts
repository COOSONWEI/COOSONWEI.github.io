export const constantRouter = [
    {
        path: '/',
        name: 'layout',
        component: () => import('@/views/Layout/index.vue'),
        children: [
            // 首页
            {
                path: '',
                component: () => import('@/views/Home/index.vue'),
                name: 'home',
                meta: {
                    title: 'Weikkxin - 二次元技术博客',
                }
            },
            // 博客文章列表
            {
                path: '/articles',
                component: () => import('@/views/Articles/index.vue'),
                name: 'articles',
                meta: {
                    title: '博客文章',
                }
            },
            // 文章详情页
            {
                path: '/article/:id',
                component: () => import('@/views/Article/index.vue'),
                name: 'article',
                meta: {
                    title: '文章详情',
                }
            },
            // 二次元画廊
            {
                path: '/gallery',
                component: () => import('@/views/Gallery/index.vue'),
                name: 'gallery',
                meta: {
                    title: '二次元画廊',
                }
            },
            // 收藏的动漫
            {
                path: '/anime',
                component: () => import('@/views/Anime/index.vue'),
                name: 'anime',
                meta: {
                    title: '我的收藏',
                }
            },
            // 关于我
            {
                path: '/about',
                component: () => import('@/views/About/index.vue'),
                name: 'about',
                meta: {
                    title: '关于我',
                }
            },
        ]
    },
]