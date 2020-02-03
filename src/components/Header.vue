<template>
    <div class="f-header">

            <div class="f-row">
                <div class="f-header__inner">
                <header-nav/>
                <div class="f-location f-header__location">
                    <div class="f-ic f-ic--location"></div>
                    <div class="f-location__item">Москва</div>
                </div>
                <ul class="f-nav f-nav--right f-header__nav">
                    <li class="f-nav__item"><a href="#" class="f-nav__link">Доступные варианты погашения</a></li>
                    <li class="f-nav__item"><a href="#" class="f-nav__link">Все баннеры</a></li>
                </ul>
                <div class="f-contact f-header__contact">
                    <div class="f-contact__text">Бесплатно по России, 24/7</div>
                    <a href="#" class="f-contact__phone">8 800 200-10-63</a>
                </div>
                </div>
            </div>
            <div class="f-row">
                <div class="f-header__inner">
                <div class="f-logo f-header__logo"><a href="#"><img src="../assets/images/logo.svg" alt="#"></a></div>
                <header-menu/>
                <div class="f-uProfile">
                    <ul class="f-uProfile-menu">
                        <li class="f-uProfile-menu__item"><a href="#" class="f-ic f-ic--phone"></a></li>
                        <li class="f-uProfile-menu__item"><a href="#" class="f-ic f-ic--user"></a></li>
                    </ul>
                    <!--<div class="f-ic f-ic&#45;&#45;phone"></div>
                    <div class="f-ic f-ic&#45;&#45;user"></div>-->
                    <a href="#" class="f-uProfile__item">Личный кабинет</a>
                </div>
                </div>
            </div>

    </div>
</template>

<script>
    import headerMenu from './header/headerMenu';
    import headerNav from './header/headerNav';

    export default {
        components: {
            headerMenu, headerNav
        }
    }
</script>