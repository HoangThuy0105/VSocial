<template>
  <div :class="[isDarkMode ? 'dark-mode' : 'light-mode']">
    <div :class="[
      isDarkMode
        ? 'bg-dark text-white border-0'
        : 'bg-light text-dark border',
      'modal-container',
    ]">
      <div v-if="isVisible" class="modal-overlay" @click.self="closeModal">
        <div class="modal-content">
          <!-- Header -->
          <div class="modal-header">
            <h5 class="modal-title fs-4 ms-0">Create article</h5>
            <button class="btn-close" @click="closeModal"></button>
          </div>

          <!-- Post Content -->
          <div class="post-content">
            <div class="post-meta">
              <img src="https://www.chapter3d.com/wp-content/uploads/2020/06/anh-chan-dung-dep.jpg" alt="Avatar"
                class="avatar" />
              <div class="d-flex flex-column">
                <span class="post-author fs-5">{{ post.username }}</span>
                <!-- Dropdown for visibility (Private/Public) -->
                <div class="dropdown" ref="dropdown">
                  <button class="btn btn-light dropdown-toggle" type="button" @click="toggleDropdown"
                    aria-expanded="false">
                    <i :class="visibilityIcon"></i> {{ visibility == 1 ? "Public" : visibility == 2 ? "Friends" :
                      "Only me" }}
                  </button>
                  <ul v-show="isDropdownVisible" class="dropdown-menu">
                    <li>
                      <a class="dropdown-item" href="#" @click="setVisibility(1)">
                        <i class="fa-solid fa-globe"></i> Public
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#" @click="setVisibility(2)">
                        <i class="fa-solid fa-user-group"></i> Friends
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#" @click="setVisibility(0)">
                        <i class="fa-solid fa-lock"></i> Only me
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <!-- Content Input -->
            <textarea v-model="content" class="form-control my-3" style="border: none" rows="2"
              placeholder="What's on your mind?"></textarea>

            <!-- Image Preview -->
            <div v-if="files.length" class="image-preview my-3">
              <div class="image-container">
                <div v-for="(file, index) in displayedFiles" :key="index" class="image-item">
                  <img :src="file.preview" alt="Selected Image" class="img-fluid" />
                  <button class="delete-btn" @click="removeFile(index)" aria-label="Delete image">
                    <i class="fa fa-times"></i>
                  </button>
                </div>
                <div v-if="files.length > 3" class="more-images">
                  +{{ files.length - 3 }} more
                </div>
              </div>
            </div>
          </div>

          <!-- Action Buttons -->
          <div class="action-buttons">
            <label for="file-upload" class="btn btn-light action-button me-3">
              <i class="fa fa-image icon"></i>
            </label>
            <input type="file" id="file-upload" @change="handleFileUpload" class="d-none" multiple />
            <button @click="openModal('emoji')" class="btn btn-light action-button me-3">
              <i class="fas fa-paperclip icon"></i>
            </button>
            <button @click="openModal('emoji')" class="btn btn-light action-button me-3">
              <i class="fas fa-map-marker-alt icon"></i>
            </button>
            <button @click="openModal('emoji')" class="btn btn-light action-button me-3">
              <i class="fa fa-smile icon"></i>
            </button>
          </div>

          <!-- Footer -->
          <div class="modal-footer mt-0">
            <button class="btn btn-primary w-100" @click="postContent" :disabled="!content.trim() && !files.length">
              To post
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
// import { createArticle } from "@/service/ArticleService"
// import { useToast } from 'vue-toastification'
// const toast = useToast()

export default {
  props: {
    isVisible: Boolean,
    modalType: String,
  },
  data() {
    return {
      content: "",
      files: [],
      post: {
        username: "Thuy",
      },
      visibility: 1,
      isDropdownVisible: false,
    };
  },
  computed: {
    ...mapState("mode", {
      isDarkMode: (state) => state.darkMode,
    }),
    visibilityIcon() {
      if (this.visibility === 1) {
        return "fa-solid fa-globe";
      } else if (this.visibility === 2) {
        return "fa-solid fa-user-group";
      } else {
        return "fa-solid fa-lock";
      }
    },
    displayedFiles() {
      return this.files.slice(0, 4);
    },
  },
  methods: {
    closeModal() {
      this.$emit("close");
    },
    async postContent() {
      if (!this.content.trim() && !this.files.length) {
        return;
      }
     
        const formData = new FormData();
        formData.append("content", this.content);
        formData.append("audience", this.visibility);
        this.files.forEach((file, index) => {
          formData.append(`images_${index}`, file);
        });

      console.log("Sending request to create article...");
      // const response = await createArticle(formData);
      // console.log(response.status)
      // if (response && response.status === 200) {
      //   toast.success('Tạo bài viết thành công')
      //   this.closeModal();
      // } else {
      //   toast.error('Tạo bài viết thất bại')
      // }
    },
    handleFileUpload(event) {
      const selectedFiles = Array.from(event.target.files);
      selectedFiles.forEach((file) => {
        file.preview = URL.createObjectURL(file);
        this.files.push(file);
      });
    },
    openModal(type) {
      this.$emit("show-modal", type);
    },
    toggleDropdown() {
      this.isDropdownVisible = !this.isDropdownVisible;
    },
    setVisibility(option) {
      this.visibility = option;
      this.isDropdownVisible = false;
    },
    removeFile(index) {
      this.files.splice(index, 1); // Xóa ảnh khỏi mảng
    },
    handleClickOutside(event) {
      if (!this.$refs.dropdown.contains(event.target)) {
        this.isDropdownVisible = false;
      }
    },
  },

  mounted() {
    document.addEventListener("click", this.handleClickOutside);
  },
  beforeUnmount() {
    document.removeEventListener("click", this.handleClickOutside);
    this.files.forEach((file) => URL.revokeObjectURL(file.preview));
  },
};
</script>

<style scoped>
.post-content {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.image-preview {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 10px;
}

.image-container {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.image-item {
  position: relative;
  width: 100px;
  height: 100px;
  overflow: hidden;
  border-radius: 8px;
}

.image-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.delete-btn {
  position: absolute;
  top: 5px;
  right: 5px;
  background: rgba(255, 255, 255, 0.7);
  border: none;
  border-radius: 10px;
  padding: 5px;
  cursor: pointer;
}

.delete-btn i {
  color: rgb(15, 1, 1);
}

.more-images {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border-radius: 8px;
  padding: 5px;
  font-size: 14px;
}

.icon {
  color: #007bff;
}
</style>
