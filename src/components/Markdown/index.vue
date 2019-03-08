<template>
    <div class="class-container">
        <article class="markdown-body" id="write" ref="content">
        </article>
    </div>
</template>

<script>
import './style.css'
import './cover.css'
export default {
    props: ['content'],
    watch: {
        content() {
            this.$refs.content.innerHTML = this.content
        }
    },
    mounted() {
        this.$refs.content.innerHTML = this.content
    }
}
</script>

<style scoped>
    .class-container {
        padding: 15px;
    }
</style>
