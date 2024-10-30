<template>
  <div class="chat-message flex-grow-1 p-3 overflow-auto">
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
export default {
  props: {
    messages: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.chat-message {
  max-height: calc(100vh - 150px);
}
.message {
  margin-bottom: 10px;
}
.sent .message-content {
  background-color: #007bff;
  color: white;
  border-radius: 10px;
  padding: 8px;
}
.received .message-content {
  background-color: #f1f1f1;
  border-radius: 10px;
  padding: 8px;
}
.timestamp {
  font-size: 0.75rem;
  color: #999;
}
</style>
