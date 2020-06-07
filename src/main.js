import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import { library as faLibrary } from '@fortawesome/fontawesome-svg-core';
import {
  faSearch,
  faPen,
  faChair,
  faCaretUp,
  faCaretDown,
} from '@fortawesome/free-solid-svg-icons';
import {
  faThumbsUp,
  faEye,
  faHandPointUp,
} from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// Set up FontAwesome

faLibrary.add(
  faSearch,
  faPen,
  faThumbsUp,
  faChair,
  faEye,
  faCaretUp,
  faCaretDown,
  faHandPointUp,
);
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

import '@/assets/css/global.css';

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
