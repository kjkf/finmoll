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
                banners: [
                    {
                        title: 'Рассрочка в магазинах kari и kari KIDS по всей России',
                        subtitle: 'Забирайте сейчас — платите потом!',
                        color: '#991E66',
                        features: [
                            {
                                title: 'покупки',
                                num: 'от 2 500 ₽'
                            },
                            {
                                title: 'НА СРОК',
                                num: 'до 6 мес'
                            },
                            {
                                title: 'ПЕРЕПЛАТА',
                                num: '0%'
                            }
                        ],
                        buttons: {
                            title1: 'Рассчитать сумму рассрочки',
                            title2: 'Подробнее о рассрочки'
                        }
                    },
                    {
                        title: 'Наличные за 15 минут для клиентов сети kari',
                        subtitle: 'Получайте займ быстро и просто!',
                        color: '#1990FE',
                        features: [
                            {
                                title: 'Сумма займа',
                                num: 'до 50 000 ₽'
                            },
                            {
                                title: 'НА СРОК',
                                num: 'до 365 дней'
                            },
                            {
                                title: 'Платеж',
                                num: 'от 1 раз/мес'
                            }
                        ],
                        buttons: {
                            title1: 'Узнать лимит по займу',
                            title2: 'Подробнее о займе в сети kari'
                        }
                    },
                    {
                        title: 'Деньги не выходя из дома через агентскую сеть',
                        subtitle: 'Нужная сумма в день обращения',
                        color: '#6A24DB',
                        features: [
                            {
                                title: 'Сумма займа',
                                num: 'до 64 000 ₽'
                            },
                            {
                                title: 'НА СРОК',
                                num: '52 недели'
                            },
                            {
                                title: 'Платеж еженедельно',
                                num: 'от 166 ₽'
                            }
                        ],
                        buttons: {
                            title1: 'Отправить заявку на займ',
                            title2: 'Подробнее о займе на дому'
                        }
                    }
                ]
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