import ArticleService from "@/service/ArticleService";


export default {
  namespaced: true,
  state: {
    articles: [],
    error: null
  },
  mutations: {
    SET_ARTICLES(state, articles) {
      state.articles = articles;
    },
    SET_ERROR(state, error) {
      state.error = error;
    }
  },
  actions: {
    async fetchArticles({ commit }) {
      try {
        const articles = await ArticleService.getArticles();
        commit("SET_ARTICLES", articles);
      } catch (error) {
        commit("SET_ERROR", error.message || "Lỗi không xác định");
      }
    },
    async createArticle({ dispatch }, article) {
      try {
        await ArticleService.postArticle(article);
        await dispatch("fetchArticles"); // Cập nhật danh sách sau khi đăng bài
      } catch (error) {
        console.error("Lỗi khi đăng bài viết:", error);
      }
    }
  },
  getters: {
    allArticles(state) {
      return state.articles;
    },
    error(state) {
      return state.error;
    }
  }
};
