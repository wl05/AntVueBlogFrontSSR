import _request from '@/util/request'

export function countCategotres() {
    return _request.get('/categories/count')
}
