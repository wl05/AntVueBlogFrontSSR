import _request from '@/util/request'

export function fetchArticle(params) {
    return _request.get('/articles', params)
}

export function getArticleDetail(id) {
    return _request.get(`/articles/${id}`)
}

export function getArticlesByCategory(category, pageSize = 0, pageLimit = 0) {
    return _request.get(`/articles/category/${category}?pageSize=${pageSize}&pageLimit=${pageLimit}`)
}

export function fetchArchives() {
    return _request.get('/archives')
}

export function getArticlesByArchives(timeline, pageSize = 0, pageLimit = 0) {
    return _request.get(`/archives/${timeline}?pageSize=${pageSize}&pageLimit=${pageLimit}`)
}
