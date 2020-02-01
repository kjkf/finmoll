import Vue from 'vue';

import VueAwesomeSwiper from 'vue-awesome-swiper2'
import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.min.css';

// require styles
import 'swiper/dist/css/swiper.css'
import App from './App.vue';

Vue.config.productionTip = false;
Vue.use(VueAwesomeSwiper);
Vue.use(VueMaterial);

new Vue({
  render: h => h(App),
}).$mount('#app');
