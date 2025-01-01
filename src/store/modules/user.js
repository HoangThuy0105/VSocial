const state = {
    resultSearchUser: [],
};

const getters = {
    getResultSearchUser: state => state.resultSearchUser,
};

const actions = {
    search({ commit }, resultSearchUser) {
        commit('setResultSearchUser', resultSearchUser);
    },
}

const mutations = {
    setResultSearchUser(state, resultSearchUser) {
        state.resultSearchUser = resultSearchUser;
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
};
