<template>
    <div class="f-menu_outer">
        <button type="button" class="btn btn-gamburg" id="btn_gamburg" @click="toggleMenu"></button>
        <div class="f-menu_wrap" :class="{'menuShow': isMenuShow}">
            <button type="button" class="btn btn-close" id="btn_close" @click="closeMenu"></button>
            <ul class="f-menu f-header__menu">
                <li class="f-menu__item" v-for="item in menuItems" :key="item"><a href="#" class="f-menu__link">{{item}}</a></li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "f-header-menu",
        data() {
            return {
                menuItems: ['Рассрочка на покупки', 'Займ в сети kari', 'Займ на дому', 'Погашение'],
                isMenuShow: false
            }
        },
        methods: {
            toggleMenu() {
                this.isMenuShow = !this.isMenuShow;
            },
            closeMenu() {
                this.isMenuShow = false;
            }
        }
    }
</script>

<style scoped>
    .menuShow {
        display: block;
    }
</style>