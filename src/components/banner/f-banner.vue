<template>
    <div class="f-banner-container container">
        <f-banner-title :title="banner.title" />
        <f-banner-subtitle :subtitle="banner.subtitle" />
        <div class="f-feature-wrap">
            <f-banner-feature v-for="(f, i) in banner.features" :key="i"
                :featureTitle="f.title"
                :featureNum="f.num"
                :featureColor="banner.color"
            />
        </div>
    </div>
</template>

<script>
    import fBannerTitle from './f-banner-title';
    import fBannerSubtitle from './f-banner-subtitle';
    import fBannerFeature from './f-banner-feature';
    export default {
        name: "f-banner",
        components: {
            fBannerTitle, fBannerSubtitle, fBannerFeature
        },
        props: {
            banner: Object
        }
    }
</script>

<style scoped>

</style>