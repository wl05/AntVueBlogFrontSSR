<template>
    <li class="article-item">
        <span class="article-item__title">
            <a @click="goToDetailPage(item._id)"> {{ item.title }} </a>
        </span>
        <div class="article-item__info">
            <span class="article-item__time">
                {{ item.publishAt | timeAgo }}
            </span>
            <a
                class="article-item__category"
               @click="$router.push({ path: `/category/${item.category._id}` })"
            >分类: {{ item.category.name }}</a
            >
            <span>阅读{{ item.viewCount }}次</span>
        </div>
    </li>
</template>

<script>
import { timeAgo } from '@/util/filters'
export default {
    name: 'article-item',
    props: ['item'],
    methods: {
        goToDetailPage(id) {
            this.$router.push({ path: `/article/detail/${id}` })
        },
    },
}
</script>

<style lang="stylus">
    .article-item
        padding 20px 0px 20px 0px
        margin 0 20px 0 40px
        position relative
        line-height 20px
        list-style-type square
        .article-item__title
            a
                color: #34495e
                text-decoration: none
                cursor pointer
                font-size 18px
        .article-item__info
            font-size: 0.85em
            color: #828282
            padding-top 10px
        .article-item__time
            margin-right 10px
        .article-item__category
            margin-right 10px
            cursor pointer
    @media (max-width: 960px)
        .article-item
            margin 0
            display flex
            flex-direction column
            /*justify-content center*/
            align-items center
</style>
