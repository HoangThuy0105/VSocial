<template>
  <div class="modal fade" id="shareModal" tabindex="-1" aria-labelledby="shareModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="shareModalLabel">Chia sẻ</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <!-- User Information Section -->
          <div class="d-flex align-items-center mb-3">
            <img src="https://via.placeholder.com/40" alt="User" class="rounded-circle me-2" />
            <div>
              <h6 class="mb-0">Hoàng Thùy</h6>
              <select class="form-select form-select-sm w-auto">
                <option>Bảng feed</option>
                <option>Chỉ mình tôi</option>
                <option>Bạn bè</option>
              </select>
            </div>
          </div>

          <!-- Textarea -->
          <textarea class="form-control mb-3" rows="3" placeholder="Hãy nói gì đó về nội dung này..."></textarea>

          <!-- Share Button -->
          <button class="btn btn-primary w-100 mb-3">Chia sẻ ngay</button>

          <!-- Messenger Section -->
          <div class="mb-3">
            <h6>Gửi bằng Messenger</h6>
            <div class="d-flex">
              <div v-for="(user, index) in messengerUsers" :key="index" class="text-center me-2">
                <img :src="user.avatar" alt="User" class="rounded-circle" width="50" height="50" />
                <p class="small">{{ user.name }}</p>
              </div>
            </div>
          </div>

          <!-- Share Options Section -->
          <div>
            <h6>Chia sẻ lên</h6>
            <div class="d-flex justify-content-around">
              <i class="bi bi-messenger fs-3"></i>
              <i class="bi bi-whatsapp fs-3"></i>
              <i class="bi bi-journal-bookmark fs-3"></i>
              <i class="bi bi-link fs-3"></i>
              <i class="bi bi-people fs-3"></i>
              <i class="bi bi-shop fs-3"></i>
            </div>
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
        { name: '20SE4', avatar: 'https://via.placeholder.com/50' },
        { name: 'Tuấn Lê', avatar: 'https://via.placeholder.com/50' },
        { name: 'Chị Ba', avatar: 'https://via.placeholder.com/50' },
        { name: 'Phượng', avatar: 'https://via.placeholder.com/50' },
        { name: 'Hoàng và Gấm', avatar: 'https://via.placeholder.com/50' },
        { name: 'Trần Công Phúc', avatar: 'https://via.placeholder.com/50' },
      ]
    };
  }
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
