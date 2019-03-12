<template>
    <div class="archives-list">
        <Pagination
            :total="total"
            :page-size="pageLimit"
            :current-page="pageSize"
            @handleCurrentChange="fetchArticle"
        />
        <transition :name="transition">
            <div class="archives-list__items-container" :key="pageSize">
                <transition-group tag="ul" name="item">
                    <ArticleItem
                        v-for="item in archivesArticle"
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
        return store.dispatch('GET_ARTICLE_BY_ARCHIVES', { pageSize: 1, pageLimit: 10, timeline: route.params.timeline })
    },
    name: 'article-list',
    components: { ArticleItem, Pagination },
    data() {
        return {
            transition: 'slide-right',
        }
    },

    computed: {
        total() {
            return this.$store.state.archives.total
        },
        pageSize() {
            return this.$store.state.archives.pageSize
        },
        pageLimit() {
            return this.$store.state.archives.pageLimit
        },
        archivesArticle() {
            return this.$store.state.archives.archivesArticle
        },
        from() {
            return this.$store.state.archives.from
        },
    },
    methods: {
        fetchArticle(to = this.pageSize, from = this.from) {
            this.$bar.start()
            this.$store
                .dispatch('GET_ARTICLE_BY_ARCHIVES', {
                    pageSize: to,
                    pageLimit: this.pageLimit,
                    timeline: this.$route.params.timeline
                })
                .then(() => {
                    this.transition =
                        from === -1
                            ? null
                            : to > from ? 'slide-left'
                            : 'slide-right'
                    this.$store.commit('SAVE_ARCHIVES_FROM', to)
                    this.$bar.finish()
                })
        },
    },
}
</script>
<style lang="stylus">
.archives-list
    margin-top 20px
    margin-bottom 20px
.el-pagination.article-list__el-pagination
    display flex
    justify-content center
.archives-list__items-container
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
