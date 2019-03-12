<template>
    <div class="category-list">
        <Pagination
            :total="total"
            :page-size="pageLimit"
            :current-page="pageSize"
            @handleCurrentChange="fetchArticle"
        />
        <transition :name="transition">
            <div class="category-list__items-container" :key="pageSize">
                <transition-group tag="ul" name="item">
                    <ArticleItem
                        v-for="item in categoryArticle"
                        :key="item._id"
                        :item="item"
                    />
                </transition-group>
            </div>
        </transition>
    </div>
</template>
<script>
import ArticleItem from '@/components/ArticleItem'
import Pagination from '@/components/Pagination'
export default {
    asyncData({ store, route }) {
        return store.dispatch('GET_ARTICLE_BY_CATEGORY', { pageSize: 1, pageLimit: 10, category: route.params.category })
    },
    name: 'article-list',
    components: { ArticleItem, Pagination },
    data() {
        return {
            transition: 'slide-right',
        }
    },
    computed: {
        categoryArticle() {
            return this.$store.state.category.categoryArticle
        },
        total() {
            return this.$store.state.category.total
        },
        pageSize() {
            return this.$store.state.category.pageSize
        },
        pageLimit() {
            return this.$store.state.category.pageLimit
        },
        from() {
            return this.$store.state.category.from
        },
    },
    methods: {
        fetchArticle(to = this.pageSize, from = this.from) {
            this.$bar.start()
            this.$store
                .dispatch('GET_ARTICLE_BY_CATEGORY', {
                    pageSize: to,
                    pageLimit: this.pageLimit,
                    category: this.$route.params.category
                })
                .then(() => {
                    this.transition =
                        from === -1
                            ? null
                            : to > from ? 'slide-left'
                            : 'slide-right'
                    this.$store.commit('SAVE_CATEGORIES_FROM', to)
                    this.$bar.finish()
                })
        },
    }
}
</script>
<style lang="stylus">
.category-list
    margin-top 20px
    margin-bottom 20px
.el-pagination.article-list__el-pagination
    display flex
    justify-content center
.category-list__items-container
    margin 30px 0
    width 100%
    transition all .5s cubic-bezier(.55, 0, .1, 1)
    ul
        list-style-type none
        padding 0
        margin 0
.slide-left-enter, .slide-right-leave-to
    opacity 0
    transform translate(30px, 0)

.slide-left-leave-to, .slide-right-enter
    opacity 0
    transform translate(-30px, 0)

.item-move, .item-enter-active, .item-leave-active
    transition all .5s cubic-bezier(.55, 0, .1, 1)

.item-enter
    opacity 0
    transform translate(30px, 0)

.item-leave-active
    position absolute
    opacity 0
    transform translate(30px, 0)
</style>
