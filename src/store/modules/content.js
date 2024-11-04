import { createStore } from 'vuex';

export default createStore({
  state: {
    posts: [
      {
        avatar: "https://png.pngtree.com/png-clipart/20210608/ourlarge/pngtree-dark-gray-simple-avatar-png-image_3418404.jpg",
        userName: "user",
        time: "12 minutes ago",
        role: "3D Stock Contributor",
        content: "There is a big river running through my province...",
        images: [
          "https://cdn.prod.website-files.com/5e8de3e5c2e6e35dcbb511c2/66bdc366a69a240f26e63bfd_destination-forecasting-insight.jpeg",
          "https://sb.tinhte.vn/2021/07/5557920_CV.jpg",
          "https://phuongtanphuoc.gov.vn/wp/vietnam/anhdepvietnam%20(24).jpg",
          "https://images.pexels.com/photos/235990/pexels-photo-235990.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "https://via.placeholder.com/200x300",
          "https://via.placeholder.com/200x300",
        ],
        likes: "1.7",
        shares: 12,
        comments: [
          {
            userName: "Aditya Cah Tegal",
            text: "People getting this type of rejection for AI images...",
            replies: 12,
          },
        ],
        liked: false,
        saved: false,
        showOptions: false,
      },
      
    ],
    isSharePostVisible: false,
  },
  mutations: {
    toggleSharePostVisibility(state) {
      state.isSharePostVisible = !state.isSharePostVisible;
    },
    toggleLikePost(state, postIndex) {
      state.posts[postIndex].liked = !state.posts[postIndex].liked;
    },
    toggleSavePost(state, postIndex) {
      state.posts[postIndex].saved = !state.posts[postIndex].saved;
    },
  },
  actions: {
    toggleSharePostVisibility({ commit }) {
      commit('toggleSharePostVisibility');
    },
    toggleLikePost({ commit }, postIndex) {
      commit('toggleLikePost', postIndex);
    },
    toggleSavePost({ commit }, postIndex) {
      commit('toggleSavePost', postIndex);
    },
  },
  getters: {
    allPosts(state) {
      return state.posts;
    },
    isSharePostVisible(state) {
      return state.isSharePostVisible;
    },
  },
});
