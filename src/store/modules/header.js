const state = () => ({
  isNavShow: false,
});

const getters = {
  getIsNavShow(state) {
    return state.isNavShow;
  },
};

const mutations = {
  navSetFalse(state) {
    state.isNavShow = false;
  },
  navClickHandler(state) {
    state.isNavShow = !state.isNavShow;
  },
};

export default {
  namespaced: true, // 모듈 독립
  state,
  getters,
  mutations,
};
