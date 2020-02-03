<template>
    <div class="f-banner-container container">
        <banner-title :title="banner.title" />
        <banner-subtitle :subtitle="banner.subtitle" />
        <div class="f-feature-wrap">
            <banner-feature v-for="(f, i) in banner.features" :key="i"
                :featureTitle="f.title"
                :featureNum="f.num"
                :featureColor="banner.color"
            />
        </div>
    </div>
</template>

<script>
    import bannerTitle from './banner/bannerTitle';
    import bannerSubtitle from './banner/bannerSubtitle';
    import bannerFeature from './banner/bannerFeature';
    export default {
        name: "Banner",
        components: {
            bannerTitle, bannerSubtitle, bannerFeature
        },
        props: {
            banner: Object
        }
    }
</script>

<style scoped>

</style>