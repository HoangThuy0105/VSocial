<template>
  <div :class="[isDarkMode ? 'dark-mode' : 'light-mode']">
    <div :class="[
      isDarkMode ? 'bg-dark text-white' : 'bg-light text-dark',
      'modal-container',
    ]">
      <div v-if="isVisible" class="modal-overlay" @click.self="closeModal">
        <div class="modal-content">
          <!-- Header -->
          <div class="modal-header">
            <div class="d-flex">
              <h5 class="modal-title justify-content-between  fs-4">
                Article by {{ post.username }}
              </h5>
            </div>
            <button class="btn-close" @click="closeModal"></button>
          </div>

          <!-- Post Content -->
          <div class="post-content">
            <div class="post-meta">
              <img
                src="https://imgs.search.brave.com/ZvgaT0jU7k3opm1MVLsHrBRjgqS5YOxHY127rRfjWx8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTAz/MTQzMDIxNC9waG90/by95b3VuZy13b21h/bi1rYXlha2luZy10/aHJvdWdoLXRoZS1i/YWNrd2F0ZXJzLW9m/LW1vbnJvZS1pc2xh/bmQuanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPWtidjJzMWtr/bk16SmdrOE5kLVcy/Vk5JZjBBRng0OFl0/Q3F5Z3RJM1Bwb3M9"
                alt="Avatar" class="avatar" />
              <div class="d-flex flex-column">
                <span class="post-author">{{ post.username }}</span>
                <span class="post-time">{{ post.time }}</span>
              </div>
            </div>
            <p class="post-caption">
              {{ post.content }}
            </p>
            <img
              src="https://imgs.search.brave.com/uaH-PDSxfp-JVO2Ett8dR6Fh8XPwymJatTv29nsE698/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/YnJhbmRmb2xkZXIu/aW8vUlY3SzgzMDgv/YXQvY3QzaG1na3J0/eHZjY2dzbjNmdDdu/dzJ0L3N0ZW1faG9t/ZXBhZ2Uud2VicA"
              alt="Post Image" class="post-image" />
          </div>

          <!-- Comments Section -->
          <div class="comments-section mb-3">
            <h6>Comments</h6>
            <div v-for="(comment, index) in comments" :key="index" class="comment">
              <img src="https://m.yodycdn.com/blog/anh-chan-dung-dep-yodyvn3.jpg" alt="Avatar" class="comment-avatar" />
              <div class="comment-content">
                <span class="comment-author">{{ comment.name }}</span>
                <p class="comment-text">{{ comment.text }}</p>
              </div>
            </div>
          </div>

          <!-- Add Comment Section -->
          <div class="comment-input">
            <img src="https://m.yodycdn.com/blog/anh-chan-dung-dep-yodyvn2.jpg" alt="Avatar" class="comment-avatar" />
            <input ref="commentInput" :class="[
              'form-control',
              isDarkMode
                ? 'bg-dark text-white border border-secondary'
                : 'bg-light border',
            ]" v-model="commentText" class="form-control" type="text" placeholder="Write a comment..."
              @keydown.enter="addComment" />
          </div>

          <!-- Footer -->
          <div class="modal-footer">
            <button class="btn btn-secondary" @click="closeModal">
              Cancel
            </button>
            <button class="btn ms-2" :class="commentText.trim() ? 'btn-post-active' : 'btn-post-disabled'
              " @click="addComment" :disabled="!commentText.trim()">
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
      commentText: "",
      post: {
        username: "Tha Huong",
        content:
          " 🏞️ Explore the serene beauty of the riverine landscapes, where small boats glide gently on tranquil waters, and the picturesquescenery blends harmoniously with the unique culture of theriverside communities.🛶",
        time: "09:12",
      },
      comments: [
        {
          name: "Thao Le",
          text: "very nice, beautiful way peaceful nature and culture of peaceful river tourism",
        },
        {
          name: "Lan Hoang",
          text: "Can you help me know more about activities like fishing or visiting local markets to get a better idea of ​​the experience?",
        },
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
    addComment() {
      if (this.commentText.trim()) {
        this.comments.push({
          name: "User",
          text: this.commentText,
        });
        this.commentText = "";
      }
    },
  },
};
</script>

<style src="@/assets/css/style.css"></style>