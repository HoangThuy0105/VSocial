<template>
  <div :class="[isDarkMode ? 'dark-mode' : 'light-mode']">
    <div v-for="(post, index) in posts" :key="index" :class="[
      isDarkMode ? 'bg-dark text-white' : 'bg-light text-dark',
      'card mt-4 ms-5 mb-3',
    ]">
      <div class="card-header d-flex align-items-center">
        <div v-if="post.createdBy.avatar">
          <img :src="post.createdBy.avatar" class="rounded-circle me-2"
            style="width: 50px; height: 50px; cursor: pointer" alt="User Avatar" />
        </div>
        <div v-else>
          <img
            src="https://imgs.search.brave.com/3GmHUlPSDP6fn2U7zvGzo1tUNfh9iu1gqcowfbEdlUI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy81/LzU4L0lVX2F0X2hl/cl8xMHRoX2Fubml2/ZXJzYXJ5X2Zhbm1l/ZXRpbmclRTMlODAl/ODhJVSVFRiVCQyU4/QiVFMyU4MCU4OV9Q/YXJ0XzJfSW52aXRh/dDEwbixfMTVfU2Vw/dGVtYmVyXzIwMThf/MDEuanBn"
            class="rounded-circle me-2" style="width: 50px; height: 50px; cursor: pointer" alt="User Avatar" />
        </div>
        <div class="me-auto">
          <h6 class="mb-0 cursor-pointer">{{ post.createdBy.username }}</h6>
          <small class="text-muted">{{ post.createdAt }} - </small>
          <!-- <small class="text-muted location">{{ post.role }}</small> -->
        </div>

        <!-- Save Button -->
        <!-- <button class="btn btn-link p-0 me-3" @click="toggleSave(index)"
          :class="{ 'text-primary': post.saved, 'text-secondary': !post.saved }">
          <i class="fas fa-bookmark"></i>
        </button> -->

        <!-- Menu dropdown -->
        <div class="dropdown">
          <button class="btn btn-link p-0" @click="toggleOptions(index)">
            <i class="fa-solid fa-ellipsis text-secondary"></i>
          </button>
          <!-- <ul v-if="post.showOptions" ref="dropdownMenu" class="dropdown-menu" aria-labelledby="userDropdown">
            <li>
              <a class="dropdown-item" href="/ ">
                <i class="fa-solid fa-flag me-2"></i> Report
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="/ " @click="logout">
                <i class="fa-solid fa-circle-minus me-2"></i> Hide
              </a>
            </li>
          </ul> -->
        </div>
      </div>

      <!-- Content -->
      <div class="card-body">
        <p class="card-text">{{ post.content }}</p>

        <!-- Image Display Logic -->
        <div v-if="post.postImages.length === 1" class="image-container-single">
          <img :src="post.postImages[0]" alt="Content Image" class="content-image" />
        </div>

        <div v-else-if="post.postImages.length === 4" class="image-container-grid">
          <img v-for="(image, imgIndex) in post.postImages" :key="imgIndex" :src="image" alt="Content Image"
            class="content-image" />
        </div>

        <div v-else class="image-container-gallery">
          <img v-for="(image, imgIndex) in post.postImages.slice(0, 3)" :key="imgIndex" :src="image" alt="Content Image"
            class="content-image cursor-pointer" />
          <div v-if="post.postImages.length > 3" class="more-images-overlay cursor-pointer">
            +{{ post.postImages.length - 3 }}
          </div>
        </div>
      </div>

      <!-- Reactions -->
      <div class="card-footer d-flex justify-content-between align-items-center">
        <div>
          <button class="btn btn-link me-2 p-0 like-button" @click="toggleLike(post)" :class="{ liked: post.liked }">
            <i class="fas fa-thumbs-up me-1"></i>
          </button>
          <!-- <small class="text-muted">{{ post.likes }}K</small> -->
        </div>
        <div>
          <span class="me-3 cursor-pointer" @click="openCommentModal(post)">
            <i class="fas fa-comment"></i>
            <!-- {{ post.comments.length }} Comment -->
          </span>

          <span class="cursor-pointer" @click="openSharePost">
            <i class="fas fa-share"></i>
            <!-- {{ post.shares }} Share -->
          </span>

          <!-- Share Post Component -->
          <PostShare v-if="isSharePostVisible" @close="closeSharePost" />
        </div>
      </div>
      <PostComment v-if="isModalOpen" :isVisible="isModalOpen" @close="isModalOpen = false" />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import PostShare from "../post/PostShare.vue";
import PostComment from "../post/PostComment.vue";
import { getAllPort } from "@/service/ArticleService"


export default {
  name: "UserPost",
  components: {
    PostShare,
    PostComment,
  },
  data() {
    return {
      isModalOpen: false,
      posts: [],
      isSharePostVisible: false,
      isDropdownVisible: false,
    };
  },

  computed: {
    ...mapState("mode", {
      isDarkMode: (state) => state.darkMode,
    }),
  },

  methods: {
    async getPost() {
      const response = await getAllPort();
      this.posts = response.data.result
    },
    toggleOptions(index) {
      this.posts.forEach((post, i) => {
        post.showOptions = i === index ? !post.showOptions : false;
      });
    },
    toggleDropdown(event) {
      event.stopPropagation();
      this.isDropdownVisible = !this.isDropdownVisible;
    },
    closeDropdown(event) {
      const dropdownMenu = this.$refs.dropdownMenu
        ? this.$refs.dropdownMenu.$el
        : null;
      if (dropdownMenu && !dropdownMenu.contains(event.target)) {
        this.isDropdownVisible = false;
      }
    },

    reportPost(post) {
      console.log("Report post:", post);
      this.closeDropdowns();
    },
    hidePost(post) {
      console.log("Hide post:", post);
      this.closeDropdowns();
    },
    toggleSave(index) {
      const post = this.posts[index];
      post.saved = !post.saved;
    },
    toggleLike(post) {
      post.liked = !post.liked;
      post.likes = post.liked
        ? (parseFloat(post.likes) + 0.1).toFixed(1)
        : (parseFloat(post.likes) - 0.1).toFixed(1);

      if (post.likes < 0) {
        post.likes = "0.0";
      }
    },
    openCommentModal(post) {
      this.selectedPost = post;
      this.isModalOpen = true;
    },
    openSharePost() {
      this.isSharePostVisible = true;
      console.log("Share Post opened", this.isSharePostVisible);
    },

    closeSharePost() {
      this.isSharePostVisible = false;
    },
    toggleDarkMode() {
      this.$store.dispatch("toggleDarkMode");
    },
    close() {
      this.$emit("close");
    },
  },
  mounted() {
    this.getPost();
    document.addEventListener("click", this.closeDropdown);
  },
  beforeUnmount() {
    document.removeEventListener("click", this.closeDropdown);
  },
};
</script>

<style src="@/assets/css/style.css"></style>
