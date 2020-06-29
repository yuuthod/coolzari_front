import {
  fetchReviewList,
  fetchOptionList,
  fetchAverageRating,
} from '@/api/index.js';

const state = {
  optionList: [],
  reviewList: [],
  averageRating: 0,
};

const getters = {
  getOptionList(state) {
    return state.optionList;
  },
  getReviewList(state) {
    return state.reviewList;
  },
  getAverageRating(state) {
    return state.averageRating;
  },
};

const mutations = {
  SET_OPTION_LIST(state, optionList) {
    state.optionList = optionList;
  },
  SET_REVIEW_LIST(state, reviewList) {
    state.reviewList = reviewList;
  },
  SET__AVERAGE_RATING(state, averageRating) {
    state.averageRating = averageRating;
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
  FETCH_AVERAGE_RATING({ commit }) {
    commit('SET__AVERAGE_RATING', fetchAverageRating());
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
