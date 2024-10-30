<template>
  <div class="chat-view p-3">
    <h5 v-if="currentChat">{{ currentChat.name }}</h5>
    <div class="messages" ref="messagesContainer">
      <div
        v-for="(message, index) in currentChat?.messages"
        :key="index"
        class="message"
        :class="{ sent: message.isSentByUser }"
      >
        <span>{{ message.timestamp }} - {{ message.text }}</span>
      </div>
    </div>

    <div class="input-group mt-3">
      <input
        v-model="newMessage"
        @keyup.enter="sendMessage"
        type="text"
        class="form-control"
        placeholder="Send..."
      />
      <button @click="sendMessage" class="btn btn-primary">Gửi</button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { format } from "date-fns";

export default {
  computed: {
    ...mapGetters(["currentChat"]),
  },
  data() {
    return {
      newMessage: "",
    };
  },
  methods: {
    sendMessage() {
      if (this.newMessage.trim()) {
        const timestamp = format(new Date(), "HH:mm:ss");
        this.$store.dispatch("sendMessage", {
          text: this.newMessage,
          timestamp,
        });
        this.newMessage = "";
        this.scrollToBottom(); // Cuộn xuống
      }
    },
    scrollToBottom() {
      this.$nextTick(() => {
        const container = this.$refs.messagesContainer;
        container.scrollTop = container.scrollHeight; // Cuộn xuống cuối
      });
    },
  },
};
</script>

<style scoped>
.message {
  margin: 5px 0;
  padding: 10px; /* Thêm khoảng đệm */
  border-radius: 5px; /* Bo góc cho tin nhắn */
}

.sent {
  background-color: #d1e7dd; /* Màu nền cho tin nhắn của người dùng */
  text-align: right; /* Căn phải cho tin nhắn của người dùng */
}
</style>
