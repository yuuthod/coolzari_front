import { fetchUserList } from '@/api/index.js';

const state = {
  userList: [],
};

const getters = {
  getUserList(state) {
    return state.userList;
  },
};

const mutations = {
  SET_USER_LIST(state, userList) {
    state.userList = userList;
  },
};

const actions = {
  //async await
  FETCH_USER_LIST({ commit }) {
    commit('SET_USER_LIST', fetchUserList());
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
