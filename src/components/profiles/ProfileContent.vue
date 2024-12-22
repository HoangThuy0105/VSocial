<template>
  <div :class="[isDarkMode ? 'dark-mode' : 'light-mode']">
    <div
      :class="[
        isDarkMode
          ? 'bg-dark text-white border-0'
          : 'bg-light text-dark border',
        'post-container mt-2 mx-auto bg-white p-3 ms-4 border rounded',
      ]"
    >
      <!-- Header  -->
      <div class="post-header d-flex align-items-center mb-3">
        <img
          :src="post.user.avatar"
          alt="Profile"
          class="profile-img rounded-circle border"
        />
        <div class="ms-2">
          <h6 class="mb-0">{{ post.user.name }}</h6>
          <small class="text-muted">
            {{ post.date }} <i class="fas fa-globe"></i
          ></small>
        </div>
        <!-- Dropdown button -->
        <div class="dropdown ms-auto text-muted">
          <button class="btn btn-link p-0" @click="toggleOptions(index)">
            <i class="fa-solid fa-ellipsis text-secondary"></i>
          </button>
          <ul
            v-if="post.showOptions"
            ref="dropdownMenu"
            class="dropdown-menu"
            aria-labelledby="userDropdown"
          >
            <li>
              <a class="dropdown-item" href=" ">
                <i class="fa-solid fa-flag me-2"></i> Pin the post
              </a>
            </li>
            <li>
              <a class="dropdown-item" href=" ">
                <i class="fa-solid fa-circle-minus me-2"></i> Delete
              </a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Post content -->
      <div class="post-body mb-3">
        <p>{{ post.content }}</p>
        <a href="#" class="text-primary">Xem thêm</a>
      </div>

      <!-- Actions -->
      <div
        class="post-actions d-flex justify-content-between text-muted border-top pt-2"
      >
        <button
          class="btn btn-light flex-fill d-flex align-items-center justify-content-center"
        >
          <i class="far fa-thumbs-up me-2"></i> Like
        </button>
        <button
          class="btn btn-light flex-fill d-flex align-items-center justify-content-center"
        >
          <i class="far fa-comment me-2"></i> Comment
        </button>
        <button
          class="btn btn-light flex-fill d-flex align-items-center justify-content-center"
        >
          <i class="fas fa-share me-2"></i> Share
        </button>
      </div>

      <!-- Comments -->
      <div class="comments mt-3">
        <div
          v-for="comment in post.comments"
          :key="comment.id"
          class="comment d-flex align-items-start mb-2"
        >
          <img
            :src="comment.user.avatar"
            alt="Avatar"
            class="profile-img-sm rounded-circle"
          />
          <div class="comment-body ms-2 bg-light p-2 rounded">
            <h6 class="mb-1">{{ comment.user.name }}</h6>
            <p class="mb-1">{{ comment.content }}</p>
            <small class="text-muted">{{ comment.date }}</small>
          </div>
        </div>

        <!-- Add Comment -->
        <div class="add-comment d-flex align-items-center mt-3">
          <img
            src="https://img.lovepik.com/free-png/20211130/lovepik-cartoon-avatar-png-image_401205251_wh1200.png"
            alt="Profile"
            class="profile-img-sm rounded-circle"
          />
          <input
            type="text"
            v-model="newComment"
            class="form-control ms-2"
            placeholder="Viết bình luận..."
            @keyup.enter="submitComment"
          />
          <button class="btn btn-link ms-2 text-muted" @click="toggleEmojiMenu">
            <i class="fas fa-smile"></i>
          </button>

          <!-- Emoji Menu -->
          <div
            v-if="showEmojiMenu"
            class="emoji-menu position-absolute bg-white border rounded p-2 mt-2 dropdown-menu"
          >
            <button class="btn btn-link text-muted" @click="addEmoji('😊')">
              😊
            </button>
            <button class="btn btn-link text-muted" @click="addEmoji('😂')">
              😂
            </button>
            <button class="btn btn-link text-muted" @click="addEmoji('❤️')">
              ❤️
            </button>
            <button class="btn btn-link text-muted" @click="addEmoji('👍')">
              👍
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
  name: "ProfileContent",
  data() {
    return {
      newComment: "",
      showEmojiMenu: false,
      post: {
        user: {
          name: "User",
          avatar:
            "https://img.lovepik.com/free-png/20211130/lovepik-cartoon-avatar-png-image_401205251_wh1200.png",
        },
        date: "1 giờ trước",
        content:
          "Prefix v- đóng vai trò gợi ý trực quan để nhận ra các thuộc tính riêng của Vue trong template...",
        likes: 10,
        comments: [
          {
            id: 1,
            user: {
              name: "User2",
              avatar:
                "https://img.lovepik.com/free-png/20211130/lovepik-cartoon-avatar-png-image_401205251_wh1200.png",
            },
            date: "5 phút trước",
            content: "Phát biểu hay quá chị ơi, đồng ý lắm luôn!",
          },
          {
            id: 2,
            user: {
              name: "User3",
              avatar:
                "https://img.lovepik.com/free-png/20211130/lovepik-cartoon-avatar-png-image_401205251_wh1200.png",
            },
            date: "10 phút trước",
            content: "Cảm ơn chị đã chia sẻ thông tin hữu ích!",
          },
        ],
      },
      liked: false,
      saved: false,
      showOptions: false,
    };
  },
  computed: {
    ...mapState("mode", {
      isDarkMode: (state) => state.darkMode,
    }),
    filteredComments() {
      // Use computed property to filter comments if necessary
      return this.post.comments.filter(
        (comment) => comment.content.trim() !== ""
      );
    },
  },
  methods: {
    submitComment() {
      if (this.newComment.trim() !== "") {
        console.log(`Bình luận mới: ${this.newComment}`);
        this.newComment = "";
      }
    },
    toggleEmojiMenu() {
      this.showEmojiMenu = !this.showEmojiMenu;
    },
    addEmoji(emoji) {
      this.newComment += emoji;
      this.showEmojiMenu = false;
    },
    toggleOptions() {
      this.post.showOptions = !this.post.showOptions;
    },
  },
};
</script>

<style scoped>
.post-container {
  max-width: 100%;
}
.profile-img {
  width: 50px;
  height: 50px;
}
.profile-img-sm {
  width: 40px;
  height: 40px;
}
.post-actions button {
  color: #6c757d;
}
.comment-body {
  max-width: 500px;
}
.emoji-menu button {
  font-size: 20px;
}
.add-comment {
  position: relative;
}
</style>
