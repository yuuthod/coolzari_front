import { fetchUserList, fetchMyReviewList } from '@/api/index.js';

const state = {
  userList: [],
  myReviewList: [],
};

const getters = {
  getUserList(state) {
    return state.userList;
  },
  getMyReviewList(state) {
    return state.myReviewList;
  },
};

const mutations = {
  SET_USER_LIST(state, userList) {
    state.userList = userList;
  },
  SET_MY_REVIEW_LIST(state, myReviewList) {
    state.myReviewList = myReviewList;
  },
};

const actions = {
  //async await
  FETCH_USER_LIST({ commit }) {
    commit('SET_USER_LIST', fetchUserList());
  },
  FETCH_MY_REVIEW_LIST({ commit }) {
    commit('SET_MY_REVIEW_LIST', fetchMyReviewList());
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
