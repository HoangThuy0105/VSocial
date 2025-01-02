<template>
  <div :class="[isDarkMode ? 'dark-mode' : 'light-mode']" style="background-color: #f8f9fa;">
    <div :class="[
      isDarkMode
        ? 'bg-dark text-white border-0'
        : 'bg-light text-dark border',
      'profile-container ms-4',
    ]">
      <!-- Cover Image -->
      <div class="cover-image position-relative  ">
        <div v-if="userData.coverPhoto">
          <img :src="userData.coverPhoto" alt="Cover" class="cover-img w-100" />
        </div>
        <div v-else>
          <img
            src="https://media.istockphoto.com/id/1409675326/photo/beautiful-idyllic-sunset-sky.webp?b=1&s=612x612&w=0&k=20&c=0eegVwCp8CDo_LB-Lq4U9PIS4YXWozTUoM2uZ_zYd-4="
            alt="Cover" class="cover-img w-100" />
        </div>

        <!-- Profile Picture and Info -->
        <div class="profile-info position-absolute top-50 start-0 translate-middle-y ms-4 d-flex align-items-center">
          <div v-if="userData.avatar">
            <img :src="userData.avatar" alt="Avatar" class="rounded-circle border border-white"
              style="width: 100px; height: 100px" />
          </div>
          <div v-else>
            <img
              src="https://scontent.fdad1-4.fna.fbcdn.net/v/t1.30497-1/453178253_471506465671661_2781666950760530985_n.png?stp=dst-png_s148x148&_nc_cat=1&ccb=1-7&_nc_sid=40e2b2&_nc_ohc=t7g1DMhtyCMQ7kNvgG88pcZ&_nc_oc=Adgst3fzzSYsDBya6g65p-yi7FLQlTw8OL6ByUrJVcE-WOhCJ23RJuXkGzy1t8bOpKY&_nc_zt=24&_nc_ht=scontent.fdad1-4.fna&_nc_gid=ANkKsSDetUu7rninnf3ogbA&oh=00_AYAB9OH5ey6qZtqFjUacugL-ibFufG5EV1bmudnpttrZEg&oe=679DA8FA"
              alt="Avatar default" class="rounded-circle border border-white" style="width: 100px; height: 100px" />
          </div>
          <div class="ms-3 text-white">
            <h5 class="mb-0">{{ userData.username }}</h5>
            <p>{{ userData.email }}</p>
          </div>
        </div>
      </div>

      <!-- Navigation Menu -->
      <div class="nav-menu bg-white p-2 d-flex justify-content-around rounded">
        <div class="menu-item text-center">
          <i class="bi bi-file-earmark-text cursor-pointer"></i>
          <p class="mb-0">Post</p>
        </div>
        <div class="menu-item text-center">
          <i class="bi bi-image cursor-pointer"></i>
          <p class="mb-0">Image</p>
        </div>
        <div class="menu-item text-center">
          <i class="bi bi-camera-video cursor-pointer"></i>
          <p class="mb-0">Video</p>
        </div>
        <div class="menu-item text-center">
          <i class="bi bi-archive cursor-pointer"></i>
          <p class="mb-0">Archive</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import {
  getMyInfo
} from "@/service/userService";

export default {
  name: "ProfileHeader",
  data() {
    return {
      userData: {},
    };
  },
  computed: {
    ...mapState("mode", {
      isDarkMode: (state) => state.darkMode,
    }),
  },
  methods: {
    async getMyInfo() {
      const response = await getMyInfo();
      if (response && response.status === 200) {
        this.userData = response.data.result;
        console.log(response.data.result);
      } else {
        console.log("Error");
      }
    },
  },
  mounted() {
    this.getMyInfo();
  },
};
</script>

<style scoped>
.cover-image {
  width: 100%;
  overflow: hidden;
}

.cover-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
}

@media (min-width: 1200px) {
  .cover-image {
    height: 300px;
  }
}

@media (min-width: 768px) and (max-width: 1199px) {
  .cover-image {
    height: 200px;
  }
}

@media (max-width: 767px) {
  .cover-image {
    height: 150px;
  }
}

.nav-menu {
  z-index: 10;
  backdrop-filter: blur(5px);
}

.profile-info {
  z-index: 2;
}

.menu-item i {
  font-size: 1.5rem;
}

.menu-item p {
  font-size: 0.9rem;
  margin-top: 0.2rem;
}
</style>
