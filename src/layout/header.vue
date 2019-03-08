<template>
    <div id="app">
        <header class="header">
            <nav class="header__inner">
                <router-link to="/" exact>
                    汪乐的个人网站
                </router-link>
                <!--<el-button class="header__search-btn">搜索</el-button>-->
                <!--<el-input-->
                    <!--class="header__search"-->
                    <!--v-model="input"-->
                    <!--placeholder="请输入内容"-->
                <!--&gt;</el-input>-->
            </nav>
        </header>
        <hr/>
    </div>
</template>
<script>
export default {
    data() {
        return {
            input: '',
        }
    },
}
</script>
<style lang="stylus">
.header
    height 55px
    /*border-bottom 1px solid #eee*/
    padding-left 80px
    .header__inner
        box-sizing border-box
        margin 0px auto
        padding 15px 5px
    a
        font-size 24px
        line-height 24px
        transition color .15s ease
        display inline-block
        vertical-align middle
        /*font-weight 300*/
        letter-spacing .075em
        margin-right 1.8em
        &:hover
            /*color #fff*/
        &.router-link-active
            /*color #fff*/
            /*font-weight 300*/
        &:nth-child(6)
            margin-right 0
.header__logo
    width 24px
    margin-right 10px
    display inline-block
    vertical-align middle
.el-input.header__search
    width 500px
    float right
    top: -7.5px
    margin-right 10px
.el-button.header__search-btn
    float right
    margin-top -7.5px
    background-color transparent
    border 1px solid #eee
.el-button.header__search-btn:hover
    color #eee
    background-color transparent
    border-color #eee
.header__search .el-input__inner
    background-color transparent
    border 1px solid #eee
@media (max-width 860px)
    .header .header__inner
        padding 15px 30px

@media (max-width 600px)
    .header
        .header__inner
            padding 15px
        a
            margin-right 1em
</style>
