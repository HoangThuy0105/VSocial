 
export default {
  namespaced: true,
  state: {
    profilePosts: [],
    homePosts: [],
  },
  mutations: {
    ADD_POST(state, post) {
      state.profilePosts.unshift(post); // để hiện lên trang cá nhân ng đó
      state.homePosts.unshift(post); // hiện thị trên trang chủ
    },
  },
  actions: {
    addPost({ commit }, post) {
      commit("ADD_POST", post);
    },
  },
};

  