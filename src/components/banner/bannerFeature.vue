<template>
    <div class="f-feature">
        <span class="f-feature__title">{{featureTitle}}</span>
        <div class="f-feature__num" :style="{color: featureColor}">{{featureNum}}</div>
    </div>
</template>

<script>
    export default {
        name: "bannerFeature",
        props: {
            featureTitle: String,
            featureNum: String,
            featureColor: String
        }
    }
</script>

<style scoped>

</style>