import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'
import home from './modules/home'
import category from './modules/category'
import detail from './modules/detail'
import archives from './modules/archives'

Vue.use(Vuex)

export function createStore() {
    return new Vuex.Store({
        modules: {
            home,
            category,
            detail,
            archives
        },
        state: {
            activeType: null,
            itemsPerPage: 20,
            items: {
                /* [id: number]: Item */
            },
            users: {
                /* [id: string]: User */
            },
            lists: {
                top: [
                    /* number */
                ],
                new: [],
                show: [],
                ask: [],
                job: [],
            },
        },
        actions,
        mutations,
        getters,
    })
}
