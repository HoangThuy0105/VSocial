<template>
  <div class="chat-view p-3">
    <h5 v-if="currentChat">{{ currentChat.name }}</h5>
    <div class="messages">
      <div v-for="(message, index) in currentChat?.messages" :key="index" class="message" :class="{ 'sent': message.isSentByUser }">
        <span>{{ message.timestamp }} - {{ message.text }}</span>
      </div>
    </div>
    <div class="input-group mt-3">
      <input v-model="newMessage" @keyup.enter="sendMessage" type="text" class="form-control" placeholder="Send..." />
      <button @click="sendMessage" class="btn btn-primary">Gửi</button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['currentChat']),
  },
  data() {
    return {
      newMessage: '', 
    };
  },
  methods: {
    sendMessage() {
      if (this.newMessage.trim()) {
        this.$store.dispatch('sendMessage', this.newMessage); 
        this.newMessage = ''; // Reset input
      }
    },
  },
};
</script>

<style scoped>
.messages {
  max-height: 300px; /* Giới hạn chiều cao tin nhắn */
  overflow-y: auto; /* Thêm cuộn dọc nếu cần */
}

.message {
  margin: 5px 0;
}

.sent {
  font-weight: bold; /* Nhấn mạnh tin nhắn của người dùng */
}
</style>
