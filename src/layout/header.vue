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
    </div>
</template>
<script>
</script>
<style lang="stylus">
.header
    height 80px
    padding-left 50px
    .header__inner
        box-sizing border-box
        margin 0px auto
        text-shadow -2px 2px 3px #888, 2px 2px 10px #fff
        color #000
        height 80px
        line-height 80px
    a
        font-size 30px
        line-height 30px
        transition color .15s ease
        display inline-block
        vertical-align middle
        letter-spacing .075em
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
    .header
        padding-left 0
        .header__inner
            display flex
            justify-content center
            align-items center
</style>
