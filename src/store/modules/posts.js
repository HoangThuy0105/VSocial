const state = {
    items: [],  
  };
  
  const mutations = {
    setPosts(state, posts) {
      state.items = posts;
    },
  };
  
  const actions = {
    fetchPosts({ commit }) {
      // Gọi API và commit dữ liệu
      PostService.getPosts().then(posts => {
        commit('setPosts', posts);
      });
    },
  };
  
  export default {
    namespaced: true,
    state,
    mutations,
    actions,
  };
  