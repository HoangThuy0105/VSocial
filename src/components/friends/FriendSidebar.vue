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
        <img src="https://res.cloudinary.com/vsocial/image/upload/v1735717354/logo_hgvb3e.png" alt="avatar"
        style="margin-right: 16px; width: 50px; height: 50px;" />
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
