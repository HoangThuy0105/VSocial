<template>
  <div class="chat-message flex-grow-1 p-3 overflow-auto" ref="messagesContainer">
    <div
      v-for="(message, index) in messages"
      :key="index"
      :class="['message', message.isSentByUser ? 'sent' : 'received']"
    >
      <p class="message-content">{{ message.text }}</p>
      <span class="timestamp">{{ message.timestamp }}</span>
    </div>
  </div>
</template>


<script>
import { format } from 'date-fns';



export default {
  props: {
    messages: {
      type: Array,
      required: true,
    },
  },
  updated() {
    this.scrollToBottom();  
  },
  methods: {
    scrollToBottom() {
      this.$nextTick(() => {
        const container = this.$refs.messagesContainer;
        container.scrollTop = container.scrollHeight;  
      });
    },
    sendMessage() {
    if (this.newMessage.trim()) {
      const timestamp = format(new Date(), 'HH:mm:ss');  
      this.$store.dispatch('sendMessage', { text: this.newMessage, timestamp });
      this.newMessage = '';  
      this.scrollToBottom();  
    }
  },
  },
};
</script>


<style scoped>
.chat-message {
  max-height: calc(100vh - 150px);
  padding: 10px; /* Thêm khoảng đệm cho container */
}
.message {
  margin-bottom: 10px;
  display: flex; /* Để căn chỉnh timestamp */
  justify-content: space-between; /* Đẩy timestamp sang bên phải */
}
.sent .message-content {
  background-color: #007bff;
  color: white;
  border-radius: 10px;
  padding: 8px;
  max-width: 70%; /* Giới hạn chiều rộng */
  word-wrap: break-word; /* Đảm bảo không bị tràn */
}
.received .message-content {
  background-color: #f1f1f1;
  border-radius: 10px;
  padding: 8px;
  max-width: 70%; /* Giới hạn chiều rộng */
  word-wrap: break-word; /* Đảm bảo không bị tràn */
}
.timestamp {
  font-size: 0.75rem;
  color: #999;
  margin-left: 10px; /* Khoảng cách với nội dung tin nhắn */
  align-self: flex-end; /* Căn chỉnh timestamp ở phía dưới */
}
</style>
