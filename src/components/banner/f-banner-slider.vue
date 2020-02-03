<template>
    <md-card class="f-md-card">
        <md-card-media>
            <swiper :options="swiperOption" @slideChange="changeSwiperIndex" ref="mySwiper">
                <swiper-slide class="f-banner" :class="'f-banner--' + (i + 1)" v-for="(banner, i) in banners" :key="i">
                        <f-banner :banner="banner"/>
                </swiper-slide>
            </swiper>
        </md-card-media>
        <md-card-actions class="container">
            <div class="md-subhead f-banner-slider-buttons-wrapper">
                <f-banner-slider-controls :banner="currentBanner"/>
                <div class="swiper-pagination swiper-pagination-bullets" slot="pagination"></div>
            </div>
        </md-card-actions>
    </md-card>
</template>

<script>
    import fBanner from './f-banner';
    import fBannerSliderControls from './f-banner-slider-controls';
    import data from '../../assets/data';

    export default {
        name: "f-banner-slider",
        components: {
          fBanner, fBannerSliderControls
        },
        data() {
            return {
                currentIndex: 0,
                swiperOption: {
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true,
                        renderBullet(index, className) {
                            return `<span class="${className} swiper-pagination-bullet-custom"></span>`
                        }
                    }
                },
                banners: data
            }
        },
        computed: {
            currentBanner() {
                return this.banners[this.currentIndex];
            }
        },
        methods: {
            changeSwiperIndex() {
                this.currentIndex = this.$refs.mySwiper.swiper.activeIndex;
                return this.$refs.mySwiper.swiper.activeIndex;
            }
        }
    }
</script>