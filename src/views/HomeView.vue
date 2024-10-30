<template>
  <div :class="[isDarkMode ? 'dark-mode' : 'light-mode']">
    <AppHeader :isDarkMode="isDarkMode" />
    <AppSidebar :isDarkMode="isDarkMode" />

    <div class="main-content">
      <div class="content-area d-flex">
        <div class="flex-grow-1 p-5">
          <PostItem :isDarkMode="isDarkMode" />
          <MainContent :isDarkMode="isDarkMode" />
        </div>

        <div
          class="d-flex flex-column justify-content-between p-4"
          style="height: 100%"
        >
          <TrendingContent :isDarkMode="isDarkMode" />
          <FriendsList :isDarkMode="isDarkMode" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import AppHeader from "../components/layout/AppHeader.vue";
import AppSidebar from "../components/layout/AppSidebar.vue";
import TrendingContent from "../components/content/TrendingContent.vue";
import FriendsList from "../components/friends/FriendsList.vue";
import MainContent from "../components/content/MainContent.vue";
import PostItem from "../components/post/PostItem.vue";



export default {
  name: 'HomeView', 
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
