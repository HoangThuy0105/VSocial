<template>
  <div v-if="currentChat" class="chat-view">
    <ChatHeader :chat="currentChat" />
    <ChatWindow :messages="currentChat.messages" />
    <ChatInput @send="handleSendMessage" />
  </div>
  <div v-else class="no-chat-message">
    <p>Please select a conversation.</p>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import ChatHeader from "../components/chat/ChatHeader.vue";
import ChatWindow from "../components/chat/ChatWindow.vue"; 
import ChatInput from "../components/chat/ChatInput.vue";

export default {
  name: "ChatView",
  components: {
    ChatHeader,
    ChatWindow, 
    ChatInput,
  },
  computed: {
    ...mapGetters(['chats', 'currentChat']),
    chatId() {
      return parseInt(this.$route.params.id); 
    },
  },
  watch: {
    chatId: {
      immediate: true,
      handler(newId) {
        const chat = this.chats.find((c) => c.id === newId);
        if (chat) {
          this.selectChat(chat);
        } else {
          console.error('Chat not found for ID:', newId);
        }
      },
    },
  },
  methods: {
    ...mapActions(['selectChat', 'sendMessage']),
    handleSendMessage(messageText) {
      if (messageText.trim()) {
        this.sendMessage(messageText);
      } else {
        alert("Please enter a message.");
      }
    },
  },
};
</script>

<style scoped>
.no-chat-message {
  text-align: center;
  color: #666;
  padding: 20px;
}
</style>
