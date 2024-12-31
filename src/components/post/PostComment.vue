<template>
  <div :class="[isDarkMode ? 'dark-mode' : 'light-mode']">
    <div :class="[
      isDarkMode ? 'bg-dark text-white' : 'bg-light text-dark',
      'modal-container',
    ]">
      <div v-if="isVisible" class="modal-overlay" @click.self="closeModal">
        <div class="modal-comment">
          <!-- Header -->
          <!-- <div class="modal-header">
            <div class="d-flex">
              <h5 class="modal-title justify-content-between fs-4">
                Article by {{ this.getPost.createdBy.username }}
              </h5>
            </div>
            <button class="btn-close" @click="closeModal"></button>
          </div> -->

          <!-- Post Content -->
          <div class="post-content">
            <div class="post-meta">
              <img :src="this.getPost.postImages[0]" alt="Avatar" class="avatar" />
              <div class="d-flex flex-column">
                <span class="post-author">{{ this.getPost.createdBy.username }}</span>
                <span class="post-time">{{ formatDateTime(this.getPost.createdAt) }}</span>
              </div>
            </div>
            <p class="post-caption">
              {{ this.getPost.content }}
            </p>
            <img :src="this.getPost.postImages[0]" alt="Post Image" class="post-image" />
          </div>

          <!-- Comments Section -->
          <div class="comments-section mb-3">
            <h6>Bình luận</h6>
            <div v-for="(comment, index) in comments" :key="index" class="comment">
              <img src="https://m.yodycdn.com/blog/anh-chan-dung-dep-yodyvn3.jpg" alt="Avatar" class="comment-avatar" />
              <div class="comment-content">
                <span class="comment-author">{{ comment.createdBy.username }}</span>
                <p class="comment-text">{{ comment.comment }}</p>
              </div>
            </div>
            <div v-if="comments.length === 0" class="no-comment">
              <p>Chưa có bình luận</p>
            </div>
          </div>

          <!-- Add Comment Section -->
          <div>
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
            <p class="comment-warn">{{ message }}</p>
          </div>

          <!-- Footer -->
          <div class="modal-footer">
            <button class="btn btn-secondary" @click="closeModal">Cancel</button>
            <button class="btn ms-2" :class="commentText.trim() ? 'btn-post-active' : 'btn-post-disabled'"
              @click="addComment" :disabled="!commentText.trim()">
              Post
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import { checkComment, createComment, getComment } from "@/service/commentService"
import { formatDateTime } from '@/utils/index';
import { useToast } from 'vue-toastification'
const toast = useToast()

export default {
  props: {
    isVisible: Boolean,
    modalType: String,
  },
  data() {
    return {
      content: "",
      commentText: "",
      message: "",
      post: this.getPost,
      comments: [],
    };
  },
  computed: {
    ...mapState("mode", {
      isDarkMode: (state) => state.darkMode,
    }),
    ...mapGetters('post', ['getPost']),
    ...mapGetters('auth', ['getAccountId']),
  },
  methods: {
    formatDateTime,
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
    async addComment() {
      const response = await checkComment({ inputs: this.commentText });
      if (response.status === 200) {
        if (response.data[0].length > 0) {
          let filteredData = response.data[0].slice(0, 5);
          let formattedData = filteredData.join(', ') + ', ...';
          this.message = `Cảnh cáo ngôn từ xúc phạm: ${formattedData}`
        } else {
          this.message = "";
          const accountId = this.getAccountId
          const postId = this.getPost.postId
          const res = await createComment({ postId, accountId, comment: this.commentText })
          if (res && res.status === 200) {
            this.commentText = "";
            this.getComments();
            toast.success('Bình luận thành công')
          } else {
            toast.error('Bình luận thất bại, hãy thử lại')
          }
        }
      }

      // if (this.commentText.trim()) {
      //   this.comments.push({
      //     name: "User",
      //     text: this.commentText,
      //   });
      //   this.commentText = "";
      // }
    },
    async getComments() {
      const response = await getComment(this.getPost.postId)
      if (response && response.status === 200) {
        this.comments = response.data.result;
        console.log(response.data.result)
      } else {
        console.log("Error")
      }
    }
  },
  mounted() {
    this.getComments();
    // console.log(this.getPost); 
  },
};
</script>

<style src="@\assets\css\style.css"></style>
