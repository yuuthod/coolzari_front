import movieDB from '@/json/ReviewData.json';
import { fetchReviewList } from '@/api/index.js';

const state = {
  state: movieDB.data,
  reviewList: [],
};

const getters = {
  getReviewList(state) {
    return state.reviewList;
  },
};

const mutations = {
  SET_REVIEW_LIST(state, reviewList) {
    state.reviewList = reviewList;
  },
};

const actions = {
  // async await
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
