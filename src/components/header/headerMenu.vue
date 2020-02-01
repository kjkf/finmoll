<template>
    <ul class="f-menu f-header__menu">
        <li class="f-menu__item" v-for="item in menuItems" :key="item"><a href="#" class="f-menu__link">{{item}}</a></li>
    </ul>
</template>

<script>
    export default {
        name: "header__menu",
        data() {
            return {
                menuItems: ['Рассрочка на покупки', 'Займ в сети kari', 'Займ на дому', 'Погашение']
            }
        }
    }
</script>

<style scoped>

</style>