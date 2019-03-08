<template>
    <div class="pagination">
        <el-pagination
            background
            layout="prev, pager, next"
            :total="total"
            class="article-list__el-pagination"
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-size="pageSize"
        >
        </el-pagination>
    </div>
</template>

<script>
export default {
    props: ['total', 'page-size', 'current-page'],
    methods: {
        handleCurrentChange(val) {
            this.$emit('handleCurrentChange', val)
        },
    },
}
</script>

<style lang="stylus">
.pagination
    .article-list__el-pagination .el-pager .number
        background-color transparent
        border 1px solid #eee
        color inherit
        font-weight 300
    .article-list__el-pagination .el-pager .more
        background-color transparent
        border 1px solid #eee
        color inherit
        font-weight 300
    .el-pagination.is-background .el-pager li:not(.disabled).active {
        background-color: #eee;
        color: inherit;
    }
    .el-pagination.is-background .btn-next, .el-pagination.is-background .btn-prev
        background-color transparent
    .article-list__el-pagination .el-pager li.number:hover
        color: #eee
    .el-pagination.is-background .el-pager li:not(.disabled):hover
        color: #eee
    .el-pagination.is-background .btn-next, .el-pagination.is-background .btn-prev
        border 1px solid #eee
</style>
