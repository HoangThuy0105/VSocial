import axios from 'axios';

const state = {
  token: null,
  user: null,
};

const getters = {
  isLoggedIn: state => !!state.user,
  userName: state => state.user ? state.user.name : '',
};

const actions = {
  async login({ commit }, credentials) {
    try {
      const response = await axios.post('/api/ ', credentials);
      commit('setToken', response.data.token);
      commit('setUser', response.data.user);
    } catch (error) {
      console.error('Login failed:', error);
    }
  },
  async logout({ commit }) {
    try {
      await axios.post('/ ');
      commit('clearAuth');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  },
};

const mutations = {
  setToken(state, token) {
    state.token = token;
  },
  setUser(state, user) {
    state.user = user;
  },
  clearAuth(state) {
    state.token = null;
    state.user = null;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
