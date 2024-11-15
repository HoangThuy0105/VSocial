<template>
  <div :class="[isDarkMode ? 'dark-mode' : 'light-mode', 'd-flex']">
    <AppHeader :isDarkMode="isDarkMode" />
    <FriendSidebar :isDarkMode="isDarkMode" />
    <div class="main-content">
      <div class="d-flex p-5"> 
        <FriendContent v-if="isContentActive" :isDarkMode="isDarkMode" />
        <FriendAll v-else :isDarkMode="isDarkMode" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import FriendContent from "@/components/friends/FriendContent.vue";
import FriendSidebar from "@/components/friends/FriendSidebar.vue";
import AppHeader from "@/components/layout/AppHeader.vue";
import FriendAll from "@/components/friends/FriendAll.vue";

export default {
  name: "FriendView",
  components: {
    FriendSidebar,
    AppHeader,
    FriendContent,
    FriendAll,
  },
  data() {
    return {
      isContentActive: true,  
    };
  },
  computed: {
    ...mapState("mode", {
      isDarkMode: (state) => state.darkMode,
    }),
  },
};
</script>

<style></style>
