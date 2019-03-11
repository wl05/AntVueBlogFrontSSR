<template>
    <div class="container">
        <Header />
        <div class="container__content">
            <div class="container__article">
                <transition name="fade" mode="out-in">
                    <router-view></router-view>
                </transition>
            </div>
            <Sider />
        </div>
    </div>
</template>

<script>
import Header from './header'
import Sider from './sider'
export default {
    components: {
        Header,
        Sider,
    },
}
</script>
<style lang="stylus" scoped>
.container__content
    display flex
    flex-flow row

.container__content>div:first-child
    flex 1
.container__article
    border 1px solid transparent
    margin 10px 0px 10px 50px
    box-shadow 0px 1px 3px #888
    border-radius 5px
    padding 0px 20px
.fade-enter-active, .fade-leave-active
    transition all .2s ease
.fade-enter, .fade-leave-active
    opacity 0
@media (max-width: 960px)
    .container__content
        flex-flow column
    .container__article
        margin 0
    /*.container__article*/
        /*box-shadow none*/
</style>
