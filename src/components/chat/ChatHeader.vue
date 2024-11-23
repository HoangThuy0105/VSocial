<template>
  <div :class="[isDarkMode ? 'dark-mode' : 'light-mode']">
    <div
      class="chat-header p-3 border-bottom d-flex align-items-center justify-content-between"
      :class="isDarkMode ? 'header-dark' : 'header-light'"
    >
      <div class="d-flex align-items-center">
        <img
          :src="chat.avatar"
          alt="Avatar"
          class="rounded-circle me-2"
          width="40"
          height="40"
        />
        <h5 class="mb-0">{{ chat.name }}</h5>
      </div>

      <!-- Home icon button -->
      <div class="d-flex">
        <button class="btn btn-link" @click="goHome">
          <i
            :class="
              isDarkMode
                ? 'fa-solid fa-house text-white'
                : 'fa-solid fa-house text-dark '
            "
            class="fs-4"
          >
          </i>
        </button>
        <button class="btn btn-link" @click="goCall">
          <i
            :class="
              isDarkMode
                ? ' fa-solid fa-phone  text-white'
                : 'fa-solid fa-phone text-dark'
            "
            class="fs-4"
          >
          </i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  props: {
    chat: {
      type: Object,
      required: true,
    },
  },  
  computed: {
    ...mapState("mode", {
      isDarkMode: (state) => state.darkMode,
    }),
  },
  methods: {
    goHome() {
      this.$router.push({ path: "/home" });
    },
    goCall(){
      this.$router.push({ path: "/call"});
    }
  },
};
</script>

<style scoped>
/* Light and dark mode classes */
.light-mode .chat-header {
  background-color: #f8f9fa;
  color: #333;
}

.dark-mode .chat-header {
  background-color: #2c2c2c;
  color: #e0e0e0;
}

/* Avatar styling */
.chat-header img {
  border: 2px solid transparent;
}

.dark-mode .chat-header img {
  border-color: #e0e0e0; /* Optional: border for avatar in dark mode */
}
</style>
