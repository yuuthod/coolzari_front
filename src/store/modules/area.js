import { fetchAreaList } from '@/api/index.js';

const state = {
  areaList: [],
};

const getters = {
  getAreaList(state) {
    return state.areaList;
  },
};

const mutations = {
  SET_AREA_LIST(state, areaList) {
    state.areaList = areaList;
  },
};

const actions = {
  //async await
  FETCH_AREA_LIST({ commit }) {
    commit('SET_AREA_LIST', fetchAreaList());
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
