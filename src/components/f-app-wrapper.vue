<template>
    <div class="f-app-wrapper">
        <Header/>
        <banner-slider/>
    </div>
</template>

<script>
    import Header from './header/f-header'
    import BannerSlider from './banner/f-banner-slider'
    export default {
        name: "f-app-wrapper",
        components: {
            Header, BannerSlider
        },
    }
</script>

<style scoped>

</style>