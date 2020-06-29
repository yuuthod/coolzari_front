import { fetchReviewList } from '@/api/index.js';
import { fetchOptionList } from '@/api/index.js';

const state = {
  optionList: [],
  reviewList: [],
};

const getters = {
  getOptionList(state) {
    return state.optionList;
  },
  getReviewList(state) {
    return state.reviewList;
  },
};

const mutations = {
  SET_OPTION_LIST(state, optionList) {
    state.optionList = optionList;
  },
  SET_REVIEW_LIST(state, reviewList) {
    state.reviewList = reviewList;
  },
};

const actions = {
  // async await
  FETCH_OPTION_LIST({ commit }) {
    commit('SET_OPTION_LIST', fetchOptionList());
  },
  FETCH_REVIEW_LIST({ commit }) {
    commit('SET_REVIEW_LIST', fetchReviewList());
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
