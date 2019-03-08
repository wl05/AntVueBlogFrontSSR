<template>
    <div id="app">
        <Layout />
    </div>
</template>
<script>
import Layout from './layout'

export default {
    name: 'App',
    components: {
        Layout,
    },
}
</script>

<style lang="stylus">
body
    font-family -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    font-size 15px
    background url(./assets/bg-canvas_bg.jpg) #fff;
    margin 0
    color #34495e
    overflow-y scroll
    /*font-weight 300*/
a
    color #34495e
    text-decoration none

.logo
    width 24px
    margin-right 10px
    display inline-block
    vertical-align middle
</style>
