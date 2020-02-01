<template>
    <ul class="f-nav f-header__nav">
        <li class="f-nav__item" v-for="item in navs" :key="item"><a href="#" class="f-nav__link">{{item}}</a></li>
    </ul>
</template>

<script>
    export default {
        name: "header__nav",
        data() {
            return {
                navs: ['О компании', 'Вопросы и ответы', 'Магазины kari', 'Контакты']
            }
        }
    }
</script>

<style scoped>

</style>