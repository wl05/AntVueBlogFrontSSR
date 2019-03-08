<template>
    <div class="category-list">
        <div class="category-list__items-container">
            <ArticleItem
                v-for="item in archivesArticle"
                :key="item._id"
                :item="item"
            />
        </div>
    </div>
</template>
<script>
import ArticleItem from '@/components/ArticleItem'
export default {
    asyncData({ store, route }) {
        return store.dispatch('GET_ARTICLE_BY_ARCHIVES', route.params.timeline)
    },
    name: 'article-list',
    components: { ArticleItem },
    data() {
        return {
            transition: 'slide-right',
        }
    },
    computed: {
        archivesArticle() {
            return this.$store.state.archives.archivesArticle
        }
    }
}
</script>
<style lang="stylus">
    .category-list
        margin-top 20px
        margin-bottom 20px

    .category-list__items-container
        margin 30px 0
        width 100%
        transition all .5s cubic-bezier(.55, 0, .1, 1)
        ul
            list-style-type none
            padding 0
            margin 0
</style>
