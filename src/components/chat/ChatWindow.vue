<template>
  <div :class="[isDarkMode ? 'dark-mode' : 'light-mode']">
    <div v-if="chats" class="chat-window d-flex flex-column" :class="isDarkMode ? 'header-dark' : 'header-light'">
      <div class="chat-messages flex-grow-1 overflow-auto">
        <ChatMessage :messages="chats.messages" />
      </div>
      <ChatInput :class="[isDarkMode ? 'chat-input-dark' : 'chat-input-light']" @sendMessage="handleSendMessage" />
    </div>
  </div>
</template>

<script>
import ChatMessage from './ChatMessage.vue';
import ChatInput from './ChatInput.vue';
import { mapActions, mapState } from 'vuex';

export default {
  components: {
    ChatMessage,
    ChatInput,
  },
  props: {
    chats: {
      type: Object,
      required: true,
    },
  },
  computed: {
    ...mapState("mode", {
      isDarkMode: (state) => state.darkMode,
    }),
  },
  methods: {
    ...mapActions(['sendMessage']),
    handleSendMessage(messageText) {
      this.sendMessage(messageText);
    },
  },
};
</script>

<style scoped>
.chat-window {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.chat-messages {
  flex-grow: 1;
  overflow-y: auto;  
}

/* Styles cho light mode */
.chat-input-light {
  position: sticky;
  bottom: 0;
  background-color: white;  
  padding: 10px;
  border-top: 1px solid #ccc;  
}

/* Styles cho dark mode */
.chat-input-dark {
  position: sticky;
  bottom: 0;
  background-color: #333; /* Màu nền cho dark mode */
  padding: 10px;
  border-top: 1px solid #555; /* Màu viền cho dark mode */
  color: white;
}
</style>
