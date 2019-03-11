import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// route-level code splitting
const Home = () => import('@/views/home/List.vue')
const ArticleDetail = () => import('@/views/detail')
const Categories = () => import('@/views/categories')
const Archives = () => import('@/views/archives')
export function createRouter() {
    return new Router({
        mode: 'history',
        fallback: false,
        scrollBehavior: () => ({ y: 0 }),
        routes: [
            { path: '/', component: Home },
            { path: '/article/detail/:id', component: ArticleDetail },
            { path: '/category/:category', component: Categories },
            { path: '/archive/:timeline', component: Archives }
        ],
    })
}
