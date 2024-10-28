<template>
  <div :class="[isDarkMode ? 'dark-mode' : 'light-mode']">
    <div
      class="header d-flex flex-wrap justify-content-between align-items-center p-3"
      :class="isDarkMode ? 'header-dark' : 'header-light'"
    >
      <div class="d-flex align-items-center mb-2 mb-lg-0">
        <li class="nav-item d-flex align-items-center ms-3 me-3">
          <i class="fa-solid fa-house me-2 btn"></i>
          <a href="#" class="nav-link fs-5">Home</a>
        </li>

         <div class="d-flex justify-content-center align-items-center frame p-2">
          <div class="d-flex align-items-center justify-content-around w-100 frame-bg">
            <button class="btn nav-link fs-5 me-2 button-frame ms-3">Explore</button>
            <button class="btn nav-link fs-5 me-2 button-frame ms-3">Community Feed</button>
            <button class="btn nav-link fs-5 me-2 button-frame ms-3">
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
        <div class="frame-border rounded-icon me-2">
          <i class="fa-solid fa-comment-dots btn"></i>
        </div>
        <div class="frame-border rounded-icon me-2">
          <i class="fa-solid fa-bell btn"></i>
        </div>

         <img
          :src="post.avartar"
          class="rounded-circle me-2"
          style="width: 50px; height: 50px; cursor: pointer"
          alt="User Avatar"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      post: {
        avartar:
          "https://png.pngtree.com/png-clipart/20210608/ourlarge/pngtree-dark-gray-simple-avatar-png-image_3418404.jpg",
      },
    };
  },
  computed: {
    ...mapState({
      isDarkMode: (state) => state.darkMode,
    }),
  },
  methods: {
    toggleDarkMode() {
      this.$store.dispatch("toggleDarkMode");
    },
  },
};
</script>

<style scoped>
.dark-mode {
  background-color: #212529;
  color: white;
}

.light-mode {
  background-color: #f8f9fa;
  color: black;
}

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
.frame-bg button {
  background-color: transparent;
  border: none;
  font-weight: 500;
}

.frame-bg button:hover {
  text-decoration: underline;
}

.frame-border {
  border: 1px solid currentColor;
}

.rounded-icon {
  border-radius: 50%;
  padding: 8px;
  background-color: rgba(255, 255, 255, 0.2);
}

.rounded-icon:hover {
  background-color: rgba(255, 255, 255, 0.3);
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
