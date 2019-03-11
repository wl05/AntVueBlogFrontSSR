import _request from '@/util/request'

export function fetchArticle(params) {
    return _request.get('/articles', params)
}

export function getArticleDetail(id) {
    return _request.get(`/articles/${id}`)
}

export function getArticlesByCategory(id) {
    return _request.get(`/articles/category/${id}`)
}

export function fetchArchives() {
    return _request.get('/archives')
}

export function getArticlesByArchives(timeline) {
    return _request.get(`/archives/:${timeline}`)
}
