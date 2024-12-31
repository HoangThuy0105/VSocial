
// export default {
//   namespaced: true,
//   state: {
//     profilePosts: [],
//     homePosts: [],
//   },
//   mutations: {
//     ADD_POST(state, post) {
//       state.profilePosts.unshift(post); // để hiện lên trang cá nhân ng đó
//       state.homePosts.unshift(post); // hiện thị trên trang chủ
//     },
//   },
//   actions: {
//     addPost({ commit }, post) {
//       commit("ADD_POST", post);
//     },
//   },
// };

const state = {
  post: null,
};

const mutations = {
  setPost(state, post) {
    state.post = post;
  },
};

const actions = {
  selectedPost({ commit }, post) {
    commit('setPost', post);
  },
};

const getters = {
  getPost: (state) => state.post,
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
