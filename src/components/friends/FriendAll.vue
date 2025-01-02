<template>
  <div class="container mt-4">
    <h3 class="mb-3">All Friend</h3>
    <div class="row">
      <div class="col-6 col-md-4 col-lg-3 mb-4" v-for="friend in friendRequests" :key="friend.id">
        <div class="card h-100">
          <img :src="friend.avatar" alt="User avatar" class="card-img-top"
            :class="{ 'placeholder-avatar': !friend.avatar }" />
          <div class="card-body text-center">
            <h5 class="card-title">{{ friend.name }}</h5>
            <p class="card-text">
              <i class="fas fa-user-friends"></i> {{ friend.mutualFriends }} bạn
              chung
            </p>
            <button class="btn btn-primary btn-sm me-2">Xác nhận</button>
            <button class="btn btn-secondary btn-sm">Xóa</button>
          </div>
        </div>
      </div>
    </div>
    <div class="text-center mt-3">
      <button class="btn btn-link fs-5">Xem thêm</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "FriendRequests",
  data() {
    return {
      friendRequests: [
        {
          id: 5,
          name: "user",
          mutualFriends: 48,
          avatar:
            "https://cdn.mobilecity.vn/mobilecity-vn/images/2024/03/hinh-nen-hoa.jpg.webp",
        },
        {
          id: 6,
          name: "user",
          mutualFriends: 12,
          avatar:
            "https://cdn.mobilecity.vn/mobilecity-vn/images/2024/03/hinh-nen-hoa.jpg.webp",
        }
      ],
    };
  },
};
</script>

<style scoped>
.placeholder-avatar {
  background-color: #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #888;
}

.card-img-top {
  width: 100%;
  height: auto;
  max-height: 180px;
  object-fit: cover;
}
</style>
