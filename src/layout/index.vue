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
.fade-enter-active, .fade-leave-active
    transition all .2s ease
.fade-enter, .fade-leave-active
    opacity 0

</style>
