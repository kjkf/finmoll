<template>
    <h2 class="f-banner__title">
        <span class="f-banner__row">{{title[0]}}</span>
        <span class="f-banner__row">{{title[1]}}</span>
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