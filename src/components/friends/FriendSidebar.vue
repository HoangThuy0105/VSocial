<template>
  <div :class="[isDarkMode ? 'dark-mode' : 'light-mode']">
    <div :class="[
      'sidebar',
      isDarkMode ? 'bg-dark text-white' : 'bg-light text-dark border',
      'p-3',
      'frame',
    ]">
      <!-- Facebook logo and search bar -->
      <div class="logo mb-4">
        <!-- <img src="../../assets/img/logo.png" alt="Logo" /> -->
        <img
          src="data:image/png;base64,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"
          alt="" />
        <h2>VSocial</h2>
      </div>

      <!-- Sidebar items -->
      <div>
        <h3>Friend</h3>

        <ul class="nav flex-column">
          <!-- home -->
          <li class="d-flex align-items-center sidebar-item ">
            <!-- Thêm mb-2 để giảm khoảng cách -->
            <i class="fa-solid fa-user-group "></i>
            <a href="/home" class="nav-link" :class="{ 'text-white': isDarkMode, 'text-dark': !isDarkMode }">Home</a>
          </li>
        </ul>

        <!-- Other sidebar items from data -->
        <div v-for="item in sidebarItems" :key="item.label"
          class="d-flex justify-content-between align-items-center sidebar-item">
          <div class="d-flex align-items-center">
            <i :class="item.icon + ' me-3'"></i>
            <span>{{ item.label }}</span>
          </div>
          <i class="bi bi-chevron-right"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "FriendSidebar",
  data() {
    return {
      sidebarItems: [
        { label: "Friend Request", icon: "fas fa-user-plus" },
        { label: "Suggest", icon: "fas fa-user-friends" },
        { label: "All Friend", icon: "fas fa-users" },
        { label: "Custom lists", icon: "fas fa-list" },
      ],
    };
  },
  computed: {
    ...mapState("mode", {
      isDarkMode: (state) => state.darkMode,
    }),
  },
};
</script>

<style src="../../assets/css/style.css"></style>
