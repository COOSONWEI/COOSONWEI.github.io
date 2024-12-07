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
                    title: 'Weikkxin - 每天都要有收获',
                }
            },
            // 文章
            {
                path: '/article',
                component:
                    () => import('@/views/Article/index.vue'),
                name: 'article',
                meta: {
                    title: '文章详情',
                }
            },
        ]
    },

]