import { countCategotres } from '@/api/category'
import { getArticlesByCategory } from '@/api/article'

const category = {
    state: {
        categories: [],
        categoryArticle: []
    },
    mutations: {
        SAVE_CATEGORIES: (state, categories) => {
            state.categories = categories
        },
        SAVE_CATEGORY_ARTICLE: (state, categoryArticle) => {
            state.categoryArticle = categoryArticle
        }
    },
    actions: {
        FETCH_CATEGORIES: ({ commit, dispatch, state }) => {
            return new Promise((resolve, reject) => {
                countCategotres()
                    .then(response => {
                        const data = response.data
                        if (data.code) {
                            reject(response)
                        } else {
                            commit('SAVE_CATEGORIES', data.data)
                            resolve(response)
                        }
                    })
                    .catch(error => {
                        reject(error)
                    })
            })
        },
        GET_ARTICLE_BY_CATEGORY: ({ commit, dispatch, state }, id) => {
            return new Promise((resolve, reject) => {
                getArticlesByCategory(id)
                    .then(response => {
                        const data = response.data
                        if (data.code) {
                            reject(response)
                        } else {
                            commit('SAVE_CATEGORY_ARTICLE', data.data)
                            resolve(response)
                        }
                    })
                    .catch(error => {
                        reject(error)
                    })
            })
        },
    },
}

export default category
