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
      this.$emit("show-modal", type);  
    },
  },
};
</script>

<style src="@/assets/css/style.css"></style>
