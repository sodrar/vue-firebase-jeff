import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: '/',
        alias: '/articles',
        name: 'articles',
        component: () => {
            import('./src/components/ArticlesList.vue')
        }
    },
    {
        path: '/add',
        name: 'add',
        component: () => {
            import('./src/components/AddArticle.vue')
        }
    }
]

const router = createRouter({
    history: createWebHistory,
    routes
})

export default router