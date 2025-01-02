const state = {
    token: localStorage.getItem("token") || null,
    accountId: localStorage.getItem("idx") || null,
    userData: {}
};

const getters = {
    getToken: state => state.token,
    getAccountId: state => state.accountId,
    getUserData: state => state.userData
};

const actions = {
    login({ commit }, { token, accountId }) {
        commit('setToken', token);
        localStorage.setItem("token", token);
        commit('setAccountId', accountId);
        localStorage.setItem("idx", accountId);
    },
    logout({ commit }) {
        commit('clearAuth');
        localStorage.removeItem('token');
        localStorage.removeItem("idx");
    },
    setUserData({ commit }, userData) {
        commit('setUserData', userData);
    }
}

const mutations = {
    setToken(state, token) {
        state.token = token;
    },
    setAccountId(state, accountId) {
        state.accountId = accountId;
    },
    setUserData(state, userData) {
        state.userData = userData;
    },
    clearAuth(state) {
        state.token = null;
        state.accountId = null;
    },
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
};
