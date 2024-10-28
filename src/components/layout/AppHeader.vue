<template>
  <div :class="[isDarkMode ? 'dark-mode' : 'light-mode']">
    <div
      class="header d-flex justify-content-between p-3"
      :class="isDarkMode ? 'header-dark' : 'header-light'"
    >
      <div class="d-flex align-items-center">
        <li class="nav-item d-flex align-items-center ms-5 me-5">
          <i class="fa-solid fa-house me-2 btn"></i>
          <a href="#" class="nav-link fs-4">Home</a>
        </li>
        <div class="d-flex justify-content-between frame">
          <div class="d-flex align-items-center frame-bg">
            <button class="btn nav-link fs-4 me-5 ms-3">Explore</button>
            <button class="btn nav-link fs-4 me-5">Community Feed</button>
            <button class="btn nav-link fs-4 me-2">
              Mutual friend
              <span class="badge bg-secondary">12</span>
            </button>
          </div>
        </div>
      </div>

      <div class="d-flex align-items-center">
        <div class="fram-border rounded-icon me-2">
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

        <img :src="post.avartar"         
          class="rounded-circle me-2"
          style="width: 50px; height: 50px; cursor: pointer"
          alt="User"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data(){
    return{
      post:{
        avartar: "https://png.pngtree.com/png-clipart/20210608/ourlarge/pngtree-dark-gray-simple-avatar-png-image_3418404.jpg",
      }   
    }
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
  background-color: #343a40;
  color: white;
}

.light-mode {
  background-color: #f8f9fa;
  color: black;
}

.header-dark {
  background-color: #343a40;
  color: white;
}

.header-light {
  background-color: #f8f9fa;
  color: black;
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
</style>
<style scoped></style>
