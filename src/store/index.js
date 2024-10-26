import { createStore } from 'vuex';

export default createStore({
  
  state: {
    darkMode: false, 
  },
  mutations: {
    setDarkMode(state, isDarkMode) {
      state.darkMode = isDarkMode; 
    },
  },
  actions: {
    toggleDarkMode({ commit, state }) {
      commit('setDarkMode', !state.darkMode); 
    },
  },
  getters: {
    isDarkMode: state => state.darkMode, 
  }
});
