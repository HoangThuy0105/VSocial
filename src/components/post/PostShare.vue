<template>
  <div :class="[isDarkMode ? 'dark-mode' : 'light-mode']">
    <div
      :class="[
        isDarkMode
          ? 'bg-dark text-white border-0'
          : 'bg-light text-dark border',
        'post-input p-3 ms-5 mb-3 rounded',
      ]" :style="{ maxWidth: '600px' }"
    >
        <div class="modal-body"> 
          <!-- User Information Section -->
          <div class="d-flex align-items-center mb-3">
            <img
              src="https://png.pngtree.com/png-clipart/20210608/ourlarge/pngtree-dark-gray-simple-avatar-png-image_3418404.jpg"
              alt="User" style="width: 50px; height: 50px; cursor: pointer"
              class="rounded-circle me-2"
            />
            <div>
              <h6 class="mb-0">User</h6>
              <select class="form-select form-select-sm w-auto">
                <option>Bảng feed</option>
                <option>Chỉ mình tôi</option>
                <option>Bạn bè</option>
              </select>
            </div>
          </div>

          <!-- Textarea -->
          <textarea
            class="form-control mb-3"
            rows="3"
            placeholder="Hãy nói gì đó về nội dung này..."
          ></textarea>

          <!-- Share Button -->
          <button class="btn btn-primary w-100 mb-3">Chia sẻ ngay</button>

          <!-- Messenger Section -->
          <div class="mb-3">
            <h6>Gửi bằng Messenger</h6>
            <div class="d-flex">
              <div
                v-for="(user, index) in messengerUsers"
                :key="index"
                class="text-center me-2 ms-4"
              >
                <img
                  :src="user.avatar"
                  alt="User"
                  class="rounded-circle"
                  width="50"
                  height="50"
                />
                <p class="small">{{ user.name }}</p>
              </div>
            </div>
          </div>

          <!-- Share Options Section -->
          <div>
            <h6>Chia sẻ lên</h6>
            <div class="d-flex justify-content-around " >
              <i class="bi bi-messenger fs-3" style=" cursor: pointer;"></i>
              <i class="bi bi-whatsapp fs-3" style=" cursor: pointer;"></i>
              <i class="bi bi-journal-bookmark fs-3 " style=" cursor: pointer;"></i>
              <i class="bi bi-link fs-3" style=" cursor: pointer;"></i>
              <i class="bi bi-people fs-3" style=" cursor: pointer;"></i>
              <i class="bi bi-shop fs-3" style=" cursor: pointer;"></i>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PostShare",
  data() {
    return {
      messengerUsers: [
        { name: "user1", avatar: "https://png.pngtree.com/png-clipart/20210608/ourlarge/pngtree-dark-gray-simple-avatar-png-image_3418404.jpg" },
        { name: "user1", avatar: "https://png.pngtree.com/png-clipart/20210608/ourlarge/pngtree-dark-gray-simple-avatar-png-image_3418404.jpg" },
        { name: "user1", avatar: "https://png.pngtree.com/png-clipart/20210608/ourlarge/pngtree-dark-gray-simple-avatar-png-image_3418404.jpg" },
        { name: "user1", avatar: "https://png.pngtree.com/png-clipart/20210608/ourlarge/pngtree-dark-gray-simple-avatar-png-image_3418404.jpg" },
        { name: "user1", avatar: "https://png.pngtree.com/png-clipart/20210608/ourlarge/pngtree-dark-gray-simple-avatar-png-image_3418404.jpg" },
        { name: "user1", avatar: "https://png.pngtree.com/png-clipart/20210608/ourlarge/pngtree-dark-gray-simple-avatar-png-image_3418404.jpg" },
      ],
       isSharePostVisible: false
    };
  },
  // watch: {
  //   isSharePostVisible(newVal) {
  //     if (newVal) {
  //       const shareModal = new window.bootstrap.Modal(
  //         document.getElementById("shareModal")
  //       );
  //       shareModal.show();
  //     }
  //   },
  // },
  methods: {
    closeSharePost() {
      this.isSharePostVisible = false;
    },
  },
   
};
</script>

<style scoped>
.modal-content {
  border-radius: 8px;
}
.modal-body h6 {
  font-weight: bold;
}
.text-center p {
  font-size: 0.85rem;
  margin-top: 5px;
}
</style>
