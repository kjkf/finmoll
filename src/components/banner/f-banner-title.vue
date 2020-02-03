<template>
    <h2 class="f-banner__title">
        <span class="row row-1">{{title[0]}}</span>
        <span class="row row-2">{{title[1]}}</span>
    </h2>
</template>

<script>
    export default {
        name: "fBannerTitle",
        props: {
            title: Array
        }
    }
</script>

<style scoped>
    .row {
        display: inline-block;
    }
</style>