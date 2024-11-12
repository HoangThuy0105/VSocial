<template>
  <div :class="[isDarkMode ? 'dark-mode' : 'light-mode']">
    <div
      class="header d-flex flex-wrap justify-content-between align-items-center p-3"
      :class="isDarkMode ? 'header-dark' : 'header-light'"
    >
      <div class="d-flex align-items-center mb-2 mb-lg-0">
        <li class="nav-item d-flex align-items-center ms-3 me-3">
          <router-link to="/" class="nav-link fs-5 d-flex align-items-center">
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
              <a class="dropdown-item" href="/login" @click="logout">
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
      console.log("Đăng xuất");
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

<style scoped>
.header-light {
  background-color: #f8f9fa;
  color: black;
  border-bottom: 1px solid #ddd;
}

.header-dark {
  background-color: #212529;
  color: white;
  border-bottom: none;
}

.dark-mode a,
.dark-mode .nav-link,
.dark-mode .btn {
  color: white;
}

.light-mode a,
.light-mode .nav-link,
.light-mode .btn {
  color: black;
}

.frame-bg {
  background-color: transparent;
  border-radius: 8px;
  padding: 0.5rem 1rem;
}

.button-frame {
  background-color: transparent;
  border: none;
  font-weight: 500;
}

.button-frame:hover {
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 4px;
}

.dark-mode .button-frame:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.button-frame.active {
  background-color: rgba(0, 123, 255, 0.1);
  border-radius: 4px;
}

.dark-mode .button-frame.active {
  background-color: rgba(255, 255, 255, 0.2);
}

.badge {
  font-size: 0.85em;
  padding: 0.3em 0.6em;
}

.rounded-icon {
  border-radius: 50%;
  padding: 8px;
  background-color: rgba(255, 255, 255, 0.2);
}

.rounded-icon:hover {
  background-color: rgba(255, 255, 255, 0.3);
}

button:focus,
button:focus-visible,
.btn:focus,
.btn:focus-visible,
.rounded-icon:focus,
.rounded-icon:focus-visible {
  outline: none !important;
  box-shadow: none !important;
  border: none !important;
}

.dropdown-menu {
  position: absolute;
  top: 55px;  
  left: -100px;  
  z-index: 1050;
  display: block;
  background-color: #f8f9fa;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
}

.dropdown-menu::before {
  content: "";
  position: absolute;
  top: -10px;  
  left: 110px;  
  border-width: 0 10px 10px 10px;
  border-style: solid;
  border-color: transparent transparent rgb(75, 68, 68) transparent; 
  z-index: 1060;  
}
/* Mũi tên cho chế độ tối */
.dark-mode .dropdown-menu::before {
  content: "";
  position: absolute;
  top: -9px; 
  left: 110px;  
  border-width: 0 10px 10px 10px;
  border-style: solid;
  border-color: transparent transparent rgb(75, 68, 68) transparent; 
  z-index: 1060;
}
 
.dark-mode .dropdown-menu::after {
  content: "";
  position: absolute;
  top: -11px;  
  left: 108px;  
  border-width: 0 11px 11px 11px;  
  border-style: solid;
  border-color: transparent transparent #000000 transparent;  
  z-index: 1059;  
}
 
.light-mode .dropdown-menu::before {
  content: "";
  position: absolute;
  top: -9px;
  left: 110px;
  border-width: 0 10px 10px 10px;
  border-style: solid;
  border-color: transparent transparent #fff transparent;  
  z-index: 1060;
}
 
.light-mode .dropdown-menu::after {
  content: "";
  position: absolute;
  top: -11px;
  left: 108px;
  border-width: 0 11px 11px 11px;
  border-style: solid;
  border-color: transparent transparent #ddd transparent;  
   
}


.rounded-circle {
  cursor: pointer;
}

@media (max-width: 576px) {
  .fs-5 {
    font-size: 1rem;
  }
  .header {
    padding: 1rem;
  }
  .rounded-icon {
    padding: 6px;
  }
}
</style>
