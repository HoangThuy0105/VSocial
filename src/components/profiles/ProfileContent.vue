<template>
  <div :class="[isDarkMode ? 'dark-mode' : 'light-mode']">
    <!-- Lặp qua các bài viết -->
    <div v-for="(post, index) in posts" :key="post.id" :class="[
      isDarkMode
        ? 'bg-dark text-white border-0'
        : 'bg-light text-dark border',
      'post-container mt-2 mx-auto p-3 ms-4 border rounded',
    ]">
      <!-- Header  -->
      <div class="post-header d-flex align-items-center mb-3">
        <img :src="post.user.avatar" alt="Profile" class="profile-img rounded-circle border" />
        <div class="ms-2">
          <h6 class="mb-0">{{ post.user.name }}</h6>
          <small class="text-muted">
            {{ post.date }} <i class="fas fa-globe"></i>
          </small>
        </div>
        <!-- Dropdown button -->
        <div class="dropdown ms-auto text-muted">
          <button class="btn btn-link p-0" @click="toggleOptions(index)">
            <i class="fa-solid fa-ellipsis text-secondary"></i>
          </button>
          <ul v-if="post.showOptions" ref="dropdownMenu" class="dropdown-menu" aria-labelledby="userDropdown">
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
        <!-- Kiểm tra xem bài viết có ảnh hay không -->
        <p v-if="post.content">{{ post.content }}</p>
        <span v-if="post.content" href="#" class="text-primary">Xem thêm</span>
        <img v-if="post.image" :src="post.image[0]" class="img-content" alt="Post Image" />
      </div>

      <!-- Actions -->
      <div class="post-actions d-flex justify-content-between text-muted border-top pt-2">
        <!-- Like Button -->
        <button class="btn btn-light flex-fill d-flex align-items-center justify-content-center"
          @click="toggleLike(post)">
          <i :class="post.liked ? 'fas fa-thumbs-up' : 'far fa-thumbs-up'"></i>
          Like
          <span class="ms-2">{{ post.likes }}</span>
        </button>

        <!-- Comment Button -->
        <button class="btn btn-light flex-fill d-flex align-items-center justify-content-center">
          <i class="far fa-comment me-2"></i> Comment
          <span class="ms-2">{{ post.comments.length }}</span>
        </button>

        <!-- Share Button -->
        <button class="btn btn-light flex-fill d-flex align-items-center justify-content-center"
          @click="toggleShare(post)">
          <i class="fas fa-share me-2"></i> Share
          <span class="ms-2">{{ post.shares }}</span>
        </button>
      </div>

      <!-- Comments -->
      <div class="comments mt-3">
        <div v-for="comment in post.comments" :key="comment.id" class="comment d-flex align-items-start mb-2">
          <img :src="comment.user.avatar" alt="Avatar" class="profile-img-sm rounded-circle" />
          <div class="comment-body ms-2 bg-light p-2 rounded">
            <h6 class="mb-1">{{ comment.user.name }}</h6>
            <p class="mb-1">{{ comment.content }}</p>
            <small class="text-muted">{{ comment.date }}</small>
          </div>
        </div>

        <!-- Add Comment -->
        <div class="add-comment d-flex align-items-center mt-3">
          <img src="https://img.lovepik.com/free-png/20211130/lovepik-cartoon-avatar-png-image_401205251_wh1200.png"
            alt="Profile" class="profile-img-sm rounded-circle" />
          <input type="text" v-model="newComment" class="form-control ms-2" placeholder="Viết bình luận..."
            @keyup.enter="submitComment" />
          <button class="btn btn-link ms-2 text-muted" @click="submitComment">
            <i class="far fa-paper-plane"></i>
          </button>
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
      posts: [
        {
          id: 1,
          user: {
            name: "User",
            avatar:
              "https://img.lovepik.com/free-png/20211130/lovepik-cartoon-avatar-png-image_401205251_wh1200.png",
          },
          date: "1 giờ trước",
          content:
            "Prefix v- đóng vai trò gợi ý trực quan để nhận ra các thuộc tính riêng của Vue trong template...",
          image: [
            "https://vuanem.com/blog/wp-content/uploads/2023/07/phan-loai-tai-nguyen-thien-nhien.jpg",
            "https://statics.vinwonders.com/gia-ve-vinwonders-nam-hoi-an-3_1688613112.jpg",
          ],
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
        {
          id: 2,
          user: {
            name: "User4",
            avatar:
              "https://img.lovepik.com/free-png/20211130/lovepik-cartoon-avatar-png-image_401205251_wh1200.png",
          },
          date: "2 giờ trước",
          content:
            "Vue.js là một framework mạnh mẽ cho việc phát triển giao diện người dùng, hỗ trợ reactive programming.",
          likes: 5,
          comments: [
            {
              id: 1,
              user: {
                name: "User5",
                avatar:
                  "https://img.lovepik.com/free-png/20211130/lovepik-cartoon-avatar-png-image_401205251_wh1200.png",
              },
              date: "2 phút trước",
              content: "Đúng rồi, Vue rất dễ sử dụng và học!",
            },
          ],
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
    submitComment() {
      if (this.newComment.trim() !== "") {
        console.log(`Bình luận mới: ${this.newComment}`);
        this.newComment = "";
      }
    },
    toggleOptions(index) {
      this.posts[index].showOptions = !this.posts[index].showOptions;
    },
    toggleLike(post) {
      post.liked = !post.liked;
      if (post.liked) {
        post.likes += 1;
      } else {
        post.likes -= 1;
      }
    },
    toggleShare(post) {
      post.shares += 1;
    },
  },
};
</script>

<style scoped>
.post-container {
  max-width: 100%;
  background-color: #f8f9fa;
  border-radius: 8px;
  padding: 15px;
  margin-bottom: 15px;
}

.img-content {
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-top: 10px;
}

.profile-img {
  width: 50px;
  height: 50px;
}

.profile-img-sm {
  width: 35px;
  height: 35px;
}

.comment-body {
  max-width: 500px;
}

.post-actions button {
  color: #6c757d;
}

.add-comment {
  position: relative;
}
</style>
