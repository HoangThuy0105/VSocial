// const state = {
//   posts: [
//     {
//       avatar: "https://png.pngtree.com/png-clipart/20210608/ourlarge/pngtree-dark-gray-simple-avatar-png-image_3418404.jpg",
//       userName: "user",
//       time: "12 minutes ago",
//       role: "3D Stock Contributor",
//       content: "There is a big river running through my province...",
//       images: [
//         "https://cdn.prod.website-files.com/5e8de3e5c2e6e35dcbb511c2/66bdc366a69a240f26e63bfd_destination-forecasting-insight.jpeg",
//         "https://sb.tinhte.vn/2021/07/5557920_CV.jpg",
//       ],
//       likes: "1.7",
//       shares: 12,
//       comments: [{ userName: "Aditya Cah Tegal", text: "People getting this type of rejection for AI images...", replies: 12 }],
//       liked: false,
//       saved: false,
//       showOptions: false,
//     },
     
//   ]
// };

// const getters = {
//   getPosts: (state) => state.posts
// };

// const mutations = {
//   TOGGLE_LIKE(state, index) {
//     const post = state.posts[index];
//     post.liked = !post.liked;
//     post.likes = post.liked
//       ? (parseFloat(post.likes) + 0.1).toFixed(1)
//       : (parseFloat(post.likes) - 0.1).toFixed(1);
//   },
//   TOGGLE_SAVE(state, index) {
//     const post = state.posts[index];
//     post.saved = !post.saved;
//   },
//   TOGGLE_OPTIONS(state, index) {
//     state.posts.forEach((post, i) => {
//       post.showOptions = i === index ? !post.showOptions : false;
//     });
//   },
//   SET_POSTS(state, posts) {
//     state.posts = posts;
//   }
// };

// const actions = {
//   toggleLike({ commit }, index) {
//     commit("TOGGLE_LIKE", index);
//   },
//   toggleSave({ commit }, index) {
//     commit("TOGGLE_SAVE", index);
//   },
//   toggleOptions({ commit }, index) {
//     commit("TOGGLE_OPTIONS", index);
//   },
//   setPosts({ commit }, posts) {
//     commit("SET_POSTS", posts);
//   }
// };

// export default {
//   state,
//   getters,
//   mutations,
//   actions
// };
