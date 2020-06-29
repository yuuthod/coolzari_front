import Vue from 'vue';
import Vuex from 'vuex';
import header from './modules/header.js';
import review from './modules/review.js';
import user from './modules/user.js';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    header,
    review,
    user,
  },
});
