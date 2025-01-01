<template>
  <div class="container mt-4">
    <h3 class="mb-3">Friend request</h3>
    <div class="row">
      <div
        class="col-6 col-md-4 col-lg-3 mb-4"
        v-for="friend in friendRequests"
        :key="friend.id"
      >
        <div class="card h-100">
          <img
            :src="friend.avatar"
            alt="User avatar"
            class="card-img-top"
            :class="{ 'placeholder-avatar': !friend.avatar }"
          />
          <div class="card-body text-center">
            <h5 class="card-title">{{ friend.name }}</h5>
            <p class="card-text">
              <i class="fas fa-user-friends"></i>
              {{ friend.mutualFriends }} mutual friend
            </p>
            <button class="btn btn-success btn-sm me-2 text-white">
              Comfirm
            </button>
            <button class="btn btn-secondary btn-sm">Delete</button>
          </div>
        </div>
      </div>
    </div>
    <div class="text-center mt-3">
      <div class="text-center mt-3">
        <button
          class="btn btn-link fs-5 text-decoration-none text-success"
          style=""
        >
          See more
          <span style="font-size: 1.6em; vertical-align: middle">&#9662;</span>
        </button>
      </div>
    </div>
  </div>

  <hr class="custom-hr" />
</template>

<script>
export default {
  name: "FriendRequests",
  data() {
    return {
      friendRequests: [
        {
          id: 1,
          name: "user",
          mutualFriends: 48,
          avatar:
            "https://cdn.mobilecity.vn/mobilecity-vn/images/2024/03/hinh-nen-hoa.jpg.webp",
        },
        {
          id: 2,
          name: "user",
          mutualFriends: 12,
          avatar:
            "https://cdn.mobilecity.vn/mobilecity-vn/images/2024/03/hinh-nen-hoa.jpg.webp",
        },
        {
          id: 3,
          name: "user",
          mutualFriends: 3,
          avatar:
            "https://cdn.mobilecity.vn/mobilecity-vn/images/2024/03/hinh-nen-hoa.jpg.webp",
        },
        {
          id: 4,
          name: "user",
          mutualFriends: 75,
          avatar:
            "https://cdn.mobilecity.vn/mobilecity-vn/images/2024/03/hinh-nen-hoa.jpg.webp",
        },
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
        },
        {
          id: 7,
          name: "user",
          mutualFriends: 3,
          avatar:
            "https://cdn.mobilecity.vn/mobilecity-vn/images/2024/03/hinh-nen-hoa.jpg.webp",
        },
        {
          id: 8,
          name: "user",
          mutualFriends: 75,
          avatar:
            "https://cdn.mobilecity.vn/mobilecity-vn/images/2024/03/hinh-nen-hoa.jpg.webp",
        },
        {
          id: 9,
          name: "user",
          mutualFriends: 48,
          avatar:
            "https://cdn.mobilecity.vn/mobilecity-vn/images/2024/03/hinh-nen-hoa.jpg.webp",
        },
        {
          id: 10,
          name: "user",
          mutualFriends: 12,
          avatar:
            "https://cdn.mobilecity.vn/mobilecity-vn/images/2024/03/hinh-nen-hoa.jpg.webp",
        },
        {
          id: 11,
          name: "user",
          mutualFriends: 3,
          avatar:
            "https://cdn.mobilecity.vn/mobilecity-vn/images/2024/03/hinh-nen-hoa.jpg.webp",
        },
        {
          id: 12,
          name: "user",
          mutualFriends: 75,
          avatar:
            "https://cdn.mobilecity.vn/mobilecity-vn/images/2024/03/hinh-nen-hoa.jpg.webp",
        },
        {
          id: 13,
          name: "user",
          mutualFriends: 48,
          avatar:
            "https://cdn.mobilecity.vn/mobilecity-vn/images/2024/03/hinh-nen-hoa.jpg.webp",
        },
        {
          id: 14,
          name: "user",
          mutualFriends: 12,
          avatar:
            "https://cdn.mobilecity.vn/mobilecity-vn/images/2024/03/hinh-nen-hoa.jpg.webp",
        },
        {
          id: 15,
          name: "user",
          mutualFriends: 3,
          avatar:
            "https://cdn.mobilecity.vn/mobilecity-vn/images/2024/03/hinh-nen-hoa.jpg.webp",
        },
        {
          id: 16,
          name: "user",
          mutualFriends: 75,
          avatar:
            "https://cdn.mobilecity.vn/mobilecity-vn/images/2024/03/hinh-nen-hoa.jpg.webp",
        },
      ],
    };
  },
};
</script>

<style src="../../assets/css/style.css"></style>
