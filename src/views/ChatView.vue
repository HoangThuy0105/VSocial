<template>
  <div class="chat-view">
  <!-- <div v-if="currentChat" class="chat-view"> -->
    <ChatHeader :chat="currentChat" />
    <ChatWindow :chats="chats" />
    <ChatInput @send="handleSendMessage" />
  </div>
  <!-- <div v-else>
    <p>Please select a conversation.</p>
  </div> -->
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
    ...mapGetters('chat', ['chats', 'currentChat']),
  },
  
  // watch: {
  //   chatId: {
  //     immediate: true,
  //     handler(newId) {
  //       console.log('Current chat ID:', newId);  
  //       const chat = this.chats.find(c => c.id === newId);
  //       console.log('Found chat:', chat);  
  //       if (chat) {
  //         this.selectChat(chat);
  //       } else {
  //         console.error('Chat not found for ID:', newId);
  //       }
  //     },
  //   },
  // },

  methods: {
    ...mapActions(['selectChat', 'sendMessage']),
    handleSendMessage(messageText) {
      this.sendMessage(messageText);
    },
  },
};
</script>