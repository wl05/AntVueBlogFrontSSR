<template>
    <div class="profile">
        <!--<p>个人简介</p>-->
        <img class="profile__photo" src="../../../assets/profile.jpeg" />
        <div class="profile__info">
            <div>汪乐,</div>
            <div>17年毕业于<a href="https://www.uestc.edu.cn/">电子科技大学，</a></div>
            <div></div>
            <div>邮箱：2929712050@qq.com</div>
            <a href="https://github.com/antbaobao">github</a>
        </div>
    </div>
</template>

<style lang="stylus" scoped>
.profile
    margin-top 45px
    padding 20px
    border-radius 10px
    border 1px solid transparent
    box-shadow: 0px 1px 3px #888;
    .profile__photo
        width 90px
        height 110px
        float left
        border 1px solid #eee
        border-radius 10px
        margin-right 10px
     a
         color: #828282
.profile:after
    content ''
    display block
    clear both
.profile__info
    font-size 0.9em
    line-height 1.5
</style>
