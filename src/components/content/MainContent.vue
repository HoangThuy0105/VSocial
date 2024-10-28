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

        <!-- save -->
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
            class="dropdown-menu"
            v-if="post.showOptions"
            style="display: block"
          >
            <li>
              <a class="dropdown-item" @click="reportPost(post)">Report</a>
            </li>
            <li>
              <a class="dropdown-item" @click="hidePost(post)">Hide</a>
            </li>
          </ul>
        </div>
      </div>

      <!-- content -->
      <div class="card-body">
        <p class="card-text">{{ post.content }}</p>

        <!-- Kiểm tra số lượng ảnh và hiển thị phù hợp -->
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

      <!-- reaction-->
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
          <span class="cursor-pointer">
            <i class="fas fa-share"></i> {{ post.shares }} Share
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "UserPost",
  data() {
    return {
      posts: [
        {
          avatar:
            "https://png.pngtree.com/png-clipart/20210608/ourlarge/pngtree-dark-gray-simple-avatar-png-image_3418404.jpg",
          userName: "user",
          time: "12 minutes ago",
          role: "3D Stock Contributor",
          content:
            "There is a big river running through my province, and it is like a main blood vein for people who live along the bank. The water is not crystal clear, but it has a brown color of rich silt, which is very necessary for famers in the whole area. However, local people keep the river pretty clean, and there are not much trash floating on the water surface like what people always think about rivers in a small province. Most of the thing in the river are tree branches, grass, water hyacinth, and leaves. This is one of the biggest river of the Mekong Delta, so there are always huge boats running and crossing it. Due to those boats, sometimes we can see the oil stain spreading on the surface and dark smoke coming from them. I think they are the factors that cause pollution to the river, so I do not like the old boats with poor quality. Rivers are a big part of our life here, and I think people should have awareness to protect them as well as the environment in general.",
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
          content:
            "There is a big river running through my province, and it is like a main blood vein for people who live along the bank. The water is not crystal clear, but it has a brown color of rich silt, which is very necessary for famers in the whole area. However, local people keep the river pretty clean, and there are not much trash floating on the water surface like what people always think about rivers in a small province. Most of the thing in the river are tree branches, grass, water hyacinth, and leaves. This is one of the biggest river of the Mekong Delta, so there are always huge boats running and crossing it. Due to those boats, sometimes we can see the oil stain spreading on the surface and dark smoke coming from them. I think they are the factors that cause pollution to the river, so I do not like the old boats with poor quality. Rivers are a big part of our life here, and I think people should have awareness to protect them as well as the environment in general.",
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
              text: "hhaha",
              replies: 12,
            },
            {
              userName: "Aditya Cah Tegal",
              text: "hhaha",
              replies: 12,
            },
          ],
          liked: false,
          saved: false,
          showOptions: false,
        },
      ],
    };
  },
  computed: {
    ...mapState({
      isDarkMode: (state) => state.darkMode,
    }),
  },

  methods: {
    toggleOptions(index) {
      this.posts.forEach((post, i) => {
        post.showOptions = i === index ? !post.showOptions : false;
      });
    },
    closeDropdowns() {
      this.posts.forEach((post) => {
        post.showOptions = false;
      });
    },
    handleClickOutside(event) {
      const dropdowns = this.$el.querySelectorAll(".dropdown-menu");
      dropdowns.forEach((dropdown) => {
        if (!dropdown.contains(event.target)) {
          this.closeDropdowns();
        }
      });
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
    toggleLike(index) {
      const post = this.posts[index];
      post.liked = !post.liked;
      post.likes = post.liked
        ? (parseFloat(post.likes) + 0.1).toFixed(1)
        : (parseFloat(post.likes) - 0.1).toFixed(1);
    },
    toggleDarkMode() {
      this.$store.dispatch("toggleDarkMode");
    },
  },
};
</script>

<style>
.card {
  max-width: 1180px;
  margin: auto;
}

.image-container-single img {
  width: 100%;
  height: auto;
  object-fit: contain;
}

.image-container-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
}

.image-container-gallery {
  display: flex;
  gap: 8px;
  position: relative;
}

.image-container-gallery img {
  width: 33%;
  height: auto;
  object-fit: cover;
  border-radius: 4px;
}

.more-images-overlay {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  font-weight: bold;
  font-size: 1.2rem;
  border-radius: 4px;
  position: absolute;
  right: 0;
  bottom: 0;
  width: 33%;
  height: 100%;
}

.like-button {
  border: none;
  background: transparent;
  padding: 0;
  outline: none;
  color: gray;
  transition: color 0.3s;
}

.liked {
  color: #0033f7;
}

.dark-mode .like-button {
  color: lightgray;
}

.dark-mode .liked {
  color: #0033f7;
}
</style>
