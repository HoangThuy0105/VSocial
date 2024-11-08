import { login, register, logout } from '@/service/authService';

const authModule = {
  namespaced: true,
  state: {
    user: null,
    isAuthenticated: false,
    authError: null
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
      state.isAuthenticated = true;
    },
    setAuthError(state, error) {
      state.authError = error;
    },
    clearAuth(state) {
      state.user = null;
      state.isAuthenticated = false;
      state.authError = null;
    }
  },
  actions: {
    async login({ commit }, { username, password }) {
      try {
        const response = await login(username, password);
        commit('setUser', response.data.user);
        commit('setAuthError', null); // Reset lỗi khi đăng nhập thành công
      } catch (error) {
        commit('setAuthError', error.response.data.message || 'Đăng nhập thất bại');
      }
    },
    async register({ commit }, { username, password }) {
      try {
        const response = await register(username, password);
        commit('setUser', response.data.user); // Nếu đăng ký thành công, lưu thông tin người dùng
        commit('setAuthError', null); // Reset lỗi khi đăng ký thành công
      } catch (error) {
        commit('setAuthError', error.response.data.message || 'Đăng ký thất bại');
      }
    },
    async logout({ commit }) {
      await logout();
      commit('clearAuth');
    }
  },
  getters: {
    isAuthenticated: (state) => state.isAuthenticated,
    authError: (state) => state.authError,
  }
};

export default authModule;
