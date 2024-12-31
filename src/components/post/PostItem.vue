<template>
  <div :class="[isDarkMode ? 'dark-mode' : 'light-mode']" style="background-color: #f8f9fa;">
    <div :class="[
      isDarkMode
        ? 'bg-dark text-white border-0'
        : 'bg-light text-dark border',
      'post-input p-3 ms-5 mb-3 rounded',
    ]" :style="{ maxWidth: '1180px' }">
      <div class="d-flex align-items-center mb-2">
        <img :src="post.avatar" class="rounded-circle me-2" style="width: 50px; height: 50px; cursor: pointer"
          alt="User" />
        <input type="text" :class="[
          'form-control',
          isDarkMode
            ? 'bg-dark text-white border border-secondary'
            : 'bg-light border',
        ]" placeholder="What's on your mind?" v-model="postContent" @focus="isModalOpen = true" @click.prevent />
      </div>

      <div class="d-flex justify-content-between align-items-center mt-2">
        <div class="d-flex gap-3">
          <button class="btn btn-link" @click="isModalOpen = true">
            <i :class="isDarkMode
                ? 'fas fa-image text-white'
                : 'fas fa-image text-dark'
              "></i>
          </button>
          <button class="btn btn-link" @click="isModalOpen = true">
            <i :class="isDarkMode
                ? 'fas fa-paperclip text-white'
                : 'fas fa-paperclip text-dark'
              "></i>
          </button>
          <button class="btn btn-link" @click="isModalOpen = true">
            <i :class="isDarkMode
                ? 'fas fa-map-marker-alt text-white'
                : 'fas fa-map-marker-alt text-dark'
              "></i>
          </button>
          <button class="btn btn-link" @click="isModalOpen = true">
            <i :class="isDarkMode
                ? 'fas fa-smile text-white'
                : 'fas fa-smile text-dark'
              "></i>
          </button>
        </div>
        <div>
          <button class="btn btn-outline-secondary me-2">Draft</button>
          <button class="btn btn-primary">Post</button>
        </div>
      </div>

      <PostModal v-if="isModalOpen" :isVisible="isModalOpen" @close="isModalOpen = false" />
    </div>
  </div>
</template>

<script>
import PostModal from "./PostModal.vue";
import { mapState } from "vuex";

export default {
  components: {
    PostModal,
  },
  computed: {
    ...mapState("mode", {
      isDarkMode: (state) => state.darkMode,
    }),
  },
  methods: {
    toggleDarkMode() {
      this.$store.dispatch("toggleDarkMode");
    },
  },
  data() {
    return {
      postContent: "",
      isModalOpen: false,
      post: {
        avatar:
          "https://png.pngtree.com/png-clipart/20210608/ourlarge/pngtree-dark-gray-simple-avatar-png-image_3418404.jpg",
      },
    };
  },
};
</script>
