<template>
  <div :class="[isDarkMode ? 'dark-mode' : 'light-mode']">
    <div
      v-for="(post, index) in posts"
      :key="index"
      :class="[
        isDarkMode ? 'bg-dark text-white' : 'bg-light text-dark',
        'card mt-4 ms-5 mb-3',
      ]"
    >
      <div class="card-header d-flex align-items-center">
        <img
          :src="post.avatar"
          class="rounded-circle me-2"
          style="width: 50px; height: 50px; cursor: pointer"
          alt="User Avatar"
        />
        <div class="me-auto">
          <h6 class="mb-0 cursor-pointer">{{ post.userName }}</h6>
          <small class="text-muted">{{ post.time }} - </small>
          <small class="text-muted location">{{ post.role }}</small>
        </div>

        <!-- Save Button -->
        <button
          class="btn btn-link p-0 me-3"
          @click="toggleSave(index)"
          :class="{ 'text-primary': post.saved, 'text-secondary': !post.saved }"
        >
          <i class="fas fa-bookmark"></i>
        </button>

        <!-- Menu dropdown -->
        <div class="dropdown">
          <button class="btn btn-link p-0" @click="toggleOptions(index)">
            <i class="fa-solid fa-ellipsis text-secondary"></i>
          </button>
          <ul
            v-if="post.showOptions"
            ref="dropdownMenu"
            class="dropdown-menu"
            aria-labelledby="userDropdown"
          >
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
          </ul>
        </div>
      </div>

      <!-- Content -->
      <div class="card-body">
        <p class="card-text">{{ post.content }}</p>

        <!-- Image Display Logic -->
        <div v-if="post.images.length === 1" class="image-container-single">
          <img
            :src="post.images[0]"
            alt="Content Image"
            class="content-image"
          />
        </div>

        <div v-else-if="post.images.length === 4" class="image-container-grid">
          <img
            v-for="(image, imgIndex) in post.images"
            :key="imgIndex"
            :src="image"
            alt="Content Image"
            class="content-image"
          />
        </div>

        <div v-else class="image-container-gallery">
          <img
            v-for="(image, imgIndex) in post.images.slice(0, 3)"
            :key="imgIndex"
            :src="image"
            alt="Content Image"
            class="content-image cursor-pointer"
          />
          <div
            v-if="post.images.length > 3"
            class="more-images-overlay cursor-pointer"
          >
            +{{ post.images.length - 3 }}
          </div>
        </div>
      </div>

      <!-- Reactions -->
      <div
        class="card-footer d-flex justify-content-between align-items-center"
      >
        <div>
          <button
            class="btn btn-link me-2 p-0 like-button"
            @click="toggleLike(post)"
            :class="{ liked: post.liked }"
          >
            <i class="fas fa-thumbs-up me-1"></i>
          </button>
          <small class="text-muted">{{ post.likes }}K</small>
        </div>
        <div>
          <span class="me-3 cursor-pointer">
            <i class="fas fa-comment"></i> {{ post.comments.length }} Comment
          </span>
          <span class="cursor-pointer" @click="openSharePost">
            <i class="fas fa-share"></i>
            {{ post.shares }} Share
          </span>

          <!-- Share Post Component -->
          <PostShare v-if="isSharePostVisible" @close="closeSharePost" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import PostShare  from '../post/PostShare.vue';

