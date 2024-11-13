<template>
  <div :class="[isDarkMode ? 'dark-mode' : 'light-mode']">
    <AppHeader :isDarkMode="isDarkMode" />
    <AppSidebar :isDarkMode="isDarkMode" />
    <div class="main-content">
      <div class="p-5">
        <ProfileHeader />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import AppHeader from "../components/layout/AppHeader.vue";
import AppSidebar from "../components/layout/AppSidebar.vue";
import ProfileHeader from "@/components/profiles/ProfileHeader.vue";

export default {
  name: "ProfileView",
  components: {
    AppHeader,
    AppSidebar,
    ProfileHeader,
  },
  computed: {
    ...mapState("mode", {
      isDarkMode: (state) => state.darkMode,
    }),
  },
  created() {
    this.$store.commit("setDarkMode", true);
  },
};
</script>

<style src="@/assets/css/style.css"></style>
