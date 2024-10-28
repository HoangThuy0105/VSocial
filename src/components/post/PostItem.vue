<template>
  <div class="post-input p-3 ms-5 mb-3 border rounded bg-dark text-light">
    <div class="d-flex align-items-center mb-2">
      <img
        :src="post.avartar"
        class="rounded-circle me-2"
        style="width: 50px; height: 50px; cursor: pointer"
        alt="User"
      />
      <input
        type="text"
        class="form-control bg-secondary text-light border-0 cursor-pointer"
        placeholder="What's on your mind?"
        v-model="postContent"
        @focus="isModalOpen = true"
        @click.prevent
      />
    </div>

    <div class="d-flex justify-content-between align-items-center mt-2">
      <div class="d-flex gap-3">
        <button class="btn btn-link text-light" @click="isModalOpen = true">
          <i class="fas fa-image"></i>
        </button>
        <button class="btn btn-link text-light" @click="isModalOpen = true">
          <i class="fas fa-paperclip"></i>
        </button>
        <button class="btn btn-link text-light" @click="isModalOpen = true">
          <i class="fas fa-map-marker-alt"></i>
        </button>
        <button class="btn btn-link text-light" @click="isModalOpen = true">
          <i class="fas fa-smile"></i>
        </button>
      </div>
      <div>
        <button class="btn btn-outline-secondary me-2">Draft</button>
        <button class="btn btn-primary">Post</button>
      </div>
    </div>
    <PostModal
      v-if="isModalOpen"
      :isVisible="isModalOpen"
      @close="isModalOpen = false"
    />
  </div>
</template>

<script>
import PostModal from "./PostModal.vue";

export default {
  components: {
    PostModal,
  },
  data() {
    return {
      postContent: "",
      isModalOpen: false,
      post: {
        avartar:
          "https://png.pngtree.com/png-clipart/20210608/ourlarge/pngtree-dark-gray-simple-avatar-png-image_3418404.jpg",
      },
    };
  },
};
</script>
