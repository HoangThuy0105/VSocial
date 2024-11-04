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
 
.dark-mode {
  background-color: #181818;
  color: #ffffff;
}

/* Light mode */
.light-mode {
  background-color: #ffffff;
  color: #000000;
}

/* Adjust modal content for dark mode */
.dark-mode .modal-content {
  background-color: #333333;
  color: #ffffff;
  box-shadow: 0 4px 8px rgba(255, 255, 255, 0.2);
}

.light-mode .modal-content {
  background-color: #ffffff;
  color: #000000;
}

/* Dark mode adjustments for specific elements */
.dark-mode .close {
  color: #ffffff;
}

.dark-mode .username, 
.dark-mode .create-post-title {
  color: #ffffff;
}

.dark-mode .post-textarea {
  background-color: #2a2a2a;
  color: #ffffff;
}

.dark-mode .emoji-icon {
  color: #bbbbbb;
}

.dark-mode .dropzone {
  border-color: #555555;
  background-color: #2a2a2a;
}

.dark-mode .placeholder-icon,
.dark-mode .placeholder-text {
  color: #bbbbbb;
}

.dark-mode .post-button {
  background-color: #1e90ff;
}

.dark-mode .post-button.disabled {
  background-color: #555555;
}

/* Dark mode for emoji picker */
.dark-mode .emoji-picker {
  background: #2a2a2a;
  border-color: #444444;
}

.dark-mode .emoji-picker span {
  color: #ffffff;
}

/* Dark mode for delete icon */
.dark-mode .delete-image-icon {
  color: #ff4d4d;
}
</style>