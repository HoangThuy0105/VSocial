const state = {
    friends: [], // Danh sách bạn bè
  };
  
  const mutations = {
    setFriends(state, friends) {
      state.friends = friends;
    },
  };
  
  const actions = {
    fetchFriends({ commit }) {
      // Gọi API và commit dữ liệu
      UserService.getFriends().then(friends => {
        commit('setFriends', friends);
      });
    },
  };
  
  export default {
    namespaced: true,
    state,
    mutations,
    actions,
  };
  