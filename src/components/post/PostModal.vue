<template>
  <div :class="[isDarkMode ? 'dark-mode' : 'light-mode']">
    <div class="modal" v-if="isVisible">
      <div :class="['modal-content', { 'bg-dark text-white': isDarkMode }]">
        <div class="d-flex justify-content-center">
          <h1 class="create-post-title">Create Post</h1>
        </div>
        <span class="close" @click="closeModal">&times;</span>
        <div class="modal-header">
          <img
            src="https://png.pngtree.com/png-clipart/20210608/ourlarge/pngtree-dark-gray-simple-avatar-png-image_3418404.jpg"
            alt="Profile"
            class="avatar"
          />
          <h3 class="username">User Name</h3>
        </div>
        <div class="post-input">
          <div class="input-container">
            <textarea
              v-model="postContent"
              placeholder="What's on your mind?"
              class="post-textarea"
              @focus="showEmojiPicker = true"
              @blur="hideEmojiPicker"
            ></textarea>
            <i class="fas fa-smile emoji-icon" @click="toggleEmojiPicker"></i>
            <div v-if="showEmojiPicker" class="emoji-picker">
              <span @click="addEmoji('😀')">😀</span>
              <span @click="addEmoji('😃')">😃</span>
              <span @click="addEmoji('😄')">😄</span>
              <span @click="addEmoji('😁')">😁</span>
              <span @click="addEmoji('😆')">😆</span>
              <span @click="addEmoji('😅')">😅</span>
              <span @click="addEmoji('😂')">😂</span>
              <span @click="addEmoji('🤣')">🤣</span>
            </div>
          </div>
        </div>
        <div class="dropzone" @dragover.prevent @drop="handleDrop">
          <div class="image-container">
            <img
              v-for="(file, index) in imagePreviews"
              :key="index"
              :src="file"
              alt="Selected"
              class="preview-image"
            />
            <i
              v-for="(file, index) in imagePreviews"
              :key="`delete-${index}`"
              class="fas fa-times delete-image-icon"
              @click="removeImage(index)"
            ></i>
          </div>
          <div v-if="imagePreviews.length === 0" class="placeholder">
            <i class="fas fa-image placeholder-icon"></i>
            <span class="placeholder-text"
              >Drag and drop your files here or click to select</span
            >
          </div>

          <input
            type="file"
            accept="image/*"
            multiple
            @change="handleFileChange"
            class="file-input"
            id="file-input"
            ref="fileInput"
          />
          <i class="fas fa-plus add-image-icon" @click="triggerFileInput"></i>

          <i
            v-if="postContent && selectedFiles.length === 0"
            class="fas fa-times remove-image"
            @click="removeImage"
          ></i>
        </div>
        <div class="d-flex mt-3">
          <button
            class="post-button"
            :class="{ disabled: !postContent && !selectedFiles.length }"
            :disabled="!postContent && !selectedFiles.length"
            @click="submitPost"
          >
            Post
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  props: {
    isVisible: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      postContent: "",
      selectedFiles: [],
      imagePreviews: [],
      showEmojiPicker: false,
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
      this.resetPost();
    },
    submitPost() {
      console.log(this.postContent);
      console.log(this.selectedFiles);
      this.closeModal();
    },
    handleDrop(event) {
      const files = Array.from(event.dataTransfer.files);
      this.addFiles(files);
    },
    handleFileChange(event) {
      const files = Array.from(event.target.files);
      this.addFiles(files);
    },
    addFiles(files) {
      files.forEach((file) => {
        if (file && file.type.startsWith("image/")) {
          this.selectedFiles.push(file);
          this.createImagePreview(file);
        }
      });
    },
    createImagePreview(file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        this.imagePreviews.push(e.target.result);
      };
      reader.readAsDataURL(file);
    },
    removeImage(index) {
      this.selectedFiles.splice(index, 1);
      this.imagePreviews.splice(index, 1);
    },
    triggerFileInput() {
      this.$refs.fileInput.click();
    },
    toggleEmojiPicker() {
      this.showEmojiPicker = !this.showEmojiPicker;
    },
    addEmoji(emoji) {
      this.postContent += emoji;
    },
    hideEmojiPicker() {
      this.showEmojiPicker = false;
    },
    resetPost() {
      this.postContent = "";
      this.selectedFiles = [];
      this.imagePreviews = [];
    },
    toggleDarkMode() {
      this.$store.dispatch("toggleDarkMode");
    },
  },
  mounted() {
    document.addEventListener("click", (event) => {
      const target = event.target;
      const inputContainer = this.$el.querySelector(".input-container");
      if (!inputContainer.contains(target)) {
        this.showEmojiPicker = false;
      }
    });
  },
};
</script>

