const state = {
    token: localStorage.getItem("token") || null,
    accountId: localStorage.getItem("idx") || null,
};

const getters = {
    getToken: state => state.token,
    getAccountId: state => state.accountId,
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
