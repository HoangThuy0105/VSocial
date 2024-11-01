const state = {
  darkMode: false,
};

const mutations = {
  setDarkMode(state, isDarkMode) {
    state.darkMode = isDarkMode;
  },
};

const actions = {
  toggleDarkMode({ commit, state }) {
    commit('setDarkMode', !state.darkMode);
  },
};

const getters = {
  isDarkMode: (state) => state.darkMode,
};

export default {
  namespaced: true,  
  state,
  mutations,
  actions,
  getters,
};
