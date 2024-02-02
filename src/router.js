import { createWebHistory, createRouter } from "vue-router"

const routes = [
    {
        path: "/",
        alias: "/articles",
        name: "articles",
        component: () => import("./components/ArticlesList.vue")
    },
    {
        path: "/add",
        name: "add",
        component: () => import("./components/AddArticle.vue")
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router