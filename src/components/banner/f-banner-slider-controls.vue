<template>
    <div class="f-slider-controls">
        <f-banner-button class="f-banner-control" :title="banner.buttons.title1" :bg="defaultColor" />
        <div class="f-banner-or f-banner-control">или</div>
        <f-banner-button class="f-banner-control" :title="banner.buttons.title2" :bg="banner.color" />
    </div>
</template>

<script>
    import fBannerButton from './f-banner-slider-button'
    export default {
        name: "bannerSliderControls",
        components: {
            fBannerButton
        },
        props: {
            banner: Object
        },
        data() {
            return {
                defaultColor: '#43AC34'
            }
        }
    }
</script>

<style scoped>

</style>