export default {
  name: "UserPost",
  components: {
    PostShare,
  },
  data() {
    return {
      posts: [
        {
          avatar:
            "https://png.pngtree.com/png-clipart/20210608/ourlarge/pngtree-dark-gray-simple-avatar-png-image_3418404.jpg",
          userName: "user",
          time: "12 minutes ago",
          role: "3D Stock Contributor",
          content: "There is a big river running through my province...",
          images: [
            "https://cdn.prod.website-files.com/5e8de3e5c2e6e35dcbb511c2/66bdc366a69a240f26e63bfd_destination-forecasting-insight.jpeg",
            "https://sb.tinhte.vn/2021/07/5557920_CV.jpg",
            "https://phuongtanphuoc.gov.vn/wp/vietnam/anhdepvietnam%20(24).jpg",
            "https://images.pexels.com/photos/235990/pexels-photo-235990.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://via.placeholder.com/200x300",
            "https://via.placeholder.com/200x300",
          ],
          likes: "1.7",
          shares: 12,
          comments: [
            {
              userName: "Aditya Cah Tegal",
              text: "People getting this type of rejection for AI images...",
              replies: 12,
            },
          ],
          liked: false,
          saved: false,
          showOptions: false,
        },
        {
          avatar:
            "https://png.pngtree.com/png-clipart/20210608/ourlarge/pngtree-dark-gray-simple-avatar-png-image_3418404.jpg",
          userName: "user",
          time: "12 minutes ago",
          role: "3D Stock Contributor",
          content: "There is a big river running through my province...",
          images: [
            "https://cdn.prod.website-files.com/5e8de3e5c2e6e35dcbb511c2/66bdc366a69a240f26e63bfd_destination-forecasting-insight.jpeg",
            "https://sb.tinhte.vn/2021/07/5557920_CV.jpg",
            "https://phuongtanphuoc.gov.vn/wp/vietnam/anhdepvietnam%20(24).jpg",
            "https://images.pexels.com/photos/235990/pexels-photo-235990.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://via.placeholder.com/200x300",
            "https://via.placeholder.com/200x300",
          ],
          likes: "1.7",
          shares: 12,
          comments: [
            {
              userName: "Aditya Cah Tegal",
              text: "People getting this type of rejection for AI images...",
              replies: 12,
            },
          ],
          liked: false,
          saved: false,
          showOptions: false,
        },
        {
          avatar:
            "https://png.pngtree.com/png-clipart/20210608/ourlarge/pngtree-dark-gray-simple-avatar-png-image_3418404.jpg",
          userName: "user",
          time: "12 minutes ago",
          role: "3D Stock Contributor",
          content: "There is a big river running through my province...",
          images: [
            "https://cdn.prod.website-files.com/5e8de3e5c2e6e35dcbb511c2/66bdc366a69a240f26e63bfd_destination-forecasting-insight.jpeg",
            "https://sb.tinhte.vn/2021/07/5557920_CV.jpg",
            "https://phuongtanphuoc.gov.vn/wp/vietnam/anhdepvietnam%20(24).jpg",
            "https://images.pexels.com/photos/235990/pexels-photo-235990.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://via.placeholder.com/200x300",
          ],
          likes: "1.7",
          shares: 12,
          comments: [
            {
              userName: "Aditya Cah Tegal",
              text: "People getting this type of rejection for AI images...",
              replies: 12,
            },
          ],
          liked: false,
          saved: false,
          showOptions: false,
        },
        {
          avatar:
            "https://png.pngtree.com/png-clipart/20210608/ourlarge/pngtree-dark-gray-simple-avatar-png-image_3418404.jpg",
          userName: "user",
          time: "12 minutes ago",
          role: "3D Stock Contributor",
          content: "There is a big river running through my province...",
          images: [
            "https://cdn.prod.website-files.com/5e8de3e5c2e6e35dcbb511c2/66bdc366a69a240f26e63bfd_destination-forecasting-insight.jpeg",
            "https://sb.tinhte.vn/2021/07/5557920_CV.jpg",
            "https://phuongtanphuoc.gov.vn/wp/vietnam/anhdepvietnam%20(24).jpg",
            "https://images.pexels.com/photos/235990/pexels-photo-235990.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://via.placeholder.com/200x300",
            "https://via.placeholder.com/200x300",
          ],
          likes: "1.7",
          shares: 12,
          comments: [
            {
              userName: "Aditya Cah Tegal",
              text: "People getting this type of rejection for AI images...",
              replies: 12,
            },
          ],
          liked: false,
          saved: false,
          showOptions: false,
        },
      ],
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
    document.addEventListener("click", this.closeDropdown);
  },
  beforeUnmount() {
    document.removeEventListener("click", this.closeDropdown);
  },
};
</script>

<style src="@/assets/css/style.css"></style>
