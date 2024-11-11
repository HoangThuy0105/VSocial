<template>
 <div :class="[isDarkMode ? 'dark-mode' : 'light-mode']">
  <div
    :class="[
      isDarkMode ? 'bg-dark text-white border-0' : 'bg-light text-dark border', 
      'modal-container'
    ]">
    <div v-if="isVisible" class="modal-overlay" @click.self="closeModal">
      <div class="modal-content">
        <div class="modal-header">
          <img
            src="https://png.pngtree.com/png-clipart/20210608/ourlarge/pngtree-dark-gray-simple-avatar-png-image_3418404.jpg"
            alt="Avatar"
            class="avatar"
          />
          <h5 class="modal-title ms-3">{{ post.name }}</h5>
        </div>

        <!-- Trường nhập nội dung bài viết -->
        <textarea
          v-model="content"
          class="form-control my-3"
          rows="4"
          placeholder="What's on your mind?"
        ></textarea>

        <!-- Các mục tùy chọn (Nút ảnh và emoji) -->
        <div class="modal-options">
          <div v-show="modalType === 'image'" class="modal-option">
            <label for="file-upload" class="btn btn-light">Ảnh/Video</label>
            <input
              type="file"
              id="file-upload"
              @change="handleFileUpload"
              class="d-none"
            />
          </div>
          <div v-show="modalType === 'emoji'" class="modal-option">
            <button class="btn btn-light">Thêm cảm xúc</button>
          </div>  
        </div>

        <!-- Các nút điều khiển (Nút ảnh và emoji ngay dưới trường nhập liệu) -->
        <div class="action-buttons">
          <button
            @click="openModal('image')"
            class="btn btn-light action-button"
          >
            <i class="fa fa-image"></i>  
          </button>
          <button
            @click="openModal('emoji')"
            class="btn btn-light action-button"
          > 
            <i class="fa fa-smile"></i>  
          </button>
        </div>

        <!-- Các nút điều khiển (Nút Hủy và Đăng) -->
        <div class="modal-footer">
          <button class="btn btn-secondary " @click="closeModal">Cancle</button>
          <button
            class="btn btn-primary ms-2"
            @click="postContent"
            :disabled="!content.trim()"
          >
            Post
          </button>
        </div>
      </div>
    </div>
  </div>
 </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  props: {
    isVisible: Boolean,
    modalType: String,
  },
  data() {
    return {
      content: "",
      file: null, 
      post: {
        name: "user",
      }
    };
  },
  computed: {
     ...mapState("mode",{
      isDarkMode: (state) => state.darkMode,
    }),
    
  },
  methods: {
    closeModal() {
      this.$emit("close");
    },
    postContent() {
      console.log("Post content:", this.content);
      if (this.file) {
        console.log("Post file:", this.file);
      }
      this.closeModal();
    },
    handleFileUpload(event) {
      const file = event.target.files[0];
      if (file) {
        this.file = file;
        console.log("File uploaded:", file);
      }
    },
    openModal(type) {
      this.$emit("show-modal", type); // Emit sự kiện để mở modal
    },
  },
};
</script>

<style scoped>
/* Căn chỉnh modal */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background: white;
  padding: 20px;
  border-radius: 8px;
  width: 500px;
  max-width: 90%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  position: relative;
}

/* Các style cho phần modal */
.modal-header {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
}

.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}

.modal-title {
  font-size: 1.25rem;
  font-weight: bold;
  margin-left: 10px;
}

textarea {
  resize: none;
}

.modal-options {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}

.modal-option button,
.modal-option label {
  font-size: 14px;
  color: #1877f2;
  border: 1px solid #ddd;
  padding: 8px;
  border-radius: 20px;
  cursor: pointer;
}

.modal-option button:hover,
.modal-option label:hover {
  background-color: #f0f0f0;
}

/* Điều chỉnh vị trí action-buttons (Nút ảnh và emoji) */
.action-buttons {
  display: flex;
  justify-content: space-between;
  margin-top: 10px; /* Đặt cách phần trên 1 chút */
  margin-bottom: 20px;
}

.action-button {
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 15px;
  border-radius: 20px;
  color: #1877f2;
  border: 1px solid #ddd;
  cursor: pointer;
}

.action-button i {
  margin-right: 5px;
}

.action-button:hover {
  background-color: #f0f0f0;
}

/* Các style cho nút footer */
.modal-footer {
  display: flex;
  justify-content: flex-end;
}

.modal-footer button {
  font-weight: bold;
  padding: 10px 20px;
}

.modal-footer .btn-primary {
  background-color: #1877f2;
  border-color: #1877f2;
}

.modal-footer .btn-primary:disabled {
  background-color: #ccc;
  border-color: #ccc;
}
</style>
