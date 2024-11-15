<template>
  <div :class="[isDarkMode ? 'dark-mode' : 'light-mode', 'd-flex']">
    <AppHeader :isDarkMode="isDarkMode" />
    <FriendSidebar :isDarkMode="isDarkMode" />
    <div class="main-content">
      <div class="d-flex p-5">
        <FriendContent :isDarkMode="isDarkMode" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import FriendContent from "@/components/friends/FriendContent.vue";
import FriendSidebar from "@/components/friends/FriendSidebar.vue";
import AppHeader from "@/components/layout/AppHeader.vue";

export default {
  name: "FriendView",
  components: {
    FriendSidebar,
    AppHeader,
    FriendContent,
  },
  computed: {
    ...mapState("mode", {
      isDarkMode: (state) => state.darkMode,
    }),
  },
};
</script>

<style></style>
