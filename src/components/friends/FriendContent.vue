<template>
  <div class="container mt-4">
    <h3 class="mb-3">Friend request</h3>
    <div class="row">
      <div class="col-6 col-md-4 col-lg-3 mb-4" v-for="friend in friendRequests" :key="friend.id">
        <div class="card h-100">
          <img v-if="friend.avatar == null"
            src="https://scontent.fdad1-4.fna.fbcdn.net/v/t1.30497-1/453178253_471506465671661_2781666950760530985_n.png?stp=dst-png_s148x148&_nc_cat=1&ccb=1-7&_nc_sid=40e2b2&_nc_ohc=t7g1DMhtyCMQ7kNvgG88pcZ&_nc_oc=Adgst3fzzSYsDBya6g65p-yi7FLQlTw8OL6ByUrJVcE-WOhCJ23RJuXkGzy1t8bOpKY&_nc_zt=24&_nc_ht=scontent.fdad1-4.fna&_nc_gid=ANkKsSDetUu7rninnf3ogbA&oh=00_AYAB9OH5ey6qZtqFjUacugL-ibFufG5EV1bmudnpttrZEg&oe=679DA8FA"
            alt="default avatar">
          <img v-if="friend.avatar != null" :src="friend.avatar" alt="User avatar" class="card-img-top"
            :class="{ 'placeholder-avatar': !friend.avatar }" />
          <div class="card-body text-center">
            <h5 class="card-title">{{ friend.username }}</h5>
            <p class="card-title">{{ friend.email }}</p>
            <!-- <p class="card-text">
              <i class="fas fa-user-friends"></i>
              {{ friend.mutualFriends }} mutual friend
            </p> -->
            <button @click="handleAcceptFriend({ senderId: friend.accountId })"
              class="btn btn-success btn-sm me-2 text-white">
              Comfirm
            </button>
            <button class="btn btn-secondary btn-sm">Delete</button>
          </div>
        </div>
      </div>
      <div v-if="friendRequests.length === 0" class="no-comment">
        <p style="font-weight: 500; margin-top: 24px;">Chưa có lời mời kết bạn nào</p>
      </div>
    </div>
    <!-- <div class="text-center mt-3">
      <div class="text-center mt-3">
        <button class="btn btn-link fs-5 text-decoration-none text-success" style="">
          See more
          <span style="font-size: 1.6em; vertical-align: middle">&#9662;</span>
        </button>
      </div>
    </div> -->
  </div>

  <hr class="custom-hr" />
</template>

<script>
import { getFriendRequest, acceptFriend } from "@/service/userService";
import { mapGetters } from "vuex";


export default {
  name: "FriendRequests",
  data() {
    return {
      friendRequests: [],
    };
  },
  computed: {
    ...mapGetters("auth", ["getAccountId"]),
  },
  methods: {
    async getFriendRequests() {
      const accountId = this.getAccountId;
      const response = await getFriendRequest(accountId);
      console.log(response);
      if (response && response.status === 200) {
        this.friendRequests = response.data.result;
      } else {
        console.log("Error");
      }
    },
    async handleAcceptFriend({ senderId }) {
      const receiverId = this.getAccountId
      const response = await acceptFriend({ senderId, receiverId })
      if (response && response.status === 200) {
        this.getFriendRequests()
      } else {
        console.log('Thất bại, hãy thử lại')
      }
    }
  },
  mounted() {
    this.getFriendRequests()
  }
};
</script>

<style src="../../assets/css/style.css"></style>
