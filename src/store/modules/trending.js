const state = {
  items: [], // Danh sách các nội dung xu hướng
};

const mutations = {
  setTrendingItems(state, items) {
    state.items = items;
  },
};

const actions = {
  fetchTrending({ commit }) {
    // Gọi API và commit dữ liệu
    TrendingService.getTrendingItems().then((items) => {
      commit("setTrendingItems", items);
    });
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
