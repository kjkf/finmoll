<template>
    <button type="button" class="f-banner-button" :style="{background: bg}">{{title}}</button>
</template>

<script>
    export default {
        name: "f-banner-button",
        props: {
            title: String,
            bg: String
        }
    }
</script>

<style scoped>

</style>