<template>
    <div class="article-detail" v-if="Object.keys(detail).length">
        <div class="article-detail__header">
            <h1 class="article-detail__title">{{ detail.title }}</h1>
            <span class="article-detail__publish-date">{{
                Number(detail.publishAt) | timeAgo
            }}</span>
            <a
                class="article-detail__category"
                @click="
                    $router.push({
                        path: `/categories/${detail.category._id}`,
                        query: { name: detail.category.name },
                    })
                "
            >分类:{{ detail.category.name }}</a
            >
            <span> 阅读次数 {{ detail.viewCount }} </span>
        </div>
        <div class="article-detail__content">
            <!--{{detail.htmlValue}}-->
            <Markdown :content="detail.htmlValue"/>
            <PaymentCode/>
        </div>
    </div>
</template>
<script>
import { timeAgo } from '@/util/filters'
import Markdown from '@/components/Markdown'
import PaymentCode from '@/components/PaymentCode'

export default {
    asyncData({ store, route }) {
        return store.dispatch('FETCH_ARTICLE_DETAIL', route.params.id)
    },
    components: {
        Markdown,
        PaymentCode,
    },
    computed: {
        detail() {
            return this.$store.state.detail.detail
        }
    },
}
</script>
<style lang="stylus">
    .article-detail
        .article-detail__header
            margin-bottom 20px
            padding: 20px
        .article-detail__publish-date
            margin-right 10px
        .article-detail__category
            margin-right 10px
</style>
