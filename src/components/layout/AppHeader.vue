<template>
  <div :class="[isDarkMode ? 'dark-mode' : 'light-mode']">
    <div
      class="header d-flex flex-wrap justify-content-between align-items-center p-3"
      :class="isDarkMode ? 'header-dark' : 'header-light'"
    >
      <div class="d-flex align-items-center mb-2 mb-lg-0">
        <li class="nav-item d-flex align-items-center ms-3 me-3">
          <router-link to="/home" class="nav-link fs-5 d-flex align-items-center">
            <i class="fa-solid fa-house me-2"></i>
            Home
          </router-link>
        </li>

        <div class="d-flex justify-content-center align-items-center p-2">
          <div
            class="d-flex align-items-center justify-content-around w-100 frame-bg"
          >
            <button
              class="btn nav-link fs-5 me-2 button-frame ms-3"
              :class="{ active: activeTab === 'explore' }"
              @click="activeTab = 'explore'"
            >
              Explore
            </button>
            <button
              class="btn nav-link fs-5 me-2 button-frame ms-3"
              :class="{ active: activeTab === 'community' }"
              @click="activeTab = 'community'"
            >
              Community Feed
            </button>
            <button
              class="btn nav-link fs-5 me-2 button-frame ms-3"
              :class="{ active: activeTab === 'mutual' }"
              @click="activeTab = 'mutual'"
            >
              Mutual friend
              <span class="badge bg-secondary">12</span>
            </button>
          </div>
        </div>
      </div>

      <div class="d-flex align-items-center">
        <div class="frame-border rounded-icon me-2">
          <button @click="toggleDarkMode" class="btn">
            <i class="fa-solid" :class="isDarkMode ? 'fa-sun' : 'fa-moon'"></i>
          </button>
        </div>

        <!-- chat -->
        <router-link
          to="/chat"
          class="frame-border rounded-icon me-2"
          style="text-decoration: none"
        >
          <i class="fa-solid fa-comment-dots btn"></i>
        </router-link>

        <!-- notification -->
        <div class="frame-border rounded-icon me-2">
          <i class="fa-solid fa-bell btn"></i>
        </div>

        <!-- avatar -->
        <div class="dropdown" style="position: relative">
          <!-- Hình ảnh avatar -->
          <img
            :src="post.avatar"
            class="rounded-circle me-2"
            style="width: 50px; height: 50px; cursor: pointer"
            alt="User Avatar"
            @click="toggleDropdown"
          />

          <!-- Dropdown menu -->
          <ul
            v-if="isDropdownVisible"
            ref="dropdownMenu"
            class="dropdown-menu"
            aria-labelledby="userDropdown"
          >
            <li>
              <a class="dropdown-item" href="/profile">
                <i class="bi bi-person-circle me-2"></i> Profile
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="/" @click="logout">
                <i class="bi bi-box-arrow-right me-2"></i> Log out
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "HomeView",
  data() {
    return {
      post: {
        avatar:
          "https://png.pngtree.com/png-clipart/20210608/ourlarge/pngtree-dark-gray-simple-avatar-png-image_3418404.jpg",
      },
      activeTab: "explore",
      isDropdownVisible: false,
    };
  },
  computed: {
    ...mapState("mode", {
      isDarkMode: (state) => state.darkMode,
    }),
  },
  methods: {
    toggleDarkMode() {
      this.$store.dispatch("mode/toggleDarkMode");
    },
    toggleDropdown(event) {
      event.stopPropagation();
      this.isDropdownVisible = !this.isDropdownVisible;
    },
    logout() {
      console.log("log out");
    },
    closeDropdown(event) {
      if (
        this.$refs.dropdownMenu &&
        !this.$refs.dropdownMenu.contains(event.target)
      ) {
        this.isDropdownVisible = false;
      }
    },
  },
  mounted() {
    document.addEventListener("click", this.closeDropdown);
  },
  beforeUnmount() {
    document.removeEventListener("click", this.closeDropdown);
  },
};
</script>

<style src="@/assets/css/style.css"></style>
