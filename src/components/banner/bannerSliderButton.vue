<template>
    <button type="button" class="f-banner-button" :style="{background: bg}">{{title}}</button>
</template>

<script>
    export default {
        name: "banner__button",
        props: {
            title: String,
            bg: String
        }
    }
</script>

<style scoped>

</style>