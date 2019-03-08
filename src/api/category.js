import _request from '@/util/request'

export function getList() {
    return _request.get('/categories')
}

export function countCategotres() {
    return _request.get('/categories/count')
}
