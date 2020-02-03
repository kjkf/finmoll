<template>
  <div id="app">
    <f-app-wrapper/>
  </div>
</template>

<script>
import fAppWrapper from './components/f-app-wrapper'
import './assets/sass/style.sass'


export default {
  name: 'app',
  components: {
    fAppWrapper
  },
  data() {
    return {

    }
  }
}
</script>

<style scoped lang="sass">

</style>