<style scoped>
.modal {
  display: flex;
  position: fixed;
  z-index: 1000;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.5);
}

.modal-content {
  background-color: #ffffff;
  margin: auto;
  padding: 20px;
  border-radius: 8px;
  width: 90%;
  max-width: 500px;
  position: relative;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.close {
  position: absolute;
  top: 10px;
  right: 15px;
  color: #aaa;
  font-size: 20px;
  cursor: pointer;
}

.modal-header {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.avatar {
  border-radius: 50%;
  width: 40px;
  height: 40px;
  margin-right: 10px;
}

.username {
  font-size: 18px;
  font-weight: bold;
  color: #1c1e21;
}

.create-post-title {
  font-size: 24px;
  font-weight: bold;
  color: #1c1e21;
}

.post-input {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.input-container {
  position: relative;
  width: 100%;
}

.post-textarea {
  flex-grow: 1;
  height: 100px;
  border: none;
  background: transparent;
  padding: 10px;
  resize: none;
  font-size: 16px;
  outline: none;
  transition: border-color 0.2s;
}

.post-textarea:focus {
  outline: none;
}

.emoji-icon {
  font-size: 24px;
  color: #6d6f72;
  position: absolute;
  right: 10px;
  bottom: 10px;
  cursor: pointer;
}

.emoji-picker {
  position: absolute;
  bottom: 100%;
  right: 0;
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
  display: flex;
  flex-wrap: wrap;
  z-index: 1000;
}

.emoji-picker span {
  font-size: 20px;
  cursor: pointer;
  margin: 5px;
}

.dropzone {
  margin-top: 10px;
  padding: 20px;
  border: 2px dashed #ccc;
  border-radius: 5px;
  text-align: center;
  font-size: 14px;
  color: #888;
  cursor: pointer;
  transition: border-color 0.2s;
  position: relative;
}

.dropzone:hover {
  border-color: #6d6f72;
  background-color: #f0f8ff;
}

.file-input {
  display: none;
}

.image-container {
  display: flex;
  flex-wrap: wrap;
  position: relative;
}

.preview-image {
  max-width: 100px;
  max-height: 100px;
  margin: 5px;
  border-radius: 5px;
}

.delete-image-icon {
  position: absolute;
  top: 0;
  right: 0;
  color: red;
  cursor: pointer;
  font-size: 18px;
}

.placeholder {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.placeholder-icon {
  font-size: 48px;
  color: #007bff;
}

.placeholder-text {
  margin-top: 10px;
  font-size: 14px;
}

.add-image-icon {
  position: absolute;
  bottom: 10px;
  right: 10px;
  font-size: 24px;
  color: #007bff;
  cursor: pointer;
}

.post-button {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  color: #ffffff;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.2s;
}

.post-button.disabled {
  background-color: #ccc;
  cursor: not-allowed;
}
/* Dark mode */
.dark-mode {
  background-color: #181818;
  color: #ffffff;
}

/* Light mode */
.light-mode {
  background-color: #ffffff;
  color: #000000;
}

/* Điều chỉnh modal-content cho dark mode */
.dark-mode .modal-content {
  background-color: #333333;
  color: #ffffff;
}

.light-mode .modal-content {
  background-color: #ffffff;
  color: #000000;
}
</style>
