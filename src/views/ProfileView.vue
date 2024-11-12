<template>
  <div :class="[isDarkMode ? 'dark-mode' : 'light-mode']">
    <AppHeader :isDarkMode="isDarkMode" />
    <AppSidebar :isDarkMode="isDarkMode" />
    `
  </div>
</template>

<script>

import AppHeader from "../components/layout/AppHeader.vue";
import AppSidebar from "../components/layout/AppSidebar.vue";
export default {
  name: "ProfileView",
  components: {
    AppHeader,
    AppSidebar,
  },
};
</script>

<style src="@/assets/css/style.css"></style>
