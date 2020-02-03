<template>
  <div id="app">
    <Header/>
    <banner-slider/>
  </div>
</template>

<script>
import './assets/sass/style.sass'
import Header from './components/Header'
import BannerSlider from './components/BannerSlider'

export default {
  name: 'app',
  components: {
    Header, BannerSlider
  },
  data() {
    return {

    }
  }
}
</script>

<style scoped lang="sass">
    .f-banner--1
        background: #8E1C57
    .f-banner--2
        background: #4FB9E1
    .f-banner--3
        background: #6A24DB
</style>
