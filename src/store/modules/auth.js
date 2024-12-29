const state = {
    token: localStorage.getItem("token") || null,
    accountId: null,
};

const getters = {
    getToken: state => state.token,
    getAccountId: state => state.accountId,
};

const actions = {
    login({ commit }, { token, accountId }) {
        commit('setToken', token.token);
        localStorage.setItem("token", token.token);
        commit('setAccountId', accountId);
    },
    logout({ commit }) {
        commit('clearAuth');
        localStorage.removeItem('token');
    },
}

const mutations = {
    setToken(state, token) {
        state.token = token;
    },
    clearAuth(state) {
        state.token = null;
    },
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
};
