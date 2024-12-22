<template>
  <div :class="[isDarkMode ? 'dark-mode' : 'light-mode']">
    <div
      :class="[
        isDarkMode
          ? 'bg-dark text-white border-0'
          : 'bg-light text-dark border',
        'modal-container',
      ]"
    >
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

          <textarea
            v-model="content"
            class="form-control my-3"
            rows="4"
            placeholder="What's on your mind?"
          ></textarea>

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

          <!-- Hiển thị bình luận dưới phần nhập liệu -->
          <div class="comments-section mt-3">
            <div
              v-for="(comment, index) in comments"
              :key="index"
              class="comment"
            >
              <div class="comment-header">
                <img
                  src="https://png.pngtree.com/png-clipart/20210608/ourlarge/pngtree-dark-gray-simple-avatar-png-image_3418404.jpg"
                  alt="Avatar"
                  class="avatar"
                />
                <span>{{ comment.name }}</span>
              </div>
              <p>{{ comment.text }}</p>
            </div>
          </div>

          <div class="modal-footer">
            <button class="btn btn-secondary" @click="closeModal">
              Cancel
            </button>
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
      },
      comments: [
        { name: "John Doe", text: "This is a sample comment!" },
        { name: "Jane Smith", text: "Looks awesome!" },
      ],
    };
  },
  computed: {
    ...mapState("mode", {
      isDarkMode: (state) => state.darkMode,
    }),
  },
  methods: {
    closeModal() {
      this.$emit("close");
    },
    postContent() {
      if (this.content.trim()) {
        this.comments.push({
          name: this.post.name,
          text: this.content,
        });
        this.content = "";  
        this.closeModal();
      }
    },
    handleFileUpload(event) {
      const file = event.target.files[0];
      if (file) {
        this.file = file;
        console.log("File uploaded:", file);
      }
    },
    openModal(type) {
      this.$emit("show-modal", type);
    },
  },
};
</script>

<style scoped>
.modal-container {
  max-width: 500px;
  margin: 0 auto;
  padding: 15px;
  border-radius: 10px;
  background-color: #fff;
}

.comments-section {
  max-height: 300px;
  overflow-y: auto;
}

.comment {
  padding: 10px 0;
  border-bottom: 1px solid #ddd;
}

.comment-header {
  display: flex;
  align-items: center;
}

.avatar {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 10px;
}

textarea {
  width: 100%;
}

.modal-options {
  display: flex;
  gap: 10px;
}

.modal-option button {
  width: 100px;
}

.action-buttons {
  display: flex;
  gap: 10px;
  justify-content: flex-start;
}

.btn-light {
  background-color: #f1f1f1;
}

.modal-footer {
  display: flex;
  justify-content: flex-end;
}

.btn-secondary,
.btn-primary {
  padding: 10px;
}
</style>
