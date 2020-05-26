import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import { library as faLibrary } from '@fortawesome/fontawesome-svg-core';
import { faSearch, faPen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// Set up FontAwesome

faLibrary.add(faSearch, faPen);
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

import '@/assets/css/global.css';

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
