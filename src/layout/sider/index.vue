<template>
    <div class="sider">
        <div class="sider__left">
            <Profile />
            <Categories />
            <NewestArticles />
        </div>
        <div class="sider__right">
            <Archives />
        </div>
    </div>
</template>
<script>
import Profile from './profile'
import Archives from './archives'
import Categories from './categories'
import NewestArticles from './newestArticles'
export default {
    components: {
        Profile,
        Archives,
        Categories,
        NewestArticles,
    },
}
</script>
<style lang="stylus">
.sider
    color #000
    width 800px
    padding 10px 50px
    box-sizing border-box
    .sider__left
        float left
        width 45%
    .sider__right
        float right
        width 45%
@media (max-width 1600px)
    .sider
        width 500px
        .sider__left
            float none
            width 100%
        .sider__right
            float none
            width 100%
@media (max-width: 960px)
    .sider
        padding 0
        width 100%
.sider:after
    content ''
    height 0
    display block
    clear both
</style>
