<template>
    <div class="f-slider-controls">
        <banner-button class="f-banner-control" :title="banner.buttons.title1" :bg="defaultColor" />
        <div class="f-banner-or f-banner-control">или</div>
        <banner-button class="f-banner-control" :title="banner.buttons.title2" :bg="banner.color" />
    </div>
</template>

<script>
    import bannerButton from './bannerSliderButton'
    export default {
        name: "bannerSliderControls",
        components: {
            bannerButton
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