<template>
    <div class="post-container mt-2 mx-auto bg-white p-3 ms-4 border rounded">
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
        <button class="btn btn-link ms-auto text-muted">
          <i class="fas fa-ellipsis-h"></i>
        </button>
      </div>
  
      <!-- content post -->
      <div class="post-body mb-3">
        <p>
          {{ post.content }}
        </p>
        <a href="#" class="text-primary">Xem thêm</a>
      </div>
  
      <!--  -->
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
  
      <!-- content comment -->
      <div class="comments mt-3">
        <div v-for="comment in post.comments" :key="comment.id" class="comment d-flex align-items-start mb-2">
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
  
        <!-- comment -->
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
          <!--   menu emoji -->
          <button
            class="btn btn-link ms-2 text-muted"
            @click="toggleEmojiMenu"
          >
            <i class="fas fa-smile"></i>
          </button>
  
          <!-- Menu emoji -->
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
  </template>
  
  <script>
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
            "Prefix v- đóng vai trò gợi ý trực quan để nhận ra các thuộc tính riêng của Vue trong template. Điều này có ích khi bạn sử dụng Vue vào các dự án có sẵn, tuy nhiên đối với các directive được dùng thường xuyên thì v- có thể trông hơi rườm rà. Thêm vào đó v- trở nên kém quan trọng hơn khi bạn xây dựng các ứng dụng một trang, trong đó Vue quản lí toàn bộ các template. Vì thế Vue cung cấp dạng rút gọn (shorthand) đặc biệt cho hai trong số các directive được dùng nhiều nhất, v-bind và v-on",
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
        ////////



        user: {
            name: "User",
            avatar:
              "https://img.lovepik.com/free-png/20211130/lovepik-cartoon-avatar-png-image_401205251_wh1200.png",
          },
          date: "1 giờ trước",
          content:
            "Chiều 30/03/2022, Công ty cổ phần Vietnam Blockchain, Quỹ Châu Á - Việt Nam (TAF) và Công ty Cổ phần Dịch vụ An toàn thông tin TP.HCM (HISSC) và Công viên phần mềm Quang Trung (QTSC) phối hợp tổ chức Hội thảo chuyên đề...",
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
        
      };
    },
    methods: {
      submitComment() {
        if (this.newComment.trim() !== "") {
          // Gửi yêu cầu thêm bình luận (thực hiện logic gửi bình luận)
          console.log(`Bình luận mới: ${this.newComment}`);
          // Reset lại ô nhập sau khi gửi
          this.newComment = "";
        }
      },
      toggleEmojiMenu() {
        this.showEmojiMenu = !this.showEmojiMenu;  
      },
      addEmoji(emoji) {
        this.newComment += emoji;   
        this.showEmojiMenu = false;  
      }
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
  