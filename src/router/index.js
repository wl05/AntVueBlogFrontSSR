import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// route-level code splitting
const ItemList = () => import('../views/ItemList.vue')

export function createRouter() {
    return new Router({
        mode: 'history',
        fallback: false,
        scrollBehavior: () => ({ y: 0 }),
        routes: [
            { path: '/top/:page(\\d+)?', component: ItemList },
            { path: '/', redirect: '/top' },
        ],
    })
}
