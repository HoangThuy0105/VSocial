<template>
  <div v-if="currentChat" class="chat-view">
    <ChatHeader :chat="currentChat" />
    <ChatWindow :messages="currentChat.messages" />
    <ChatInput @send="handleSendMessage" />
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
      this.selectChat(chat); // Chọn chat
    },
  },
},

  methods: {
    ...mapActions(['selectChat', 'sendMessage']),
    handleSendMessage(messageText) {
      this.sendMessage(messageText);
    },
  },
};
</script>
