<template>
  
  <div class="post-input p-3 mb-3 border rounded bg-dark text-light">
    <div class="d-flex align-items-center mb-2">
      <img src="https://png.pngtree.com/png-clipart/20210608/ourlarge/pngtree-dark-gray-simple-avatar-png-image_3418404.jpg" alt="Profile" class="rounded-circle me-2" width="40" height="40" />
      <input
        type="text"
        class="form-control bg-secondary text-light border-0"
        placeholder="What's on your mind?"
        v-model="postContent"
      />
    </div>

    <div class="d-flex justify-content-between align-items-center mt-2">
      <div class="d-flex gap-3"> 
        <button class="btn btn-link text-light" @click="triggerFileInput('photo')">
          <i class="fas fa-image"></i>
        </button>
        <button class="btn btn-link text-light" @click="triggerFileInput('file')">
          <i class="fas fa-paperclip"></i>
        </button>
        <button class="btn btn-link text-light" @click="selectOption('location')">
          <i class="fas fa-map-marker-alt"></i>
        </button>
        <button class="btn btn-link text-light" @click="selectOption('emoji')">
          <i class="fas fa-smile"></i>
        </button>
      </div>
      <div>
        <button class="btn btn-outline-secondary me-2" @click="saveDraft">Draft</button>
        <button class="btn btn-primary" @click="postContentHandler">Post</button>
      </div>
    </div>
 
    <input type="file" ref="photoInput" accept="image/*" style="display: none" @change="handleFileChange('photo')" />
    <input type="file" ref="fileInput" style="display: none" @change="handleFileChange('file')" />
 
    <div v-if="photoPreview" class="mt-3">
      <img :src="photoPreview" alt="Preview" class="img-fluid rounded" style="max-width: 100%;" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      postContent: "",
      selectedOption: null,
      photoPreview: null,
    };
  },
  methods: {
    selectOption(option) {
      this.selectedOption = option;
    },
    triggerFileInput(type) {
      this.selectedOption = type;
      if (type === 'photo') {
        this.$refs.photoInput.click();
      } else if (type === 'file') {
        this.$refs.fileInput.click();
      }
    },
    handleFileChange(type) {
      const fileInput = type === 'photo' ? this.$refs.photoInput : this.$refs.fileInput;
      const file = fileInput.files[0];
      if (file && type === 'photo') {
        this.photoPreview = URL.createObjectURL(file);
      }
    },
    saveDraft() {
      alert("Draft saved!");
    },
    postContentHandler() {
      alert("Post submitted!");
      this.clearPost();
    },
    clearPost() {
      this.postContent = "";
      this.photoPreview = null;
      this.selectedOption = null;
    },
  },
};
</script>

<style scoped>
.post-input {
  max-width: 600px;
  width: 90%;
  padding: 15px;
  margin: auto;
  border-radius: 8px;
}
 
@media (max-width: 768px) {
  .post-input {
    width: 95%;  
  } 
}
 
@media (min-width: 768px) {
  .post-input {
    width: 80%; 
  }
}
</style>
  
