import { getArticlesByArchives } from '@/api/article'

const category = {
    state: {
        archivesArticle: []
    },
    mutations: {
        SAVE_ARCHIVES_ARTICLE: (state, archivesArticle) => {
            state.archivesArticle = archivesArticle
        }
    },
    actions: {
        GET_ARTICLE_BY_ARCHIVES: ({ commit, dispatch, state }, timeline) => {
            return new Promise((resolve, reject) => {
                getArticlesByArchives(timeline)
                    .then(response => {
                        const data = response.data
                        if (data.code) {
                            reject(response)
                        } else {
                            commit('SAVE_ARCHIVES_ARTICLE', data.data)
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
