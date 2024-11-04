<template>
  <div :class="[isDarkMode ? 'dark-mode' : 'light-mode']">
    <div
      class="chat-message flex-grow-1 p-3 overflow-auto"
      :class="isDarkMode ? 'header-dark' : 'header-light'"
      ref="messagesContainer"
    >
      <div
        v-for="(message, index) in messages"
        :key="index"
        :class="['message', message.isSentByUser ? 'sent' : 'received']"
      >
        <p class="message-content">{{ message.text }}</p>
        <div class="d-flex justify-content-center">
          <span class="timestamp">{{ message.timestamp }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { format } from "date-fns";
import { mapState } from "vuex";

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
        const timestamp = format(new Date(), "HH:mm:ss");
        this.$store.dispatch("sendMessage", {
          text: this.newMessage,
          timestamp,
        });
        this.newMessage = "";
        this.scrollToBottom();
      }
    },
  },
  computed: {
    ...mapState("mode", {
      isDarkMode: (state) => state.darkMode,
    }),
  },
};
</script>

<style scoped>
/* General dark and light mode styling */
.dark-mode {
  background-color: #2c2c2c;
  color: #e0e0e0;
}
.light-mode {
  background-color: #ffffff;
  color: #333;
}

/* Chat message container */
.chat-message {
  max-height: calc(100vh - 150px);
  padding: 10px;
  overflow-y: scroll; /* Để nội dung vẫn cuộn được */
}
.chat-message::-webkit-scrollbar {
  display: none;
}

/* Message bubble styling */
.message {
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
}

.sent .message-content {
  background-color: #007bff;
  color: white;
  border-radius: 10px;
  padding: 8px;
  max-width: 70%;
  word-wrap: break-word;
}

.received .message-content {
  background-color: #f1f1f1;
  color: #333;
  border-radius: 10px;
  padding: 8px;
  max-width: 70%;
  word-wrap: break-word;
}
 
.dark-mode .sent .message-content {
  background-color: #0056b3;
}

.dark-mode .received .message-content {
  background-color: #444;
  color: #e0e0e0;
} 
.timestamp {
  font-size: 0.75rem;
  color: #999;
  margin-left: 10px;
  align-self: flex-end;
}

.dark-mode .timestamp {
  color: #ccc;
}
</style>
