import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/sass/main.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import 'font-awesome/css/font-awesome.min.css';





Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
