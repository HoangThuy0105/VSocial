<template>
  <div :class="[isDarkMode ? 'dark-mode' : 'light-mode']">
    <AppHeader />
    <AppSidebar />

    <div class="main-content">
      <div class="content-area d-flex">
        <div class="feed-area flex-grow-1 p-5">
          <PostItem />
          <MainContent />
        </div>

        <div class="sidebar-right" style="height: 100vh; overflow-y: auto">
          <TrendingContent />
          <FriendsList />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import AppHeader from "./components/layout/AppHeader.vue";
import AppSidebar from "./components/layout/AppSidebar.vue";
import TrendingContent from "./components/content/TrendingContent.vue";
import FriendsList from "./components/friends/FriendsList.vue"; 
import MainContent from "./components/content/MainContent.vue";
import PostItem from "./components/post/PostItem.vue";

export default {
  components: {
    AppHeader,
    AppSidebar,
    TrendingContent,
    FriendsList,
    PostItem,
    MainContent,
  },
  computed: {
    ...mapState({
      isDarkMode: (state) => state.darkMode,
    }),
  },
  created() {
    this.$store.commit("setDarkMode", true);
  },
};
</script>

<style src="@/assets/css/style.css"></style>
